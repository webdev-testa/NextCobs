"use client";

import React, { useState } from "react";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Code,
  Cpu,
  Database,
  ExternalLink,
  Layers,
  Server,
  Shield,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";

export function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"bento" | "blueprint">("bento");

  const categories = [
    "All",
    "Backend & Systems",
    "AI & Machine Learning",
    "Security & Cloud",
    "Full Stack & Realtime",
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
    <section id="projects" className="w-full bg-[#ffffff] py-20 lg:py-28 border-b border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f7f5] border border-[#e6e6e6] text-xs font-mono tracking-mono-eyebrow text-[#000000] mb-3">
              <span>SELECTED CASE STUDIES & REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#000000]">
              Deeply Engineered Systems.
            </h2>
            <p className="text-base sm:text-lg text-[#555555] max-w-2xl mt-2">
              Production Java/Spring Boot microservices, deep neural networks, and zero-knowledge cryptographic vaults built to solve genuine bottlenecks.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 p-1 rounded-full bg-[#f7f7f5] border border-[#e6e6e6] self-start md:self-auto">
            <button
              onClick={() => setViewMode("bento")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                viewMode === "bento"
                  ? "bg-[#000000] text-[#ffffff] shadow-sm"
                  : "text-[#666666] hover:text-[#000000]"
              }`}
            >
              Bento Gallery
            </button>
            <button
              onClick={() => setViewMode("blueprint")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                viewMode === "blueprint"
                  ? "bg-[#000000] text-[#ffffff] shadow-sm"
                  : "text-[#666666] hover:text-[#000000]"
              }`}
            >
              System Blueprints
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#f1f1f1]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[#000000] text-[#ffffff] shadow-sm"
                  : "bg-[#f7f7f5] text-[#555555] hover:bg-[#e6e6e6] hover:text-[#000000]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid View */}
        {viewMode === "bento" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, idx) => {
              const style = getCardStyle(project.colorBlock);
              const isDark = project.colorBlock === "navy";

              return (
                <div
                  key={project.id}
                  className={`group relative rounded-[24px] p-7 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] flex flex-col justify-between ${style.bg} ${style.border}`}
                >
                  {/* Top Bar with Category Badge and Modal Action */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider ${style.badgeBg}`}>
                        {project.category}
                      </span>

                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className={`p-2 rounded-full border text-xs flex items-center gap-1 transition-all ${
                          isDark
                            ? "bg-[#ffffff]/10 border-[#ffffff]/20 text-[#ffffff] hover:bg-[#ffffff]/20"
                            : "bg-[#ffffff] border-[#000000]/10 text-[#000000] hover:bg-[#000000] hover:text-[#ffffff]"
                        }`}
                        title="View Architecture Details"
                      >
                        <span className="text-[11px] font-medium hidden sm:inline">Inspect Architecture</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Title & Subhead */}
                    <h3 className={`text-2xl font-bold tracking-tight mb-2 ${style.text}`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs font-semibold mb-3 ${isDark ? "text-[#c5b0f4]" : "text-[#000000]/80"}`}>
                      {project.subtitle}
                    </p>

                    <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-[#ffffff]/80" : "text-[#000000]/80"}`}>
                      {project.blurb}
                    </p>

                    {/* Key Metrics Strip */}
                    <div className={`grid grid-cols-3 gap-2 p-3 rounded-xl mb-6 ${
                      isDark ? "bg-[#000000]/30 border border-[#ffffff]/10" : "bg-[#ffffff]/70 border border-[#000000]/10"
                    }`}>
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex flex-col">
                          <span className={`text-xs font-mono font-bold ${style.text}`}>{m.value}</span>
                          <span className={`text-[10px] font-mono uppercase ${isDark ? "text-[#ffffff]/60" : "text-[#000000]/60"}`}>
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Tags and Action Buttons */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-mono ${
                            isDark
                              ? "bg-[#ffffff]/10 text-[#ffffff]"
                              : "bg-[#ffffff] text-[#000000] border border-[#000000]/10"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-[#000000]/10">
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className={`flex-1 py-2.5 rounded-full text-xs font-semibold text-center transition-all ${
                          isDark
                            ? "bg-[#ffffff] text-[#000000] hover:bg-[#f1f1f1]"
                            : "bg-[#000000] text-[#ffffff] hover:bg-[#222222]"
                        }`}
                      >
                        Architecture Spec
                      </button>

                      <a
                        href={project.githubUrl || "https://github.com/webdev-testa"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2.5 rounded-full border transition-all ${
                          isDark
                            ? "bg-[#ffffff]/10 border-[#ffffff]/20 text-[#ffffff] hover:bg-[#ffffff]/20"
                            : "bg-[#ffffff] border-[#000000]/10 text-[#000000] hover:bg-[#f7f7f5]"
                        }`}
                        title="GitHub Repository"
                      >
                        <Code className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Blueprint Mode */
          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 lg:p-8 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] hover:border-[#000000] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#000000] text-[#ffffff] inline-block mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[#000000] mb-2">{project.title}</h3>
                    <p className="text-sm font-semibold text-[#555555] mb-4">{project.subtitle}</p>
                    <p className="text-sm text-[#333333] leading-relaxed mb-6">{project.blurb}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#ffffff] border border-[#e6e6e6] text-[#000000]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Diagram Nodes */}
                  <div className="lg:col-span-7 p-5 rounded-xl bg-[#ffffff] border border-[#e6e6e6] flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-[#f1f1f1] pb-3">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-[#ff3d8b]" />
                        <span className="font-mono text-xs font-bold uppercase text-[#000000]">
                          Execution Pipeline & System Topology
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#1ea64a] font-semibold">● Verified Architecture</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {project.systemDiagram?.nodes.map((node, nIdx) => (
                        <div key={nIdx} className="p-3 rounded-lg bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col">
                          <span className="text-[10px] font-mono uppercase text-[#666666]">{node.type}</span>
                          <span className="text-xs font-bold text-[#000000] mt-1">{node.name}</span>
                          <span className="text-[10px] font-mono text-[#1ea64a] mt-2 font-medium">✓ {node.status}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-lg bg-[#000000] text-[#ffffff] font-mono text-xs overflow-x-auto">
                      <span className="text-[#dceeb1]">$ Flow: </span>
                      <span>{project.systemDiagram?.flow}</span>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="px-5 py-2 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] transition-all flex items-center gap-1.5"
                      >
                        <span>Full Architectural Breakdown</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Architecture Detail Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 bg-[#000000]/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-[#ffffff] rounded-3xl border border-[#e6e6e6] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
              {/* Modal Top Header */}
              <div
                style={{ backgroundColor: activeProjectModal.bgHex }}
                className="p-6 border-b border-[#000000]/10 flex items-center justify-between"
              >
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#000000] text-[#ffffff]">
                    {activeProjectModal.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000] mt-2">
                    {activeProjectModal.title}
                  </h3>
                  <p className="text-xs font-medium text-[#000000]/80">
                    {activeProjectModal.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="w-10 h-10 rounded-full bg-[#ffffff] text-[#000000] border border-[#000000]/20 flex items-center justify-center hover:bg-[#000000] hover:text-[#ffffff] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body Scroll */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666] mb-2">
                    Architectural Decisions & Implementation
                  </h4>
                  <ul className="space-y-3">
                    {activeProjectModal.architectureDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f7f7f5] border border-[#e6e6e6] text-sm text-[#222222]">
                        <CheckCircle2 className="w-4 h-4 text-[#1ea64a] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666] mb-2">
                    Impact & Production Verification
                  </h4>
                  <div className="p-4 rounded-xl bg-[#dceeb1]/40 border border-[#bed68b] text-sm font-medium text-[#000000]">
                    {activeProjectModal.impact}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666] mb-2">
                    Key Performance Indicators
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {activeProjectModal.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-4 rounded-xl bg-[#f7f7f5] border border-[#e6e6e6] text-center">
                        <div className="text-xl font-bold text-[#000000]">{m.value}</div>
                        <div className="text-[11px] font-mono text-[#666666] mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666] mb-2">
                    Stack & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectModal.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1.5 rounded-full text-xs font-mono bg-[#f7f7f5] border border-[#e6e6e6] text-[#000000]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-[#e6e6e6] bg-[#f7f7f5] flex items-center justify-between">
                <a
                  href={activeProjectModal.githubUrl || "https://github.com/webdev-testa"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#ffffff] border border-[#e6e6e6] text-xs font-semibold text-[#000000] hover:bg-[#e6e6e6] flex items-center gap-1.5"
                >
                  <Code className="w-4 h-4" />
                  <span>Inspect GitHub Repo</span>
                </a>

                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-6 py-2.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222]"
                >
                  Close Spec
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
