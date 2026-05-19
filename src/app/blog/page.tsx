'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: "The Hormone Hierarchy: Why Testosterone Isn't Everything",
    excerpt: "Most biohackers obsess over testosterone. But without understanding the cortisol-DHEA axis, you're building on sand. Here's what actually matters.",
    date: "May 15, 2026",
    readTime: "8 min read",
    category: "Hormones"
  },
  {
    id: 2,
    title: "Peptides in 2026: What the FDA Approved (And Why It Changes Everything)",
    excerpt: "14 new peptides got FDA approval this year. We analyzed each one. Here's which ones actually work for optimization vs. which are overhyped.",
    date: "May 10, 2026",
    readTime: "12 min read",
    category: "Peptides"
  },
  {
    id: 3,
    title: "The Personalized Protocol Framework: Beyond Generic Biohacking",
    excerpt: "Why cookie-cutter protocols fail. How to build a system that adapts to YOUR body, YOUR genetics, YOUR lifestyle. The framework inside the Bible.",
    date: "May 5, 2026",
    readTime: "10 min read",
    category: "Systems"
  },
  {
    id: 4,
    title: "Sleep Optimization: The Foundation No One Talks About",
    excerpt: "You can't optimize hormones without optimizing sleep. Here's the exact protocol we use with 2,800+ buyers.",
    date: "April 28, 2026",
    readTime: "9 min read",
    category: "Sleep"
  },
  {
    id: 5,
    title: "Nutrition Science vs. Nutrition Dogma: What PubMed Actually Says",
    excerpt: "Forget the diet wars. We analyzed 200+ peer-reviewed studies. Here's what the science actually shows about protein, carbs, and fats.",
    date: "April 20, 2026",
    readTime: "11 min read",
    category: "Nutrition"
  },
  {
    id: 6,
    title: "Building Your Personal Lab: How to Test Like a Biohacker",
    excerpt: "You can't optimize what you don't measure. Here's the exact testing protocol we recommend for tracking your optimization journey.",
    date: "April 15, 2026",
    readTime: "7 min read",
    category: "Testing"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl font-bold mb-6 font-sora">
            <span className="text-white">The WeightWise</span> <span className="text-[#00d9ff]">Blog</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-xl text-gray-300 max-w-3xl">
            Deep dives into hormone optimization, peptide science, and the systems that actually work. Updated weekly with research-backed insights.
          </motion.p>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, i) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-8 hover:border-[#00d9ff]/50 transition-all hover:shadow-lg hover:shadow-[#00d9ff]/10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#ff6600] text-sm font-semibold uppercase">{article.category}</span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{article.title}</h3>
                <p className="text-gray-300 mb-6">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{article.date}</span>
                  <motion.button whileHover={{ x: 5 }} className="text-[#00d9ff] font-semibold hover:text-[#00ff88] transition-colors">

                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 bg-[#0f132a]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-sora">Subscribe to Weekly Insights</h2>
          <p className="text-gray-300 mb-8">Get the latest research-backed articles on optimization delivered to your inbox.</p>
          <motion.div whileHover={{ scale: 1.05 }} className="flex gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 bg-[#0a0e27] border border-[#00d9ff]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff]" />
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/50 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300">
              Subscribe
            </motion.button>
          </motion.div>
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
