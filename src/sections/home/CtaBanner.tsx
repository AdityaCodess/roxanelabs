"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Ready to Partner With Our Distribution Network?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Contact our B2B sales leads today to request current stock
            availability lists, wholesale pricing structures, or regional
            distributorship opportunities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <Link
            href="/contact"
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3.5 rounded-lg transition duration-150 flex items-center justify-center gap-2 text-sm text-center shadow-sm"
          >
            <span>Submit B2B Inquiry</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/login"
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-6 py-3.5 rounded-lg transition duration-150 flex items-center justify-center gap-2 text-sm text-center"
          >
            <span>Partner Portal Login</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
