import type { ExperienceItem as ExperienceItemType } from "@/constants/site";
import { Reveal } from "@/components/common/reveal";

export function TimelineItem({ item }: { item: ExperienceItemType }) {
  return <Reveal className="relative pl-6 sm:pl-8">
    <span className="absolute -left-[5px] top-1 size-2.5 rounded-full border-2 border-surface bg-accent ring-1 ring-accent" aria-hidden="true" />
    <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
      <div><h3 className="text-xl font-semibold tracking-tight">{item.role}</h3><p className="mt-1 text-base text-muted">{item.company}</p></div>
      <span className="eyebrow">{item.period}</span>
    </div>
    <p className="mt-6 max-w-2xl text-base leading-7 text-muted">{item.summary}</p>
    <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-6 text-muted">{item.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden="true" />{highlight}</li>)}</ul>
    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 font-mono text-[.625rem] uppercase tracking-[.1em] text-black/45">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
  </Reveal>;
}
