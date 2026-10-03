"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { getDeveloperProfile } from "@/lib/portfolio-catalog";
import { StudioDeskNotes } from "@/components/StudioDeskNotes";

export function HeroSection() {
  const dev = getDeveloperProfile();

  return (
    <section className="portfolio-hero relative w-full bg-[#ffffff] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#e6e6e6] overflow-hidden">
      {/* Subtle editorial dot grid */}
      <div className="absolute inset-0 bg-figma-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Top Masthead Header (Full Width Display) */}
        <header className="mb-8 pb-8 border-b border-[#f0f0f0]" data-reveal>
          {/* Eyebrow & Live Status Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#555555] font-semibold">
                Portfolio &bull; 2026
              </span>
              <span className="text-xs font-mono text-[#cccccc]">/</span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#000000] font-semibold">
                {dev.location}
              </span>
              <span className="text-xs font-mono text-[#cccccc] hidden sm:inline">&bull;</span>
              <span className="text-[11px] font-mono text-[#666666] hidden sm:inline">
                {dev.role}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f7f5] border border-[#e6e6e6] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#1ea64a] animate-pulse" />
              <span className="text-[#333333] font-medium">{dev.availability}</span>
            </div>
          </div>

          {/* Grand Display Headline & Tactile Avatar Row (Balanced 12-Column Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Display Headline (8 cols) */}
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-bold tracking-[-0.035em] text-[#000000] leading-[1.1] max-w-3xl">
                I build practical software solutions—<br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-[#444444]">with a dash of creative spark—</span><br className="hidden sm:inline" />
                so teams can work faster and carry less.
              </h1>
            </div>

            {/* Tactile Identity Sketchbook Plate (4 cols) */}
            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
              <Link
                href="/about"
                className="relative group block w-full max-w-[270px] sm:max-w-[290px] lg:max-w-[260px] xl:max-w-[285px]"
                aria-label="About Ammardito - Read Story"
                title="About Ammardito - Read Story"
              >
                {/* Tactile tape detail */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#f4ecd6]/90 border border-[#e2d4b7]/70 backdrop-blur-xs -rotate-2 z-10 shadow-2xs pointer-events-none" />

                {/* Tactile Sketch Frame with balanced 1:1 square canvas */}
                <div className="relative bg-[#ffffff] p-3 sm:p-3.5 pb-3.5 sm:pb-4 rounded-2xl shadow-sm border border-[#e6e6e6] rotate-1.5 group-hover:rotate-0 group-hover:shadow-md transition-all duration-300">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#fafafa] border border-[#f0f0f0]">
                    <Image
                      src="/images/sketches/avatar-sketch.png"
                      alt="Ammardito Sketch"
                      fill
                      sizes="(max-width: 640px) 270px, (max-width: 1024px) 290px, 300px"
                      className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>

                  {/* Studio caption footer */}
                  <div className="pt-2.5 flex items-center justify-between">
                    <div>
                      <span className="text-xs sm:text-[13px] font-mono font-bold text-[#111111] tracking-tight block">
                        dito.pen
                      </span>
                      <span className="text-[10px] font-mono text-[#777777] block">
                        ink on paper &bull; self-study
                      </span>
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#000000] group-hover:underline flex items-center gap-1">
                      <span>Story</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </header>

        {/* Balanced Two-Column Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
          {/* Left Column (6 cols): Narrative, Capabilities & Action */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-1">
            <div>
              {/* Personal Greeting & Bio */}
              <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed mb-6">
                <strong className="font-semibold text-[#000000]">{dev.greeting}</strong> {dev.bioIntro}
              </p>

              {/* How I Can Help card */}
              <div className="p-5 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#1ea64a]" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#000000] font-bold">
                    How I Can Help
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  {dev.howICanHelp}
                </p>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href="#selected-work"
                  className="px-5 py-3 rounded-full text-xs font-semibold text-[#ffffff] bg-[#000000] hover:bg-[#222222] active:scale-95 transition-all flex items-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                >
                  <span>Case Studies ↓</span>
                </a>

                <a
                  href="#experience"
                  className="px-5 py-3 rounded-full text-xs font-semibold text-[#000000] bg-[#ffffff] border border-[#d0d0d0] hover:bg-[#f7f7f5] active:scale-95 transition-all flex items-center gap-2 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                >
                  <span>Work Experience</span>
                  <ArrowDown size={13} aria-hidden="true" />
                </a>

                <a
                  href="#contact"
                  className="px-5 py-3 rounded-full text-xs font-semibold text-[#000000] bg-[#dceeb1] hover:bg-[#cde49c] border border-[#bed68b] active:scale-95 transition-all flex items-center gap-2 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                >
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="pt-4 border-t border-[#f0f0f0] flex flex-wrap items-center gap-3 text-xs font-mono text-[#555555]">
              <a
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#000000] hover:underline"
              >
                ↗ GitHub
              </a>
              <span className="text-[#cccccc]">&bull;</span>
              <a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#000000] hover:underline"
              >
                ↗ LinkedIn
              </a>
              <span className="text-[#cccccc]">&bull;</span>
              <a
                href={`mailto:${dev.email}`}
                className="hover:text-[#000000] hover:underline"
              >
                ↗ {dev.email}
              </a>
            </div>
          </div>

          {/* Right Column (6 cols): Deep Studio Desk Notes Module */}
          <div className="lg:col-span-6 pt-1">
            <StudioDeskNotes maxDeskNotes={4} />
          </div>
        </div>
      </div>
    </section>
  );
}
