export const RESUME_URL =
  "https://drive.google.com/file/d/1-jvVgEdkHUyUiM2hP1zoliZxzIMl0Fu8/view?usp=sharing"; // Add your Google Drive link here

export const siteConfig = {
  name: "Jayendra Sai Chenna", //[cite: 1]
  title: "Jayendra Sai Chenna — Software Engineer", //[cite: 1]
  subtitle: "Full-Stack Developer · Backend Systems · AI-Driven Applications", //[cite: 1]
  heroSubheadline:
    "I build scalable full-stack and real-time systems using modern architectures, with a strong interest in backend infrastructure, distributed systems, and AI applications.", //[cite: 1]
  description:
    "Computer Science undergraduate with strong foundations in data structures, algorithms, operating systems, and databases.", //[cite: 1]
  url: "https://jayendrasaichenna.com",
  email: "chennas218@gmail.com", //[cite: 1]
  phone: "+91 9392470689", //[cite: 1]
  location: "Andhra Pradesh, India",
  education: "B.Tech in Computer Science & Engineering · 2023–2027", //[cite: 1]
  institution: "Aditya College of Engineering & Technology, Surampalem", //[cite: 1]
  cgpa: "8.35 / 10", //[cite: 1]
  keywords: [
    "Jayendra Sai Chenna",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Systems",
    "AI Applications",
    "Distributed Systems",
    "RAG"
  ]
} as const;

export const siteInitials = siteConfig.name
  .trim()
  .split(/\s+/)
  .map((part) => part[0])
  .join("")
  .slice(0, 3)
  .toUpperCase();

export const siteContent = {
  hero: {
    eyebrow: "01 / engineering portfolio",
    focusLabel: "Focus",
    focusValue: "AI infrastructure & backend systems",
    locationLabel: "Based in",
    scrollLabel: "Scroll to explore",
    scrollValue: "Selected systems",
    primaryAction: "View projects",
    secondaryAction: "Resume"
  },
  about: {
    sectionLabel: "02 / Context",
    contextLabel: "The person behind the systems",
    leadSuffix: "I like working where model behavior, data systems, and production constraints meet.",
    body: "My work spans retrieval-augmented generation, LLM evaluation, event-driven architectures, authentication systems, and machine learning infrastructure. I care about clear boundaries, measurable behavior, and systems that stay understandable as they grow.",
    workingOnLabel: "Working on",
    workingOn: "Generative AI, backend engineering, distributed systems",
    contactLabel: "Contact"
  },
  expertise: {
    sectionLabel: "03 / Capability index",
    heading: "Tools for serious systems.",
    description: "A working map of the languages, services, and infrastructure behind the projects."
  },
  projects: {
    sectionLabel: "04 / Selected systems",
    heading: "Built to be explored.",
    description: (count: number) => `${count} systems, ${count} different constraints. Scroll through the architecture, decisions, and outcomes behind each one.`,
    chapterLabel: "Project chapters",
    scrollLabel: "Scroll / reveal",
    mobileChapterLabel: "chapter",
    engineeringDecisionsLabel: "Engineering decisions",
    impactLabel: "Impact",
    githubLabel: "GitHub",
    liveLabel: "Live system"
  },
  experience: {
    sectionLabel: "05 / Experience",
    heading: "Shipping with a team.",
    description: "Production experience grounded in security, API design, and the software delivery lifecycle."
  },
  achievements: {
    sectionLabel: "06 / Proof rail",
    heading: "Evidence over adjectives.",
    description: "Consistent practice across open source, fundamentals, and applied AI engineering."
  },
  contact: {
    sectionLabel: "07 / Open channel",
    heading: "Let’s build useful systems.",
    description: "Open to thoughtful teams working on AI products, backend platforms, and distributed systems.",
    resumeAction: "Open resume"
  },
  recovery: {
    systemFallback: "System fallback",
    routeMonitor: "Route monitor",
    error: {
      code: "500 / graceful degradation",
      heading: "The system hit an unexpected branch.",
      description: "The page could not complete its current operation, but the rest of the architecture is still standing.",
      nodeLabel: "Fallback node",
      nodeAction: "retry",
      retryAction: "Retry operation",
      reportAction: "Report issue",
      footerStatus: "Recovery mode active"
    },
    notFound: {
      code: "404 / route not found",
      heading: "This route drifted out of the system.",
      description: "Nothing is listening at this address right now. Let’s route you back to something useful.",
      nodeLabel: "Navigation node",
      nodeAction: "route",
      footerStatus: "No route, no dead end"
    },
    returnHome: "Return home",
    viewProjects: "View projects",
    suggestedNextHop: "Suggested next hop",
    projectIndexOnline: "The project index is still online.",
    snake: {
      ariaLabel: "A small Snake game while the system recovers",
      protocol: "Recovery protocol",
      heading: "Snake the signal home.",
      controls: "Arrows / WASD to move",
      tryAgain: "Try again",
      restart: "Restart"
    }
  },
  footer: {
    systemsLabel: "dependable systems"
  }
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-username" }, //[cite: 1]
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" }, //[cite: 1]
  { label: "Email", href: "mailto:chennas218@gmail.com" } //[cite: 1]
] as const;

export type ExpertiseGroup = { category: string; description: string; items: string[] };

export const expertise: ExpertiseGroup[] = [
  {
    category: "Languages",
    description: "Core programming languages for application and system development.",
    items: ["C", "Python", "Java", "JavaScript", "TypeScript"] //[cite: 1]
  },
  {
    category: "Backend & Systems",
    description: "Building scalable APIs, real-time communication, and managing background tasks.",
    items: ["Node.js", "Express.js", "FastAPI", "WebSockets", "JWT", "REST APIs", "MySQL", "Redis", "Pydantic", "Celery"] //[cite: 1]
  },
  {
    category: "Frontend",
    description: "Creating responsive and dynamic user interfaces.",
    items: ["React.js", "HTML", "Tailwind CSS", "Vite"] //[cite: 1]
  },
  {
    category: "AI Tools & Models",
    description: "Integrating and interacting with large language models and search platforms.",
    items: ["Claude", "Gemini", "Antigravity", "Groq Cloud", "OpenRouter", "BGE-M3", "Cohere Rerank"] //[cite: 1]
  },
  {
    category: "DevOps, Cloud & Testing",
    description: "Deploying, containerizing, and testing applications reliably.",
    items: ["AWS (S3, EC2, VPC, RDS)", "Docker", "Kubernetes", "CI/CD Pipelines", "GitHub Actions", "Nginx", "Pytest", "pytest-asyncio", "httpx", "JUnit", "pip-audit"] //[cite: 1]
  }
];

export type ProjectArchitectureImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  title: string;
  eyebrow: string;
  problem: string;
  architecture: string[];
  architectureImage?: ProjectArchitectureImage;
  decisions: string[];
  stage: "retrieval" | "evaluation" | "feature-store" | "nlp";
  technologies: string[];
  impact: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Resume Audit Platform", //[cite: 1]
    eyebrow: "Containerized SaaS on AWS", //[cite: 1]
    problem: "Need for a stateless AI parsing system combined with async video pipelines.", //[cite: 1]
    architecture: ["Deployed a containerized SaaS on AWS featuring stateless AI parsing and an async FFmpeg/Celery video pipeline."], //[cite: 1]
    architectureImage: {
      src: "/projects/ai-resume-audit/phase2-system-architecture.svg",
      alt: "AI Resume Audit Platform architecture showing a React and Vite client connected to Nginx, FastAPI, Redis, Celery, AWS S3, Groq, OpenRouter, and PostgreSQL.",
      width: 680,
      height: 620
    },
    decisions: ["Engineered PostgreSQL rate-limiting and Redis idempotency locks to prevent Razorpay transaction race conditions."], //[cite: 1]
    stage: "nlp",
    technologies: ["React", "TypeScript", "FastAPI", "Celery", "Redis", "PostgreSQL", "AWS", "Docker", "Nginx", "FFmpeg", "PyMuPDF"], //[cite: 1]
    impact: ["Stateless AI parsing", "Idempotency locks for transactions", "Async video processing"], //[cite: 1]
    github: "https://github.com/your-username",
    featured: true
  },
  {
    title: "Advanced RAG Platform", //[cite: 1]
    eyebrow: "Reciprocal Rank Fusion", //[cite: 1]
    problem: "Multi-tenant RAG applications require robust isolation and verified groundedness.", //[cite: 1]
    architecture: ["Built a multi-tenant RAG backend using hybrid retrieval and cross-encoder reranking."], //[cite: 1]
    architectureImage: {
      src: "/projects/advanced-rag/rag-platform-architecture.png",
      alt: "Advanced RAG Platform architecture showing a client flowing through FastAPI routes, services, and pipelines to isolated PostgreSQL, Qdrant, Elasticsearch, and Redis stores.",
      width: 2720,
      height: 1680
    },
    decisions: ["Implemented strict Postgres RLS data isolation and a fail-closed LLM critic for groundedness verification."], //[cite: 1]
    stage: "retrieval",
    technologies: ["FastAPI", "PostgreSQL", "Qdrant", "Elasticsearch", "Redis", "Docker", "Claude", "Gemma-4-31b"], //[cite: 1]
    impact: ["Hybrid retrieval", "Strict data isolation", "Groundedness verification"], //[cite: 1]
    github: "https://github.com/your-username",
    featured: true
  },
  {
    title: "Real-Time AI Sentiment Analysis", //[cite: 1]
    eyebrow: "Event-driven analytics", //[cite: 1]
    problem: "Analyzing sentiment dynamically requires real-time, fault-tolerant data pipelines.", //[cite: 1]
    architecture: ["Designed a real-time, event-driven sentiment analytics system using DistilBERT/RoBERTa."], //[cite: 1]
    architectureImage: {
      src: "/projects/real-time-sentiment/architecture.svg",
      alt: "Real-Time AI Sentiment Analysis architecture showing a React dashboard connected to Node.js, WebSockets, Redis Streams, Python inference, and PostgreSQL.",
      width: 960,
      height: 560
    },
    decisions: ["Used fault-tolerant Redis Streams pipelines and live WebSocket dashboards with containerized microservices."], //[cite: 1]
    stage: "feature-store",
    technologies: ["React", "Node.js", "Python", "Redis Streams", "PostgreSQL", "WebSockets", "Docker"], //[cite: 1]
    impact: ["Real-time dashboards", "Event-driven pipelines", "Containerized deployment"], //[cite: 1]
    github: "https://github.com/your-username",
    featured: true
  },
  {
    title: "Real-Time Chat Application", //[cite: 1]
    eyebrow: "Secure messaging", //[cite: 1]
    problem: "Messaging apps require real-time synchronization and secure communication boundaries.", //[cite: 1]
    architecture: ["Built a secure real-time chat app with end-to-end encryption."], //[cite: 1]
    architectureImage: {
      src: "/projects/real-time-chat/architecture.svg",
      alt: "Real-Time Chat Application architecture showing a React client connected through Express and WebSockets to Libsodium encryption, private channels, and MongoDB Atlas.",
      width: 960,
      height: 560
    },
    decisions: ["Included key exchange, private messaging, authentication, and a responsive UI."], //[cite: 1]
    stage: "nlp",
    technologies: ["React", "Express.js", "MongoDB Atlas", "WebSockets", "Libsodium"], //[cite: 1]
    impact: ["End-to-end encryption", "Key exchange", "Private messaging"], //[cite: 1]
    github: "https://github.com/your-username",
    featured: false
  }
];

export type ExperienceItem = { role: string; company: string; period: string; summary: string; highlights: string[]; technologies: string[] };

export const experience: ExperienceItem[] = [
  {
    role: "Android Development Intern",
    company: "Andhra Pradesh State Skill Development Corporation (APSSDC)", //[cite: 1]
    period: "May 2025 - Jul 2025", //[cite: 1]
    summary: "Developed and tested a functional Android application from scratch over 8 weeks.", //[cite: 1]
    highlights: ["Integrated 5 core features and 7+ responsive UI screens using Java/XML."], //[cite: 1]
    technologies: ["Java", "XML", "Android"] //[cite: 1]
  }
];

export const achievements = [
  { value: "250+", label: "Competitive Coding Problems", detail: "Problems solved on LeetCode & GeeksforGeeks" }, //[cite: 1]
  { value: "3", label: "Top HackerRank Badges", detail: "Achieved top badges in MySQL, Java, and Python on HackerRank" }, //[cite: 1]
  { value: "4", label: "Core Projects", detail: "Built scalable AI platforms, RAG systems, and real-time messaging apps" } //[cite: 1]
] as const;
