import { User } from "@/types/auth";

// 3 Enterprise Demo Accounts
export const MOCK_USERS: Record<string, { user: User; pass: string; redirect: string }> = {
  // 1. TIER 1: External Distributor
  distributor: {
    user: {
      id: "DIST-8842",
      name: "Apex Pharma Distributors",
      email: "distributor@roxane.com",
      role: "distributor",
      company: "Apex Healthcare Ltd.",
    },
    pass: "admin", // Simple for demo testing
    redirect: "/distributor",
  },

  // 2. TIER 2: Internal Operations Admin
  admin: {
    user: {
      id: "OPS-102",
      name: "Rajesh Sharma",
      email: "admin@roxane.com",
      role: "admin",
      company: "Roxane Laboratories (Plant 1)",
    },
    pass: "admin",
    redirect: "/admin",
  },

  // 3. TIER 3: Executive / CEO
  ceo: {
    user: {
      id: "EXEC-001",
      name: "Dr. Arvind Mehta",
      email: "ceo@roxane.com",
      role: "executive",
      company: "Roxane Laboratories Corporate",
    },
    pass: "admin",
    redirect: "/executive",
  },
};

/**
 * Simulates a secure DB lookup.
 * Returns the user object and their assigned route if credentials match.
 */
export function authenticateUser(idOrEmail: string, pass: string) {
  const cleanId = idOrEmail.toLowerCase().trim();
  const account = MOCK_USERS[cleanId];

  if (account && account.pass === pass) {
    return {
      success: true,
      user: account.user,
      redirectTo: account.redirect,
    };
  }

  return {
    success: false,
    error: "Invalid User ID or Password. Check your credentials.",
  };
}