"use client";

import React from "react";
import Link from "next/link";
import { BookCover } from "@/components/BookCover";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function BookDemoPage() {
  const toanBooks = [
    {
      id: "anz",
      title: "ANZ Plus",
      subtitle: "Financial Wellbeing Platform",
      coverSrc: "/images/books/book-anz.png",
      backColor: "rgb(209, 82, 73)",
      shaderShadow: "inset -2px 0px 2px 0px rgba(255, 255, 255, 0.5)",
      hasStrap: false,
      isInteractive: true,
    },
    {
      id: "pi",
      title: "Physical Intelligence",
      subtitle: "Robotics Research & Foundation Models",
      coverSrc: "/images/books/book-pi.png",
      backColor: "rgb(68, 128, 90)",
      shaderShadow: "inset -2px 0px 2px 0px rgba(255, 255, 255, 0.5)",
      hasStrap: false,
      isInteractive: true,
    },
    {
      id: "kanvas",
      title: "Kanvas",
      subtitle: "Creative Design System",
      coverSrc: "/images/books/book-kanvas.png",
      backColor: "rgb(209, 82, 73)",
      shaderShadow: "inset -2px 0px 2px 0px rgba(255, 255, 255, 0.2)",
      hasStrap: true,
      isInteractive: true,
    },
    {
      id: "caphe",
      title: "Caphe",
      subtitle: "Coffee Roastery & Culture",
      coverSrc: "/images/books/book-caphe.png",
      backColor: "rgb(56, 34, 24)",
      shaderShadow: "inset -2px 0px 2px 0px rgba(255, 255, 255, 0.1)",
      hasStrap: true,
      isInteractive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e10] text-[#ffffff] flex flex-col selection:bg-[#ffffff] selection:text-[#000000]">
      {/* Navigation Header */}
      <header className="border-b border-[#222226] bg-[#0e0e10]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#888888] hover:text-[#ffffff] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>

          <a
            href="https://toan.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#888888] hover:text-[#ffffff] transition-colors"
          >
            <span>Original source: toan.framer.website</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* Main Bookshelf Area */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-16 sm:py-24 w-full flex flex-col items-center">
        <div className="text-center max-w-2xl mb-16">
          <p className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-2">
            1:1 Pixel &amp; Physics Reproduction
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ffffff]">
            Toan&apos;s 3D Hardcover Books
          </h1>
          <p className="text-sm text-[#888888] mt-3">
            Hover over each book to see the exact <code className="text-[#cccccc] font-mono text-xs bg-[#1a1a1f] px-1.5 py-0.5 rounded">framer-jx8l0x</code> and <code className="text-[#cccccc] font-mono text-xs bg-[#1a1a1f] px-1.5 py-0.5 rounded">framer-4tvwyf</code> motion, specular edges, and page stacks in action.
          </p>
        </div>

        {/* 4 Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 items-center justify-center w-full">
          {toanBooks.map((book) => (
            <div key={book.id} className="flex flex-col items-center">
              {/* The 1:1 Book Component */}
              <div className="py-2">
                <BookCover
                  coverSrc={book.coverSrc}
                  alt={book.title}
                  backColor={book.backColor}
                  shaderShadow={book.shaderShadow}
                  hasStrap={book.hasStrap}
                  isInteractive={book.isInteractive}
                  width={260}
                  height={371}
                />
              </div>

              {/* Title & Subtitle */}
              <div className="mt-8 text-center">
                <h3 className="text-base font-semibold text-[#ffffff] tracking-tight">
                  {book.title}
                </h3>
                <p className="text-xs font-mono text-[#666666] mt-1">
                  {book.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specs Breakdown */}
        <div className="mt-24 w-full max-w-3xl p-6 sm:p-8 rounded-2xl bg-[#141418] border border-[#23232a]">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#aaaaaa] mb-4">
            Exact Reverse-Engineered Parameters
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#888888]">
            <div className="p-3.5 rounded-xl bg-[#0e0e10] border border-[#1f1f26]">
              <span className="text-[#ffffff] block mb-1">Hover State:</span>
              <code>perspective(1200px) translateX(-24px) scale(1.02) rotateY(-16deg)</code>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0e0e10] border border-[#1f1f26]">
              <span className="text-[#ffffff] block mb-1">Transition Easing:</span>
              <code>cubic-bezier(0.44, 0, 0.56, 1) [0.3s]</code>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0e0e10] border border-[#1f1f26]">
              <span className="text-[#ffffff] block mb-1">Cover Radius:</span>
              <code>4px 40px 40px 4px</code>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0e0e10] border border-[#1f1f26]">
              <span className="text-[#ffffff] block mb-1">Stacked Pages:</span>
              <code>5 stepped layers (+3px cascading insets)</code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
