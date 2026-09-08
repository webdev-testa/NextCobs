"use client";

import React from "react";
import { THINGS_I_SPEND_TIME_ON } from "@/data/portfolioData";

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

  return (
    <section className="w-full bg-[#ffffff] py-16 sm:py-20 border-b border-[#e6e6e6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-10 pb-4 border-b border-[#f1f1f1]">
          <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1">
            Perspectives & Discipline
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000]">
            Things I Spend Time On
          </h2>
          <p className="text-sm text-[#666666] mt-1 max-w-xl">
            Beyond the code editor: story-driven worlds, calculating variations, and the steady rewards of physical improvement.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {THINGS_I_SPEND_TIME_ON.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#ffffff] border border-[#e6e6e6] hover:border-[#000000] shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${getBadgeStyle(item.accent)}`}>
                    {item.tag}
                  </span>
                  <span className="text-xl">{item.emoji}</span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-[#000000]">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#666666] mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#f1f1f1] text-[11px] font-mono text-[#888888] flex justify-between items-center">
                <span>Personal Pursuit</span>
                <span className="text-[#000000] font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
