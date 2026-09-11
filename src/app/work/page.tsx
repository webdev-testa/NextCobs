import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PROJECTS_DATA, ARCHIVED_PROJECTS, Project } from "@/data/portfolioData";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, Wrench } from "lucide-react";

export const metadata = {
  title: "Work & Case Studies — Ammardito Shafaat",
  description: "Full case studies evaluated through the Weight, Constraint, Build, and Result framework.",
};

export default function WorkIndexPage() {
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
      case "cream":
        return "bg-[#f4ecd6] text-[#000000] border-[#ded0b1]";
      default:
        return "bg-[#f7f7f5] text-[#000000] border-[#e6e6e6]";
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col selection:bg-[#000000] selection:text-[#ffffff]">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#666666] hover:text-[#000000] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-14 pb-8 border-b border-[#e6e6e6]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-[11px] font-mono tracking-widest uppercase mb-4">
            <span>WORK & CASE STUDIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#000000] leading-tight mb-3">
            Selected Work
          </h1>

          <p className="text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed">
            Every case study is evaluated through the reality of the problem: what was weighing people down, the hard constraints, what was built, and the measurable outcome.
          </p>
        </header>

        {/* 5 Core Case Studies */}
        <section className="space-y-12 mb-20">
          {PROJECTS_DATA.map((project, idx) => (
            <article
              key={project.slug}
              className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#e6e6e6] hover:border-[#000000] shadow-xs hover:shadow-md transition-all duration-200"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[#f1f1f1]">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-[#5c5c5c]">
                    0{idx + 1}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${getPillColor(project.colorBlock)}`}>
                    {project.clientOrContext}
                  </span>
                  <span className="text-xs font-mono text-[#5c5c5c]">&bull; {project.year}</span>
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#000000] hover:underline self-start sm:self-auto rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                >
                  <span>Full case study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000] mb-1">
                  <Link
                    href={`/work/${project.slug}`}
                    className="hover:underline rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                  >
                    {project.title}
                  </Link>
                </h2>
                <p className="text-sm font-mono text-[#5c5c5c]">
                  {project.subtitle}
                </p>
              </div>

              {/* The 4-Part Framework: Weight / Constraint / Build / Result */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Weight */}
                <div className="p-4 rounded-2xl bg-[#fdf5f5] border border-[#f3dada]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#cf4444]" />
                    <span className="text-[11px] font-mono uppercase font-bold text-[#cf4444]">
                      Weight
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                    {project.framework.weight}
                  </p>
                </div>

                {/* Constraint */}
                <div className="p-4 rounded-2xl bg-[#fcf9f2] border border-[#eee4ca]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#b07d18]" />
                    <span className="text-[11px] font-mono uppercase font-bold text-[#b07d18]">
                      Constraint
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                    {project.framework.constraint}
                  </p>
                </div>

                {/* Build */}
                <div className="p-4 rounded-2xl bg-[#f4f8fa] border border-[#d2e4ed]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#2573a7]" />
                    <span className="text-[11px] font-mono uppercase font-bold text-[#2573a7]">
                      Build
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                    {project.framework.build}
                  </p>
                </div>

                {/* Result */}
                <div className="p-4 rounded-2xl bg-[#f3f9f4] border border-[#cbe8d2]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1ea64a]" />
                    <span className="text-[11px] font-mono uppercase font-bold text-[#1ea64a]">
                      Result
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed font-medium">
                    {project.framework.result}
                  </p>
                </div>
              </div>

              {/* Tags & Deep Link */}
              <div className="pt-4 border-t border-[#f1f1f1] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#f7f7f5] text-[#555555] border border-[#e6e6e6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="px-4 py-2 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
                >
                  Read Architecture & Code →
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Explorations & Archive Section */}
        <section className="pt-12 border-t border-[#e6e6e6]">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#5c5c5c] font-medium block mb-1">
              Explorations & Research
            </span>
            <h3 className="text-xl font-bold text-[#000000]">
              Additional Engineering Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ARCHIVED_PROJECTS.map((arch) => (
              <div
                key={arch.slug}
                className="p-5 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#5c5c5c] mb-2">
                    <span>{arch.year}</span>
                    <span>{arch.clientOrContext}</span>
                  </div>
                  <h4 className="font-bold text-base text-[#000000] mb-1">
                    {arch.title}
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed mb-4">
                    {arch.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e6e6e6] flex flex-wrap gap-1">
                  {arch.tags.slice(0, 3).map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#ffffff] text-[#555555]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
