export default function Performance() {
  return (
    <section className="py-20 border-t border-zinc-800 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div><div className="text-5xl font-bold">35%</div><div className="text-zinc-500 mt-2">Lower inference latency</div></div>
        <div><div className="text-5xl font-bold">15h</div><div className="text-zinc-500 mt-2">Reduced ramp-up time</div></div>
        <div><div className="text-5xl font-bold">25%</div><div className="text-zinc-500 mt-2">Fewer support tickets</div></div>
        <div><div className="text-5xl font-bold">7</div><div className="text-zinc-500 mt-2">Production architectures</div></div>
      </div>
    </section>
  );
}