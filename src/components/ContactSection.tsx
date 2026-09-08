"use client";

import React, { useState } from "react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { ArrowUpRight, Check, Copy, Send } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopied(true);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      confetti({
        particleCount: 40,
        spread: 40,
        origin: { y: 0.85 },
        colors: ["#c5b0f4", "#dceeb1", "#000000"],
      });
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    window.location.href = `mailto:${DEVELOPER_INFO.email}?subject=Inquiry%20from%20${encodeURIComponent(
      sender || "Visitor"
    )}&body=${encodeURIComponent(message)}`;

    setSent(true);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.75 },
        colors: ["#dceeb1", "#c5b0f4", "#f3c9b6"],
      });
    }
  };

  return (
    <section id="contact" className="w-full bg-[#dceeb1] text-[#000000] py-16 sm:py-24 border-b border-[#bed68b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-[11px] font-mono tracking-wider uppercase mb-4 self-start">
              <span>Contact</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#000000] mb-4">
              Get in Touch
            </h2>

            <p className="text-base sm:text-lg text-[#222222] leading-relaxed mb-8 max-w-lg">
              Always open to discussing system architecture, lightweight tooling, or hard-fought boss encounters.
            </p>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                onClick={handleCopyEmail}
                className="px-5 py-2.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] transition-all flex items-center gap-2 shadow-sm active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#1ea64a]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied to Clipboard!" : DEVELOPER_INFO.email}</span>
              </button>

              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#ffffff] border border-[#bed68b] text-xs font-semibold text-[#000000] hover:bg-[#f7f7f5] transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#ffffff] border border-[#bed68b] text-xs font-semibold text-[#000000] hover:bg-[#f7f7f5] transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-xs font-mono text-[#444444]">
              Location: {DEVELOPER_INFO.location}
            </p>
          </div>

          {/* Right Column: Fast inquiry box (5 cols) */}
          <div className="lg:col-span-5">
            <form
              onSubmit={handleSendMessage}
              className="p-6 rounded-3xl bg-[#ffffff] border-2 border-[#bed68b] shadow-md flex flex-col gap-3.5"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#f1f1f1]">
                <span className="font-mono text-xs font-bold text-[#000000] uppercase tracking-wider">
                  Quick Note
                </span>
                <span className="text-[11px] text-[#666666] font-mono">Direct Mail</span>
              </div>

              <div>
                <label htmlFor="contact-sender-home" className="block text-xs font-semibold text-[#000000] mb-1">
                  Your Name or Team
                </label>
                <input
                  id="contact-sender-home"
                  type="text"
                  placeholder="e.g. Founder, Colleague, Recruiter"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#e6e6e6] bg-[#f7f7f5] focus:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                />
              </div>

              <div>
                <label htmlFor="contact-message-home" className="block text-xs font-semibold text-[#000000] mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message-home"
                  placeholder="Tell me about what you are building..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  required
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#e6e6e6] bg-[#f7f7f5] focus:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-bold hover:bg-[#222222] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{sent ? "Opening Mail App..." : "Send Note"}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
