"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { ArrowRight, ArrowUpRight, CheckCircle2, Cpu, Database, MapPin, ShieldCheck, Terminal } from "lucide-react";

export function SelectedWorkSection() {
  const lgSmWiki = PROJECTS_DATA.find((p) => p.slug === "lg-sm-wiki") || PROJECTS_DATA[0];
  const drMeoww = PROJECTS_DATA.find((p) => p.slug === "dr-meoww") || PROJECTS_DATA[1];
  const byGewa = PROJECTS_DATA.find((p) => p.slug === "bygewa") || PROJECTS_DATA[2];
  const fleetMetrics = PROJECTS_DATA.find((p) => p.slug === "automated-fleet-metrics") || PROJECTS_DATA[3];

  return (
    <section id="selected-work" className="scroll-mt-20 w-full bg-[#ffffff] py-16 sm:py-24 border-b border-[#e6e6e6]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header with Guglieri Editorial Hierarchy */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#f1f1f1]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#000000]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#555555] font-semibold">
                Selected Work &bull; Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#000000]">
              Relieving Operational Weight
            </h2>
            <p className="text-sm sm:text-base text-[#555555] mt-2 max-w-2xl">
              Systems engineered so someone else carries less busywork. Real evidence, production architectures, and measurable operational relief.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f7f7f5] hover:bg-[#e6e6e6] text-xs font-semibold text-[#000000] border border-[#e6e6e6] transition-colors shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
          >
            <span>View all 5 case studies</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* 1. Flagship Exhibit: LG SM Wiki (Full 12 columns, wide feature) */}
        {/* ========================================================================= */}
        <div className="mb-10" data-reveal="quiet">
          <Link
            href={`/work/${lgSmWiki.slug}`}
            className="exhibit-card group block p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#f2f9f4] border-2 border-[#bed68b] hover:border-[#1ea64a] shadow-sm hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Metadata & Impact Story (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#c8e6cd] text-[#000000] border border-[#a6ceab]">
                      {lgSmWiki.clientOrContext}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#ffffff] text-[#555555] border border-[#e6e6e6]">
                      {lgSmWiki.year}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#000000] text-[#ffffff] font-medium">
                      Flagship Feature
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000] group-hover:underline flex items-baseline justify-between gap-2">
                    <span>{lgSmWiki.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#555555] group-hover:text-[#000000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-[#555555] mt-1 mb-4">
                    {lgSmWiki.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#333333] leading-relaxed mb-6">
                    {lgSmWiki.summary}
                  </p>

                  {/* Primary Outcome Metric Box */}
                  <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#a6ceab] shadow-2xs mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#1ea64a] font-bold block mb-1">
                      Key Operational Result
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#000000] leading-snug">
                      {lgSmWiki.framework.result}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Metric Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#bed68b]/60">
                    {lgSmWiki.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xs sm:text-sm font-bold text-[#000000]">{m.value}</span>
                        <span className="text-[10px] font-mono text-[#555555]">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#000000]">
                    <span>Read full architecture & case study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Exhibit Mockup (Enterprise RAG Assistant) (7 cols) */}
              <div className="lg:col-span-7">
                <div className="exhibit-crop overflow-hidden rounded-2xl border border-[#bed68b] bg-[#ffffff] shadow-md group-hover:shadow-lg transition-shadow">
                  {/* Browser Window Header */}
                  <div className="px-4 py-3 bg-[#f7f7f5] border-b border-[#e6e6e6] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      </div>
                      <span className="text-[11px] font-mono text-[#555555] ml-2 font-medium">
                        LG SM Wiki &bull; Corporate Knowledge Assistant
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#c8e6cd] text-[#000000] font-semibold">
                        RBAC Active
                      </span>
                    </div>
                  </div>

                  {/* UI Preview Canvas */}
                  <div className="exhibit-media p-5 sm:p-6 bg-[#ffffff] flex flex-col gap-4 font-sans">
                    {/* Ingestion Pill */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#555555] pb-2 border-b border-[#f1f1f1]">
                      <Terminal className="w-3.5 h-3.5 text-[#1ea64a]" />
                      <span>PaddleOCR layout chunker: 24pp Handbook Ingested</span>
                    </div>

                    {/* Query Input */}
                    <div className="p-3 rounded-xl bg-[#f7f7f5] border border-[#e6e6e6] flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#1ea64a]" />
                      <span className="text-xs sm:text-sm font-medium text-[#000000]">
                        &ldquo;What is the maternal leave policy and handover procedure for engineering?&rdquo;
                      </span>
                    </div>

                    {/* Verified Answer Bubble */}
                    <div className="p-4 rounded-xl bg-[#f2f9f4] border border-[#bed68b] flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1ea64a]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Verified Policy Answer (pgvector cosine score: 0.992)</span>
                        </div>
                        <span className="text-[11px] font-mono text-[#555555]">1.4s response</span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#222222] leading-relaxed">
                        Under Corporate Policy <strong className="text-[#000000]">HR-POL-2025 §4.2</strong>, eligible engineering employees receive 90 calendar days of paid maternal leave. Engineering handovers require Jira epic reassignment 3 weeks prior to departure.
                      </p>

                      {/* Cited Doc Badge */}
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#bed68b]/40">
                        <span className="text-[11px] font-mono text-[#555555]">Cited Document:</span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#ffffff] border border-[#a6ceab] text-[#000000]">
                          📄 HR-POL-2025-v3.pdf (Page 14, Paragraph 2)
                        </span>
                        <span className="text-[10px] font-mono text-[#1ea64a] font-semibold">
                          [Department RBAC Verified]
                        </span>
                      </div>
                    </div>

                    {/* Architecture flow indicator */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] font-mono text-[#666666]">
                      <span>PaddleOCR &rarr; Boundary Chunking &rarr; pgvector RLS &rarr; Cited Generation</span>
                      <span className="font-semibold text-[#000000]">0 Hallucinations</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* 2. Paired Row: Dr. Meoww & byGewa (Two equal 6-column exhibits) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10" data-reveal-group>
          
          {/* Exhibit 2A: Dr. Meoww (Full Stack & Mobile) */}
          <Link
            href={`/work/${drMeoww.slug}`}
            data-reveal="quiet"
            className="exhibit-card group p-6 sm:p-8 rounded-3xl bg-[#f7f4fd] border-2 border-[#a991de] hover:border-[#7c56c7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-4"
          >
            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#c5b0f4] text-[#000000] border border-[#a991de]">
                  {drMeoww.clientOrContext}
                </span>
                <span className="text-xs font-mono text-[#555555]">{drMeoww.year}</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-bold tracking-tight text-[#000000] group-hover:underline flex items-center justify-between">
                <span>{drMeoww.title}</span>
                <ArrowUpRight className="w-5 h-5 text-[#555555] group-hover:text-[#000000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </h3>

              <p className="text-xs font-mono text-[#555555] mt-0.5 mb-3">
                {drMeoww.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-5">
                {drMeoww.summary}
              </p>

              {/* Visual Exhibit Mockup: Capacitor Tablet Geofence UI */}
              <div className="exhibit-crop overflow-hidden rounded-2xl border border-[#a991de] bg-[#ffffff] shadow-xs mb-5">
                <div className="px-3 py-2 bg-[#f0ecf9] border-b border-[#e1d7f5] flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#7c56c7]" />
                    <span className="font-semibold text-[#000000]">Native Geofence Radar</span>
                  </div>
                  <span className="text-[#7c56c7] font-semibold">Capacitor Bridge</span>
                </div>

                <div className="exhibit-media p-4 bg-[#ffffff] space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-[#f7f4fd] border border-[#d6c7f4] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#1ea64a] animate-ping" />
                      <span className="text-xs font-mono text-[#222222]">
                        GPS: -6.2146°, 106.8451° [Within 12m Clinic Radius]
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#c5b0f4] text-[#000000] font-bold">
                      VERIFIED
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#fafafa] border border-[#f0f0f0] flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-[#000000]">Patient #104: Mochi (Scottish Fold)</span>
                      <span className="block text-[11px] text-[#666666]">Annual Vaccine & Medical Record Updated</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#1ea64a] font-semibold">Saved to Supabase</span>
                  </div>
                </div>
              </div>

              {/* Outcome Highlight */}
              <div className="p-3 rounded-xl bg-[#ffffff] border border-[#d6c7f4] mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7c56c7] font-bold block mb-0.5">
                  Key Operational Result
                </span>
                <p className="text-xs font-semibold text-[#000000]">
                  {drMeoww.framework.result}
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-3 border-t border-[#a991de]/40 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3 font-mono text-[11px] text-[#555555]">
                <span>2 days &rarr; 3 mins</span>
                <span>&bull;</span>
                <span>$0/mo infra</span>
              </div>
              <span className="font-semibold text-[#000000] flex items-center gap-1">
                <span>Case study</span> &rarr;
              </span>
            </div>
          </Link>

          {/* Exhibit 2B: byGewa (Freelance / Web) */}
          <Link
            href={`/work/${byGewa.slug}`}
            data-reveal="quiet"
            className="exhibit-card group p-6 sm:p-8 rounded-3xl bg-[#f4f8e8] border-2 border-[#bed68b] hover:border-[#86aa3f] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-4"
          >
            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#dceeb1] text-[#000000] border border-[#bed68b]">
                  {byGewa.clientOrContext}
                </span>
                <span className="text-xs font-mono text-[#555555]">{byGewa.year}</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-bold tracking-tight text-[#000000] group-hover:underline flex items-center justify-between">
                <span>{byGewa.title}</span>
                <ArrowUpRight className="w-5 h-5 text-[#555555] group-hover:text-[#000000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </h3>

              <p className="text-xs font-mono text-[#555555] mt-0.5 mb-3">
                {byGewa.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-5">
                {byGewa.summary}
              </p>

              {/* Visual Exhibit Mockup: Apps Script Webhook Pipeline */}
              <div className="exhibit-crop overflow-hidden rounded-2xl border border-[#bed68b] bg-[#ffffff] shadow-xs mb-5">
                <div className="px-3 py-2 bg-[#f0f6e1] border-b border-[#e2edca] flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#5a7c1b]" />
                    <span className="font-semibold text-[#000000]">Zero-Cost Serverless Webhook</span>
                  </div>
                  <span className="text-[#5a7c1b] font-semibold">Vercel &bull; Google Sheets</span>
                </div>

                <div className="exhibit-media p-4 bg-[#ffffff] space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-[#f4f8e8] border border-[#bed68b] flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#000000]">Order #BGW-20250814</span>
                      <span className="block text-[11px] text-[#555555]">Hydrangea Bloom &bull; Distance: 4.8km</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#dceeb1] text-[#000000] font-bold">
                      PIPED TO SHEET
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#fafafa] border border-[#f0f0f0] flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-[#555555]">Google Apps Script: Packing slip generated</span>
                    <span className="text-[11px] font-mono text-[#1ea64a] font-semibold">$0.00 / month bill</span>
                  </div>
                </div>
              </div>

              {/* Outcome Highlight */}
              <div className="p-3 rounded-xl bg-[#ffffff] border border-[#bed68b] mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#5a7c1b] font-bold block mb-0.5">
                  Key Operational Result
                </span>
                <p className="text-xs font-semibold text-[#000000]">
                  {byGewa.framework.result}
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-3 border-t border-[#bed68b]/40 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3 font-mono text-[11px] text-[#555555]">
                <span>$0/mo bill</span>
                <span>&bull;</span>
                <span>100% direct orders</span>
              </div>
              <span className="font-semibold text-[#000000] flex items-center gap-1">
                <span>Case study</span> &rarr;
              </span>
            </div>
          </Link>

        </div>

        {/* ========================================================================= */}
        {/* 3. Supporting Feature Exhibit: Automated Fleet Metric Extraction (12 cols) */}
        {/* ========================================================================= */}
        <div data-reveal="quiet">
          <Link
            href={`/work/${fleetMetrics.slug}`}
            className="exhibit-card group block p-6 sm:p-8 lg:p-9 rounded-3xl bg-[#faf5f2] border-2 border-[#d9a892] hover:border-[#b56545] shadow-sm hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Metadata & Narrative (5 cols) */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#f3c9b6] text-[#000000] border border-[#d9a892]">
                    {fleetMetrics.clientOrContext}
                  </span>
                  <span className="text-xs font-mono text-[#555555]">{fleetMetrics.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000] group-hover:underline flex items-baseline justify-between gap-2">
                  <span>{fleetMetrics.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#555555] group-hover:text-[#000000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </h3>

                <p className="text-xs sm:text-sm font-mono text-[#555555] mt-1 mb-3">
                  {fleetMetrics.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-4">
                  {fleetMetrics.summary}
                </p>

                {/* Outcome Pill */}
                <div className="p-3.5 rounded-2xl bg-[#ffffff] border border-[#d9a892] mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#b56545] font-bold block mb-1">
                    Key Operational Result
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#000000]">
                    {fleetMetrics.framework.result}
                  </p>
                </div>

                <span className="text-xs font-semibold text-[#000000] flex items-center gap-1">
                  <span>Explore automation pipeline & code</span> &rarr;
                </span>
              </div>

              {/* Right Column: Headless OCR Terminal Visual (7 cols) */}
              <div className="lg:col-span-7">
                <div className="exhibit-crop overflow-hidden rounded-2xl border border-[#d9a892] bg-[#1a1918] text-[#e6e6e6] shadow-md">
                  <div className="px-4 py-2.5 bg-[#252422] border-b border-[#3a3835] flex items-center justify-between text-xs font-mono text-[#a09d98]">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      </div>
                      <span className="text-[11px] text-[#cccccc]">terminal &bull; headless_worker.py</span>
                    </div>
                    <span className="text-[10px] text-[#f3c9b6]">PaddleOCR Engine</span>
                  </div>

                  <div className="exhibit-media p-4 sm:p-5 font-mono text-xs leading-relaxed space-y-2 text-[#cccccc]">
                    <div className="text-[#a09d98]">
                      $ python fleet_audit.py --mode=headless --hosts=100 --ocr=paddleocr
                    </div>
                    <div className="text-[#1ea64a]">
                      &gt; Authenticating sessions across 100+ isolated host endpoints... [OK]
                    </div>
                    <div className="text-[#e0e0e0]">
                      &gt; [Host 042/100] Viewport snapshot taken &rarr; PaddleOCR bounding box extraction:
                      <span className="block text-[#f3c9b6] pl-4">CPU: 34.2% | RAM: 12.8GB / 16GB | NIC: 840 Mbps [Match: 99.8%]</span>
                    </div>
                    <div className="text-[#e0e0e0]">
                      &gt; [Host 089/100] Parsing legacy non-API appliance telemetry... [Success]
                    </div>
                    <div className="pt-2 border-t border-[#3a3835] text-[#1ea64a] font-semibold flex items-center justify-between">
                      <span>✓ 100/100 Hosts Verified &bull; Excel Audit Compiled</span>
                      <span className="text-[11px] text-[#f3c9b6]">Duration: 1h 48m (Unattended)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Link>
        </div>

        {/* Bottom CTA to view all case studies */}
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#000000] text-[#ffffff] hover:bg-[#222222] text-xs font-semibold shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
          >
            <span>View all 5 case studies & systems archive &rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
