"use client";

import React from "react";

interface Partner {
  name: string;
  tagline?: string;
  badge?: string;
  symbol: React.ReactNode;
}

const PARTNERS: Partner[] = [
  {
    name: "LG Sinar Mas",
    tagline: "Enterprise AI & Systems",
    badge: "AI Lead",
    symbol: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base font-sans">
        <span className="w-6 h-6 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">
          LG
        </span>
        <span>LG Sinar Mas</span>
      </div>
    ),
  },
  {
    name: "Bank Indonesia",
    tagline: "Central Bank of Indonesia",
    badge: "Co-Trainer",
    symbol: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base font-sans">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12 2L2 7v3h20V7L12 2zm-8 9v8h3v-8H4zm6 0v8h3v-8h-3zm6 0v8h3v-8h-3zM1 21v2h22v-2H1z" />
        </svg>
        <span>Bank Indonesia</span>
      </div>
    ),
  },
  {
    name: "Google Cloud",
    tagline: "Arcade 2025",
    badge: "Facilitator",
    symbol: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base font-sans">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
        </svg>
        <span>Google Cloud</span>
      </div>
    ),
  },
  {
    name: "Bangkit Academy",
    tagline: "Google · GoTo · Traveloka",
    badge: "Mentor",
    symbol: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base font-sans">
        <span className="w-5 h-5 rounded-md bg-[#000000] text-[#ffffff] flex items-center justify-center text-[10px] font-mono font-bold">
          B!
        </span>
        <span>Bangkit Academy</span>
      </div>
    ),
  },
  {
    name: "Tokopedia",
    tagline: "GoTo Ecosystem",
    symbol: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base font-sans">
        <span className="text-base">🛍️</span>
        <span>Tokopedia</span>
      </div>
    ),
  },
  {
    name: "Gojek",
    tagline: "On-Demand Superapp",
    symbol: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base font-sans">
        <span className="w-4 h-4 rounded-full border-2 border-current inline-block" />
        <span>Gojek</span>
      </div>
    ),
  },
  {
    name: "Traveloka",
    tagline: "Lifestyle & Travel",
    symbol: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base font-sans">
        <span className="text-base">✈️</span>
        <span>Traveloka</span>
      </div>
    ),
  },
  {
    name: "Mekari",
    tagline: "InfoSec & Compliance",
    badge: "Alum",
    symbol: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base font-sans">
        <span className="font-mono text-xs font-black tracking-tighter bg-[#000000] text-[#ffffff] px-1 py-0.5 rounded-xs">
          MK
        </span>
        <span>Mekari</span>
      </div>
    ),
  },
  {
    name: "Dr. Meoww",
    tagline: "Clinic & Hospital ERP",
    badge: "Client",
    symbol: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base font-sans">
        <span className="text-base">🐾</span>
        <span>Dr. Meoww</span>
      </div>
    ),
  },
  {
    name: "byGewa Florist",
    tagline: "Order Portal Automation",
    badge: "Client",
    symbol: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base font-sans">
        <span className="text-base">💐</span>
        <span>byGewa</span>
      </div>
    ),
  },
  {
    name: "Supabase & Postgres",
    tagline: "Relational & Vector Data",
    symbol: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base font-sans">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.32 14.282a.396.396 0 0 0 .31.636H12v8.958a.396.396 0 0 0 .716.233l10.964-14.119a.396.396 0 0 0-.318-.636z" />
        </svg>
        <span>Supabase</span>
      </div>
    ),
  },
];

export function PartnerMarquee() {
  return (
    <section
      aria-label="Partner organizations and client ecosystems"
      className="w-full bg-[#ffffff] border-y border-[#f1f1f1] py-8 sm:py-10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-5">
        {/* Eyebrow caption matching the requested pattern */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="w-2 h-2 rounded-full bg-[#1ea64a] shrink-0 animate-pulse" />
          <p className="text-xs sm:text-[13px] text-[#555555] font-mono leading-relaxed">
            Partnering as a{" "}
            <span className="font-semibold text-[#000000] font-sans">
              Full Stack Engineer & AI Systems Lead
            </span>{" "}
            with teams & clients at:
          </p>
        </div>
      </div>

      {/* Infinite running logo marquee with soft edge masks */}
      <div
        className="group relative flex overflow-hidden select-none py-1"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-10 sm:gap-14 animate-marquee group-hover:[animation-play-state:paused] pr-10 sm:pr-14">
          {PARTNERS.map((partner, idx) => (
            <div
              key={`track-1-${idx}`}
              className="flex items-center gap-2 text-[#444444] hover:text-[#000000] transition-colors cursor-default whitespace-nowrap"
            >
              <div className="opacity-75 hover:opacity-100 transition-opacity">
                {partner.symbol}
              </div>
              {partner.badge && (
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] bg-[#f2f2ef] border border-[#e4e4df] px-1.5 py-0.5 rounded">
                  {partner.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Duplicate Track 2 for seamless infinite scroll */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-10 sm:gap-14 animate-marquee group-hover:[animation-play-state:paused] pr-10 sm:pr-14"
        >
          {PARTNERS.map((partner, idx) => (
            <div
              key={`track-2-${idx}`}
              className="flex items-center gap-2 text-[#444444] hover:text-[#000000] transition-colors cursor-default whitespace-nowrap"
            >
              <div className="opacity-75 hover:opacity-100 transition-opacity">
                {partner.symbol}
              </div>
              {partner.badge && (
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] bg-[#f2f2ef] border border-[#e4e4df] px-1.5 py-0.5 rounded">
                  {partner.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
