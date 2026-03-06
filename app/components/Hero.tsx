export default function Hero() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-24">
      <h1 className="
        text-5xl sm:text-6xl md:text-7xl lg:text-8xl
        font-bold leading-tight tracking-tight
        bg-gradient-to-r from-white via-purple-200 to-white
        bg-clip-text text-transparent mb-6
      ">
        Hey, I'm Jack Steve
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-medium">
        ML Infrastructure Engineer, Software Developer, and Technical Writer
      </p>

      <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
        I build high-performance AI systems that actually run in production — scalable LLMOps pipelines, cost-optimized inference, reliable agent architectures, and observability that catches problems before they burn money.  
        Then I write the clear, no-fluff blueprints so teams can ship faster and break less.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <button className="
          px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800
          hover:from-purple-500 hover:to-purple-700
          text-white font-medium rounded-full transition-all shadow-lg hover:shadow-purple-500/30
        ">
          Let's Build Something →
        </button>

        <a href="mailto:hello@jacksteve.dev" className="text-purple-300 hover:text-purple-200 transition">
          js8671574@gmail.com
        </a>
      </div>
    </div>
  );
}