"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { PointerEvent, ReactNode } from "react";

export function PointerDepth({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 120, damping: 24 });
  const y = useSpring(useMotionValue(0), { stiffness: 120, damping: 24 });
  if (reducedMotion) return <div className={className}>{children}</div>;
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - bounds.left) / bounds.width - .5) * 14);
    y.set(((event.clientY - bounds.top) / bounds.height - .5) * 10);
  };
  const reset = () => { x.set(0); y.set(0); };
  return <motion.div className={className} onPointerMove={handlePointerMove} onPointerLeave={reset} style={{ x, y }}>{children}</motion.div>;
}
