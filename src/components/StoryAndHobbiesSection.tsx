import React from "react";
import { PERSONAL_STORIES } from "@/data/portfolioData";

export function StoryAndHobbiesSection() {
  return (
    <section id="stories" className="w-full bg-[#c5b0f4] text-[#000000] py-16 sm:py-20 border-b border-[#a991de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-mono tracking-wide mb-3">
            <span>BEYOND THE CODE EDITOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#000000]">
            Stories, Chess, Routine & Sports Exploration.
          </h2>
          <p className="text-sm sm:text-base text-[#222222] leading-relaxed mt-2">
            Great engineering is shaped by deep curiosity and physical discipline. My main focus centers on story-driven worlds, narrative games, and chess, grounded by a daily running and gym routine, alongside casual exploration in various sports.
          </p>
        </div>

        {/* Story & Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERSONAL_STORIES.hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#ffffff] border-2 border-[#a991de] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#c5b0f4]/40 text-[#000000] border border-[#a991de]">
                    {hobby.tag}
                  </span>
                  <span className="text-xs font-mono text-[#666666]">{hobby.status}</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#c5b0f4] flex items-center justify-center text-xl shadow-inner shrink-0">
                    {hobby.emoji}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#000000]">
                    {hobby.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#f1f1f1] flex items-center justify-between text-xs font-mono text-[#666666]">
                <span>Category</span>
                <span className="text-[#000000] font-semibold">{hobby.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
