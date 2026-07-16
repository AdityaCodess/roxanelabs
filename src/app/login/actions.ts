"use server";

import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import AuditLog from "@/models/AuditLog";

export async function loginAction(prevState: any, formData: FormData) {
  try {
    await connectToDatabase();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return { success: false, error: "All fields are required." };
    }

    // 1. Locate User by Indexed Email Field
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return { success: false, error: "Invalid credentials provided." };
    }

    // 2. Password Check
    if (user.passwordHash !== password) {
      return { success: false, error: "Invalid credentials provided." };
    }

    // 3. Document Activity to the CEO Dashboard Audit Ledger
    await AuditLog.create({
      actor: user._id,
      actorRole: user.role,
      actionType: "SYSTEM_LOGIN",
      targetResource: `User Session: ${user.email}`,
      description: `Successful system login authenticated via gateway.`,
    });

    // Return authorization packet back to client view
    return {
      success: true,
      role: user.role,
      name: user.name,
      isKycApproved: user.isKycApproved,
    };
  } catch (error: any) {
    console.error("Authentication Failure:", error);
    return { success: false, error: "An internal server error occurred." };
  }
}

export async function registerAction(prevState: any, formData: FormData) {
  try {
    await connectToDatabase();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const companyName = formData.get("companyName") as string;
    const gstNumber = formData.get("gstNumber") as string;
    const password = formData.get("password") as string;
    const requestedRole = formData.get("role") as string;

    if (!name || !email || !password) {
      return { success: false, error: "Primary authentication credentials missing." };
    }

    // Check if identity collision exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return { success: false, error: "An account with this email already exists." };
    }

    // Enforce role assignment or fall back safely to external distributor tier
    const finalRole = ["OPERATIONS_ADMIN", "EXECUTIVE_CEO"].includes(requestedRole) 
      ? requestedRole 
      : "DISTRIBUTOR";

    // Auto-approve administrative system accounts for quick development testing
    const autoApproveKyc = finalRole !== "DISTRIBUTOR";

    // Create the persistent user record
    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      passwordHash: password,
      role: finalRole,
      companyName: finalRole === "DISTRIBUTOR" ? companyName : undefined,
      gstNumber: finalRole === "DISTRIBUTOR" ? gstNumber : undefined,
      isKycApproved: autoApproveKyc,
    });

    // Document new account generation to the Audit Trail
    await AuditLog.create({
      actor: newUser._id,
      actorRole: newUser.role,
      actionType: "KYC_APPROVAL",
      targetResource: `Account Identity: ${newUser.email}`,
      description: `New user registration compiled. Account structural assignment: ${finalRole}.`,
    });

    return { 
      success: true, 
      message: finalRole === "DISTRIBUTOR" 
        ? "Application submitted successfully! Awaiting manual KYC approval." 
        : "Account established instantly. Proceeding to authentication portal."
    };
  } catch (error: any) {
    console.error("Registration Processing Failure:", error);
    return { success: false, error: "Failed to compile corporate partnership profile." };
  }
}