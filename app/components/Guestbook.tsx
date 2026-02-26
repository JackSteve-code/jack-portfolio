'use client';

import Giscus from '@giscus/react';

export default function Guestbook() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
      <h2 className="text-3xl font-bold mb-12 text-center">Guestbook</h2>
      <div className="glass-card p-8 rounded-2xl">
        <Giscus
          repo="JackSteve-code/JackSteve-code.github.io"
          repoId="R_kgDORTFcvA"
          category="Guestbook"
          categoryId="DIC_kwDORTFcvM4C3PU8"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark_dimmed"
          lang="en"
          loading="lazy"
        />
      </div>
    </section>
  );
}