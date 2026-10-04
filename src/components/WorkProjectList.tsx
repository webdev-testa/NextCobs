"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProjectCategories, getProjectsByCategory } from "@/lib/portfolio-catalog";
import { BookCover } from "@/components/BookCover";

const filters = getProjectCategories();
export function WorkProjectList() {
  const [filter, setFilter] = useState<string>("All");
  const projects = useMemo(() => getProjectsByCategory(filter), [filter]);

  return (
    <section className="mb-20" aria-labelledby="work-filter-label">
      <div className="mb-7" data-reveal="quiet">
        <p id="work-filter-label" className="text-xs font-mono text-[#666666] mb-2">Filter by project type</p>
        <div className="filter-rail" role="group" aria-labelledby="work-filter-label">
          {filters.map((item) => (
            <button key={item} type="button" className="filter-button" aria-pressed={filter === item} onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

        <ul className="case-book-shelf" aria-label="Case study bookshelf" aria-live="polite">
          {projects.map((project) => {
            const comingSoon = project.slug === "automated-fleet-metrics";
            const book = <>
                <BookCover width={240} height={343} responsive backColor={project.bgHex} hasStrap={comingSoon} strapPosition={75} isInteractive={!comingSoon}>
                  <div className="case-book-art" style={{ backgroundColor: project.bgHex }}>
                    <div className="case-book-edition font-mono">Case study <span>{project.year}</span></div>
                    <div className="case-book-heading">
                      <p className="case-book-category font-mono">{project.category}</p>
                      <h2 className="case-book-title">{project.title}</h2>
                      <p className="case-book-subtitle">{project.subtitle}</p>
                    </div>
                    <div className="case-book-colophon">
                      <p className="font-mono">{project.tags.slice(0, 2).join(" / ")}</p>
                      <p className="mt-2 font-semibold">Ammardito Shafaat</p>
                    </div>
                  </div>
                </BookCover>
                <div className="case-book-caption">
                  <p className="text-sm text-[var(--color-muted-ink)] leading-relaxed">{project.metrics[0].label}</p>
                  <p className="mt-1 text-base font-semibold tracking-tight">{project.metrics[0].value}</p>
                  {comingSoon ? (
                    <span className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-muted-ink)]">Coming Soon</span>
                  ) : (
                    <span className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold">Read case study <ArrowRight size={15} aria-hidden="true" /></span>
                  )}
                </div>
            </>;
            return <li key={project.slug} className="min-w-0">
              {comingSoon ? (
                <div aria-label={`${project.title} — Coming Soon`}>{book}</div>
              ) : (
                <Link href={`/work/${project.slug}`} className="case-book-link block rounded-sm" aria-label={`Read case study: ${project.title}`}>{book}</Link>
              )}
            </li>
          })}
        </ul>
    </section>
  );
}
