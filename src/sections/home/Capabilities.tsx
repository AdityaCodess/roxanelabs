"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Pill,
  FlaskConical,
  Activity,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const PORTFOLIO_CATEGORIES = [
  { id: "ALL", label: "All Formulations" },
  { id: "ANTIBIOTICS", label: "Acute / Antibiotics" },
  { id: "CHRONIC", label: "Cardio & Gastro" },
  { id: "SYRUPS", label: "Pediatric & Syrups" },
  { id: "TOPICALS", label: "Pain Relief & OTC" },
];

const SAMPLE_FORMULATIONS = [
  {
    id: 1,
    brand: "Diffuse SP Tab",
    comp: "Paracetamol 325mg + Serratiopeptidase 15mg",
    cat: "ANTIBIOTICS",
    form: "Tablets",
    pack: "10x10 Alu-Alu",
    stock: "In Stock",
  },
  {
    id: 2,
    brand: "Diffuse MR Tab",
    comp: "Paracetamol 650mg + Serratiopeptidase 15mg",
    cat: "ANTIBIOTICS",
    form: "Tablets",
    pack: "10x6 Alu-Alu",
    stock: "Fast Moving",
  },
  {
    id: 3,
    brand: "Aciway DSR Tab",
    comp: "Amlodipine 5mg + Telmisartan 40mg",
    cat: "CHRONIC",
    form: "Capsules",
    pack: "10x10 Alu-Alu",
    stock: "In Stock",
  },
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredItems =
    activeTab === "ALL"
      ? SAMPLE_FORMULATIONS
      : SAMPLE_FORMULATIONS.filter((item) => item.cat === activeTab);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-8">
      {/* Header & Category Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div className="space-y-1">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Portfolio
          </h2>
          <p className="text-sm text-slate-600">
            Click a therapeutic segment below to inspect finished formulations,
            packaging specs, and stock availability.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
          {PORTFOLIO_CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition duration-150 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white text-slate-900 shadow-sm font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition duration-200 flex flex-col justify-between space-y-6 group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  {item.form}
                </span>
                <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200 flex items-center gap-1">
                  <CheckCircle2 size={12} /> {item.stock}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                {item.brand}
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                {item.comp}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>
                Packing:{" "}
                <strong className="text-slate-800 font-bold">
                  {item.pack}
                </strong>
              </span>
              <span className="text-pharma-teal">WHO-GMP Line</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="text-center pt-2">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 underline underline-offset-4"
        >
          <span>View Complete 20+ Product Catalog & Technical Dossiers</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
