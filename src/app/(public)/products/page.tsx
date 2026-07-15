import Navbar from "@/components/layout/Navbar";
import { PRODUCTS } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header */}
      <div className="bg-pharma-blue pt-32 pb-16 text-center text-white px-4">
        <h1 className="text-4xl font-bold">Complete Product Catalog</h1>
        <p className="mt-4 text-blue-100">
          Browse our range of high-quality formulations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <Link
              href={`/products/${product.slug}`}
              key={product.id}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <div
                  className={`h-40 flex items-center justify-center ${
                    product.color.split(" ")[0]
                  } bg-opacity-50`}
                >
                  <product.icon
                    size={64}
                    className={product.color.split(" ")[1]}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-pharma-blue transition">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center text-pharma-teal font-bold text-sm">
                    View Composition{" "}
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
