// ./components/Software.tsx

export const softwareProjects = [
  {
    title: "Software Architecture & Engineering Deep Dives",
    subtitle: "Live Project Collection",
    description: "A curated series of in-depth, battle-tested technical documentation projects covering resilient distributed systems, event-driven architectures, observability as a first-class concern, sustainable/green computing practices, and formal verification strategies for planetary-scale reliability. Designed as living reference architectures for 2026-era engineering teams building complex, cloud-native systems.",
    bullets: [
      "Comprehensive deep dives into resilience, observability, event-driven patterns, green software, and distributed system correctness",
      "Hybrid formal verification + runtime monitoring to bridge theory and production reality",
      "Carbon-aware engineering and planetary-scale reliability principles for modern cloud-native workloads"
    ],
    tech: [
      { name: "NEXT.JS", icon: "N" },
      { name: "REACT", icon: "⚛️" },
      { name: "TYPESCRIPT", icon: "TS" },
      { name: "TAILWIND", icon: "🌬️" },
      { name: "VERCEL", icon: "▲" }
    ],
    link: "#"
  },
  {
    title: "The Reliability Crisis of Planetary-Scale Systems",
    subtitle: "Live Project",
    description: "An exhaustive framework tackling the reliability crisis in planetary-scale distributed systems. This work formalizes layered models addressing network partitions, Byzantine faults, and economic availability trade-offs using TLA⁺ and Isabelle/HOL. It elevates fault tolerance from ad-hoc heuristics to verifiable properties through composable primitives and Kubernetes-aware consensus implementations.",
    bullets: [
      "Multi-cloud failure modeling and formal verification of consensus (Raft, Paxos, pBFT)",
      "Composable fault-tolerance primitives with automated refinement pipelines",
      "Economic modeling of availability SLAs and CAP theorem trade-offs in practice"
    ],
    tech: [
      { name: "NEXT.JS", icon: "N" },
      { name: "REACT", icon: "⚛️" },
      { name: "TYPESCRIPT", icon: "TS" },
      { name: "TAILWIND", icon: "🌬️" },
      { name: "VERCEL", icon: "▲" }
    ],
    link: "https://jacksteve-code.github.io/MY-RESILIENT-DOCS/"
  },
  {
    title: "Event-Driven Microservices Evolution",
    subtitle: "Live Project",
    description: "A forward-looking exploration of event-driven microservices with a focus on sustainable engineering. Utilizing Apache Kafka and Kepler/eBPF-based power profiling, this project demonstrates emission reductions of 35–45% while maintaining performance. Integrates Green Software Foundation principles with practical patterns for carbon-intelligent workload migration.",
    bullets: [
      "Carbon-aware scheduling and workload migration using real-time grid intensity signals",
      "eBPF-powered energy telemetry and Kepler integration for container platforms",
      "Event-driven patterns with Kafka + sustainable Kubernetes orchestration"
    ],
    tech: [
      { name: "NEXT.JS", icon: "N" },
      { name: "REACT", icon: "⚛️" },
      { name: "TYPESCRIPT", icon: "TS" },
      { name: "TAILWIND", icon: "🌬️" },
      { name: "VERCEL", icon: "▲" }
    ],
    link: "https://jacksteve-code.github.io/EVENT-DRIVEN-MICROSERVICES/"
  },
  {
    title: "Observability-Driven Development (ODD)",
    subtitle: "Live Project",
    description: "A methodology centering observability within the SDLC. Covers OpenTelemetry instrumentation, real-time streaming with Pulsar/Flink, and ML-based anomaly prediction. This approach reduces MTTD/MTTR and enables predictive reliability and self-healing behaviors in microservices and AI-augmented environments.",
    bullets: [
      "Full OpenTelemetry adoption with context propagation and causal inference engines",
      "Real-time anomaly detection + chaos validation (Chaos Mesh / Litmus)",
      "Predictive reliability through ML ensembles and automated remediation signals"
    ],
    tech: [
      { name: "NEXT.JS", icon: "N" },
      { name: "REACT", icon: "⚛️" },
      { name: "TYPESCRIPT", icon: "TS" },
      { name: "TAILWIND", icon: "🌬️" },
      { name: "VERCEL", icon: "▲" }
    ],
    link: "https://jacksteve-code.github.io/OBSERVABILITY-DRIVEN-DEVELOPMENT/"
  },
  {
    title: "Green Computing & Sustainable Software Engineering",
    subtitle: "Live Project",
    description: "Practical guidance on minimizing the carbon footprint of container orchestration. Built around real-time carbon intensity metrics and PUE-aware optimization using Kepler/eBPF tools. It empowers teams to align engineering decisions with environmental goals without sacrificing scalability.",
    bullets: [
      "Real-time carbon footprint telemetry and grid-aware workload placement",
      "Energy profiling with eBPF + Kepler in production clusters",
      "Green Software Foundation principles applied to container orchestration"
    ],
    tech: [
      { name: "NEXT.JS", icon: "N" },
      { name: "REACT", icon: "⚛️" },
      { name: "TYPESCRIPT", icon: "TS" },
      { name: "TAILWIND", icon: "🌬️" },
      { name: "VERCEL", icon: "▲" }
    ],
    link: "https://jacksteve-code.github.io/GREEN-COMPUTING/"
  },
  {
    title: "Distributed Systems Verification & Hybrid Correctness",
    subtitle: "Live Project",
    description: "A rigorous treatment of correctness bridging offline formal verification with runtime monitoring. Details hybrid techniques using TLA⁺ and Alloy for proving core properties, combined with eBPF monitors and CI/CD-integrated validation to enable self-verifying infrastructure.",
    bullets: [
      "Formal modeling and proof of consensus protocols + CRDTs with TLA⁺ / Alloy / Isabelle",
      "Executable runtime monitors derived from verified invariants via eBPF",
      "Hybrid offline + online verification pipeline for continuous correctness"
    ],
    tech: [
      { name: "NEXT.JS", icon: "N" },
      { name: "REACT", icon: "⚛️" },
      { name: "TYPESCRIPT", icon: "TS" },
      { name: "TAILWIND", icon: "🌬️" },
      { name: "VERCEL", icon: "▲" }
    ],
    link: "https://jacksteve-code.github.io/distributed-dos/"
  }
];

// Optional: A simple component to render these if needed, 
// or you can just import the constant above into your main page.
const Software = () => {
  return (
    <section id="software">
      {/* Your rendering logic here */}
    </section>
  );
};

export default Software;