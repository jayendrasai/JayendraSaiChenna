import Image from "next/image";
import type { Project } from "@/constants/site";

export function ProjectStage({ project }: { project: Project }) {
  return <div className={`project-stage project-stage--${project.stage} relative min-h-[20rem] overflow-hidden p-5 sm:min-h-[25rem] sm:p-8`} aria-label={`${project.title} architecture visual`}>
    <div className="absolute left-5 top-5 font-mono text-[.625rem] uppercase tracking-[.16em] text-foreground/45 sm:left-8 sm:top-8">{project.eyebrow}</div>
    {project.architectureImage ? <Image src={project.architectureImage.src} alt={project.architectureImage.alt} width={project.architectureImage.width} height={project.architectureImage.height} sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 48vw, 100vw" className="mx-auto block h-auto max-h-[16rem] w-full object-contain sm:max-h-[21rem]" /> : null}
    {!project.architectureImage && project.stage === "retrieval" ? <RetrievalStage /> : null}
    {!project.architectureImage && project.stage === "evaluation" ? <EvaluationStage /> : null}
    {!project.architectureImage && project.stage === "feature-store" ? <FeatureStoreStage /> : null}
    {!project.architectureImage && project.stage === "nlp" ? <NlpStage /> : null}
  </div>;
}

function RetrievalStage() {
  return <div className="flex h-full flex-col justify-center gap-4 pt-8"><div className="stage-node stage-node--query">QUERY / SUPPORT TICKET</div><div className="stage-connector" /><div className="grid grid-cols-3 gap-2"><div className="stage-node">SEMANTIC</div><div className="stage-node stage-node--active">HYBRID RETRIEVAL</div><div className="stage-node">BM25</div></div><div className="stage-connector stage-connector--short" /><div className="stage-node stage-node--answer">GROUNDED ANSWER <span className="ml-auto">88% faithful</span></div></div>;
}

function EvaluationStage() {
  return <div className="flex h-full flex-col justify-center gap-5 pt-8"><div className="flex items-end justify-between"><span className="font-mono text-xs uppercase tracking-[.14em] text-foreground/45">MODEL BENCHMARK</span><span className="font-mono text-xs text-foreground/45">v.04 / CI</span></div><div className="grid grid-cols-5 gap-1">{[".88", ".91", ".76", ".83", ".94", ".79", ".86", ".72", ".89", ".81", ".92", ".84", ".78", ".95", ".87"].map((value, index) => <div key={`${value}-${index}`} className={`stage-score ${index % 5 === 3 ? "stage-score--hot" : ""}`}>{value}</div>)}</div><div className="flex justify-between border-t border-foreground/15 pt-3 font-mono text-[.625rem] uppercase tracking-[.12em] text-foreground/45"><span>faithfulness</span><span>relevancy</span><span>bertscore</span></div></div>;
}

function FeatureStoreStage() {
  return <div className="flex h-full flex-col justify-center gap-5 pt-8"><div className="flex items-center gap-2"><span className="stage-pulse" /><span className="font-mono text-xs uppercase tracking-[.14em] text-foreground/55">EVENT STREAM / LIVE</span></div><div className="stage-stream"><span /><span /><span /><span /><span /></div><div className="grid grid-cols-2 gap-3"><div className="stage-storage stage-storage--hot"><strong>REDIS</strong><small>online serving</small><b>12 ms</b></div><div className="stage-storage"><strong>POSTGRESQL</strong><small>durable history</small><b>source of truth</b></div></div></div>;
}

function NlpStage() {
  return <div className="flex h-full flex-col justify-center gap-5 pt-8"><div className="stage-node stage-node--queue"><span>QUEUE</span><span className="ml-auto">RabbitMQ</span></div><div className="grid grid-cols-3 gap-2"><div className="stage-worker">CELERY<br /><small>worker 01</small></div><div className="stage-worker stage-worker--active">NLP<br /><small>inference</small></div><div className="stage-worker">CELERY<br /><small>worker 02</small></div></div><div className="flex gap-2"><div className="stage-result">SENTIMENT</div><div className="stage-result">NER</div><div className="stage-result">PERSIST</div></div></div>;
}
