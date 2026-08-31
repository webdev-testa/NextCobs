import React from "react";
import { EXPERIENCE_DATA, DEVELOPER_INFO } from "@/data/portfolioData";
import { FileText } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full bg-[#f3c9b6] text-[#000000] py-16 sm:py-20 border-b border-[#d9a892]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-mono tracking-wide mb-3">
              <span>WORK HISTORY & LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#000000]">
              Career Journey & Mentorship.
            </h2>
            <p className="text-sm sm:text-base text-[#333333] max-w-2xl mt-2">
              Leading enterprise AI initiatives, consulting for real businesses, and guiding the next generation of engineers.
            </p>
          </div>

          <a
            href={`mailto:${DEVELOPER_INFO.email}?subject=Resume%20Inquiry`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] transition-colors self-start md:self-auto shadow-md"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Request Full Resume</span>
          </a>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#ffffff] border-2 border-[#d9a892] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-[#f3c9b6] text-[#000000]">
                      {exp.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#000000] mt-2">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#555555]">
                      {exp.company} &bull; {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#666666] shrink-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-2 text-xs text-[#444444] leading-relaxed list-disc list-outside pl-4">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#f1f1f1] flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-[#f7f7f5] text-[#555555]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
