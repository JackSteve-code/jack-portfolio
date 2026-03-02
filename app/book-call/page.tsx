// components/Contact.tsx
"use client";

import React from 'react';
import Link from 'next/link';           // ← THIS WAS MISSING
import { Mail, Calendar, MessageSquare, Github, Linkedin, Twitter, Copy, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const email = "js8671574@gmail.com";
  const whatsappNumber = "254799186010";

  const copyToClipboard = (text: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(text);
      alert("Email copied to clipboard!");
    }
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=Hi Steve, I'd like to collaborate!`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative py-24 bg-[#030005] overflow-hidden text-white font-sans">
      {/* Simplified Deep Purple Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(76,29,149,0.3)_0%,_rgba(3,0,5,1)_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header with Serif Italic Style */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-4 tracking-tighter bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
            Let&apos;s talk
          </h2>
          <p className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase">
            OPEN TO PROJECTS & COLLABORATIONS
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 rounded-xl overflow-hidden bg-neutral-900/10 backdrop-blur-sm">
          
          {/* 01. Schedule a Call */}
          <Link 
            href="/book-call" 
            className="p-10 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/[0.03] transition-all relative block"
          >
            <span className="text-[10px] font-mono text-gray-600 absolute top-6 left-8 uppercase tracking-widest">01</span>
            <ArrowUpRight className="absolute top-6 right-8 w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
            
            <div className="mt-4">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                <Calendar size={20} />
              </div>
              <h3 className="text-2xl font-semibold mb-2 italic">Schedule a call</h3>
              <p className="text-gray-400 font-mono text-sm mb-6">30 min · Video or Phone</p>
              <span className="text-xs font-bold tracking-widest uppercase border-b border-purple-500/50 pb-1 group-hover:text-purple-400">
                Book Appointment
              </span>
            </div>
          </Link>

          {/* 02. Send an Email */}
          <div className="p-10 group hover:bg-white/[0.03] transition-all relative">
            <span className="text-[10px] font-mono text-gray-600 absolute top-6 left-8 uppercase tracking-widest">02</span>
            <button onClick={() => copyToClipboard(email)} className="absolute top-6 right-8 z-20">
              <Copy className="w-4 h-4 text-gray-600 hover:text-purple-400 transition-colors" />
            </button>
            
            <div className="mt-4">
              <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 text-pink-400">
                <Mail size={20} />
              </div>
              <h3 className="text-2xl font-semibold mb-2 italic">Send an email</h3>
              <p className="text-gray-400 font-mono text-sm break-all">{email}</p>
            </div>
          </div>

          {/* 03. WhatsApp Integration */}
          <div 
            onClick={openWhatsApp} 
            className="col-span-1 md:col-span-2 p-10 border-t border-white/10 group hover:bg-white/[0.04] transition-all relative flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">03</span>
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold italic">Quick message</h3>
                <p className="text-gray-500 font-mono text-xs mt-1 italic">Direct via WhatsApp: 0799186010</p>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple-500 transition-all">
              <ArrowUpRight size={20} className="text-gray-500 group-hover:text-white" />
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-16 flex justify-center gap-10 text-gray-600">
          <a href="#" className="hover:text-purple-400 transition-colors"><Linkedin size={22} /></a>
          <a href="#" className="hover:text-white transition-colors"><Github size={22} /></a>
          <a href="#" className="hover:text-purple-400 transition-colors"><Twitter size={22} /></a>
        </div>
      </div>
    </section>
  );
}