"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Search, Database, FileText, CheckCircle2, Terminal } from "lucide-react";

export default function ProductMockup() {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      const t = setTimeout(() => setStep(4), 0);
      return () => clearTimeout(t);
    }

    const timer = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 4500);

    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const steps = [
    {
      title: "User Query",
      desc: "Client initiates natural language query",
      icon: Search,
    },
    {
      title: "Semantic Vector Search",
      desc: "Query embedded and matches parsed vectors",
      icon: Database,
    },
    {
      title: "Document Retrieval",
      desc: "Extract relevant context from isolated store",
      icon: FileText,
    },
    {
      title: "Grounded Generation",
      desc: "LLM synthesis restricted strictly to citations",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto border border-neutral-800 bg-neutral-950 rounded-xl overflow-hidden shadow-2xl font-mono text-xs text-neutral-300">
      {/* Mock Window Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-800">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
        </div>
        <div className="flex items-center text-neutral-500 space-x-1.5 text-[10px]">
          <Terminal className="h-3 w-3" />
          <span>akostack-workspace-01</span>
        </div>
        <div className="w-12" />
      </div>

      {/* Mock Workspace Content */}
      <div className="p-6 space-y-6">
        {/* Step 1: User Query */}
        <div className="space-y-2">
          <span className="text-[10px] text-neutral-500">QUERY_INPUT</span>
          <div className="p-3 border border-neutral-800 bg-neutral-900/50 rounded flex items-start space-x-3">
            <span className="text-neutral-400 font-bold shrink-0">&gt;</span>
            <p className="text-neutral-100">
              {step >= 0 ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Summarize compliance guidelines regarding third-party API integrations.
                </motion.span>
              ) : (
                <span className="text-neutral-700">Waiting for query...</span>
              )}
            </p>
          </div>
        </div>

        {/* Dynamic Inner Step Progress */}
        <div className="grid grid-cols-4 gap-2">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = step >= idx;
            return (
              <div
                key={idx}
                className={`p-2 rounded border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-1 ${
                  isActive
                    ? "border-neutral-500 bg-neutral-900/60 text-white"
                    : "border-neutral-900 bg-transparent text-neutral-600"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-neutral-100" : "text-neutral-700"}`} />
                <span className="text-[9px] scale-95 font-semibold block leading-tight">
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Processing Canvas / Citations */}
        <div className="space-y-3 min-h-[140px] border border-neutral-900 p-4 rounded bg-neutral-950/40 relative">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500">VECTOR_SEARCH</span>
                  <span className="text-[10px] text-neutral-400 animate-pulse">Running semantic scan...</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-neutral-800 w-full rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-neutral-400"
                    />
                  </div>
                  <span className="text-[10px] text-neutral-400 block pt-1">
                    Matching vector cosine similarities &gt; 0.88...
                  </span>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-2"
              >
                <span className="text-[10px] text-neutral-500">RETRIEVED_CHUNKS</span>
                <div className="space-y-2">
                  <div className="p-2 bg-neutral-900 rounded border border-neutral-800 flex justify-between items-center">
                    <span className="text-neutral-200">api-security-guide.pdf</span>
                    <span className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">Score 0.94</span>
                  </div>
                  <div className="p-2 bg-neutral-900 rounded border border-neutral-800 flex justify-between items-center">
                    <span className="text-neutral-200">vendor-standards-2026.md</span>
                    <span className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">Score 0.89</span>
                  </div>
                </div>
              </motion.div>
            )}

            {step >= 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500">GROUNDED_RESPONSE</span>
                  <span className="text-[10px] border border-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">
                    Strict Citation Mode
                  </span>
                </div>
                <div className="space-y-2 text-neutral-200 text-xs leading-relaxed font-sans">
                  <p>
                    All external API connections must employ mutual TLS authentication and record access logs to the central SIEM. Unencrypted endpoints are strictly prohibited.
                  </p>
                  <div className="flex items-center space-x-2 pt-2 border-t border-neutral-900 font-mono text-[10px]">
                    <span className="text-neutral-500">SOURCES:</span>
                    <span className="text-neutral-300 underline cursor-pointer hover:text-white">
                      [api-security-guide.pdf]
                    </span>
                    <span className="text-neutral-300 underline cursor-pointer hover:text-white">
                      [vendor-standards-2026.md]
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-24 text-neutral-600"
              >
                <span>Awaiting user query invocation...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
