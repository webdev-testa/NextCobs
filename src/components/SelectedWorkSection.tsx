"use client";

import Link from "next/link";
import { getSelectedFlagshipProjects } from "@/lib/portfolio-catalog";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ArrowRight } from "lucide-react";

export function SelectedWorkSection() {
  const { lgSmWiki, drMeoww, byGewa, internalMigration } = getSelectedFlagshipProjects();

  return (
    <section id="selected-work" className="w-full bg-[var(--color-canvas)] py-16 sm:py-24 border-b border-[var(--color-hairline)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight">Selected Projects</h2>
            <p className="text-base text-[var(--color-muted-ink)] mt-3 leading-relaxed">A few things I&apos;ve designed, engineered, and shipped recently.</p>
          </div>
          <Link href="/work" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold hover:underline underline-offset-4 self-start">
            View all projects <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <article className="exhibit-card p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#f2f9f4] mb-8" data-reveal="quiet">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-[#46534a] mb-4">
                <span>{lgSmWiki.clientOrContext}</span><span>{lgSmWiki.year}</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight"><Link href={`/work/${lgSmWiki.slug}`} className="hover:underline underline-offset-4">{lgSmWiki.title}</Link></h3>
              <p className="text-base mt-3 leading-relaxed text-[#46534a]">{lgSmWiki.subtitle}</p>
              <p className="text-base leading-relaxed mt-4">{lgSmWiki.summary}</p>
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[#c8d9cc]">
                {lgSmWiki.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-base sm:text-lg font-semibold">{metric.value}</p>
                    <p className="text-xs leading-relaxed text-[#46534a] mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
              <Link href={`/work/${lgSmWiki.slug}`} className="inline-flex min-h-11 items-center gap-2 mt-4 text-sm font-semibold hover:underline underline-offset-4">View full case study <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="lg:col-span-7">
              <ProductShowcase src={lgSmWiki.heroImage || "/images/projects/lg-sm-wiki.svg"} alt={lgSmWiki.title} type="minimal" caption="Illustrative preview · Company knowledge search" />
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" data-reveal-group>
          {[drMeoww, byGewa].map((project) => (
            <article key={project.slug} data-reveal="quiet" className={`exhibit-card p-6 sm:p-8 rounded-2xl flex flex-col ${project.slug === drMeoww.slug ? "bg-[#f7f4fd]" : "bg-[#f4f8e8]"}`}>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-[#514959] mb-4">
                <span>{project.clientOrContext}</span><span>{project.year}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight"><Link href={`/work/${project.slug}`} className="hover:underline underline-offset-4">{project.title}</Link></h3>
              <p className="text-base leading-relaxed text-[#514959] mt-3 mb-6">{project.subtitle}</p>
              <ProductShowcase src={project.heroImage || `/images/projects/${project.slug}.svg`} alt={project.title} type="minimal" caption="Illustrative product preview" />
              <p className="text-base leading-relaxed mt-6">{project.summary}</p>
              <p className="text-sm font-semibold leading-relaxed mt-5">{project.framework.result}</p>
              <div className="mt-auto pt-4">
                <Link href={`/work/${project.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold hover:underline underline-offset-4">Case study <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>

        <article className="exhibit-card p-6 sm:p-8 rounded-2xl bg-[var(--color-surface-soft)]" data-reveal="quiet">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-mono text-[var(--color-muted-ink)] mb-4">{internalMigration.clientOrContext} · {internalMigration.year}</p>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight"><Link href={`/work/${internalMigration.slug}`} className="hover:underline underline-offset-4">{internalMigration.title}</Link></h3>
              <p className="text-base text-[var(--color-muted-ink)] leading-relaxed mt-3">{internalMigration.subtitle}</p>
              <p className="text-base leading-relaxed mt-4">{internalMigration.summary}</p>
              <p className="text-sm font-semibold leading-relaxed mt-5">{internalMigration.framework.result}</p>
              <Link href={`/work/${internalMigration.slug}`} className="inline-flex min-h-11 items-center gap-2 mt-4 text-sm font-semibold hover:underline underline-offset-4">View full case study <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="lg:col-span-7">
              <ProductShowcase
                src={internalMigration.heroImage}
                alt={internalMigration.title}
                type="minimal"
                comingSoon
                comingSoonText="Coming Soon"
                comingSoonSubtext="SSO-connected applications and shared UI components"
                caption="Preview in development · Internal platform migration"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

