"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import type { ExpertiseGroup } from "@/constants/site";

export function CapabilityIndex({ groups }: { groups: ExpertiseGroup[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const active = groups[activeIndex];
  return <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"><LayoutGroup id="capability-index"><div className="border-t border-border">{groups.map((group, index) => <button key={group.category} type="button" onClick={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} aria-pressed={activeIndex === index} className={`relative flex w-full items-center justify-between border-b border-border py-5 text-left transition-opacity ${activeIndex === index ? "opacity-100" : "opacity-40 hover:opacity-80"}`}><span><span className="mr-4 font-mono text-[.625rem] text-accent">0{index + 1}</span><span className="text-xl font-medium tracking-[-.03em] sm:text-2xl">{group.category}</span></span>{activeIndex === index ? <motion.span layoutId="capability-marker" className="h-2 w-2 rounded-full bg-accent" transition={{ duration: reducedMotion ? 0 : .2 }} /> : null}</button>)}</div></LayoutGroup><div className="min-h-[18rem] border-t border-border pt-5"><AnimatePresence mode="wait" initial={false}><motion.div key={active.category} initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? undefined : { opacity: 0, y: -14 }} transition={{ duration: reducedMotion ? 0 : .28 }}><p className="max-w-lg text-2xl font-medium leading-tight tracking-[-.04em] sm:text-3xl">{active.description}</p><div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5 sm:grid-cols-3">{active.items.map((item, index) => <motion.span key={item} initial={reducedMotion ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reducedMotion ? 0 : index * .025 }} className="text-sm text-black/65">{item}</motion.span>)}</div></motion.div></AnimatePresence></div></div>;
}
