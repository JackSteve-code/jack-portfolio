'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Tech categories
const categories = {
  "AI/ML": ["PyTorch", "vLLM", "LangChain", "Transformers", "CUDA", "TensorFlow"],
  "Infrastructure": ["Kubernetes", "Docker", "AWS", "Ray", "Kubeflow", "MLflow"],
  "Languages": ["Python", "TypeScript", "Rust", "Go", "C++", "JavaScript"],
  "Data": ["Apache Spark", "Flink", "Kafka", "Postgres", "Redis", "Elasticsearch"]
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("AI/ML");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-[#00FF41]">Stack</span>
          </h2>
          <p className="text-gray-400">Tools I ship production code with</p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-[#00FF41] text-black font-medium'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3D Rotating Cloud */}
        <div 
          ref={containerRef}
          className="relative h-[400px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-3xl aspect-square">
            {categories[activeCategory as keyof typeof categories].map((tech, index) => {
              // Calculate position in a sphere
              const angle = (index / categories[activeCategory as keyof typeof categories].length) * Math.PI * 2;
              const radius = 140;
              const yOffset = Math.sin(index * 2.5) * 40;
              
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius * 0.6 + yOffset;
              
              return (
                <motion.div
                  key={tech}
                  className="absolute left-1/2 top-1/2"
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{ 
                    x: x,
                    y: y,
                    opacity: 1,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  style={{
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className={`
                    px-4 py-2 bg-gray-900 rounded-lg whitespace-nowrap
                    border border-gray-800 shadow-lg
                    hover:border-[#00FF41] hover:bg-gray-800 transition-colors
                  `}>
                    <span className="text-sm font-mono">{tech}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Additional tech tags */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-2">
            {["Prisma", "Zod", "tRPC", "Next.js", "Express", "FastAPI", "GraphQL", "REST"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-900 text-xs text-gray-400 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}