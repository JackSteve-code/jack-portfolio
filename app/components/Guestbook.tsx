// components/Guestbook.tsx
'use client';

import Giscus from '@giscus/react';

export default function Guestbook() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden text-white font-sans">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,50,255,0.12)_0%,_rgba(5,5,5,1)_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-serif italic mb-12 tracking-tighter bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Guestbook
        </h2>

        {/* This glass container hides the 'ugly' default background of Giscus */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 md:p-8 backdrop-blur-md">
          <Giscus
            repo="JackSteve-code/JackSteve-code.github.io"
            repoId="R_kgDORTFcvA"
            category="Guestbook"
            categoryId="DIC_kwDORTFcvM4C3PU8"
            mapping="pathname"
            theme="transparent_dark"
            lang="en"
            loading="lazy"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom" // Moves the sign-in box below the comments
          />
        </div>
      </div>
    </section>
  );
}