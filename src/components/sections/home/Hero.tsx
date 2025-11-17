import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Blob (The "Modern" touch) */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 transform translate-x-1/3 -translate-y-1/4">
        <div className="w-[800px] h-[800px] bg-pharma-teal rounded-full blur-3xl filter" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-pharma-blue text-sm font-semibold">
              <span className="w-2 h-2 bg-pharma-teal rounded-full mr-2 animate-pulse"></span>
              WHO-GMP Certified Manufacturing
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Precision in <br />
              <span className="text-pharma-blue">Every Formulation</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg">
              Delivering reliable, high-quality pharmaceutical solutions since
              19XX. Partnering with global leaders to ensure health accessible
              to all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-8 py-4 bg-pharma-blue text-white rounded-lg font-bold hover:bg-blue-900 transition group">
                View Product Catalog
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition"
                  size={20}
                />
              </button>
              <button className="flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold hover:bg-gray-50 transition">
                Partner With Us
              </button>
            </div>

            {/* Trust Badges (Static for now) */}
            <div className="pt-8 flex items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-pharma-teal" /> ISO
                9001:2015
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-pharma-teal" /> WHO-GMP
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-pharma-teal" /> 100%
                Quality Check
              </div>
            </div>
          </div>

          {/* Right: Visual Placeholder (We will add 3D/Image later) */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Placeholder for Lab Image */}
              <div className="bg-slate-200 h-[500px] w-full flex items-center justify-center text-gray-400"></div>

              {/* Floating Stats Card */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg border border-slate-100">
                <p className="text-sm text-gray-500">
                  Daily Production Capacity
                </p>
                <p className="text-2xl font-bold text-pharma-blue">
                  2,000,000+
                </p>
                <p className="text-xs text-pharma-teal">Tablets & Capsules</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
