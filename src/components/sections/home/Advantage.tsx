"use client";

import Link from "next/link";
import { ShieldCheck, FileText, Truck, ArrowRight } from "lucide-react";

export default function Advantage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-12">
      <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl space-y-4 relative z-10 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950/80 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
            The Asset-Light Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Why Scale Your Brand With Roxane Laboratories?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            In a rapidly evolving pharmaceutical market, building
            brick-and-mortar factories slows down growth. We act as your
            strategic manufacturing backbone, giving you instant access to
            institutional-grade Baddi infrastructure without capital
            expenditure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="bg-slate-800/80 border border-slate-700/80 p-8 rounded-2xl space-y-4 hover:border-slate-600 transition">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-white">
              Zero CapEx Expansion
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Launch new product lines and scale your commercial volume
              immediately without investing millions into cleanroom
              construction, machinery maintenance, or plant labor overhead.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 p-8 rounded-2xl space-y-4 hover:border-slate-600 transition">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
              <FileText size={24} />
            </div>
            <h3 className="text-lg font-bold text-white">
              Regulatory & Artwork Support
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our internal team manages statutory drug approvals, COA
              (Certificate of Analysis) generation, and foil artwork design to
              ensure 100% compliance with local and international drug laws.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 p-8 rounded-2xl space-y-4 hover:border-slate-600 transition">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold">
              <Truck size={24} />
            </div>
            <h3 className="text-lg font-bold text-white">
              Insured Pan-India Transit
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We coordinate humidity-controlled, tamper-evident logistics
              directly from our excise-free Baddi warehouses to your regional
              distribution hubs with complete batch tracking.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-400">
          <span>
            Standard Operating Procedure:{" "}
            <strong className="text-white">WHO-GMP / NABL Audited</strong>
          </span>
          <Link
            href="/manufacturing"
            className="text-teal-400 hover:underline inline-flex items-center gap-1"
          >
            <span>Inspect Our 4-Stage Manufacturing Protocol</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
