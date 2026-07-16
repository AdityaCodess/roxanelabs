"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Search,
  Sparkles,
} from "lucide-react";

const TOP_MOLECULES = ["Diffuse SP Tab", "Aciaway DSR Tab", "Diffuse MR Tab"];

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/products");
    }
  };

  const handlePillClick = (salt: string) => {
    router.push(`/products?search=${encodeURIComponent(salt)}`);
  };

  return (
    <section className="bg-slate-900 text-white pt-20 pb-24 md:pt-28 md:pb-32 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Clinical Assurance Tag */}
        <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-md text-xs font-semibold text-slate-300 tracking-wide shadow-xs">
          <ShieldCheck size={14} className="text-pharma-teal" />
          <span>WHO-GMP & NABL Audited Production Partners</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Direct Pharmaceutical Supply for Hospitals & Medical Stores
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Roxane Laboratories formulates and distributes high-stability
          proprietary medications across India. Built for institutional
          dispensaries and retail chemists with ready commercial stock.
        </p>

        {/* Interactive Quick-Search Bar */}
        <div className="max-w-2xl mx-auto pt-2">
          <form
            onSubmit={handleSearch}
            className="relative flex items-center shadow-md"
          >
            <Search
              className="absolute left-4 text-slate-400 pointer-events-none"
              size={20}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search salt, brand, or composition (e.g., Amoxicillin)..."
              className="w-full pl-12 pr-36 md:pr-44 py-4 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium outline-hidden border-2 border-transparent focus:border-pharma-teal transition shadow-inner truncate"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 md:px-5 py-2.5 rounded-lg transition duration-150 flex items-center gap-1.5 shadow-xs shrink-0 cursor-pointer"
            >
              <span>Check Stock</span>
              <ArrowRight size={14} />
            </button>
          </form>

          {/* Interactive Fast-Moving Molecule Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-500 flex items-center gap-1">
              <Sparkles size={12} className="text-amber-400" /> Fast-Moving
              Stock:
            </span>
            {TOP_MOLECULES.map((salt) => (
              <button
                key={salt}
                type="button"
                onClick={() => handlePillClick(salt)}
                className="bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 px-2.5 py-1 rounded-md text-[11px] transition duration-150 text-slate-300 cursor-pointer"
              >
                {salt}
              </button>
            ))}
          </div>
        </div>

        {/* Institutional Trust Footer */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs font-medium text-slate-400 border-t border-slate-800/80 max-w-3xl mx-auto">
          <span className="flex items-center gap-1.5">
            <CheckCircle size={15} className="text-pharma-teal" /> IP / BP / USP
            Pharmacopeial Standards
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle size={15} className="text-pharma-teal" /> Batch-Wise
            HPLC Lab COAs
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle size={15} className="text-pharma-teal" /> Direct
            Wholesale Pricing
          </span>
        </div>
      </div>
    </section>
  );
}
