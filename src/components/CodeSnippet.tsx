"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeSnippetProps {
  filename?: string;
  language?: string;
  code: string;
  caption?: string;
}

export function CodeSnippet({ filename, language = "typescript", code, caption }: CodeSnippetProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
    setTimeout(() => setCopyStatus("idle"), 2000);
  };

  return (
    <div className="my-6 rounded-xl border border-[#27272a] bg-[#18181b] overflow-hidden text-xs">
      {filename && (
        <div className="px-4 py-2 border-b border-[#27272a] bg-[#222225] flex items-center justify-between font-mono text-[11px] text-[#a1a1aa]">
          <span>{filename}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 hover:text-[#ffffff] transition-colors"
            title="Copy code"
            aria-live="polite"
          >
            {copyStatus === "copied" ? (
              <>
                <Check className="w-3 h-3 text-[#1ea64a]" />
                <span>Copied</span>
              </>
            ) : copyStatus === "error" ? (
              <span>Copy failed</span>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto font-mono text-[12px] leading-relaxed text-[#f4f4f5]">
        <code>{code}</code>
      </pre>
      {caption && (
        <div className="px-4 py-2 border-t border-[#27272a] bg-[#222225] text-[11px] text-[#71717a] italic font-mono">
          {caption}
        </div>
      )}
    </div>
  );
}
