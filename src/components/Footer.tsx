"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Mail, Check, Github, Twitter, Linkedin } from "lucide-react";

export function Footer({ onOpenContact }: { onOpenContact: () => void }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sfTime, setSfTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setSfTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alex@rivera.design");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="bg-[#090909] text-[#999999] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#262626]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-10 pb-16 border-b border-[#262626]">
          {/* Left Column: Monogram & Bio */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center font-bold text-sm text-white">
                AR
              </div>
              <span className="text-white font-semibold tracking-tight text-base font-[var(--font-outfit)]">
                Alex Rivera
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#999999] max-w-sm leading-relaxed">
              Creative technologist and interaction architect engineering dark-canvas spatial systems, GLSL shaders,
              and artboard-grade interface architectures.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className="px-3.5 py-1.5 rounded-full bg-[#141414] hover:bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-white flex items-center gap-2 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span className="text-[#22c55e]">Email Copied!</span>
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
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-white/90 text-black text-xs font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
              >
                <span>Commission Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Nav Column 1: System */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 text-xs">
            <div className="font-mono text-white uppercase tracking-wider text-[11px]">System</div>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none rounded">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#lab" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none rounded">
                  Interactive Lab
                </a>
              </li>
              <li>
                <a href="#design-system" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none rounded">
                  Token Matrix
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none rounded">
                  Accolades &amp; Career
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Tech */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 text-xs">
            <div className="font-mono text-white uppercase tracking-wider text-[11px]">Stack</div>
            <ul className="space-y-2 text-[#777]">
              <li>WebGL &amp; GLSL Shaders</li>
              <li>Next.js 15 (RSC)</li>
              <li>Motion / React 19</li>
              <li>Tailwind CSS v4</li>
              <li>WebAssembly Tokens</li>
            </ul>
          </div>

          {/* Nav Column 3: Ticker & Location */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 space-y-3 text-xs">
            <div className="font-mono text-white uppercase tracking-wider text-[11px]">Studio Clock</div>
            <div className="p-3.5 rounded-xl bg-[#141414] border border-[#262626] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#999999]">San Francisco, CA</span>
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              </div>
              <div className="text-lg font-bold font-mono text-white">{sfTime || "04:42:00 PM"}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <div>© {new Date().getFullYear()} Alex Rivera. Artboard Design System.</div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none rounded px-1"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none rounded px-1"
            >
              Twitter / X
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none rounded px-1"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
