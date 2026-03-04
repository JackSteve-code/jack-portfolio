export default function Footer() {
  return (
    <section className="py-24 border-t border-zinc-800 text-center">
      <p className="text-sm tracking-[3px] text-zinc-500 uppercase">Open to work</p>
      
      <h2 className="text-3xl font-bold mt-8 max-w-2xl mx-auto leading-relaxed">
        <span className="italic bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
          I am not selling "coding time". I am selling deep expertise, reduced risk, and accelerated timelines for complex AI initiatives.
        </span>
      </h2> 
      
      <h3 className="text-2xl font-bold mt-6 text-zinc-200">
        Let’s make it happen.
      </h3>
      
      <a 
        href="https://www.linkedin.com/in/jack-steve-7431112a9" 
        className="mt-10 inline-block px-6 py-2 border border-zinc-700 rounded-full text-sm text-zinc-300 hover:text-emerald-400 hover:border-emerald-400 transition-all"
      >
        Connect on LinkedIn →
      </a>
      
      <p className="mt-20 text-xs text-zinc-600 tracking-widest">
        © 2026 JACK STEVE
      </p>
    </section>
  );
}