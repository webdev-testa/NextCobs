"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { getDeveloperProfile } from "@/lib/portfolio-catalog";
import { RESUME_URL } from "@/data/portfolioData";
import { StudioDeskNotes } from "@/components/StudioDeskNotes";
import { BlurredPortrait } from "@/components/BlurredPortrait";

export function HeroSection() {
  const dev = getDeveloperProfile();

  return (
    <section id="intro" className="portfolio-hero w-full bg-[var(--color-canvas)] pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-[var(--color-hairline)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 hero-copy">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-6 text-xs text-[var(--color-muted-ink)]">
              <span className="font-mono">{dev.role}</span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-semantic-success)]" aria-hidden="true" />
                {dev.availability}
              </span>
            </div>
            <h1 className="max-w-[24ch] text-[34px] sm:text-[44px] lg:text-[48px] xl:text-[56px] font-semibold tracking-[-0.035em] text-[var(--color-ink)] leading-[1.1]">
              I build web apps, mobile tools, and AI that solve real problems cleanly.
            </h1>
            <p className="max-w-[58ch] mt-6 text-base sm:text-lg text-[#333333] leading-relaxed">
              Hey, I&apos;m Dito, a software engineer based in Jakarta and a System &amp; Information Technology graduate from ITB. I like building things that are useful, straightforward, and pleasant to use.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a href="#selected-work" className="min-h-11 inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-[var(--color-ink)] text-[var(--color-canvas)] hover:bg-[#333333] transition-colors">
                Case Studies <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label="View résumé, PDF (opens in a new tab)" className="min-h-11 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#cccccc] text-sm font-semibold hover:bg-[var(--color-surface-soft)] transition-colors">
                View résumé <span className="text-xs font-normal text-[var(--color-muted-ink)]">· PDF</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-12 flex flex-col items-start lg:items-center">
            <Link href="/about" aria-label={`Read ${dev.name}'s story`} className="relative group block w-[220px] sm:w-[260px] lg:w-[300px] xl:w-[320px]">
              <div aria-hidden="true" className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-[var(--color-block-cream)] -rotate-2 z-10" />
              <div className="p-3 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-hairline)] rotate-1 group-hover:rotate-0 transition-transform duration-200">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <BlurredPortrait
                    alt={`Portrait placeholder of ${dev.name} — still choosing a good looking photo`}
                    priority
                  />
                </div>
                <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-[var(--color-muted-ink)]">{dev.shortName} · Jakarta</span>
                  <span className="inline-flex items-center gap-1 font-semibold group-hover:underline">Story <ArrowRight size={14} aria-hidden="true" /></span>
                </div>
              </div>
            </Link>
            <aside aria-label="Current project" className="relative mt-5 lg:mt-6 ml-6 lg:ml-16 max-w-[260px] p-5 bg-[var(--color-block-mint)] rounded-sm -rotate-2">
              <span aria-hidden="true" className="absolute -top-2 left-8 w-12 h-4 bg-[var(--color-block-cream)] rotate-3" />
              <p className="text-xs font-medium text-[#294c30] mb-2">Currently building</p>
              <p className="text-base font-medium leading-relaxed text-[#183820]">Shipping rate integration in order form for price estimate</p>
            </aside>
          </div>
        </div>
        <div id="studio" className="mt-12 lg:mt-14 pt-8 border-t border-[var(--color-hairline)]">
          <StudioDeskNotes maxDeskNotes={4} />
        </div>
      </div>
    </section>
  );
}
