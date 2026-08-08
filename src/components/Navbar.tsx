"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X, Mail, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alex@rivera.design");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { label: "Selected Work", href: "#work" },
    { label: "Interactive Lab", href: "#lab" },
    { label: "Design System", href: "#design-system" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#090909]/85 backdrop-blur-md border-b border-[#262626]/80 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#"
          aria-label="Alex Rivera Portfolio Home"
          className="group flex items-center gap-3 text-white focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909] rounded-full focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#141414] border border-[#262626] group-hover:border-[#0099ff]/60 group-hover:shadow-[0_0_12px_rgba(0,153,255,0.3)] transition-all duration-300">
            <span className="font-semibold text-sm tracking-tight text-white">AR</span>
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#22c55e] border-2 border-[#090909]" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm text-white tracking-tight leading-tight group-hover:text-white/90">
              Alex Rivera
            </span>
            <span className="text-[11px] text-[#999999] tracking-normal font-mono">
              Creative Technologist
            </span>
          </div>
        </a>

        {/* Center Nav Links - Desktop */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-[#141414]/90 border border-[#262626] rounded-full px-4 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-[#999999] hover:text-white hover:bg-[#1c1c1c] rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#999999] hover:text-white bg-[#141414] hover:bg-[#1c1c1c] border border-[#262626] rounded-full transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
            title="Copy email to clipboard"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                <span className="text-[#22c55e]">Copied</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5" />
                <span>alex@rivera.design</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-white/90 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle (44px min touch target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#141414] border border-[#262626] text-[#999999] hover:text-white focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#090909] border-b border-[#262626] px-6 py-6 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-[#999999] hover:text-white hover:bg-[#141414] rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#262626] flex flex-col gap-3">
              <button
                onClick={() => {
                  handleCopyEmail();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-medium text-white bg-[#141414] border border-[#262626] rounded-full focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#22c55e]" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-[#999999]" />
                    <span>Copy alex@rivera.design</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold text-black bg-white rounded-full focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
