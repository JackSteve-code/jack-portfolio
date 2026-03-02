// components/Projects.tsx
'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "Agentic AI Frameworks & Orchestration",
    description: "A comprehensive deep-dive into the transition from static LLM assistants to autonomous agentic workflows. This documentation establishes a rigorous taxonomy for single and multi-agent systems, focusing on the cognitive architecture required for planning, tool-use, and complex memory management. It serves as a blueprint for developers building self-evolving AI systems that move beyond simple prompt-response cycles into goal-oriented, iterative execution.",
    bullets: [
      "Advanced memory systems: Selective forgetting, episodic vs. semantic storage, and context compression",
      "Multi-agent orchestration: Hierarchical vs. joint-collaboration patterns for complex task decomposition",
      "Dynamic tool-use: Autonomous discovery and reliable execution of external functions and API environments"
    ],
    tech: ["DOCUSAURUS", "MARKDOWN", "REACT", "TYPESCRIPT", "TAILWIND"],
    link: "https://jacksteve-code.github.io/AGENTIC-AI-DOCS/"
  },
  {
    title: "LLM Observability & Engineering Metrics",
    description: "An industry-standard guide to monitoring, debugging, and optimizing Large Language Models within a production lifecycle. This project bridges the gap between traditional SRE practices and the unique challenges of AI, such as non-deterministic failures, prompt injection, and hallucination tracking. It provides a technical framework for capturing high-fidelity traces and granular metrics, from token-level costs to semantic drift.",
    bullets: [
      "Holistic monitoring: System-level latency combined with LLM-specific quality and cost metrics",
      "Security & resilience: Advanced mitigation strategies for prompt injection and data leakage protection",
      "Traceability & drift: Deep integration of LangSmith/Langfuse patterns for real-time inference auditing"
    ],
    tech: ["NEXT.JS", "LANGFUSE", "PYTHON", "SENTRY", "VERCEL"],
    link: "https://jacksteve-code.github.io/LLM-Observability/"
  }
];

export default function Projects() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Consistent purple + green neon background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,50,255,0.12)_0%,_rgba(0,255,65,0.07)_45%,_rgba(5,5,5,1)_80%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[#00FF41] font-mono text-sm md:text-base tracking-[0.4em] uppercase"
          >
            SELECTED WORKS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif italic font-black mt-5 mb-4 text-white"
          >
            My Recent <span className="text-[#00FF41] not-italic">Blueprints</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-3xl mx-auto font-serif italic text-lg leading-relaxed"
          >
            Production-focused documentation and deep technical guides on agentic systems, observability, and scalable AI infrastructure
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF41]/12 via-purple-500/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

              {/* Card */}
              <div className="relative glass-card p-8 lg:p-10 rounded-3xl border border-gray-800/50 hover:border-[#00FF41]/40 transition-all duration-300 bg-black/45 backdrop-blur-lg flex flex-col h-full">
                {/* Number badge */}
                <div className="text-[#00FF41] font-mono text-6xl md:text-7xl font-black opacity-20 group-hover:opacity-50 transition-opacity mb-6">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-serif italic font-bold mb-5 text-white group-hover:text-[#00FF41] transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-serif italic font-light mb-7 flex-grow">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-4 mb-8">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                      <span className="text-[#00FF41] mt-1.5 text-xl shrink-0">›</span>
                      <span className="group-hover:text-gray-100 transition-colors font-serif italic">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags + Link */}
                <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 bg-black/60 border border-gray-700/60 rounded-full text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-base font-semibold tracking-widest text-[#00FF41] uppercase hover:text-white transition-colors group-hover:underline underline-offset-4 decoration-[#00FF41]/60"
                  >
                    View Documentation →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}