export default function About() {
  return (
    <section className="py-20 border-t border-zinc-800">
      <div className="text-center mb-10">
        <p className="text-sm tracking-[3px] text-zinc-500 uppercase">Know About Me</p>
        <h2 className="text-3xl font-bold mt-4 max-w-2xl mx-auto leading-snug">
          <span className="italic bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
            A Technical Writer, Software & ML Infrastructure Engineer
          </span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed text-center italic">
        A technical writer and proactive AI infrastructure engineer 
        passionate about building <span className="text-emerald-400/80 font-medium">production-grade LLM serving systems</span>. 
        From vLLM on distributed clusters to compliance-ready federated learning 
        frameworks, I thrive on turning complex AI challenges into clean, scalable solutions.
        
        <div className="mt-6 text-zinc-500 text-base not-italic border-t border-zinc-800/50 pt-6">
          When I'm not architecting infrastructure, I'm creating technical content 
          that reduces ramp-up time and makes <span className="text-purple-400/80">advanced AI accessible</span>.
        </div>
      </div>
    </section>
  );
}