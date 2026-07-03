"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  const futureLinks = [
    { name: "Documentation", badge: "Coming Soon" },
    { name: "Careers", badge: "Coming Soon" },
  ];

  return (
    <footer className="bg-white border-t border-brand-border py-12 md:py-20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand Column */}
        <div className="flex flex-col space-y-4 md:col-span-2">
          <Link href="/" className="flex items-center space-x-2 focus-ring rounded p-1 w-max">
            <span className="font-sans font-bold text-xl tracking-tighter text-brand-text">
              AKO<span className="font-normal text-brand-muted">Stack</span>
            </span>
          </Link>
          <p className="text-sm text-brand-muted max-w-sm">
            AKOStack is a secure enterprise AI knowledge platform that transforms scattered organizational knowledge into grounded, citation-backed AI answers.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AKOStack GitHub Profile"
              className="text-brand-muted hover:text-brand-text transition-colors duration-200 focus-ring rounded p-1"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AKOStack LinkedIn Profile"
              className="text-brand-muted hover:text-brand-text transition-colors duration-200 focus-ring rounded p-1"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AKOStack Instagram Profile"
              className="text-brand-muted hover:text-brand-text transition-colors duration-200 focus-ring rounded p-1"
            >
              <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Resources / Company Column */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-wider text-brand-text font-semibold">
            Company
          </h4>
          <nav className="flex flex-col space-y-2.5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-brand-muted hover:text-brand-text transition-colors duration-200 focus-ring rounded p-1 w-max"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Future links column */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-wider text-brand-text font-semibold">
            Platform
          </h4>
          <div className="flex flex-col space-y-2.5">
            {futureLinks.map((link) => (
              <div
                key={link.name}
                className="flex items-center space-x-2 text-sm text-brand-light"
              >
                <span>{link.name}</span>
                <span className="text-[10px] font-mono border border-brand-border px-1.5 py-0.5 rounded text-brand-light bg-brand-border-light">
                  {link.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-20 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-xs text-brand-light">
          &copy; {currentYear} AKOStack Inc. All rights reserved.
        </p>
        <p className="text-xs text-brand-light">
          Designed with enterprise security best practices and privacy-first architecture.
        </p>
      </div>
    </footer>
  );
}
