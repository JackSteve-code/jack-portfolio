export default function Hero() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-24">
      <h1 className="
        text-5xl sm:text-6xl md:text-7xl lg:text-8xl
        font-bold leading-tight tracking-tight
        bg-gradient-to-r from-white via-purple-200 to-white
        bg-clip-text text-transparent mb-6
      ">
        Hello, I'm Jack Steve
      </h1>

      
      

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <button className="
          px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800
          hover:from-purple-500 hover:to-purple-700
          text-white font-medium rounded-full transition-all shadow-lg hover:shadow-purple-500/30
        ">
          
        </button>

        <a href="mailto:hello@jacksteve.dev" className="text-purple-300 hover:text-purple-200 transition">
          
        </a>
      </div>
    </div>
  );
}