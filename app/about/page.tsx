// app/about/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Purple + green neon background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,50,255,0.10)_0%,_rgba(0,255,65,0.06)_40%,_rgba(5,5,5,1)_75%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[#00FF41] font-mono text-sm md:text-base tracking-[0.4em] uppercase"
          >
            WHO I AM
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-black mt-5 mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-[#00FF41] to-purple-400 bg-clip-text text-transparent">
              Machine Learning Engineer
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl opacity-90">
              Software Developer & Technical Writer
            </span>
          </motion.h1>
        </div>

        {/* Photo + Bio */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo with orbiting micro-ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mx-auto md:mx-0 w-72 h-72 md:w-96 md:h-96 group"
          >
            {/* Orbiting ring */}
            <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_40s_linear_infinite] group-hover:border-[#00FF41]/40 transition-colors duration-700" />
            <div className="absolute inset-6 rounded-full border border-purple-400/15 animate-[spin_55s_linear_infinite_reverse] group-hover:border-[#00FF41]/30 transition-colors duration-700" />

            <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-900/60 group-hover:shadow-[#00FF41]/30 group-hover:border-[#00FF41]/50 transition-all duration-700">
              <Image
                src="/your-photo.jpg"   // ← replace with your real photo path
                alt="Jack Steve"
                fill
                className="object-cover scale-105 transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              {/* Subtle green-purple overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent group-hover:from-[#00FF41]/15 group-hover:via-purple-900/5 transition-all duration-700" />
            </div>
          </motion.div>

          {/* Bio – all content now fully italic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-7 text-base md:text-lg leading-relaxed font-serif italic text-gray-200"
          >
            <p>
              I design and build high-performance AI infrastructure — from massive-scale LLM serving to distributed training environments that run efficiently at enterprise level.
            </p>

            <p>
              My focus is end-to-end production ML systems: LLMOps pipelines, observability, cost-optimized inference, federated learning, real-time anomaly detection, and everything in between.
            </p>

            <p>
              I also write technical documentation and deep-dive guides that turn complex engineering problems into clear, reproducible blueprints — so other engineers can build faster and more reliably.
            </p>

            <p className="text-[#00FF41]/90 pt-3 text-lg">
              Clean code. Transparent systems. Production-first mindset.
            </p>

            <p className="text-gray-300 pt-4 border-t border-gray-800/50 pt-6">
              Let’s build — and document — the next generation of intelligent systems together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}