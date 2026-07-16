"use server";

import nodemailer from "nodemailer";
import { connectToDatabase } from "@/lib/db";
import Inquiry from "@/models/Inquiry";
import { inquirySchema } from "@/lib/validations/contact-form";

type OtpEntry = {
  code: string;
  expiresAt: number; // Timestamp in milliseconds
};

declare global {
  var otpCache: Map<string, OtpEntry> | undefined;
}

// Preserve cache across Next.js development hot-reloads
const otpCache = global.otpCache || new Map<string, OtpEntry>();
if (!global.otpCache) global.otpCache = otpCache;

// Helper to clean out expired tokens from RAM automatically
function cleanExpiredOtps() {
  const now = Date.now();
  for (const [email, entry] of otpCache.entries()) {
    if (now > entry.expiresAt) {
      otpCache.delete(email);
    }
  }
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === "true" || true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function requestInquiryOtpAction(prevState: any, formData: FormData) {
  try {
    cleanExpiredOtps();

    // Convert raw FormData into a standard JavaScript object
    const rawData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // Execute Zod 4 Sanitization & Validation
    const validationResult = inquirySchema.safeParse(rawData);

    if (!validationResult.success) {
      const errorMessage = validationResult.error.issues[0].message;
      return { success: false, step: "INPUT", error: errorMessage };
    }

    const cleanData = validationResult.data;
    const targetEmail = cleanData.email.toLowerCase();

    // Generate a secure 6-digit numerical OTP
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Store in Node RAM Cache (Expires strictly in 10 minutes)
    otpCache.set(targetEmail, {
      code: generatedCode,
      expiresAt: Date.now() + 10 * 60 * 1000,
    });

    // Verify SMTP Configuration before attempting delivery
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return { 
        success: false, 
        step: "INPUT", 
        error: "SMTP Credentials missing in .env.local. Please configure your email server settings."
      };
    }

    // Shoot out Branded HTML Corporate Email via Nodemailer
    await transporter.sendMail({
      from: `"Roxane Laboratories Security" <${process.env.SMTP_USER}>`,
      to: targetEmail,
      subject: "🔒 Verify Your Corporate Inquiry — Roxane Laboratories",
      html: `
        <div style="font-family: Arial, sans-serif; max-w: 500px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #0f172a; padding: 24px; text-align: center; color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">ROXANE LABORATORIES</h2>
            <p style="margin: 4px 0 0; font-size: 12px; color: #38bdf8; text-transform: uppercase;">WHO-GMP Certified Manufacturing Facility</p>
          </div>
          <div style="padding: 32px 24px; color: #334155;">
            <p style="font-size: 16px; margin-top: 0;">Hello <strong>${cleanData.firstName} ${cleanData.lastName}</strong>,</p>
            <p style="font-size: 14px; line-height: 1.6; color: #64748b;">
              We received a request to submit a B2B inquiry regarding <strong>"${cleanData.subject}"</strong>. To verify your corporate identity and prevent spam, please enter the following one-time verification code:
            </p>
            <div style="margin: 28px 0; text-align: center;">
              <span style="display: inline-block; padding: 16px 32px; background-color: #f1f5f9; border: 2px dashed #cbd5e1; border-radius: 8px; font-size: 28px; font-weight: bold; letter-spacing: 6px; color: #0f172a; font-family: monospace;">
                ${generatedCode}
              </span>
            </div>
            <p style="font-size: 12px; color: #94a3b8; text-align: center; margin-bottom: 0;">
              ⏳ This verification token is valid for the next <strong>10 minutes</strong>. If you did not initiate this inquiry, please disregard this email.
            </p>
          </div>
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
            Plot No. 12, EPIP Phase-1, Jharmajri, Baddi, Himachal Pradesh (173205)
          </div>
        </div>
      `,
    });

    // Return strict success state without exposing the generated code
    return { 
      success: true, 
      step: "OTP_CHALLENGE", 
      message: `A 6-digit verification code has been dispatched to ${targetEmail}. Please check your inbox.`,
      verifiedPayload: JSON.stringify(cleanData) 
    };
  } catch (error: any) {
    console.error("Nodemailer Dispatch Error:", error);
    return { success: false, step: "INPUT", error: "Failed to dispatch email via SMTP. Check your mail server settings." };
  }
}


export async function verifyInquiryOtpAction(prevState: any, formData: FormData) {
  try {
    cleanExpiredOtps();

    const userEnteredCode = formData.get("otpCode") as string;
    const payloadString = formData.get("verifiedPayload") as string;

    if (!userEnteredCode || !payloadString) {
      return { success: false, step: "OTP_CHALLENGE", error: "Verification token missing. Please try again." };
    }

    const cleanData = JSON.parse(payloadString);
    const targetEmail = cleanData.email.toLowerCase();

    // 1. Fetch from In-Memory Node Cache (No Database Query!)
    const cachedRecord = otpCache.get(targetEmail);

    if (!cachedRecord) {
      return { 
        success: false, 
        step: "OTP_CHALLENGE", 
        error: "Verification code has expired or was not requested. Please restart the inquiry.",
        verifiedPayload: payloadString 
      };
    }

    if (cachedRecord.code !== userEnteredCode.trim()) {
      return { 
        success: false, 
        step: "OTP_CHALLENGE", 
        error: "Invalid 6-digit verification code. Please check your inbox and try again.",
        verifiedPayload: payloadString 
      };
    }

    // 2. OTP Verified! Connect to MongoDB ONLY now to save the real inquiry
    await connectToDatabase();

    await Inquiry.create({
      firstName: cleanData.firstName,
      lastName: cleanData.lastName,
      email: cleanData.email,
      phone: cleanData.phone,
      subject: cleanData.subject,
      message: cleanData.message,
      status: "UNREAD",
    });

    // 3. Delete from RAM immediately to prevent reuse
    otpCache.delete(targetEmail);

    return { 
      success: true, 
      step: "COMPLETED", 
      message: "Identity verified! Your inquiry has been secured in our database and routed to our sales leads." 
    };
  } catch (error: any) {
    console.error("OTP Verification Error:", error);
    return { success: false, step: "OTP_CHALLENGE", error: "Verification processing failed. Please try again." };
  }
}