'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00FF41]/5 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-[#00FF41]/20 bg-[#00FF41]/5 rounded-full"
        >
          <span className="w-1.5 h-1.5 bg-[#00FF41] rounded-full" />
          <span className="text-xs text-[#00FF41] tracking-wide">AVAILABLE FOR WORK</span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="text-sm text-gray-400 tracking-wider">JACK STEVE</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          I help companies build{' '}
          <span className="text-[#00FF41]">scalable AI infrastructure</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Software and ML Engineer specializing in AI/ML infrastructure. 
          Architecting production-grade LLMOps pipelines from Ruiru, Kenya.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#work"
            className="px-8 py-3 bg-[#00FF41] text-black font-medium rounded-lg hover:bg-[#00dd39] transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-800 rounded-lg hover:border-[#00FF41] transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-8 mt-16 pt-8 border-t border-gray-800"
        >
          <div>
            <div className="text-2xl font-bold text-[#00FF41]">35%</div>
            <div className="text-xs text-gray-500">LOWER LATENCY</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#00FF41]">40%</div>
            <div className="text-xs text-gray-500">FASTER TRAINING</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#00FF41]">4+</div>
            <div className="text-xs text-gray-500">PROJECTS</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}