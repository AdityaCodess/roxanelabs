import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { PRODUCTS } from "@/lib/mock-data";
import { ArrowLeft, CheckCircle, Download, ShieldCheck } from "lucide-react";
import Link from "next/link";

// Helper icon component
function BoxIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  );
}

// 1. Make the function ASYNC
// 2. Type params as a Promise
export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 3. Await the params before using them
  const { slug } = await params;

  // 4. Now search using the resolved slug
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#products"
          className="inline-flex items-center text-sm text-gray-500 hover:text-pharma-blue transition"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Catalog
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          {/* LEFT: Visual Section */}
          <div
            className={`lg:w-1/3 p-12 flex items-center justify-center relative overflow-hidden ${
              product.color.split(" ")[0]
            } bg-opacity-30`}
          >
            <div className="absolute -right-12 -bottom-12 opacity-10 transform rotate-12">
              <product.icon size={300} />
            </div>

            <div className="relative z-10 text-center">
              <div
                className={`w-48 h-48 mx-auto rounded-full bg-white shadow-2xl flex items-center justify-center mb-6 ${
                  product.color.split(" ")[1]
                }`}
              >
                <product.icon size={80} />
              </div>
              <span className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur text-xs font-bold uppercase tracking-widest text-slate-600 border border-slate-200">
                {product.category}
              </span>
            </div>
          </div>

          {/* RIGHT: Details Section */}
          <div className="lg:w-2/3 p-8 lg:p-12">
            <div className="border-b border-slate-100 pb-8 mb-8">
              <h1 className="text-4xl font-bold text-slate-800 mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-gray-500 font-medium">
                {product.composition}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Indications
                  </h3>
                  <ul className="space-y-2">
                    {product.indications?.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-slate-700 font-medium"
                      >
                        <CheckCircle
                          size={18}
                          className="text-green-500 mr-3"
                        />
                        {item}
                      </li>
                    ))}
                    {!product.indications && (
                      <li className="text-gray-400 italic">
                        Detailed indications available in dossier.
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Packing
                  </h3>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-center text-slate-700 font-mono">
                    <BoxIcon />
                    <span className="ml-3">
                      {product.packing || "Standard Export Packing"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Quality Standards
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-3 py-1 bg-blue-50 text-pharma-blue text-xs font-bold rounded border border-blue-100">
                      IP/BP/USP
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-pharma-blue text-xs font-bold rounded border border-blue-100">
                      WHO-GMP
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-pharma-blue text-xs font-bold rounded border border-blue-100">
                      ISO 9001:2015
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-pharma-light rounded-xl border border-blue-100">
                  <h4 className="font-bold text-pharma-blue mb-1 flex items-center">
                    <ShieldCheck size={18} className="mr-2" />
                    Bio-Equivalence
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Full clinical study reports and dissolution profiles
                    available for regulatory submission.
                  </p>
                  <button className="w-full py-3 bg-white text-pharma-blue border border-pharma-blue font-bold rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
                    <Download size={18} />
                    Request Dossier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
