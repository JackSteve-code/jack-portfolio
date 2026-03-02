export default function About() {
  return (
    <section className="py-20 border-t border-zinc-800">
      <div className="text-center mb-12">
        <p className="text-sm tracking-[3px] text-zinc-500">KNOW ABOUT ME</p>
        <h2 className="text-5xl font-bold mt-3">Software &amp; ML Infrastructure Engineer</h2>
      </div>

      <div className="max-w-3xl mx-auto text-xl text-zinc-300 leading-relaxed text-center italic">
        I'm Jack Steve, a technical writer, a proactive AI infrastructure engineer passionate about building production-grade LLM serving systems. 
        From vLLM on distributed clusters to compliance-ready federated learning frameworks, I thrive on turning complex AI challenges into clean, scalable solutions.
        <br /><br />
        When I'm not architecting infrastructure, I'm creating technical content that reduces ramp-up time and makes advanced AI accessible.
      </div>
    </section>
  );
}