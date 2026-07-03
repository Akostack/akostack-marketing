"use client";

import React, { useState } from "react";
import { Loader2, Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [type, setType] = useState("sales");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !org || !message) {
      setError("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    try {
      // Simulate network request latency
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
    } catch {
      setError("Failed to send inquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative pt-24 min-h-screen">
      <div className="absolute inset-0 grid-bg radial-mask -z-10 pointer-events-none opacity-40" />

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side Content */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest bg-brand-border-light px-3 py-1 rounded-full w-max block">
              Connect
            </span>
            <h1 className="font-sans font-bold text-4xl md:text-5xl tracking-tighter text-brand-text leading-tight">
              Get in Touch with our Enterprise Team.
            </h1>
            <p className="text-base text-brand-muted leading-relaxed max-w-md">
              Whether you are looking to request early access workspace pilots, inquire about self-hosting setup configurations, or explore technological integration partnerships, we are here to assist.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-brand-border/60">
            <div className="flex items-start space-x-3.5">
              <Mail className="h-5 w-5 text-brand-muted mt-0.5" />
              <div>
                <h4 className="font-sans font-semibold text-sm text-brand-text">Corporate Communications</h4>
                <p className="text-xs text-brand-muted mt-1">support@akostack.com</p>
                <p className="text-xs text-brand-muted">sales@akostack.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3.5">
              <MapPin className="h-5 w-5 text-brand-muted mt-0.5" />
              <div>
                <h4 className="font-sans font-semibold text-sm text-brand-text">Headquarters Location</h4>
                <p className="text-xs text-brand-muted mt-1">San Francisco, California</p>
                <p className="text-xs text-brand-light mt-0.5">Physical office consultations by appointment only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form Panel */}
        <div className="lg:col-span-7">
          <div className="border border-brand-border rounded-xl p-8 bg-white shadow-glass-md max-w-xl">
            {success ? (
              <div className="text-center py-12 space-y-4">
                <div className="flex justify-center">
                  <CheckCircle2 className="h-12 w-12 text-brand-text stroke-[1.5]" />
                </div>
                <h3 className="font-sans font-bold text-lg text-brand-text">Inquiry Dispatched Successfully</h3>
                <p className="text-xs text-brand-muted max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to AKOStack. Your message is queued in our customer directory. A technical representative will respond to your registered enterprise address within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSuccess(false);
                    setName("");
                    setEmail("");
                    setOrg("");
                    setMessage("");
                  }}
                  className="mt-4 text-xs font-mono uppercase tracking-wider text-brand-text hover:underline"
                >
                  Submit another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-sans font-semibold text-lg text-brand-text mb-4">Enterprise Inquiry Form</h3>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded" role="alert">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-brand-text font-semibold">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      disabled={loading}
                      className="w-full px-4 py-2.5 bg-white border border-brand-border rounded text-sm text-brand-text placeholder-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Organization Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="org" className="text-xs font-mono uppercase tracking-wider text-brand-text font-semibold">
                      Organization *
                    </label>
                    <input
                      id="org"
                      type="text"
                      required
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="Acme Corp"
                      disabled={loading}
                      className="w-full px-4 py-2.5 bg-white border border-brand-border rounded text-sm text-brand-text placeholder-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-brand-text font-semibold">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    disabled={loading}
                    className="w-full px-4 py-2.5 bg-white border border-brand-border rounded text-sm text-brand-text placeholder-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="type" className="text-xs font-mono uppercase tracking-wider text-brand-text font-semibold">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    disabled={loading}
                    className="w-full px-4 py-2.5 bg-white border border-brand-border rounded text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  >
                    <option value="sales">Request Workspace Demo / Pilot Program</option>
                    <option value="support">General Technical Support Inquiry</option>
                    <option value="partnership">Infrastructure Integration Partnership</option>
                    <option value="press">Security Compliance Inquiries</option>
                  </select>
                </div>

                {/* Message Details */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-brand-text font-semibold">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your enterprise RAG requirements or current integration needs..."
                    disabled={loading}
                    className="w-full px-4 py-2.5 bg-white border border-brand-border rounded text-sm text-brand-text placeholder-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-brand-accent hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 rounded transition-colors duration-200 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                      Sending Inquiry...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
