"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative pt-24 min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 grid-bg radial-mask -z-10 pointer-events-none opacity-40" />

      <div className="border border-brand-border rounded-2xl p-8 md:p-16 bg-white shadow-glass-lg max-w-md mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <Compass className="h-14 w-14 text-brand-text stroke-[1.5] animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest bg-brand-border-light px-3 py-1 rounded-full">
            Error 404
          </span>
          <h1 className="font-sans font-bold text-3xl tracking-tighter text-brand-text">
            Destination Unresolved.
          </h1>
          <p className="text-sm text-brand-muted leading-relaxed">
            The workspace subdirectory or routing endpoint you are trying to access does not exist on our servers.
          </p>
        </div>

        <div className="pt-4 border-t border-brand-border/60">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-brand-accent hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
