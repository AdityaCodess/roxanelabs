"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Lock, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate Network Request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock Auth Check (Replace with Real Auth later)
    const form = e.target as HTMLFormElement;
    const id = (form[0] as HTMLInputElement).value;
    const password = (form[1] as HTMLInputElement).value;

    if (id === "admin" && password === "admin") {
      router.push("/dashboard");
    } else {
      setError("Invalid Distributor ID or Password");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="p-6">
        <Link
          href="/"
          className="flex items-center text-gray-500 hover:text-pharma-blue transition"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl border border-slate-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-pharma-blue">
              Partner Portal
            </h1>
            <p className="text-gray-500 mt-2">
              Secure login for authorized distributors
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Distributor ID / Email
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-pharma-blue focus:ring-2 focus:ring-blue-50 outline-none transition"
                  placeholder="Enter ID"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-pharma-blue focus:ring-2 focus:ring-blue-50 outline-none transition"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center bg-red-50 py-2 rounded">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-pharma-blue text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition flex items-center justify-center"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "Access Dashboard"
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            <p>
              New Distributor?{" "}
              <Link
                href="/contact"
                className="text-pharma-teal hover:underline"
              >
                Apply for partnership
              </Link>
            </p>
            <p className="mt-2 text-xs">Credentials for Demo: admin / admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
