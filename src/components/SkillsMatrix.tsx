import React from "react";
import { PERSONAL_STORIES } from "@/data/portfolioData";
import { Code, Cpu, Database, Sparkles } from "lucide-react";

export function SkillsMatrix() {
  const iconMap = [
    <Code key="0" className="w-4 h-4 text-[#000000]" />,
    <Cpu key="1" className="w-4 h-4 text-[#000000]" />,
    <Database key="2" className="w-4 h-4 text-[#000000]" />,
    <Sparkles key="3" className="w-4 h-4 text-[#000000]" />,
  ];

  return (
    <section id="toolbox" className="w-full bg-[#c8e6cd] text-[#000000] py-16 sm:py-20 border-b border-[#a6ceab]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-mono tracking-wide mb-3">
            <span>CORE TOOLBOX & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#000000]">
            Pragmatic Engineering Stack.
          </h2>
          <p className="text-sm sm:text-base text-[#222222] leading-relaxed mt-2">
            The languages, frameworks, and platforms I reach for to turn ideas into production-ready software.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAL_STORIES.toolbox.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#ffffff] border-2 border-[#a6ceab] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#f1f1f1]">
                  {iconMap[idx % iconMap.length]}
                  <h3 className="text-sm font-bold tracking-tight text-[#000000]">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#c8e6cd]/40 border border-[#a6ceab] text-[#000000] font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#f1f1f1] text-xs font-mono text-[#666666]">
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
