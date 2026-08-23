"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function TypingText({
  words,
  className
}: {
  words: string[];
  className?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    if (prefersReducedMotion) return;

    const current = words[index];
    const isEnd = subIndex === current.length;
    const isStart = subIndex === 0;

    const timeout = setTimeout(() => {
      if (direction === "forward") {
        if (isEnd) {
          setDirection("backward");
        } else {
          setSubIndex((prev) => prev + 1);
        }
      } else {
        if (isStart) {
          setDirection("forward");
          setIndex((prev) => (prev + 1) % words.length);
        } else {
          setSubIndex((prev) => prev - 1);
        }
      }
    }, direction === "forward" ? 90 : 50);

    return () => clearTimeout(timeout);
  }, [direction, index, prefersReducedMotion, subIndex, words]);

  const displayText = prefersReducedMotion ? words[0] : words[index].slice(0, subIndex);

  return (
    <span className={className} aria-live="polite">
      {displayText}
      <span className="ml-1 inline-block w-2 animate-pulse text-blue-600">|</span>
    </span>
  );
}
