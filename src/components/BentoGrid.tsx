"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Cpu,
  Activity,
  Sliders,
  Maximize2,
  Check,
  ExternalLink,
  ShieldCheck,
  Zap,
  BrainCircuit,
  Cloud,
  Server,
  Database,
} from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export function BentoGrid({
  onSelectProject,
}: {
  onSelectProject: (project: Project) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "AI & LLM Infrastructure",
    "Cloud & Distributed Systems",
    "Full Stack Engineering",
    "Design Architecture",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 border-b border-[#262626] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[11px] font-mono uppercase tracking-wider text-[#999999] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#0099ff]" />
              <span>Production Systems &amp; Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.035em] font-[var(--font-outfit)] leading-tight">
              Distributed Backends, Cloud &amp; AI
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div
            role="toolbar"
            aria-label="Filter projects by engineering discipline"
            className="flex flex-wrap gap-1.5 p-1 bg-[#141414] border border-[#262626] rounded-full self-start md:self-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none cursor-pointer",
                  activeCategory === cat
                    ? "bg-[#1c1c1c] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] border border-[#333333]"
                    : "text-[#999999] hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <motion.div layout className="grid grid-cols-12 gap-5">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              // Spotlight Gradient Card 1: Violet (Nexus Vector Engine)
              if (project.spotlightVariant === "violet") {
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View project details for ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") onSelectProject(project);
                    }}
                    onClick={() => onSelectProject(project)}
                    className={cn(
                      project.gridSpan,
                      "relative rounded-[28px] overflow-hidden p-7 sm:p-9 text-white group cursor-pointer border border-[#6a4cf5]/40 transition-all duration-300 hover:border-[#6a4cf5] hover:shadow-[0_0_40px_rgba(106,76,245,0.25)] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                    )}
                    style={{
                      background:
                        "radial-gradient(130% 130% at 50% 0%, #6a4cf5 0%, #3011a6 55%, #100638 100%)",
                    }}
                  >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col justify-between h-full relative z-10 space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs font-mono font-medium">
                            {project.category}
                          </span>
                          {project.award && (
                            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white">
                              ★ {project.award}
                            </span>
                          )}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Vector Search Telemetry Preview Box */}
                      <div className="my-3 p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md space-y-3">
                        <div className="flex items-center justify-between text-xs text-white/80">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                            <span className="font-mono text-[11px]">HNSW Index: 50,000,000 Vectors</span>
                          </div>
                          <span className="font-mono text-[11px] bg-white/10 px-2 py-0.5 rounded">7.8ms P99</span>
                        </div>

                        {/* Visual Index Clusters */}
                        <div className="h-12 w-full bg-black/50 rounded-lg flex items-center justify-around px-3 text-[11px] font-mono">
                          <div className="text-center">
                            <div className="text-white/60">Throughput</div>
                            <div className="font-bold text-white">12,000 QPS</div>
                          </div>
                          <div className="h-6 w-px bg-white/10" />
                          <div className="text-center">
                            <div className="text-white/60">Recall@10</div>
                            <div className="font-bold text-[#22c55e]">99.4%</div>
                          </div>
                          <div className="h-6 w-px bg-white/10" />
                          <div className="text-center">
                            <div className="text-white/60">Embedding Latency</div>
                            <div className="font-bold text-white">4.2ms</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] font-[var(--font-outfit)] leading-tight mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed">
                          {project.description}
                        </p>

                        <div className="mt-5 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-full bg-black/20 text-white/90 border border-white/10 text-[11px]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="font-semibold text-white font-mono">{project.metrics.value}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Spotlight Gradient Card 2: Orange (Aether Edge Mesh)
              if (project.spotlightVariant === "orange") {
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View project details for ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") onSelectProject(project);
                    }}
                    onClick={() => onSelectProject(project)}
                    className={cn(
                      project.gridSpan,
                      "relative rounded-[28px] overflow-hidden p-7 sm:p-9 text-white group cursor-pointer border border-[#ff7a3d]/40 transition-all duration-300 hover:border-[#ff7a3d] hover:shadow-[0_0_40px_rgba(255,122,61,0.25)] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                    )}
                    style={{
                      background:
                        "radial-gradient(130% 130% at 50% 0%, #ff7a3d 0%, #b83d09 55%, #380f00 100%)",
                    }}
                  >
                    <div className="flex flex-col justify-between h-full relative z-10 space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs font-mono font-medium">
                            {project.category}
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Edge Routing Telemetry */}
                      <div className="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md space-y-2.5">
                        <div className="flex items-center justify-between text-xs text-white/80">
                          <span className="font-mono text-[11px]">Serverless Edge Mesh:</span>
                          <span className="font-mono text-[11px] font-bold text-[#22c55e]">
                            280+ POPs Active
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
                          <div className="p-1.5 rounded bg-[#090909] text-white">US-East: 12ms</div>
                          <div className="p-1.5 rounded bg-[#090909] text-white">EU-Central: 24ms</div>
                          <div className="p-1.5 rounded bg-[#090909] text-white">AP-East: 42ms</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] font-[var(--font-outfit)] leading-tight mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                          <span className="text-white/70 font-mono">Rust Wasm + Cloudflare</span>
                          <span className="font-semibold text-white font-mono">{project.metrics.value}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Spotlight Gradient Card 3: Magenta (Synthex Multi-Agent Fabric)
              if (project.spotlightVariant === "magenta") {
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View project details for ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") onSelectProject(project);
                    }}
                    onClick={() => onSelectProject(project)}
                    className={cn(
                      project.gridSpan,
                      "relative rounded-[28px] overflow-hidden p-7 sm:p-9 text-white group cursor-pointer border border-[#d44df0]/40 transition-all duration-300 hover:border-[#d44df0] hover:shadow-[0_0_40px_rgba(212,77,240,0.25)] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                    )}
                    style={{
                      background:
                        "radial-gradient(130% 130% at 50% 0%, #d44df0 0%, #8916a3 55%, #290433 100%)",
                    }}
                  >
                    <div className="flex flex-col justify-between h-full relative z-10 space-y-6">
                      <div className="flex items-start justify-between">
                        <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs font-mono font-medium">
                          {project.category}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Agent Reasoning Stream Box */}
                      <div className="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md space-y-2">
                        <div className="flex justify-between text-[11px] font-mono text-white/80">
                          <span>Graph Execution</span>
                          <span className="text-[#22c55e]">Deterministic Recovery</span>
                        </div>
                        <div className="h-10 bg-black/50 rounded-lg flex items-center justify-between px-3 text-[11px] font-mono">
                          <span className="text-white/60">Planner → Coder → Verifier</span>
                          <span className="text-white font-bold">80k Runs/Day</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] font-[var(--font-outfit)] leading-tight mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                          <span className="text-white/70 font-mono">LangGraph + Redis</span>
                          <span className="font-semibold text-white font-mono">{project.metrics.value}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Spotlight Gradient Card 4: Coral (Helios Stream Engine)
              if (project.spotlightVariant === "coral") {
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View project details for ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") onSelectProject(project);
                    }}
                    onClick={() => onSelectProject(project)}
                    className={cn(
                      project.gridSpan,
                      "relative rounded-[28px] overflow-hidden p-7 sm:p-9 text-white group cursor-pointer border border-[#ff5577]/40 transition-all duration-300 hover:border-[#ff5577] hover:shadow-[0_0_40px_rgba(255,85,119,0.25)] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                    )}
                    style={{
                      background:
                        "radial-gradient(130% 130% at 50% 0%, #ff5577 0%, #a81335 55%, #36000e 100%)",
                    }}
                  >
                    <div className="flex flex-col justify-between h-full relative z-10 space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs font-mono font-medium">
                            {project.category}
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Stream Telemetry Grid */}
                      <div className="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md space-y-2">
                        <div className="flex justify-between text-xs text-white/80">
                          <span className="font-mono text-[11px]">Kafka Partition Ingest</span>
                          <span className="font-mono text-[11px] text-[#22c55e] font-bold">250,000 Msg/s</span>
                        </div>
                        <div className="h-12 w-full bg-black/50 rounded-lg flex items-center justify-around px-3 text-[11px] font-mono">
                          <div className="text-center">
                            <div className="text-white/50">Storage</div>
                            <div className="font-bold text-white">ClickHouse</div>
                          </div>
                          <div className="h-6 w-px bg-white/10" />
                          <div className="text-center">
                            <div className="text-white/50">Batch Lag</div>
                            <div className="font-bold text-[#22c55e]">0.0s</div>
                          </div>
                          <div className="h-6 w-px bg-white/10" />
                          <div className="text-center">
                            <div className="text-white/50">UI Sync</div>
                            <div className="font-bold text-white">WebSocket</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] font-[var(--font-outfit)] leading-tight mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed">
                          {project.description}
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                          <span className="text-white/70 font-mono">{project.tags.join(" · ")}</span>
                          <span className="font-semibold text-white font-mono">{project.metrics.value}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Standard Charcoal Bento Tile (#141414 / #1c1c1c)
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View project details for ${project.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") onSelectProject(project);
                  }}
                  onClick={() => onSelectProject(project)}
                  className={cn(
                    project.gridSpan,
                    "relative rounded-[24px] bg-[#141414] hover:bg-[#1c1c1c] border border-[#262626] hover:border-[#333333] p-7 sm:p-8 text-white group cursor-pointer transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] flex flex-col justify-between space-y-6 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-mono text-[#999999]">
                      {project.category}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#1c1c1c] border border-[#262626] flex items-center justify-center group-hover:border-[#0099ff]/50 group-hover:text-[#0099ff] transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight font-[var(--font-outfit)] mb-2 group-hover:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#999999] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-[#1c1c1c] text-[#999999] text-[11px] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-[#999999]">
                    <span>{project.client}</span>
                    <span className="font-mono text-white font-medium">{project.metrics.value}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
