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
            Stories, Games & Exploring All There Is.
          </h2>
          <p className="text-sm sm:text-base text-[#222222] leading-relaxed mt-2">
            I believe that great engineering is shaped by curiosity. When I'm not writing code, I immerse myself in rich narratives, quiet reading sessions, and physical disciplines.
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#c5b0f4] flex items-center justify-center text-xl shadow-inner">
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
                <span>Life & Passions</span>
                <span className="text-[#000000] font-semibold">● Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
