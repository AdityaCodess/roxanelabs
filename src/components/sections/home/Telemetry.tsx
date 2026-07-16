"use client";

export default function Telemetry() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        <div className="p-4 space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Formulation Portfolio
          </span>
          <div className="text-3xl md:text-4xl font-black text-slate-900 font-mono">
            300+
          </div>
          <span className="text-xs font-medium text-teal-600 block">
            Approved Commercial Salts
          </span>
        </div>

        <div className="p-4 space-y-1 pt-6 lg:pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Network Floor Area
          </span>
          <div className="text-3xl md:text-4xl font-black text-slate-900 font-mono">
            100k+
          </div>
          <span className="text-xs font-medium text-teal-600 block">
            Sq. Ft. Audited Cleanrooms
          </span>
        </div>

        <div className="p-4 space-y-1 pt-6 lg:pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Daily Production Output
          </span>
          <div className="text-3xl md:text-4xl font-black text-slate-900 font-mono">
            2.5M+
          </div>
          <span className="text-xs font-medium text-teal-600 block">
            Tablets & Capsules / Day
          </span>
        </div>

        <div className="p-4 space-y-1 pt-6 lg:pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Clinical QC Accuracy
          </span>
          <div className="text-3xl md:text-4xl font-black text-slate-900 font-mono">
            99.98%
          </div>
          <span className="text-xs font-medium text-teal-600 block">
            HPLC & Assay Precision
          </span>
        </div>
      </div>
    </section>
  );
}
