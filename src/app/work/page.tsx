import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WorkProjectList } from "@/components/WorkProjectList";
import { ARCHIVED_PROJECTS } from "@/data/portfolioData";

export const metadata = {
  title: "Work & Case Studies - Ammardito Shafaat",
  description: "Full case studies evaluated through the Weight, Constraint, Build, and Result framework.",
};

export default function WorkIndexPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="mb-8">
          <Link href="/" className="inline-flex min-h-11 items-center gap-1.5 text-xs font-mono text-[#666] hover:text-black">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" /> Back to Home
          </Link>
        </div>

        <header className="mb-10 pb-8 border-b border-[#e6e6e6]" data-reveal>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-black text-white text-[11px] font-mono tracking-widest uppercase mb-4">Work & Case Studies</div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight mb-3">Selected Work</h1>
          <p className="text-base sm:text-lg text-[#555] max-w-2xl leading-relaxed">Every case study starts with the reality of the problem: the weight people carried, the constraints, what I built, and the measurable outcome.</p>
        </header>

        <WorkProjectList />

        <section className="pt-12 border-t border-[#e6e6e6]" data-reveal="quiet">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#5c5c5c] block mb-1">Explorations & Research</span>
            <h2 className="text-xl font-bold">Additional Engineering Systems</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" data-reveal-group>
            {ARCHIVED_PROJECTS.map((project) => (
              <article key={project.slug} data-reveal="quiet" className="p-5 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#5c5c5c] mb-2"><span>{project.year}</span><span>{project.clientOrContext}</span></div>
                  <h3 className="font-bold text-base mb-1">{project.title}</h3>
                  <p className="text-xs text-[#555] leading-relaxed mb-4">{project.summary}</p>
                </div>
                <div className="pt-3 border-t border-[#e6e6e6] flex flex-wrap gap-1">{project.tags.slice(0, 3).map((tag) => <span key={tag} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white text-[#555]">{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
