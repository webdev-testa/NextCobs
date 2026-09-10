import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PURSUITS_DATA, THINGS_I_SPEND_TIME_ON } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";
import { PhotoGallery } from "@/components/PhotoGallery";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Compass,
  Image as ImageIcon,
  Quote,
  Sparkles,
} from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(PURSUITS_DATA).map((slug) => ({ slug }));
}

export default async function PursuitDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pursuit = PURSUITS_DATA[slug];

  if (!pursuit) {
    notFound();
  }

  const allSlugs = Object.keys(PURSUITS_DATA);
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : allSlugs[allSlugs.length - 1];
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : allSlugs[0];
  const prevPursuit = PURSUITS_DATA[prevSlug];
  const nextPursuit = PURSUITS_DATA[nextSlug];

  // Accent color block mappings adhering to DESIGN.md
  const accentStyles = {
    lilac: {
      bg: "bg-[#c5b0f4]",
      border: "border-[#a991de]",
      badge: "bg-[#c5b0f4]/40 border-[#a991de] text-[#000000]",
      pill: "bg-[#000000] text-[#ffffff]",
    },
    mint: {
      bg: "bg-[#c8e6cd]",
      border: "border-[#a6ceab]",
      badge: "bg-[#c8e6cd]/40 border-[#a6ceab] text-[#000000]",
      pill: "bg-[#000000] text-[#ffffff]",
    },
    cream: {
      bg: "bg-[#f4ecd6]",
      border: "border-[#ded0b1]",
      badge: "bg-[#f4ecd6] border-[#ded0b1] text-[#000000]",
      pill: "bg-[#000000] text-[#ffffff]",
    },
    coral: {
      bg: "bg-[#f3c9b6]",
      border: "border-[#d9a892]",
      badge: "bg-[#f3c9b6]/40 border-[#d9a892] text-[#000000]",
      pill: "bg-[#000000] text-[#ffffff]",
    },
    lime: {
      bg: "bg-[#dceeb1]",
      border: "border-[#bed68b]",
      badge: "bg-[#dceeb1]/40 border-[#bed68b] text-[#000000]",
      pill: "bg-[#000000] text-[#ffffff]",
    },
    pink: {
      bg: "bg-[#efd4d4]",
      border: "border-[#d8b5b5]",
      badge: "bg-[#efd4d4]/40 border-[#d8b5b5] text-[#000000]",
      pill: "bg-[#000000] text-[#ffffff]",
    },
  }[pursuit.accent] || {
    bg: "bg-[#f7f7f5]",
    border: "border-[#e6e6e6]",
    badge: "bg-[#f7f7f5] border-[#e6e6e6] text-[#000000]",
    pill: "bg-[#000000] text-[#ffffff]",
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col selection:bg-[#000000] selection:text-[#ffffff]">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        {/* Navigation & Header */}
        <div className="mb-8">
          <BackButton href="/pursuits" label="All Pursuits & Journal" />
        </div>

        {/* Taxonomic Eyebrow & Meta */}
        <header className="mb-8 border-b border-[#f1f1f1] pb-6">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#666666] mb-3">
            <span className="uppercase tracking-widest text-[#000000] font-semibold">
              Pursuits &bull; Personal Blog
            </span>
            <span>/</span>
            <span className={`px-2.5 py-0.5 rounded-full border text-xs ${accentStyles.badge}`}>
              {pursuit.tag}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {pursuit.readTime}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <ImageIcon className="w-3.5 h-3.5" />
              {pursuit.photoCount} Photos
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-[#000000] leading-[1.08] mb-3">
            {pursuit.title}
          </h1>

          <p className="text-base sm:text-lg font-mono text-[#555555]">
            {pursuit.subtitle}
          </p>
        </header>

        {/* Large Tactile Accent Color Block Banner */}
        <section
          className={`p-7 sm:p-10 rounded-3xl border-2 ${accentStyles.bg} ${accentStyles.border} relative overflow-hidden mb-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)]`}
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className="text-4xl sm:text-5xl">{pursuit.emoji}</span>
            <span className="text-xs font-mono uppercase tracking-widest opacity-70">
              Core Thread
            </span>
          </div>

          <p className="text-lg sm:text-2xl font-semibold tracking-tight text-[#000000] leading-snug max-w-3xl">
            &ldquo;{pursuit.leadQuote}&rdquo;
          </p>
        </section>

        {/* Essay Section (max-w-3xl for optimal line length and reading ergonomics) */}
        <article className="max-w-3xl mx-auto flex flex-col gap-10">
          {/* Overview Lead */}
          <div className="flex flex-col gap-4 text-base sm:text-lg text-[#333333] leading-relaxed">
            {pursuit.overview.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Highlights Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            {pursuit.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col justify-between"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-1">
                  Principle 0{idx + 1}
                </span>
                <h4 className="text-sm font-bold text-[#000000] mb-1">
                  {highlight.title}
                </h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {highlight.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Subsections & Callouts */}
          {pursuit.subsections.map((sub, idx) => (
            <div key={idx} className="flex flex-col gap-4 pt-4 border-t border-[#f1f1f1]">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#000000]">
                {sub.heading}
              </h3>

              {sub.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-[#444444] leading-relaxed">
                  {p}
                </p>
              ))}

              {sub.callout && (
                <div
                  className={`p-5 rounded-2xl border ${accentStyles.bg} ${accentStyles.border} my-2 flex items-start gap-3.5`}
                >
                  <Quote className="w-5 h-5 shrink-0 text-[#000000] mt-0.5" />
                  <p className="text-sm font-semibold text-[#000000] leading-relaxed">
                    {sub.callout}
                  </p>
                </div>
              )}
            </div>
          ))}
        </article>

        {/* High-Resolution Photo Gallery */}
        <div className="mt-8">
          <PhotoGallery
            photos={pursuit.gallery}
            title={`${pursuit.title} Visual Journal`}
            subtitle={`Photographs and quiet frames from ${pursuit.title.toLowerCase()}.`}
            accent={pursuit.accent}
          />
        </div>

        {/* Curated Items / Logs Section */}
        {pursuit.curatedItems && (
          <section className="mt-12 pt-8 border-t border-[#f1f1f1]">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1">
                Curated Index
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000]">
                {pursuit.curatedItems.sectionTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] mt-1">
                {pursuit.curatedItems.sectionDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pursuit.curatedItems.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#ffffff] border border-[#e6e6e6] hover:border-[#000000] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono uppercase px-2 py-0.5 rounded-full bg-[#f7f7f5] text-[#555555] border border-[#e6e6e6]">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#000000] mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs font-mono text-[#666666] mb-3">
                      {item.creatorOrContext}
                    </p>

                    <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>

                  {item.quote && (
                    <div className="pt-2 border-t border-[#f1f1f1] text-xs italic text-[#555555] font-serif">
                      &ldquo;{item.quote}&rdquo;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Pagination / Next Pursuit Navigation */}
        <nav className="mt-16 pt-8 border-t border-[#e6e6e6] flex items-center justify-between gap-4">
          <Link
            href={`/pursuits/${prevSlug}`}
            className="group flex items-center gap-3 p-3 sm:p-4 rounded-2xl border border-[#e6e6e6] hover:border-[#000000] hover:bg-[#f7f7f5] transition-all max-w-[48%]"
          >
            <ArrowLeft className="w-4 h-4 text-[#666666] group-hover:text-[#000000] group-hover:-translate-x-1 transition-transform" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-mono text-[#888888] uppercase">
                Previous Pursuit
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#000000] truncate">
                {prevPursuit.title}
              </span>
            </div>
          </Link>

          <Link
            href={`/pursuits/${nextSlug}`}
            className="group flex items-center justify-end gap-3 p-3 sm:p-4 rounded-2xl border border-[#e6e6e6] hover:border-[#000000] hover:bg-[#f7f7f5] transition-all max-w-[48%]"
          >
            <div className="flex flex-col text-right">
              <span className="text-xs font-mono text-[#888888] uppercase">
                Next Pursuit
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#000000] truncate">
                {nextPursuit.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#666666] group-hover:text-[#000000] group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  );
}
