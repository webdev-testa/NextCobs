"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DEVELOPER_INFO, INITIAL_STICKY_NOTES, StickyNote } from "@/data/portfolioData";
import {
  ArrowDown,
  ArrowRight,
  Heart,
  Plus,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { DoodleStamp, DoodleStampType } from "@/components/SketchIcons";

const STAMP_OPTIONS: { id: DoodleStampType; label: string }[] = [
  { id: "sparkle", label: "Sparkle" },
  { id: "coffee", label: "Coffee" },
  { id: "book", label: "Book" },
  { id: "gamepad", label: "Game" },
  { id: "chess", label: "Chess" },
  { id: "code", label: "Code" },
  { id: "runner", label: "Runner" },
  { id: "heart", label: "Heart" },
  { id: "none", label: "None" },
];

export function HeroSection() {
  const [stickyNotes, setStickyNotes] = useState<StickyNote[]>(INITIAL_STICKY_NOTES);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState("");
  const [newNoteAuthor, setNewNoteAuthor] = useState("");
  const [newNoteRole, setNewNoteRole] = useState("");
  const [newNoteColor, setNewNoteColor] = useState<StickyNote["color"]>("lime");
  const [newNoteStamp, setNewNoteStamp] = useState<DoodleStampType>("sparkle");

  const handleCancelNote = () => {
    setNewNoteContent("");
    setNewNoteAuthor("");
    setNewNoteRole("");
    setNewNoteStamp("sparkle");
    setNewNoteColor("lime");
    setIsAddingNote(false);
  };

  const handleFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      handleCancelNote();
    }
  };

  const handleTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      handleCancelNote();
    } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      if (newNoteContent.trim()) {
        const fakeFormEvent = { preventDefault: () => {} } as React.FormEvent;
        handleAddNote(fakeFormEvent);
      }
    }
  };

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
      role: newNoteRole.trim() || "Guest Note",
      content: newNoteContent.trim(),
      color: newNoteColor,
      rotation: Math.random() * 6 - 3,
      likes: 1,
      tag: "Community",
      stamp: newNoteStamp !== "none" ? newNoteStamp : undefined,
    };

    setStickyNotes((prev) => [newNote, ...prev]);
    setNewNoteContent("");
    setNewNoteAuthor("");
    setNewNoteRole("");
    setNewNoteStamp("sparkle");
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
    <section className="relative w-full bg-[#ffffff] pt-14 pb-16 lg:pt-20 lg:pb-24 border-b border-[#e6e6e6] overflow-hidden">
      {/* Subtle editorial dot grid */}
      <div className="absolute inset-0 bg-figma-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Main Hero Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col pt-2">
            {/* Taxonomic eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono tracking-widest uppercase text-[#666666]">
                Portfolio &bull; v2
              </span>
              <span className="text-xs font-mono text-[#cccccc]">/</span>
              <span className="text-xs font-mono text-[#000000] font-medium">
                Jakarta, ID
              </span>
            </div>

            {/* Name & Role as specified in portfolio-content.md */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000] mb-1">
                {DEVELOPER_INFO.name}
              </h1>
              <p className="text-sm sm:text-base font-mono text-[#555555]">
                {DEVELOPER_INFO.role}
              </p>
            </div>

            {/* Core thread headline */}
            <div className="my-4">
              <p className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#000000] leading-[1.12]">
                I build things so other people can carry less.
              </p>
            </div>

            {/* Subtext description */}
            <p className="text-base sm:text-lg text-[#444444] font-normal leading-relaxed mt-4 mb-8 max-w-xl">
              Software engineer focused on relieving operational bottlenecks. From enterprise AI knowledge assistants to zero-overhead client systems and headless automation.
            </p>

            {/* CTAs matching portfolio-content.md */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#selected-work"
                className="px-6 py-3 rounded-full text-xs font-semibold text-[#ffffff] bg-[#000000] hover:bg-[#222222] active:scale-95 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>See Selected Work ↓</span>
              </a>

              <Link
                href="/about"
                className="px-6 py-3 rounded-full text-xs font-semibold text-[#000000] bg-[#ffffff] border border-[#d0d0d0] hover:bg-[#f7f7f5] active:scale-95 transition-all flex items-center gap-2 shadow-xs"
              >
                <span>Read About Me →</span>
              </Link>
            </div>

            {/* Stat Pill Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6]">
              {DEVELOPER_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs font-bold tracking-tight text-[#000000]">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666666] mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tactile Interactive Sticky Board (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-5 sm:p-6 rounded-3xl bg-[#ffffff] border-2 border-[#e6e6e6] shadow-[0_8px_30px_rgba(0,0,0,0.05)] relative">
              {/* Board Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#f1f1f1]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1ea64a] animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000000]">
                    Sticky Notes
                  </span>
                </div>

                <button
                  onClick={() => {
                    if (isAddingNote) {
                      handleCancelNote();
                    } else {
                      setIsAddingNote(true);
                    }
                  }}
                  aria-expanded={isAddingNote}
                  className="px-3 py-1.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-medium flex items-center gap-1.5 hover:bg-[#222222] transition-colors active:scale-95"
                >
                  <Plus
                    className={`w-3.5 h-3.5 transition-transform duration-200 ease-out ${
                      isAddingNote ? "rotate-45" : "rotate-0"
                    }`}
                  />
                  <span>{isAddingNote ? "Close" : "Stick a Note"}</span>
                </button>
              </div>

              {/* Dedicated Author Polaroid Pin (Permanent Board Anchor) */}
              <div className="mb-4 p-3 sm:p-3.5 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] relative group">
                {/* Tactile pushpin badge */}
                <div className="absolute -top-2 left-5 flex items-center gap-1.5 z-10 pointer-events-none">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff3d8b] border-2 border-[#ffffff] shadow-xs flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#ffffff]" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666666] bg-[#ffffff] px-1.5 py-0.5 rounded border border-[#e6e6e6] shadow-2xs">
                    Author Pin
                  </span>
                </div>

                <div className="flex items-center gap-3.5 pt-1">
                  {/* Polaroid Frame */}
                  <div className="relative w-20 h-24 sm:w-24 sm:h-28 shrink-0 bg-[#ffffff] p-1.5 pb-4 rounded-lg shadow-sm border border-[#e6e6e6] -rotate-2 group-hover:rotate-0 transition-transform duration-200">
                    <div className="relative w-full h-full rounded overflow-hidden bg-[#fafafa]">
                      <Image
                        src="/images/sketches/avatar-sketch.png"
                        alt="Ammardito (Dito) Sketch"
                        fill
                        sizes="100px"
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div className="absolute bottom-1 left-0 right-0 text-center">
                      <span className="text-xs font-mono text-[#666666] tracking-tight">
                        dito.pen
                      </span>
                    </div>
                  </div>

                  {/* Author Greeting & Desk Note */}
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-xs font-bold text-[#000000]">Dito</span>
                        <span className="text-xs font-mono text-[#666666]">&bull; Founder & Dev</span>
                      </div>
                      <p className="text-xs text-[#333333] leading-relaxed">
                        &ldquo;I build things so other people can carry less. Leave a thought, stick a note, or stamp a doodle below!&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#e6e6e6]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#1ea64a]" />
                        <span className="text-xs font-mono text-[#666666]">At desk</span>
                      </div>
                      <Link
                        href="/about"
                        className="text-xs font-semibold text-[#000000] hover:underline flex items-center gap-1"
                      >
                        <span>Story</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add Note Form */}
              {isAddingNote && (
                <form
                  onSubmit={handleAddNote}
                  onKeyDown={handleFormKeyDown}
                  className="mb-4 p-4 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#000000]">
                      Leave a thought or feedback:
                    </span>
                    <span className="text-xs font-mono text-[#888888]">
                      {newNoteContent.length}/160
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label htmlFor="note-author" className="sr-only">Your Name or Handle</label>
                      <input
                        id="note-author"
                        type="text"
                        placeholder="Your Name / Handle"
                        value={newNoteAuthor}
                        onChange={(e) => setNewNoteAuthor(e.target.value)}
                        maxLength={30}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                      />
                    </div>
                    <div>
                      <label htmlFor="note-role" className="sr-only">Role or Badge (optional)</label>
                      <input
                        id="note-role"
                        type="text"
                        placeholder="Badge / Role (optional)"
                        value={newNoteRole}
                        onChange={(e) => setNewNoteRole(e.target.value)}
                        maxLength={25}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="note-content" className="sr-only">Message</label>
                    <textarea
                      id="note-content"
                      placeholder="Write a message... (Press Ctrl+Enter to post, Esc to cancel)"
                      value={newNoteContent}
                      onChange={(e) => setNewNoteContent(e.target.value)}
                      onKeyDown={handleTextareaKeyDown}
                      maxLength={160}
                      rows={2}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                      required
                    />
                  </div>

                  {/* Doodle Stamp Selector */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1.5">
                      Stamp a Doodle (optional):
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {STAMP_OPTIONS.map((stamp) => (
                        <button
                          key={stamp.id}
                          type="button"
                          onClick={() => setNewNoteStamp(stamp.id)}
                          className={`px-2 py-1 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                            newNoteStamp === stamp.id
                              ? "bg-[#000000] text-[#ffffff] border-[#000000] shadow-xs scale-105"
                              : "bg-[#ffffff] text-[#444444] border-[#e6e6e6] hover:border-[#000000]"
                          }`}
                        >
                          <DoodleStamp stamp={stamp.id} className="w-3.5 h-3.5" />
                          <span>{stamp.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Live Note Preview Feature */}
                  <div className="pt-2 border-t border-[#e6e6e6]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1.5">
                      Live Preview:
                    </span>
                    <div
                      className={`p-3 rounded-xl border shadow-2xs transition-all ${
                        colorClasses[newNoteColor]
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="text-xs font-bold truncate">
                            {newNoteAuthor.trim() || "Visitor"}
                          </span>
                          {newNoteStamp !== "none" && (
                            <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-black/5 border border-black/10 text-[#000000] rotate-3">
                              <DoodleStamp stamp={newNoteStamp} className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono opacity-70 truncate max-w-[120px]">
                          {newNoteRole.trim() || "Guest Note"}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed break-words font-normal">
                        {newNoteContent.trim() || "Your message preview will appear here as you type..."}
                      </p>
                    </div>
                  </div>

                  {/* Form Action Bar: Color Picker + Cancel & Post Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5">
                      {(["lime", "lilac", "mint", "coral", "pink", "cream"] as const).map((c) => (
                        <button
                          type="button"
                          key={c}
                          onClick={() => setNewNoteColor(c)}
                          aria-label={`Select ${c} sticky note color`}
                          className={`w-5 h-5 rounded-full border ${
                            newNoteColor === c ? "ring-2 ring-[#000000] scale-110" : ""
                          } ${colorClasses[c].split(" ")[0]}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCancelNote}
                        className="px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#d0d0d0] text-[#555555] hover:text-[#000000] hover:bg-[#eaeaea] text-xs font-medium transition-all active:scale-95"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={!newNoteContent.trim()}
                        className="px-3.5 py-1.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] transition-colors disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
                      >
                        Post Note
                      </button>
                    </div>
                  </div>

                  {/* Subtle keyboard hint */}
                  <div className="text-center pt-0.5">
                    <span className="text-xs font-mono text-[#888888]">
                      Esc to cancel &bull; Ctrl+Enter to post
                    </span>
                  </div>
                </form>
              )}

              {/* Sticky Notes Container */}
              <div className="flex flex-col items-center gap-3.5 max-h-[380px] overflow-y-auto overflow-x-hidden py-1.5 px-1">
                {stickyNotes.map((note) => (
                  <div
                    key={note.id}
                    style={{ transform: `rotate(${note.rotation}deg)` }}
                    className={`w-[92%] p-3.5 rounded-xl border transition-all duration-150 shadow-xs hover:shadow-md hover:scale-[1.01] ${
                      colorClasses[note.color]
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-xs font-bold tracking-tight truncate">
                          {note.author}
                        </span>
                        {note.stamp && note.stamp !== "none" && (
                          <span
                            className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-black/5 border border-black/10 text-[#000000] shrink-0 rotate-3"
                            title={`Doodle stamp: ${note.stamp}`}
                          >
                            <DoodleStamp stamp={note.stamp} className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono opacity-70 shrink-0">
                        {note.role}
                      </span>
                    </div>

                    {note.sketchImage && (
                      <div className="mb-2.5 p-1.5 rounded-lg bg-[#ffffff]/90 border border-black/10 shadow-xs flex flex-col items-center">
                        <div className="relative w-full aspect-[4/3] rounded overflow-hidden bg-[#ffffff]">
                          <Image
                            src={note.sketchImage}
                            alt={note.sketchCaption || "Author Sketch"}
                            fill
                            sizes="280px"
                            className="object-contain"
                          />
                        </div>
                        {note.sketchCaption && (
                          <span className="text-xs font-mono text-black/70 mt-1 italic tracking-tight text-center">
                            {note.sketchCaption}
                          </span>
                        )}
                      </div>
                    )}

                    <p className="text-xs leading-relaxed font-normal mb-2.5">
                      {note.content}
                    </p>

                    <div className="flex items-center justify-between text-xs font-mono pt-1.5 border-t border-black/10">
                      <span className="opacity-60">{note.tag}</span>
                      <button
                        onClick={() => handleLikeNote(note.id)}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                        aria-label="Like note"
                      >
                        <Heart className="w-3 h-3 fill-current text-[#ff3d8b]" />
                        <span>{note.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
