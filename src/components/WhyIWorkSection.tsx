"use client";

import React from "react";
import Link from "next/link";
import { WHY_I_WORK_MANIFESTO } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";

export function WhyIWorkSection() {
  return (
    <section className="w-full bg-[#faf7ef] text-[#000000] py-20 sm:py-28 lg:py-36 border-b border-[#ebd9bc]" data-reveal="quiet">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Subtle Eyebrow */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#000000]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#555555] font-semibold">
            Manifesto &bull; Core Philosophy
          </span>
        </div>

        {/* Large Typographic Pause with generous breathing room */}
        <div className="max-w-5xl">
          <blockquote className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-normal leading-[1.12] tracking-[-0.035em] text-[#111111]">
            &ldquo;I can&apos;t carry what other people carry.<br className="hidden sm:inline" />
            <span className="font-serif italic text-[#333333]">
              {" "}But I can build things that make the weight lighter.&rdquo;
            </span>
          </blockquote>

          {/* Supporting Thought without heavy quote card borders */}
          <div className="mt-8 pt-8 border-t border-[#ebd9bc]/60 max-w-2xl">
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
              &ldquo;{WHY_I_WORK_MANIFESTO.quoteParagraph1} {WHY_I_WORK_MANIFESTO.quoteParagraph3}&rdquo;
            </p>

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#000000] hover:underline group"
              >
                <span>Read the backstory on how I got here</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
