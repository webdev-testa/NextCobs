"use client";

import React, { useState, useEffect } from "react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { ArrowUpRight, Menu, Users, X } from "lucide-react";

interface NavbarProps {
  multiplayerActive: boolean;
  onToggleMultiplayer: () => void;
}

export function Navbar({ multiplayerActive, onToggleMultiplayer }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-bold text-xs tracking-tight transition-transform group-hover:scale-105">
            AS
          </div>
          <span className="font-semibold text-sm tracking-tight text-[#000000]">
            {DEVELOPER_INFO.name}
          </span>
        </a>

        {/* Clean, Spacious Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="text-xs font-medium text-[#555555] hover:text-[#000000] transition-colors py-1"
          >
            Architecture & Projects
          </a>
          <a
            href="#api-workbench"
            className="text-xs font-medium text-[#555555] hover:text-[#000000] transition-colors py-1 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1ea64a]"></span>
            Live API Console
          </a>
          <a
            href="#pillars"
            className="text-xs font-medium text-[#555555] hover:text-[#000000] transition-colors py-1"
          >
            Engineering Pillars
          </a>
          <a
            href="#skills"
            className="text-xs font-medium text-[#555555] hover:text-[#000000] transition-colors py-1"
          >
            Skills & Experience
          </a>
        </nav>

        {/* Right CTA Actions: Clean, uncluttered */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Subtle Multiplayer Presence Toggle */}
          <button
            onClick={onToggleMultiplayer}
            title={multiplayerActive ? "Turn off multiplayer cursors" : "Turn on multiplayer cursors"}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-all ${
              multiplayerActive
                ? "bg-[#c5b0f4] border-[#a991de] text-[#000000]"
                : "bg-[#ffffff] border-[#e6e6e6] text-[#777777] hover:text-[#000000] hover:border-[#cccccc]"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span className="text-xs font-mono">
              {multiplayerActive ? "FigJam Mode" : "Cursors"}
            </span>
          </button>

          {/* Signature Primary Pill CTA */}
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
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#e6e6e6] bg-[#ffffff] px-6 pt-3 pb-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#222222] py-2 border-b border-[#f1f1f1]"
          >
            Architecture & Projects
          </a>
          <a
            href="#api-workbench"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#222222] py-2 border-b border-[#f1f1f1] flex items-center justify-between"
          >
            <span>Live API Console</span>
            <span className="text-xs bg-[#dceeb1] px-2 py-0.5 rounded-full font-mono font-bold">LIVE</span>
          </a>
          <a
            href="#pillars"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#222222] py-2 border-b border-[#f1f1f1]"
          >
            Engineering Pillars
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#222222] py-2 border-b border-[#f1f1f1]"
          >
            Skills & Experience
          </a>

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                onToggleMultiplayer();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 rounded-full border border-[#e6e6e6] text-xs font-mono text-center text-[#555555]"
            >
              {multiplayerActive ? "Disable Cursors" : "Enable Cursors"}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
