"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-teal-900 rounded-3xl p-8 md:p-14 text-white shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="space-y-4 max-w-2xl relative z-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-300 bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
            Corporate Onboarding
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            Ready to Initiate Your Production Batch?
          </h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Connect with our B2B sales leads today to request clinical assay
            dossiers, verify product availability, or initiate custom
            third-party packaging design.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 relative z-10">
          <Link
            href="/contact"
            className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-8 py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm text-center"
          >
            <span>Submit Third-Party Inquiry</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/login"
            className="bg-slate-800/80 hover:bg-slate-800 border border-slate-600 text-white font-bold px-8 py-4 rounded-xl transition flex items-center justify-center gap-2 text-sm text-center"
          >
            <span>Existing Partner Portal</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
