"use client";

import React, { useState } from "react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import {
  ArrowUpRight,
  Check,
  Copy,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";

export function InteractiveContact() {
  const [selectedRoleType, setSelectedRoleType] = useState("Senior / Mid Backend Engineer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const roleOptions = [
    "Senior / Mid Backend Engineer",
    "Java / Spring Boot Microservices",
    "Machine Learning & AI Integration",
    "Security & ISO 27001 Audit",
    "Consulting / Architecture Review",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#dceeb1", "#c5b0f4", "#f3c9b6", "#c8e6cd", "#ff3d8b", "#000000"],
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="w-full bg-[#ffffff] py-16 lg:py-24 border-b border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature Pink Color-Block Container */}
        <div className="w-full rounded-[24px] lg:rounded-[32px] bg-[#efd4d4] p-6 sm:p-10 lg:p-12 border border-[#d8b5b5] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#000000]/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-mono font-bold tracking-mono-eyebrow uppercase mb-3">
                <Mail className="w-3.5 h-3.5 text-[#ff3d8b]" />
                <span>DIRECT HIRE & COLLABORATION CHANNEL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#000000]">
                Let's Build Something High-Scale.
              </h2>
              <p className="text-sm sm:text-base font-normal text-[#000000]/80 max-w-2xl mt-2">
                Available for full-time backend engineering positions, distributed systems consulting, and machine learning pipeline integration.
              </p>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffffff] border border-[#000000]/10 text-xs font-mono font-bold text-[#000000] self-start md:self-auto">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1ea64a] animate-pulse"></span>
              <span>Available Immediately</span>
            </div>
          </div>

          {/* Grid Layout: Contact Form + Direct Channels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Info & Quick Copy (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#000000]/10 shadow-sm">
                <h3 className="font-bold text-lg text-[#000000] mb-2">Direct Contact Details</h3>
                <p className="text-xs text-[#555555] mb-4">
                  Feel free to send an email, reach out via WhatsApp, or connect on LinkedIn.
                </p>

                <div className="space-y-3">
                  {/* Email Box with 1-click copy */}
                  <div className="p-3 rounded-xl bg-[#f7f7f5] border border-[#e6e6e6] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#000000]" />
                      <span className="text-xs font-mono font-semibold text-[#000000]">
                        {DEVELOPER_INFO.email}
                      </span>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-md hover:bg-[#e6e6e6] text-[#000000] transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-[#1ea64a]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="p-3 rounded-xl bg-[#f7f7f5] border border-[#e6e6e6] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#000000]" />
                      <span className="text-xs font-mono font-semibold text-[#000000]">
                        {DEVELOPER_INFO.phone}
                      </span>
                    </div>

                    <a
                      href="https://wa.me/6281230126439"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-[#1ea64a] hover:underline"
                    >
                      WhatsApp ↗
                    </a>
                  </div>
                </div>

                {/* Social Channels Pills */}
                <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-[#f1f1f1]">
                  <a
                    href={DEVELOPER_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-[#f7f7f5] hover:bg-[#000000] hover:text-[#ffffff] border border-[#e6e6e6] transition-all flex items-center gap-1.5"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={DEVELOPER_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-[#f7f7f5] hover:bg-[#000000] hover:text-[#ffffff] border border-[#e6e6e6] transition-all flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-5 rounded-2xl bg-[#ffffff]/60 border border-[#000000]/10 text-xs text-[#000000]/80 leading-relaxed">
                ⚡ <strong>Fast Response:</strong> Usually replies within 2–4 hours during business hours (Jakarta UTC+7). Open to full-time relocation or global remote teams.
              </div>
            </div>

            {/* Right Column: Interactive Hiring Form (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#ffffff] border border-[#000000]/10 shadow-sm">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#dceeb1] text-[#000000] flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#000000]">Inquiry Sent Successfully!</h3>
                  <p className="text-sm text-[#555555] max-w-md">
                    Thank you, {name || "there"}! Ammardito has received your message and will follow up shortly at {email || "your email"}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="font-bold text-lg text-[#000000]">Send an Inquiry / Project Opportunity</h3>

                  {/* Role Type Selector Pills */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#666666] mb-2">
                      Opportunity Scope:
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {roleOptions.map((role) => (
                        <button
                          type="button"
                          key={role}
                          onClick={() => setSelectedRoleType(role)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                            selectedRoleType === role
                              ? "bg-[#000000] text-[#ffffff] shadow-sm"
                              : "bg-[#f7f7f5] text-[#555555] hover:bg-[#e6e6e6] hover:text-[#000000]"
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#666666] mb-1">
                        Your Name / Company
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex (Engineering Lead)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e6e6e6] text-xs sm:text-sm bg-[#f7f7f5] focus:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#666666] mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e6e6e6] text-xs sm:text-sm bg-[#f7f7f5] focus:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#666666] mb-1">
                      Project Details / Role Overview
                    </label>
                    <textarea
                      rows={4}
                      placeholder={`Tell me about your tech stack, system challenges, or open role for ${selectedRoleType}...`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e6e6e6] text-xs sm:text-sm bg-[#f7f7f5] focus:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#000000] hover:bg-[#222222] text-[#ffffff] text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all"
                  >
                    <span>Send Message & Trigger Confetti</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
