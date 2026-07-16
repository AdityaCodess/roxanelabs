"use client";

import { useState, useActionState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { requestInquiryOtpAction, verifyInquiryOtpAction } from "./actions";

export default function ContactPage() {
  // Step 1: Request OTP State
  const [requestState, dispatchRequest, isRequestPending] = useActionState(
    requestInquiryOtpAction,
    null,
  );
  // Step 2: Verify OTP State
  const [verifyState, dispatchVerify, isVerifyPending] = useActionState(
    verifyInquiryOtpAction,
    null,
  );

  const [currentStep, setCurrentStep] = useState<
    "INPUT" | "OTP_CHALLENGE" | "COMPLETED"
  >("INPUT");
  const [savedPayload, setSavedPayload] = useState<string>("");

  // Monitor OTP request response
  useEffect(() => {
    if (requestState?.success && requestState.step === "OTP_CHALLENGE") {
      setCurrentStep("OTP_CHALLENGE");
      if (requestState.verifiedPayload)
        setSavedPayload(requestState.verifiedPayload);
    }
  }, [requestState]);

  // Monitor OTP verification response
  useEffect(() => {
    if (verifyState?.success && verifyState.step === "COMPLETED") {
      setCurrentStep("COMPLETED");
    }
  }, [verifyState]);

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-blue-500 selection:text-white">
      {/* Page Header Banner */}
      <div className="bg-pharma-blue text-white pt-20 pb-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-4 text-blue-100 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Interested in Third-Party Manufacturing or Distribution? Reach out to
          our corporate team below.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: Corporate Office Info Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8 tracking-tight">
                Corporate Office
              </h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-pharma-teal shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">
                      Roxane Laboratories Pvt. Ltd.
                    </h3>
                    <p className="text-slate-400 mt-1 leading-relaxed">
                      Plot No. 12, EPIP Phase-1,
                      <br />
                      Jharmajri, Baddi,
                      <br />
                      Himachal Pradesh - 173205
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-pharma-teal shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Phone Support</h3>
                    <p className="text-slate-400 mt-1">
                      +91 98XXX XXXXX (Sales)
                    </p>
                    <p className="text-slate-400">+91 17XXX XXXXX (Plant)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-pharma-teal shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">
                      Email Communications
                    </h3>
                    <p className="text-slate-400 mt-1">info@roxane.com</p>
                    <p className="text-slate-400">export@roxane.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map Visualizer */}
            <div className="mt-12 pt-8 border-t border-slate-800">
              <div className="bg-slate-800 rounded-2xl h-44 overflow-hidden relative border border-slate-700 flex items-center justify-center text-center p-4">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div>
                  <MapPin
                    size={32}
                    className="text-pharma-teal mx-auto mb-2 animate-bounce"
                  />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    Baddi Manufacturing Cluster
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    GPS: 30.9578° N, 76.7914° E
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Dynamic Multi-Step Form Area */}
          <div className="lg:col-span-7 p-8 md:p-12 relative">
            {/* STEP 3: COMPLETED SUCCESS VIEW */}
            {currentStep === "COMPLETED" && (
              <div className="py-12 text-center space-y-4 bg-blue-50/50 rounded-2xl border border-blue-100 p-8 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Inquiry Secured & Verified
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  {verifyState?.message ||
                    "Thank you for reaching out. Your identity has been verified via OTP and your inquiry is saved to our corporate database."}
                </p>
                <button
                  onClick={() => {
                    setCurrentStep("INPUT");
                  }}
                  className="mt-4 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-black transition shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            )}

            {/* STEP 2: OTP CHALLENGE VIEW */}
            {currentStep === "OTP_CHALLENGE" && (
              <div className="py-6 space-y-6 animate-in slide-in-from-right duration-300">
                <div className="flex items-center gap-2 text-pharma-blue font-bold text-sm bg-blue-50 w-max px-3 py-1 rounded-full border border-blue-100">
                  <ShieldCheck size={16} className="text-green-600" />
                  <span>2-Step Verification Active</span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Verify Corporate Identity
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    To prevent spam and SQL/NoSQL injections, please enter the
                    6-digit verification code sent to your email inbox.
                  </p>
                </div>

                <form action={dispatchVerify} className="space-y-6">
                  <input
                    type="hidden"
                    name="verifiedPayload"
                    value={savedPayload}
                  />

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Enter 6-Digit OTP Code
                    </label>
                    <input
                      name="otpCode"
                      type="text"
                      maxLength={6}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-300 focus:border-pharma-blue focus:ring-4 focus:ring-blue-50 outline-none transition text-center font-mono text-xl font-bold tracking-[0.5em] text-slate-900"
                      placeholder="••••••"
                    />
                  </div>

                  {verifyState?.error && (
                    <div className="p-3.5 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-2">
                      <AlertCircle size={16} />
                      <span>{verifyState.error}</span>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setCurrentStep("INPUT")}
                      className="px-5 py-3.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition flex items-center justify-center gap-1.5"
                    >
                      <ArrowLeft size={16} />
                      <span>Edit Data</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isVerifyPending}
                      className="flex-1 bg-pharma-blue text-white py-3.5 rounded-xl font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-900/20 disabled:opacity-50"
                    >
                      {isVerifyPending ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <span>Verify & Log Inquiry</span>
                          <CheckCircle2 size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 1: INITIAL INPUT FORM VIEW */}
            {currentStep === "INPUT" && (
              <div className="animate-in fade-in duration-300">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      Send us a Message
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      We usually reply within 24 business hours.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200 flex items-center gap-1">
                    <ShieldCheck size={14} className="text-green-600" />
                    Zod Protected
                  </span>
                </div>

                <form action={dispatchRequest} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        First Name
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pharma-blue focus:ring-4 focus:ring-blue-50 outline-none transition text-sm font-medium"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Last Name
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pharma-blue focus:ring-4 focus:ring-blue-50 outline-none transition text-sm font-medium"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pharma-blue focus:ring-4 focus:ring-blue-50 outline-none transition text-sm font-medium"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Contact Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pharma-blue focus:ring-4 focus:ring-blue-50 outline-none transition text-sm font-medium"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pharma-blue focus:ring-4 focus:ring-blue-50 outline-none transition text-sm font-medium bg-white"
                    >
                      <option value="Inquiry for Third Party Manufacturing">
                        Inquiry for Third Party Manufacturing
                      </option>
                      <option value="Distributorship Application">
                        Distributorship Application
                      </option>
                      <option value="Export & Global Distribution">
                        Export & Global Distribution
                      </option>
                      <option value="QC & Regulatory Dossier Request">
                        QC & Regulatory Dossier Request
                      </option>
                      <option value="Other Business Query">
                        Other Business Query
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pharma-blue focus:ring-4 focus:ring-blue-50 outline-none transition text-sm font-medium resize-none"
                      placeholder="Tell us about your requirements, formulation types, or estimated quantities..."
                    ></textarea>
                  </div>

                  {requestState?.error && (
                    <div className="p-3.5 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-2">
                      <AlertCircle size={16} />
                      <span>{requestState.error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isRequestPending}
                    className="w-full bg-pharma-blue text-white py-4 rounded-xl font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-900/20 disabled:opacity-50"
                  >
                    {isRequestPending ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span>Verify & Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
