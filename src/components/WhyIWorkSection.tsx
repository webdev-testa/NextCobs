"use client";

import React from "react";
import Link from "next/link";
import { WHY_I_WORK_MANIFESTO } from "@/data/portfolioData";
import { ArrowRight, Quote } from "lucide-react";

export function WhyIWorkSection() {
  return (
    <section className="w-full bg-[#f4ecd6] text-[#000000] py-16 sm:py-24 border-b border-[#ded0b1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-[11px] font-mono tracking-wider uppercase mb-8">
          <span>Why I Work</span>
        </div>

        {/* Editorial Blockquote */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#000000]">
          <Quote className="w-8 h-8 text-[#000000]/20 absolute -top-3 -left-4 bg-[#f4ecd6] p-1" />

          <p className="text-xl sm:text-2xl lg:text-[26px] font-normal leading-relaxed text-[#111111] mb-6">
            &ldquo;{WHY_I_WORK_MANIFESTO.quoteParagraph1}&rdquo;
          </p>

          <p className="text-xl sm:text-2xl lg:text-[26px] font-semibold leading-relaxed text-[#000000] mb-6">
            &ldquo;{WHY_I_WORK_MANIFESTO.quoteParagraph2}&rdquo;
          </p>

          <p className="text-lg sm:text-xl font-normal leading-relaxed text-[#222222] mb-8">
            &ldquo;{WHY_I_WORK_MANIFESTO.quoteParagraph3}&rdquo;
          </p>

          {/* Link to About */}
          <div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] active:scale-95 transition-all shadow-sm group"
            >
              <span>Read the longer backstory</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
