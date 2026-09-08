import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NOTES_DATA } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";
import { CodeSnippet } from "@/components/CodeSnippet";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Quote } from "lucide-react";

export async function generateStaticParams() {
  return NOTES_DATA.map((n) => ({ slug: n.slug }));
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const noteIndex = NOTES_DATA.findIndex((n) => n.slug === slug);

  if (noteIndex === -1) {
    notFound();
  }

  const note = NOTES_DATA[noteIndex];
  const prevNote = noteIndex > 0 ? NOTES_DATA[noteIndex - 1] : null;
  const nextNote = noteIndex < NOTES_DATA.length - 1 ? NOTES_DATA[noteIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col selection:bg-[#000000] selection:text-[#ffffff]">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <article className="flex flex-col gap-8">
          
          {/* Back Navigation */}
          <div>
            <BackButton href="/notes" label="Back to Notes" />
          </div>

          {/* Header */}
          <header className="border-b border-[#e6e6e6] pb-8">
            <div className="flex items-center gap-3 text-xs font-mono text-[#666666] mb-3">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#000000]" />
                {note.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {note.readTime}
              </span>
              {note.isDraft && (
                <>
                  <span>&bull;</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#f4ecd6] text-[#b07d18] font-bold border border-[#eee4ca]">
                    Preview
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#000000] leading-tight mb-4">
              {note.title}
            </h1>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-6 font-mono text-xs">
              {note.subtitle}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#f7f7f5] text-[#444444] border border-[#e6e6e6]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Body */}
          <div className="space-y-8 text-base sm:text-lg text-[#222222] leading-relaxed font-normal">
            
            {/* Intro Lead */}
            <p className="text-lg sm:text-xl text-[#111111] leading-relaxed font-medium">
              {note.content.intro}
            </p>

            {/* Sections */}
            {note.content.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4 pt-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#000000] pt-2">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {/* Callout Quote */}
                {section.callout && (
                  <div className="p-6 rounded-2xl bg-[#f7f7f5] border-l-4 border-[#000000] my-6">
                    <p className="text-base sm:text-lg font-semibold text-[#000000] italic">
                      &ldquo;{section.callout}&rdquo;
                    </p>
                  </div>
                )}

                {/* Code Block if any */}
                {section.code && (
                  <div className="my-6">
                    <CodeSnippet
                      filename={section.code.filename}
                      language={section.code.language}
                      code={section.code.code}
                      caption={`Listing: ${section.code.filename}`}
                    />
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="pt-8 border-t border-[#e6e6e6] my-8">
              <div className="p-6 rounded-3xl bg-[#f4ecd6] border border-[#ded0b1]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1">
                  Core Takeaway
                </span>
                <p className="text-base sm:text-lg font-medium text-[#111111] leading-relaxed">
                  {note.content.conclusion}
                </p>
              </div>
            </div>

          </div>

          {/* Author Footnote */}
          <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6e6e6] flex items-center gap-4 mt-6">
            <div className="w-10 h-10 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-bold text-sm shrink-0">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-[#000000]">Ammardito Shafaat</span>
              <span className="text-xs text-[#666666]">
                Software Engineer based in Jakarta. Building things so other people can carry less.
              </span>
            </div>
          </div>

          {/* Next / Previous Navigation */}
          <nav className="pt-8 border-t border-[#e6e6e6] flex items-center justify-between gap-4 mt-4">
            {prevNote ? (
              <Link
                href={`/notes/${prevNote.slug}`}
                className="group flex flex-col items-start text-left"
              >
                <span className="text-xs font-mono text-[#888888] flex items-center gap-1 group-hover:text-[#000000]">
                  <ArrowLeft className="w-3 h-3" /> Previous Note
                </span>
                <span className="text-sm font-semibold text-[#000000] group-hover:underline mt-1">
                  {prevNote.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextNote && (
              <Link
                href={`/notes/${nextNote.slug}`}
                className="group flex flex-col items-end text-right"
              >
                <span className="text-xs font-mono text-[#888888] flex items-center gap-1 group-hover:text-[#000000]">
                  Next Note <ArrowRight className="w-3 h-3" />
                </span>
                <span className="text-sm font-semibold text-[#000000] group-hover:underline mt-1">
                  {nextNote.title}
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
