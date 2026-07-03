"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Database, Lock, Star } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Trust First",
      desc: "We believe enterprise AI must be built on absolute predictability. Hallucinations are not an option for business decisions.",
      icon: ShieldCheck,
    },
    {
      title: "Isolated Security",
      desc: "Your data is yours alone. We enforce tenant-level cryptographic boundaries and secure-by-default network pathways.",
      icon: Lock,
    },
    {
      title: "Semantic Context",
      desc: "Finding files is easy; understanding relationships is hard. We map semantic connections to deliver exact grounding.",
      icon: Database,
    },
    {
      title: "Absolute Clarity",
      desc: "Our mission is to translate unstructured complexity into clear, citation-backed answers that your team can trust.",
      icon: Star,
    },
  ];

  return (
    <div className="relative pt-24 min-h-screen">
      <div className="absolute inset-0 grid-bg radial-mask -z-10 pointer-events-none opacity-40" />

      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center space-y-6">
        <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest bg-brand-border-light px-3 py-1 rounded-full">
          Our Mission
        </span>
        <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter text-brand-text leading-tight">
          From Chaos to Clarity.
        </h1>
        <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-xl mx-auto">
          AKOStack was founded to solve a fundamental challenge in enterprise computing: organizational knowledge is scattered, isolated, and rapidly losing utility. We build the secure bridge between corporate IP and intelligent systems.
        </p>
      </section>

      {/* Narrative block */}
      <section className="max-w-3xl mx-auto px-6 py-8 md:py-12 border-t border-brand-border/60">
        <div className="space-y-6 text-brand-muted text-sm leading-relaxed">
          <h2 className="text-base font-bold text-brand-text font-mono uppercase tracking-wider">
            The Company Vision
          </h2>
          <p>
            In the rush to adopt generative AI, many companies have exposed sensitive data or relied on models that guess answers instead of validating facts. At AKOStack, we believe enterprise AI must follow a different path.
          </p>
          <p>
            We developed a retrieval infrastructure that combines deep document intelligence, high-dimensional vector search, role-based security boundaries, and strict inline references. The result is a platform that lets employees query their secure workspaces and receive answers backed by direct citations.
          </p>
          <p>
            We are a team of engineers, security architects, and product designers focused on building reliable, enterprise-grade tools. We design systems with privacy-first commitments at their core, ensuring customer data is never cached or used to train third-party foundation models.
          </p>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <h2 className="font-sans font-bold text-2xl md:text-3xl text-center tracking-tighter text-brand-text mb-12">
          Our Operating Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="p-6 border border-brand-border rounded-lg bg-white shadow-glass-sm"
              >
                <div className="p-2 bg-brand-border-light w-max rounded mb-4">
                  <Icon className="h-5 w-5 text-brand-text" />
                </div>
                <h3 className="font-sans font-semibold text-base text-brand-text">
                  {v.title}
                </h3>
                <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="border border-brand-border rounded-xl p-8 md:p-12 bg-white text-center space-y-6 shadow-glass-md">
          <h3 className="font-sans font-bold text-xl text-brand-text">
            Ready to structure your workspace?
          </h3>
          <p className="text-xs text-brand-muted max-w-sm mx-auto leading-relaxed">
            Join our private deployment pilot program and start querying your documents securely.
          </p>
          <div className="pt-2">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-accent hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded transition-colors duration-200"
            >
              Request Early Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
