'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-screen-xl px-4">
      <div
        className={`
          flex items-center justify-between sm:justify-center
          gap-6 sm:gap-10 px-6 sm:px-10 py-3 sm:py-4
          bg-black/50 backdrop-blur-xl border border-white/10
          rounded-full shadow-lg transition-all duration-300
        `}
      >
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          JS
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/about" className="hover:text-white transition-colors duration-200">
            About
          </Link>
          <Link href="/work" className="hover:text-white transition-colors duration-200">
            Work
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors duration-200">
            Blog
          </Link>
          <Link href="/more" className="hover:text-white transition-colors duration-200 flex items-center gap-1">
            More <span className="text-xs">▼</span>
          </Link>
        </div>

        {/* Book a Call button */}
        <Link
          href="/book-call"
          className="
            px-5 sm:px-6 py-2.5 text-sm font-medium
            bg-purple-600 hover:bg-purple-700 active:bg-purple-800
            rounded-full transition-all duration-300
            shadow-md hover:shadow-purple-500/30
            whitespace-nowrap
          "
        >
          Book a Call
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4">
          <div className="flex flex-col gap-4 py-4 px-6 bg-black/70 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
            <Link href="/about" className="text-gray-200 hover:text-white transition" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/work" className="text-gray-200 hover:text-white transition" onClick={() => setIsOpen(false)}>
              Work
            </Link>
            <Link href="/blog" className="text-gray-200 hover:text-white transition" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/more" className="text-gray-200 hover:text-white transition" onClick={() => setIsOpen(false)}>
              More
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}