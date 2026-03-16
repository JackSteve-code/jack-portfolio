'use client';
import { motion } from 'framer-motion';

const painPoints = [
  "Your LLM infrastructure costs are spiraling due to unoptimized inference and high GPU idle times.",
  "Your engineering team is drowning in technical debt because your system documentation is outdated or fragmented.",
  "You're struggling with high latencies that degrade the user experience of your production AI features.",
  "Your distributed systems face reliability issues and you lack a clear observability strategy to lower MTTR.",
  "You want to implement green computing and carbon-aware engineering but don't have the profiling tools in place.",
  "You're building complex technical products but lack content that actually earns the trust of a senior engineering audience."
];

const solutions = [
  "I optimize inference using vLLM, quantization, and continuous batching to slash latencies and compute costs.",
  "I implement 'Docs-as-Code' workflows using Docusaurus and Git so your documentation is as resilient as your code.",
  "I architect fault-tolerant distributed systems using consensus protocols like Raft to ensure 99.9% uptime.",
  "I build end-to-end LLMOps pipelines that bridge the gap between experimental notebooks and stable production APIs.",
  "I utilize eBPF-based power profiling to help your team achieve sustainable, energy-efficient software orchestration.",
  "I write deep-dive technical surveys and architectural guides that turn complex systems into clear, actionable knowledge."
];

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32 font-serif">
      <div className="space-y-16">
        
        {/* Pain Points Section: "This you?" */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* === INTENSIFIED RED BACKBURST === */}
          <div className="absolute -inset-4 bg-gradient-to-br from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] blur-3xl z-0 scale-95 group-hover:scale-100 transition-transform" />
          
          <div className="relative glass-card p-10 rounded-[2rem] border border-gray-800/50 bg-black/40 backdrop-blur-xl z-10 hover:border-red-500/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl">🤔</span>
              <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tight">This you?</h2>
            </div>
            
            <ul className="space-y-6">
              {painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-red-500 font-bold mt-1 text-xl">✕</span>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Solutions Section: "How I can help" */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative"
        >
          {/* === INTENSIFIED GREEN BACKBURST === */}
          <div className="absolute -inset-4 bg-gradient-to-br from-[#00FF41]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] blur-3xl z-0 scale-95 group-hover:scale-100 transition-transform" />
          
          <div className="relative glass-card p-10 rounded-[2rem] border border-[#00FF41]/20 bg-black/40 backdrop-blur-xl z-10 hover:border-[#00FF41]/60 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl">💡</span>
              <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tight">How I can help</h2>
            </div>
            
            <ul className="space-y-6">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-[#00FF41] font-bold mt-1 text-xl">✓</span>
                  <p className="text-gray-200 text-lg md:text-xl leading-relaxed italic">
                    {solution}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}