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
            <p>I am Jack, technical writer and a computer scientist. I grew up fishing with my father  on the shores of Lake Victoria.</p>
            <p> My focus is on AI/ML in production. Previously, I  worked as a software engineer at a startup company. Exposure to the software development environment really sharpened my skills especially when it comes to algorithm, data structures and various problem solving techniques which later proved to be vital in deep learning more so during optimization. </p>

            <p>
              I design and build high-performance AI infrastructure — from massive-scale LLM serving to distributed training environments that run efficiently at enterprise level.
            </p>

            <p>
              My focus is end-to-end production ML systems: LLMOps pipelines, observability, cost-optimized inference, federated learning, real-time anomaly detection, and everything in between.
            </p>

            <p>
              I write technical documentation and in-depth guides that help make sense of complicated engineering challenges. My goal is to take something messy or hard to understand and turn it into a clear, step-by-step plan that others can actually follow. Whether it’s troubleshooting a tricky system or explaining how a piece of infrastructure works, I try to break it down in a way that saves other engineers time, frustration, and guesswork — so they can focus on building, not figuring out what went wrong.
            </p>

            <p>I genuinely enjoy learning about fun technical challenges — the kind that make you stop and think, or push you to dig deeper into how something works. Whether it's figuring out why a system slowed down under load, untangling a weird bug that only happens in production, or designing a better way to handle data at scale, I love the process of solving those puzzles. But what makes it even better is doing it with great teams. There's something really rewarding about bouncing ideas around, learning from each other's perspectives, and building something together that none of us could have done alone. For me, the best part of engineering isn't just the code — it's the people you get to solve problems with along the way..</p>

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