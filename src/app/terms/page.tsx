"use client";

import React from "react";


export default function TermsOfService() {
  const lastUpdated = "July 3, 2026";

  return (
    <div className="relative pt-24 min-h-screen">
      <div className="absolute inset-0 grid-bg radial-mask -z-10 pointer-events-none opacity-40" />

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-8">
        <div className="space-y-4">
          <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest bg-brand-border-light px-3 py-1 rounded-full w-max block">
            Agreement
          </span>
          <h1 className="font-sans font-bold text-4xl md:text-5xl tracking-tighter text-brand-text leading-tight">
            Terms of Service.
          </h1>
          <p className="text-xs text-brand-light font-mono">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-sm text-brand-muted leading-relaxed space-y-6 border-t border-brand-border/60 pt-8">
          <p>
            Welcome to AKOStack. By accessing our public marketing website or enrolling in our private pilot program, you agree to be bound by these Terms of Service. Please review them carefully.
          </p>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">1. License & Access</h2>
            <p>
              Subject to these Terms and any custom pilot deployment agreements, AKOStack grants your organization a limited, non-exclusive, non-transferable, revocable license to access our platform capabilities. We reserve the right to modify or discontinue any platform components or early access options at our discretion.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">2. Customer Data Ownership</h2>
            <p>
              Under all circumstances, you retain complete, 100% intellectual property ownership of any documents, text files, workspace integrations, database mappings, or queries uploaded to the AKOStack platform. AKOStack only accesses customer data to execute searches and generate grounded answers. We do not sell, share, or compile your data.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">3. Acceptable Platform Use</h2>
            <p>
              You agree not to upload any documents containing malicious code, exploit API endpoints, execute automated scraping scripts on our marketing website, or utilize the RAG pipeline to generate unlawful, defamatory, or harmful content. If any unauthorized usage vectors are discovered, we reserve the right to suspend organization accounts.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">4. Service SLA & Limitation of Liability</h2>
            <p>
              Our early access and pilot platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any kind. While our systems are designed with enterprise security best practices and high-availability architecture, AKOStack is not liable for operational interruptions or service downtime during development phases.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">5. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the State of California, United States, without regard to conflicts of law provisions. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in San Francisco, California.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">6. Revisions</h2>
            <p>
              We may update these terms periodically to reflect compliance adjustments or platform features. Continued use of our marketing assets and pilot environments following update notices indicates acceptance of revised terms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
