"use client";

import React from "react";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string; // Kept for interface compatibility, unused since text is in the image
}

export default function Logo({
  className = "flex items-center",
  iconClassName = "h-[32px] w-auto",
}: LogoProps) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="AkoStack"
        className={`${iconClassName} object-contain`}
      />
    </div>
  );
}
