"use client";

export default function Telemetry() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
      <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        <div className="p-2 space-y-1">
          <div className="text-3xl font-bold text-slate-900 tracking-tight">
            20+
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
            Proprietary Formulations
          </span>
          <span className="text-xs text-slate-400 block">
            Tablets, Syrups & Topicals
          </span>
        </div>

        <div className="p-2 space-y-1 pt-6 lg:pt-2">
          <div className="text-3xl font-bold text-slate-900 tracking-tight">
            100%
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
            Lab Tested & Verified
          </span>
          <span className="text-xs text-slate-400 block">
            NABL Audited COA with Every Batch
          </span>
        </div>

        <div className="p-2 space-y-1 pt-6 lg:pt-2">
          <div className="text-3xl font-bold text-slate-900 tracking-tight">
            Hospital & Retail
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
            Optimized Packaging
          </span>
          <span className="text-xs text-slate-400 block">
            Alu-Alu, Blister & PET Formats
          </span>
        </div>

        <div className="p-2 space-y-1 pt-6 lg:pt-2">
          <div className="text-3xl font-bold text-slate-900 tracking-tight">
            Pan-India
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
            Direct Dispatch
          </span>
          <span className="text-xs text-slate-400 block">
            Reliable Stock Replenishment
          </span>
        </div>
      </div>
    </section>
  );
}
