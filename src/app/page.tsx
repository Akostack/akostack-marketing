"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { 
  ShieldCheck, EyeOff, ClipboardList, ShieldAlert, Users, History, Lock, CheckCircle
} from "lucide-react";
import LoadingScreen from "@/components/layout/loading-screen";
import ProductMockup from "@/components/visual/product-mockup";
import FlowDiagram from "@/components/visual/flow-diagram";
import ArchDiagram from "@/components/visual/arch-diagram";
import WaitlistForm from "@/components/forms/waitlist-form";
import Accordion from "@/components/ui/accordion";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [activeUseCase, setActiveUseCase] = useState("onboarding");

  // FAQ Accordion items
  const faqItems = [
    {
      question: "How does AKOStack ensure data security and isolation?",
      answer: "AKOStack is designed with enterprise security best practices. Every organization gets dedicated, completely isolated indices in our vector store (Qdrant). We isolate workspaces at the database level and secure access using fine-grained Role-Based Access Control (RBAC). Data is encrypted in transit using TLS 1.3 and at rest using AES-256.",
    },
    {
      question: "Are our documents used to train your AI models?",
      answer: "No. Privacy-first architecture is one of our founding design commitments. We employ private foundation model endpoints, and your corporate knowledge base is never logged, stored, or utilized for model training by us or any upstream LLM providers.",
    },
    {
      question: "What document formats does AKOStack support?",
      answer: "We support document parsing for PDF, DOCX, TXT, Markdown, Notion workspace exports, Confluence directories, and Google Drive files. The document intelligence parser extracts textual content and structure tables while removing unsafe execution assets.",
    },
    {
      question: "Can we deploy AKOStack on-premises or self-host?",
      answer: "Yes. In addition to our secure multi-tenant SaaS cloud platform, we provide self-hosted deployment options (using Docker and Kubernetes) inside your own secure corporate VPC (AWS, GCP, or Azure).",
    },
    {
      question: "How does the source citation mapping work?",
      answer: "Every grounded answer is cross-matched with retrieved database chunks in real time. We map the text spans of the generated response to the original document coordinates, providing clickable inline citations that let your team trace assertions back to the original files.",
    },
  ];

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://akostack.com/#organization",
        "name": "AKOStack",
        "url": "https://akostack.com",
        "logo": "https://akostack.com/og-image.png",
        "sameAs": [
          "https://github.com",
          "https://linkedin.com"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://akostack.com/#website",
        "url": "https://akostack.com",
        "name": "AKOStack",
        "publisher": {
          "@id": "https://akostack.com/#organization"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://akostack.com/#application",
        "name": "AKOStack Enterprise AI",
        "url": "https://akostack.com",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires HTML5",
        "description": "Secure enterprise AI knowledge platform that transforms scattered organizational knowledge into grounded, citation-backed answers.",
        "offers": {
          "@type": "Offer",
          "priceModel": "Subscription"
        }
      }
    ]
  };



  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Fullscreen Loading Experience */}
      <LoadingScreen />

      {/* PAGE CONTAINER */}
      <div className="relative pt-24 min-h-screen">
        {/* Decorative subtle grid background */}
        <div className="absolute inset-0 grid-bg radial-mask -z-10 pointer-events-none opacity-40" />

        {/* SECTION 1: HERO */}
        <section id="hero" className="max-w-7xl mx-auto px-6 py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              {/* Private Dev Badge & Tagline */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] border border-brand-border px-2.5 py-0.5 rounded-full text-brand-text bg-white shadow-glass-sm">
                  Currently in Private Development
                </span>
                <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest px-2.5 py-0.5 bg-brand-border-light rounded-full">
                  From Chaos to Clarity.
                </span>
              </div>

              {/* Title */}
              <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter text-brand-text leading-tight max-w-2xl">
                Transform Enterprise Knowledge Into Trusted AI Intelligence.
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-xl">
                AKOStack transforms scattered enterprise knowledge into secure, grounded AI answers using semantic search, intelligent retrieval, enterprise-grade security, and source citations.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="#waitlist"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-brand-accent hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 rounded transition-colors duration-200 text-center cursor-pointer"
                >
                  Request Early Access
                </Link>
                <div className="relative group inline-flex items-center">
                  <button
                    disabled
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-brand-light bg-white border border-brand-border rounded cursor-not-allowed text-center"
                  >
                    Book a Demo
                  </button>
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-mono text-[9px] border border-brand-border px-1.5 py-0.5 rounded bg-brand-border-light text-brand-muted">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Right mockup visualization */}
            <div className="lg:col-span-5 w-full">
              <ProductMockup />
            </div>
          </div>
        </section>

        {/* SECTION 1.5: TRUSTED BY FORWARD-THINKING TEAMS */}
        <section className="border-y border-brand-border bg-brand-border-light/10 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-brand-light font-bold">
              Trusted by Forward-Thinking Teams
            </h3>
            <p className="text-xs text-brand-muted max-w-md mx-auto">
              Our initial private pilot program is currently deploying. Detailed customer stories and validation reports will be added after validation phases.
            </p>
          </div>
        </section>

        {/* SECTION 2: TRUSTED ENTERPRISE AI BADGES */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8 items-center text-center">
            {[
              { label: "Secure by Design", icon: ShieldCheck },
              { label: "Privacy First", icon: EyeOff },
              { label: "Grounded AI", icon: CheckCircle },
              { label: "Source Citations", icon: ClipboardList },
              { label: "Enterprise Ready", icon: ShieldAlert },
              { label: "Multi-Tenant", icon: Users },
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="p-4 border border-brand-border/60 rounded bg-white hover:border-brand-textMuted/40 transition-colors duration-200 flex flex-col items-center space-y-2 group"
                >
                  <Icon className="h-5 w-5 text-brand-muted group-hover:text-brand-text transition-colors" />
                  <span className="font-sans font-medium text-xs text-brand-text">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: THE PROBLEM */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest">
                The Problem
              </span>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tighter text-brand-text">
                The Silent Cost of Scattered Knowledge.
              </h2>
              <div className="space-y-4 text-sm text-brand-muted leading-relaxed">
                <p>
                  Organizations are drowning in unstructured documents. Critical knowledge is isolated across PDFs, doc files, Notion workspaces, emails, and internal wikis.
                </p>
                <p>
                  Employees spend hours searching for verified details, leading to missed opportunities, operational silos, and key decisions made using outdated files.
                </p>
              </div>
            </div>

            {/* Visual Chaos */}
            <div className="lg:col-span-7 border border-brand-border rounded-xl p-8 bg-brand-border-light/10 relative overflow-hidden min-h-[300px] flex items-center justify-center">
              {/* Decorative floating blocks simulating chaos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-lg relative z-10">
                {[
                  "Internal_Wiki.md",
                  "SOC2-Policy-V2.pdf",
                  "Confluence_Page",
                  "API_Endpoints.xlsx",
                  "GDPR_Framework.docx",
                  "Client_Notes.txt",
                ].map((doc, idx) => (
                  <motion.div
                    key={idx}
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: [0, idx % 2 === 0 ? -6 : 6, 0],
                          }
                    }
                    transition={{
                      duration: 4 + idx,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="p-4 border border-dashed border-brand-light/40 bg-white/60 rounded text-center text-[10px] font-mono text-brand-muted shadow-glass-sm"
                  >
                    {doc}
                  </motion.div>
                ))}
              </div>
              {/* Blur focus elements */}
              <div className="absolute inset-0 bg-radial-to-t from-white via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* SECTION 4: SOLUTION WORKFLOW */}
        <section className="bg-brand-border-light/20 border-y border-brand-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
            <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest">
              Processing Pipeline
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tighter text-brand-text">
              The Path from Chaos to Clarity.
            </h2>
            <p className="text-sm text-brand-muted max-w-xl mx-auto">
              Our automated parsing and ingestion pipeline converts unstructured files into clear, security-isolated vectors ready for grounded retrieval.
            </p>
            
            <FlowDiagram />
          </div>
        </section>

        {/* SECTION 5: CORE FEATURES */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-16 md:py-24 scroll-mt-20">
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tighter text-brand-text">
              Built for Modern Enterprise AI Workflows.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Enterprise AI Workspace", desc: "Collaborate, search, and manage grounded answers across multi-tenant department vaults." },
              { title: "Grounded AI Chat", desc: "A clean interface executing responses sourced strictly from authorized company knowledge bases." },
              { title: "Semantic Search", desc: "Mathematical context comparison matches user intent rather than simple literal keywords." },
              { title: "Role-Based Access Control", desc: "Align file visibility with user credentials to protect confidential company assets." },
              { title: "Audit Logging", desc: "Immutable records log admin actions, document updates, and queries for compliance validation." },
              { title: "Workspace Isolation", desc: "Client data partition structures prevent leakage across distinct user networks." },
              { title: "Document Intelligence", desc: "Extract structure, metadata, tables, and paragraphs from raw unstructured docs." },
              { title: "Source Citations", desc: "Direct coordinate links mapped onto generated text highlight source verification." },
              { title: "Fast Retrieval", desc: "Optimized indexing delivers cosine similarity queries in sub-second timelines." },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 border border-brand-border rounded-lg bg-white shadow-glass-sm hover:border-brand-text/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-sans font-semibold text-base text-brand-text">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-brand-border-light flex justify-between items-center text-[10px] font-mono text-brand-light">
                  <span>CAPABILITY</span>
                  <span>0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: ARCHITECTURE */}
        <section id="architecture" className="bg-brand-border-light/10 border-y border-brand-border py-16 md:py-24 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-12">
            <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest">
              System Topology
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tighter text-brand-text">
              The Architecture of Enterprise Trust.
            </h2>
            <p className="text-sm text-brand-muted max-w-xl mx-auto">
              AKOStack isolates data ingestion, representation vectors, and LLM orchestration inside a secure boundary.
            </p>
          </div>

          <ArchDiagram />
        </section>

        {/* SECTION 7: BUILT FOR ENTERPRISE TRUST */}
        <section id="security" className="max-w-7xl mx-auto px-6 py-16 md:py-24 scroll-mt-20">
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest">
              Security Pillars
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tighter text-brand-text">
              Designed with Enterprise Security Best Practices.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Secure by Design",
                desc: "Built from the ground up prioritizing access limitations, encryption, and secure APIs.",
                icon: ShieldCheck,
              },
              {
                title: "Grounded AI",
                desc: "Restricts generative models strictly to context files, eliminating loose hallucinations.",
                icon: CheckCircle,
              },
              {
                title: "Citation-Backed Responses",
                desc: "Every claim includes a traceable marker back to the exact parsed document coordinates.",
                icon: ClipboardList,
              },
              {
                title: "Enterprise RBAC",
                desc: "Fine-grained permissions verify access bounds on document fragments before search matches.",
                icon: Lock,
              },
              {
                title: "Multi-Tenant Isolation",
                desc: "Logical isolation barriers ensure company records never cross-contaminate databases.",
                icon: Users,
              },
              {
                title: "Audit Trails",
                desc: "Track structural admin queries, data syncs, and model calls in secure system logs.",
                icon: History,
              },
              {
                title: "Privacy First",
                desc: "Corporate knowledge stays private. We commit to zero-customer data model training policies.",
                icon: EyeOff,
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 border border-brand-border rounded-lg bg-white shadow-glass-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 bg-brand-border-light w-max rounded mb-4">
                      <Icon className="h-5 w-5 text-brand-text" />
                    </div>
                    <h3 className="font-sans font-semibold text-base text-brand-text">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 8: ENTERPRISE SECURITY MATRIX */}
        <section className="bg-neutral-950 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                Data Protection
              </span>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tighter leading-tight">
                Privacy-First Architecture. Verified at Every Layer.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                AKOStack is engineered to safeguard corporate IP. Our infrastructure designs restrict data storage to isolated VPC boundaries.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-neutral-800">
                <div>
                  <h4 className="font-sans font-semibold text-sm text-white">Encryption at Rest</h4>
                  <p className="text-xs text-neutral-400 mt-1">AES-256 standards cover all stored document fragments.</p>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-white">Encryption in Transit</h4>
                  <p className="text-xs text-neutral-400 mt-1">TLS 1.3 tunnels safeguard data between client and LLM gateway.</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-neutral-800 bg-neutral-900/40 rounded-xl space-y-4">
              <h3 className="font-sans font-semibold text-base text-white">Our Security Guarantee</h3>
              <ul className="space-y-3.5 text-xs text-neutral-400">
                <li className="flex items-start">
                  <span className="text-neutral-100 font-bold mr-2">✓</span>
                  No customer documents are logged by external APIs
                </li>
                <li className="flex items-start">
                  <span className="text-neutral-100 font-bold mr-2">✓</span>
                  No database vectors are used to train foundational AI models
                </li>
                <li className="flex items-start">
                  <span className="text-neutral-100 font-bold mr-2">✓</span>
                  Tenant-level encryption keys ensure secure isolation
                </li>
                <li className="flex items-start">
                  <span className="text-neutral-100 font-bold mr-2">✓</span>
                  Zero retention policy options for sensitive compliance sectors
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 9: USE CASES */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center space-y-4 mb-12">
            <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest">
              Deployment Profiles
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tighter text-brand-text">
              Engineered for Enterprise Workloads.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tabs List */}
            <div className="flex flex-col space-y-2 lg:col-span-1">
              {[
                { id: "onboarding", label: "Employee Onboarding" },
                { id: "engineering", label: "Engineering Teams" },
                { id: "legal_hr", label: "Legal & HR" },
                { id: "support", label: "Customer Support" },
                { id: "it_operations", label: "IT Operations" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveUseCase(tab.id)}
                  className={`px-4 py-3 text-left text-sm font-medium rounded transition-all focus-ring ${
                    activeUseCase === tab.id
                      ? "bg-brand-text text-white"
                      : "text-brand-muted hover:bg-brand-border-light hover:text-brand-text"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Description display box */}
            <div className="lg:col-span-3 border border-brand-border rounded-lg p-8 bg-white flex flex-col justify-between min-h-[250px]">
              <div>
                {activeUseCase === "onboarding" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="font-sans font-semibold text-lg text-brand-text">Employee Onboarding</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      Accelerate path to productivity. Let new hires query standard operations guidelines, internal handbooks, and structural tools directories immediately to find verified layout instructions and process workflows.
                    </p>
                  </motion.div>
                )}

                {activeUseCase === "engineering" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="font-sans font-semibold text-lg text-brand-text">Engineering Teams</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      Search architecture blueprints, API contracts, deployment manifests, and coding standards. Keep engineers focused on coding rather than chasing down wikis or outdated Slack conversations.
                    </p>
                  </motion.div>
                )}

                {activeUseCase === "legal_hr" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="font-sans font-semibold text-lg text-brand-text">Legal & HR</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      Query complex contracts, corporate compliance documents, policy frameworks, and employee benefit handbooks with pinpoint citations back to the source PDFs, ensuring total grounding.
                    </p>
                  </motion.div>
                )}

                {activeUseCase === "support" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="font-sans font-semibold text-lg text-brand-text">Customer Support</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      Equip support representatives with instant answers to technical product FAQs. Reduce resolution time and prevent hallucinations by restricting answers strictly to active documentation.
                    </p>
                  </motion.div>
                )}

                {activeUseCase === "it_operations" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="font-sans font-semibold text-lg text-brand-text">IT Operations</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      Identify system dependencies, hardware specifications, and incident response runbooks. Run semantic queries to troubleshoot system configurations using historical logs.
                    </p>
                  </motion.div>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border-light">
                <Link
                  href="#waitlist"
                  className="text-xs font-mono uppercase tracking-wider text-brand-text hover:underline"
                >
                  Request Early Access for this use case &gt;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: COMPARISON TABLE */}
        <section className="bg-brand-border-light/20 border-y border-brand-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest">
                Capabilities Comparison
              </span>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tighter text-brand-text">
                Traditional Search vs. AKOStack.
              </h2>
            </div>

            <div className="border border-brand-border rounded-lg overflow-hidden bg-white shadow-glass-sm max-w-4xl mx-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-border-light/50 border-b border-brand-border">
                    <th className="p-4 md:p-5 text-xs font-mono uppercase tracking-wider text-brand-text font-bold">
                      Feature Vector
                    </th>
                    <th className="p-4 md:p-5 text-xs font-mono uppercase tracking-wider text-brand-muted">
                      Traditional Search
                    </th>
                    <th className="p-4 md:p-5 text-xs font-mono uppercase tracking-wider text-brand-text font-bold">
                      AKOStack Core
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/60 text-sm text-brand-text">
                  {[
                    { vector: "Search Methodology", old: "Keyword matching (literal strings)", new: "Semantic vectors (conceptual intent)" },
                    { vector: "Result Presentation", old: "List of files to manual read", new: "Grounded AI natural language answers" },
                    { vector: "Context Integration", old: "No context (individual documents)", new: "Cross-document structured synthesis" },
                    { vector: "Source Validation", old: "None (must open file and Ctrl+F)", new: "Traceable inline citation coordinates" },
                    { vector: "Permission Controls", old: "Basic file access permissions", new: "Fine-grained semantic RBAC checks" },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-brand-border-light/10 transition-colors">
                      <td className="p-4 md:p-5 font-medium text-brand-text">
                        {row.vector}
                      </td>
                      <td className="p-4 md:p-5 text-brand-muted">
                        {row.old}
                      </td>
                      <td className="p-4 md:p-5 font-semibold text-brand-text">
                        {row.new}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 11: FAQ */}
        <section id="faq" className="max-w-4xl mx-auto px-6 py-16 md:py-24 scroll-mt-20">
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest">
              Support Directory
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tighter text-brand-text">
              Frequently Answered Inquiries.
            </h2>
          </div>

          <Accordion items={faqItems} />
        </section>

        {/* SECTION 12: REQUEST EARLY ACCESS / WAITLIST */}
        <section id="waitlist" className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 scroll-mt-20">
          <div className="border border-brand-border rounded-2xl p-8 md:p-16 bg-white shadow-glass-lg max-w-3xl mx-auto flex flex-col items-center">
            <div className="text-center space-y-4 mb-8">
              <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest">
                Registry
              </span>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tighter text-brand-text">
                Request Early Access.
              </h2>
              <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                Provide your details below to join our pilot onboarding queue. Our engineering integration team will reach out directly.
              </p>
            </div>

            <WaitlistForm />
          </div>
        </section>
      </div>
    </>
  );
}
