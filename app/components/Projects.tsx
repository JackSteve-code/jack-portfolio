const projects = [
  {
    year: "2025",
    title: "Scalable LLMOps Pipeline",
    description: "Production-grade LLM serving infrastructure with vLLM...",
    tags: ["PyTorch", "vLLM", "Kubernetes"],
  },
  // ... other projects
];

export default function Projects() {
  return (
    <section id="work" className="py-24">
      <h2 className="text-4xl font-bold mb-16">Curated <span className="text-[#00FF41]">work</span></h2>
      <div className="space-y-32">
        {projects.map((project) => (
          <div key={project.title} className="group border-t border-white/10 pt-12">
            <div className="flex flex-col md:flex-row justify-between gap-8">
               <div className="max-w-xl">
                  <span className="text-sm text-gray-500 font-mono mb-4 block">{project.year}</span>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-[#00FF41] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs border border-white/20 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
               </div>
               <div className="flex items-end">
                 <span className="text-4xl group-hover:translate-x-2 transition-transform">→</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}