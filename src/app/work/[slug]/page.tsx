import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";
import { CodeSnippet } from "@/components/CodeSnippet";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS_DATA[projectIndex];
  const prevProject = projectIndex > 0 ? PROJECTS_DATA[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[projectIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <article className="flex flex-col gap-10">
          {/* Navigation */}
          <div>
            <BackButton href="/#projects" label="Back to Projects" />
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

          {/* Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col justify-between"
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
            <div className="p-6 rounded-3xl bg-[#ffffff] border-2 border-[#e6e6e6] flex flex-col gap-3 shadow-sm">
              <h3 className="text-base font-bold text-[#000000]">
                The Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#ffffff] border-2 border-[#e6e6e6] flex flex-col gap-3 shadow-sm">
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
            <section className="p-6 sm:p-8 rounded-3xl bg-[#f4ecd6] border-2 border-[#ded0b1] flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-lg sm:text-xl font-bold text-[#000000]">
                  {project.architecture.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#444444]">
                  {project.architecture.description}
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-2">
                {project.architecture.flowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#ffffff] border border-[#ded0b1] text-xs text-[#000000] font-mono"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <span className="leading-tight">{step}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Code Snippet Highlight */}
          {project.codeSnippet && (
            <section className="flex flex-col gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#000000]">
                Implementation Highlight
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
              <h2 className="text-lg sm:text-xl font-bold text-[#000000]">
                Key Architectural Decisions
              </h2>
              <div className="flex flex-col gap-3">
                {project.keyDecisions.map((kd, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col gap-1.5"
                  >
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1ea64a] shrink-0 mt-0.5" />
                      <h3 className="text-sm font-bold text-[#000000]">
                        {kd.decision}
                      </h3>
                    </div>
                    <p className="text-xs text-[#555555] pl-6 leading-relaxed">
                      {kd.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next / Prev Navigation */}
          <nav className="flex items-center justify-between border-t border-[#e6e6e6] pt-8 mt-4">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="flex flex-col gap-1 group text-left max-w-[45%]"
              >
                <span className="text-xs font-mono text-[#666666] flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                  Previous Case Study
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#000000] group-hover:underline truncate">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="flex flex-col gap-1 group text-right max-w-[45%] ml-auto"
              >
                <span className="text-xs font-mono text-[#666666] flex items-center justify-end gap-1">
                  Next Case Study
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#000000] group-hover:underline truncate">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </article>
      </main>

      <Footer />
    </div>
  );
}
