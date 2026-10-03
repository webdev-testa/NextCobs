"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Cpu, ShieldAlert, Wrench } from "lucide-react";
import { getProjectCategories, getProjectsByCategory, Project } from "@/lib/portfolio-catalog";

const filters = getProjectCategories();

function pillColor(color: Project["colorBlock"]) {
  const colors: Record<Project["colorBlock"], string> = {
    mint: "bg-[#c8e6cd] border-[#a6ceab]", lilac: "bg-[#c5b0f4] border-[#a991de]",
    lime: "bg-[#dceeb1] border-[#bed68b]", coral: "bg-[#f3c9b6] border-[#d9a892]",
    cream: "bg-[#f4ecd6] border-[#ded0b1]", pink: "bg-[#efd4d4] border-[#d8b5b5]",
    navy: "bg-[#1f1d3d] border-[#1f1d3d] text-white",
  };
  return colors[color];
}

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

      <div className="space-y-12" data-reveal-group aria-live="polite">
        {projects.map((project, idx) => (
          <article key={project.slug} data-reveal className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#e6e6e6] hover:border-[#000000] shadow-xs hover:shadow-md transition-all duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[#f1f1f1]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#5c5c5c]">0{idx + 1}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${pillColor(project.colorBlock)}`}>{project.clientOrContext}</span>
                <span className="text-xs font-mono text-[#5c5c5c]">{project.year}</span>
              </div>
              <Link href={`/work/${project.slug}`} className="inline-flex min-h-11 items-center gap-1 text-xs font-semibold hover:underline self-start sm:self-auto">
                Full case study <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1"><Link href={`/work/${project.slug}`} className="hover:underline">{project.title}</Link></h2>
              <p className="text-sm font-mono text-[#5c5c5c]">{project.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" data-reveal-group>
              {[
                { label: "Weight", value: project.framework.weight, icon: ShieldAlert, box: "bg-[#fdf5f5] border-[#f3dada]", ink: "text-[#b93636]" },
                { label: "Constraint", value: project.framework.constraint, icon: Wrench, box: "bg-[#fcf9f2] border-[#eee4ca]", ink: "text-[#8b6110]" },
                { label: "Build", value: project.framework.build, icon: Cpu, box: "bg-[#f4f8fa] border-[#d2e4ed]", ink: "text-[#1f6798]" },
                { label: "Result", value: project.framework.result, icon: CheckCircle2, box: "bg-[#f3f9f4] border-[#cbe8d2]", ink: "text-[#147c34]" },
              ].map(({ label, value, icon: Icon, box, ink }) => (
                <div key={label} data-reveal="quiet" className={`p-4 rounded-2xl border ${box}`}>
                  <div className={`flex items-center gap-2 mb-1.5 ${ink}`}><Icon className="w-3.5 h-3.5" aria-hidden="true" /><span className="text-[11px] font-mono uppercase font-bold">{label}</span></div>
                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">{value}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#f1f1f1] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">{project.tags.map((tag) => <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#f7f7f5] text-[#555555] border border-[#e6e6e6]">{tag}</span>)}</div>
              <Link href={`/work/${project.slug}`} className="min-h-11 inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-xs font-semibold hover:bg-[#222] active:scale-[.98]">Read full case study &rarr;</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
