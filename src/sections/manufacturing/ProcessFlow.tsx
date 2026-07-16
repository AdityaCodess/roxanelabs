"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MANUFACTURING_STEPS } from "@/lib/mock-data";
import { CheckCircle2 } from "lucide-react";

// 1. FIXED IMAGE URLs (No more broken API links)
// 1. UPDATED IMAGE URLs (Tested & Working)
const machineImages = [
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80", // 1. Lab Testing (Scientist with flask)
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80", // 2. Granulation (Industrial Machinery)
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80", // 3. Compression (Pill Press)
  "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80", // 4. Coating (Colorful Pills)
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", // Packing
];

export default function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 2. SCROLL PHYSICS (Fills line as you scroll down)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 90%"],
  });

  const scrollYSmoothed = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(scrollYSmoothed, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <span className="text-pharma-teal font-semibold tracking-wider uppercase text-sm">
              End-to-End Control
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-pharma-blue mt-2">
              Manufacturing Process
            </h2>
            <div className="w-24 h-1 bg-pharma-teal mx-auto mt-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="relative">
          {/* --- DYNAMIC SPINE --- */}
          {/* Gray Background Track */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-slate-200 rounded-full z-0 top-0"></div>

          {/* Blue Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 transform -translate-x-1/2 w-[4px] bg-pharma-blue rounded-full z-0 top-0 origin-top"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-pharma-blue blur-[2px] rounded-full shadow-[0_0_15px_#003366]"></div>
          </motion.div>

          {/* STEPS LOOP */}
          <div className="space-y-32 pb-24">
            {MANUFACTURING_STEPS.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* --- TEXT CONTENT SIDE --- */}
                <div className="flex-1 w-full text-left z-10">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.5 }}
                    className={`p-8 rounded-2xl border border-slate-100 shadow-xl shadow-blue-900/5 bg-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}
                  >
                    {/* Colored Top Bar */}
                    <div
                      className={`absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-2 ${step.color
                        .replace("bg-", "bg-")
                        .replace(" text-", " ")}`}
                    ></div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-4 pl-3">
                      <div className={`p-3 rounded-lg bg-gray-50 text-3xl`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description Text */}
                    <p className="text-gray-600 leading-relaxed pl-3 font-medium">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

                {/* --- CENTER NODE --- */}
                <div className="relative flex items-center justify-center w-16 h-16 shrink-0 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-4 border-white relative ${
                      index % 2 === 0 ? "bg-pharma-blue" : "bg-pharma-teal"
                    }`}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* --- IMAGE SIDE --- */}
                <div className="flex-1 w-full hidden md:block z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.5 }}
                    className="aspect-video rounded-2xl shadow-lg border-4 border-white relative overflow-hidden group"
                  >
                    {/* The Real Image */}
                    <img
                      src={machineImages[index]}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                    {/* "Zone Active" Badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-slate-900 rounded-full flex items-center gap-2 shadow-sm border border-white/50">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Zone {index + 1} Live
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER BADGE */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white text-pharma-blue rounded-full border border-blue-100 text-sm font-medium z-10 relative shadow-sm">
            <CheckCircle2 size={18} className="text-green-500" />
            <span>
              Production Batch Tracking ID:{" "}
              <span className="font-mono font-bold text-slate-800">
                #ROX-2025-LIVE
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
