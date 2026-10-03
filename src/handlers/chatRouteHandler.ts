import { NextRequest, NextResponse } from "next/server";
import { askStudioAssistant } from "@/lib/assistant";

export const maxDuration = 30;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await askStudioAssistant(body?.messages);

    if (!result.success && result.error?.includes("required")) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("POST /api/chat error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "An unexpected error occurred while processing the chat request.",
      },
      { status: 500 }
    );
  }
}
