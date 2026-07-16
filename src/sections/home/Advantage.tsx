"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Truck,
  ArrowRight,
  Building2,
  Store,
} from "lucide-react";

export default function Advantage() {
  const [viewMode, setViewMode] = useState<"HOSPITAL" | "RETAIL">("HOSPITAL");

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-10">
      <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white border border-slate-800">
        {/* Header with Interactive Perspective Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-slate-800 pb-8">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Tailored Supply Chain Execution
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We structure our pricing, batch documentation, and packaging
              formats to match your specific operational model. Select your
              institution type below:
            </p>
          </div>

          {/* Institutional vs Retail Segmented Toggle */}
          <div className="bg-slate-800 p-1.5 rounded-xl flex items-center gap-1 border border-slate-700 self-start md:self-auto shrink-0">
            <button
              onClick={() => setViewMode("HOSPITAL")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                viewMode === "HOSPITAL"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building2
                size={16}
                className={
                  viewMode === "HOSPITAL" ? "text-blue-600" : "text-slate-400"
                }
              />
              <span>Hospital Dispensaries</span>
            </button>

            <button
              onClick={() => setViewMode("RETAIL")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                viewMode === "RETAIL"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Store
                size={16}
                className={
                  viewMode === "RETAIL" ? "text-teal-600" : "text-slate-400"
                }
              />
              <span>Retail Chemists & Stores</span>
            </button>
          </div>
        </div>

        {/* Dynamic Cards: HOSPITAL VIEW */}
        {viewMode === "HOSPITAL" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-white">
                100% Audit-Ready Compliance
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We provide complete institutional documentation with every
                consignment, including NABL-accredited HPLC assay reports,
                dissolution profiles, and statutory batch records.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <FileText size={20} />
              </div>
              <h3 className="text-base font-bold text-white">
                Hospital Procurement Rates
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct wholesale contracts tailored for hospital formularies and
                central purchase committees, bypassing regional distributor
                markups to maximize dispensary budgets.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <Truck size={20} />
              </div>
              <h3 className="text-base font-bold text-white">
                Critical Stock Buffers
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We maintain dedicated emergency buffers for our hospital
                partners to guarantee zero stock-outs on essential life-saving
                antibiotics, IV fluids, and cardiac prescriptions.
              </p>
            </div>
          </div>
        ) : (
          /* Dynamic Cards: RETAIL CHEMIST VIEW */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-white">
                High-Margin Fast Movers
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our catalog focuses heavily on high-demand, high-turnover acute
                prescriptions and OTC pain relievers that generate steady daily
                footfall and excellent retail profitability.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <FileText size={20} />
              </div>
              <h3 className="text-base font-bold text-white">
                Tamper-Evident Packaging
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Premium Alu-Alu and blister packaging designed to withstand
                extreme temperature and humidity changes on retail shelves while
                ensuring zero foil leakage or discoloration.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                <Truck size={20} />
              </div>
              <h3 className="text-base font-bold text-white">
                Rapid Stock Replenishment
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Flexible MOQ (Minimum Order Quantity) structures and reliable
                regional dispatch ensure your chemist shop can restock
                fast-moving brands without locking up excess working capital.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
          <span>
            Current Active Mode:{" "}
            <strong className="text-white uppercase">
              {viewMode === "HOSPITAL"
                ? "Institutional Formulary Supply"
                : "Retail Chemist Distribution"}
            </strong>
          </span>
          <Link
            href="/contact"
            className="text-slate-300 hover:text-white inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>
              Request{" "}
              {viewMode === "HOSPITAL" ? "Hospital Procurement" : "Wholesaler"}{" "}
              Price List
            </span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
