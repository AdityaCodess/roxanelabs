"use client";

import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Truck,
  ArrowRight,
  CheckCircle,
  Building2,
  Store,
} from "lucide-react";

export default function Advantage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-10">
      {/* Clean Corporate Section Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
            Supply Chain Reliability
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
            Why Hospitals & Chemists Rely on Our Distribution
          </h2>
          <p className="text-sm text-slate-600">
            We eliminate middleman bottlenecks and quality guesswork for
            institutional healthcare providers and retail pharmacies across
            India.
          </p>
        </div>
        <div className="text-xs font-semibold text-slate-700 bg-slate-100 px-3.5 py-2 rounded border border-slate-200 self-start md:self-auto shrink-0 flex items-center gap-2">
          <CheckCircle size={14} className="text-emerald-600" />
          <span>Direct Depot-to-Store Supply</span>
        </div>
      </div>

      {/* Grounded 3-Column Logistics & Compliance Grid (No neon glow, no AI SaaS gimmicks) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1: Audit & Compliance */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B1D3A] font-bold">
            <ShieldCheck size={20} />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            100% Batch COA Audit Trail
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every physical consignment dispatched to your hospital or retail
            shop is accompanied by an independent NABL-accredited Certificate of
            Analysis (COA) verifying HPLC chemical assay and dissolution
            standards.
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
            <span>Standard: IP / BP / USP Pharmacopeia</span>
          </div>
        </div>

        {/* Box 2: Direct Wholesale Margins */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
            <FileText size={20} />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Direct Wholesale Billing
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We bill directly from our excise-advantaged Baddi depots to hospital
            procurement committees and retail chemists. Removing multi-tier
            super-stockist markups provides competitive margins for your
            dispensary.
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
            <span>Billing: GST Compliant Tax Invoices</span>
          </div>
        </div>

        {/* Box 3: Stock Buffers & Transit */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 font-bold">
            <Truck size={20} />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Zero-Stockout Buffer Buffer
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We maintain dedicated safety buffers for fast-moving acute
            antibiotics, cardiac, and chronic medications. Consignments move via
            humidity-controlled transit to protect Alu-Alu and blister foil
            integrity.
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
            <span>Logistics: Pan-India Express Transit</span>
          </div>
        </div>
      </div>

      {/* Target Buyer Split Box (Grounded, plain English breakdown without toggle toys) */}
      <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
        <div className="space-y-2 md:pr-6">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Building2 size={18} />
            <span>For Hospital Dispensaries & Institutions</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            We support hospital formularies with institutional pack sizes, rapid
            tender processing, and emergency stock reservation for critical
            inpatient intensive care prescriptions.
          </p>
        </div>

        <div className="space-y-2 pt-6 md:pt-0 md:pl-6">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
            <Store size={18} />
            <span>For Retail Chemists & Medical Stores</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            High-margin fast movers, tamper-evident leak-proof packaging, and
            flexible wholesale MOQ structures that allow chemist shops to
            replenish shelves without locking up cash flow.
          </p>
        </div>
      </div>

      {/* Section Footer Link */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-600 pt-2">
        <span>
          Quality Protocol:{" "}
          <strong className="text-slate-900">
            WHO-GMP Audited Partner Facilities
          </strong>
        </span>
        <Link
          href="/products"
          className="text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 underline underline-offset-4 font-bold"
        >
          <span>View 300+ Commercial Formulations & Packaging Specs</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
