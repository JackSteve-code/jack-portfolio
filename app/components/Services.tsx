'use client';
import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Scalable LLM Serving",
    desc: "Optimizing inference with vLLM, quantization, and continuous batching to slash latencies by 35%+ while reducing costs.",
    tags: ["vLLM", "Quantization", "Continuous Batching"],
    color: "from-green-500/20"
  },
  {
    id: "02",
    title: "Distributed Training",
    desc: "Hardware-aware parallelism strategies for massive clusters achieving 40% faster training times.",
    tags: ["FSDP", "DeepSpeed", "Multi-GPU"],
    color: "from-blue-500/20"
  },
  {
    id: "03",
    title: "MLOps Infrastructure",
    desc: "End-to-end LLMOps pipelines with experiment tracking, model registry, and automated deployment.",
    tags: ["Kubeflow", "MLflow", "Kubernetes"],
    color: "from-purple-500/20"
  }
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="text-center mb-20">
        <span className="text-[#00FF41] font-mono text-sm tracking-widest">EXPERTISE</span>
        <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 text-white">
          THE <span className="text-[#00FF41]">SECRET SAUCE</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Specialized in high-performance AI infrastructure and production ML systems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl`} />
            
            {/* Card */}
            <div className="relative glass-card p-8 rounded-3xl h-full border border-gray-800/50 hover:border-[#00FF41]/30 transition-all duration-300">
              <div className="text-[#00FF41] font-mono text-7xl font-black mb-6 opacity-20 group-hover:opacity-40 transition-opacity">
                {service.id}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00FF41] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-gray-900 rounded-full text-gray-300 border border-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}