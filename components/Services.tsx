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
      <div className="space-y-12">
        
        {/* Pain Points Section: "This you?" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-[2rem] border border-gray-800/50 bg-white/5"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🤔</span>
            <h2 className="text-3xl md:text-4xl font-black text-white italic">This you?</h2>
          </div>
          
          <ul className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {painPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-red-500 font-bold mt-1">✕</span>
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Solutions Section: "How I can help" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 rounded-[2rem] border border-[#00FF41]/20 bg-[#00FF41]/5"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-white italic">How I can help</h2>
          </div>
          
          <ul className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {solutions.map((solution, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-[#00FF41] font-bold mt-1">✓</span>
                <p className="text-gray-200 text-lg leading-relaxed italic">
                  {solution}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}