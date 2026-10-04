"use client";

interface MascotOwlProps {
  mode?: "footer" | "avatar" | "icon";
  className?: string;
  sizeClassName?: string;
  onClick?: () => void;
}

// A barn-owl face and natural plumage; the same character at every size.
function OwlDrawing({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <svg viewBox={compact ? "17 9 86 86" : "0 0 120 128"} fill="none" stroke="#776856" strokeWidth={compact ? 2.3 : 1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M33 58 C26 77 29 103 42 115 Q60 125 78 115 C91 102 94 77 87 58Z" fill="#eee5d5" />
      {!compact && <>
        <path d="M39 72 C36 91 40 109 51 117 Q60 120 69 117 C80 109 84 90 81 72Z" fill="#fcfaf5" stroke="none" />
        <path d="M34 65 C22 72 23 95 34 110 Q44 94 42 77Z" fill="#cfbda5" />
        <path d="M86 65 C98 72 97 95 86 110 Q76 94 78 77Z" fill="#cfbda5" />
        <g stroke="#ede2d1" strokeWidth="1.5">
          <path d="M30 80 Q31 93 35 99 M34 76 Q37 86 37 91 M90 80 Q89 93 85 99 M86 76 Q83 86 83 91" />
        </g>
        <g fill="#ae9780" stroke="none">
          <ellipse cx="49" cy="87" rx="1.2" ry="2" /><ellipse cx="67" cy="88" rx="1.2" ry="2" />
          <ellipse cx="59" cy="95" rx="1.2" ry="2" /><ellipse cx="48" cy="101" rx="1.2" ry="2" />
          <ellipse cx="71" cy="101" rx="1.2" ry="2" /><ellipse cx="61" cy="109" rx="1.2" ry="2" />
        </g>
      </>}
      <g className="owl-face">
        <path d="M23 41 C22 20 37 10 60 11 C83 10 98 20 97 41 C98 64 81 81 60 83 C39 81 22 64 23 41Z" fill="#ddc7a8" />
        <path d="M60 30 C47 16 28 24 28 42 C28 59 45 73 60 78 C75 73 92 59 92 42 C92 24 73 16 60 30Z" fill="#fffdf8" stroke="#cab391" strokeWidth="1.5" />
        {!compact && <g stroke="#e7dccb" strokeWidth="1.3">
          <path d="M60 32 Q54 44 57 57 M60 32 Q66 44 63 57 M32 57 Q38 67 48 70 M88 57 Q82 67 72 70" />
        </g>}
        {/* Tall, softly squared eyes keep the owl's attentive expression. */}
        <g className="owl-eyes-open">
          {/* Eye whites with soft outline */}
          <rect x="31.5" y="34" width="21" height="24" rx="9" fill="#ffffff" stroke="#776856" strokeWidth="1.4" />
          <rect x="67.5" y="34" width="21" height="24" rx="9" fill="#ffffff" stroke="#776856" strokeWidth="1.4" />

          {/* Large friendly pupils */}
          <rect x="37" y="39.5" width="10" height="13" rx="4.5" fill="#1c1815" stroke="none" />
          <rect x="73" y="39.5" width="10" height="13" rx="4.5" fill="#1c1815" stroke="none" />

          {/* Sparkle catchlights */}
          <circle cx="39.8" cy="43.5" r="2" fill="#ffffff" stroke="none" />
          <circle cx="75.8" cy="43.5" r="2" fill="#ffffff" stroke="none" />
        </g>
        {!compact && (
          <g className="owl-eyes-happy" stroke="#776856" strokeWidth="2.4" strokeLinecap="round">
            <path d="M34 47 Q42 39 50 47" />
            <path d="M70 47 Q78 39 86 47" />
          </g>
        )}
        <path d="M56 56 Q60 53 64 56 L60 67Z" fill="#cbb89f" strokeWidth="1.3" />
      </g>
      {!compact && <g fill="#ddd0bd" strokeWidth="1.5">
        <path d="M40 116 Q43 112 46 116 Q49 113 52 117 L52 123 Q46 126 40 123Z" />
        <path d="M68 117 Q71 113 74 116 Q77 112 80 116 L80 123 Q74 126 68 123Z" />
        <path d="M46 118V123 M74 118V123" />
      </g>}
    </svg>
  );
}

export function MascotOwl({ mode = "footer", className = "", sizeClassName, onClick }: MascotOwlProps) {
  if (mode === "icon") return <OwlDrawing compact className={className || "w-5 h-5"} />;
  if (mode === "avatar") return (
    <span aria-hidden="true" className={`inline-flex items-center justify-center rounded-full bg-[#f6f1e8] overflow-hidden ${className || "w-8 h-8"}`}>
      <OwlDrawing compact className="w-full h-full" />
    </span>
  );

  return (
    <button
      type="button"
      onClick={onClick || (() => window.dispatchEvent(new CustomEvent("open-chat")))}
      aria-label="Soren, Dito's studio companion. Click to chat"
      className={`studio-owl relative inline-flex select-none rounded-xl ${className}`}
    >
      <span
        aria-hidden="true"
        className="owl-greeting absolute -top-8 right-0 whitespace-nowrap rounded-lg border border-[var(--color-hairline)] bg-[var(--color-canvas)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-ink)] pointer-events-none"
      >
        Hoo! Need a hand?
      </span>
      <OwlDrawing className={sizeClassName || "block w-16 sm:w-20 h-auto"} />
    </button>
  );
}
