const studies = [
  {
    num: "01",
    title: "Scalable LLMOps",
    type: "Technical Architecture",
    timeline: "2024",
    desc: "A comprehensive reference architecture for productionizing LLMs — from prompt engineering to full observability.",
    tags: ["vLLM", "LLMOps", "Distributed Systems"],
    link: "https://jacksteve-code.github.io/Scalable-llmop/",
    repo: "https://github.com/JackSteve-code/Scalable-llmop"
  },
  {
    num: "02",
    title: "Compute Optimization",
    type: "Performance Engineering",
    timeline: "2024",
    desc: "Deep dive into hardware hierarchies and parallelism strategies achieving 40% faster training.",
    tags: ["PyTorch", "Hardware", "Parallelism"],
    link: "https://jacksteve-code.github.io/AI-Infrastructure-and-compute-optimization/",
    repo: "https://github.com/JackSteve-code/AI-Infrastructure-and-compute-optimization"
  },
  // Add the other 5 projects the same way (03 to 07) — I can send the full list if you want
];

export default function CaseStudies() {
  return (
    <section className="py-20 border-t border-zinc-800">
      <p className="text-center text-sm tracking-[3px] text-zinc-500 mb-4">CASE STUDIES</p>
      <h2 className="text-5xl font-bold text-center mb-16">Curated Work</h2>

      <div className="space-y-16">
        {studies.map((study) => (
          <div key={study.num} className="group">
            <div className="flex items-baseline gap-6">
              <span className="text-7xl font-bold text-zinc-800">{study.num}</span>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold">{study.title}</h3>
                <div className="flex gap-4 text-sm text-zinc-500 mt-1">
                  <span>{study.type}</span>
                  <span>{study.timeline}</span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-zinc-400 text-lg max-w-3xl">{study.desc}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-zinc-900 text-xs rounded-full">{tag}</span>
              ))}
            </div>

            <div className="mt-8 flex gap-8 text-blue-400 text-sm">
              <a href={study.link} className="hover:underline">View Project →</a>
              <a href={study.repo} className="hover:underline">GitHub Repo →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}