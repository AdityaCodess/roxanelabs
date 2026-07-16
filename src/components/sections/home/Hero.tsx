"use client";

import Link from "next/link";
import { Network, ArrowRight, CheckCircle2, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36 border-b border-slate-800">
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-teal-400 shadow-sm animate-in fade-in duration-500">
          <Network size={14} className="text-teal-400 animate-pulse" />
          <span>WHO-GMP Certified Strategic Partner Network</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight max-w-5xl mx-auto leading-[1.1] text-white">
          Precision Pharmaceutical <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
            Manufacturing & Aggregation
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Roxane Laboratories bridges high-capacity, WHO-GMP compliant Baddi
          infrastructure with premier clinical brands. We deliver scalable
          third-party contract manufacturing, rigorous NABL/HPLC lab
          verification, and rapid Pan-India dispatch.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/products"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-blue-900/30 transition flex items-center justify-center gap-2 text-sm"
          >
            <span>Explore Formulation Catalog</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/login"
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition flex items-center justify-center gap-2 text-sm"
          >
            <Users size={16} className="text-teal-400" />
            <span>Partner Portal Access</span>
          </Link>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs font-semibold text-slate-400 border-t border-slate-800/80 max-w-4xl mx-auto">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-teal-400" /> IP / BP / USP
            Compliant
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-teal-400" /> Excise-Free
            Baddi Cluster
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-teal-400" /> 100%
            Independent Lab Audit
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-teal-400" /> Strict AHU
            Cleanroom Zones
          </span>
        </div>
      </div>
    </section>
  );
}
