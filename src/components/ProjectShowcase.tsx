"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import { CodeSnippet } from "@/components/CodeSnippet";
import { ArrowUpRight, Layers, X } from "lucide-react";

export function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProjectModal(null);
      }
    };

    if (activeProjectModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProjectModal]);

  const categories = [
    "All",
    "Full Stack & Mobile",
    "AI & Enterprise",
    "Freelance / Web",
    "Systems & Data",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const getCardStyle = (color: Project["colorBlock"]) => {
    switch (color) {
      case "lime":
        return {
          bg: "bg-[#dceeb1]",
          border: "border-[#bed68b]",
          text: "text-[#000000]",
          badgeBg: "bg-[#000000] text-[#ffffff]",
        };
      case "lilac":
        return {
          bg: "bg-[#c5b0f4]",
          border: "border-[#a991de]",
          text: "text-[#000000]",
          badgeBg: "bg-[#000000] text-[#ffffff]",
        };
      case "coral":
        return {
          bg: "bg-[#f3c9b6]",
          border: "border-[#d9a892]",
          text: "text-[#000000]",
          badgeBg: "bg-[#000000] text-[#ffffff]",
        };
      case "navy":
        return {
          bg: "bg-[#1f1d3d]",
          border: "border-[#2f2c5e]",
          text: "text-[#ffffff]",
          badgeBg: "bg-[#ff3d8b] text-[#ffffff]",
        };
      case "mint":
        return {
          bg: "bg-[#c8e6cd]",
          border: "border-[#a6ceab]",
          text: "text-[#000000]",
          badgeBg: "bg-[#000000] text-[#ffffff]",
        };
      case "cream":
      default:
        return {
          bg: "bg-[#f4ecd6]",
          border: "border-[#ded0b1]",
          text: "text-[#000000]",
          badgeBg: "bg-[#000000] text-[#ffffff]",
        };
    }
  };

  return (
    <section id="projects" className="w-full bg-[#ffffff] py-16 sm:py-20 border-b border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f7f5] border border-[#e6e6e6] text-xs font-mono tracking-wide text-[#000000] mb-3">
              <span>SELECTED PROJECTS & ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#000000]">
              Built for Real Users & Systems.
            </h2>
            <p className="text-sm sm:text-base text-[#555555] max-w-2xl mt-2">
              From enterprise AI initiatives and high-throughput backend services to practical retail ERPs and native mobile apps.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#000000] text-[#ffffff] shadow-sm"
                    : "bg-[#f7f7f5] text-[#555555] hover:bg-[#e6e6e6] hover:text-[#000000]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const style = getCardStyle(project.colorBlock);
            return (
              <div
                key={project.slug}
                className={`rounded-3xl p-6 sm:p-7 border-2 ${style.bg} ${style.border} ${style.text} flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl relative group`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold ${style.badgeBg}`}>
                      {project.category}
                    </span>
                    <span className="text-xs font-mono opacity-70">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Metrics Row */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 mb-5 p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-xs font-mono opacity-70 uppercase tracking-wide truncate">
                            {m.label}
                          </span>
                          <span className="text-xs font-bold truncate">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs font-mono bg-black/10 text-current"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-2 border-t border-black/10">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="flex-1 py-2 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </button>

                    <Link
                      href={`/work/${project.slug}`}
                      className="p-2 rounded-full bg-black/10 hover:bg-black/20 text-current transition-colors"
                      title="Open dedicated case study"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Inspection Modal */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setActiveProjectModal(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            onClick={(e) => e.stopPropagation()}
            className="bg-[#ffffff] text-[#000000] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#e6e6e6] relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#f7f7f5] hover:bg-[#e6e6e6] text-[#000000] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 font-mono text-xs text-[#666666] mb-2">
              <span>{activeProjectModal.year}</span>
              <span>&bull;</span>
              <span>{activeProjectModal.category}</span>
              <span>&bull;</span>
              <span className="font-semibold text-[#000000]">{activeProjectModal.clientOrContext}</span>
            </div>

            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-[#000000]">
              {activeProjectModal.title}
            </h3>

            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              {activeProjectModal.subtitle}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] mb-6">
              {activeProjectModal.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs font-mono uppercase text-[#666666]">{m.label}</span>
                  <span className="text-sm sm:text-base font-bold text-[#000000] mt-0.5">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Overview & Problem/Solution */}
            <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#333333] mb-6">
              <div>
                <h4 className="font-bold text-[#000000] mb-1">The Overview</h4>
                <p className="leading-relaxed">{activeProjectModal.overview}</p>
              </div>
              <div>
                <h4 className="font-bold text-[#000000] mb-1">Challenge & Approach</h4>
                <p className="leading-relaxed">{activeProjectModal.solution}</p>
              </div>
            </div>

            {/* Architecture Steps */}
            {activeProjectModal.architecture && (
              <div className="p-4 rounded-2xl bg-[#f4ecd6] border border-[#ded0b1] mb-6">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wide text-[#000000] mb-2">
                  System Architecture Flow
                </h4>
                <div className="flex flex-col gap-2">
                  {activeProjectModal.architecture.flowSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#000000]">
                      <span className="w-5 h-5 rounded-full bg-[#000000] text-[#ffffff] text-xs flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Code Snippet if present */}
            {activeProjectModal.codeSnippet && (
              <div className="mb-6">
                <CodeSnippet
                  filename={activeProjectModal.codeSnippet.filename}
                  language={activeProjectModal.codeSnippet.language}
                  code={activeProjectModal.codeSnippet.code}
                  caption={activeProjectModal.codeSnippet.caption}
                />
              </div>
            )}

            {/* Footer Action */}
            <div className="flex items-center justify-between pt-4 border-t border-[#e6e6e6]">
              <Link
                href={`/work/${activeProjectModal.slug}`}
                className="px-5 py-2 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] transition-colors flex items-center gap-1.5"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-full border border-[#e6e6e6] text-xs font-medium text-[#555555] hover:text-[#000000]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
