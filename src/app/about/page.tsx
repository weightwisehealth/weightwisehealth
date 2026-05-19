'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl font-bold mb-6 font-sora">
            <span className="text-white">About</span> <span className="text-[#00d9ff]">WeightWise</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-xl text-gray-300 max-w-3xl">
            We're building the future of health optimization. One system. One community. One mission.
          </motion.p>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-sora">Our Mission</h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-xl text-gray-300 mb-8 leading-relaxed">
            WeightWise Health exists to democratize hormone optimization. For too long, the science of human optimization has been locked behind paywalls, gatekeeping, and pseudoscience.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="text-xl text-gray-300 mb-8 leading-relaxed">
            We built The Optimization Bible to change that. Every claim is backed by PubMed citations. Every protocol is tested. Every system is actionable.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="text-xl text-gray-300 leading-relaxed">
            Our goal: 100,000 people transforming their health using science-backed systems. Not hype. Not shortcuts. Just results.
          </motion.p>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 bg-[#0f132a]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-sora text-center">Why We Built This</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-[#0a0e27]/50 border border-[#00d9ff]/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00d9ff] mb-4">The Problem</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-[#ff6600] flex-shrink-</span>0">
                  <span>Biohacking guides are generic and don't adapt to YOUR body</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6600] flex-shrink-</span>0">
                  <span>Most "optimization" advice is entertainment, not science</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6600] flex-shrink-</span>0">
                  <span>Peptides and hormones are shrouded in mystery and misinformation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6600] flex-shrink-</span>0">
                  <span>There's no system for personalized optimization</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="bg-[#0a0e27]/50 border border-[#00ff88]/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00ff88] mb-4">Our Solution</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex                <li className="flex                <li className="flex                                 <span>The Optimization Bible: A system that adapts to YOUR data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00ff88] flex-shrink-</span>0">
                  <span>200+ PubMed citations backing every claim</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00ff88] flex-shrink-</span>0">
                  <span>Quarterly updates as new peptides and protocols emerge</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00ff88] flex-shrink-</span>0">
                  <span>A community of 2,800+ people transforming their health</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-sora text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Science-Backed", desc: "Every claim is backed by peer-reviewed research. No invent              { title: "Science-Backed", title: "Personalized", desc: "Your body is unique. Your protocol should be too. We adapt to YOUR data." },
              { title: "Actionable", desc: "Theory is worthless without action. Every chapter is built for implementation." }
            ].map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-[#00d9ff] mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 bg-[#0f132a]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-sora">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Buyers", value: "2,847" },
              { label: Average Rating, value: 4.9" },
              { label: "PubMed Citations", value: "200+" },
              { label: "Chapters", value: "40" }
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                <p className="text-4xl font-bold text-[#00d9ff] mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-12 px-6 border-t border-[#00d9ff]/20 text-center text-gray-400">
        < 2026 WeightWise Health. All rights reserved.</p>p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-[#00d9ff] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#00d9ff] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#00d9ff] transition-colors">Contact</a>
        </div>
      </motion.footer>
    </div>
  );
}
