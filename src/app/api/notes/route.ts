import { NextRequest, NextResponse } from "next/server";
import { getAllStickyNotes, createStickyNote } from "@/lib/turso";
import { StickyNote } from "@/data/portfolioData";

const VALID_COLORS: StickyNote["color"][] = ["lime", "lilac", "cream", "mint", "pink", "coral"];

export async function GET() {
  try {
    const notes = await getAllStickyNotes();
    return NextResponse.json({ success: true, notes });
  } catch (error) {
    console.error("GET /api/notes error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch sticky notes" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { author, role, content, color, stamp, rotation } = body;

    if (!content || typeof content !== "string" || !content.trim()) {
      return NextResponse.json(
        { success: false, error: "Content is required" },
        { status: 400 }
      );
    }

    if (content.trim().length > 300) {
      return NextResponse.json(
        { success: false, error: "Note content must be 300 characters or fewer" },
        { status: 400 }
      );
    }

    const noteColor = VALID_COLORS.includes(color) ? color : "lime";
    const noteAuthor = typeof author === "string" ? author.slice(0, 40) : "Visitor";
    const noteRole = typeof role === "string" ? role.slice(0, 40) : "Guest Note";
    const noteStamp = typeof stamp === "string" && stamp !== "none" ? stamp.slice(0, 20) : undefined;
    const noteRotation = typeof rotation === "number" ? Math.max(-10, Math.min(10, rotation)) : undefined;

    const newNote = await createStickyNote({
      author: noteAuthor,
      role: noteRole,
      content: content.trim(),
      color: noteColor,
      stamp: noteStamp,
      rotation: noteRotation,
    });

    return NextResponse.json({ success: true, note: newNote }, { status: 201 });
  } catch (error) {
    console.error("POST /api/notes error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create sticky note" },
      { status: 500 }
    );
  }
}
