export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Cloud & Distributed Systems" | "AI & LLM Infrastructure" | "Full Stack Engineering" | "Design Architecture";
  year: string;
  featured: boolean;
  spotlightVariant?: "violet" | "magenta" | "orange" | "coral";
  description: string;
  impact: string;
  metrics: { label: string; value: string };
  tags: string[];
  client: string;
  award?: string;
  githubUrl?: string;
  liveUrl?: string;
  gridSpan: "col-span-12 lg:col-span-8" | "col-span-12 lg:col-span-4" | "col-span-12 lg:col-span-6" | "col-span-12";
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Alex Rivera",
    role: "Full Stack Architect · Cloud & AI Systems",
    location: "San Francisco / Remote",
    status: "Available for Q3/Q4 Engineering Engagements",
    bio: "Architecting high-scale distributed backends, edge cloud infrastructure, and production AI/LLM pipelines — wrapped in precision, artboard-grade user interfaces.",
    socials: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      email: "alex@rivera.design",
    },
    metrics: [
      { label: "Daily Active AI Queries", value: "18.4M+" },
      { label: "P99 Edge Latency", value: "<8.2ms" },
      { label: "Distributed Microservices", value: "60+ Svc" },
      { label: "Cloud Infra Uptime", value: "99.99%" },
    ],
  },
  projects: [
    {
      id: "nexus-rag",
      title: "Nexus Neural Vector Engine",
      subtitle: "Hybrid Search & Distributed RAG Pipeline",
      category: "AI & LLM Infrastructure",
      year: "2025",
      featured: true,
      spotlightVariant: "violet",
      description:
        "High-throughput vector indexing and hybrid dense-sparse retrieval system with dynamic semantic reranking and sub-8ms cosine distance lookup over 50M embedding vectors.",
      impact: "Reduced hallucination rates by 44% while scaling semantic search throughput to 12,000 queries/sec.",
      metrics: { label: "P99 Vector Search", value: "7.8ms" },
      tags: ["Python", "Rust", "Qdrant / pgvector", "Embeddings", "FastAPI", "Next.js 15"],
      client: "Cortex AI",
      award: "Featured on Hacker News #1",
      gridSpan: "col-span-12 lg:col-span-8",
    },
    {
      id: "aether-mesh",
      title: "Aether Edge Proxy & Mesh",
      subtitle: "Multi-Cloud Serverless Traffic Orchestration",
      category: "Cloud & Distributed Systems",
      year: "2024",
      featured: true,
      spotlightVariant: "orange",
      description:
        "Global edge routing fabric deployed across 280+ POPs with automated failover, intelligent geo-distributed caching, and WebAssembly request middleware.",
      impact: "Handled 4.8 billion monthly requests with zero downtime during multi-region datacenter blackouts.",
      metrics: { label: "Edge Throughput", value: "4.8B req/mo" },
      tags: ["Cloudflare Workers", "Rust (Wasm)", "Terraform", "Kubernetes", "gRPC"],
      client: "Stratos Cloud",
      award: "Cloud Architecture Showcase",
      gridSpan: "col-span-12 lg:col-span-4",
    },
    {
      id: "agentic-os",
      title: "Synthex Multi-Agent Fabric",
      subtitle: "Autonomous LLM Reasoning & Tool Orchestration",
      category: "AI & LLM Infrastructure",
      year: "2024",
      featured: true,
      spotlightVariant: "magenta",
      description:
        "Event-driven multi-agent orchestration runtime with persistent graph memory, structured JSON schema validation, and automatic sandboxed code execution.",
      impact: "Automated 80,000+ complex multi-step data pipelines daily with deterministic error recovery.",
      metrics: { label: "Agent Success Rate", value: "98.4%" },
      tags: ["LangGraph", "TypeScript", "Redis Streams", "OpenAI / Claude APIs", "Docker"],
      client: "Autonomous Systems Lab",
      award: "AI Systems Engineering Award",
      gridSpan: "col-span-12 lg:col-span-4",
    },
    {
      id: "helios-stream",
      title: "Helios Real-Time Stream Engine",
      subtitle: "Distributed Event Telemetry & Real-Time Analytics",
      category: "Full Stack Engineering",
      year: "2024",
      featured: true,
      spotlightVariant: "coral",
      description:
        "End-to-end event stream ingest and visualization platform ingesting 250k messages/sec via Apache Kafka and ClickHouse, paired with an ultra-responsive Next.js live telemetry cockpit.",
      impact: "Transformed batch analytics from 4-hour delay to sub-second streaming insights.",
      metrics: { label: "Ingest Velocity", value: "250k evt/s" },
      tags: ["Apache Kafka", "ClickHouse", "Go Backend", "Next.js 15 RSC", "WebSockets"],
      client: "Datapoint Systems",
      award: "Production Scale Benchmark",
      gridSpan: "col-span-12 lg:col-span-8",
    },
    {
      id: "chroma-fabric",
      title: "Chroma Design System Compiler",
      subtitle: "AST Token Architecture & Component Ecosystem",
      category: "Design Architecture",
      year: "2023",
      featured: false,
      description:
        "Zero-runtime design token distribution compiler with mathematical WCAG AAA contrast verification, cross-framework synchronization (React, Tailwind v4, iOS, Android).",
      impact: "Adopted across 42 engineering squads, saving over 300 engineering hours per quarter.",
      metrics: { label: "Sync Latency", value: "0.24s" },
      tags: ["Design Systems", "TypeScript", "Tailwind v4", "AST Compilers", "Storybook"],
      client: "Voxel Tech",
      gridSpan: "col-span-12 lg:col-span-6",
    },
    {
      id: "prism-gateway",
      title: "Prism LLM Semantic Gateway",
      subtitle: "Semantic Caching, Firewall & Cost Optimizer",
      category: "Full Stack Engineering",
      year: "2023",
      featured: false,
      description:
        "Smart proxy gateway sitting in front of foundational LLM providers, providing semantic prompt deduplication, streaming token rate-limiting, and PII sanitization.",
      impact: "Reduced monthly LLM token expenditure by 52% while accelerating repeat response times by 8×.",
      metrics: { label: "Cost Reduction", value: "52% Saved" },
      tags: ["Redis Cache", "FastAPI", "Vector Similarity", "PostgreSQL", "Docker"],
      client: "Enterprise Scale Corp",
      gridSpan: "col-span-12 lg:col-span-6",
    },
  ] as Project[],
  stack: [
    {
      category: "Backend & Distributed Systems",
      items: ["Node.js / Bun", "Rust & Go", "Python (FastAPI)", "PostgreSQL / pgvector", "Redis & Redis Streams", "Apache Kafka", "ClickHouse", "GraphQL / gRPC"],
    },
    {
      category: "Cloud & DevOps Infrastructure",
      items: ["Kubernetes & Docker", "AWS (ECS, Lambda, S3, RDS)", "Cloudflare Workers & Edge", "Terraform & IaC", "CI/CD (GitHub Actions)", "Prometheus & Grafana"],
    },
    {
      category: "AI & Machine Learning",
      items: ["LLM Orchestration (LangChain/LangGraph)", "RAG & Vector Embeddings", "Semantic Caching", "Model Fine-tuning & Eval", "Function Calling / Structured JSON", "Prompt Optimization"],
    },
    {
      category: "Frontend & Design Architecture",
      items: ["Next.js 15 (RSC / App Router)", "React 19 & TypeScript", "Tailwind CSS v4", "Motion / Physics UI", "Design Systems & Token AST", "WCAG AAA Accessibility"],
    },
  ],
  career: [
    {
      role: "Lead Full Stack & AI Systems Architect",
      company: "Cortex Cloud Systems",
      period: "2024 — Present",
      description: "Leading core cloud infrastructure, distributed AI retrieval pipelines, and high-frequency real-time web telemetry systems serving millions of daily requests.",
      tags: ["Distributed Systems", "Cloudflare Edge", "Vector DBs", "Next.js 15"],
    },
    {
      role: "Senior Cloud & Backend Engineer",
      company: "Stratos Networks",
      period: "2022 — 2024",
      description: "Architected multi-region serverless traffic mesh on Kubernetes & AWS. Engineered sub-millisecond edge middleware in Rust and Go.",
      tags: ["Kubernetes", "Rust", "Kafka", "PostgreSQL"],
    },
    {
      role: "Full Stack Design Engineer",
      company: "Voxel Design Infrastructure",
      period: "2020 — 2022",
      description: "Engineered scalable design system tooling, developer platforms, and high-performance web applications across multi-disciplinary product squads.",
      tags: ["TypeScript", "Design Systems", "Cloud Architecture", "Next.js"],
    },
  ],
};
