"use client";

import React, { useState } from "react";
import { DEVELOPER_INFO, INITIAL_STICKY_NOTES, StickyNote } from "@/data/portfolioData";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  FileDown,
  Heart,
  Plus,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";

export function HeroSection() {
  const [stickyNotes, setStickyNotes] = useState<StickyNote[]>(INITIAL_STICKY_NOTES);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState("");
  const [newNoteAuthor, setNewNoteAuthor] = useState("");
  const [newNoteColor, setNewNoteColor] = useState<StickyNote["color"]>("lime");
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleLikeNote = (id: string) => {
    setStickyNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, likes: note.likes + 1 } : note))
    );
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteContent.trim()) return;

    const newNote: StickyNote = {
      id: `custom-${Date.now()}`,
      author: newNoteAuthor.trim() || "Visitor",
      role: "Guest Reviewer",
      content: newNoteContent.trim(),
      color: newNoteColor,
      rotation: (Math.random() * 6 - 3),
      likes: 1,
      tag: "Community",
    };

    setStickyNotes((prev) => [newNote, ...prev]);
    setNewNoteContent("");
    setNewNoteAuthor("");
    setIsAddingNote(false);

    // Trigger confetti celebration
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#dceeb1", "#c5b0f4", "#f3c9b6", "#c8e6cd", "#ff3d8b"],
    });
  };

  const colorClasses = {
    lime: "bg-[#dceeb1] text-[#000000] border-[#bed68b]",
    lilac: "bg-[#c5b0f4] text-[#000000] border-[#a991de]",
    cream: "bg-[#f4ecd6] text-[#000000] border-[#ded0b1]",
    mint: "bg-[#c8e6cd] text-[#000000] border-[#a6ceab]",
    pink: "bg-[#efd4d4] text-[#000000] border-[#d8b5b5]",
    coral: "bg-[#f3c9b6] text-[#000000] border-[#d9a892]",
  };

  return (
    <section className="relative w-full bg-[#ffffff] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#e6e6e6] overflow-hidden">
      {/* Background subtle Figma Grid */}
      <div className="absolute inset-0 bg-figma-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability & Role Header Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f7f7f5] border border-[#e6e6e6] text-xs font-mono tracking-mono-eyebrow text-[#000000]">
            <span className="w-2 h-2 rounded-full bg-[#1ea64a] animate-pulse"></span>
            <span>BACKEND SYSTEMS • JAVA SPRING BOOT • APPLIED ML • INFOSEC</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
            <span>Jakarta, ID (Remote / Hybrid / Onsite)</span>
          </div>
        </div>

        {/* Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Headline & Bio Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-[-0.04em] text-[#000000] leading-[1.05] mb-6">
              Architecting <span className="underline decoration-[#dceeb1] decoration-wavy decoration-2">resilient backends</span> & intelligent systems.
            </h1>

            <p className="text-lg sm:text-xl font-normal text-[#333333] leading-[1.5] max-w-2xl mb-8 tracking-[-0.01em]">
              Hi, I'm <strong className="font-semibold text-[#000000]">Ammardito Shafaat</strong>. I build high-throughput Java & Spring Boot microservices, distributed data pipelines, and deep learning vision systems with engineering precision and design clarity.
            </p>

            {/* CTAs Pill Pair */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full text-sm font-semibold text-[#ffffff] bg-[#000000] hover:bg-[#222222] active:scale-95 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Explore Architecture & Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#api-workbench"
                className="px-6 py-3 rounded-full text-sm font-semibold text-[#000000] bg-[#ffffff] border-2 border-[#000000] hover:bg-[#f7f7f5] active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Live API Console</span>
                <Zap className="w-4 h-4 text-[#ff3d8b]" />
              </a>

              <a
                href="https://github.com/webdev-testa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full text-sm font-medium text-[#444444] bg-[#f7f7f5] hover:bg-[#e6e6e6] hover:text-[#000000] transition-colors flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Architectural Metric Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6]">
              {DEVELOPER_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#000000]">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-mono-caption text-[#666666] mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive FigJam Sticky Note Board (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-6 rounded-3xl bg-[#ffffff] border-2 border-[#e6e6e6] shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#f1f1f1]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff3d8b]"></div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000000]">
                    FigJam Collaborative Board
                  </span>
                </div>

                <button
                  onClick={() => setIsAddingNote(!isAddingNote)}
                  className="px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-medium flex items-center gap-1 hover:bg-[#222222] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isAddingNote ? "Close" : "Post Note"}</span>
                </button>
              </div>

              {/* Add Note Form */}
              {isAddingNote && (
                <form onSubmit={handleAddNote} className="mb-4 p-4 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col gap-3">
                  <div className="text-xs font-semibold text-[#000000]">Drop a thought or review:</div>
                  <input
                    type="text"
                    placeholder="Your Name / Company (e.g. Lead Engineer at Acme)"
                    value={newNoteAuthor}
                    onChange={(e) => setNewNoteAuthor(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  />
                  <textarea
                    placeholder="Write a short message or comment..."
                    value={newNoteContent}
                    onChange={(e) => setNewNoteContent(e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                    required
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {(["lime", "lilac", "mint", "coral", "pink", "cream"] as const).map((c) => (
                        <button
                          type="button"
                          key={c}
                          onClick={() => setNewNoteColor(c)}
                          className={`w-5 h-5 rounded-full border ${
                            newNoteColor === c ? "ring-2 ring-[#000000] scale-110" : ""
                          }`}
                          style={{
                            backgroundColor:
                              c === "lime"
                                ? "#dceeb1"
                                : c === "lilac"
                                ? "#c5b0f4"
                                : c === "mint"
                                ? "#c8e6cd"
                                : c === "coral"
                                ? "#f3c9b6"
                                : c === "pink"
                                ? "#efd4d4"
                                : "#f4ecd6",
                          }}
                        />
                      ))}
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222]"
                    >
                      Stick Note
                    </button>
                  </div>
                </form>
              )}

              {/* Sticky Notes Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                {stickyNotes.slice(0, 6).map((note) => (
                  <div
                    key={note.id}
                    style={{ transform: `rotate(${note.rotation}deg)` }}
                    className={`p-4 rounded-xl border shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer flex flex-col justify-between ${
                      colorClasses[note.color]
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-[#000000]/70">
                          {note.tag}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLikeNote(note.id);
                          }}
                          className="flex items-center gap-1 text-[11px] font-semibold text-[#000000]/80 hover:text-[#000000]"
                        >
                          <Heart className="w-3 h-3 fill-current text-[#ff3d8b]" />
                          <span>{note.likes}</span>
                        </button>
                      </div>
                      <p className="text-xs font-normal leading-snug text-[#000000] mb-3">
                        "{note.content}"
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#000000]/10 flex flex-col">
                      <span className="text-[11px] font-bold text-[#000000]">{note.author}</span>
                      <span className="text-[10px] text-[#000000]/70">{note.role}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom indicator */}
              <div className="mt-4 pt-3 border-t border-[#f1f1f1] flex items-center justify-between text-[11px] font-mono text-[#666666]">
                <span>Click any note to like • Live feedback</span>
                <span className="text-[#1ea64a] font-semibold">● Sticky Canvas Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
