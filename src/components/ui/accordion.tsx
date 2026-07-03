"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, idx) => {
        const isOpen = activeIndex === idx;
        return (
          <div
            key={idx}
            className="border border-brand-border rounded-lg bg-white overflow-hidden transition-all duration-300 hover:border-brand-textMuted/40"
          >
            <button
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${idx}`}
              id={`accordion-trigger-${idx}`}
              className="w-full px-6 py-5 text-left flex items-center justify-between text-brand-text font-medium text-base focus-ring transition-colors"
            >
              <span>{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-brand-muted shrink-0 ml-4"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-content-${idx}`}
                  role="region"
                  aria-labelledby={`accordion-trigger-${idx}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-6 text-sm text-brand-muted leading-relaxed border-t border-brand-border/40 pt-4 bg-brand-border-light/10">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
