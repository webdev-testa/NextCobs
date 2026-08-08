"use client";

import React, { useState, useEffect, useRef } from "react";
import { MousePointer2 } from "lucide-react";

interface PeripheralCursor {
  id: string;
  name: string;
  role: string;
  color: string;
  side: "left" | "right";
  x: number;
  y: number;
  targetY: number;
  vy: number;
}

interface MultiplayerCursorLayerProps {
  active: boolean;
}

export function MultiplayerCursorLayer({ active }: MultiplayerCursorLayerProps) {
  const [cursors, setCursors] = useState<PeripheralCursor[]>([
    {
      id: "c1",
      name: "Ammardito (Editor)",
      role: "Lead Systems",
      color: "#ff3d8b",
      side: "left",
      x: 30,
      y: 280,
      targetY: 280,
      vy: 0,
    },
    {
      id: "c2",
      name: "Tech Lead Review",
      role: "Enterprise Systems",
      color: "#c5b0f4",
      side: "right",
      x: typeof window !== "undefined" ? window.innerWidth - 200 : 1100,
      y: 420,
      targetY: 420,
      vy: 0,
    },
    {
      id: "c3",
      name: "AI Recruiter",
      role: "Talent Scout",
      color: "#1ea64a",
      side: "left",
      x: 30,
      y: 650,
      targetY: 650,
      vy: 0,
    },
  ]);

  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Periodic gentle wander along the outer vertical rails
    const wanderInterval = setInterval(() => {
      setCursors((prev) =>
        prev.map((c) => {
          const padding = 100;
          const newTargetY = padding + Math.random() * (window.innerHeight - padding * 2);
          return {
            ...c,
            targetY: newTargetY,
          };
        })
      );
    }, 4000);

    // Physics loop keeping cursors strictly in the outer peripheral rails
    const updatePhysics = () => {
      const innerW = window.innerWidth;
      const innerH = window.innerHeight;
      const contentMaxW = 1280;
      const gutterWidth = Math.max(70, (innerW - contentMaxW) / 2);

      setCursors((prev) =>
        prev.map((c) => {
          // Compute clamped x strictly in the outer side gutters
          let clampedX = 0;
          if (c.side === "left") {
            // Keep on left rail
            const maxLeftX = Math.max(20, Math.min(gutterWidth - 20, 160));
            clampedX = Math.min(25, maxLeftX);
          } else {
            // Keep on right rail
            clampedX = innerW - 195;
          }

          let currentY = c.y;

          // Vertical repulsion if user mouse is nearby along the rail
          const dy = currentY - mousePosRef.current.y;
          const dx = clampedX - mousePosRef.current.x;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let repelForceY = 0;
          if (dist < 180 && dist > 0) {
            const force = Math.pow((180 - dist) / 180, 2) * 18;
            repelForceY = (dy / (Math.abs(dy) || 1)) * force;
          }

          // Spring toward target wander Y
          const targetDy = c.targetY - currentY;
          const springK = 0.02;
          const springY = targetDy * springK;

          // Velocity with damping
          const damping = 0.88;
          const newVy = (c.vy + springY + repelForceY) * damping;

          let newY = currentY + newVy;

          // Clamping to screen vertical bounds
          const marginY = 80;
          if (newY < marginY) newY = marginY;
          if (newY > innerH - marginY) newY = innerH - marginY;

          return {
            ...c,
            x: clampedX,
            y: newY,
            vy: newVy,
          };
        })
      );

      animFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(wanderInterval);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden select-none">
      {/* Outer Rails Indicators */}
      {cursors.map((cursor) => {
        const isLeft = cursor.side === "left";
        return (
          <div
            key={cursor.id}
            style={{
              transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
              willChange: "transform",
            }}
            className="absolute top-0 left-0 flex items-start gap-1.5 transition-opacity duration-300 opacity-80 hover:opacity-100"
          >
            {isLeft ? (
              // LEFT SIDE: Name tag is on the left, Pointer arrow is on the right (closest to the middle)
              <>
                <div
                  style={{ backgroundColor: cursor.color }}
                  className="px-2.5 py-1 rounded-full text-[#000000] text-xs font-mono font-bold shadow-md tracking-tight whitespace-nowrap border border-[#000000]/10"
                >
                  {cursor.name}
                </div>
                <MousePointer2
                  style={{ color: cursor.color }}
                  className="w-4 h-4 fill-current drop-shadow-sm shrink-0 scale-x-[-1] rotate-[15deg]"
                />
              </>
            ) : (
              // RIGHT SIDE: Pointer arrow is on the left (closest to the middle), Name tag is on the right
              <>
                <MousePointer2
                  style={{ color: cursor.color }}
                  className="w-4 h-4 fill-current drop-shadow-sm shrink-0 -rotate-45"
                />
                <div
                  style={{ backgroundColor: cursor.color }}
                  className="px-2.5 py-1 rounded-full text-[#000000] text-xs font-mono font-bold shadow-md tracking-tight whitespace-nowrap border border-[#000000]/10"
                >
                  {cursor.name}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
