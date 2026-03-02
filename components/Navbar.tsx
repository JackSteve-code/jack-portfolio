'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      {/* Outer container with glassmorphism */}
      <div className="flex items-center gap-1 px-2 py-1.5 bg-[#121212]/50 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.name} className="relative flex flex-col items-center">
              {/* Top Indicator Bar (only for active link) */}
              {isActive && (
                <div className="absolute -top-[10px] w-6 h-[3px] bg-white rounded-full blur-[1px] shadow-[0_0_8px_white]" />
              )}
              
              <Link
                href={link.href}
                className={`px-4 py-2 text-[15px] font-medium rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/10 text-white' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            </div>
          );
        })}

        {/* More Dropdown */}
        <button className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">
          More <span className="text-[10px] mt-1 opacity-50">▼</span>
        </button>

        {/* Book a Call Pill */}
        <Link
          href="/book-call"
          className="ml-2 px-6 py-2 text-[15px] font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
        >
          Book a Call
        </Link>
      </div>
    </nav>
  );
}