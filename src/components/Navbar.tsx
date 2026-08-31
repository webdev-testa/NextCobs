"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e6e6e6] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "bg-[#ffffff] border-b border-[#f1f1f1]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand & Monogram */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-bold text-xs tracking-tight transition-transform group-hover:scale-105">
            AS
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-[#000000]">
              {DEVELOPER_INFO.name}
            </span>
            <span className="text-xs font-mono text-[#666666] hidden sm:inline">
              Full Stack &bull; AI/ML
            </span>
          </div>
        </Link>

        {/* Clean Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          <a
            href="#projects"
            className="text-xs font-medium text-[#555555] hover:text-[#000000] transition-colors py-1"
          >
            Projects & Systems
          </a>
          <a
            href="#stories"
            className="text-xs font-medium text-[#555555] hover:text-[#000000] transition-colors py-1"
          >
            Stories & Passions
          </a>
          <a
            href="#toolbox"
            className="text-xs font-medium text-[#555555] hover:text-[#000000] transition-colors py-1"
          >
            Toolbox
          </a>
          <a
            href="#experience"
            className="text-xs font-medium text-[#555555] hover:text-[#000000] transition-colors py-1"
          >
            Experience
          </a>
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Primary Pill CTA */}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-xs font-semibold text-[#ffffff] bg-[#000000] hover:bg-[#222222] active:scale-95 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#000000] hover:bg-[#f7f7f5] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#e6e6e6] bg-[#ffffff] px-6 pt-3 pb-6 flex flex-col gap-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#222222] py-2 border-b border-[#f1f1f1]"
          >
            Projects & Systems
          </a>
          <a
            href="#stories"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#222222] py-2 border-b border-[#f1f1f1]"
          >
            Stories & Passions
          </a>
          <a
            href="#toolbox"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#222222] py-2 border-b border-[#f1f1f1]"
          >
            Toolbox
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#222222] py-2 border-b border-[#f1f1f1]"
          >
            Experience
          </a>

          <div className="pt-2 flex items-center justify-between gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
