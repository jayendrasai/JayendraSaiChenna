"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: .8 });
  const reducedMotion = useReducedMotion();
  const numeric = Number.parseInt(value, 10);
  const suffix = value.slice(String(numeric).length);
  const [count, setCount] = useState(reducedMotion ? numeric : 0);

  useEffect(() => {
    if (!inView || reducedMotion) { if (reducedMotion) setCount(numeric); return; }
    const startedAt = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - startedAt) / 800, 1);
      setCount(Math.round(numeric * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [inView, numeric, reducedMotion]);

  return <motion.span ref={ref} initial={reducedMotion ? false : { opacity: 0 }} animate={inView || reducedMotion ? { opacity: 1 } : { opacity: 0 }}>{count}{suffix}</motion.span>;
}
