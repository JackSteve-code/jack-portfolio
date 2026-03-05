import React from 'react';

const projects = [
  {
    title: "Scalable LLMOps Pipeline",
    description: "A production-grade architecture designed for deploying Large Language Models at scale while maintaining rigorous latency standards. The pipeline orchestrates model routing, intelligent caching, and comprehensive cost-optimization strategies across distributed GPU environments.",
    bullets: [
      "Lead Developer: Designed and implemented the full end-to-end pipeline",
      "Full lifecycle from prompt engineering to observability",
      "Multi-model routing, caching & cost optimization",
      "LangChain + vLLM + Langfuse integration"
    ],
    tech: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND", "VERCEL"],
    link: "https://jacksteve-code.github.io/Scalable-llmop/"
  },
  {
    title: "AI Infrastructure & Compute Optimization",
    description: "This project provides a comprehensive technical blueprint for architecting high-performance, cost-efficient AI training and inference environments. We dive deep into GPU/TPU resource management, model quantization, and mixed-precision training techniques.",
    bullets: [
      "Lead Developer: Architected the optimization strategies and benchmarks",
      "GPU/TPU optimization & parallelism strategies",
      "Model quantization, pruning & mixed precision",
      "40% faster training • 35% lower cloud cost"
    ],
    tech: ["PYTORCH", "VLLM", "LANGCHAIN", "REDIS", "GROQ"],
    link: "https://jacksteve-code.github.io/AI-Infrastructure-and-compute-optimization/"
  },
  {
    title: "Federated Learning Production Blueprint",
    description: "A compliance-ready framework enabling privacy-first, distributed AI development across regulated industries. Secure aggregation and differential privacy mitigate risks while supporting cross-silo and cross-device deployments.",
    bullets: [
      "Lead Developer: Built the secure aggregation core and compliance layers",
      "Secure aggregation & differential privacy",
      "Cross-silo and cross-device deployment",
      "GDPR & EU AI Act ready architecture"
    ],
    tech: ["PYTORCH", "VLLM", "LANGCHAIN", "REDIS", "GROQ"],
    link: "https://jacksteve-code.github.io/federated-blueprint/"
  },
  {
    title: "Enterprise API Governance",
    description: "A robust framework for managing API lifecycles with an emphasis on security, rate limiting, and automated documentation. Designed to ensure consistency and compliance across microservices in high-traffic environments.",
    bullets: [
      "Lead Developer: Designed the governance model and enforcement engine",
      "Automated lifecycle & policy enforcement",
      "Secure gateway & traffic orchestration",
      "Comprehensive compliance monitoring"
    ],
    tech: ["GO", "KAFKA", "POSTGRES", "DOCKER", "OAS"],
    link: "https://jacksteve-code.github.io/MY-API-GOVERNANCE/"
  },
  {
    title: "How to Structure API Documentation for AI-First Consumption",
    description: "A curated collection of experimental and production-ready AI implementations, ranging from custom agentic workflows to optimized inference engines. This repository serves as a sandbox for cutting-edge architectural patterns.",
    bullets: [
      "Lead Developer: Curated and implemented all core experiments and patterns",
      "Agentic workflow implementations",
      "Advanced inference optimization patterns",
      "Experimental AI architectural research"
    ],
    tech: ["PYTHON", "PYTORCH", "CUDA", "FASTAPI", "REDIS"],
    link: "https://jacksteve-code.github.io/MY-AI-WORKS/"
  },
  {
    title: "Building Reliable Agentic AI Systems at Scale",
    description: "A 2026 production playbook treating agentic AI as distributed cognitive control systems. Focuses on closing the reliability gap in autonomous agents through observability, orchestration patterns, and chaos-tested blueprints.",
    bullets: [
      "Lead Developer: Architected the full reliability framework",
      "Defined SLOs: 95%+ goal success, P95 latency ≤45s",
      "Observability stack + orchestration patterns (LangGraph, CrewAI)",
      "Chaos engineering + zero-trust security (97% injection mitigation)"
    ],
    tech: ["LANGGRAPH", "CREWAI", "AUTOGEN", "KUBERNETES", "PINECONE"],
    link: "https://jacksteve-code.github.io/MY-AGENT-DOCS/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,50,255,0.12)_0%,_rgba(0,255,65,0.08)_40%,_rgba(5,5,5,1)_75%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#00FF41] font-mono text-sm tracking-widest uppercase">PORTFOLIO</span>
          <h2 className="text-5xl md:text-6xl font-serif italic font-black mt-5 mb-4 text-white">
            SELECTED <span className="text-[#00FF41]">WORKS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-serif italic text-lg">
            High-performance AI infrastructure • Production ML systems • Scalable intelligent architectures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden border border-gray-800/60 hover:border-[#00FF41]/40 transition-all duration-400 bg-black/40 backdrop-blur-sm flex flex-col h-full"
            >
              {/* Green Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF41]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="p-8 relative z-10 flex flex-col h-full">
                <div className="text-[#00FF41] font-mono text-6xl font-black opacity-20 group-hover:opacity-40 transition-opacity mb-6">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif italic font-semibold mb-5 text-white group-hover:text-[#00FF41] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-serif italic font-light">
                  {project.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="text-[#00FF41] mt-1">›</span>
                      <span className="font-serif italic">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 bg-gray-900/80 rounded-full text-gray-300 border border-gray-700 font-mono uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-[#00FF41] uppercase hover:text-white transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}