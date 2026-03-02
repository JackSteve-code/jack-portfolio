// components/CollaborationSection.tsx
// components/CollaborationSection.tsx
import Image from 'next/image';

export default function CollaborationSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-black/80 to-[#0a0015]/80">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left: Avatar with overlapping rings */}
        <div className="relative flex flex-col items-center text-center md:text-left md:items-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-10">
            {/* Outer rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/20" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-800/20 to-black border border-purple-400/10" />
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-700/10 to-black border border-purple-300/5" />

            {/* Avatar */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-purple-500/40 shadow-2xl shadow-purple-900/50">
                <Image
                  src="/avatar.jpg"           
                  alt="Jack Steve"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
            Jack Steve
          </h2>

          <p className="text-xl text-gray-300 max-w-md">
            Software & ML Infrastructure Engineer building high-performance AI systems.
          </p>
        </div>

        {/* Right column */}
        <div className="space-y-12">

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Tools I ship production code with
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "N" },
                { name: "Tailwind", icon: "🌬️" },
                { name: "Python", icon: "🐍" },
                { name: "PyTorch", icon: "🔥" },
                { name: "Redis", icon: "🗄️" },
                { name: "Distributed Systems", icon: "🌐" },
                { name: "LLMOps", icon: "🤖" },
                { name: "Vercel", icon: "▲" },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 px-5 py-3 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-400/40 transition-all text-gray-200 font-medium"
                >
                  <span className="text-xl">{tool.icon}</span>
                  {tool.name}
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration */}
          <div className="bg-black/50 border border-purple-500/10 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-white mb-4">Collaboration</h3>
            <p className="text-gray-300 leading-relaxed">
              Open communication, async updates, zero surprises. I value clear expectations, regular progress shares, and direct feedback — let's build something great without friction.
            </p>
          </div>

          {/* Time zones */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Flexible with time zone communications</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { flag: "🇰🇪", label: "EAT (Ruiru, Kenya)" },
                { flag: "🇺🇸", label: "EST / PST (USA)" },
                { flag: "🇬🇧", label: "GMT / BST (UK)" },
                { flag: "🌍", label: "Flexible globally" },
              ].map((zone) => (
                <div
                  key={zone.label}
                  className="flex items-center gap-3 px-5 py-3 bg-purple-950/30 border border-purple-600/30 rounded-full text-gray-200 font-medium"
                >
                  <span className="text-2xl">{zone.flag}</span>
                  {zone.label}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent mb-6">
              Let's work together
              <br />
              on your next project.
            </h3>
            <a
              href="mailto:js8671574@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-semibold text-lg rounded-full shadow-xl shadow-purple-900/40 transition-all duration-300"
            >
              Get in touch →
              <span className="text-xl">✉️</span>
            </a>
            <p className="mt-4 text-gray-400">
              js8671574@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}