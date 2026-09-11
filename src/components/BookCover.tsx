"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface BookCoverProps {
  coverSrc: string;
  alt?: string;
  backColor?: string; // Color of the back cover peeking through on the right
  shaderShadow?: string;
  hasStrap?: boolean;
  strapSrc?: string;
  isInteractive?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export function BookCover({
  coverSrc,
  alt = "Book Cover",
  backColor = "rgb(209, 82, 73)",
  shaderShadow = "inset -2px 0px 2px 0px rgba(255, 255, 255, 0.5)",
  hasStrap = false,
  strapSrc = "/images/books/book-strap.png",
  isInteractive = true,
  width = 315,
  height = 450,
  className = "",
}: BookCoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Exact 5 stepped page insets from Toan's Framer bundle
  const pageLayers = [
    { right: "10px", zIndex: 1 },
    { right: "13px", zIndex: 2 },
    { right: "16px", zIndex: 3 },
    { right: "19px", zIndex: 4 },
    { right: "22px", zIndex: 5 },
  ];

  const shouldAnimate = isInteractive && isHovered;

  return (
    <div
      className={`group relative select-none cursor-pointer flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        aspectRatio: "0.7 / 1",
        overflow: "visible",
      }}
    >
      {/* ========================================================
          BACK (framer-mf52sp)
          Contains Back Cover (framer-46eagz) + 5 Paper Pages
          ======================================================== */}
      <div
        className="absolute inset-0 z-0 overflow-visible pointer-events-none"
        data-framer-name="Back"
      >
        {/* BG / Back Cover (framer-46eagz) */}
        <div
          className="absolute flex flex-row items-center justify-center overflow-visible"
          data-framer-name="BG"
          style={{
            inset: "3px 3px 2px 0px",
          }}
        >
          {/* Clear 60% left spine margin (framer-11fd6ju) */}
          <div className="w-[60%] h-full flex-none overflow-visible" data-framer-name="Clear" />

          {/* Colored Back Cover 40% (framer-95wej6) */}
          <div
            className="w-[40%] h-full flex-none overflow-visible"
            data-framer-name="BG"
            style={{
              backgroundColor: backColor,
              borderTopRightRadius: "36px",
              borderBottomRightRadius: "36px",
              boxShadow: "1px 0px 5px 0px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>

        {/* 5 Stacked Paper Pages (framer-xdzy4o, framer-m3pbyl, framer-1a5mhex, framer-1lxzjhu, framer-jbkeiw) */}
        {pageLayers.map((layer, index) => (
          <div
            key={index}
            className="absolute flex flex-row items-center justify-center overflow-visible"
            data-framer-name={`Page ${index + 1}`}
            style={{
              top: "8px",
              bottom: "8px",
              left: "0px",
              right: layer.right,
              zIndex: layer.zIndex,
            }}
          >
            {/* Clear 60% (framer-123wecz) */}
            <div className="w-[60%] h-full flex-none overflow-visible" data-framer-name="Clear" />

            {/* Gray Page Block 40% (framer-11htl6o) */}
            <div
              className="w-[40%] h-full flex-none overflow-visible"
              data-framer-name="BG"
              style={{
                backgroundColor: "rgb(220, 220, 220)",
                borderTop: "1px solid rgb(197, 197, 197)",
                borderRight: "1px solid rgb(197, 197, 197)",
                borderBottom: "1px solid rgb(197, 197, 197)",
                borderLeft: "1px solid rgb(197, 197, 197)",
                borderTopRightRadius: "36px",
                borderBottomRightRadius: "36px",
              }}
            />
          </div>
        ))}
      </div>

      {/* ========================================================
          COVER CONTAINER (framer-jx8l0x)
          Exact Framer 3D perspective, scale, translate, and rotate
          ======================================================== */}
      <div
        className="framer-jx8l0x absolute inset-0 z-10 flex items-center justify-start overflow-visible"
        data-framer-name="Cover container"
        style={{
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
          borderBottomLeftRadius: "4px",
          transformOrigin: "50% 50%",
          transform: shouldAnimate
            ? "perspective(1200px) translateX(-24px) scale(1.02) rotateY(-16deg)"
            : "perspective(1200px) translateX(0px) scale(1) rotateY(0deg)",
          transition: "transform 0.3s cubic-bezier(0.44, 0, 0.56, 1)",
          willChange: "transform",
        }}
      >
        {/* Cover Cover (framer-inqfqs) - Full-bleed artwork */}
        <div
          className="framer-inqfqs absolute inset-0 overflow-hidden"
          data-framer-name="Cover Cover"
          style={{
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
            borderBottomLeftRadius: "4px",
          }}
        >
          <Image
            src={coverSrc}
            alt={alt}
            fill
            className="object-cover"
            sizes={`${width}px`}
            priority
          />
        </div>

        {/* Shader (framer-4tvwyf) - Edge highlight & 1px boundary */}
        <div
          className="framer-4tvwyf absolute inset-0 overflow-visible pointer-events-none"
          data-framer-name="Shader"
          data-border="true"
          style={{
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
            borderBottomLeftRadius: "4px",
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            borderRight: "1px solid rgba(0, 0, 0, 0.1)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: shaderShadow,
          }}
        />

        {/* Ridge (framer-1qenci1) - Multi-stop drop shadow & crease gradient */}
        <div
          className="framer-1qenci1 absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
          data-framer-name="Ridge"
          style={{
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
            borderBottomLeftRadius: "4px",
            boxShadow:
              "0.3010936508871964px 0.6021873017743928px 1.2118785677592498px -0.5px rgba(0, 0, 0, 0.16204), 1.1442666516217286px 2.288533303243457px 4.605584431342058px -1px rgba(0, 0, 0, 0.19577), 5px 10px 20.124611797498105px -1.5px rgba(0, 0, 0, 0.35)",
          }}
        >
          {/* Padding (framer-rq35yf) */}
          <div
            className="framer-rq35yf flex-none h-full"
            data-framer-name="Padding"
            style={{
              width: "3%",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          />

          {/* Gradient (framer-1270jj) */}
          <div
            className="framer-1270jj flex-1 h-full"
            data-framer-name="Gradient"
            style={{
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0.08) 0.4132699275362319%, rgba(255, 255, 255, 0.1) 0.6397192028985507%, rgba(0, 36, 121, 0) 8.206292229729732%, rgba(0, 36, 121, 0) 98%, rgba(255, 255, 255, 0.1) 100%)",
            }}
          />
        </div>

        {/* Coming Soon Strap (framer-vdxtbq / framer-yueide) */}
        {hasStrap && (
          <div
            className="framer-vdxtbq absolute inset-0 overflow-visible pointer-events-none"
            data-framer-name="Coming soon"
          >
            <div
              className="framer-yueide absolute pointer-events-none"
              data-framer-name="Strap"
              style={{
                height: "106px",
                width: "101%",
                left: "calc(50% - 101% / 2)",
                top: "calc(42.89% - 53px)",
                zIndex: 1,
              }}
            >
              <Image
                src={strapSrc}
                alt="Coming Soon Strap"
                fill
                className="object-contain"
                sizes={`${width}px`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
