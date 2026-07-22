"use client";

import { useState, useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Lock,
  User,
  Building,
  FileSpreadsheet,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { loginAction, registerAction } from "./actions";

export default function AuthGatewayPage() {
  const router = useRouter();
  const [isLoginView, setIsLoginView] = useState(true);

  // Next.js 15 Server Action Hooks
  const [loginState, dispatchLogin, isLoginPending] = useActionState(
    loginAction,
    null,
  );
  const [registerState, dispatchRegister, isRegisterPending] = useActionState(
    registerAction,
    null,
  );

  // Monitor server response parameters for custom dynamic dashboard routing
  useEffect(() => {
    if (loginState?.success && loginState.role) {
      const targetRole = loginState.role;

      // Direct users to routes matching the existing folder structure in VS Code
      if (targetRole === "EXECUTIVE_CEO") {
        router.push("/dashboard"); // Main dashboard root overview
      } else if (targetRole === "OPERATIONS_ADMIN") {
        router.push("/dashboard/inventory"); // Admin inventory workspace
      } else {
        router.push("/dashboard/orders"); // Distributor orders workspace
      }
      router.refresh();
    }
  }, [loginState, router]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Structural Header Navigation */}
      <div className="p-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Home Network
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="bg-white w-full max-w-lg p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-100 transition-all">
          {/* Section Dynamic Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {isLoginView
                ? "Partner Portal Access"
                : "Partnership Application"}
            </h1>
            <p className="text-sm text-gray-500 mt-2 font-medium">
              {isLoginView
                ? "Secure pipeline access for active distributors & executives"
                : "Register plant profiles or apply for B2B distribution channels"}
            </p>
          </div>

          {/* Core Login Flow Interface */}
          {isLoginView ? (
            <form action={dispatchLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Corporate Email Address
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3.5 top-3.5 text-gray-400"
                    size={18}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-100 outline-none transition text-sm font-medium"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Security Access Key
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3.5 top-3.5 text-gray-400"
                    size={18}
                  />
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-100 outline-none transition text-sm font-medium"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {loginState?.error && (
                <div className="p-3.5 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold text-center">
                  {loginState.error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoginPending}
                className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-black transition-colors flex items-center justify-center text-sm shadow-md disabled:opacity-50"
              >
                {isLoginPending ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  "Authenticate Credentials"
                )}
              </button>

              <div className="text-center text-sm pt-4 border-t border-slate-100 text-gray-500 font-medium">
                New B2B Partner?{" "}
                <button
                  type="button"
                  onClick={() => setIsLoginView(false)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Apply for partnership
                </button>
              </div>
            </form>
          ) : (
            /* Core Registration Flow Interface */
            <form action={dispatchRegister} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Legal Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-900 outline-none text-sm font-medium"
                    placeholder="Aditya Kumar"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Corporate Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-900 outline-none text-sm font-medium"
                    placeholder="aditya@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Account Allocation Type
                </label>
                <div className="relative">
                  <Layers
                    className="absolute left-3.5 top-3 text-gray-400"
                    size={16}
                  />
                  <select
                    name="role"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-900 outline-none text-sm font-medium bg-white appearance-none"
                  >
                    <option value="DISTRIBUTOR">
                      B2B Authorized Distributor (Requires KYC)
                    </option>
                    <option value="OPERATIONS_ADMIN">
                      Plant Operations Admin (Internal Team)
                    </option>
                    <option value="EXECUTIVE_CEO">
                      Executive C-Suite / CEO Cockpit
                    </option>
                  </select>
                </div>
              </div>

              {/* Dynamic contextual fields displayed specifically for Distributor applicants */}
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block">
                  Distributor Verification Data
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                      <Building size={14} /> Firm Name
                    </label>
                    <input
                      name="companyName"
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-slate-900 outline-none text-xs bg-white font-medium"
                      placeholder="Roxane Logistics Pvt Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                      <FileSpreadsheet size={14} /> GSTIN Identification
                    </label>
                    <input
                      name="gstNumber"
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-slate-900 outline-none text-xs bg-white font-medium uppercase"
                      placeholder="06AAAAA1111A1Z1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Choose Security Key
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-900 outline-none text-sm font-medium"
                  placeholder="••••••••"
                />
              </div>

              {registerState?.error && (
                <div className="p-3.5 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold text-center">
                  {registerState.error}
                </div>
              )}

              {registerState?.success && (
                <div className="p-4 bg-green-50 border border-green-100 text-green-700 rounded-xl text-xs font-semibold text-center flex flex-col items-center gap-1">
                  <ShieldCheck
                    size={20}
                    className="text-green-600 animate-bounce"
                  />
                  {registerState.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isRegisterPending}
                className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-black transition-colors flex items-center justify-center text-sm shadow-md disabled:opacity-50"
              >
                {isRegisterPending ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  "Submit Structural Registration"
                )}
              </button>

              <div className="text-center text-sm pt-4 border-t border-slate-100 text-gray-500 font-medium">
                Already registered?{" "}
                <button
                  type="button"
                  onClick={() => setIsLoginView(true)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Return to Portal Login
                </button>
              </div>
            </form>
          )}

          {/* Quick Demo Guidance Footer Box */}
          <div className="mt-6 bg-blue-50/50 rounded-2xl p-4 border border-blue-100/40 text-center text-xs text-slate-500">
            <span className="font-bold text-blue-900 uppercase tracking-wider block mb-1 text-[10px]">
              Testing Environment Information
            </span>
            Creating a non-distributor account issues immediate database
            persistence. Test multi-tier route redirects smoothly inside this
            panel.
          </div>
        </div>
      </div>
    </div>
  );
}
