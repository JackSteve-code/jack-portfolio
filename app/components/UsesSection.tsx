// components/UsesSection.tsx
import Image from 'next/image';

const tools = [
  { name: 'VS Code', icon: '/icons/vscode.png', color: 'from-blue-500 to-cyan-400' },
  { name: 'Next.js', icon: '/icons/nextjs.png', color: 'from-gray-700 to-black' },
  { name: 'Tailwind', icon: '/icons/tailwind.png', color: 'from-teal-400 to-cyan-500' },
  // Add more – use real icons in /public/icons/ or external URLs
];

export default function UsesSection() {
  return (
    <section className="py-20">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
        My Favorite <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Tools</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {tools.map((tool, i) => (
          <div
            key={i}
            className={`
              relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl
              bg-gradient-to-br ${tool.color}
              transform rotate-${i % 2 === 0 ? '-3' : '4'} hover:rotate-0
              transition-transform duration-300 hover:scale-105
              border border-white/10
            `}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              {/* Icon or image */}
              <div className="w-20 h-20 mb-4 relative">
                <Image src={tool.icon} alt={tool.name} fill className="object-contain drop-shadow-lg" />
              </div>
              <p className="text-xl font-bold text-white drop-shadow-md">{tool.name}</p>
            </div>
            {/* Optional polaroid bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/40 flex items-center justify-center text-sm text-white/80">
              {tool.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}