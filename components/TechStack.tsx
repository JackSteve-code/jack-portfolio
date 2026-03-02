// components/TechStack.tsx
'use client';

import { motion } from 'framer-motion';

const stack = [
  "PyTorch",
  "vLLM",
  "LangChain",
  "MLOps",
  "Distributed Compute",
  "LLMOps",
  "Federated Learning",
  "Observability",
  "Hardware Acceleration"
];

export default function TechStack() {
  return (
    <section className="relative py-24 border-t border-gray-800/50 overflow-hidden">
      {/* Subtle purple + green background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,50,255,0.08)_0%,_rgba(0,255,65,0.06)_45%,_rgba(5,5,5,1)_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#00FF41] font-mono text-sm tracking-widest uppercase">TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-serif italic font-black mt-4 mb-3 text-white">
            THE <span className="text-[#00FF41]">SECRET SAUCE</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-serif italic text-base">
            Core tools & paradigms I use to build production-grade AI infrastructure
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {stack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative px-6 py-3.5 bg-black/50 backdrop-blur-md border border-gray-800/60 rounded-full text-base md:text-lg font-serif italic font-medium text-gray-200 transition-all duration-300 hover:border-[#00FF41]/50 hover:text-[#00FF41] hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]"
            >
              {/* Tiny green glow on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FF41]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}