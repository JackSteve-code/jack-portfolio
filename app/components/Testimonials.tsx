'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Jack's expertise in LLM infrastructure is exceptional. He designed our serving layer from scratch and we're seeing 35% better latency than our previous solution.",
    author: "Michael Chen",
    role: "CTO, Apex AI",
    image: "/testimonials/michael.jpg"
  },
  {
    quote: "The distributed training pipeline Jack built cut our model training time by 40%. His deep understanding of both software and hardware is rare to find.",
    author: "Sarah Johnson",
    role: "ML Lead, Scale Dynamics",
    image: "/testimonials/sarah.jpg"
  },
  {
    quote: "Professional, knowledgeable, and delivers on time. Jack helped us architect our entire MLOps stack. Would work with him again in a heartbeat.",
    author: "David Kim",
    role: "Founder, Nexus AI",
    image: "/testimonials/david.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Word on the <span className="text-[#00FF41]">street</span>
          </h2>
          <p className="text-gray-400">What clients say about working with me</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-[#00FF41]/20 transition-colors"
            >
              {/* Quote Icon */}
              <div className="text-4xl text-[#00FF41]/20 mb-4">"</div>
              
              {/* Quote */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div>
                <div className="font-medium text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}