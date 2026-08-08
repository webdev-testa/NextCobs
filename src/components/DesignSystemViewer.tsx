"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Layers, Copy, Check, Sparkles, Terminal, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function DesignSystemViewer() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToken = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const colorTokens = [
    { name: "canvas", hex: "#090909", desc: "Default dark artboard surface", text: "text-white" },
    { name: "surface-1", hex: "#141414", desc: "Elevation 1: Bento tiles & cards", text: "text-white" },
    { name: "surface-2", hex: "#1c1c1c", desc: "Elevation 2: Hover & active lift", text: "text-white" },
    { name: "hairline", hex: "#262626", desc: "1px structural dividers", text: "text-white" },
    { name: "accent-blue", hex: "#0099ff", desc: "Single chromatic focus & selection", text: "text-black" },
    { name: "gradient-violet", hex: "#6a4cf5", desc: "Spotlight showcase ground (violet)", text: "text-white" },
    { name: "gradient-magenta", hex: "#d44df0", desc: "Spotlight showcase ground (magenta)", text: "text-black" },
    { name: "gradient-orange", hex: "#ff7a3d", desc: "Spotlight showcase ground (orange)", text: "text-black" },
    { name: "gradient-coral", hex: "#ff5577", desc: "Spotlight showcase ground (coral)", text: "text-white" },
  ];

  const typographyRamp = [
    { token: "display-xxl", size: "110px", tracking: "-5.5px", sample: "Lumina" },
    { token: "display-xl", size: "85px", tracking: "-4.25px", sample: "Artboard System" },
    { token: "display-lg", size: "62px", tracking: "-3.1px", sample: "Spatial Interface" },
    { token: "display-md", size: "32px", tracking: "-1.0px", sample: "Bento Grid Architecture" },
    { token: "headline", size: "22px", tracking: "-0.8px", sample: "Tactile Physics & OpenType Features" },
    { token: "body", size: "15px", tracking: "-0.15px", sample: "Inter Variable cv05, cv11, ss03 active" },
  ];

  return (
    <section id="design-system" className="py-24 border-b border-[#262626] bg-[#090909]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[11px] font-mono uppercase tracking-wider text-[#999999] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#0099ff]" />
            <span>Framer-Apple Design Tokens</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.035em] font-[var(--font-outfit)]">
            Design System &amp; Color Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#999999] max-w-2xl leading-relaxed">
            The mathematical design tokens powering this portfolio — derived directly from{" "}
            <code className="text-white font-mono bg-[#141414] px-2 py-0.5 rounded border border-[#262626]">
              DESIGN.md
            </code>
            . Click or press enter on any token to copy to clipboard.
          </p>
        </div>

        {/* Color Matrix */}
        <div className="mb-16">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#999999] mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0099ff]" />
            <span>Surface &amp; Atmosphere Tokens</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {colorTokens.map((c) => (
              <div
                key={c.name}
                role="button"
                tabIndex={0}
                aria-label={`Copy color token ${c.name} with hex ${c.hex}`}
                onClick={() => copyToken(c.hex, c.name)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") copyToken(c.hex, c.name);
                }}
                className="group cursor-pointer rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#444] p-4 transition-all duration-200 hover:shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex flex-col justify-between h-36 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-7 h-7 rounded-full border border-white/20 shadow-inner"
                    style={{ backgroundColor: c.hex }}
                  />
                  {copiedToken === c.name ? (
                    <span className="text-[10px] text-[#22c55e] font-mono flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#999999] opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>

                <div>
                  <div className="text-xs font-bold text-white font-mono tracking-tight">
                    {c.name}
                  </div>
                  <div className="text-[11px] font-mono text-[#999999]">{c.hex}</div>
                  <div className="text-[10px] text-[#666666] leading-tight mt-1 line-clamp-1">
                    {c.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Ramp */}
        <div className="rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-9">
          <div className="flex items-center justify-between pb-6 border-b border-[#262626] mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white font-[var(--font-outfit)]">
                Negative-Tracked Typographic Ramp
              </h3>
              <p className="text-xs text-[#999999]">
                Aggressive letter-spacing for poster-grade display impact with Inter OpenType character features.
              </p>
            </div>
            <span className="text-xs font-mono text-[#0099ff] bg-[#1c1c1c] px-3 py-1 rounded-full border border-[#262626]">
              cv01, cv05, cv11, ss03
            </span>
          </div>

          <div className="space-y-6">
            {typographyRamp.map((t, idx) => (
              <div
                key={t.token}
                className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 pb-5 border-b border-[#262626]/60 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3 min-w-[220px]">
                  <span className="text-xs font-mono text-[#0099ff] font-medium">{t.token}</span>
                  <span className="text-xs font-mono text-[#999999]">
                    {t.size} · {t.tracking}
                  </span>
                </div>

                <div
                  className="text-white font-[var(--font-outfit)] font-semibold truncate leading-none"
                  style={{
                    fontSize: idx === 0 ? "38px" : idx === 1 ? "30px" : idx === 2 ? "24px" : "18px",
                    letterSpacing: t.tracking,
                  }}
                >
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
