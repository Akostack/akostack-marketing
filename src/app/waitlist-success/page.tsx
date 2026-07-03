"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Registrant";
  const company = searchParams.get("company") || "Organization";
  const position = searchParams.get("position") || "102";

  return (
    <div className="border border-brand-border rounded-2xl p-8 md:p-16 bg-white shadow-glass-lg max-w-xl mx-auto text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle2 className="h-14 w-14 text-brand-text stroke-[1.5]" />
      </div>

      <div className="space-y-3">
        <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest bg-brand-border-light px-3 py-1 rounded-full">
          Registry Confirmed
        </span>
        <h1 className="font-sans font-bold text-3xl tracking-tighter text-brand-text">
          Welcome to the Waitlist.
        </h1>
        <p className="text-sm text-brand-muted max-w-sm mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-brand-text">{name}</span> from{" "}
          <span className="font-semibold text-brand-text">{company}</span>. Your workspace pilot request has been successfully registered.
        </p>
      </div>

      {/* Position card */}
      <div className="p-5 border border-brand-border bg-brand-border-light/10 rounded-lg max-w-xs mx-auto space-y-1">
        <span className="font-mono text-[10px] text-brand-light uppercase tracking-wider block">
          Your Queue Position
        </span>
        <span className="font-sans font-bold text-4xl text-brand-text tracking-tighter">
          #{position}
        </span>
      </div>

      <div className="pt-4 border-t border-brand-border/60 text-xs text-brand-muted max-w-sm mx-auto leading-relaxed space-y-2">
        <p className="flex items-center justify-center text-brand-text font-semibold">
          <ShieldCheck className="h-4 w-4 mr-1.5 shrink-0" />
          Next Steps in Onboarding
        </p>
        <p>
          Our integration architects will review your company size and reach out to your registered enterprise address to schedule an onboarding consultation.
        </p>
      </div>

      <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center text-xs font-mono uppercase tracking-wider text-brand-muted hover:text-brand-text transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-1.5" />
          Back to Home
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center justify-center text-xs font-mono uppercase tracking-wider text-brand-text hover:underline transition-colors duration-200"
        >
          Read Our Architecture
          <ArrowRight className="h-4 w-4 ml-1.5" />
        </Link>
      </div>
    </div>
  );
}

export default function WaitlistSuccess() {
  return (
    <div className="relative pt-24 min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 grid-bg radial-mask -z-10 pointer-events-none opacity-40" />
      <Suspense fallback={
        <div className="text-center py-20 font-mono text-xs text-brand-muted">
          Loading waitlist profile...
        </div>
      }>
        <SuccessContent />
      </Suspense>
    </div>
  );
}
