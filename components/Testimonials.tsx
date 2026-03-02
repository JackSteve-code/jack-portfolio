// components/Testimonials.tsx
'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Dr. Aisha Mwangi",
    role: "Head of AI Research, Nairobi Tech Hub",
    quote: "Jack delivered an exceptionally robust LLMOps pipeline that cut our inference costs by over 40% while maintaining sub-200ms latency at scale. His deep understanding of distributed systems and observability is rare to find.",
  },
  {
    name: "Michael Chen",
    role: "Principal ML Engineer, Horizon AI Labs (Remote)",
    quote: "Working with Jack on our federated learning blueprint was a game-changer. He turned complex privacy and compliance requirements into clean, production-ready architecture. Extremely professional and async-friendly.",
  },
  {
    name: "Sarah Kimani",
    role: "CTO, FinSecure Kenya",
    quote: "The real-time fraud detection system Jack built for us has already prevented millions in potential losses. His anomaly detection models are precise, fast, and adapt beautifully to new patterns. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="text-center mb-20">
        <span className="text-[#00FF41] font-mono text-sm tracking-widest uppercase">TESTIMONIALS</span>
        <h2 className="text-5xl md:text-6xl font-serif italic font-black mt-4 mb-6 text-white">
          WHAT <span className="text-[#00FF41]">THEY SAY</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto font-serif italic">
          Feedback from collaborators and clients who’ve worked with me on production AI systems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Subtle green + purple hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF41]/15 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

            {/* Card */}
            <div className="relative glass-card p-8 rounded-3xl h-full border border-gray-800/50 hover:border-[#00FF41]/40 transition-all duration-300 bg-black/40 backdrop-blur-md flex flex-col">
              <div className="text-[#00FF41] font-mono text-7xl font-black opacity-20 group-hover:opacity-50 transition-opacity mb-6">
                {String(index + 1).padStart(2, '0')}
              </div>

              <blockquote className="text-gray-200 text-base leading-relaxed mb-6 font-serif italic font-light flex-grow">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-auto">
                <p className="text-white font-semibold text-lg font-serif italic">
                  {testimonial.name}
                </p>
                <p className="text-gray-400 text-sm font-serif italic">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}