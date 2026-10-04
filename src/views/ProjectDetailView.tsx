import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectWithNeighbors } from "@/lib/portfolio-catalog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";
import { CodeSnippet } from "@/components/CodeSnippet";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ProjectPreview } from "@/components/ProjectPreview";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Github,
  ShieldAlert,
  Wrench,
} from "lucide-react";

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function ProjectDetailView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectData = getProjectWithNeighbors(slug);

  if (!projectData) {
    notFound();
  }

  const { project, prevProject, nextProject } = projectData;

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col selection:bg-[#000000] selection:text-[#ffffff]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <article className="flex flex-col gap-10">
          {/* Navigation */}
          <div>
            <BackButton href="/work" label="Back to Projects" />
          </div>

          {/* Header Info */}
          <header className="flex flex-col gap-4 border-b border-[#e6e6e6] pb-8" data-reveal>
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

            {/* Links and Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-2 border-t border-[#f1f1f1] text-xs">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-[#666666] font-mono uppercase text-xs block mb-1">
                    Role
                  </span>
                  <span className="font-semibold text-[#000000]">{project.role}</span>
                </div>
                <div>
                  <span className="text-[#666666] font-mono uppercase text-xs block mb-1">
                    Context
                  </span>
                  <span className="font-semibold text-[#000000]">{project.clientOrContext}</span>
                </div>
                <div>
                  <span className="text-[#666666] font-mono uppercase text-xs block mb-1">
                    Year
                  </span>
                  <span className="font-semibold text-[#000000]">{project.year}</span>
                </div>
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000000] text-[#ffffff] font-mono text-xs font-semibold hover:bg-[#222222] transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f7f7f5] text-[#000000] border border-[#e6e6e6] font-mono text-xs font-semibold hover:bg-[#e6e6e6] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </header>

          {/* Primary Product Hero Showcase */}
          <section id="showcase" className="w-full scroll-mt-28" data-reveal>
            <ProjectPreview project={project} priority />
          </section>

          <ReadingProgress items={[
            { id: "showcase", label: "Showcase" },
            { id: "impact", label: "Impact" },
            { id: "overview", label: "Context" },
            { id: "gallery", label: "Screens" },
            { id: "architecture", label: "Architecture" },
            { id: "decisions", label: "Decisions" },
            ...(project.standoutMoments && project.standoutMoments.length > 0
              ? [{ id: "standout-moments", label: "Takeaways" }]
              : []),
          ]} />

          {/* The 4-Part Framework: Weight / Constraint / Build / Result */}
          {project.framework && (
            <section id="impact" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-[#f7f7f5] border border-[#e6e6e6]" data-reveal>
              <h2 className="text-sm font-mono uppercase tracking-wider font-bold text-[#000000] mb-4">
                The Breakdown: Problem &amp; Result
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-reveal-group>
                <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#f3dada]" data-reveal="quiet">
                  <div className="flex items-center gap-2 mb-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#cf4444]" />
                    <span className="text-[11px] font-mono uppercase font-bold text-[#cf4444]">
                      Problem
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                    {project.framework.weight}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#eee4ca]" data-reveal="quiet">
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

                <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#d2e4ed]" data-reveal="quiet">
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

                <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#cbe8d2]" data-reveal="quiet">
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
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-reveal="quiet">
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

          {/* Overview & Context */}
          <section id="overview" className="scroll-mt-28 flex flex-col gap-4 text-base leading-relaxed text-[#333333]" data-reveal="quiet">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1">
                Context &amp; Background
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[#000000]">
                The Story
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#333333] leading-relaxed">{project.overview}</p>

            {project.roleBeyondCode && (
              <div className="p-5 rounded-2xl bg-[#fafaf8] border border-[#e6e6e6] mt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#000000] font-bold block mb-1.5">
                  Working with the Team
                </span>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  {project.roleBeyondCode}
                </p>
              </div>
            )}
          </section>

          {/* Problem & Solution */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-reveal-group>
            <div className="p-6 rounded-3xl bg-[#ffffff] border-2 border-[#e6e6e6] flex flex-col gap-3 shadow-xs" data-reveal="quiet">
              <h3 className="text-base font-bold text-[#000000]">
                The Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#ffffff] border-2 border-[#e6e6e6] flex flex-col gap-3 shadow-xs" data-reveal="quiet">
              <h3 className="text-base font-bold text-[#000000]">
                The Solution
              </h3>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          {/* Key Product Screens Showcase Gallery */}
          <section id="gallery" className="scroll-mt-28 flex flex-col gap-5" data-reveal>
            <div className="border-b border-[#f1f1f1] pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1">
                Product Showcase &amp; Screens
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[#000000]">
                Key Screens
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] mt-1">
                Visual preview of the core flows and interactive elements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 items-start">
              {(project.screenshots && project.screenshots.length > 0
                ? project.screenshots
                : [
                    {
                      src: project.heroImage || `/images/projects/${project.slug}.svg`,
                      alt: `${project.title} Screen`,
                      title: "Core Workflow",
                      caption: `${project.title} user interface and primary controls.`,
                      aspectRatio: 1.6,
                    },
                  ]
              ).map((shot, idx) => (
                <div key={idx} className={`flex flex-col gap-2 ${!shot.aspectRatio || shot.aspectRatio > 1 ? "sm:col-span-2 lg:col-span-3" : "w-full max-w-[280px] mx-auto"}`}>
                  <ProductShowcase
                    src={shot.src}
                    alt={shot.alt}
                    url={`${project.slug}.app`}
                    type="minimal"
                    aspectRatio="video"
                    imageAspectRatio={shot.aspectRatio}
                    sizes={shot.aspectRatio && shot.aspectRatio < 1 ? "(max-width: 639px) 80vw, 280px" : "(max-width: 1023px) 90vw, 1200px"}
                    caption={shot.caption || shot.title}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Architecture Flow */}
          {project.architecture && (
            <section id="architecture" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-[#ffffff] border-2 border-[#000000] flex flex-col gap-5 shadow-sm" data-reveal>
              <div className="border-b border-[#f1f1f1] pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1">
                  Architecture &amp; Data Flow
                </span>
                <h3 className="text-xl font-bold text-[#000000]">
                  {project.architecture.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] mt-1">
                  {project.architecture.description}
                </p>
              </div>

              <div className="architecture-flow flex flex-col gap-3" data-reveal data-reveal-group>
                {project.architecture.flowSteps.map((step, idx) => (
                  <div key={idx} className="architecture-step flex items-start gap-3 text-xs sm:text-sm text-[#222222]" data-reveal="quiet">
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
            <section className="flex flex-col gap-3" data-reveal="quiet">
              <h2 className="text-xl font-bold text-[#000000]">
                Implementation Code
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
            <section id="decisions" className="scroll-mt-28 flex flex-col gap-4" data-reveal="quiet">
              <h2 className="text-xl font-bold text-[#000000]">
                Trade-offs &amp; Decisions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-reveal-group>
                {project.keyDecisions.map((kd, idx) => (
                  <div
                    key={idx}
                    data-reveal="quiet"
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

          {/* Standout Moments & Reflections */}
          {project.standoutMoments && project.standoutMoments.length > 0 && (
            <section id="standout-moments" className="scroll-mt-28 flex flex-col gap-4" data-reveal="quiet">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1">
                  Lessons Learned
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-[#000000]">
                  Takeaways
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-reveal-group>
                {project.standoutMoments.map((sm, idx) => (
                  <div
                    key={idx}
                    data-reveal="quiet"
                    className="p-5 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-[#000000] block mb-1.5">
                        {sm.title}
                      </span>
                      <p className="text-xs text-[#555555] leading-relaxed">
                        {sm.description}
                      </p>
                    </div>
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
                  <ArrowLeft className="w-3 h-3" /> Previous Project
                </span>
                <span className="text-sm font-semibold text-[#000000] group-hover:underline mt-1">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex flex-col items-end text-right"
              >
                <span className="text-xs font-mono text-[#888888] flex items-center gap-1 group-hover:text-[#000000]">
                  Next Project <ArrowRight className="w-3 h-3" />
                </span>
                <span className="text-sm font-semibold text-[#000000] group-hover:underline mt-1">
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
