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
      {/* Clean Standardized Header Banner */}
      <div className="bg-slate-900 text-white pt-20 pb-20 text-center px-4 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-md text-xs font-semibold text-slate-300 tracking-wide shadow-xs">
            <ShieldCheck size={14} className="text-teal-400" />
            <span>Corporate Identity & Heritage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Decade of Trust
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Founded with a vision to make healthcare accessible, Roxane
            Laboratories has evolved into one of the most trusted healthcare
            providers in pharmaceutical formulations.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-12">
        {/* History & Founders Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200">
              Our History
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              From Humble Beginnings to Global Standards
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
              Roxane Laboratories was established in 2014 by Mr. Jitender Pal
              Singh and Mr. Vikram Monga, driven by a singular mission: quality
              above all else. Starting as a small manufacturing unit, we have
              expanded into a state-of-the-art facility in Baddi, Himachal
              Pradesh.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
              Today, we specialize in tablets, capsules, liquid orals, and
              external preparations, serving partners across India and emerging
              global markets. Our commitment to WHO-GMP standards ensures that
              every batch leaving our factory is safe, effective, and reliable.
            </p>
          </div>

          {/* Visual Placeholder */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl h-80 border border-slate-800 flex flex-col items-center justify-center text-center p-6 text-white shadow-lg">
            <div className="p-4 bg-slate-800 rounded-xl mb-4 border border-slate-700 text-teal-400">
              <Building2 size={48} className="animate-pulse" />
            </div>
            <span className="text-base font-bold text-white tracking-wide">
              Roxane Laboratories Baddi Plant
            </span>
            <span className="text-xs text-slate-400 mt-1 font-medium">
              Plot No. 12, EPIP Phase-1, Jharmajri, Baddi
            </span>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg space-y-4 hover:border-slate-300 transition">
            <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Uncompromising Quality
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              Every formulation undergoes rigorous analytical testing in our
              in-house QC laboratories to meet IP/BP/USP pharmacopeial
              guidelines.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg space-y-4 hover:border-slate-300 transition">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              WHO-GMP Certified
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              Our Baddi manufacturing plant is audited and approved for
              third-party contract manufacturing and international export supply
              chains.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg space-y-4 hover:border-slate-300 transition">
            <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center font-bold">
              <Globe2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Pan-India Reach
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              We empower over 500+ distributors, hospital networks, and PCD
              pharma franchises with timely dispatch and transparent logistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
