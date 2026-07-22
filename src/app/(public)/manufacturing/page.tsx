"use client";

import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Truck,
  ArrowRight,
  Layers,
  Clock,
  Package,
  Award,
} from "lucide-react";

export default function ManufacturingPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-teal-500 selection:text-white">
      {/* Clean Standardized Header Banner (Matches Homepage 100%) */}
      <div className="bg-slate-900 text-white pt-20 pb-20 text-center px-4 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-md text-xs font-semibold text-slate-300 tracking-wide shadow-xs">
            <ShieldCheck size={14} className="text-teal-400" />
            <span>Excise-Free Baddi Production Cluster</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            WHO-GMP Production & Quality Network
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Roxane Laboratories aggregates automated, audited manufacturing
            lines in Baddi, Himachal Pradesh. We provide commercial drug brands
            and hospital formularies with standardized batch production,
            independent NABL assay verification, and statutory packaging
            compliance.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-12">
        {/* Section 1: Industrial Capacity & Cleanroom Specs Table */}
        <div className="bg-white rounded-xl p-6 sm:p-10 shadow-md border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
              Infrastructure Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Automated Cleanroom Facilities in Himachal Pradesh
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Our partner facilities operate under strict AHU (Air Handling
              Unit) Class-100,000 cleanroom zoning to eliminate
              cross-contamination risks. Equipped with high-speed rotary
              compression machines, automated granulation, and online blister
              packaging lines, our network guarantees uniform clinical dosage
              across every commercial batch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                <span>1,00,000+ Sq. Ft. GMP Floor Area</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                <span>In-House Micro & Chemical QC Labs</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                <span>Zero-Discharge ETP Compliance</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                <span>Alu-Alu, Blister & PET Syrup Lines</span>
              </div>
            </div>
          </div>

          {/* Concrete Production Figures Box */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-xl space-y-6 border border-slate-800 shadow-lg">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Network Production Capacity
              </span>
              <span className="text-sm font-semibold text-teal-400">
                Daily Audited Output
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex justify-between items-center">
                <span className="text-slate-300 font-medium">
                  Tablets & Capsules
                </span>
                <span className="font-bold text-white font-mono">
                  25,00,000 Units / Day
                </span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex justify-between items-center">
                <span className="text-slate-300 font-medium">
                  Liquid Orals & Syrups
                </span>
                <span className="font-bold text-white font-mono">
                  50,000 Bottles / Day
                </span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex justify-between items-center">
                <span className="text-slate-300 font-medium">
                  Ointments & Topicals
                </span>
                <span className="font-bold text-white font-mono">
                  35,000 Tubes / Day
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: The 4-Stage Batch Release Protocol */}
        <div className="space-y-6 pt-4">
          <div className="max-w-2xl space-y-1">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Standard 4-Stage Batch Release Protocol
            </h2>
            <p className="text-sm text-slate-600">
              How we manage third-party formulation, packaging design, and
              laboratory quality control from contract to dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3 relative hover:border-slate-300 transition">
              <span className="text-2xl font-black text-slate-200 absolute top-4 right-4">
                01
              </span>
              <h3 className="text-base font-bold text-slate-900 pr-8">
                Formulation & Dossier
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Selection from 300+ approved IP/BP/USP salts. Our technical team
                verifies formulation stability, active pharmaceutical ingredient
                (API) compatibility, and statutory drug approval dossiers[cite:
                4].
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3 relative hover:border-slate-300 transition">
              <span className="text-2xl font-black text-slate-200 absolute top-4 right-4">
                02
              </span>
              <h3 className="text-base font-bold text-slate-900 pr-8">
                Foil & Cylinder Artwork
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Our in-house branding desk formats tamper-evident Alu-Alu foil
                prints, carton layouts, and PET bottle labels, ensuring 100%
                compliance with statutory drug labeling laws.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3 relative hover:border-slate-300 transition">
              <span className="text-2xl font-black text-slate-200 absolute top-4 right-4">
                03
              </span>
              <h3 className="text-base font-bold text-slate-900 pr-8">
                Cleanroom Batch Run
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Production executes in Class-100,000 GMP zones. High-speed
                rotary compression and automated liquid filling lines operate
                under rigorous environmental temperature and humidity
                monitoring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3 relative hover:border-slate-300 transition">
              <span className="text-2xl font-black text-slate-200 absolute top-4 right-4">
                04
              </span>
              <h3 className="text-base font-bold text-slate-900 pr-8">
                NABL Testing & Release
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                No batch is released without passing independent NABL-accredited
                HPLC assay and dissolution testing. Finished goods dispatch with
                full Certificate of Analysis (COA) documentation.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Commercial Terms & MOQ Matrix */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Standard Commercial Terms for Third-Party & Wholesale Orders[cite:
              4]
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Transparent operational parameters for hospital procurement boards
              and regional distributor contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Package size={18} className="text-teal-600" />
                <span>Minimum Order Quantity (MOQ)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6 font-medium">
                <strong>Tablets & Capsules:</strong> 50,000 to 1,00,000 Units
                per batch.
                <br />
                <strong>Liquid Syrups & Suspensions:</strong> 3,000 to 5,000
                Bottles.
                <br />
                <strong>Ointments & Gels:</strong> 3,000 Tubes.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Clock size={18} className="text-blue-600" />
                <span>Production Lead Times</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6 font-medium">
                <strong>New Formulation / Artwork:</strong> 25 to 30 Days
                (including cylinder engraving and approval).
                <br />
                <strong>Repeat Commercial Batches:</strong> 15 to 20 Days from
                confirmed purchase order.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <FileCheck size={18} className="text-purple-600" />
                <span>Statutory Compliance</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6 font-medium">
                All consignments billed from our excise-advantaged Baddi depots.
                Comprehensive drug test reports (COA) and GST tax invoices
                accompany every physical shipment.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA (Updated to solid slate-900 to match the site theme) */}
        <div className="bg-slate-900 rounded-xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-md">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold">
              Initiate a Production Query or Check Stock
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Contact our sales desk to verify existing finished formulation
              stock or request wholesale price lists for your medical store or
              hospital dispensary.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3.5 rounded-lg text-sm transition shrink-0 flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Submit B2B Inquiry</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
