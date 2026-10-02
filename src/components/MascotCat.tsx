"use client";

import React, { useState } from "react";

interface MascotCatProps {
  mode?: "footer" | "avatar" | "icon";
  className?: string;
  onClick?: () => void;
}

/**
 * Meoww — Dito's Studio Mascot Cat
 * Hand-drawn editorial vector cat inspired by Dr. Meoww ERP case study.
 * Designed with Figma-editorial ink strokes, perked ears, and paws that drape over borders.
 */
export function MascotCat({ mode = "footer", className = "", onClick }: MascotCatProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.dispatchEvent(new CustomEvent("open-chat"));
    }
  };

  // Icon / Button mode: compact sketch cat face
  if (mode === "icon") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className || "w-5 h-5"}
        aria-hidden="true"
      >
        {/* Cat head & ears */}
        <path d="M4 10l2-6 4.5 3c1-.3 2-.3 3 0L18 4l2 6c.7 2 .7 4.2 0 6.2C18.5 19 15.5 21 12 21s-6.5-2-8-4.8c-.7-2-.7-4.2 0-6.2z" />
        {/* Eyes */}
        <circle cx="9" cy="13" r="1" fill="currentColor" />
        <circle cx="15" cy="13" r="1" fill="currentColor" />
        {/* Nose & mouth */}
        <path d="M11.5 15.5l.5.5.5-.5" />
        <path d="M12 16v1c-.6.5-1.2.5-1.8.2" />
        <path d="M12 17c.6.5 1.2.5 1.8.2" />
        {/* Whiskers */}
        <path d="M6.5 13.5H4" strokeWidth="1.3" />
        <path d="M6.5 15.5H4.5" strokeWidth="1.3" />
        <path d="M17.5 13.5H20" strokeWidth="1.3" />
        <path d="M17.5 15.5H19.5" strokeWidth="1.3" />
      </svg>
    );
  }

  // Avatar mode: detailed circular portrait for chat header
  if (mode === "avatar") {
    return (
      <div className={`relative flex items-center justify-center rounded-full bg-[#f4ecd6] border border-[#ded3b6] text-[#000000] overflow-hidden ${className || "w-8 h-8"}`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          stroke="#000000"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full p-1"
        >
          {/* Inner ears pastel pink */}
          <polygon points="8,14 11,4 16,9" fill="#efd4d4" stroke="none" />
          <polygon points="28,14 25,4 20,9" fill="#efd4d4" stroke="none" />
          
          {/* Head & ears outline */}
          <path d="M7 15L10 4l6 4.5c1.3-.4 2.7-.4 4 0L26 4l3 11c1 3.2.7 6.5-.8 9.5C25.5 29 21 31 18 31s-7.5-2-10.2-6.5C6.3 21.5 6 18.2 7 15z" />
          
          {/* Eyes */}
          <ellipse cx="13" cy="18" rx="1.6" ry="2" fill="#000000" stroke="none" />
          <ellipse cx="23" cy="18" rx="1.6" ry="2" fill="#000000" stroke="none" />
          <circle cx="12.5" cy="17.2" r="0.6" fill="#ffffff" stroke="none" />
          <circle cx="22.5" cy="17.2" r="0.6" fill="#ffffff" stroke="none" />

          {/* Nose & gentle smile */}
          <polygon points="18,21.5 16.8,20 19.2,20" fill="#000000" stroke="none" />
          <path d="M18 21.5v1.5c-.8.8-1.8.7-2.5.3" />
          <path d="M18 23c.8.8 1.8.7 2.5.3" />

          {/* Whiskers */}
          <path d="M9 19.5H4.5" strokeWidth="1.2" />
          <path d="M9.5 22H5.5" strokeWidth="1.2" />
          <path d="M27 19.5h4.5" strokeWidth="1.2" />
          <path d="M26.5 22h4" strokeWidth="1.2" />
        </svg>
      </div>
    );
  }

  // Footer mode: Mascot perched on top of footer border with paws hanging over the line!
  return (
    <div
      className={`relative inline-block select-none cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Meoww, Dito's studio cat. Click to chat with Meoww"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Interactive Speech Bubble Tooltip */}
      <div
        className={`absolute -top-12 right-2 sm:right-4 z-20 whitespace-nowrap bg-[#000000] text-[#ffffff] text-[11px] font-mono font-medium px-3 py-1.5 rounded-xl shadow-lg border border-[#333333] transition-all duration-200 pointer-events-none flex items-center gap-1.5 ${
          isHovered
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-1 scale-95"
        }`}
      >
        <span>Meow! Need help? Talk to me</span>
        <span className="text-[10px] text-[#ff3d8b]">🐾</span>
        {/* Little bubble speech pointer */}
        <div className="absolute -bottom-1 right-8 w-2 h-2 bg-[#000000] rotate-45 border-r border-b border-[#333333]" />
      </div>

      {/* SVG Cat perching on the footer border */}
      <div className="relative transform transition-transform duration-300 group-hover:-translate-y-1">
        <svg
          viewBox="0 0 160 120"
          className="w-28 sm:w-36 md:w-40 h-auto overflow-visible"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Animated Tail curling behind */}
          <path
            d="M32 95 C 10 95, 8 70, 20 60 C 26 55, 34 62, 28 72 C 22 82, 30 92, 42 98"
            fill="none"
            className="transition-transform duration-500 origin-bottom group-hover:rotate-6"
          />

          {/* Cat Body */}
          <path
            d="M42 110 C 40 85, 50 68, 68 62 C 92 62, 102 85, 100 110"
            fill="#ffffff"
          />

          {/* Inner ears with pastel blush */}
          <polygon points="56,42 62,12 76,28" fill="#efd4d4" stroke="none" />
          <polygon points="98,42 92,12 78,28" fill="#efd4d4" stroke="none" />

          {/* Cat Head */}
          <path
            d="M52 46 L60 10 L74 24 C 76 23.5, 78 23.5, 80 23.5 L94 10 L102 46 C 114 55, 114 74, 98 84 C 92 87, 85 88, 77 88 C 69 88, 62 87, 56 84 C 40 74, 40 55, 52 46 Z"
            fill="#ffffff"
          />

          {/* Cute Eyes (blinks on hover) */}
          {isHovered ? (
            <>
              {/* Happy squinting eyes ^ ^ */}
              <path d="M64 54 Q69 49 74 54" strokeWidth="2.4" />
              <path d="M80 54 Q85 49 90 54" strokeWidth="2.4" />
            </>
          ) : (
            <>
              {/* Open curious eyes with catchlight */}
              <ellipse cx="69" cy="53" rx="3.5" ry="4.5" fill="#000000" stroke="none" />
              <ellipse cx="85" cy="53" rx="3.5" ry="4.5" fill="#000000" stroke="none" />
              <circle cx="67.5" cy="51.5" r="1.3" fill="#ffffff" stroke="none" />
              <circle cx="83.5" cy="51.5" r="1.3" fill="#ffffff" stroke="none" />
            </>
          )}

          {/* Nose & mouth */}
          <polygon points="77,61 74,58 80,58" fill="#000000" stroke="none" />
          <path d="M77 61 v2.5 c-1.5 1.5 -3.5 1.2 -4.8 .5" />
          <path d="M77 63.5 c1.5 1.5 3.5 1.2 4.8 .5" />

          {/* Whiskers */}
          <path d="M58 58 H44" strokeWidth="1.6" />
          <path d="M57 63 H42" strokeWidth="1.6" />
          <path d="M96 58 H110" strokeWidth="1.6" />
          <path d="M97 63 H112" strokeWidth="1.6" />

          {/* Paws draped over the horizontal ledge / border line! */}
          {/* Left Paw */}
          <path
            d="M50 102 C 50 96, 62 96, 62 102 C 62 114, 50 114, 50 102 Z"
            fill="#ffffff"
          />
          <path d="M54 106 v5" strokeWidth="1.4" />
          <path d="M58 106 v5" strokeWidth="1.4" />

          {/* Right Paw */}
          <path
            d="M80 102 C 80 96, 92 96, 92 102 C 92 114, 80 114, 80 102 Z"
            fill="#ffffff"
          />
          <path d="M84 106 v5" strokeWidth="1.4" />
          <path d="M88 106 v5" strokeWidth="1.4" />

          {/* The ground / divider line representation */}
          {/* Paw pads hang below 108 so they sit directly on top of the footer border */}
        </svg>
      </div>
    </div>
  );
}
