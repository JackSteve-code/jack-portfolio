// components/SpotifyLastPlayed.tsx
'use client';

import useSWR from 'swr';
import Image from 'next/image';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function SpotifyLastPlayed() {
  const { data, error } = useSWR('/api/spotify', fetcher, { refreshInterval: 15000 });

  if (error || !data?.isPlaying) {
    return (
      <div className="p-8 bg-black/60 rounded-3xl border border-purple-900/30 text-center">
        <p className="text-xl">Not playing anything right now...</p>
      </div>
    );
  }

  return (
    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-black/80 to-purple-950/50 border border-purple-500/30 shadow-2xl overflow-hidden">
      <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
        Last Played
      </h3>
      
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-40 h-40 relative rounded-xl overflow-hidden shadow-lg">
          <Image src={data.albumArt} alt="Album cover" fill className="object-cover" />
        </div>
        
        <div className="flex-1">
          <p className="text-2xl font-bold">{data.title}</p>
          <p className="text-lg text-gray-300">{data.artist}</p>
          <a
            href={data.songUrl}
            target="_blank"
            className="text-green-400 hover:underline mt-2 inline-block"
          >
            Listen on Spotify →
          </a>
        </div>
      </div>
      
      {/* Optional vinyl bg or animation */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-20">
        {/* You can add a vinyl SVG or image here */}
      </div>
    </div>
  );
}