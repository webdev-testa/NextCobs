"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DEVELOPER_INFO, INITIAL_STICKY_NOTES, StickyNote } from "@/data/portfolioData";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Maximize2,
  Plus,
  Sparkles,
  X,
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

const colorClasses = {
  lime: "bg-[#dceeb1] text-[#000000] border-[#bed68b]",
  lilac: "bg-[#c5b0f4] text-[#000000] border-[#a991de]",
  cream: "bg-[#f4ecd6] text-[#000000] border-[#ded0b1]",
  mint: "bg-[#c8e6cd] text-[#000000] border-[#a6ceab]",
  pink: "bg-[#efd4d4] text-[#000000] border-[#d8b5b5]",
  coral: "bg-[#f3c9b6] text-[#000000] border-[#d9a892]",
};

export function HeroSection() {
  const [stickyNotes, setStickyNotes] = useState<StickyNote[]>(INITIAL_STICKY_NOTES);
  const [isBoardOpen, setIsBoardOpen] = useState(false);
  const [activeNoteModal, setActiveNoteModal] = useState<StickyNote | null>(null);

  // Form states
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

  const handleLikeNote = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setStickyNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, likes: note.likes + 1 } : note))
    );
    if (activeNoteModal && activeNoteModal.id === id) {
      setActiveNoteModal((prev) => (prev ? { ...prev, likes: prev.likes + 1 } : null));
    }
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
      rotation: Math.random() * 4 - 2,
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

  // 3 Curated notes for the hero cluster
  const curatedNotes = stickyNotes.slice(0, 3);

  return (
    <section className="portfolio-hero relative w-full bg-[#ffffff] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#e6e6e6] overflow-hidden">
      {/* Subtle editorial dot grid */}
      <div className="absolute inset-0 bg-figma-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* Left Column (Identity, Context & Relocated Stats) - 5 cols on lg */}
          <div className="hero-copy lg:col-span-5 flex flex-col pt-1 min-w-0">
            {/* Taxonomic eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#555555] font-semibold">
                Portfolio &bull; 2026
              </span>
              <span className="text-xs font-mono text-[#cccccc]">/</span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#000000] font-semibold">
                Jakarta, ID (UTC+7)
              </span>
            </div>

            {/* Tactile Identity Polaroid Card */}
            <div className="p-4 sm:p-5 rounded-3xl bg-[#f7f7f5] border border-[#e6e6e6] shadow-xs relative group mb-6 transition-all duration-300 hover:shadow-md">
              {/* Pushpin badge detail */}
              <div className="absolute -top-2.5 left-6 flex items-center gap-1.5 z-10 pointer-events-none">
                <div className="w-4 h-4 rounded-full bg-[#ff3d8b] border-2 border-[#ffffff] shadow-xs flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555555] bg-[#ffffff] px-1.5 py-0.5 rounded border border-[#e6e6e6] shadow-2xs font-semibold">
                  Studio Desk
                </span>
              </div>

              <div className="flex items-start gap-4 pt-1.5">
                {/* Polaroid Frame */}
                <div className="relative w-20 h-24 sm:w-24 sm:h-28 shrink-0 bg-[#ffffff] p-1.5 pb-4 rounded-lg shadow-sm border border-[#e6e6e6] -rotate-2 group-hover:rotate-0 transition-transform duration-300">
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
                    <span className="text-[10px] font-mono text-[#666666] tracking-tight">
                      dito.pen
                    </span>
                  </div>
                </div>

                {/* Identity & Bio Details */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#000000] leading-snug">
                      {DEVELOPER_INFO.name}
                    </h1>
                    <p className="text-xs font-mono text-[#555555] mt-0.5">
                      {DEVELOPER_INFO.role}
                    </p>
                    <p className="text-xs text-[#333333] leading-relaxed mt-2">
                      Engineer solving real-world operational friction with production AI, clean full-stack architecture, and pragmatic automation.
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#e6e6e6]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1ea64a] animate-pulse" />
                      <span className="text-[11px] font-mono text-[#444444] font-medium">Available for work</span>
                    </div>
                    <Link
                      href="/about"
                      className="text-xs font-semibold text-[#000000] hover:underline flex items-center gap-1 group/link"
                    >
                      <span>Story</span>
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Relocated Editorial Stats Matrix (Quiet Supporting Layout) */}
            <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-[#fafaf8] border border-[#ecece8] mb-6">
              {DEVELOPER_INFO.stats.map((stat, idx) => (
                <div key={idx} className="p-2 flex flex-col">
                  <span className="text-xs font-bold tracking-tight text-[#000000]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-3 text-xs font-mono">
              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#444444] hover:text-[#000000] transition-colors hover:underline"
              >
                <span>↗ GitHub Profile</span>
              </a>
              <span className="text-[#cccccc]">&bull;</span>
              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#444444] hover:text-[#000000] transition-colors hover:underline"
              >
                <span>↗ LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column (Oversized Headline, Work CTAs, & Curated Tactile Note Cluster) - 7 cols on lg */}
          <div className="lg:col-span-7 flex flex-col pt-1 min-w-0">
            {/* Display Headline inspired by Guglieri with deliberate line breaks */}
            <div className="mb-6">
              <h2 className="text-3xl sm:text-5xl lg:text-[64px] xl:text-[76px] font-bold tracking-[-0.035em] text-[#000000] leading-[1.04]">
                I build things<br />
                so other people<br />
                <span className="font-serif italic font-normal text-[#444444]">can carry less.</span>
              </h2>
            </div>

            {/* Subtext description */}
            <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed mb-8 max-w-2xl">
              Software engineer focused on relieving operational bottlenecks. From enterprise AI knowledge assistants with PaddleOCR to zero-overhead client systems and headless automation.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#selected-work"
                className="px-6 py-3.5 rounded-full text-xs font-semibold text-[#ffffff] bg-[#000000] hover:bg-[#222222] active:scale-95 transition-all flex items-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
              >
                <span>See Selected Work ↓</span>
              </a>

              <a
                href="#experience"
                className="px-6 py-3.5 rounded-full text-xs font-semibold text-[#000000] bg-[#ffffff] border border-[#d0d0d0] hover:bg-[#f7f7f5] active:scale-95 transition-all flex items-center gap-2 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
              >
                <span>Work experience</span>
                <ArrowDown size={14} aria-hidden="true" />
              </a>
            </div>

            {/* Tactile Cluster of Personal Notes (Studio Wall Moment) */}
            <div className="pt-6 border-t border-[#f0f0f0]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1ea64a]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#555555] font-semibold">
                    Studio Desk Notes &bull; {stickyNotes.length} pinned
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsBoardOpen(true);
                    setIsAddingNote(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f7f7f5] hover:bg-[#e6e6e6] text-[#000000] text-xs font-semibold border border-[#e6e6e6] transition-colors active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Stick a note</span>
                </button>
              </div>

              {/* Curated 3-Note Cluster */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                {curatedNotes.map((note, idx) => {
                  const rotations = ["-rotate-1 sm:-rotate-2", "rotate-1 sm:rotate-1.5", "-rotate-1 sm:-rotate-2.5"];
                  const rotClass = rotations[idx % rotations.length];

                  return (
                    <div
                      key={note.id}
                      onClick={() => setActiveNoteModal(note)}
                      className={`cluster-note cursor-pointer p-4 rounded-2xl border shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:rotate-0 flex flex-col justify-between ${rotClass} ${colorClasses[note.color]}`}
                    >
                      <div>
                        {/* Note Header */}
                        <div className="flex items-center justify-between gap-1 mb-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-xs font-bold truncate">
                              {note.author}
                            </span>
                            {note.stamp && (
                              <span className="inline-flex items-center justify-center text-[#000000]">
                                <DoodleStamp stamp={note.stamp} className="w-3 h-3" />
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-mono opacity-65 truncate">
                            {note.role}
                          </span>
                        </div>

                        {/* Note Body excerpt */}
                        <p className="text-xs leading-relaxed font-normal text-[#111111] line-clamp-3">
                          &ldquo;{note.content}&rdquo;
                        </p>
                      </div>

                      {/* Note Footer: Likes + Expand icon */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/10">
                        <button
                          type="button"
                          onClick={(e) => handleLikeNote(note.id, e)}
                          aria-label={`Like note by ${note.author}`}
                          className="flex items-center gap-1 text-[11px] font-mono font-medium hover:text-[#ff3d8b] transition-colors"
                        >
                          <Heart className="w-3 h-3 fill-current text-[#ff3d8b]" />
                          <span>{note.likes}</span>
                        </button>

                        <span className="text-[10px] font-mono text-[#333333] flex items-center gap-0.5 opacity-60 hover:opacity-100">
                          <Maximize2 className="w-2.5 h-2.5" />
                          <span>View</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Button to open full interactive board & composer */}
              <div className="mt-4 text-center sm:text-right">
                <button
                  type="button"
                  onClick={() => setIsBoardOpen(true)}
                  className="text-xs font-mono text-[#555555] hover:text-[#000000] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore full note wall ({stickyNotes.length} notes) &rarr;</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================== */}
      {/* Note Reader Modal (Expanded reading state) */}
      {/* ========================================================== */}
      {activeNoteModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Note by ${activeNoteModal.author}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveNoteModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-md p-6 sm:p-7 rounded-3xl border-2 shadow-2xl animate-in zoom-in-95 duration-200 ${colorClasses[activeNoteModal.color]}`}
          >
            <button
              onClick={() => setActiveNoteModal(null)}
              aria-label="Close note"
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-black/10 text-[#000000] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-[#000000]">
                {activeNoteModal.author}
              </span>
              <span className="text-xs font-mono opacity-70">
                &bull; {activeNoteModal.role}
              </span>
              {activeNoteModal.stamp && (
                <span className="inline-flex items-center justify-center ml-1">
                  <DoodleStamp stamp={activeNoteModal.stamp} className="w-4 h-4" />
                </span>
              )}
            </div>

            <p className="text-base sm:text-lg leading-relaxed font-medium text-[#111111] mb-6">
              &ldquo;{activeNoteModal.content}&rdquo;
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-black/15">
              <button
                type="button"
                onClick={() => handleLikeNote(activeNoteModal.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/10 hover:bg-black/20 text-xs font-semibold text-[#000000] transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-current text-[#ff3d8b]" />
                <span>{activeNoteModal.likes} likes</span>
              </button>

              <span className="text-xs font-mono opacity-60">
                Studio Note #{activeNoteModal.id}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================== */}
      {/* Full Note Board & Composer Drawer / Modal */}
      {/* ========================================================== */}
      {isBoardOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Community & Studio Sticky Note Wall"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => {
            setIsBoardOpen(false);
            setIsAddingNote(false);
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#ffffff] rounded-3xl border border-[#e6e6e6] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#f1f1f1] bg-[#fafaf8]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1ea64a] animate-pulse" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#000000]">
                  Studio Note Wall ({stickyNotes.length})
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAddingNote(!isAddingNote)}
                  className="px-3.5 py-1.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold flex items-center gap-1.5 hover:bg-[#222222] transition-colors"
                >
                  <Plus className={`w-3.5 h-3.5 transition-transform ${isAddingNote ? "rotate-45" : "rotate-0"}`} />
                  <span>{isAddingNote ? "Close Composer" : "Stick a Note"}</span>
                </button>

                <button
                  onClick={() => {
                    setIsBoardOpen(false);
                    setIsAddingNote(false);
                  }}
                  aria-label="Close dialog"
                  className="p-1.5 rounded-full hover:bg-[#f1f1f1] text-[#000000] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Note Composer */}
              {isAddingNote && (
                <form
                  onSubmit={handleAddNote}
                  className="mb-6 p-5 rounded-2xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col gap-3.5 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#000000]">
                      Leave a note on the wall:
                    </span>
                    <span className="text-xs font-mono text-[#888888]">
                      {newNoteContent.length}/160
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name / Handle"
                      value={newNoteAuthor}
                      onChange={(e) => setNewNoteAuthor(e.target.value)}
                      maxLength={30}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                    />
                    <input
                      type="text"
                      placeholder="Role / Context (e.g. Visitor, Founder)"
                      value={newNoteRole}
                      onChange={(e) => setNewNoteRole(e.target.value)}
                      maxLength={25}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                    />
                  </div>

                  <textarea
                    placeholder="Write your note... (Press Ctrl+Enter to post)"
                    value={newNoteContent}
                    onChange={(e) => setNewNoteContent(e.target.value)}
                    onKeyDown={(e) => {
                      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                        e.preventDefault();
                        if (newNoteContent.trim()) handleAddNote(e);
                      }
                    }}
                    maxLength={160}
                    rows={2}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                    required
                  />

                  {/* Doodle Stamp Picker */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] block mb-1.5">
                      Stamp a Doodle:
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

                  {/* Color Selector & Post Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#e6e6e6]">
                    <div className="flex items-center gap-1.5">
                      {(["lime", "lilac", "mint", "coral", "pink", "cream"] as const).map((c) => (
                        <button
                          type="button"
                          key={c}
                          onClick={() => setNewNoteColor(c)}
                          aria-label={`Select ${c} color`}
                          className={`w-6 h-6 rounded-full border ${
                            newNoteColor === c ? "ring-2 ring-[#000000] scale-110" : ""
                          } ${colorClasses[c].split(" ")[0]}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCancelNote}
                        className="px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#d0d0d0] text-[#555555] hover:text-[#000000] text-xs font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={!newNoteContent.trim()}
                        className="px-4 py-1.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Post Note
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {/* All Notes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stickyNotes.map((note) => (
                  <div
                    key={note.id}
                    className={`p-4 rounded-2xl border shadow-xs flex flex-col justify-between ${colorClasses[note.color]}`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="text-xs font-bold truncate">
                            {note.author}
                          </span>
                          {note.stamp && (
                            <span className="inline-flex items-center justify-center text-[#000000]">
                              <DoodleStamp stamp={note.stamp} className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-mono opacity-65 truncate">
                          {note.role}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-[#111111]">
                        {note.content}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/10">
                      <button
                        type="button"
                        onClick={() => handleLikeNote(note.id)}
                        className="flex items-center gap-1 text-[11px] font-mono font-medium hover:text-[#ff3d8b] transition-colors"
                      >
                        <Heart className="w-3 h-3 fill-current text-[#ff3d8b]" />
                        <span>{note.likes}</span>
                      </button>
                      <span className="text-[10px] font-mono opacity-50">#{note.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
