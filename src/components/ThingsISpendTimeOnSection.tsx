"use client";

import React from "react";
import Link from "next/link";
import { THINGS_I_SPEND_TIME_ON } from "@/data/portfolioData";
import { ArrowRight, Clock, Image as ImageIcon } from "lucide-react";
import {
  BookSketchIcon,
  ChessKnightSketchIcon,
  RunningShoeSketchIcon,
  StreetPoleSketchIcon,
} from "@/components/SketchIcons";

export function ThingsISpendTimeOnSection() {
  const getBadgeStyle = (accent: string) => {
    switch (accent) {
      case "lilac":
        return "bg-[#c5b0f4]/40 border-[#a991de] text-[#000000]";
      case "coral":
        return "bg-[#f3c9b6]/40 border-[#d9a892] text-[#000000]";
      case "mint":
        return "bg-[#c8e6cd]/40 border-[#a6ceab] text-[#000000]";
      case "cream":
        return "bg-[#f4ecd6] border-[#ded0b1] text-[#000000]";
      default:
        return "bg-[#f7f7f5] border-[#e6e6e6] text-[#000000]";
    }
  };

  const getSketchIcon = (slug: string) => {
    switch (slug) {
      case "stories":
        return <BookSketchIcon className="w-5 h-5 text-[#000000]" />;
      case "games":
        return <ChessKnightSketchIcon className="w-5 h-5 text-[#000000]" />;
      case "getting-better-at-things":
        return <RunningShoeSketchIcon className="w-5 h-5 text-[#000000]" />;
      case "travel":
        return <StreetPoleSketchIcon className="w-5 h-5 text-[#000000]" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#ffffff] py-16 sm:py-20 border-b border-[#e6e6e6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#f1f1f1] gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#5c5c5c] font-medium block mb-1">
              Perspectives, Practice & Safar
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000]">
              Things I Spend Time On
            </h2>
            <p className="text-sm text-[#5c5c5c] mt-1 max-w-xl">
              Beyond the code editor: story-driven worlds, calculating variations, physical discipline, and traveling to unfamiliar places.
            </p>
          </div>

          <Link
            href="/pursuits"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#000000] hover:text-[#444444] transition-colors self-start sm:self-auto rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
          >
            <span>View All Pursuits & Essays</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {THINGS_I_SPEND_TIME_ON.map((item, idx) => (
            <Link
              key={idx}
              href={`/pursuits/${item.slug}`}
              className="group p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#e6e6e6] hover:border-[#000000] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${getBadgeStyle(item.accent)}`}>
                    {item.tag}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full bg-[#f7f7f5] border border-[#e6e6e6] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ffffff] transition-all"
                    aria-hidden="true"
                  >
                    {getSketchIcon(item.slug)}
                  </div>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-[#000000] group-hover:text-[#000000] flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#000000]" />
                </h3>
                <p className="text-xs font-mono text-[#5c5c5c] mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f1f1f1] text-xs font-mono text-[#5c5c5c] flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.readTime}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" />
                    {item.photoCount} photos
                  </span>
                </div>
                <span className="text-[#000000] font-semibold flex items-center gap-1 group-hover:underline">
                  Read Essay &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
