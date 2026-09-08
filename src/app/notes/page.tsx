import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NOTES_DATA } from "@/data/portfolioData";
import { ArrowLeft, ArrowUpRight, BookOpen, Clock } from "lucide-react";

export const metadata = {
  title: "Notes & Essays — Ammardito Shafaat",
  description: "Technical essays on systems architecture, zero-cost backends, and engineering reality.",
};

export default function NotesIndexPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col selection:bg-[#000000] selection:text-[#ffffff]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        
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
            <span>NOTES & ESSAYS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#000000] leading-tight mb-3">
            Field Notes
          </h1>

          <p className="text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed">
            Written observations from production. Lessons on zero-dollar infrastructures, hardware APIs, and why building simply is the hardest engineering discipline.
          </p>
        </header>

        {/* Notes List */}
        <div className="space-y-8 mb-16">
          {NOTES_DATA.map((note) => (
            <article
              key={note.slug}
              className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#e6e6e6] hover:border-[#000000] shadow-2xs hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between gap-3 text-xs font-mono text-[#666666] mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#000000]" />
                  <span>{note.date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#888888]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{note.readTime}</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#000000] mb-2">
                <Link
                  href={`/notes/${note.slug}`}
                  className="hover:underline flex items-start justify-between gap-2"
                >
                  <span>{note.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] shrink-0 mt-1" />
                </Link>
              </h2>

              <p className="text-sm font-mono text-[#666666] mb-4">
                {note.subtitle}
              </p>

              <p className="text-sm text-[#444444] leading-relaxed mb-6">
                {note.summary}
              </p>

              <div className="pt-4 border-t border-[#f1f1f1] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {note.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#f7f7f5] text-[#555555] border border-[#f1f1f1]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/notes/${note.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#000000] hover:underline"
                >
                  <span>Read essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
