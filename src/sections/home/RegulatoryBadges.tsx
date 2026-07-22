"use client";

import { Award, ShieldCheck, CheckCircle, FileCheck } from "lucide-react";

export default function RegulatoryBadges() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {/* Stamp 1: WHO-GMP */}
        <div className="flex items-center gap-4 p-2">
          <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0B1D3A] font-black text-xs shrink-0 shadow-2xs">
            <ShieldCheck size={24} className="text-[#0B1D3A]" />
          </div>
          <div>
            <span className="text-xs font-bold text-gray-900 uppercase block tracking-wider">
              WHO-GMP
            </span>
            <span className="text-[11px] text-gray-500 font-medium block leading-tight mt-0.5">
              Certified Production Partner Network
            </span>
          </div>
        </div>

        {/* Stamp 2: ISO 9001:2015 */}
        <div className="flex items-center gap-4 p-2 pt-4 md:pt-2 md:pl-6">
          <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 font-black text-xs shrink-0 shadow-2xs">
            <Award size={24} className="text-emerald-700" />
          </div>
          <div>
            <span className="text-xs font-bold text-gray-900 uppercase block tracking-wider">
              ISO 9001:2015
            </span>
            <span className="text-[11px] text-gray-500 font-medium block leading-tight mt-0.5">
              Quality Management System Approved
            </span>
          </div>
        </div>

        {/* Stamp 3: NABL Lab Audited */}
        <div className="flex items-center gap-4 p-2 pt-4 md:pt-2 md:pl-6">
          <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0B1D3A] font-black text-xs shrink-0 shadow-2xs">
            <FileCheck size={24} className="text-[#0B1D3A]" />
          </div>
          <div>
            <span className="text-xs font-bold text-gray-900 uppercase block tracking-wider">
              NABL Audited
            </span>
            <span className="text-[11px] text-gray-500 font-medium block leading-tight mt-0.5">
              Independent HPLC Assay Testing
            </span>
          </div>
        </div>

        {/* Stamp 4: FSSAI Approved */}
        <div className="flex items-center gap-4 p-2 pt-4 md:pt-2 md:pl-6">
          <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 font-black text-xs shrink-0 shadow-2xs">
            <CheckCircle size={24} className="text-amber-700" />
          </div>
          <div>
            <span className="text-xs font-bold text-gray-900 uppercase block tracking-wider">
              FSSAI Compliant
            </span>
            <span className="text-[11px] text-gray-500 font-medium block leading-tight mt-0.5">
              Food Grade Nutraceuticals Line
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
