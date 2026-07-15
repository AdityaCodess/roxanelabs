import Navbar from "@/components/layout/Navbar";
import { Target, Heart, Users, Award } from "lucide-react";
import Image from "next/image"; // Using Next Image for optimization

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-20 bg-slate-50 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Decades of Trust
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Founded with a vision to make healthcare accessible, Roxane
          Laboratories has evolved into a global leader in pharmaceutical
          formulations.
        </p>
      </div>

      {/* The Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-pharma-teal font-bold tracking-wider uppercase text-sm">
              Our History
            </span>
            <h2 className="text-3xl font-bold text-pharma-blue">
              From Humble Beginnings to Global Standards
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Roxane Laboratories was established in [19XX] by [Founder Name],
              driven by a singular mission: quality above all else. Starting as
              a small manufacturing unit, we have expanded into a
              state-of-the-art facility in Baddi, Himachal Pradesh.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we specialize in tablets, capsules, liquid orals, and
              external preparations, serving partners across India and emerging
              global markets. Our commitment to WHO-GMP standards ensures that
              every batch leaving our factory is safe, effective, and reliable.
            </p>
          </div>
          <div className="relative h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
            {/* Placeholder for Founder/Office Photo */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
              [ Image of Office Building or Founder ]
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-pharma-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Target className="text-pharma-teal mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-blue-100 text-sm">
                To provide affordable, high-quality medicines to every corner of
                the nation.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Award className="text-pharma-teal mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-blue-100 text-sm">
                Zero compromise on raw materials. 100% adherence to IP/BP/USP
                standards.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Users className="text-pharma-teal mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-blue-100 text-sm">
                Building long-term partnerships with distributors and
                third-party clients.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Heart className="text-pharma-teal mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Ethics</h3>
              <p className="text-blue-100 text-sm">
                Transparency in business and responsibility towards patient
                health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
