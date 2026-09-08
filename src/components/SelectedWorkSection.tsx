"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function SelectedWorkSection() {
  // 4 featured projects matching portfolio-content.md
  const selectedProjects = PROJECTS_DATA.slice(0, 4);

  const getPillColor = (color: Project["colorBlock"]) => {
    switch (color) {
      case "mint":
        return "bg-[#c8e6cd] text-[#000000] border-[#a6ceab]";
      case "lilac":
        return "bg-[#c5b0f4] text-[#000000] border-[#a991de]";
      case "lime":
        return "bg-[#dceeb1] text-[#000000] border-[#bed68b]";
      case "coral":
        return "bg-[#f3c9b6] text-[#000000] border-[#d9a892]";
      default:
        return "bg-[#f7f7f5] text-[#000000] border-[#e6e6e6]";
    }
  };

  return (
    <section id="selected-work" className="w-full bg-[#ffffff] py-16 sm:py-20 border-b border-[#e6e6e6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#f1f1f1]">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1">
              Selected Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000]">
              Relieving Operational Weight
            </h2>
            <p className="text-sm italic text-[#666666] mt-1">
              The stuff I&apos;m proudest of — usually because someone was drowning in busywork before I touched it.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#000000] hover:text-[#555555] transition-colors shrink-0 group py-1"
          >
            <span>View all projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Selected Work List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group p-6 sm:p-7 rounded-3xl bg-[#ffffff] border border-[#e6e6e6] hover:border-[#000000] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${getPillColor(project.colorBlock)}`}>
                    {project.clientOrContext}
                  </span>
                  <span className="text-xs font-mono text-[#888888]">{project.year}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold tracking-tight text-[#000000] group-hover:underline flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#000000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>

                <p className="text-xs font-mono text-[#666666] mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-5">
                  {project.summary}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-[#f1f1f1] flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#f7f7f5] text-[#555555] border border-[#f1f1f1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f7f7f5] hover:bg-[#e6e6e6] text-[#000000] text-xs font-semibold border border-[#e6e6e6] transition-colors"
          >
            <span>View all 5 case studies & archived systems →</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
