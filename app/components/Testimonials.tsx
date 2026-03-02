'use client';

const testimonials = [
  {
    quote:
      "Jack is the man! He is simply the best developer I've ever worked with. He took our requirements and quite literally ran with them, translating everything into a high-performance, WCAG-accessible platform. We are beyond happy with the final product and his technical depth.",
    author: "Jennifer Wilson",
    role: "Product Manager",
    // Dark Green Gradient
    bgColor: "from-[#062d2d] to-[#041a1a]"
  },
  {
    quote:
      "Professional, quick, and a master of infrastructure. Jack was lightning-fast to respond and delivered our fully SEO-optimized ML pipeline ahead of schedule. The integration with our headless CMS was seamless and exactly what we needed. Looking forward to collaborating soon.",
    author: "Robert Johnson",
    role: "Founder & CEO",
    // Dark Purple/Pink Gradient
    bgColor: "from-[#2d0b3d] to-[#1a0624]"
  },
  {
    quote:
      "Excellent communication and a massive jump in our system performance. Jack handled our additional technical requests with a calm, expert approach. Our Core Web Vitals jumped immediately after deployment. An excellent experience overall.",
    author: "Tony Parker",
    role: "Tech Lead",
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
              className={`flex flex-col p-10 rounded-xl bg-gradient-to-b ${t.bgColor} border border-white/5 shadow-2xl transition-transform duration-300 hover:-translate-y-1`}
            >
              {/* The Blue Line Detail */}
              <div className="w-10 h-[1px] bg-indigo-400/50 mb-10" />
              
              <div className="flex-1">
                {/* Italic Serif Quote */}
                <p className="text-white text-xl md:text-[1.35rem] font-serif italic leading-[1.6] mb-12 opacity-90">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info - Now just Text */}
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