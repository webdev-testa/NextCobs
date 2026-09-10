import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PURSUITS_DATA, THINGS_I_SPEND_TIME_ON } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";
import {
  ArrowRight,
  Clock,
  Compass,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";

export default function PursuitsIndexPage() {
  const pursuits = Object.values(PURSUITS_DATA);

  const getAccentBadge = (accent: string) => {
    switch (accent) {
      case "lilac":
        return "bg-[#c5b0f4]/40 border-[#a991de] text-[#000000]";
      case "coral":
        return "bg-[#f3c9b6]/40 border-[#d9a892] text-[#000000]";
      case "mint":
        return "bg-[#c8e6cd]/40 border-[#a6ceab] text-[#000000]";
      case "cream":
        return "bg-[#f4ecd6] border-[#ded0b1] text-[#000000]";
      default:
        return "bg-[#f7f7f5] border-[#e6e6e6] text-[#000000]";
    }
  };

  const getAccentCardBorder = (accent: string) => {
    switch (accent) {
      case "lilac":
        return "hover:border-[#a991de]";
      case "coral":
        return "hover:border-[#d9a892]";
      case "mint":
        return "hover:border-[#a6ceab]";
      case "cream":
        return "hover:border-[#ded0b1]";
      default:
        return "hover:border-[#000000]";
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col selection:bg-[#000000] selection:text-[#ffffff]">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        {/* Navigation */}
        <div className="mb-8">
          <BackButton href="/" label="Back to Home" />
        </div>

        {/* Page Header */}
        <header className="mb-12 pb-8 border-b border-[#e6e6e6]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#666666]">
              Personal Blog &bull; Visual Essays
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#000000] leading-tight mb-4">
            Perspectives, Practice & Safar
          </h1>

          <p className="text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed">
            Beyond the code editor: story-driven worlds, calculating variations, physical discipline, and the profound humility of traveling to unfamiliar places.
          </p>
        </header>

        {/* Grid of Pursuit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pursuits.map((pursuit) => {
            const previewPhotos = pursuit.gallery.slice(0, 3);
            return (
              <article
                key={pursuit.slug}
                className={`p-6 sm:p-8 rounded-3xl bg-[#ffffff] border-2 border-[#e6e6e6] ${getAccentCardBorder(
                  pursuit.accent
                )} shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group`}
              >
                <div>
                  {/* Card Header: Tag & Emoji */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${getAccentBadge(
                        pursuit.accent
                      )}`}
                    >
                      {pursuit.tag}
                    </span>
                    <span className="text-2xl">{pursuit.emoji}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-2xl font-bold tracking-tight text-[#000000] mb-1 group-hover:text-[#000000]">
                    {pursuit.title}
                  </h2>
                  <p className="text-xs font-mono text-[#666666] mb-4">
                    {pursuit.subtitle}
                  </p>

                  {/* Lead Quote */}
                  <p className="text-sm text-[#444444] leading-relaxed mb-6 italic border-l-2 border-[#e6e6e6] pl-3 py-0.5">
                    &ldquo;{pursuit.leadQuote}&rdquo;
                  </p>

                  {/* Photo Preview Strip (3 thumbnails) */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {previewPhotos.map((photo) => (
                      <div
                        key={photo.id}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#f7f7f5] border border-[#e6e6e6]"
                      >
                        <Image
                          src={photo.url}
                          alt={photo.caption}
                          fill
                          sizes="150px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Meta & CTA Link */}
                <div className="pt-4 border-t border-[#f1f1f1] flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#777777]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {pursuit.readTime}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <ImageIcon className="w-3 h-3" />
                      {pursuit.photoCount} Photos
                    </span>
                  </div>

                  <Link
                    href={`/pursuits/${pursuit.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] active:scale-95 transition-all shadow-xs"
                  >
                    <span>Read Essay</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
