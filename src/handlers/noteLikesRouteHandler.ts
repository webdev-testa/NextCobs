import { NextRequest, NextResponse } from "next/server";
import { incrementStickyNoteLikes } from "@/lib/turso";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ success: false, error: "Note ID is required" }, { status: 400 });
    }

    const likes = await incrementStickyNoteLikes(id);
    if (likes === null) {
      return NextResponse.json({ success: false, error: "Note not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, likes });
  } catch (error) {
    console.error("POST /api/notes/[id]/like error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to increment likes" },
      { status: 500 }
    );
  }
}
