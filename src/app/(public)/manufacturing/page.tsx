"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Factory,
  Cpu,
  Award,
  Layers,
  FlaskConical,
  Box,
  Activity,
  Truck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Gauge,
  Network,
} from "lucide-react";

// Dynamic Process Pipeline Data (Reframed for Partner Network Facilitation)
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Formulation Selection & Dossiers",
    subtitle: "Salt Profiling & Regulatory Alignment",
    desc: "Choose from our catalog of over 300+ approved IP/BP/USP pharmaceutical formulations. Our technical team coordinates initial compatibility checks, stability profiling, and statutory regulatory dossier alignment with our manufacturing partners.",
    badge: "Stage 01 // Technical Alignment",
    icon: FlaskConical,
    metricLabel: "Formulation Catalog",
    metricValue: "300+ Tested Salts",
    highlightColor: "from-blue-500 to-cyan-400",
  },
  {
    step: "02",
    title: "Packaging Design & Branding",
    subtitle: "Alu-Alu, Blister & Foil Customization",
    desc: "Our integrated branding studio designs high-impact cartons, tamper-evident blister foils, and bottle labels. We ensure 100% compliance with statutory drug labeling laws while giving your brand a distinct visual edge.",
    badge: "Stage 02 // Design Studio",
    icon: Box,
    metricLabel: "Packaging Formats",
    metricValue: "12+ Blister & Bottle Types",
    highlightColor: "from-teal-500 to-emerald-400",
  },
  {
    step: "03",
    title: "WHO-GMP Partner Production",
    subtitle: "Automated High-Speed Granulation & Compression",
    desc: "Production kicks off inside our audited partner facilities in Baddi. High-speed rotary compression machines and automated fluid bed dryers operate under strict Class-100,000 cleanroom HVAC zoning to guarantee zero cross-contamination.",
    badge: "Stage 03 // Network Plant Live",
    icon: Activity,
    metricLabel: "Network Batch Output",
    metricValue: "2.5 Million Units / Day",
    highlightColor: "from-indigo-500 to-purple-400",
  },
  {
    step: "04",
    title: "Independent QC Testing & Dispatch",
    subtitle: "NABL/HPLC Assay Analysis & Insured Logistics",
    desc: "No batch is released without passing rigorous analytical HPLC and dissolution testing in certified, independent QC laboratories. Once verified, finished goods are palletized and dispatched through humidity-controlled logistics networks.",
    badge: "Stage 04 // QC Audit & Transit",
    icon: Truck,
    metricLabel: "Quality Pass Rate",
    metricValue: "99.98% Batch Accuracy",
    highlightColor: "from-amber-500 to-orange-400",
  },
];

export default function ManufacturingPage() {
  // Tracks the active step as the user scrolls or hovers
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-blue-500 selection:text-white">
      {/* Page Header Banner */}
      <div className="bg-pharma-blue text-white pt-20 pb-16 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-pharma-teal bg-teal-950/80 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4 shadow-sm">
            <Network size={14} className="text-teal-400 animate-pulse" />
            Strategic WHO-GMP Partner Network
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Third-Party Manufacturing
          </h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Leverage our premier network of WHO-GMP certified manufacturing
            partner facilities in Baddi for scalable contract production, rapid
            batch turnaround, and uncompromising clinical precision.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-16">
        {/* Top Partner Network Specs Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Network Infrastructure
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Strategic Manufacturing Partners in Baddi
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We collaborate exclusively with excise-free, state-of-the-art
              manufacturing hubs in Himachal Pradesh. Our partner facilities are
              equipped with automated granulation, high-speed rotary
              compression, and advanced blister packaging lines operating under
              strict AHU (Air Handling Unit) cleanroom zones.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0" />
                <span>1,00,000+ Sq. Ft. Network Area</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0" />
                <span>Audited NABL & QC Labs</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0" />
                <span>Zero-Discharge ETP Compliance</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0" />
                <span>Automated Packaging Lines</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white p-8 md:p-10 rounded-3xl space-y-6 relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Gauge size={16} className="text-teal-400" /> Network Daily
                Capacity
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping"></span>
            </div>

            <div className="space-y-5 text-sm">
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex justify-between items-center">
                <span className="text-slate-300 font-medium">
                  Tablets & Capsules
                </span>
                <span className="font-mono font-bold text-teal-400 text-base">
                  2.5 Million / Day
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex justify-between items-center">
                <span className="text-slate-300 font-medium">
                  Liquid Orals & Syrups
                </span>
                <span className="font-mono font-bold text-teal-400 text-base">
                  50,000 Bottles / Day
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex justify-between items-center">
                <span className="text-slate-300 font-medium">
                  Ointments & External Gels
                </span>
                <span className="font-mono font-bold text-teal-400 text-base">
                  35,000 Tubes / Day
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DYNAMIC STICKY SCROLL TIMELINE ARCHITECTURE               */}
        {/* ========================================================= */}
        <div className="pt-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-pharma-blue bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              Collaborative Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              The 4-Stage Contract Pipeline
            </h2>
            <p className="text-sm text-gray-500">
              Scroll down or hover across the pipeline stages below to inspect
              our managed contract manufacturing and quality assurance protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            {/* LEFT COLUMN: Sticky Reactive Visualizer Console */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 transition-all duration-500">
              <div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
                {/* Background Dynamic Glow */}
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${activeStep.highlightColor} transition-all duration-700 pointer-events-none`}
                ></div>

                {/* Console Header */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-teal-400 bg-teal-950/80 border border-teal-500/30 px-3 py-1 rounded-lg">
                      {activeStep.badge}
                    </span>
                    <span className="text-2xl font-black font-mono text-slate-700">
                      {activeStep.step} / 04
                    </span>
                  </div>

                  {/* Reactive Icon Display */}
                  <div className="py-6 flex items-center justify-center">
                    <div
                      className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${activeStep.highlightColor} p-0.5 shadow-lg shadow-black/50 transition-all duration-500 transform scale-105`}
                    >
                      <div className="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center">
                        <ActiveIcon
                          size={48}
                          className="text-white animate-bounce"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Console Footer / Live Telemetry Box */}
                <div className="pt-6 border-t border-slate-800/80 relative z-10 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    {activeStep.metricLabel}
                  </span>
                  <div className="text-xl md:text-2xl font-black text-white font-mono tracking-tight">
                    {activeStep.metricValue}
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3">
                    <div
                      className={`h-full bg-gradient-to-r ${activeStep.highlightColor} transition-all duration-500`}
                      style={{ width: `${((activeStepIndex + 1) / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Scrolling Interactive Step Cards */}
            <div className="lg:col-span-7 space-y-6">
              {PROCESS_STEPS.map((item, idx) => {
                const isCurrent = activeStepIndex === idx;
                const ItemIcon = item.icon;

                return (
                  <div
                    key={item.step}
                    onMouseEnter={() => setActiveStepIndex(idx)}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-8 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                      isCurrent
                        ? "bg-white border-slate-900 shadow-xl ring-4 ring-slate-900/5 translate-x-1 md:translate-x-2"
                        : "bg-white/60 hover:bg-white border-slate-200 shadow-sm hover:border-slate-300 opacity-70 hover:opacity-100"
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isCurrent && (
                      <div className="absolute top-0 left-0 bottom-0 w-2 bg-slate-900"></div>
                    )}

                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm font-mono ${
                            isCurrent
                              ? "bg-slate-900 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                            {item.title}
                          </h3>
                          <span className="text-xs font-bold text-teal-600 block mt-0.5">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`p-2 rounded-xl ${isCurrent ? "bg-blue-50 text-pharma-blue" : "bg-slate-50 text-slate-400"}`}
                      >
                        <ItemIcon size={20} />
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed pl-13">
                      {item.desc}
                    </p>

                    {/* Interactive Trigger Footer */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 pl-13">
                      <span>
                        Protocol Standard:{" "}
                        <strong className="text-slate-700">
                          WHO-GMP / ISO 9001
                        </strong>
                      </span>
                      <span
                        className={`flex items-center gap-1 transition-colors ${isCurrent ? "text-pharma-blue" : "text-transparent"}`}
                      >
                        <span>Active Telemetry</span>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-br from-slate-900 to-pharma-blue rounded-3xl p-8 md:p-12 text-white text-center shadow-xl space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
              Scale With Our Network
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Expand Your Pharmaceutical Portfolio?
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Contact our B2B sales desk today to discuss formulation
              availability, request analytical test certificates, or initiate
              custom packaging design.
            </p>
            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-extrabold text-sm hover:bg-teal-400 hover:text-white transition shadow-lg shadow-black/20"
              >
                <span>Initiate Third-Party Inquiry</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
