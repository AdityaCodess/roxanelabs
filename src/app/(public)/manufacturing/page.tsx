import Navbar from "@/components/layout/Navbar";
import ProcessFlow from "@/components/sections/manufacturing/ProcessFlow";

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Simple Page Header */}
      <div className="pt-32 pb-12 text-center bg-white border-b border-slate-100">
        <h1 className="text-4xl font-bold text-slate-800">
          State-of-the-Art Facility
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Located in Baddi, Himachal Pradesh (Pharma Hub of India)
        </p>
      </div>

      <ProcessFlow />
    </main>
  );
}
