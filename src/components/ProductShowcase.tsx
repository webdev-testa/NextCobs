"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lock, X } from "lucide-react";
import { StudioDialog } from "@/components/StudioDialog";

export interface ProductShowcaseProps {
  src?: string;
  alt: string;
  url?: string;
  badge?: string;
  className?: string;
  aspectRatio?: "video" | "wide" | "tall" | "auto";
  imageAspectRatio?: number;
  sizes?: string;
  type?: "browser" | "tablet" | "minimal";
  caption?: string;
  priority?: boolean;
  comingSoon?: boolean;
  comingSoonText?: string;
  comingSoonSubtext?: string;
  overlay?: React.ReactNode;
  children?: React.ReactNode;
}

export function ProductShowcase({
  src,
  alt,
  url = "app.internal",
  badge,
  className = "",
  aspectRatio = "video",
  imageAspectRatio,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px",
  type = "browser",
  caption,
  priority = false,
  comingSoon = false,
  comingSoonText = "Coming Soon",
  comingSoonSubtext,
  overlay,
  children,
}: ProductShowcaseProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const aspectClass =
    aspectRatio === "video"
      ? "aspect-[16/10]"
      : aspectRatio === "wide"
      ? "aspect-[16/9]"
      : aspectRatio === "tall"
      ? "aspect-[4/3]"
      : "min-h-[280px]";

  return (
    <>
      <figure className={`w-full flex flex-col group ${className}`}>
        {/* Chassis Frame */}
        <div className="w-full rounded-xl border border-[var(--color-hairline)] bg-[#0f172a] overflow-hidden">
          {/* Header Bar */}
          {type === "browser" && (
            <div className="px-4 py-3 bg-[#1e293b] border-b border-[#334155] flex items-center justify-between gap-3 text-xs select-none">
              {/* Window Controls */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#f59e0b]/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#10b981]/90 inline-block" />
              </div>

              {/* URL Address Pill */}
              <div className="flex-1 max-w-sm sm:max-w-md mx-auto px-3 py-1 rounded-full bg-[#0f172a] border border-[#334155] flex items-center justify-center gap-2 text-[11px] font-mono text-[#94a3b8] truncate">
                <Lock className="w-3 h-3 text-[#10b981] shrink-0" />
                <span className="truncate">{url}</span>
              </div>

              {/* Right Action / Badge */}
              <div className="flex items-center gap-2 shrink-0">
                {badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/30 hidden sm:inline-block">
                    {badge}
                  </span>
                )}

              </div>
            </div>
          )}

          {/* Screenshot Media Canvas */}
          <div className={`relative w-full ${imageAspectRatio ? "" : aspectClass} bg-[#0b1120] overflow-hidden`} style={imageAspectRatio ? { aspectRatio: imageAspectRatio } : undefined}>
            {src ? (
              <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes={sizes}
                className={`object-cover object-top transition duration-300 ${comingSoon ? "opacity-35 blur-[1.5px] scale-[1.01]" : ""}`}
              />
            ) : !comingSoon ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#94a3b8]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#64748b] mb-1">
                  Product Screenshot Showcase
                </span>
                <p className="text-sm text-[#cbd5e1] font-medium">{alt}</p>
              </div>
            ) : null}

            {comingSoon && (
              <div className="absolute inset-0 bg-[#0b1120]/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center z-10 select-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e293b]/90 border border-[#f97316]/40 shadow-sm mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
                  <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-[#fb923c]">
                    In Development
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-white drop-shadow-sm">
                  {comingSoonText}
                </p>
                {comingSoonSubtext && (
                  <p className="text-xs sm:text-sm text-[#94a3b8] max-w-xs sm:max-w-sm mt-2 leading-relaxed">
                    {comingSoonSubtext}
                  </p>
                )}
              </div>
            )}

            {overlay}
            {children}
            {src && !comingSoon && (
              <button
                type="button"
                onClick={() => setIsZoomed(true)}
                aria-label={`Open ${alt} image preview`}
                aria-haspopup="dialog"
                className="absolute inset-0 z-20 cursor-zoom-in focus-visible:outline-offset-[-4px]"
              />
            )}
          </div>
        </div>

        {caption && (
          <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--color-muted-ink)]">
            {caption && <span>{caption}</span>}
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      {isZoomed && src && (
        <StudioDialog label={`${alt} image preview`} onClose={() => setIsZoomed(false)}>
          <div
            className="relative max-w-5xl lg:max-w-6xl w-full max-h-[92dvh] bg-[#ffffff] rounded-2xl sm:rounded-3xl border border-[#e6e6e6] shadow-[0_24px_70px_rgba(0,0,0,0.22)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar: Studio Window Chrome */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#fafaf8] border-b border-[#e6e6e6] flex items-center justify-between gap-4 select-none shrink-0">
              {/* Left: Window Controls + Title */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40" />
                </div>
                <div className="h-4 w-px bg-[#e6e6e6] shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs sm:text-sm font-bold text-[#000000] tracking-tight truncate">
                  {alt}
                </span>
                {badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#dceeb1] text-[#284a1e] border border-[#bed68b] shrink-0 hidden sm:inline-block">
                    {badge}
                  </span>
                )}
              </div>

              {/* Right: Hint + Close Button */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="text-[10px] font-mono text-[#888888] hidden sm:inline-block px-2 py-1 rounded bg-[#ffffff] border border-[#e6e6e6]">
                  ESC
                </span>
                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  className="w-10 h-10 rounded-full bg-[#ffffff] hover:bg-[#000000] text-[#000000] hover:text-[#ffffff] border border-[#e6e6e6] flex items-center justify-center transition-colors cursor-pointer shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                  aria-label="Close enlarged preview"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Canvas Stage: Drafting Artboard */}
            <div className="relative w-full flex-1 min-h-0 bg-[#f7f7f5] bg-figma-grid p-3 sm:p-5 lg:p-6 flex items-center justify-center overflow-auto">
              <div className="relative max-h-[72dvh] rounded-xl sm:rounded-2xl overflow-hidden border border-[#e6e6e6] shadow-[0_12px_36px_rgba(0,0,0,0.1)] bg-[#0b1120]" style={{ aspectRatio: imageAspectRatio || 1.6, width: imageAspectRatio && imageAspectRatio < 1 ? `min(100%, ${70 * imageAspectRatio}dvh)` : "100%" }}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Footer Bar: Caption & Inspection Meta */}
            {(caption || url) && (
              <div className="px-4 sm:px-6 py-2.5 bg-[#fafaf8] border-t border-[#e6e6e6] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#666666] shrink-0">
                <span className="truncate">{caption || alt}</span>
                {url && <span className="text-[11px] text-[#888888] hidden sm:inline-block">Host: {url}</span>}
              </div>
            )}
          </div>
        </StudioDialog>
      )}
    </>
  );
}
