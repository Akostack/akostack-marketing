"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && (
          <label className="text-xs font-mono uppercase tracking-wider text-brand-text font-semibold">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-2.5 bg-white/70 border border-brand-border/80 rounded text-sm text-brand-text placeholder-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200 ${className}`}
          {...props}
        />
        {error && <span className="text-xs text-red-600 mt-1">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
