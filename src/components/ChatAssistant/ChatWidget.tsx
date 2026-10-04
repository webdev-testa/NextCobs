"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  Sparkles,
  Copy,
  Check,
  ChevronDown,
  ExternalLink,
  Bot,
  User,
  AlertCircle,
  KeyRound,
  ArrowUp,
  Minimize2,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { MascotOwl } from "@/components/MascotOwl";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  modelUsed?: string;
  isFallback?: boolean;
  timestamp: string;
}

const STARTER_PROMPTS = [
  {
    label: "LG Sinar Mas AI Wiki",
    prompt: "Tell me about Dito's work on the LG Sinar Mas AI Wiki and its enterprise RAG architecture.",
    color: "bg-[#dceeb1] hover:bg-[#d0e4a0] text-[#1f2d08] border-[#c0d68c]",
  },
  {
    label: "Dr. Meoww ERP & App",
    prompt: "How did Dito build the Dr. Meoww ERP and Android app with Capacitor and Supabase?",
    color: "bg-[#c8e6cd] hover:bg-[#b8dcbe] text-[#0f3316] border-[#a8ceaf]",
  },
  {
    label: "Tech Stack & Tools",
    prompt: "What is Dito's primary tech stack, programming languages, and architecture specialties?",
    color: "bg-[#c5b0f4] hover:bg-[#b59fe8] text-[#241348] border-[#a991df]",
  },
  {
    label: "Hiring & Contact",
    prompt: "Is Dito currently available for hire or consulting? How can I get in touch?",
    color: "bg-[#f4ecd6] hover:bg-[#eae0c5] text-[#3d3319] border-[#ded3b6]",
  },
];

// Lightweight Markdown Formatter
function MarkdownRenderer({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <div className="space-y-2 text-[13.5px] leading-relaxed break-words font-sans">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        // Empty line
        if (!trimmed) {
          return <div key={idx} className="h-1" />;
        }

        // Bullet point
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const itemText = trimmed.replace(/^[-*]\s+/, "");
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="text-[#000000] font-bold text-xs mt-1 select-none">•</span>
              <span className="flex-1">{renderInlineFormatted(itemText)}</span>
            </div>
          );
        }

        // Numbered list
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="font-mono text-xs text-[#555555] mt-0.5 select-none">{numMatch[1]}.</span>
              <span className="flex-1">{renderInlineFormatted(numMatch[2])}</span>
            </div>
          );
        }

        // Heading
        if (trimmed.startsWith("### ")) {
          return (
            <h4 key={idx} className="font-bold text-sm text-[#000000] pt-1">
              {renderInlineFormatted(trimmed.replace(/^###\s+/, ""))}
            </h4>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h3 key={idx} className="font-bold text-sm text-[#000000] pt-1.5 border-b border-[#e6e6e6] pb-0.5">
              {renderInlineFormatted(trimmed.replace(/^##\s+/, ""))}
            </h3>
          );
        }

        // Regular paragraph
        return (
          <p key={idx} className="text-[#1a1a1a]">
            {renderInlineFormatted(line)}
          </p>
        );
      })}
    </div>
  );
}

function renderInlineFormatted(str: string): React.ReactNode {
  // Regex parsing for bold **text**, inline `code`, and [markdown](links)
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = str.split(regex);

  return parts.map((part, i) => {
    if (!part) return null;

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-[#000000]">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="font-mono text-[12px] bg-[#ecece9] text-[#111111] px-1.5 py-0.5 rounded-sm border border-[#dededb]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const href = linkMatch[2];
      const isInternal = href.startsWith("/");
      if (isInternal) {
        return (
          <Link
            key={i}
            href={href}
            className="inline-flex items-center gap-0.5 text-[#000000] font-semibold underline underline-offset-2 hover:text-[#555555] transition-colors"
          >
            {linkMatch[1]}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 text-[#000000] font-semibold underline underline-offset-2 hover:text-[#555555] transition-colors"
        >
          {linkMatch[1]}
          <ExternalLink className="w-3 h-3 ml-0.5 opacity-60 inline" />
        </a>
      );
    }

    return part;
  });
}

interface Citation {
  href: string;
  title: string;
  category: string;
}

function extractCitations(text: string): Citation[] {
  const regex = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;
  const citations: Citation[] = [];
  const seen = new Set<string>();

  let match;
  while ((match = regex.exec(text)) !== null) {
    const rawText = match[1].trim();
    const href = match[2].trim();
    const cleanHref = href.split("?")[0].split("#")[0];

    const key = href;
    if (seen.has(key)) continue;
    seen.add(key);

    // Clean up title for chip display
    let title = rawText
      .replace(/^[→•\s]+|[→•\s]+$/g, "")
      .replace(/^(Read|View|Explore|Check out|Download)(\s+(the|full))?\s+/i, "")
      .replace(/^Case Study:?\s*/i, "")
      .replace(/\s*→$/, "")
      .trim();

    // Determine category and fallback titles
    let category = "Page";
    if (cleanHref.startsWith("/work/")) {
      category = "Case Study";
      if (!title || title.toLowerCase().includes("case study")) {
        const slug = cleanHref.replace("/work/", "");
        if (slug === "lg-sm-wiki") title = "LG Sinar Mas AI Wiki";
        else if (slug === "dr-meoww") title = "Dr. Meoww ERP";
        else if (slug === "bygewa") title = "byGewa Florist";
        else if (slug === "automated-fleet-metrics") title = "Fleet Metrics";
        else if (slug === "crypto-wallet") title = "Crypto Wallet";
        else title = slug.replace(/-/g, " ");
      }
    } else if (cleanHref === "/work") {
      category = "Work";
      title = title || "All Case Studies";
    } else if (cleanHref.startsWith("/notes/")) {
      category = "Field Note";
      if (!title || title.toLowerCase().includes("essay") || title.toLowerCase().includes("note")) {
        const slug = cleanHref.replace("/notes/", "");
        title = slug.replace(/-/g, " ");
      }
    } else if (cleanHref === "/notes") {
      category = "Notes";
      title = title || "Engineering Notes";
    } else if (cleanHref.startsWith("/pursuits")) {
      category = "Pursuits";
      title = title || "Pursuits & Life";
    } else if (cleanHref === "/about") {
      category = "About";
      title = title || "About Ammar (Dito)";
    } else if (cleanHref.includes("resume")) {
      category = "Resume";
      title = title || "Résumé (PDF)";
    } else if (href.includes("contact")) {
      category = "Contact";
      title = title || "Get in Touch";
    }

    citations.push({
      href,
      title: title || "Related Page",
      category,
    });
  }

  return citations;
}

function MessageCitations({ text, onNavigate }: { text: string; onNavigate?: () => void }) {
  const citations = extractCitations(text);
  if (citations.length === 0) return null;

  return (
    <div className="mt-3 pt-2.5 border-t border-[#e5e5e0] flex flex-col gap-1.5 select-none">
      <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-[#5c5c5c] font-medium tracking-tight">
        <BookOpen className="w-3 h-3 text-[#111111]" />
        <span>Referenced Pages &amp; Sources</span>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-0.5">
        {citations.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            onClick={onNavigate}
            className="group/chip inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[#ffffff] hover:bg-[#000000] text-[#111111] hover:text-[#ffffff] border border-[#d6d6d2] hover:border-[#000000] shadow-2xs hover:shadow-xs transition-all active:scale-[0.98]"
          >
            <span className="text-[9.5px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#eeeee9] group-hover/chip:bg-[#222222] text-[#444444] group-hover/chip:text-[#e0e0e0] font-semibold transition-colors">
              {c.category}
            </span>
            <span className="truncate max-w-[190px]">{c.title}</span>
            <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover/chip:text-[#ffffff] group-hover/chip:translate-x-0.5 group-hover/chip:-translate-y-0.5 transition-transform shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeModel, setActiveModel] = useState<string | null>(null);
  const [fallbackNote, setFallbackNote] = useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-welcome",
      role: "assistant",
      content:
        "Hoo! I'm Soren, Dito's studio companion 🦉\n\nAsk me anything about his projects, technical architecture, or availability for work!",
      modelUsed: "ready",
      timestamp: "Just now",
    },
  ]);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      const timeout = setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 150);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, isMinimized]);

  // Global open-chat listener & keyboard shortcut (Ctrl+K / Cmd+K / Esc)
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent || navigator.platform));
    }

    const handleOpenChat = (e: any) => {
      setIsOpen(true);
      setIsMinimized(false);
      if (e?.detail?.prompt) {
        handleSendMessage(e.detail.prompt);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) setIsMinimized(false);
          return !prev;
        });
      }
      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("open-chat", handleOpenChat);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-chat", handleOpenChat);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setFallbackNote(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (data.success) {
        const assistantMessage: Message = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: data.message,
          modelUsed: data.modelUsed,
          isFallback: data.fallbackOccurred,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setActiveModel(data.modelUsed || null);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `error-${Date.now()}`,
            role: "assistant",
            content: `⚠️ **Service Notice**: ${data.error || "Failed to generate reply. Please try again."}`,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      }
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: "⚠️ **Connection Error**: Could not connect to the chat service. Please check your network and try again.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: "cleared-welcome",
        role: "assistant",
        content: "Chat history cleared! Soren is ready for your next question 🦉",
        modelUsed: "ready",
        timestamp: "Just now",
      },
    ]);
    setActiveModel(null);
    setFallbackNote(null);
  };

  return (
    <>
      {/* Docked Floating Widget Root */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
        {/* Floating Chat Panel */}
        {isOpen && (
          <div
            ref={panelRef}
            role="dialog"
            aria-label="Ask Soren — Studio Companion"
            className={`pointer-events-auto mb-3 bg-[#ffffff] border border-[#000000] shadow-[0_12px_40px_rgba(0,0,0,0.14)] rounded-2xl flex flex-col overflow-hidden transition-all duration-200 ${
              isMinimized
                ? "h-14 w-[320px] sm:w-[360px]"
                : "w-[calc(100vw-2.5rem)] sm:w-[420px] max-w-[440px] h-[580px] max-h-[82vh]"
            }`}
          >
            {/* Window Header */}
            <header className="shrink-0 px-4 py-3 bg-[#000000] text-[#ffffff] flex items-center justify-between select-none">
              <div className="flex items-center gap-2.5 min-w-0">
                <MascotOwl mode="avatar" className="w-8 h-8 shrink-0 shadow-xs" />
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs tracking-tight text-[#ffffff] truncate">
                      Soren
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono bg-[#ffffff]/15 text-[#ffffff] px-1.5 py-0.5 rounded-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1ea64a] animate-pulse" />
                      Companion
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#bbbbbb] truncate">
                    Dito&apos;s Studio Companion
                  </span>
                </div>
              </div>

              {/* Window Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearHistory}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="p-1.5 text-[#cccccc] hover:text-[#ffffff] hover:bg-[#ffffff]/10 rounded-md transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  title={isMinimized ? "Expand" : "Minimize"}
                  aria-label={isMinimized ? "Expand chat window" : "Minimize chat window"}
                  className="p-1.5 text-[#cccccc] hover:text-[#ffffff] hover:bg-[#ffffff]/10 rounded-md transition-colors"
                >
                  {isMinimized ? <MascotOwl mode="icon" className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close (Esc)"
                  aria-label="Close chat window"
                  className="p-1.5 text-[#cccccc] hover:text-[#ffffff] hover:bg-[#ffffff]/10 rounded-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </header>

            {!isMinimized && (
              <>
                {/* Conversation Body */}
                <div
                  className="min-h-0 flex-1 overflow-y-auto p-4 space-y-4 bg-[#ffffff] overscroll-contain"
                  tabIndex={0}
                  aria-live="polite"
                >
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.role === "user" ? "items-end" : "items-start"
                      } group`}
                    >
                      {/* Message Bubble */}
                      <div
                        className={`relative rounded-2xl p-3.5 max-w-[88%] text-sm ${
                          msg.role === "user"
                            ? "bg-[#000000] text-[#ffffff] rounded-tr-xs"
                            : "bg-[#f7f7f5] text-[#000000] border border-[#e6e6e6] rounded-tl-xs shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
                        }`}
                      >
                        {msg.role === "user" ? (
                          <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                        ) : (
                          <>
                            <MarkdownRenderer text={msg.content} />
                            <MessageCitations
                              text={msg.content}
                              onNavigate={() => {
                                if (typeof window !== "undefined" && window.innerWidth < 640) {
                                  setIsMinimized(true);
                                }
                              }}
                            />
                          </>
                        )}

                        {/* Assistant message metadata & actions */}
                        {msg.role === "assistant" && (
                          <div className="mt-2.5 pt-2 border-t border-[#e8e8e5] flex items-center justify-between text-[10px] font-mono text-[#777777]">
                            <div className="flex items-center gap-1.5">
                              <span className="font-sans font-medium text-[#555555]">Soren</span>
                              <span>•</span>
                              <span>{msg.timestamp}</span>
                            </div>

                            <button
                              onClick={() => handleCopyMessage(msg.id, msg.content)}
                              aria-label="Copy message text"
                              className="opacity-70 hover:opacity-100 p-1 hover:bg-[#e4e4e1] rounded transition-opacity flex items-center gap-1"
                              title="Copy to clipboard"
                            >
                              {copiedId === msg.id ? (
                                <>
                                  <Check className="w-3 h-3 text-[#1ea64a]" />
                                  <span className="text-[#1ea64a]">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Starter Suggestions on clean slate */}
                  {messages.length === 1 && !isLoading && (
                    <div className="pt-2 pb-1">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-2 font-medium">
                        Suggested questions
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {STARTER_PROMPTS.map((starter, i) => (
                          <button
                            key={i}
                            onClick={() => handleSendMessage(starter.prompt)}
                            className={`text-left p-2.5 rounded-xl border text-xs font-medium transition-all active:scale-[0.98] ${starter.color}`}
                          >
                            <span className="block font-semibold">{starter.label}</span>
                            <span className="block text-[11px] opacity-80 mt-0.5 line-clamp-1">
                              {starter.prompt}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Loading / Typing State */}
                  {isLoading && (
                    <div className="flex items-start gap-2">
                      <div className="bg-[#f7f7f5] border border-[#e6e6e6] rounded-2xl rounded-tl-xs p-3 text-xs flex items-center gap-2 text-[#555555]">
                        <span className="w-2 h-2 rounded-full bg-[#000000] animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-2 h-2 rounded-full bg-[#000000] animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-2 h-2 rounded-full bg-[#000000] animate-bounce" />
                        <span className="font-mono text-[11px] ml-1 text-[#666666]">
                          Soren is typing...
                        </span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Input Area */}
                <footer className="shrink-0 p-3 bg-[#ffffff] border-t border-[#f1f1f1]">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="relative flex items-center gap-2"
                  >
                    <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      placeholder="Type here to ask..."
                      rows={1}
                      disabled={isLoading}
                      className="w-full resize-none bg-[#f7f7f5] hover:bg-[#f2f2ef] focus:bg-[#ffffff] text-[#000000] placeholder:text-[#888888] text-xs sm:text-sm rounded-xl py-2.5 pl-3.5 pr-12 border border-[#e6e6e6] focus:border-[#000000] focus:outline-hidden focus:ring-1 focus:ring-[#000000] transition-all max-h-24 overflow-y-auto leading-normal"
                    />

                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      aria-label="Send message"
                      className="absolute right-1.5 p-2 rounded-lg bg-[#000000] text-[#ffffff] disabled:bg-[#cccccc] disabled:cursor-not-allowed hover:bg-[#222222] active:scale-95 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#000000]"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                  </form>

                  <div className="mt-2 flex items-center justify-between text-[10.5px] font-mono text-[#888888] px-1">
                    <span>Shift+Enter for newline</span>
                    <span>Enter to send • Esc to close</span>
                  </div>
                </footer>
              </>
            )}
          </div>
        )}

        {/* Collapsed Pill Trigger */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setIsMinimized(false);
          }}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close Soren" : "Ask Soren — Studio Companion"}
          className={`pointer-events-auto group px-4 py-2.5 rounded-full bg-[#000000] text-[#ffffff] hover:bg-[#222222] active:scale-95 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.18)] flex items-center gap-2 border border-[#000000] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2 ${
            isOpen ? "ring-2 ring-[#000000]" : ""
          }`}
        >
          <div className="relative flex items-center justify-center">
            <MascotOwl mode="avatar" className="w-6 h-6 shrink-0" />
          </div>
          <span className="text-xs font-semibold tracking-tight">
            {isOpen ? "Close Soren" : "Ask Soren"}
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono text-[#999999] bg-[#222222] px-1.5 py-0.5 rounded border border-[#333333]">
            {isMac ? "⌘K" : "Ctrl+K"}
          </span>
        </button>
      </div>
    </>
  );
}
