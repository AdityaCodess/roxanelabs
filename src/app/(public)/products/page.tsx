"use client";

import { useState } from "react";
import {
  Pill,
  FlaskConical,
  Syringe,
  Sparkles,
  CheckCircle2,
  Search,
  ShieldCheck,
} from "lucide-react";

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "RoxCip-500",
    category: "Tablets",
    comp: "Ciprofloxacin Hydrochloride IP 500mg",
    packing: "10x10 Alu-Alu",
    stock: "In Stock",
  },
  {
    id: 2,
    name: "RoxAmox-CV",
    category: "Tablets",
    comp: "Amoxicillin 500mg + Potassium Clavulanate 125mg",
    packing: "10x6 Alu-Alu",
    stock: "In Stock",
  },
  {
    id: 3,
    name: "RoxCof-DX",
    category: "Syrups",
    comp: "Dextromethorphan HBr 10mg + Chlorpheniramine 2mg (100ml)",
    packing: "100ml Bottle",
    stock: "In Stock",
  },
  {
    id: 4,
    name: "RoxPant-40",
    category: "Tablets",
    comp: "Pantoprazole Gastro-resistant 40mg",
    packing: "10x10 Alu-Alu",
    stock: "In Stock",
  },
  {
    id: 5,
    name: "RoxPod-200",
    category: "Tablets",
    comp: "Cefpodoxime Proxetil IP 200mg",
    packing: "10x10 Alu-Alu",
    stock: "Fast Moving",
  },
  {
    id: 6,
    name: "RoxGel-O",
    category: "External",
    comp: "Diclofenac Diethylamine + Linseed Oil + Menthol Gel",
    packing: "30g Tube",
    stock: "In Stock",
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = SAMPLE_PRODUCTS.filter((item) => {
    const matchesCategory = activeTab === "All" || item.category === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.comp.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-blue-500 selection:text-white">
      {/* Clean Standardized Header Banner */}
      <div className="bg-slate-900 text-white pt-20 pb-20 text-center px-4 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-md text-xs font-semibold text-slate-300 tracking-wide shadow-xs">
            <ShieldCheck size={14} className="text-teal-400" />
            <span>WHO-GMP Certified Commercial Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Formulation Catalog
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore our WHO-GMP certified pharmaceutical portfolio available for
            third-party manufacturing and bulk distribution[cite: 1].
          </p>
        </div>
      </div>

      {/* Interactive Catalog Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-8">
        {/* Search and Category Filter Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-3.5 top-3.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search formulation or salt..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-900 outline-hidden text-sm font-medium transition"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {["All", "Tablets", "Syrups", "External"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === tab
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    {prod.category}
                  </span>
                  <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200 flex items-center gap-1">
                    <CheckCircle2 size={12} /> {prod.stock}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">
                  {prod.name}
                </h3>
                <p className="text-xs text-gray-500 mt-2 font-medium leading-relaxed">
                  {prod.comp}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>
                  Packing:{" "}
                  <span className="text-slate-500 font-normal">
                    {prod.packing}
                  </span>
                </span>
                <span className="text-slate-900 font-extrabold">
                  GMP Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
