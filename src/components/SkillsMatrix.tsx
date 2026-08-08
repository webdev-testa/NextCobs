"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Code2, Cpu, Database, Server, Shield, Sparkles } from "lucide-react";

export function SkillsMatrix() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getCategoryColor = (color: string) => {
    switch (color) {
      case "lime":
        return {
          bg: "bg-[#dceeb1]",
          border: "border-[#bed68b]",
        };
      case "lilac":
        return {
          bg: "bg-[#c5b0f4]",
          border: "border-[#a991de]",
        };
      case "coral":
        return {
          bg: "bg-[#f3c9b6]",
          border: "border-[#d9a892]",
        };
      case "mint":
      default:
        return {
          bg: "bg-[#c8e6cd]",
          border: "border-[#a6ceab]",
        };
    }
  };

  return (
    <section id="skills" className="w-full bg-[#ffffff] py-16 lg:py-24 border-b border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature Mint Color Block */}
        <div className="w-full rounded-[24px] lg:rounded-[32px] bg-[#c8e6cd] p-6 sm:p-10 lg:p-12 border border-[#a6ceab] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#000000]/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-mono font-bold tracking-mono-eyebrow uppercase mb-3">
                <Code2 className="w-3.5 h-3.5 text-[#ff3d8b]" />
                <span>TECHNICAL TOOLING & STACK PROFICIENCY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#000000]">
                Skills & Technologies.
              </h2>
              <p className="text-sm sm:text-base font-normal text-[#000000]/80 max-w-2xl mt-2">
                A verified breakdown of my primary programming languages, backend frameworks, machine learning tooling, and security standards.
              </p>
            </div>

            <div className="text-xs font-mono text-[#000000] font-semibold bg-[#ffffff] px-4 py-2 rounded-full border border-[#000000]/10 self-start md:self-auto">
              Production Verified Experience
            </div>
          </div>

          {/* 4 Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const style = getCategoryColor(cat.color);

              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#ffffff] border border-[#000000]/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#f1f1f1]">
                      <h3 className="font-bold text-base text-[#000000]">{cat.name}</h3>
                      <span className="font-mono text-[10px] uppercase font-bold text-[#666666]">
                        {cat.skills.length} Tools
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {cat.skills.map((skill, sIdx) => {
                        const isSelected = selectedSkill === skill.name;
                        return (
                          <div
                            key={sIdx}
                            onClick={() =>
                              setSelectedSkill(isSelected ? null : skill.name)
                            }
                            className={`p-3 rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#000000] text-[#ffffff] border-[#000000] shadow-sm"
                                : "bg-[#f7f7f5] text-[#000000] border-[#e6e6e6] hover:bg-[#eaeaea]"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-xs">{skill.name}</span>
                                {skill.highlight && (
                                  <span
                                    className={`px-1.5 py-0.2 text-[9px] font-mono font-bold rounded ${
                                      isSelected
                                        ? "bg-[#ff3d8b] text-[#ffffff]"
                                        : "bg-[#dceeb1] text-[#000000]"
                                    }`}
                                  >
                                    CORE
                                  </span>
                                )}
                              </div>
                              <span
                                className={`text-[11px] font-mono ${
                                  isSelected ? "text-[#ffffff]/70" : "text-[#666666]"
                                }`}
                              >
                                {skill.exp}
                              </span>
                            </div>

                            {/* Level Progress Indicator */}
                            <div className="w-full h-1.5 rounded-full bg-[#000000]/10 overflow-hidden">
                              <div
                                style={{ width: `${skill.level}%` }}
                                className={`h-full rounded-full transition-all ${
                                  isSelected ? "bg-[#ff3d8b]" : "bg-[#000000]"
                                }`}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
