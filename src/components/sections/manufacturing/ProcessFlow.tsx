"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MANUFACTURING_STEPS } from "@/lib/mock-data";
import { CheckCircle2 } from "lucide-react";

export default function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  // THE FIX IS HERE:
  // Old: ["start center", "end center"]
  // New: ["start 50%", "end 90%"]
  // Translation: "Start drawing when top hits middle. Finish drawing when bottom is still 10% away from visible."
  // This forces the line to complete even if you can't scroll further down.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 90%"],
  });

  const scrollYSmoothed = useSpring(scrollYProgress, {
    stiffness: 200, // Increased stiffness slightly for snappier feel
    damping: 30,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(scrollYSmoothed, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* 1. Gray Background Track */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-slate-100 rounded-full z-0 top-0"></div>

          {/* 2. Blue Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 transform -translate-x-1/2 w-[4px] bg-pharma-blue rounded-full z-0 top-0 origin-top"
          >
            {/* Glowing Head */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-pharma-blue blur-[2px] rounded-full shadow-[0_0_15px_#003366]"></div>
          </motion.div>

          {/* Added extra padding bottom to ensure the line extends past the last circle visually */}
          <div className="space-y-32 pb-24">
            {MANUFACTURING_STEPS.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* SIDE A: Text Content */}
                <div className="flex-1 w-full text-left z-10">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.5 }}
                    className={`p-8 rounded-2xl border border-slate-100 shadow-xl shadow-blue-900/5 bg-white relative overflow-hidden group`}
                  >
                    <div
                      className={`absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-2 ${step.color
                        .replace("bg-", "bg-")
                        .replace(" text-", " ")}`}
                    ></div>

                    <div className="flex items-center gap-4 mb-4 pl-2">
                      <div className={`p-3 rounded-lg bg-gray-50 text-3xl`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-2">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

                {/* CENTER: Node Circle */}
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

                {/* SIDE B: Image Placeholder */}
                <div className="flex-1 w-full hidden md:block z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.5 }}
                    className="aspect-video rounded-2xl bg-slate-50 flex items-center justify-center relative overflow-hidden shadow-inner border border-slate-100"
                  >
                    <div className="text-slate-300">
                      <svg
                        className="w-16 h-16 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 text-pharma-blue rounded-full border border-blue-100 text-sm font-medium z-10 relative">
            <CheckCircle2 size={18} />
            <span>
              Production Batch Tracking ID:{" "}
              <span className="font-mono font-bold">#ROX-2025-LIVE</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
