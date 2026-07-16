import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/home/Hero";
import Telemetry from "@/sections/home/Telemetry";
import Capabilities from "@/sections/home/Capabilities";
import Advantage from "@/sections/home/Advantage";
import CtaBanner from "@/sections/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-500 selection:text-white flex flex-col justify-between">
      {/* Explicit Top Navigation Layer */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-2xs">
        <TopBar />
        <Navbar />
      </header>

      {/* Main Homepage Assembly */}
      <main className="flex-1 pb-24">
        <Hero />
        <Telemetry />
        <Capabilities />
        <Advantage />
        <CtaBanner />
      </main>

      {/* Explicit Footer Navigation Layer */}
      <Footer />
    </div>
  );
}
