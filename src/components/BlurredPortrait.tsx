import React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";

interface BlurredPortraitProps {
  imageSrc?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  text?: string;
  className?: string;
  badgeClassName?: string;
}

export function BlurredPortrait({
  imageSrc = "/images/sketches/avatar-sketch.png",
  alt = "Portrait blurred — still choosing my good looking photo",
  priority = false,
  sizes = "(max-width: 640px) 196px, (max-width: 1024px) 236px, (max-width: 1280px) 276px, 296px",
  text = "still choosing my best looking photo",
  className = "",
  badgeClassName = "",
}: BlurredPortraitProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden select-none bg-[#f7f7f5] ${className}`}>
      {/* Blurred portrait photo */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ filter: "blur(12px)" }}
        className="object-contain filter blur-md scale-110 pointer-events-none select-none transition-transform duration-300"
      />

      {/* Gentle frosted overlay wash */}
      <div
        className="absolute inset-0 bg-white/25 pointer-events-none"
        aria-hidden="true"
      />

      {/* Playful placeholder status badge */}
      <div
        className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#e6e6e6] shadow-[0_2px_10px_rgba(0,0,0,0.06)] text-center max-w-[92%] transition-transform duration-200 group-hover:scale-105 ${badgeClassName}`}
        >
          <Camera className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono font-medium text-neutral-800 leading-snug">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
