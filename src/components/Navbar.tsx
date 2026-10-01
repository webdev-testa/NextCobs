"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const menuToggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    if (sentinel.current) observer.observe(sentinel.current);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        if (document.activeElement?.closest("#mobile-navigation")) menuToggle.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: "Case Studies", href: "/work", isActive: pathname.startsWith("/work") },
    { label: "Experience", href: "/#experience", isActive: false },
    { label: "About", href: "/about", isActive: pathname === "/about" },
    { label: "Notes", href: "/notes", isActive: pathname.startsWith("/notes") },
    { label: "Pursuits", href: "/pursuits", isActive: pathname.startsWith("/pursuits") },
  ];

  return (
    <>
    <div ref={sentinel} className="absolute top-0 h-px w-px" aria-hidden="true" />
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e6e6e6] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "bg-[#ffffff] border-b border-[#f1f1f1]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
        >
          <div className="w-8 h-8 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-bold text-xs tracking-tight transition-transform group-hover:scale-105">
            AS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-[#000000]">
              Ammardito Shafaat
            </span>
            <span className="text-[11px] font-mono text-[#5c5c5c] leading-none">
              {DEVELOPER_INFO.role}
            </span>
          </div>
        </Link>

        {/* Clean Editorial Nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.isActive ? "page" : undefined}
              className={`text-sm tracking-tight transition-colors py-1 relative rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] ${
                item.isActive
                  ? "text-[#000000] font-semibold"
                  : "text-[#5c5c5c] font-normal hover:text-[#000000]"
              }`}
            >
              {item.label}
              {item.isActive && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#000000] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions: ↗ GitHub + Get in Touch */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ammar's GitHub profile (opens in new tab)"
            className="text-xs font-mono font-medium text-[#444444] hover:text-[#000000] transition-colors flex items-center gap-1 rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
          >
            <span>↗ GitHub</span>
          </a>

          <Link
            href="/#contact"
            className="px-4 py-2 rounded-full text-xs font-semibold text-[#ffffff] bg-[#000000] hover:bg-[#222222] active:scale-95 transition-all flex items-center gap-1.5 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
          >
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            ref={menuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-full text-[#000000] hover:bg-[#f7f7f5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation lg:hidden absolute top-full inset-x-0 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-[#e6e6e6] bg-[#ffffff] px-6 pt-4 pb-6 flex flex-col gap-2 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-sm py-2 border-b border-[#f1f1f1] ${
              pathname === "/" ? "font-bold text-[#000000]" : "text-[#555555]"
            }`}
          >
            Home
          </Link>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.isActive ? "page" : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm py-2 border-b border-[#f1f1f1] ${
                item.isActive ? "font-bold text-[#000000]" : "text-[#555555]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#555555] hover:text-[#000000] flex items-center gap-1 py-1"
            >
              <span>↗ GitHub</span>
            </a>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold text-center"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
    </>
  );
}
