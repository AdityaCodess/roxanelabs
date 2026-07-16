"use client";

import { Pill, FlaskConical, Activity, Sparkles } from "lucide-react";

export default function Capabilities() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-block">
            Manufacturing Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Formulation Spectrum
          </h2>
        </div>
        <p className="text-sm text-gray-600 max-w-md leading-relaxed">
          Our strategic Baddi network supports end-to-end manufacturing across
          major therapeutic segments, equipped with automated packaging lines
          for Alu-Alu, blister, and PET formats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Category 1: Tablets */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-slate-300 transition group flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition duration-300 shadow-sm">
              <Pill size={28} />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Tablets & Capsules
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              High-speed rotary compression and automated encapsulation for
              bilayer, sustained-release (SR), enteric-coated, and hard gelatin
              formulations.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
            <span>Alu-Alu & Blister</span>
            <span className="text-blue-600">GMP Line</span>
          </div>
        </div>

        {/* Category 2: Liquid Orals */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-slate-300 transition group flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition duration-300 shadow-sm">
              <FlaskConical size={28} />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Liquid Orals & Syrups
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Automated sugar and sugar-free syrup lines with online filtration,
              bottle washing, precision filling, and ROPP/measuring cap sealing.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
            <span>30ml to 200ml PET</span>
            <span className="text-teal-600">AHU Zone</span>
          </div>
        </div>

        {/* Category 3: External Preparations */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-slate-300 transition group flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition duration-300 shadow-sm">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Ointments & Gels
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Homogenized planetary mixers for pain relief gels, antifungal
              ointments, and antiseptic creams packaged in laminated and
              aluminum tubes.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
            <span>10g to 50g Tubes</span>
            <span className="text-indigo-600">Sterile Line</span>
          </div>
        </div>

        {/* Category 4: Specialty & Nutraceuticals */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-slate-300 transition group flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition duration-300 shadow-sm">
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Specialty & Nutra
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Customized multivitamin supplements, antioxidant formulations, and
              protein powders manufactured under food-grade ISO 22000 hygiene
              protocols.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
            <span>Sachets & Jars</span>
            <span className="text-purple-600">FSSAI / GMP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
