const stack = [
  "PyTorch", "vLLM", "LangChain", "MLOps", "Distributed Compute",
  "LLMOps", "Federated Learning", "Observability", "Hardware Acceleration"
];

export default function TechStack() {
  return (
    <section className="py-20 border-t border-zinc-800">
      <p className="text-center text-sm tracking-[3px] text-zinc-500 mb-8">THE SECRET SAUCE</p>
      <div className="flex flex-wrap justify-center gap-3">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-full text-lg transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}