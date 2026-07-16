import Hero from "@/components/sections/home/Hero";
import Telemetry from "@/components/sections/home/Telemetry";
import Capabilities from "@/components/sections/home/Capabilities";
import Advantage from "@/components/sections/home/Advantage";
import CtaBanner from "@/components/sections/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-500 selection:text-white pb-24">
      <Hero />
      <Telemetry />
      <Capabilities />
      <Advantage />
      <CtaBanner />
    </div>
  );
}
