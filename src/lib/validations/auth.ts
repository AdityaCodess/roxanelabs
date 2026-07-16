import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "User ID or Email is required")
    .max(100, "Input is too long"),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(50, "Password is too long"),
});

export type LoginFormData = z.infer<typeof loginSchema>;