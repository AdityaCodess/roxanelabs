import { z } from "zod";

// Strict regex pattern allowing international and Indian phone numbers while blocking script injections
const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10,14}$/;

export const inquirySchema = z.object({
  firstName: z
    .string({ error: "First name is required." }) // Zod 4 uses the unified 'error' param
    .trim()
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name cannot exceed 50 characters.")
    .regex(/^[a-zA-Z\s.-]+$/, "First name contains invalid characters."),
  
  lastName: z
    .string({ error: "Last name is required." })
    .trim()
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name cannot exceed 50 characters.")
    .regex(/^[a-zA-Z\s.-]+$/, "Last name contains invalid characters."),
  
  email: z
    .string({ error: "Corporate email is required." })
    .trim()
    .toLowerCase()
    .email("Please provide a valid corporate email address.")
    .max(100, "Email cannot exceed 100 characters."),
  
  phone: z
    .string({ error: "Contact number is required." })
    .trim()
    .regex(phoneRegex, "Please provide a valid 10 to 14 digit contact number."),
  
  subject: z
    .string()
    .trim()
    .max(100, "Subject is too long.")
    .default("General Inquiry"),
  
  message: z
    .string({ error: "Message is required." })
    .trim()
    .min(10, "Please provide at least 10 characters detailing your formulation requirements.")
    .max(1000, "Message cannot exceed 1000 characters to prevent buffer overflow.")
});

export type InquiryFormData = z.infer<typeof inquirySchema>;