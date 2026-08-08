"use client";

import React from "react";
import { EXPERIENCE_DATA } from "@/data/portfolioData";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full bg-[#ffffff] py-16 lg:py-24 border-b border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature Coral Color Block Container */}
        <div className="w-full rounded-[24px] lg:rounded-[32px] bg-[#f3c9b6] p-6 sm:p-10 lg:p-12 border border-[#d9a892] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#000000]/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-mono font-bold tracking-mono-eyebrow uppercase mb-3">
                <Briefcase className="w-3.5 h-3.5 text-[#dceeb1]" />
                <span>EXPERIENCE & CAREER TRAJECTORY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#000000]">
                Engineering Roles.
              </h2>
              <p className="text-sm sm:text-base font-normal text-[#000000]/80 max-w-2xl mt-2">
                Delivering impact across enterprise conglomerates, flagship AI academies, and high-growth SaaS security teams.
              </p>
            </div>

            <div className="text-xs font-mono text-[#000000] font-semibold bg-[#ffffff] px-4 py-2 rounded-full border border-[#000000]/10 self-start md:self-auto">
              3+ Years Production Experience
            </div>
          </div>

          {/* Timeline Stack */}
          <div className="space-y-6">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#ffffff] border border-[#000000]/10 shadow-sm transition-all hover:shadow-md"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#f1f1f1]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#000000]">
                        {exp.company}
                      </h3>
                      <span
                        style={{ backgroundColor: exp.badgeColor }}
                        className="px-3 py-0.5 rounded-full text-xs font-mono font-bold text-[#000000] border border-[#000000]/10"
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#555555]">{exp.role}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono text-[#666666]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#222222]">
                      <CheckCircle2 className="w-4 h-4 text-[#1ea64a] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#f1f1f1]">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#888888] mr-2">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#f7f7f5] border border-[#e6e6e6] text-[#000000]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
