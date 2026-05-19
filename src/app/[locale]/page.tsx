'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [spotsRemaining, setSpotsRemaining] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsRemaining((prev) => Math.max(0, prev - Math.floor(Math.random() * 2)));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-[#0a0e27]/95 backdrop-blur-md border-b border-[#00d9ff]/20 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] bg-clip-text text-transparent cursor-pointer"
          >
            WeightWise Health
          </motion.h1>
          <div className="hidden md:flex gap-8">
            {['Home', 'Blog', 'Products', 'About'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ color: '#00d9ff' }}
                className="text-gray-300 hover:text-[#00d9ff] transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 border border-[#00d9ff]/50 text-[#00d9ff] rounded hover:bg-[#00d9ff]/10 transition-colors"
          >
            EN
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-40 pb-20 px-6 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00d9ff] opacity-5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block mb-6 px-4 py-2 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-full relative z-10"
        >
          <span className="text-[#00d9ff] text-sm font-semibold uppercase tracking-wider">Founding Access — 100 Spots Only</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl font-black mb-6 leading-tight relative z-10"
        >
          <span className="text-white">The Optimization</span>
          <span className="bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] bg-clip-text text-transparent"> Bible</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 italic max-w-3xl mx-auto relative z-10"
        >
          "You are about to see your body in a way you will <span className="font-bold text-white">never be able to unsee.</span>"
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/50 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 mb-6 relative z-10"
        >
          Get Founding Access — $79.90
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm text-gray-400 uppercase tracking-wider relative z-10"
        >
          Price Becomes $129.90 After 100 Buyers · No Countdown Trick
        </motion.p>
      </motion.section>

      {/* What This Is / What This Is Not */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-[#0f132a]/50 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[#00d9ff] mb-8 uppercase">What This Is</h3>
            <motion.ul className="space-y-4 text-gray-300">
              {[
                'The first system where YOU are the laboratory',
                'A movement — not a product',
                '40 chapters of applied biology for any human body',
                'Education built on real PubMed citations',
              ].map((item, i) => (
                <motion.li key={i} variants={itemVariants} className="flex gap-3">
                  <span className="text-[#00ff88] font-bold">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[#ff6600] mb-8 uppercase">What This Is Not</h3>
            <motion.ul className="space-y-4 text-gray-300">
              {[
                'Another biohacking guide',
                'A competitor to Huberman or Examine.com',
                'A product that starts with the compound',
                'A men-only manual',
                'A $49 blog post in PDF form',
              ].map((item, i) => (
                <motion.li key={i} variants={itemVariants} className="flex gap-3">
                  <span className="text-[#ff6600] font-bold">✕</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Who This Is For */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 text-center"
      >
        <h3 className="text-4xl font-bold mb-4">WHO THIS IS FOR</h3>
        <p className="text-xl text-gray-300 mb-12">
          <span className="text-[#00d9ff] font-bold">The filter is your symptom.</span> Not your age. Not your gender.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-8"
        >
          <motion.ul className="space-y-4 text-gray-300 text-lg">
            {[
              'You feel like you should have more energy than this.',
              "You're doing everything right and still feel like you're running below capacity.",
              "You're not ready to accept that decline is mandatory.",
            ].map((item, i) => (
              <motion.li key={i} variants={itemVariants}>
                • {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* The Architecture */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-[#0f132a]/50"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">THE ARCHITECTURE</h3>
          <p className="text-center text-gray-300 mb-12 text-lg">3 layers. Only one competitor has attempted the first.</p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'THE KNOWLEDGE',
                subtitle: 'What everyone tries to have',
                desc: 'Hormones, peptides, body composition. A solid scientific foundation backed by real PubMed citations.',
              },
              {
                title: 'THE SYSTEM',
                subtitle: 'What nobody delivers',
                desc: 'Calculators, decision tables, objective-based protocols. You input your real data — you get a real direction.',
              },
              {
                title: 'THE UPDATE',
                subtitle: 'Impossible to copy',
                desc: 'Quarterly updates exclusive to verified buyers. The pirated PDF ages. Your copy never does.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-[#0a0e27] border border-[#00d9ff]/20 rounded-lg p-8 hover:border-[#00d9ff]/50 transition-colors"
              >
                <h4 className="text-lg font-bold text-[#00d9ff] mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 mb-4">{item.subtitle}</p>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* What's Inside */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">WHAT'S INSIDE</h3>
          <p className="text-center text-gray-300 mb-12 text-lg">40 chapters. 4 blocks. One complete system.</p>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { num: '01', title: 'FOUNDATION', desc: "You don't know your own body", chapters: '10 CHAPTERS' },
              { num: '02', title: 'HORMONAL SYSTEM', desc: 'The instruments of the laboratory', chapters: '10 CHAPTERS' },
              { num: '03', title: 'PEPTIDES & FULL SPECTRUM', desc: "The frontier medicine hasn't delivered yet", chapters: '10 CHAPTERS' },
              { num: '04', title: 'PERSONALIZED PROTOCOL', desc: 'You are the scientist of your laboratory', chapters: '10 CHAPTERS' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-8 hover:border-[#00d9ff]/50 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl font-black text-[#00d9ff]/30">{item.num}</span>
                  <div>
                    <h4 className="text-lg font-bold text-[#00d9ff]">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
                <p className="text-[#7c3aed] font-semibold text-sm">{item.chapters}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Founding Access */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-b from-[#00d9ff]/10 to-[#0a0e27]/50 text-center"
      >
        <h3 className="text-4xl font-bold mb-4">FOUNDING ACCESS</h3>
        <p className="text-xl text-gray-300 mb-8">First 100 buyers. Founding price. Forever.</p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-12 mb-8"
        >
          <p className="text-gray-300 mb-6">
            The price is <span className="text-[#00d9ff] font-bold">$79.90</span> now. After the first 100 buyers, it becomes <span className="text-[#ff6600] font-bold">$129.90</span> permanently.
          </p>
          <p className="text-gray-400 text-sm">There is no countdown. The number of buyers is the only gate. Real urgency — no tricks.</p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/50 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300"
        >
          Get Founding Access — $79.90
        </motion.button>

        <p className="text-xs text-gray-500 mt-6 uppercase tracking-wider">Secure Checkout via Gumroad · Instant PDF Delivery</p>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">COMMON QUESTIONS</h3>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { q: 'Is this for men or women?', a: 'Both. Always. No exceptions.' },
              { q: 'Do I need medical knowledge to read this?', a: 'No. It\'s written for any adult who wants to understand their body.' },
              { q: 'Does this recommend buying hormones or peptides?', a: 'No. It educates. You decide what\'s right for you.' },
              { q: 'Why $79.90 and not $49?', a: 'Because this is premium, research-backed content. No fluff.' },
              { q: 'What happens after I buy?', a: 'Instant PDF access. Quarterly updates. Lifetime access to your copy.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-6 hover:border-[#00d9ff]/50 transition-colors"
              >
                <h4 className="text-lg font-bold text-[#00d9ff] mb-2">{item.q}</h4>
                <p className="text-gray-300">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-12 px-6 border-t border-[#00d9ff]/20 text-center text-gray-400"
      >
        <p>© 2026 WeightWise Health. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
            <motion.a key={item} href="#" whileHover={{ color: '#00d9ff' }} className="hover:text-[#00d9ff] transition-colors">
              {item}
            </motion.a>
          ))}
        </div>
      </motion.footer>
    </div>
  );
}
