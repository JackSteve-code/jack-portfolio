const projects = [
  // ... (Keep your existing projects array exactly as it is, except removing the AI blog one)

  // Replace the removed AI blog with these two, in the same style/trend

  {
    title: "API Governance through Documentation",
    subtitle: "Live Project",
    description: "A comprehensive framework for modern API governance in 2026's polyglot, AI-augmented ecosystems. Documentation evolves from static reference to dynamic, enforceable infrastructure—serving as the single source of truth (SSOT) for contracts, styles, versioning, security, and lifecycle management. The approach integrates automated linting, schema validation, breaking-change detection, and observability to enforce standards across REST, GraphQL, gRPC, and event-driven services. Special emphasis is placed on AI-specific requirements to minimize hallucinations and ensure reliable agent consumption. Built to scale governance in complex microservices and AI-driven development environments with CI/CD automation and real-time metrics.",
    bullets: [
      "Five pillars: Contract, Style, Version, Security & Lifecycle Governance",
      "Documentation as SSOT with OpenAPI/AsyncAPI/JSON Schema enforcement",
      "Automated workflows, polyglot consistency & AI hallucination mitigation"
    ],
    tech: [
      { name: "NEXT.JS", icon: "N" },
      { name: "REACT", icon: "⚛️" },
      { name: "TYPESCRIPT", icon: "TS" },
      { name: "TAILWIND", icon: "🌬️" },
      { name: "VERCEL", icon: "▲" }
    ],
    link: "https://jacksteve-code.github.io/MY-API-GOVERNANCE/"
  },

  {
    title: "AI-First Documentation | AI Docs",
    subtitle: "Live Project",
    description: "A paradigm-shifting guide and framework for creating API documentation optimized for direct consumption by Large Language Models, autonomous agents, and AI copilots. Traditional human-centric docs lead to hallucinations, incorrect integrations, and production failures when ingested by AI systems. This work defines deterministic, schema-first, redundancy-heavy, example-centric structures using OpenAPI 3.1+ and JSON Schema to ensure reliable, unambiguous interpretation. It covers explicit typing, comprehensive error coverage, version pinning, deprecation clarity, and machine-parseable formatting to enable safe, high-fidelity code generation at scale in AI-driven development workflows.",
    bullets: [
      "Schema-first with OpenAPI/JSON Schema leading every section",
      "Redundant, explicit constraints & 3–7 varied examples per endpoint",
      "Deterministic language, full error coverage & AI hallucination prevention"
    ],
    tech: [
      { name: "NEXT.JS", icon: "N" },
      { name: "REACT", icon: "⚛️" },
      { name: "TYPESCRIPT", icon: "TS" },
      { name: "TAILWIND", icon: "🌬️" },
      { name: "VERCEL", icon: "▲" }
    ],
    link: "https://jacksteve-code.github.io/MY-AI-WORKS/"
  },

  {
    title: "Scalable LLMOps Pipeline",
    subtitle: "Live Project",
    description: "A production-grade architecture designed for deploying Large Language Models at scale while maintaining rigorous latency standards. The pipeline orchestrates model routing, intelligent caching, and comprehensive cost-optimization strategies across distributed GPU environments. I emphasize observability through deep integration with Langfuse and LangChain for real-time monitoring. This system simplifies the complex lifecycle of LLM development, from initial prompt engineering to high-throughput inference serving. Built for reliability, it ensures that production AI services remain resilient, performant, and cost-effective under heavy load, providing engineers with precise data-driven insights into every inference request processed by the underlying infrastructure.",
    bullets: ["Full lifecycle from prompt engineering to observability", "Multi-model routing, caching & cost optimization", "LangChain + vLLM + Langfuse integration"],
    tech: [{ name: "NEXT.JS", icon: "N" }, { name: "REACT", icon: "⚛️" }, { name: "TYPESCRIPT", icon: "TS" }, { name: "TAILWIND", icon: "🌬️" }, { name: "VERCEL", icon: "▲" }],
    link: "https://jacksteve-code.github.io/Scalable-llmop/"
  },
  // ... (and keep all your other remaining projects exactly as they were)
];

// The rest of your component (export default function Projects() { ... }) remains 100% unchanged