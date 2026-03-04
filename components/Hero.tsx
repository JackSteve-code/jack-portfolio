export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-24">
      <h1 className="
        text-4xl sm:text-5xl md:text-6xl
        font-bold leading-tight tracking-tight
        italic bg-gradient-to-r from-emerald-400 via-emerald-300 to-purple-500
        bg-clip-text text-transparent mb-4
      ">
        Hello, I'm Jack Steve
      </h1>

      <p className="text-zinc-500 text-xs sm:text-sm tracking-[4px] uppercase italic">
        AI Infrastructure & Technical Writing
      </p>
    </div>
  );
}