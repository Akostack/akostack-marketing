"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  UploadCloud, Cpu, Sparkles, Scissors, Hash, 
  Database, Search, WrapText, CpuIcon, Check, FileCheck 
} from "lucide-react";

export default function FlowDiagram() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: "Upload Documents", desc: "Ingest PDF, DOCX, Notion, Wikis in raw formats", icon: UploadCloud },
    { name: "Knowledge Processing", desc: "Extract raw metadata and document hierarchies", icon: Cpu },
    { name: "Cleaning", desc: "De-noise text, scrub markdown, and normalize layout formats", icon: Sparkles },
    { name: "Chunking", desc: "Surgically split records by semantic context barriers", icon: Scissors },
    { name: "Embeddings", desc: "Map chunks to high-dimensional mathematical space", icon: Hash },
    { name: "Vector Database", desc: "Store vectorized contexts in isolated Qdrant index", icon: Database },
    { name: "Semantic Retrieval", desc: "Perform cosine similarity lookup on incoming query", icon: Search },
    { name: "Prompt Assembly", desc: "Synthesize matched contexts with strict control instructions", icon: WrapText },
    { name: "LLM Gateway", desc: "Route through isolated, zero-training enterprise gateways", icon: CpuIcon },
    { name: "Grounded Response", desc: "Generate synthesized natural language results", icon: Check },
    { name: "Source Citations", desc: "Affix direct trace paths back to source documents", icon: FileCheck },
  ];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 2500);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, steps.length]);

  return (
    <div className="max-w-3xl mx-auto py-12 relative px-4">
      {/* Central Line */}
      <div className="absolute left-[34px] md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-border md:-translate-x-1/2" />

      {/* Steps List */}
      <div className="space-y-8 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full relative ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Spacer for desktop layout alignment */}
              <div className="hidden md:block w-[calc(50%-32px)]" />

              {/* Indicator Circle */}
              <div className="absolute left-4 md:left-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 z-10">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: isActive ? [1, 1.2, 1] : 1,
                          borderColor: isActive ? "#111111" : isPassed ? "#111111" : "#E5E7EB",
                          backgroundColor: isActive ? "#111111" : isPassed ? "#FFFFFF" : "#FFFFFF",
                        }
                  }
                  className={`h-9 w-9 rounded-full border-2 bg-white flex items-center justify-center transition-colors duration-300 ${
                    shouldReduceMotion
                      ? isActive || isPassed
                        ? "border-brand-text bg-brand-text text-white"
                        : "border-brand-border text-brand-light"
                      : isActive
                      ? "text-white"
                      : isPassed
                      ? "text-brand-text"
                      : "text-brand-light"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </motion.div>
              </div>

              {/* Content Panel */}
              <div className="w-full md:w-[calc(50%-32px)] pl-16 md:pl-0">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          borderColor: isActive ? "#111111" : "#E5E7EB",
                          boxShadow: isActive
                            ? "0 4px 20px -4px rgba(0, 0, 0, 0.04)"
                            : "0 0px 0px 0px transparent",
                        }
                  }
                  className={`p-5 rounded-lg border bg-white/80 backdrop-blur-sm transition-all duration-300 ${
                    idx % 2 === 0 ? "md:text-right md:flex md:flex-col md:items-end" : ""
                  } ${isActive ? "border-brand-text" : "border-brand-border"}`}
                >
                  <span className="font-mono text-[10px] text-brand-light font-semibold uppercase tracking-wider block mb-1">
                    Step {idx + 1}
                  </span>
                  <h4 className="font-sans font-semibold text-sm text-brand-text">
                    {step.name}
                  </h4>
                  <p className="text-xs text-brand-muted mt-1 max-w-sm">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
