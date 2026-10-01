"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CURRENTLY_DATA, NOTES_DATA } from "@/data/portfolioData";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import {
  BookSketchIcon,
  GamepadSketchIcon,
  ActivitySketchIcon,
  CodeSketchIcon,
} from "@/components/SketchIcons";

export function PersonalNotesSection() {
  const featuredNote = NOTES_DATA[0]; // Why I Work (Philosophy essay)
  const secondaryNote = NOTES_DATA[1]; // The $0 Backend

  const getIcon = (icon: string) => {
    switch (icon) {
      case "book":
        return <BookSketchIcon className="w-4 h-4 text-[#000000]" />;
      case "gamepad":
        return <GamepadSketchIcon className="w-4 h-4 text-[#000000]" />;
      case "activity":
        return <ActivitySketchIcon className="w-4 h-4 text-[#000000]" />;
      case "code":
        return <CodeSketchIcon className="w-4 h-4 text-[#000000]" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#ffffff] py-16 sm:py-24 border-b border-[#e6e6e6]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#e6e6e6]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#000000]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#555555] font-semibold">
                Candid Thoughts &bull; Field Notes &amp; Reflections
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#000000]">
              Notes &amp; Active Focus
            </h2>
            <p className="text-sm sm:text-base text-[#555555] mt-2 max-w-2xl">
              Candid write-ups on software systems, small utility tools, and the practical lessons learned from building things that last.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/notes"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f7f7f5] hover:bg-[#e6e6e6] text-xs font-semibold text-[#000000] border border-[#e6e6e6] transition-colors group"
            >
              <span>All Notes</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/pursuits"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ffffff] hover:bg-[#f7f7f5] text-xs font-semibold text-[#000000] border border-[#d0d0d0] transition-colors group"
            >
              <span>Pursuits</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 12-Column Unified Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Field Notes & Essays */}
          <div className="lg:col-span-7 flex flex-col gap-6" data-reveal-group>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#000000]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#333333] font-semibold">
                  Field Notes &bull; Thoughts &amp; Essays
                </span>
              </div>
              <span className="text-xs font-mono text-[#888888]">Architecture &amp; Tools</span>
            </div>

            {/* Featured Essay: Prominent Editorial Card */}
            <Link
              data-reveal="quiet"
              href={`/notes/${featuredNote.slug}`}
              className="group p-6 sm:p-8 rounded-3xl bg-[#f7f7f5] border border-[#e6e6e6] hover:border-[#000000] shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#dceeb1] text-[#000000] border border-[#bed68b]">
                      Featured Note
                    </span>
                    <span className="text-xs font-mono text-[#555555]">
                      {featuredNote.date}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#555555]">
                    {featuredNote.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#000000] group-hover:underline flex items-start justify-between gap-3 mb-2">
                  <span>{featuredNote.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#555555] group-hover:text-[#000000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1" />
                </h3>

                <p className="text-xs sm:text-sm font-mono text-[#555555] mb-4">
                  {featuredNote.subtitle}
                </p>

                <p className="text-sm text-[#333333] leading-relaxed mb-6">
                  {featuredNote.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e6e6e6] flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {featuredNote.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#ffffff] text-[#555555] border border-[#e6e6e6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#000000] flex items-center gap-1">
                  <span>Read note</span> &rarr;
                </span>
              </div>
            </Link>

            {/* Secondary Note: Compact Horizontal Card */}
            {secondaryNote && (
              <Link
                data-reveal="quiet"
                href={`/notes/${secondaryNote.slug}`}
                className="group p-5 sm:p-6 rounded-2xl bg-[#ffffff] border border-[#e6e6e6] hover:border-[#000000] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#555555]">
                      <BookOpen className="w-3.5 h-3.5 text-[#000000]" />
                      <span>{secondaryNote.date}</span>
                    </div>
                    <span className="text-xs font-mono text-[#555555]">{secondaryNote.readTime}</span>
                  </div>

                  <h4 className="text-lg font-bold tracking-tight text-[#000000] group-hover:underline flex items-center justify-between gap-2">
                    <span>{secondaryNote.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#555555] group-hover:text-[#000000] transition-transform shrink-0" />
                  </h4>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mt-2">
                    {secondaryNote.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#f1f1f1] flex items-center justify-between text-xs">
                  <div className="flex gap-1.5">
                    {secondaryNote.tags.map((t) => (
                      <span key={t} className="text-[11px] font-mono text-[#777777]">#{t}</span>
                    ))}
                  </div>
                  <span className="font-semibold text-[#000000]">Read note &rarr;</span>
                </div>
              </Link>
            )}

            <div className="pt-2">
              <Link
                href="/notes"
                className="text-xs font-mono text-[#555555] hover:text-[#000000] hover:underline inline-flex items-center gap-1"
              >
                <span>Browse all field notes &amp; reflections &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Active Focus ("Currently") & Pursuits Artifact */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-reveal-group>
            
            {/* Active Focus Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1ea64a] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#000000] font-semibold">
                  Currently &bull; What I&apos;m Exploring
                </span>
              </div>
              <span className="text-xs font-mono text-[#888888]">In Progress</span>
            </div>

            {/* Compact Focus Rows without bulky cards */}
            <div className="divide-y divide-[#f1f1f1] rounded-3xl bg-[#fafaf8] border border-[#e6e6e6] p-4 sm:p-5 shadow-2xs">
              {CURRENTLY_DATA.map((item, idx) => (
                <div key={idx} className="py-3 first:pt-1 last:pb-1 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#ffffff] border border-[#e6e6e6] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {getIcon(item.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] font-semibold block">
                      {item.label}
                    </span>
                    <p className="text-xs sm:text-sm text-[#222222] font-medium leading-relaxed mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tactile Pursuits Artifact (Polaroid Sketchbook Card) */}
            <div className="p-5 rounded-3xl bg-[#f7f7f5] border border-[#e6e6e6] shadow-xs relative group transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#555555] font-semibold">
                  Off-Screen &bull; Pursuits &amp; Sketches
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ffffff] border border-[#e6e6e6] text-[#555555]">
                  Ink Study
                </span>
              </div>

              {/* Tangible Sketch Image Frame */}
              <Link href="/pursuits" className="block relative w-full h-44 rounded-2xl overflow-hidden bg-[#ffffff] border border-[#e6e6e6] mb-3 group/img">
                <Image
                  src="/images/sketches/street-sketch.png"
                  alt="Street sketch study"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center group-hover/img:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[#ffffff]">
                  <span className="text-[11px] font-mono">Jakarta street sketch &bull; ink on paper</span>
                  <span className="text-[11px] font-mono underline">Explore &rarr;</span>
                </div>
              </Link>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-[#000000]">
                    Stories, Games, Training &amp; Travel
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed mt-1">
                    Living inside someone else&apos;s perspective for a few hours. Deliberate practice with zero noise.
                  </p>
                </div>
                <Link
                  href="/pursuits"
                  className="shrink-0 p-2 rounded-full bg-[#000000] text-[#ffffff] hover:bg-[#222222] transition-colors"
                  aria-label="Explore Pursuits"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
