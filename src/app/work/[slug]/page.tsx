import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS_DATA, ARCHIVED_PROJECTS } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";
import { CodeSnippet } from "@/components/CodeSnippet";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  ShieldAlert,
  Wrench,
} from "lucide-react";

export async function generateStaticParams() {
  const all = [...PROJECTS_DATA, ...ARCHIVED_PROJECTS];
  return all.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allProjects = [...PROJECTS_DATA, ...ARCHIVED_PROJECTS];
  const projectIndex = allProjects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = allProjects[projectIndex];
  const prevProject = projectIndex > 0 ? allProjects[projectIndex - 1] : null;
  const nextProject = projectIndex < allProjects.length - 1 ? allProjects[projectIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col selection:bg-[#000000] selection:text-[#ffffff]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <article className="flex flex-col gap-10">
          {/* Navigation */}
          <div>
            <BackButton href="/work" label="Back to Selected Work" />
          </div>

          {/* Header Info */}
          <header className="flex flex-col gap-4 border-b border-[#e6e6e6] pb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
              <span>{project.year}</span>
              <span>&bull;</span>
              <span>{project.category}</span>
              <span>&bull;</span>
              <span className="text-[#000000] font-semibold">{project.clientOrContext}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#000000] leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
              {project.subtitle}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-[#f7f7f5] text-[#333333] border border-[#e6e6e6]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Meta Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 mt-2 border-t border-[#f1f1f1] text-xs">
              <div>
                <span className="text-[#666666] font-mono uppercase text-xs block mb-1">
                  Role
                </span>
                <span className="font-semibold text-[#000000]">{project.role}</span>
              </div>
              <div>
                <span className="text-[#666666] font-mono uppercase text-xs block mb-1">
                  Client / Context
                </span>
                <span className="font-semibold text-[#000000]">{project.clientOrContext}</span>
              </div>
              <div>
                <span className="text-[#666666] font-mono uppercase text-xs block mb-1">
                  Timeline
                </span>
                <span className="font-semibold text-[#000000]">{project.year}</span>
              </div>
            </div>
          </header>

          {/* The 4-Part Framework: Weight / Constraint / Build / Result */}
          {project.framework && (
            <section className="p-6 sm:p-8 rounded-3xl bg-[#f7f7f5] border border-[#e6e6e6]">
              <h2 className="text-sm font-mono uppercase tracking-wider font-bold text-[#000000] mb-4">
                The Operational Reality & Impact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#f3dada]">
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

                <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#eee4ca]">
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

                <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#d2e4ed]">
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

                <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#cbe8d2]">
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
            </section>
          )}

          {/* Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#ffffff] border border-[#e6e6e6] shadow-xs flex flex-col justify-between"
                >
                  <span className="text-xs font-mono text-[#666666] uppercase tracking-wide">
                    {m.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#000000] mt-2">
                    {m.value}
                  </span>
                </div>
              ))}
            </section>
          )}

          {/* Overview */}
          <section className="flex flex-col gap-3 text-base leading-relaxed text-[#333333]">
            <h2 className="text-xl font-bold text-[#000000]">
              Overview & Context
            </h2>
            <p>{project.overview}</p>
          </section>

          {/* Problem & Solution */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-[#ffffff] border-2 border-[#e6e6e6] flex flex-col gap-3 shadow-xs">
              <h3 className="text-base font-bold text-[#000000]">
                The Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#ffffff] border-2 border-[#e6e6e6] flex flex-col gap-3 shadow-xs">
              <h3 className="text-base font-bold text-[#000000]">
                The Solution
              </h3>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          {/* Architecture Flow */}
          {project.architecture && (
            <section className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border-2 border-[#000000] flex flex-col gap-5 shadow-sm">
              <div className="border-b border-[#f1f1f1] pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1">
                  Architecture & Data Flow
                </span>
                <h3 className="text-xl font-bold text-[#000000]">
                  {project.architecture.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] mt-1">
                  {project.architecture.description}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {project.architecture.flowSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#222222]">
                    <div className="w-6 h-6 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="pt-0.5 leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Code Snippet */}
          {project.codeSnippet && (
            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#000000]">
                Key Implementation Detail
              </h2>
              <CodeSnippet
                filename={project.codeSnippet.filename}
                language={project.codeSnippet.language}
                code={project.codeSnippet.code}
                caption={project.codeSnippet.caption}
              />
            </section>
          )}

          {/* Key Decisions */}
          {project.keyDecisions && project.keyDecisions.length > 0 && (
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-[#000000]">
                Engineering Trade-Offs & Decisions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyDecisions.map((kd, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col gap-2"
                  >
                    <span className="text-xs font-mono font-bold text-[#000000]">
                      {kd.decision}
                    </span>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      {kd.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next / Prev Project Navigation */}
          <nav className="pt-8 border-t border-[#e6e6e6] flex items-center justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="group flex flex-col items-start text-left"
              >
                <span className="text-xs font-mono text-[#888888] flex items-center gap-1 group-hover:text-[#000000]">
                  <ArrowLeft className="w-3 h-3" /> Previous Case Study
                </span>
                <span className="text-sm font-semibold text-[#000000] group-hover:underline mt-1">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex flex-col items-end text-right"
              >
                <span className="text-xs font-mono text-[#888888] flex items-center gap-1 group-hover:text-[#000000]">
                  Next Case Study <ArrowRight className="w-3 h-3" />
                </span>
                <span className="text-sm font-semibold text-[#000000] group-hover:underline mt-1">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </nav>
        </article>
      </main>

      <Footer />
    </div>
  );
}
