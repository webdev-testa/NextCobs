"use client";

import React, { useState } from "react";
import { DEVELOPER_INFO, INITIAL_STICKY_NOTES, StickyNote } from "@/data/portfolioData";
import {
  ArrowDown,
  ArrowUpRight,
  Heart,
  Plus,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";

export function HeroSection() {
  const [stickyNotes, setStickyNotes] = useState<StickyNote[]>(INITIAL_STICKY_NOTES);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState("");
  const [newNoteAuthor, setNewNoteAuthor] = useState("");
  const [newNoteColor, setNewNoteColor] = useState<StickyNote["color"]>("lime");

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
      role: "Guest Note",
      content: newNoteContent.trim(),
      color: newNoteColor,
      rotation: Math.random() * 6 - 3,
      likes: 1,
      tag: "Community",
    };

    setStickyNotes((prev) => [newNote, ...prev]);
    setNewNoteContent("");
    setNewNoteAuthor("");
    setIsAddingNote(false);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#dceeb1", "#c5b0f4", "#f3c9b6", "#c8e6cd", "#ff3d8b"],
      });
    }
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
    <section className="relative w-full bg-[#ffffff] pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#e6e6e6] overflow-hidden">
      {/* Background Figma Grid */}
      <div className="absolute inset-0 bg-figma-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability & Location Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f7f7f5] border border-[#e6e6e6] text-xs font-mono tracking-wide text-[#000000]">
            <span className="w-2 h-2 rounded-full bg-[#1ea64a] animate-pulse"></span>
            <span>FULL STACK ENGINEER &bull; AI PROJECT LEAD &bull; FREELANCE BUILDER</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
            <span>Jakarta, ID (UTC+7)</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Headline & Bio Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#000000] leading-[1.08] mb-6">
              Building <span className="underline decoration-[#dceeb1] decoration-wavy decoration-2">practical full-stack</span> systems & leading AI initiatives.
            </h1>

            <p className="text-base sm:text-lg font-normal text-[#333333] leading-relaxed max-w-2xl mb-6">
              Hi, I'm <strong className="font-semibold text-[#000000]">Ammardito Shafaat</strong>. By day, I lead an internal AI initiative and engineer backend services at <strong className="text-[#000000]">LG Sinar Mas</strong>. On the side, I craft full-stack systems and mobile apps for real businesses—from retail ERPs and Android apps to custom location-aware portals.
            </p>

            <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mb-8">
              Outside the terminal, I'm drawn to story-driven games, books, silent reading clubs, and exploring new active disciplines like archery and padel.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-xs font-semibold text-[#ffffff] bg-[#000000] hover:bg-[#222222] active:scale-95 transition-all flex items-center gap-2 shadow-md"
              >
                <span>Explore Projects & Systems</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#stories"
                className="px-5 py-3 rounded-full text-xs font-semibold text-[#000000] bg-[#c5b0f4] border border-[#a991de] hover:bg-[#b8a0eb] active:scale-95 transition-all flex items-center gap-1.5"
              >
                <span>Story Passions & Hobbies</span>
                <Sparkles className="w-3.5 h-3.5" />
              </a>

              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-full text-xs font-medium text-[#444444] bg-[#f7f7f5] hover:bg-[#e6e6e6] hover:text-[#000000] transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Metric Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6]">
              {DEVELOPER_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold tracking-tight text-[#000000]">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666666] mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive FigJam Sticky Note Board (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-5 sm:p-6 rounded-3xl bg-[#ffffff] border-2 border-[#e6e6e6] shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#f1f1f1]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff3d8b]"></div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000000]">
                    FigJam Sticky Board
                  </span>
                </div>

                <button
                  onClick={() => setIsAddingNote(!isAddingNote)}
                  className="px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-medium flex items-center gap-1 hover:bg-[#222222] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isAddingNote ? "Close" : "Stick a Note"}</span>
                </button>
              </div>

              {/* Add Note Form */}
              {isAddingNote && (
                <form onSubmit={handleAddNote} className="mb-4 p-4 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-150">
                  <span className="text-xs font-semibold text-[#000000]">Leave a thought or feedback:</span>
                  <div>
                    <label htmlFor="note-author" className="sr-only">Your Name or Handle</label>
                    <input
                      id="note-author"
                      type="text"
                      placeholder="Your Name / Handle"
                      value={newNoteAuthor}
                      onChange={(e) => setNewNoteAuthor(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                    />
                  </div>
                  <div>
                    <label htmlFor="note-content" className="sr-only">Message</label>
                    <textarea
                      id="note-content"
                      placeholder="Write a message..."
                      value={newNoteContent}
                      onChange={(e) => setNewNoteContent(e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {(["lime", "lilac", "mint", "coral", "pink", "cream"] as const).map((c) => (
                        <button
                          type="button"
                          key={c}
                          onClick={() => setNewNoteColor(c)}
                          aria-label={`Select ${c} sticky note color`}
                          className="p-1 rounded-full focus:outline-none focus:ring-1 focus:ring-[#000000]"
                        >
                          <span
                            className={`block w-4 h-4 rounded-full border transition-transform ${
                              newNoteColor === c ? "ring-2 ring-[#000000] scale-110" : "hover:scale-105"
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
                        </button>
                      ))}
                    </div>
                    <button
                      type="submit"
                      className="px-3.5 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222]"
                    >
                      Post Note
                    </button>
                  </div>
                </form>
              )}

              {/* Sticky Notes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
                {stickyNotes.slice(0, 6).map((note) => (
                  <div
                    key={note.id}
                    style={{ transform: `rotate(${note.rotation}deg)` }}
                    className={`p-3.5 rounded-xl border shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md flex flex-col justify-between ${
                      colorClasses[note.color]
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#000000]/70">
                          {note.tag}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLikeNote(note.id);
                          }}
                          aria-label={`Like note by ${note.author}`}
                          className="flex items-center gap-1 text-xs font-semibold text-[#000000]/80 hover:text-[#000000] p-0.5"
                        >
                          <Heart className="w-3 h-3 fill-current text-[#ff3d8b]" />
                          <span>{note.likes}</span>
                        </button>
                      </div>
                      <p className="text-xs font-normal leading-snug text-[#000000] mb-2">
                        "{note.content}"
                      </p>
                    </div>

                    <div className="pt-1.5 border-t border-[#000000]/10 flex items-center justify-between text-xs">
                      <span className="font-bold text-[#000000]">{note.author}</span>
                      <span className="text-[#000000]/60">{note.role}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="mt-3.5 pt-2.5 border-t border-[#f1f1f1] flex items-center justify-between text-xs font-mono text-[#666666]">
                <span>Click note to like &bull; Interactive canvas</span>
                <span className="text-[#1ea64a] font-semibold">&bull; Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
