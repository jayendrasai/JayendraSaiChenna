"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience, siteContent } from "@/constants/site";
import { TimelineItem } from "@/components/common/timeline-item";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 80%", "end 30%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  return <section id="experience" ref={sectionRef} className="section-anchor section-space border-t border-border bg-surface/60"><div className="page-shell"><div className="mb-14 grid gap-6 border-t border-border pt-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><span className="font-mono text-[.6875rem] uppercase tracking-[.16em] text-accent">{siteContent.experience.sectionLabel}</span><div><h2 className="text-5xl font-semibold leading-[.9] tracking-[-.075em] sm:text-6xl">{siteContent.experience.heading}</h2><p className="mt-5 max-w-md text-base leading-7 text-foreground/60">{siteContent.experience.description}</p></div></div><div className="relative pl-2"><div className="absolute bottom-0 left-0 top-0 w-px bg-border"><motion.div className="h-full w-full origin-top bg-accent" style={{ scaleY: progress }} /></div><div className="grid gap-10">{experience.map((item) => <TimelineItem key={`${item.company}-${item.role}`} item={item} />)}</div></div></div></section>;
}
