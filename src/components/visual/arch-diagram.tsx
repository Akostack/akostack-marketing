"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, Shield, Sparkles, Scissors, Hash, 
  Database, HelpCircle, Compass, Layout, Cpu 
} from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  details: string;
  security: string;
}

export default function ArchDiagram() {
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(null);

  const nodes: NodeData[] = [
    {
      id: "docs",
      name: "Documents",
      icon: FileText,
      description: "Raw enterprise data sources",
      details: "Support for PDF, DOCX, Notion workspace archives, Confluence logs, and Google Drive endpoints.",
      security: "Read-only workspace connections with isolated OAuth tokens.",
    },
    {
      id: "parser",
      name: "Parser",
      icon: Shield,
      description: "Structure extraction engine",
      details: "Surgically extracts raw text streams, structural tables, and metadata keys while stripping embedded execution scripts.",
      security: "Runs inside a sandboxed micro-vm to prevent prompt-injection attacks during parsing.",
    },
    {
      id: "cleaning",
      name: "Cleaning",
      icon: Sparkles,
      description: "Data cleanup & normalization",
      details: "Scrubs formatting noise, removes boilerplate signatures, and normalizes character encoding definitions.",
      security: "Strips personally identifiable information (PII) before vector generation.",
    },
    {
      id: "chunking",
      name: "Chunking",
      icon: Scissors,
      description: "Contextual fragment separation",
      details: "Splits documents into overlapping context windows, keeping section headers intact to maintain semantic integrity.",
      security: "Restricts access tags to chunks so search respects source document ownership policies.",
    },
    {
      id: "embeddings",
      name: "Embeddings",
      icon: Hash,
      description: "High-dimensional vector generator",
      details: "Converts text fragments into dense mathematical representations (vectors) using isolated semantic models.",
      security: "Employs client-specific encryption keys to compute embeddings.",
    },
    {
      id: "qdrant",
      name: "Qdrant Vector DB",
      icon: Database,
      description: "Secure index storage layer",
      details: "Hosts mathematical document models and runs fast cosine-similarity searches on incoming queries.",
      security: "Hardware-level tenant isolation ensures indices never mix datasets between client organizations.",
    },
    {
      id: "retriever",
      name: "Retriever",
      icon: Compass,
      description: "Context retrieval pipeline",
      details: "Pulls the top matches matching the query vector and validates the user's role authorization.",
      security: "Cross-checks user RBAC permissions against document metadata tags before retrieval.",
    },
    {
      id: "prompt-builder",
      name: "Prompt Builder",
      icon: Layout,
      description: "Context-aware prompt constructor",
      details: "Assembles user queries with retrieved document chunks and system grounding instructions.",
      security: "Wraps prompts in safety envelopes to block user injection breakouts.",
    },
    {
      id: "llm-gateway",
      name: "LLM Gateway",
      icon: Cpu,
      description: "Zero-data training model router",
      details: "Streams prompts to state-of-the-art foundation LLM models. Standardizes responses.",
      security: "Strict API policies commit zero customer data logging and zero model training.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start px-4">
      {/* Node Blueprint Grid */}
      <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isHovered = hoveredNode?.id === node.id;
          return (
            <div
              key={node.id}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              className={`p-4 border rounded-lg bg-white cursor-help transition-all duration-300 flex flex-col justify-between min-h-[120px] focus-ring ${
                isHovered
                  ? "border-brand-text shadow-glass-md translate-y-[-2px]"
                  : "border-brand-border hover:border-brand-textMuted"
              }`}
              role="button"
              tabIndex={0}
              onFocus={() => setHoveredNode(node)}
              onBlur={() => setHoveredNode(null)}
              aria-haspopup="true"
              aria-label={`Architecture Component: ${node.name}. Press for details.`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded ${isHovered ? "bg-brand-border-light text-brand-text" : "text-brand-muted bg-brand-border-light/40"}`}>
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <span className="font-mono text-[9px] text-brand-light font-semibold uppercase">
                  {node.id}
                </span>
              </div>
              <div className="mt-3">
                <h4 className="font-sans font-semibold text-xs text-brand-text">
                  {node.name}
                </h4>
                <p className="text-[10px] text-brand-muted mt-0.5 truncate">
                  {node.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explanatory Panel */}
      <div className="border border-brand-border rounded-lg p-6 bg-brand-border-light/10 min-h-[300px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {hoveredNode ? (
            <motion.div
              key={hoveredNode.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="space-y-5"
            >
              <div>
                <span className="font-mono text-[10px] bg-brand-border px-2 py-0.5 rounded text-brand-text font-semibold uppercase tracking-wider">
                  SYSTEM NODE: {hoveredNode.id}
                </span>
                <h3 className="font-sans font-semibold text-lg text-brand-text mt-2">
                  {hoveredNode.name}
                </h3>
                <p className="text-sm text-brand-muted mt-1 font-semibold italic">
                  {hoveredNode.description}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[10px] text-brand-text font-bold uppercase tracking-wider">
                  Description
                </h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                  {hoveredNode.details}
                </p>
              </div>

              <div className="border-t border-brand-border/40 pt-4">
                <h4 className="font-mono text-[10px] text-brand-text font-bold uppercase tracking-wider flex items-center">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-text mr-1.5" />
                  Security Commitment
                </h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                  {hoveredNode.security}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center h-full my-auto py-12"
            >
              <HelpCircle className="h-8 w-8 text-brand-light stroke-[1.5] mb-3" />
              <h3 className="font-sans font-semibold text-sm text-brand-text">
                Architecture Blueprint
              </h3>
              <p className="text-xs text-brand-muted mt-1.5 max-w-[200px] leading-relaxed">
                Hover or select any system component node on the left to read its detailed architectural responsibility.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
