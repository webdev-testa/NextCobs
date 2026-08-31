"use client";

import React, { useState } from "react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { ArrowUpRight, Check, Copy, Send } from "lucide-react";
import confetti from "canvas-confetti";

export function InteractiveContact() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopied(true);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      confetti({
        particleCount: 50,
        spread: 45,
        origin: { y: 0.8 },
        colors: ["#efd4d4", "#ff3d8b", "#000000"],
      });
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Open mail client directly
    window.location.href = `mailto:${DEVELOPER_INFO.email}?subject=Project%20Inquiry%20from%20${encodeURIComponent(
      sender || "Visitor"
    )}&body=${encodeURIComponent(message)}`;
    
    setSent(true);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#ff3d8b", "#dceeb1", "#c5b0f4"],
      });
    }
  };

  return (
    <section id="contact" className="w-full bg-[#efd4d4] text-[#000000] py-16 sm:py-20 border-b border-[#d8b5b5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-mono tracking-wide mb-3 self-start">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#000000] mb-4">
              Let's Build Something Meaningful Together.
            </h2>
            <p className="text-sm sm:text-base text-[#333333] leading-relaxed mb-8 max-w-lg">
              Whether you have a full-stack project for your business, want to discuss enterprise AI systems, or just want to connect over story-driven games and archery—I’d love to hear from you.
            </p>

            {/* Direct Email Action */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="px-5 py-2.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] transition-all flex items-center gap-2 shadow-md"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#1ea64a]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied to Clipboard!" : DEVELOPER_INFO.email}</span>
              </button>

              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#ffffff] border border-[#d8b5b5] text-xs font-semibold text-[#000000] hover:bg-[#f7f7f5] transition-colors flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#ffffff] border border-[#d8b5b5] text-xs font-semibold text-[#000000] hover:bg-[#f7f7f5] transition-colors flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Quick Message Box (6 cols) */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSendMessage}
              className="p-6 sm:p-7 rounded-3xl bg-[#ffffff] border-2 border-[#d8b5b5] shadow-lg flex flex-col gap-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#f1f1f1]">
                <span className="font-mono text-xs font-bold text-[#000000] uppercase tracking-wider">
                  Quick Inquiry
                </span>
                <span className="text-xs text-[#666666] font-mono">Direct Mail</span>
              </div>

              <div>
                <label htmlFor="contact-sender" className="block text-xs font-semibold text-[#000000] mb-1">
                  Your Name or Company
                </label>
                <input
                  id="contact-sender"
                  type="text"
                  placeholder="e.g. Founder at Startup / Colleague"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#e6e6e6] bg-[#f7f7f5] focus:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-[#000000] mb-1">
                  Message / Project Idea
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me a bit about what you're building..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#e6e6e6] bg-[#f7f7f5] focus:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#000000] text-[#ffffff] text-xs font-bold hover:bg-[#222222] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{sent ? "Opening Mail Client..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
