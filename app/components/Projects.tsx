const projects = [
  // ... (Keep your existing projects array exactly as it is)
  {
    title: "Scalable LLMOps Pipeline",
    subtitle: "Live Project",
    description: "A production-grade architecture designed for deploying Large Language Models at scale while maintaining rigorous latency standards. The pipeline orchestrates model routing, intelligent caching, and comprehensive cost-optimization strategies across distributed GPU environments. I emphasize observability through deep integration with Langfuse and LangChain for real-time monitoring. This system simplifies the complex lifecycle of LLM development, from initial prompt engineering to high-throughput inference serving. Built for reliability, it ensures that production AI services remain resilient, performant, and cost-effective under heavy load, providing engineers with precise data-driven insights into every inference request processed by the underlying infrastructure.",
    bullets: ["Full lifecycle from prompt engineering to observability", "Multi-model routing, caching & cost optimization", "LangChain + vLLM + Langfuse integration"],
    tech: [{ name: "NEXT.JS", icon: "N" }, { name: "REACT", icon: "⚛️" }, { name: "TYPESCRIPT", icon: "TS" }, { name: "TAILWIND", icon: "🌬️" }, { name: "VERCEL", icon: "▲" }],
    link: "https://jacksteve-code.github.io/Scalable-llmop/"
  },
  // ... (and all other projects)
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <p className="text-indigo-500 tracking-[4px] text-[10px] mb-2 font-bold uppercase">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-serif italic text-white leading-tight">
            Selected <span className="text-indigo-600 not-italic font-sans font-bold text-6xl">Works</span>
          </h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Card Container */}
              <div className="relative p-8 md:p-10 rounded-3xl bg-zinc-950 border border-zinc-900 transition-all duration-500 group-hover:border-indigo-500/30 group-hover:bg-zinc-900/20 shadow-2xl">
                
                {/* Indigo Accent Bar */}
                <div className="w-12 h-[2px] bg-indigo-600 mb-8 group-hover:w-20 transition-all duration-500" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <h3 className="text-4xl md:text-5xl font-serif italic text-white group-hover:text-indigo-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <span className="shrink-0 px-3 py-1 bg-indigo-950/30 border border-indigo-500/20 rounded-full text-[10px] tracking-widest text-indigo-400 font-bold uppercase self-start mt-2">
                    {project.subtitle}
                  </span>
                </div>

                <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-3xl">
                  {project.description}
                </p>

                {/* Glowing Purple/Indigo Bullets */}
                <ul className="space-y-5 mb-12">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-200 text-lg">
                      <span className="text-indigo-500 shrink-0 mt-2 h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                      <span className="group-hover:text-white transition-colors">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/5 rounded-md text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>

                {/* External Link Interaction */}
                <div className="flex justify-end">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transform transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}