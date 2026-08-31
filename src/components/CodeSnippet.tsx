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
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#1ea64a]" />
                <span>Copied</span>
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
