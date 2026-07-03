"use client";

import React from "react";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export default function Logo({
  className = "flex items-center space-x-2",
  iconClassName = "h-7 w-auto",
  textClassName = "text-xl font-bold tracking-tight",
}: LogoProps) {
  return (
    <div className={className}>
      {/* Bird Logo Icon Symbol */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${iconClassName} text-brand-text flex-shrink-0`}
        aria-hidden="true"
      >
        {/* Beak */}
        <path d="M 9 17 L 3 21 L 9 25" />
        {/* Head Circle */}
        <path d="M 23 11 A 8 8 0 1 0 9 17" />
        {/* Tail Loop */}
        <path d="M 23 11 C 27 15 27 21 24 25 C 21 29 16 30 13 28 C 10 26 9 22 11 19 C 13 16 17 16 19 19 C 20 22 19 25 16 26" />
        {/* Eye */}
        <circle cx="14.5" cy="14.5" r="2.2" fill="currentColor" stroke="none" />
      </svg>

      {/* Brand Text spelling 'AkoStack' exactly as in the logo image */}
      <span className={`${textClassName} font-sans text-brand-text`}>
        Ako<span className="font-normal text-brand-muted">Stack</span>
      </span>
    </div>
  );
}
