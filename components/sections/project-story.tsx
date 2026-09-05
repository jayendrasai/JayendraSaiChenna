"use client";

import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "motion/react";
import { projects, siteContent } from "@/constants/site";
import { ExternalLink } from "@/components/common/external-link";
import { ProjectStage } from "@/components/common/project-stage";

export function ProjectStory() {
  const storyRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28 });
  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(progress, "change", (latest) => setActiveIndex(Math.max(0, Math.min(projects.length - 1, Math.floor(latest * projects.length)))));

  const scrollToChapter = (index: number) => {
    if (!storyRef.current) return;
    window.scrollTo({ top: storyRef.current.offsetTop + window.innerHeight * index, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return <section id="projects" ref={storyRef} className="section-anchor border-y border-border">
    <div className="section-space page-shell"><div className="grid gap-8 border-t border-border pt-5 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><span className="font-mono text-[.6875rem] uppercase tracking-[.16em] text-accent">{siteContent.projects.sectionLabel}</span><p className="mt-10 max-w-[11ch] text-5xl font-semibold leading-[.9] tracking-[-.075em] sm:text-6xl">{siteContent.projects.heading}</p></div><p className="max-w-md text-lg leading-7 text-foreground/60">{siteContent.projects.description(projects.length)}</p></div></div>
    <div className="hidden lg:block" style={{ minHeight: `${Math.max(projects.length, 1) * 100}svh` }}><div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden"><div className="page-shell flex h-full items-center gap-12 py-10"><aside className="flex h-full w-44 shrink-0 flex-col justify-between py-4"><div><span className="font-mono text-[.625rem] uppercase tracking-[.16em] text-foreground/45">{siteContent.projects.chapterLabel}</span><div className="mt-8 grid gap-4">{projects.map((project, index) => <button key={project.title} type="button" onClick={() => scrollToChapter(index)} className={`group text-left transition-opacity ${activeIndex === index ? "opacity-100" : "opacity-35 hover:opacity-70"}`}><span className="font-mono text-[.625rem] text-accent">0{index + 1}</span><span className="mt-1 block text-sm font-medium leading-tight">{project.title}</span>{activeIndex === index ? <motion.span layoutId="project-chapter-rule" className="mt-2 block h-0.5 w-8 bg-accent" transition={{ duration: reducedMotion ? 0 : .25 }} /> : null}</button>)}</div></div><div className="font-mono text-[.625rem] uppercase tracking-[.14em] text-foreground/45">{siteContent.projects.scrollLabel}</div></aside><div className="relative min-w-0 flex-1"><AnimatePresence mode="wait" initial={false}>{<motion.div key={projects[activeIndex].title} initial={reducedMotion ? false : { opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: -26 }} transition={{ duration: reducedMotion ? 0 : .4, ease: [0.22, 1, 0.36, 1] }} className="grid items-center gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(19rem,.75fr)]"><ProjectStage project={projects[activeIndex]} /><ProjectCopy project={projects[activeIndex]} index={activeIndex} /></motion.div>}</AnimatePresence></div></div></div></div>
    <div className="lg:hidden"><div className="sticky top-16 z-20 border-y border-border bg-background/95 backdrop-blur-md"><div className="page-shell flex gap-5 overflow-x-auto py-3">{projects.map((project, index) => <a key={project.title} href={`#project-mobile-${index}`} className="shrink-0 font-mono text-[.625rem] uppercase tracking-[.13em] text-foreground/55">0{index + 1} <span className="ml-1">{project.title}</span></a>)}</div></div><div className="page-shell grid gap-24 py-20 sm:gap-28 sm:py-28">{projects.map((project, index) => <article id={`project-mobile-${index}`} key={project.title} className="scroll-mt-32"><div className="mb-5 flex items-end justify-between"><span className="font-mono text-[.625rem] uppercase tracking-[.16em] text-accent">0{index + 1} / {siteContent.projects.mobileChapterLabel}</span><ArrowDown aria-hidden="true" className="size-4 text-accent" /></div><ProjectStage project={project} /><ProjectCopy project={project} index={index} /></article>)}</div></div>
  </section>;
}

function ProjectCopy({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return <div className="pt-1"><p className="font-mono text-[.625rem] uppercase tracking-[.16em] text-foreground/45">0{index + 1} / {project.eyebrow}</p><h3 className="mt-4 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">{project.title}</h3><p className="mt-5 text-base leading-7 text-foreground/60">{project.problem}</p><div className="mt-7 border-t border-border pt-5"><p className="font-mono text-[.625rem] uppercase tracking-[.15em] text-foreground/45">{siteContent.projects.engineeringDecisionsLabel}</p><ul className="mt-4 grid gap-3 text-sm leading-6 text-foreground/65">{project.decisions.map((decision) => <li key={decision} className="border-l-2 border-accent pl-3">{decision}</li>)}</ul></div><div className="mt-7 grid gap-4 border-t border-border pt-5"><div><p className="font-mono text-[.625rem] uppercase tracking-[.15em] text-foreground/45">{siteContent.projects.impactLabel}</p><div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">{project.impact.map((item) => <span key={item}>{item}</span>)}</div></div><div className="flex flex-wrap gap-5 pt-2"><ExternalLink href={project.github}>{siteContent.projects.githubLabel}</ExternalLink>{project.live ? <ExternalLink href={project.live}>{siteContent.projects.liveLabel}</ExternalLink> : null}</div></div></div>;
}
