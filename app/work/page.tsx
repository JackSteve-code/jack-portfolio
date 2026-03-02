// components/WorkSection.tsx
'use client';

import { motion } from 'framer-motion';

const jobs = [
  {
    id: "01",
    category: "AI SYSTEMS & LLMOPS",
    date: "JAN 2022 — PRESENT",
    title: "Machine Learning Engineer & AI Systems Specialist",
    description:
      "I design, build, and deploy machine learning systems and production AI pipelines for startups and tech teams. Key achievements include: • Created a full end-to-end LLMOps system using LangChain, PyTorch, and Kubernetes that reduced deployment time from 2 weeks to under 4 hours • Cut cloud inference costs by 35% through smart model compression and efficient batch processing • Built a real-time fraud detection model with XGBoost reaching 96% accuracy, saving a fintech client $180,000+ per year • Integrated ML-powered recommendations into a Next.js/FastAPI stack, increasing user retention by 28% • Established CI/CD pipelines for ML, maintaining 99.8% uptime across all production applications.",
    gradient: "from-[#00FF41]/20 to-purple-900/30",
  },
  {
    id: "02",
    category: "TECHNICAL WRITING – NAIROBI",
    date: "JUN 2023 — PRESENT",
    title: "Senior Technical Writer – AI & Infrastructure (Freelance / Remote)",
    description:
      "Leading technical documentation for multiple AI startups and open-source projects in Nairobi and globally. Key achievements include: • Authored 15+ production-grade LLMOps and distributed systems blueprints published on GitHub and personal blog • Created comprehensive guides on vLLM, Langfuse, Groq, and federated learning that have collectively reached 12,000+ developers • Developed docs-as-code workflows using Docusaurus, Sanity, and Git that became the standard for two AI teams • Conducted technical writing workshops for 40+ engineers in Nairobi tech meetups and online communities.",
    gradient: "from-purple-500/20 to-[#00FF41]/15",
  },
  {
    id: "03",
    category: "TECHNICAL WRITING – NAIROBI",
    date: "MAR 2021 — MAY 2023",
    title: "Technical Content Lead – Nairobi AI Collective",
    description:
      "Directed knowledge management and technical content strategy for a Nairobi-based AI community and consultancy. Key contributions include: • Built and maintained a public knowledge base with 80+ articles on production ML patterns, LLM fine-tuning, and MLOps best practices • Pioneered structured documentation using Markdown, Git, and architectural decision records (ADRs), reducing onboarding time for new contributors by 60% • Collaborated with 20+ local engineers to translate complex research papers into accessible developer guides • Mentored junior writers and established content review processes that improved clarity and reproducibility.",
    gradient: "from-pink-500/20 to-[#00FF41]/10",
  },
  {
    id: "04",
    category: "COMPUTER VISION & NLP",
    date: "SUMMER 2021",
    title: "Machine Learning Engineering Intern",
    description:
      "Worked on production-grade ML projects delivering measurable improvements to core engineering workflows. Key contributions include: • Raised defect detection accuracy from 82% to 94% using EfficientNet, cutting manual review time by 55% • Built a data pipeline with Apache Airflow and Spark handling 2M+ records daily, reducing processing time by 65% • Developed an NLP tool using BERT with a 92% F1-score, improving automated ticket sorting by 22% • Authored production-ready code and documentation, monitored via Prometheus and Grafana integration.",
    gradient: "from-purple-500/20 to-[#00FF41]/15",
  },
  {
    id: "05",
    category: "TECHNICAL WRITING & PROCESS DESIGN",
    date: "2019 — 2021",
    title: "Content & Documentation Lead – Eastleigh IT",
    description:
      "Led documentation and knowledge management transformation for a mid-sized IT services firm. Core achievements include: • Pioneered docs-as-code adoption using Markdown and Git, reducing documentation drift by ~70% • Translated complex backend specifications into developer-first user guides and architectural decision records (ADRs) • Established content governance processes that became the foundation for later AI-specialized work • Trained 15+ engineers on structured technical writing and version-controlled knowledge bases.",
    gradient: "from-pink-500/20 to-[#00FF41]/10",
  },
];

export default function WorkSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Consistent purple + green neon background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,50,255,0.10)_0%,_rgba(0,255,65,0.06)_45%,_rgba(5,5,5,1)_80%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[#00FF41] font-mono text-sm md:text-base tracking-[0.4em] uppercase"
          >
            CAREER PATH
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif italic font-black mt-5 mb-3 text-white"
          >
            Work <span className="text-[#00FF41] not-italic">History</span>
          </motion.h2>
        </div>

        {/* Jobs */}
        <div className="space-y-10 md:space-y-12">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Subtle green-purple hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF41]/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

              {/* Card */}
              <div className="relative glass-card p-8 md:p-10 rounded-3xl border border-gray-800/50 hover:border-[#00FF41]/40 transition-all duration-300 bg-black/45 backdrop-blur-lg">
                {/* Metadata row */}
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 text-sm">
                  <span className="text-[#00FF41] font-mono text-lg md:text-xl font-black opacity-40 group-hover:opacity-70 transition-opacity">
                    {job.id}
                  </span>
                  <span className="px-4 py-1.5 bg-black/60 border border-gray-700/60 rounded-full text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
                    {job.category}
                  </span>
                  <span className="text-gray-500 font-mono text-xs md:text-sm ml-auto">
                    {job.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-serif italic font-bold mb-6 text-white group-hover:text-[#00FF41] transition-colors leading-tight">
                  {job.title}
                </h3>

                {/* Description */}
                <div className="text-gray-200 text-base md:text-lg leading-relaxed font-serif italic space-y-4">
                  {job.description.split('•').map((point, i) =>
                    i === 0 ? (
                      <p key={i} className="text-gray-300 font-medium">
                        {point.trim()}
                      </p>
                    ) : (
                      <div key={i} className="flex gap-4 pl-2">
                        <span className="text-[#00FF41] shrink-0 mt-1.5 text-xl">›</span>
                        <p className="group-hover:text-gray-100 transition-colors">
                          {point.trim()}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}