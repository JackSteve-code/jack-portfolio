'use client';

import { motion } from 'framer-motion';

const skillsGroups = [
  {
    category: "AI Infrastructure & MLOps",
    icon: "🧠",
    // === INTENSIFIED HOVER COLOR ===
    hoverColor: "from-[#00FF41]/60", 
    skills: [
      { name: "PyTorch / vLLM", level: 95 },
      { name: "LLMOps Pipelines", level: 92 },
      { name: "Model Quantization", level: 88 },
      { name: "Distributed Training", level: 90 },
      { name: "Hardware Acceleration", level: 85 },
      { name: "Federated Learning", level: 80 }
    ]
  },
  {
    category: "Systems Engineering",
    icon: "⚙️",
    // === INTENSIFIED HOVER COLOR ===
    hoverColor: "from-blue-600/60",
    skills: [
      { name: "Kubernetes / Docker", level: 93 },
      { name: "Distributed Systems", level: 85 },
      { name: "Python / Next.js", level: 90 },
      { name: "Performance Profiling", level: 82 },
      { name: "Observability (ODD)", level: 88 },
      { name: "CI/CD for ML", level: 84 }
    ]
  },
  {
    category: "Technical Communication",
    icon: "✍️",
    // === INTENSIFIED HOVER COLOR ===
    hoverColor: "from-purple-600/60",
    skills: [
      { name: "Docs-as-Code", level: 96 },
      { name: "Technical Writing", level: 94 },
      { name: "API Documentation", level: 90 },
      { name: "Systems Architecture", level: 88 },
      { name: "Technical Blogging", level: 92 },
      { name: "Markdown / Git", level: 98 }
    ]
  }
];

const secondaryStack = [
  "LangChain", "FSDP", "DeepSpeed", "OpenTelemetry", 
  "eBPF", "React", "Tailwind CSS", "PostgreSQL", "Redis", "Kafka",
  "Docker Compose", "GraphQL", "TensorRT", "LlamaIndex", "Pinecone"
];

export default function TechStack() {
  return (
    <section className="relative py-24 border-t border-gray-900 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,65,0.02)_0%,_transparent_75%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#00FF41] font-mono text-sm tracking-widest uppercase">Expertise</span>
          <h2 className="text-2xl md:text-3xl font-serif italic font-black mt-4 mb-3 text-white uppercase">
            Core <span className="text-[#00FF41]">Competencies</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-serif italic text-base">
            A comprehensive breakdown of my technical proficiency across AI infrastructure, distributed systems, and technical communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {skillsGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* === INTENSIFIED BACKBURST EFFECT (More noticeable when hovering) === */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${group.hoverColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] blur-2xl z-0 scale-95 group-hover:scale-100 transition-transform`} />

              {/* Card Container */}
              <div className="relative glass-card p-10 rounded-3xl border border-gray-800/50 bg-black/40 backdrop-blur-xl z-10 h-full flex flex-col hover:border-[#00FF41]/70 transition-all duration-300">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-3xl">{group.icon}</span>
                  <h3 className="text-xl md:text-2xl font-serif italic font-bold text-white uppercase tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-7 flex-grow">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-3">
                        {/* Word size increased to text-base and text-lg for readability */}
                        <span className="text-gray-200 font-serif italic text-base md:text-lg">
                          {skill.name}
                        </span>
                        <span className="text-[#00FF41] font-mono text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-900/80 rounded-full overflow-hidden border border-gray-800/40">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, delay: 0.6 + (groupIdx * 0.1) }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-[#00FF41] to-emerald-500 shadow-[0_0_20px_rgba(0,255,65,0.6)] relative"
                        >
                          {/* Green glowing dot at the tip of the progress bar */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00FF41] rounded-full shadow-[0_0_8px_#00FF41]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h4 className="text-sm font-mono text-gray-600 uppercase tracking-widest mb-10 italic">
              Additional Tools & Paradigms
          </h4>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {secondaryStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                className="px-5 py-2 bg-gray-900/40 border border-gray-800 rounded-full text-base font-serif italic text-gray-400 hover:text-[#00FF41] hover:border-[#00FF41]/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}