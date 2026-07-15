import Navbar from "@/components/layout/Navbar";
import { Check, Shield, Microscope, FileCheck } from "lucide-react";

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-32 pb-12 max-w-4xl mx-auto px-4 text-center">
        <Shield className="w-16 h-16 text-pharma-teal mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Quality is our Religion
        </h1>
        <p className="text-lg text-gray-600">
          At Roxane Laboratories, Quality Assurance isn't just a department;
          it's embedded in every step of our process.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <Microscope className="text-pharma-blue mb-4" size={40} />
          <h3 className="text-xl font-bold mb-4">In-House QC Lab</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-2">
              <Check size={18} className="text-green-500 mt-1" /> HPLC & GC
              Testing
            </li>
            <li className="flex gap-2">
              <Check size={18} className="text-green-500 mt-1" /> IR
              Spectroscopy
            </li>
            <li className="flex gap-2">
              <Check size={18} className="text-green-500 mt-1" />{" "}
              Microbiological Assay
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <FileCheck className="text-pharma-blue mb-4" size={40} />
          <h3 className="text-xl font-bold mb-4">Regulatory Compliance</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-2">
              <Check size={18} className="text-green-500 mt-1" /> WHO-GMP
              Guidelines
            </li>
            <li className="flex gap-2">
              <Check size={18} className="text-green-500 mt-1" /> ISO 9001:2015
              Certified
            </li>
            <li className="flex gap-2">
              <Check size={18} className="text-green-500 mt-1" /> Regular
              Internal Audits
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <Shield className="text-pharma-blue mb-4" size={40} />
          <h3 className="text-xl font-bold mb-4">QA System</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-2">
              <Check size={18} className="text-green-500 mt-1" /> Vendor
              Validation
            </li>
            <li className="flex gap-2">
              <Check size={18} className="text-green-500 mt-1" /> In-Process
              Quality Checks
            </li>
            <li className="flex gap-2">
              <Check size={18} className="text-green-500 mt-1" /> Stability
              Studies
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
