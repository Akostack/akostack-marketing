"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Logo from "@/components/ui/logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform background opacity and blur on scroll
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 0.75]);
  const backgroundColor = useTransform(backgroundOpacity, (o) => `rgba(255, 255, 255, ${o})`);
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const borderOpacity = useTransform(scrollY, [0, 50], ["rgba(229, 231, 235, 0)", "rgba(229, 231, 235, 0.5)"]);

  const navItems = [
    { name: "Features", href: "/#features" },
    { name: "Architecture", href: "/#architecture" },
    { name: "Security", href: "/#security" },
    { name: "FAQ", href: "/#faq" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        borderColor: borderOpacity,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center focus-ring rounded p-1">
          <Logo iconClassName="h-[32px] w-auto" textClassName="text-xl font-bold tracking-tight" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors duration-200 focus-ring rounded p-1"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/#waitlist"
            onClick={(e) => handleScroll(e, "/#waitlist")}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-accent hover:bg-neutral-800 transition-colors duration-200 rounded focus-ring"
          >
            Request Early Access
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-brand-text focus-ring rounded hover:bg-brand-border-light transition-colors"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden glass-panel-darker border-t border-brand-border/50 absolute left-0 right-0 top-16 px-6 py-6 flex flex-col space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-base font-medium text-brand-muted hover:text-brand-text transition-colors py-2 focus-ring rounded"
              >
                {item.name}
              </Link>
            ))}
            <hr className="border-brand-border/50 my-2" />
            <Link
              href="/#waitlist"
              onClick={(e) => handleScroll(e, "/#waitlist")}
              className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-brand-accent hover:bg-neutral-800 transition-colors duration-200 rounded focus-ring"
            >
              Request Early Access
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
