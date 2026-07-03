"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { WaitlistService } from "@/services/waitlist";
import { Loader2 } from "lucide-react";

export default function WaitlistForm() {
  const router = useRouter();
  
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!fullName || !company || !email || !companySize) {
      setError("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await WaitlistService.submit({
        fullName,
        company,
        email,
        companySize,
      });

      if (response.success) {
        // Redirect to success page with query parameters
        const queryParams = new URLSearchParams({
          name: fullName,
          company: company,
          position: response.position?.toString() || "100",
        });
        router.push(`/waitlist-success?${queryParams.toString()}`);
      } else {
        setError(response.message || "An unexpected error occurred. Please try again.");
      }
    } catch {
      setError("Failed to connect to the waitlist registry. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded" role="alert">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="fullName" className="text-xs font-mono uppercase tracking-wider text-brand-text font-semibold">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jane Doe"
            disabled={loading}
            className="w-full px-4 py-2.5 bg-white/70 border border-brand-border rounded text-sm text-brand-text placeholder-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="company" className="text-xs font-mono uppercase tracking-wider text-brand-text font-semibold">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Corp"
            disabled={loading}
            className="w-full px-4 py-2.5 bg-white/70 border border-brand-border rounded text-sm text-brand-text placeholder-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Work Email */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-brand-text font-semibold">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
            disabled={loading}
            className="w-full px-4 py-2.5 bg-white/70 border border-brand-border rounded text-sm text-brand-text placeholder-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Company Size */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="companySize" className="text-xs font-mono uppercase tracking-wider text-brand-text font-semibold">
            Company Size <span className="text-red-500">*</span>
          </label>
          <select
            id="companySize"
            required
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-2.5 bg-white/70 border border-brand-border rounded text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
          >
            <option value="" disabled>Select company size...</option>
            <option value="1-10">1 - 10 employees</option>
            <option value="11-50">11 - 50 employees</option>
            <option value="51-200">51 - 200 employees</option>
            <option value="201-1000">201 - 1000 employees</option>
            <option value="1000+">1000+ employees</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-brand-accent hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 rounded transition-colors duration-200 disabled:opacity-50 cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
            Adding you to waitlist...
          </>
        ) : (
          "Request Early Access"
        )}
      </button>
    </form>
  );
}
