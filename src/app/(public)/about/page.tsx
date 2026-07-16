"use client";

import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Building2,
  Globe2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-blue-500 selection:text-white">
      {/* Page Header Banner */}
      <div className="bg-pharma-blue text-white pt-20 pb-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Decade of Trust
        </h1>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Founded with a vision to make healthcare accessible, Roxane
          Laboratories has evolved into one of the most trusted healthcare
          providers in pharmaceutical formulations.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-12">
        {/* History & Founders Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-pharma-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Our History
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              From Humble Beginnings to Global Standards
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Roxane Laboratories was established in 2014 by Mr. Jitender Pal
              Singh and Mr. Vikram Monga, driven by a singular mission: quality
              above all else. Starting as a small manufacturing unit, we have
              expanded into a state-of-the-art facility in Baddi, Himachal
              Pradesh.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Today, we specialize in tablets, capsules, liquid orals, and
              external preparations, serving partners across India and emerging
              global markets. Our commitment to WHO-GMP standards ensures that
              every batch leaving our factory is safe, effective, and reliable.
            </p>
          </div>

          {/* Visual Placeholder */}
          <div className="lg:col-span-6 bg-slate-100 rounded-2xl h-80 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-6 text-slate-400">
            <Building2
              size={48}
              className="mb-3 text-slate-400 animate-pulse"
            />
            <span className="text-sm font-bold text-slate-600"></span>
            <span className="text-xs text-slate-400 mt-1">
              Plot No. 12, EPIP Phase-1, Jharmajri, Baddi
            </span>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-pharma-blue rounded-2xl flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Uncompromising Quality
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Every formulation undergoes rigorous analytical testing in our
              in-house QC laboratories to meet IP/BP/USP pharmacopeial
              guidelines.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg space-y-4">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              WHO-GMP Certified
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our Baddi manufacturing plant is audited and approved for
              third-party contract manufacturing and international export supply
              chains.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg space-y-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-bold">
              <Globe2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Pan-India Reach
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We empower over 500+ distributors, hospital networks, and PCD
              pharma franchises with timely dispatch and transparent logistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
