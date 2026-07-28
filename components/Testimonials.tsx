'use client';

const testimonials = [
  {
    quote:
      "Jack completely rearchitected our LLM serving layer, and the results were immediate and measurable. Our P99 latency dropped from 420ms to 180ms, and our monthly GPU costs decreased by 43% — all while handling 2.5x the request volume. What impressed me most wasn't just the technical execution; it was how Jack documented every architectural decision along the way, turning a black-box optimization into a transparent, maintainable system that my entire team now understands. He's the rare engineer who can operate at the kernel level with eBPF and then explain the entire stack to a product stakeholder with equal clarity. I'd work with him again without hesitation.",
    author: "Dr. Aisha Mwangi",
    role: "Head of AI Research, Nairobi Tech Hub",
    // Dark Green Gradient
    bgColor: "from-[#062d2d] to-[#041a1a]"
  },
  {
    quote:
      "We brought Jack in to solve a compliance nightmare: building a federated learning system that had to satisfy both GDPR and the EU AI Act while delivering production-grade performance. Jack didn't just deliver a compliant architecture — he built a secure aggregation framework with differential privacy that processed data across 12 geographically distributed silos with less than 5% accuracy tradeoff compared to centralized training. More importantly, Jack became our de facto AI governance advisor. His documentation was so thorough that our legal team actually used it as part of our EU AI Act submission. Jack doesn't just write code; he builds systems that earn regulatory trust.",
    author: "Michael Chen",
    role: "Principal ML Engineer, Horizon AI Labs",
    // Dark Purple/Pink Gradient
    bgColor: "from-[#2d0b3d] to-[#1a0624]"
  },
  {
    quote:
      "Jack built our real-time fraud detection system from the ground up — and it's already prevented over $2.7M in fraudulent transactions in its first 90 days of production. What made Jack exceptional wasn't just the 99.2% precision rate of his anomaly detection models; it was his obsession with observability. He instrumented every component with OpenTelemetry and built dashboards that let us debug issues in minutes instead of hours. Our on-call team's MTTR dropped by 78% because of his design. Jack also pushed hard for carbon-aware scheduling, and we've reduced our inference compute emissions by 32% — a win for our bottom line and our sustainability goals. Jack is the kind of engineer who makes you forget about technical risk because you know the system is built right.",
    author: "Sarah Kimani",
    role: "CTO, FinSecure Kenya",
    // Dark Blue Gradient
    bgColor: "from-[#0b213d] to-[#061224]"
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Updated Italicized Section Header */}
        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-20 text-center tracking-tight">
          Word on the street 
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className={`flex flex-col p-8 rounded-xl bg-gradient-to-b ${t.bgColor} border border-white/5 shadow-2xl transition-transform duration-300 hover:-translate-y-1`}
            >
              {/* The Blue Line Detail */}
              <div className="w-10 h-[1px] bg-indigo-400/50 mb-8" />
              
              <div className="flex-1">
                {/* Italic Serif Quote - Slightly reduced size */}
                <p className="text-white text-[0.95rem] md:text-base font-serif italic leading-[1.6] mb-10 opacity-90">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-auto">
                <p className="text-white font-medium text-sm tracking-tight">
                  {t.author}
                </p>
                <p className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}