"use client";

import React, { useState, useEffect } from "react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Mail, Phone, Terminal } from "lucide-react";

export function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#000000] text-[#ffffff] pt-16 pb-12 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Wordmark & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-[#262626]">
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ffffff] mb-1">
              Ammardito Shafaat
            </div>
            <p className="text-xs font-mono tracking-mono-caption text-[#888888] uppercase">
              Backend Developer & Distributed Systems Architect • Jakarta, ID
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="px-5 py-2.5 rounded-full bg-[#141414] hover:bg-[#262626] border border-[#262626] text-xs font-mono text-[#ffffff] flex items-center gap-2 self-start md:self-auto transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle Columns: Dense Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#262626] text-xs">
          {/* Column 1: Core Navigation */}
          <div className="flex flex-col gap-3">
            <span className="font-mono uppercase font-bold text-[#888888] tracking-wider mb-1">
              Architecture & Code
            </span>
            <a href="#projects" className="text-[#cccccc] hover:text-[#ffffff] transition-colors">
              Featured Case Studies
            </a>
            <a href="#api-workbench" className="text-[#cccccc] hover:text-[#ffffff] transition-colors flex items-center gap-1.5">
              <span>Live API Console</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1ea64a]"></span>
            </a>
            <a href="#pillars" className="text-[#cccccc] hover:text-[#ffffff] transition-colors">
              Engineering Pillars (ADRs)
            </a>
            <a href="#skills" className="text-[#cccccc] hover:text-[#ffffff] transition-colors">
              Skills & Stack Matrix
            </a>
          </div>

          {/* Column 2: Key Projects */}
          <div className="flex flex-col gap-3">
            <span className="font-mono uppercase font-bold text-[#888888] tracking-wider mb-1">
              Key Repositories
            </span>
            <a href="#projects" className="text-[#cccccc] hover:text-[#ffffff] transition-colors">
              LG SM Job Portal (Spring Boot)
            </a>
            <a href="#projects" className="text-[#cccccc] hover:text-[#ffffff] transition-colors">
              OpenAI Compliance Engine (AWS)
            </a>
            <a href="#projects" className="text-[#cccccc] hover:text-[#ffffff] transition-colors">
              CalorieLens Vision (TensorFlow)
            </a>
            <a href="#projects" className="text-[#cccccc] hover:text-[#ffffff] transition-colors">
              Zero-Knowledge AES Vault
            </a>
          </div>

          {/* Column 3: Direct Connect */}
          <div className="flex flex-col gap-3">
            <span className="font-mono uppercase font-bold text-[#888888] tracking-wider mb-1">
              Channels
            </span>
            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              className="text-[#cccccc] hover:text-[#ffffff] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{DEVELOPER_INFO.email}</span>
            </a>
            <a
              href="https://wa.me/6281230126439"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-[#ffffff] transition-colors"
            >
              WhatsApp (+62 812-3012-6439)
            </a>
            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-[#ffffff] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-[#ffffff] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub (@webdev-testa)</span>
            </a>
          </div>

          {/* Column 4: System Specs */}
          <div className="flex flex-col gap-3">
            <span className="font-mono uppercase font-bold text-[#888888] tracking-wider mb-1">
              System Specs
            </span>
            <div className="flex items-center gap-2 text-[#cccccc]">
              <span className="w-2 h-2 rounded-full bg-[#1ea64a] animate-pulse"></span>
              <span>Available for Hire</span>
            </div>
            <div className="text-[#888888] font-mono text-[11px]">
              Local Time: {currentTime || "14:45:00"} (WIB)
            </div>
            <div className="text-[#888888] font-mono text-[11px]">
              Deployed on Next.js 15 & Bun
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#888888]">
          <div>
            © {new Date().getFullYear()} Ammardito Shafaat. Built with the Figma-Apple Editorial Design System.
          </div>

          <div className="flex items-center gap-4">
            <span>Java 21</span>
            <span>•</span>
            <span>Spring Boot 3</span>
            <span>•</span>
            <span>TensorFlow</span>
            <span>•</span>
            <span>Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
