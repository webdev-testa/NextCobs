"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { PursuitPhoto } from "@/data/portfolioData";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Maximize2,
  X,
} from "lucide-react";

interface PhotoGalleryProps {
  photos: PursuitPhoto[];
  title?: string;
  subtitle?: string;
  accent?: string;
}

export function PhotoGallery({
  photos,
  title = "Photo Journal",
  subtitle = "Moments, textures, and quiet frames captured along the way.",
  accent = "cream",
}: PhotoGalleryProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : photos.length - 1));
  }, [selectedPhotoIndex, photos.length]);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < photos.length - 1 ? prev! + 1 : 0));
  }, [selectedPhotoIndex, photos.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseLightbox();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedPhotoIndex, handlePrev, handleNext]);

  const currentPhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  return (
    <section className="w-full my-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#f1f1f1] gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#666666]">
              Visual Journal
            </span>
            <span className="text-xs font-mono text-[#cccccc]">&bull;</span>
            <span className="text-xs font-mono font-medium text-[#000000]">
              {photos.length} Frames
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000]">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] mt-1 max-w-xl">
            {subtitle}
          </p>
        </div>

        <span className="text-xs font-mono text-[#888888] hidden sm:block">
          Click any frame to inspect &bull; Esc to close
        </span>
      </div>

      {/* Responsive Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => handleOpenLightbox(index)}
            className="group bg-[#ffffff] p-3 rounded-2xl border border-[#e6e6e6] hover:border-[#000000] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            {/* Photo Frame */}
            <div className="relative w-full overflow-hidden rounded-xl bg-[#f7f7f5] aspect-[4/3]">
              <Image
                src={photo.url}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />

              {/* Location Pill Overlay */}
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-[#000000]/70 backdrop-blur-xs text-[#ffffff] text-xs font-mono flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-[#ffffff]" />
                <span>{photo.location}</span>
              </div>

              {/* Hover Inspect Icon */}
              <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-[#ffffff]/90 text-[#000000] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Caption & Metadata */}
            <div className="pt-3 px-1">
              <p className="text-xs text-[#222222] font-normal leading-relaxed mb-2 line-clamp-2">
                {photo.caption}
              </p>

              <div className="flex items-center justify-between text-xs font-mono text-[#888888] pt-2 border-t border-[#f1f1f1]">
                <span>{photo.date}</span>
                {photo.camera && (
                  <span className="flex items-center gap-1 opacity-80 truncate max-w-[150px]">
                    <Camera className="w-2.5 h-2.5 shrink-0" />
                    <span className="truncate">{photo.camera.split(" · ")[0]}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Featured Lightbox Modal */}
      {selectedPhotoIndex !== null && currentPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          className="fixed inset-0 z-50 bg-[#000000]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
          onClick={handleCloseLightbox}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between text-[#ffffff] mb-3 px-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff3d8b]" />
                <span className="text-xs font-mono font-medium">{currentPhoto.location}</span>
                <span className="text-xs text-[#888888]">&bull;</span>
                <span className="text-xs font-mono text-[#aaaaaa]">{currentPhoto.date}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#888888]">
                  {selectedPhotoIndex + 1} / {photos.length}
                </span>
                <button
                  onClick={handleCloseLightbox}
                  className="w-8 h-8 rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/20 text-[#ffffff] flex items-center justify-center transition-colors"
                  aria-label="Close photo preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Photo Container */}
            <div className="relative w-full max-h-[70vh] h-[550px] bg-[#000000] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-[#333333]">
              <Image
                src={currentPhoto.url}
                alt={currentPhoto.caption}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#000000]/60 hover:bg-[#000000]/90 text-[#ffffff] flex items-center justify-center transition-all border border-[#444444]"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#000000]/60 hover:bg-[#000000]/90 text-[#ffffff] flex items-center justify-center transition-all border border-[#444444]"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption & Camera Stamp */}
            <div className="w-full mt-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between text-[#ffffff] gap-2">
              <p className="text-sm text-[#e6e6e6] font-normal leading-relaxed max-w-2xl">
                {currentPhoto.caption}
              </p>

              {currentPhoto.camera && (
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ffffff]/10 text-xs font-mono text-[#bbbbbb] shrink-0">
                  <Camera className="w-3 h-3 text-[#ff3d8b]" />
                  <span>{currentPhoto.camera}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
