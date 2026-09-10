import React from "react";

interface SketchIconProps {
  className?: string;
}

/**
 * Hand-drawn style Book / Pages sketch icon
 */
export function BookSketchIcon({ className = "w-5 h-5" }: SketchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Book spine & curved pages */}
      <path d="M4 19.5c2.5-1.5 5.5-1.2 8 .5 2.5-1.7 5.5-2 8-.5" />
      <path d="M4 4.5c2.5-1.5 5.5-1.2 8 .5 2.5-1.7 5.5-2 8-.5" />
      <path d="M4 4.5v15" />
      <path d="M20 4.5v15" />
      <path d="M12 5v15" />
      {/* Hand-drawn bookmark ribbon */}
      <path d="M10 5v4l1.5-1 1.5 1V5" />
      {/* Subtle ink texture marks */}
      <path d="M6 9h3.5" strokeWidth="1.2" />
      <path d="M6 12h3" strokeWidth="1.2" />
      <path d="M14.5 9h3.5" strokeWidth="1.2" />
      <path d="M14.5 12h2.5" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Hand-drawn Chess Knight piece sketch icon
 */
export function ChessKnightSketchIcon({ className = "w-5 h-5" }: SketchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Base */}
      <path d="M4.5 20.5h15" />
      <path d="M6 18.5h12" />
      {/* Knight body silhouette */}
      <path d="M7 18.5c0-3.5 1.5-6.5 4-8.5-1-1.5-.5-3.5 1-4.5.5-.3 1.2-.5 2-.5.8 0 1.8.4 2.5 1 1 1 1 2.5.5 3.5l1.5 1.5c1 .8 1.5 2 1.5 3.5v4" />
      {/* Mane & ear */}
      <path d="M14 5l-.5-2-2 1" />
      {/* Eye & snout */}
      <circle cx="14" cy="7.5" r="0.8" fill="currentColor" />
      <path d="M10.5 10c-.5.5-1.5 1.2-2.5 1.2" />
      {/* Cross-hatch shading doodle */}
      <path d="M12 14l2-2" strokeWidth="1.2" />
      <path d="M13 16l2-2" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Hand-drawn Running Shoe / Sprint sketch icon
 */
export function RunningShoeSketchIcon({ className = "w-5 h-5" }: SketchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Shoe outsole */}
      <path d="M2.5 17c1.5.3 4.5.8 7.5.5 4-.5 7.5-1.2 10.5-.5.8.2 1.2.6 1.5 1.2-2 1.2-5 1.8-9 1.8-4 0-7.5-.8-10.5-3z" />
      {/* Upper collar and heel */}
      <path d="M4 14.5c-.8-1.8-1-3.8-.5-5.5.5-1.5 1.8-2.2 3.5-2 1 .2 1.8.8 2.5 1.5l3.5 4 4.5.5c1.5.2 2.5 1 3 2.5" />
      {/* Laces & tongue */}
      <path d="M9 10.5l2 1" strokeWidth="1.3" />
      <path d="M10.5 9l2 1" strokeWidth="1.3" />
      <path d="M8 8.5l1-1.5" strokeWidth="1.3" />
      {/* Motion swoosh lines */}
      <path d="M1 12c1.5-1 3-1.2 4-1" strokeWidth="1.2" strokeDasharray="1 2" />
      <path d="M2 10c1.5-.8 3-1 4.5-.8" strokeWidth="1.2" strokeDasharray="1 2" />
    </svg>
  );
}

/**
 * Hand-drawn Street Pole & Power Lines sketch icon
 */
export function StreetPoleSketchIcon({ className = "w-5 h-5" }: SketchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Main vertical pole */}
      <path d="M11.5 2v20" />
      <path d="M12.5 2v20" strokeWidth="1" opacity="0.6" />
      {/* Crossbar 1 */}
      <path d="M6 5.5h12" />
      <path d="M7 4.5v2" strokeWidth="1.2" />
      <path d="M17 4.5v2" strokeWidth="1.2" />
      {/* Crossbar 2 */}
      <path d="M8 9.5h8" />
      <path d="M9 8.5v2" strokeWidth="1.2" />
      <path d="M15 8.5v2" strokeWidth="1.2" />
      {/* Transformer cylinder */}
      <rect x="13" y="11" width="3" height="4.5" rx="1" strokeWidth="1.3" />
      {/* Power lines droop */}
      <path d="M1 4c4 2.5 8 2.5 11 1.5 3-1 7-1 11 1.5" strokeWidth="1.2" />
      <path d="M1 8c4 3 8 3 11 1.5 3-1.5 7-1.5 11 1.5" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Hand-drawn Game Controller / Gamepad sketch icon
 */
export function GamepadSketchIcon({ className = "w-5 h-5" }: SketchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Controller body */}
      <path d="M6 7h12a4 4 0 014 4v3a5 5 0 01-8 4l-2-2-2 2a5 5 0 01-8-4v-3a4 4 0 014-4z" />
      {/* D-Pad */}
      <path d="M7 11v4" strokeWidth="1.5" />
      <path d="M5 13h4" strokeWidth="1.5" />
      {/* Action buttons */}
      <circle cx="16.5" cy="11.5" r="0.8" fill="currentColor" />
      <circle cx="18.5" cy="13.5" r="0.8" fill="currentColor" />
      <circle cx="14.5" cy="13.5" r="0.8" fill="currentColor" />
      <circle cx="16.5" cy="15.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

/**
 * Hand-drawn Activity / Pulse sketch icon
 */
export function ActivitySketchIcon({ className = "w-5 h-5" }: SketchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 13h3.5l2.5-6.5 4 14 3.5-9.5 2 4.5H22" />
      {/* Ink speckle dot */}
      <circle cx="19" cy="7" r="0.8" fill="currentColor" />
    </svg>
  );
}

/**
 * Hand-drawn Code Brackets sketch icon
 */
export function CodeSketchIcon({ className = "w-5 h-5" }: SketchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7.5 7.5L3 12l4.5 4.5" />
      <path d="M16.5 7.5L21 12l-4.5 4.5" />
      <path d="M13.5 5.5l-3 13" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Hand-drawn Sparkle / Quill Star doodle
 */
export function SparkleSketchIcon({ className = "w-4 h-4" }: SketchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2c0 5-3 8-8 8 5 0 8 3 8 8 0-5 3-8 8-8-5 0-8-3-8-8z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

/**
 * Hand-drawn Steaming Coffee Cup sketch icon
 */
export function CoffeeSketchIcon({ className = "w-5 h-5" }: SketchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 8h12v6a5 5 0 01-5 5H9a5 5 0 01-5-5V8z" />
      <path d="M16 10h2a3 3 0 010 6h-2" />
      <path d="M2 21h17" />
      <path d="M7 3c0 1.5 1 2 1 3" strokeWidth="1.3" />
      <path d="M11 2c0 1.5 1 2 1 4" strokeWidth="1.3" />
      <path d="M15 3.5c0 1.5 1 1.5 1 2.5" strokeWidth="1.3" />
    </svg>
  );
}

/**
 * Hand-drawn Heart sketch doodle
 */
export function HeartSketchIcon({ className = "w-5 h-5" }: SketchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 20.5l-1.2-1.1C5.5 14.7 2 11.5 2 7.5 2 4.4 4.4 2 7.5 2c1.8 0 3.5.8 4.5 2.1C13 2.8 14.7 2 16.5 2 19.6 2 22 4.4 22 7.5c0 4-3.5 7.2-8.8 11.9L12 20.5z" />
      <path d="M8 6.5c-1 0-2 .8-2 2" strokeWidth="1.2" opacity="0.6" />
    </svg>
  );
}

export type DoodleStampType =
  | "sparkle"
  | "coffee"
  | "book"
  | "gamepad"
  | "chess"
  | "code"
  | "runner"
  | "heart"
  | "none";

/**
 * Helper component to render doodle stamps on sticky notes or buttons
 */
export function DoodleStamp({
  stamp,
  className = "w-4 h-4",
}: {
  stamp?: string;
  className?: string;
}) {
  switch (stamp) {
    case "sparkle":
      return <SparkleSketchIcon className={className} />;
    case "coffee":
      return <CoffeeSketchIcon className={className} />;
    case "book":
      return <BookSketchIcon className={className} />;
    case "gamepad":
      return <GamepadSketchIcon className={className} />;
    case "chess":
      return <ChessKnightSketchIcon className={className} />;
    case "code":
      return <CodeSketchIcon className={className} />;
    case "runner":
      return <RunningShoeSketchIcon className={className} />;
    case "heart":
      return <HeartSketchIcon className={className} />;
    default:
      return null;
  }
}

