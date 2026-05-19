'use client';
import { motion } from 'framer-motion';
interface HeroProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaSubtext: string;
}
export function Hero({ badge, title, subtitle, ctaText, ctaSubtext }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-block mb-6 px-4 py-2 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-full">
          <span className="text-[#00d9ff] text-sm font-semibold">{badge}</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-6xl md:text-7xl font-black mb-6 leading-tight">
          <span className="text-white">The Optimization</span>
          <span className="bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] bg-clip-text text-transparent"> Bible</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-xl text-gray-300 mb-8 italic">"{subtitle}"</motion.p>
        <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] text-white font-bold py-4 px-12 rounded-lg text-lg mb-6">{ctaText}</motion.button>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-sm text-gray-400">{ctaSubtext}</motion.p>
      </motion.div>
    </section>
  );
}
