"use client";
import Link from "next/link";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/mock-data";

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Logic: Filter the products array based on the state
  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory);

  return (
    <section className="py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-pharma-blue sm:text-4xl">
            Pharmaceutical Formulations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Manufactured in our WHO-GMP certified facility under strict quality
            controls.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-pharma-blue text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link
              href={`/products/${product.slug}`}
              key={product.id}
              className="block"
            >
              <div className="group relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Icon Badge */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${product.color}`}
                >
                  <product.icon size={24} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-pharma-blue transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Hover Action */}
                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    View Dossier
                  </span>
                  <button className="p-2 bg-pharma-light rounded-full text-pharma-blue group-hover:bg-pharma-blue group-hover:text-white transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State (If no products found) */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No products found in this category yet.
          </div>
        )}

        <div className="mt-16 text-center">
          <button className="px-8 py-3 border-2 border-pharma-blue text-pharma-blue font-bold rounded-lg hover:bg-blue-50 transition">
            Download Full Product List (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
