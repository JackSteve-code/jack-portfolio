
'use client';

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

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-lg text-zinc-400 leading-relaxed text-center italic mb-10">
          A technical writer and proactive AI infrastructure engineer 
          passionate about building <span className="text-emerald-400/80 font-medium">production-grade LLM serving systems</span>. 
          From vLLM on distributed clusters to compliance-ready federated learning 
          frameworks, I thrive on turning complex AI challenges into clean, scalable solutions.
          
          <div className="mt-6 text-zinc-500 text-base not-italic border-t border-zinc-800/50 pt-6">
            When I'm not architecting infrastructure, I'm creating technical content 
            that reduces ramp-up time and makes <span className="text-purple-400/80">advanced AI accessible</span>.
          </div>
        </div>

        {/* Extended Background Story */}
        <div className="space-y-6 text-zinc-400 text-base leading-relaxed border-t border-zinc-800/80 pt-10">
          <p className="italic">
            I've spent the last six years at the intersection of three disciplines: distributed systems engineering, MLOps, and technical communication. This combination is rare — and intentional.
          </p>
          <p>
            I started my career as a backend engineer at a fintech startup, where I learned the hard way what happens when production systems lack observability (we once had a 4-hour outage that could have been prevented with better instrumentation). That experience ignited my obsession with reliability and monitoring.
          </p>
          <p>
            When I pivoted to AI infrastructure in 2021, I brought that obsession with me. I've since deployed vLLM clusters serving 50M+ tokens daily, built federated learning pipelines for healthcare data across four continents, and written documentation that reduced onboarding time for new engineers from 6 weeks to 2 weeks.
          </p>
          <p className="font-serif italic text-white/90 text-lg border-l-2 border-emerald-500/50 pl-4 my-6">
            "But here's what drives me: I believe the best infrastructure is invisible. It should just work — quietly, efficiently, and predictably — so that data scientists can focus on models, product teams can focus on users, and no one has to wake up to a pager alert at 3 AM."
          </p>
          <p>
            I write technical content for the same reason. Good documentation doesn't just explain how something works — it makes the complex feel intuitive, reduces cognitive load, and empowers teams to build confidently.
          </p>
          <p className="text-zinc-300 font-medium pt-2">
            That's what I bring to every project: deep technical expertise paired with an engineer's obsession with clarity, reliability, and reducing friction for everyone who touches the system.
          </p>
        </div>
      </div>
    </section>
  );
}

