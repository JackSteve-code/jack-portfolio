// components/CollaborationSection.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CollaborationSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Purple + subtle green neon glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,50,255,0.12)_0%,_rgba(0,255,65,0.07)_45%,_rgba(5,5,5,1)_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left: Globe + name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center text-center md:text-left md:items-start"
        >
          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] mb-12 group">
            {/* Orbital rings with slight green tint on hover */}
            <div className="absolute inset-0 rounded-full border border-purple-500/30 orbit-ring group-hover:border-[#00FF41]/40 transition-colors duration-700" style={{ animationDuration: '100s' }} />
            <div className="absolute inset-12 rounded-full border border-purple-400/20 orbit-ring-reverse group-hover:border-[#00FF41]/30 transition-colors duration-700" style={{ animationDuration: '140s' }} />
            <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-purple-800/15 to-transparent border border-purple-600/15 group-hover:border-[#00FF41]/20 transition-colors duration-700" />

            {/* Globe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-purple-900/70 ring-4 ring-purple-500/30 group-hover:ring-[#00FF41]/40 transition-all duration-500">
                <Image
                  src="https://thumbs.dreamstime.com/b/detailed-view-planet-earth-space-highlighting-europe-africa-middle-east-ai-generated-high-resolution-illustration-438385352.jpg"
                  alt="Photorealistic Earth globe showing Africa, Europe, and continents"
                  fill
                  className="object-cover scale-105"
                  priority
                />
                {/* Purple-green overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/35 via-purple-900/10 to-transparent pointer-events-none group-hover:from-[#00FF41]/15 group-hover:via-purple-900/5 transition-all duration-700" />
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif italic font-black bg-gradient-to-r from-white via-[#00FF41]/90 to-purple-300 bg-clip-text text-transparent mb-5 tracking-tight">
            Jack Steve
          </h2>

          <p className="text-xl md:text-2xl font-serif italic text-gray-300/90 max-w-md leading-relaxed">
            Software & ML Infrastructure Engineer
            <br />
            building high-performance AI systems
          </p>
        </motion.div>

        {/* Right column */}
        <div className="space-y-12 md:space-y-16">

          {/* Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF41]/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

            <div className="relative glass-card p-9 md:p-10 rounded-3xl border border-gray-800/50 hover:border-[#00FF41]/40 transition-all duration-300 bg-black/45 backdrop-blur-lg">
              <h3 className="text-3xl md:text-4xl font-serif italic font-bold text-white mb-6 group-hover:text-[#00FF41] transition-colors">
                Collaboration
              </h3>
              <p className="text-lg md:text-xl text-gray-200/90 leading-relaxed font-serif italic">
                Open communication, async updates, zero surprises. I value clear expectations, regular progress shares, and direct feedback — let's build something great without friction.
              </p>
            </div>
          </motion.div>

          {/* Worldwide availability */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF41]/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

            <div className="relative glass-card p-9 rounded-3xl border border-gray-800/50 hover:border-[#00FF41]/40 transition-all duration-300 bg-black/40 backdrop-blur-lg">
              <h3 className="text-3xl md:text-4xl font-serif italic font-bold text-[#00FF41] mb-6">
                Available Worldwide
              </h3>
              <p className="text-lg md:text-xl text-gray-300/90 font-serif italic leading-relaxed mb-7">
                Flexible across time zones — from EAT (Kenya) to EST/PST (USA), GMT/BST (UK), and anywhere else. Async-friendly workflows ensure smooth progress no matter your location.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { flag: "🌍", label: "Global" },
                  { flag: "🇰🇪", label: "EAT" },
                  { flag: "🇺🇸", label: "EST / PST" },
                  { flag: "🇬🇧", label: "GMT / BST" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 px-5 py-3 bg-black/60 border border-gray-700/60 rounded-full text-gray-200 text-sm font-medium hover:border-[#00FF41]/50 hover:text-[#00FF41] transition-all duration-300"
                  >
                    <span className="text-2xl">{item.flag}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-left pt-6"
          >
            <h3 className="text-4xl md:text-5xl font-serif italic font-black bg-gradient-to-r from-white via-[#00FF41] to-purple-300 bg-clip-text text-transparent mb-8 leading-tight">
              Let’s work together
              <br />
              on your next project
            </h3>

            <a
              href="mailto:hello@jacksteve.dev"
              className="inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-[#00FF41]/20 via-purple-800/30 to-purple-900/40 hover:from-[#00FF41]/30 hover:via-purple-700/40 hover:to-purple-800/50 text-white font-semibold text-xl rounded-full shadow-2xl shadow-purple-900/40 hover:shadow-[#00FF41]/30 transition-all duration-300 hover:scale-[1.03] border border-[#00FF41]/30 hover:border-[#00FF41]/60"
            >
              Get in touch →
              <span className="text-2xl">✉️</span>
            </a>

            <p className="mt-6 text-gray-300 font-medium tracking-wide font-serif italic">
              hello@jacksteve.dev
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}