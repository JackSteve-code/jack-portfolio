'use client';

import { motion } from 'framer-motion';

const skillsGroups = [
  {
    category: "AI Infrastructure & MLOps",
    icon: "🧠",
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
  { name: "LangChain", icon: "🔗", category: "Orchestration" },
  { name: "FSDP", icon: "⚡", category: "Training" },
  { name: "DeepSpeed", icon: "🚀", category: "Optimization" },
  { name: "OpenTelemetry", icon: "📊", category: "Observability" },
  { name: "eBPF", icon: "🔍", category: "Kernel Trace" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "Redis", icon: "⚡", category: "Caching" },
  { name: "Kafka", icon: "📨", category: "Streaming" },
  { name: "Docker Compose", icon: "🐳", category: "Containers" },
  { name: "GraphQL", icon: "🛜", category: "API" },
  { name: "TensorRT", icon: "🏎️", category: "Inference" },
  { name: "LlamaIndex", icon: "📚", category: "Retrieval" },
  { name: "Pinecone", icon: "🌲", category: "Vector DB" }
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
              <div className={`absolute -inset-4 bg-gradient-to-br ${group.hoverColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] blur-2xl z-0 scale-95 group-hover:scale-100 transition-transform`} />

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
          <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-10 italic">
            Additional Tools & Paradigms
          </h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {secondaryStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group/badge relative flex items-center gap-2.5 px-4 py-2.5 bg-gray-900/60 border border-gray-800/80 rounded-2xl hover:border-[#00FF41]/50 hover:bg-black/80 transition-all duration-300 cursor-default shadow-lg backdrop-blur-md"
              >
                <span className="text-base group-hover/badge:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-serif italic text-gray-200 group-hover/badge:text-[#00FF41] transition-colors leading-tight">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}