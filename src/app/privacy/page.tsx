"use client";

import React from "react";


export default function PrivacyPolicy() {
  const lastUpdated = "July 3, 2026";

  return (
    <div className="relative pt-24 min-h-screen">
      <div className="absolute inset-0 grid-bg radial-mask -z-10 pointer-events-none opacity-40" />

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-8">
        <div className="space-y-4">
          <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest bg-brand-border-light px-3 py-1 rounded-full w-max block">
            Compliance
          </span>
          <h1 className="font-sans font-bold text-4xl md:text-5xl tracking-tighter text-brand-text leading-tight">
            Privacy Policy & Data Security.
          </h1>
          <p className="text-xs text-brand-light font-mono">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-sm text-brand-muted leading-relaxed space-y-6 border-t border-brand-border/60 pt-8">
          <p>
            At AKOStack, we recognize that your corporate knowledge represents your organization&apos;s most valuable intellectual property. Our platform is designed from the ground up with enterprise security best practices and a privacy-first architecture.
          </p>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">1. Zero-Data Model Training Commitment</h2>
            <p>
              We firmly commit that under no circumstances is customer data, including parsed document fragments, vector representations, metadata, index parameters, or user search queries, used to train foundational AI models, whether hosted by us or third-party API providers. All API traffic routed to upstream LLM gateways employs strict zero-retention policies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">2. Tenant Isolation & Vector Storage</h2>
            <p>
              AKOStack provides logical multi-tenant database isolation at the hardware and indexing layers. Your corporate vector indexes (stored in Qdrant) are isolated to individual, encrypted volumes. Search results are validated against active authorization tags before being returned to the context assembly system.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">3. Encryption Boundaries</h2>
            <p>
              All document ingestion streams and user communications are protected by TLS 1.3 encryption in transit. All parsed records, document assets, database tables, and indexes are protected by AES-256 standard encryption at rest. We support integration with enterprise Key Management Systems (KMS) so clients can manage their own cryptographic root keys.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">4. Regulatory Alignments</h2>
            <p>
              While we are a growing technology platform, our systems are built to meet the structural compliance requirements of global data protection laws (such as GDPR in Europe and HIPAA in the United States). We support data residency configuration features that let customers restrict processing actions to specific geographic regions (e.g. US-only or EU-only cloud clusters).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">5. Admin Controls & Auditing</h2>
            <p>
              Organizations are equipped with centralized admin consoles. Administrators can configure custom data retention windows, force metadata tags, edit Role-Based Access Control (RBAC) levels, and audit comprehensive, immutable query and log history records.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-brand-text font-sans">6. Contacting the Security Team</h2>
            <p>
              For questions regarding our privacy commitments, system security testing reviews, or to request our detailed security practices documentation, please contact our security team at{" "}
              <a href="mailto:support@akostack.com" className="text-brand-text underline">
                support@akostack.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
