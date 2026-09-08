"use client";

import React from "react";
import Link from "next/link";
import { NOTES_DATA } from "@/data/portfolioData";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";

export function NotesPreviewSection() {
  // Take the first 2 published notes
  const previewNotes = NOTES_DATA.filter((n) => !n.isDraft).slice(0, 2);

  return (
    <section className="w-full bg-[#ffffff] py-16 sm:py-20 border-b border-[#e6e6e6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#f1f1f1]">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1">
              Field Notes & Essays
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000]">
              Notes Preview
            </h2>
            <p className="text-sm text-[#666666] mt-1">
              Observations on systems architecture, lightweight tooling, and engineering reality.
            </p>
          </div>

          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#000000] hover:text-[#555555] transition-colors shrink-0 group py-1"
          >
            <span>Browse all notes</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewNotes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="group p-6 sm:p-7 rounded-3xl bg-[#ffffff] border border-[#e6e6e6] hover:border-[#000000] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#666666]">
                    <BookOpen className="w-3 h-3 text-[#000000]" />
                    <span>{note.date}</span>
                  </div>
                  <span className="text-xs font-mono text-[#888888]">{note.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#000000] group-hover:underline flex items-start justify-between gap-2 mb-2">
                  <span>{note.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#000000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1" />
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                  {note.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#f1f1f1] flex flex-wrap gap-1.5">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#f7f7f5] text-[#555555]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
