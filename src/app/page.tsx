import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/home/Hero";
import RegulatoryBadges from "@/sections/home/RegulatoryBadges";
import Capabilities from "@/sections/home/Capabilities";
import Advantage from "@/sections/home/Advantage";
import CtaBanner from "@/sections/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
        <TopBar />
        <Navbar />
      </header>

      {/* Main Assembly */}
      <main className="flex-1 pb-24">
        <Hero />
        <RegulatoryBadges />
        <Capabilities />
        <Advantage />
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
