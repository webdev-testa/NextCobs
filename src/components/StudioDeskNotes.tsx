"use client";

import React, { useState, useEffect } from "react";
import { Heart, Maximize2, Plus, X } from "lucide-react";
import confetti from "canvas-confetti";
import { StudioDialog } from "@/components/StudioDialog";
import { DoodleStamp, DoodleStampType } from "@/components/SketchIcons";
import { getInitialNotes, StickyNote } from "@/lib/portfolio-catalog";

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

const colorClasses: Record<StickyNote["color"], string> = {
  lime: "bg-[#dceeb1] text-[#000000] border-[#bed68b]",
  lilac: "bg-[#c5b0f4] text-[#000000] border-[#a991de]",
  cream: "bg-[#f4ecd6] text-[#000000] border-[#ded0b1]",
  mint: "bg-[#c8e6cd] text-[#000000] border-[#a6ceab]",
  pink: "bg-[#efd4d4] text-[#000000] border-[#d8b5b5]",
  coral: "bg-[#f3c9b6] text-[#000000] border-[#d9a892]",
};

export interface StudioDeskNotesProps {
  maxDeskNotes?: number;
  className?: string;
}

/**
 * Deep Studio Desk Notes Module
 * Encapsulates interactive notes state, optimistic mutations, modal viewports,
 * stamp doodling, and backend synchronization behind a small declarative interface.
 */
export function StudioDeskNotes({ maxDeskNotes = 4, className = "" }: StudioDeskNotesProps) {
  const [stickyNotes, setStickyNotes] = useState<StickyNote[]>(() => getInitialNotes());
  const [isBoardOpen, setIsBoardOpen] = useState(false);
  const [activeNoteModal, setActiveNoteModal] = useState<StickyNote | null>(null);

  // Form states
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState("");
  const [newNoteAuthor, setNewNoteAuthor] = useState("");
  const [newNoteRole, setNewNoteRole] = useState("");
  const [newNoteColor, setNewNoteColor] = useState<StickyNote["color"]>("lime");
  const [newNoteStamp, setNewNoteStamp] = useState<DoodleStampType>("sparkle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadNotes() {
      try {
        const res = await fetch("/api/notes");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success && Array.isArray(data.notes) && data.notes.length > 0) {
            setStickyNotes(data.notes);
          }
        }
      } catch (err) {
        console.error("Failed to load notes from Turso:", err);
      }
    }
    loadNotes();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleCancelNote = () => {
    setNewNoteContent("");
    setNewNoteAuthor("");
    setNewNoteRole("");
    setNewNoteStamp("sparkle");
    setNewNoteColor("lime");
    setIsAddingNote(false);
  };

  const handleLikeNote = async (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    // Optimistic UI update
    setStickyNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, likes: note.likes + 1 } : note))
    );
    if (activeNoteModal && activeNoteModal.id === id) {
      setActiveNoteModal((prev) => (prev ? { ...prev, likes: prev.likes + 1 } : null));
    }

    try {
      const res = await fetch(`/api/notes/${id}/like`, { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        if (data.success && typeof data.likes === "number") {
          setStickyNotes((prev) =>
            prev.map((note) => (note.id === id ? { ...note, likes: data.likes } : note))
          );
          if (activeNoteModal && activeNoteModal.id === id) {
            setActiveNoteModal((prev) => (prev ? { ...prev, likes: data.likes } : null));
          }
        }
      }
    } catch (err) {
      console.error("Failed to persist note like to Turso:", err);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteContent.trim() || isSubmitting) return;

    const tempId = `temp-${Date.now()}`;
    const newNote: StickyNote = {
      id: tempId,
      author: newNoteAuthor.trim() || "Visitor",
      role: newNoteRole.trim() || "Guest Note",
      content: newNoteContent.trim(),
      color: newNoteColor,
      rotation: Math.random() * 4 - 2,
      likes: 1,
      tag: "Community",
      stamp: newNoteStamp !== "none" ? newNoteStamp : undefined,
    };

    // Optimistic UI update
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

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: newNote.author,
          role: newNote.role,
          content: newNote.content,
          color: newNote.color,
          stamp: newNote.stamp,
          rotation: newNote.rotation,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.note) {
          setStickyNotes((prev) =>
            prev.map((n) => (n.id === tempId ? data.note : n))
          );
        }
      }
    } catch (err) {
      console.error("Failed to persist note to Turso:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const curatedNotes = stickyNotes.slice(0, maxDeskNotes);

  return (
    <div className={`studio-notes ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <h2 className="text-lg font-semibold tracking-tight">Studio Desk Notes <span className="ml-2 text-xs font-normal text-[var(--color-muted-ink)]">{stickyNotes.length} pinned</span></h2>

        <button
          type="button"
          onClick={() => {
            setIsBoardOpen(true);
            setIsAddingNote(true);
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffffff] hover:bg-[#e6e6e6] text-[#000000] text-xs font-semibold border border-[#d0d0d0] transition-colors active:scale-95 shadow-2xs"
        >
          <Plus className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Stick a note</span>
        </button>
      </div>

      {/* A small preview; every note remains available in the wall. */}
      <div className="grid grid-cols-[minmax(0,220px)] sm:grid-cols-[repeat(2,minmax(0,220px))] lg:grid-cols-[repeat(4,minmax(0,220px))] gap-4 pt-1">
        {curatedNotes.map((note, idx) => {
          const rotations = [
            "-rotate-1 sm:-rotate-1.5",
            "rotate-1 sm:rotate-1.5",
            "rotate-1 sm:rotate-1",
            "-rotate-1 sm:-rotate-1.5",
          ];
          const rotClass = rotations[idx % rotations.length];

          return (
            <div
              key={note.id}
              className={`aspect-square min-h-[220px] p-4 rounded-xl transition-transform duration-200 flex flex-col justify-between ${rotClass} ${colorClasses[note.color]}`}
            >
              <div>
                {/* Note Header */}
                <div className="flex flex-col items-start gap-1 mb-3">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-sm font-semibold break-words">
                      {note.author}
                    </span>
                    {note.stamp && (
                      <span className="inline-flex items-center justify-center text-[#000000]">
                        <DoodleStamp stamp={note.stamp} className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] leading-tight text-[#333333] break-words">
                    {note.role}
                  </span>
                </div>

                {/* Note Body excerpt */}
                <p className="text-sm leading-relaxed text-[#111111] line-clamp-3">
                  &ldquo;{note.content}&rdquo;
                </p>
              </div>

              {/* Note Footer: Likes + Expand icon */}
              <div className="flex items-center justify-between mt-3 pt-1 border-t border-black/10">
                <button
                  type="button"
                  onClick={(e) => handleLikeNote(note.id, e)}
                  aria-label={`Like note by ${note.author}`}
                  className="flex items-center gap-2 text-sm font-medium hover:text-[#ff3d8b] transition-colors"
                >
                  <Heart className="w-3 h-3 fill-current text-[#ff3d8b]" aria-hidden="true" />
                  <span>{note.likes}</span>
                </button>

                <button type="button" onClick={() => setActiveNoteModal(note)} aria-label={`Read note by ${note.author}`} className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline underline-offset-4">
                  <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                  Read note
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Link to open full interactive modal wall */}
      <div className="mt-3.5 pt-2.5 border-t border-[#ecece8] flex items-center justify-between text-xs font-mono text-[#666666]">
        <button
          type="button"
          onClick={() => setIsBoardOpen(true)}
          className="text-[#000000] font-semibold hover:underline inline-flex items-center gap-1"
        >
          <span>Open studio wall ({stickyNotes.length}) &rarr;</span>
        </button>
      </div>

      {/* ========================================================== */}
      {/* Note Reader Modal (Expanded reading state) */}
      {/* ========================================================== */}
      {activeNoteModal && (
        <StudioDialog label={`Note by ${activeNoteModal.author}`} onClose={() => setActiveNoteModal(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-md max-h-[90dvh] overflow-y-auto p-6 sm:p-7 rounded-3xl border-2 shadow-2xl animate-in zoom-in-95 duration-200 ${colorClasses[activeNoteModal.color]}`}
          >
            <button
              onClick={() => setActiveNoteModal(null)}
              aria-label="Close note"
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-black/10 text-[#000000] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
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
                <Heart className="w-3.5 h-3.5 fill-current text-[#ff3d8b]" aria-hidden="true" />
                <span>{activeNoteModal.likes} likes</span>
              </button>

              <span className="text-xs font-mono opacity-60">
                Studio Note #{activeNoteModal.id}
              </span>
            </div>
          </div>
        </StudioDialog>
      )}

      {/* ========================================================== */}
      {/* Full Note Board & Composer Drawer / Modal */}
      {/* ========================================================== */}
      {isBoardOpen && (
        <StudioDialog label="Community & Studio Sticky Note Wall" onClose={() => {
          setIsBoardOpen(false);
          setIsAddingNote(false);
        }}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90dvh] bg-[#ffffff] rounded-3xl border border-[#e6e6e6] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-[#f1f1f1] bg-[#fafaf8]">
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
                      aria-label="Your name or handle"
                      autoFocus
                      value={newNoteAuthor}
                      onChange={(e) => setNewNoteAuthor(e.target.value)}
                      maxLength={30}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                    />
                    <input
                      type="text"
                      placeholder="Role / Context (e.g. Visitor, Founder)"
                      aria-label="Role or context"
                      value={newNoteRole}
                      onChange={(e) => setNewNoteRole(e.target.value)}
                      maxLength={25}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#e6e6e6] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                    />
                  </div>

                  <textarea
                    placeholder="Write your note... (Press Ctrl+Enter to post)"
                    aria-label="Your note"
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
                        disabled={isSubmitting || !newNoteContent.trim()}
                        className="px-4 py-1.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Posting…" : "Post Note"}
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
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="text-sm font-semibold break-words">
                            {note.author}
                          </span>
                          {note.stamp && (
                            <span className="inline-flex items-center justify-center text-[#000000]">
                              <DoodleStamp stamp={note.stamp} className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-[#333333] break-words">
                          {note.role}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-[#111111]">
                        {note.content}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/10">
                      <button
                        type="button"
                        onClick={() => handleLikeNote(note.id)}
                        aria-label={`Like note by ${note.author}`}
                        className="flex items-center gap-2 text-sm font-medium hover:text-[#ff3d8b] transition-colors"
                      >
                        <Heart className="w-3 h-3 fill-current text-[#ff3d8b]" aria-hidden="true" />
                        <span>{note.likes}</span>
                      </button>
                      <span className="text-[10px] font-mono opacity-50">#{note.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StudioDialog>
      )}
    </div>
  );
}
