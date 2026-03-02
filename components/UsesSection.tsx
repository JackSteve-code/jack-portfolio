// components/UsesSection.tsx

const tools = [
  { name: 'LangChain', color: 'from-purple-600/20 to-blue-500/10' },
  { name: 'PyTorch', color: 'from-red-500/20 to-purple-600/10' },
  { name: 'Langfuse', color: 'from-orange-500/20 to-purple-500/10' },
  { name: 'Next.js', color: 'from-gray-400/20 to-purple-900/10' },
  { name: 'Docusaurus', color: 'from-cyan-500/20 to-purple-500/10' },
];

export default function UsesSection() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,50,255,0.1)_0%,_rgba(5,5,5,1)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-16 tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Technical Stack & Favorites
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="
                group relative overflow-hidden rounded-xl aspect-square
                bg-[#0A0A0A] border border-white/5 
                transition-all duration-500 ease-out
                hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(120,50,255,0.1)]
                hover:-translate-y-2 flex items-center justify-center
              "
            >
              {/* Internal Ambient Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-20 group-hover:opacity-60 transition-opacity duration-700`}
              />

              {/* Glowing "Ignition" Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_rgba(120,50,255,0.15)_0%,_transparent_70%)]" />

              <h3 className="relative z-10 text-[10px] md:text-xs font-bold tracking-[0.4em] text-gray-400 uppercase group-hover:text-white group-hover:scale-110 transition-all duration-500 text-center px-4">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}