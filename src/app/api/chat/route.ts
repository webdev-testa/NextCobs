import { NextRequest, NextResponse } from "next/server";
import { executeChatWithFallback } from "@/lib/gemini";

export const maxDuration = 30; // 30 seconds max execution time for route handler

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { success: false, error: "A non-empty 'messages' array is required." },
        { status: 400 }
      );
    }

    // Keep the most recent 12 messages to protect token limits
    const sanitizedMessages = messages
      .slice(-12)
      .map((m: any) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: typeof m.content === "string" ? m.content.slice(0, 1500) : "",
      }))
      .filter((m) => m.content.trim().length > 0);

    if (sanitizedMessages.length === 0) {
      return NextResponse.json(
        { success: false, error: "Messages cannot be empty." },
        { status: 400 }
      );
    }

    const result = await executeChatWithFallback(sanitizedMessages);

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
