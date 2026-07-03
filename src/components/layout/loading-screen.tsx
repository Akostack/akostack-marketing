"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function LoadingScreen() {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Smooth transition from logo -> tagline -> complete
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200); // Allow 1.2s total for loading experience

    return () => clearTimeout(timer);
  }, []);

  if (shouldReduceMotion) {
    return null; // Skip loader if user prefers reduced motion
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="font-sans font-bold text-3xl md:text-4xl tracking-tighter text-brand-text"
            >
              AKO<span className="font-normal text-brand-muted">Stack</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="font-mono text-xs uppercase tracking-widest text-brand-muted"
            >
              From Chaos to Clarity.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
