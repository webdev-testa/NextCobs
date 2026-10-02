"use client";

import React, { useState } from "react";

interface MascotOwlProps {
  mode?: "footer" | "avatar" | "icon";
  className?: string;
  onClick?: () => void;
}

/**
 * MascotOwl — Dito's Studio Companion Owl 🦉
 * Monoline editorial vector mascot representing architectural wisdom,
 * nocturnal engineering stamina, and sharp analytical vision.
 */
export function MascotOwl({ mode = "footer", className = "", onClick }: MascotOwlProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.dispatchEvent(new CustomEvent("open-chat"));
    }
  };

  // Icon / Button mode: compact 24x24 owl silhouette
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
        {/* Owl head outline with ear tufts */}
        <path d="M4 8 C4 5, 6 2, 7.5 2 C8.5 2.5, 9.5 4, 12 4 C14.5 4, 15.5 2.5, 16.5 2 C18 2, 20 5, 20 8 C20 14, 18 21, 12 21 C6 21, 4 14, 4 8 Z" />
        {/* Eyes */}
        <circle cx="8.5" cy="10" r="2.2" />
        <circle cx="15.5" cy="10" r="2.2" />
        <circle cx="8.5" cy="10" r="0.8" fill="currentColor" />
        <circle cx="15.5" cy="10" r="0.8" fill="currentColor" />
        {/* Beak */}
        <path d="M12 11.5 L11 14 L13 14 Z" fill="currentColor" />
        {/* Chest feather marks */}
        <path d="M10 17 Q12 18.5 14 17" strokeWidth="1.3" />
      </svg>
    );
  }

  // Avatar mode: Circular framed owl portrait for chat header
  if (mode === "avatar") {
    return (
      <div
        className={`relative flex items-center justify-center rounded-full bg-[#fef9ee] border border-[#e8ddc4] text-[#000000] overflow-hidden ${
          className || "w-8 h-8"
        }`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          stroke="#000000"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full p-0.5"
        >
          {/* Subtle ear tuft shading */}
          <polygon points="7,4 10,10 6,12" fill="#ede1c7" stroke="none" />
          <polygon points="29,4 26,10 30,12" fill="#ede1c7" stroke="none" />

          {/* Owl head contour with ear tufts */}
          <path
            d="M6 11 C5.5 7, 7.5 3, 9 3 C10.5 4, 12 6, 18 6 C24 6, 25.5 4, 27 3 C28.5 3, 30.5 7, 30 11 C30 18, 27 31, 18 31 C9 31, 6 18, 6 11 Z"
            fill="#ffffff"
          />

          {/* Facial discs */}
          <circle cx="13" cy="14" r="5" stroke="#d5c8ab" strokeWidth="1" />
          <circle cx="23" cy="14" r="5" stroke="#d5c8ab" strokeWidth="1" />

          {/* Big round observant eyes */}
          <circle cx="13" cy="14" r="3.2" fill="#000000" stroke="none" />
          <circle cx="23" cy="14" r="3.2" fill="#000000" stroke="none" />
          <circle cx="12" cy="13" r="1.1" fill="#ffffff" stroke="none" />
          <circle cx="22" cy="13" r="1.1" fill="#ffffff" stroke="none" />

          {/* Beak */}
          <polygon points="18,15.5 16.5,19 19.5,19" fill="#000000" stroke="none" />

          {/* Chest plumage */}
          <path d="M14.5 24 Q18 26 21.5 24" strokeWidth="1.2" />
          <path d="M15.5 27 Q18 28.5 20.5 27" strokeWidth="1.2" />
        </svg>
      </div>
    );
  }

  // Footer mode: Owl perched directly on top of the footer border line with talons gripping the ledge!
  return (
    <div
      className={`relative inline-block select-none cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Owl, Dito's studio companion. Click to chat"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Speech Bubble Tooltip */}
      <div
        className={`absolute -top-12 right-2 sm:right-4 z-20 whitespace-nowrap bg-[#000000] text-[#ffffff] text-[11px] font-mono font-medium px-3 py-1.5 rounded-xl shadow-lg border border-[#333333] transition-all duration-200 pointer-events-none flex items-center gap-1.5 ${
          isHovered
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-1 scale-95"
        }`}
      >
        <span>Hoo! Got questions? Ask me</span>
        <span className="text-[12px]">🦉</span>
        {/* Tooltip pointer */}
        <div className="absolute -bottom-1 right-8 w-2 h-2 bg-[#000000] rotate-45 border-r border-b border-[#333333]" />
      </div>

      {/* SVG Owl Perched on Footer Border */}
      <div className="relative transform transition-transform duration-300 group-hover:-translate-y-1.5">
        <svg
          viewBox="0 0 160 130"
          className="w-28 sm:w-36 md:w-40 h-auto overflow-visible"
          fill="none"
          stroke="#000000"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Left Wing (tucked) */}
          <path
            d="M48 58 C38 68, 36 94, 46 112 C52 110, 56 102, 58 92 C60 80, 58 66, 48 58 Z"
            fill="#f7f5ee"
          />
          <path d="M44 82 C44 95, 48 104, 52 108" strokeWidth="1.4" />

          {/* Right Wing (tucked) */}
          <path
            d="M112 58 C122 68, 124 94, 114 112 C108 110, 104 102, 102 92 C100 80, 102 66, 112 58 Z"
            fill="#f7f5ee"
          />
          <path d="M116 82 C116 95, 112 104, 108 108" strokeWidth="1.4" />

          {/* Owl Body */}
          <path
            d="M52 50 C44 70, 48 105, 60 114 C70 118, 90 118, 100 114 C112 105, 116 70, 108 50 Z"
            fill="#ffffff"
          />

          {/* Head & Ear Tufts (alert horned owl shape) */}
          <path
            d="M46 44 C42 22, 50 12, 56 10 C62 14, 68 20, 80 20 C92 20, 98 14, 104 10 C110 12, 118 22, 114 44 C116 58, 106 68, 80 68 C54 68, 44 58, 46 44 Z"
            fill="#ffffff"
            className="transition-transform duration-300 origin-center group-hover:rotate-1"
          />

          {/* Inner Ear Tuft Details */}
          <path d="M54 13 L59 23" strokeWidth="1.6" />
          <path d="M106 13 L101 23" strokeWidth="1.6" />

          {/* Facial Disc Heart / Shield Rims */}
          <path
            d="M58 32 C62 25, 74 25, 78 32 C80 35, 80 44, 76 52 C72 58, 64 58, 60 52 C56 44, 56 35, 58 32 Z"
            stroke="#d8cca8"
            strokeWidth="1.3"
            fill="#faf7ef"
          />
          <path
            d="M102 32 C98 25, 86 25, 82 32 C80 35, 80 44, 84 52 C88 58, 96 58, 100 52 C104 44, 104 35, 102 32 Z"
            stroke="#d8cca8"
            strokeWidth="1.3"
            fill="#faf7ef"
          />

          {/* Eyes: Blinking/Squinting on hover, Wide observant normally */}
          {isHovered ? (
            <>
              {/* Happy/knowing curved squint lines ^ ^ */}
              <path d="M62 42 Q68 36 74 42" strokeWidth="2.6" />
              <path d="M86 42 Q92 36 98 42" strokeWidth="2.6" />
            </>
          ) : (
            <>
              {/* Alert round eyes with golden iris rim & pupil */}
              <circle cx="68" cy="41" r="6" fill="#f6e3a1" stroke="#000000" strokeWidth="1.4" />
              <circle cx="92" cy="41" r="6" fill="#f6e3a1" stroke="#000000" strokeWidth="1.4" />

              {/* Pupils */}
              <circle cx="68" cy="41" r="3.8" fill="#000000" stroke="none" />
              <circle cx="92" cy="41" r="3.8" fill="#000000" stroke="none" />

              {/* Catchlight reflections */}
              <circle cx="66.5" cy="39.5" r="1.3" fill="#ffffff" stroke="none" />
              <circle cx="90.5" cy="39.5" r="1.3" fill="#ffffff" stroke="none" />
            </>
          )}

          {/* Beak */}
          <polygon points="80,44 76.5,50 83.5,50" fill="#000000" stroke="none" />

          {/* Chest Plumage / Feather Marks */}
          <g strokeWidth="1.5" stroke="#444444">
            <path d="M72 76 Q80 81 88 76" />
            <path d="M68 85 Q75 90 82 85" />
            <path d="M78 85 Q85 90 92 85" />
            <path d="M73 94 Q80 99 87 94" />
            <path d="M75 103 Q80 107 85 103" strokeWidth="1.2" />
          </g>

          {/* Talons / Claws gripping over the ledge line */}
          {/* Left Foot: 3 curved claws clutching the border */}
          <g fill="#ffffff" stroke="#000000" strokeWidth="1.8">
            {/* Outer toe */}
            <path d="M62 112 C60 114, 59 119, 61 123 C63 125, 66 123, 66 119 Z" />
            {/* Middle toe */}
            <path d="M67 112 C66 115, 66 122, 69 125 C72 126, 73 122, 73 118 Z" />
            {/* Inner toe */}
            <path d="M74 113 C74 116, 75 121, 78 123 C80 124, 81 120, 79 116 Z" />
          </g>

          {/* Right Foot: 3 curved claws clutching the border */}
          <g fill="#ffffff" stroke="#000000" strokeWidth="1.8">
            {/* Inner toe */}
            <path d="M81 116 C79 120, 80 124, 82 123 C85 121, 86 116, 86 113 Z" />
            {/* Middle toe */}
            <path d="M87 118 C87 122, 88 126, 91 125 C94 122, 94 115, 93 112 Z" />
            {/* Outer toe */}
            <path d="M94 119 C94 123, 97 125, 99 123 C101 119, 100 114, 98 112 Z" />
          </g>
        </svg>
      </div>
    </div>
  );
}
