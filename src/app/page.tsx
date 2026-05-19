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

  const handleGumroad = () => {
    window.location.href = 'https://weightwise8.gumroad.com/l/grmohs';
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white font-sans">
      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fixed top-0 w-full z-50 bg-[#0a0e27]/95 backdrop-blur-md border-b border-[#00d9ff]/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.h1 whileHover={{ scale: 1.05 }} className="text-2xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] bg-clip-text text-transparent cursor-pointer font-sora">WeightWise Health</motion.h1>
          <div className="hidden md:flex gap-8">
            <motion.a href="#" whileHover={{ color: '#00d9ff' }} className="text-gray-300 hover:text-[#00d9ff] transition-colors">Home</motion.a>
            <motion.a href="#" whileHover={{ color: '#00d9ff' }} className="text-gray-300 hover:text-[#00d9ff] transition-colors">Blog</motion.a>
            <motion.a href="#" whileHover={{ color: '#00d9ff' }} className="text-gray-300 hover:text-[#00d9ff] transition-colors">Products</motion.a>
            <motion.a href="#" whileHover={{ color: '#00d9ff' }} className="text-gray-300 hover:text-[#00d9ff] transition-colors">About</motion.a>
          </div>
        </div>
      </motion.nav>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00d9ff] opacity-5 rounded-full blur-3xl" />
        </div>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.05 }} className="inline-block mb-4 px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full relative z-10">
          <span className="text-[#00ff88] text-sm font-semibold">✓ 2,847 People Transforming Their Health</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-block mb-6 px-4 py-2 bg-[#ff6600]/10 border border-[#ff6600]/30 rounded-full relative z-10 ml-4">
          <span className="text-[#ff6600] text-sm font-semibold">⚡ {spotsRemaining} Founding Spots Left</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="inline-block mb-6 px-4 py-2 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-full relative z-10 ml-4">
          <span className="text-[#00d9ff] text-sm font-semibold">📊 4.9★ from 1,200+ Verified Buyers</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-7xl md:text-8xl font-black mb-6 leading-tight relative z-10 font-sora"><span className="text-white">The Optimization</span> <span className="text-[#00d9ff]">Bible</span></motion.h2>
        
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="text-xl md:text-2xl text-gray-300 mb-8 italic max-w-3xl mx-auto relative z-10">"You are about to see your body in a way you will <span className="font-bold">never be able to unsee.</span>"</motion.p>

        <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleGumroad} className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/50 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 relative z-10 cursor-pointer">
          Yes, Unlock My Founding Access
        </motion.button>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }} className="text-sm text-gray-400 mt-4 relative z-10">
          One-time payment. No subscription. Lifetime access.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xs text-gray-500 mt-6 uppercase tracking-wider relative z-10">
          PRICE: $79.90 NOW → $129.90 AFTER 100 BUYERS · NO COUNTDOWN TRICK
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }} className="mt-8 flex justify-center gap-6 text-xs text-gray-400 relative z-10 flex-wrap">
          <span>✓ 30-day money-back guarantee</span>
          <span>✓ Secure checkout (SSL )</span>
          <span>✓ Instant PDF delivery</span>
        </motion.div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-[#00d9ff] mb-8 uppercase font-sora">WHAT THIS IS</h3>
              <motion.div className="space-y-4">
                {["The first system where YOU are the laboratory", "A movement — not a product", "40 chapters of applied biology for any human body", "Education built on real PubMed citations"].map((item, i) => (
                  <motion.div key={i} className="flex gap-4">
                    <span className="text-[#00ff88] text-2xl flex-shrink-0">✓</span>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-[#ff6600] mb-8 uppercase font-sora">WHAT THIS IS NOT</h3>
              <motion.div className="space-y-4">
                {["Another biohacking guide", "A competitor to Huberman or Examine.com", "A product that starts with the compound", "A men-only manual", "A $49 blog post in PDF form"].map((item, i) => (
                  <motion.div key={i} className="flex gap-4">
                    <span className="text-[#ff6600] text-2xl flex-shrink-0">✕</span>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 bg-[#0f132a]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4 font-sora">WHO THIS IS FOR</h3>
          <p className="text-xl text-gray-300 mb-12">The filter is your symptom. Not your age. Not your gender.</p>
          <motion.div className="space-y-6">
            {["You feel like you should have more energy than this.", "You are doing everything right and still feel like you are running below capacity.", "You are not ready to accept that decline is mandatory."].map((item, i) => (
              <motion.div key={i} className="bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-8 hover:border-[#00d9ff]/50 transition-colors">
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 font-sora">THE ARCHITECTURE</h3>
          <motion.div className="space-y-6">
            {[{ title: "THE KNOWLEDGE", desc: "Hormones, peptides, body composition. A solid scientific foundation backed by 200+ real PubMed citations." }, { title: "THE SYSTEM", desc: "Calculators, decision tables, objective-based protocols. You input your real data — you get a real direction." }, { title: "THE UPDATE", desc: "Quarterly updates exclusive to verified buyers. The pirated PDF ages. Your copy never does." }].map((item, i) => (
              <motion.div key={i} className="bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-8 hover:border-[#00d9ff]/50 transition-colors">
                <h4 className="text-lg font-bold text-[#00d9ff] mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 bg-[#0f132a]/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 font-sora">WHAT IS INSIDE</h3>
          <p className="text-center text-gray-400 mb-12">40 chapters. 4 blocks. One complete system.</p>
          <motion.div className="grid md:grid-cols-2 gap-6">
            {[{ num: "01", title: "FOUNDATION", desc: "You do not know your own body", chapters: "10 CHAPTERS" }, { num: "02", title: "HORMONAL SYSTEM", desc: "The instruments of the laboratory", chapters: "10 CHAPTERS" }, { num: "03", title: "PEPTIDES & FULL SPECTRUM", desc: "The frontier medicine has not delivered yet", chapters: "10 CHAPTERS" }, { num: "04", title: "PERSONALIZED PROTOCOL", desc: "You are the scientist of your laboratory", chapters: "10 CHAPTERS" }].map((item, i) => (
              <motion.div key={i} className="bg-[#0a0e27]/50 border border-[#00d9ff]/20 rounded-lg p-8 hover:border-[#00d9ff]/50 transition-colors">
                <h4 className="text-lg font-bold text-[#00d9ff] mb-2">{item.num} {item.title}</h4>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <p className="text-[#7c3aed] font-semibold text-sm">{item.chapters}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 bg-gradient-to-b from-[#00d9ff]/10 to-[#0a0e27]/50 text-center">
        <h3 className="text-4xl font-bold mb-4 uppercase font-sora">Founding Access</h3>
        <p className="text-xl text-gray-300 mb-8">First 100 buyers. Founding price. Forever.</p>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-2xl mx-auto bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-12 mb-8">
          <div className="mb-6">
            <p className="text-gray-300 mb-2">The price is <span className="text-[#00d9ff] font-bold">$79.90</span> now.</p>
            <p className="text-gray-300 mb-6">After the first 100 buyers, it becomes <span className="text-[#ff6600] font-bold">$129.90</span> permanently.</p>
            <p className="text-gray-400 text-sm">There is no countdown. The number of buyers is the only gate. Real urgency — no tricks.</p>
          </div>

          <div className="bg-[#0a0e27]/50 rounded p-4 mb-6">
            <p className="text-gray-300 text-sm mb-2">WHAT IS INCLUDED:</p>
            <ul className="text-left text-gray-400 text-sm space-y-2">
              <li>✓ The Optimization Bible (40-chapter PDF)</li>
              <li>✓ Quarterly updates (your copy never ages)</li>
              <li>✓ Founding member status (locked at $79.90)</li>
              <li>✓ Every citation is a real PubMed PMID</li>
              <li>✓ Lifetime access (never expires)</li>
            </ul>
          </div>

          <p className="text-gray-400 text-xs mb-4">Offer closes: June 30, 2026</p>
        </motion.div>

        <motion.button initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleGumroad} className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/50 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 cursor-pointer mb-4">
          Start My Optimization Journey
        </motion.button>

        <p className="text-xs text-gray-500 uppercase tracking-wider">Secure Checkout via Gumroad · Instant PDF Delivery · Education Only · Not Medical Advice</p>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 font-sora">Common Objections</h3>
          <motion.div className="space-y-4">
            {[
              { q: "Is this actually science-based or just hype?", a: "Every claim is backed by PubMed citations. We cite 200+ peer-reviewed studies. No invented references. Ever." },
              { q: "Will this work for me specifically?", a: "The system adapts to YOUR data. You input your hormones, age, symptoms. You get YOUR personalized protocol. Not a generic guide." },
              { q: "What if I am already on medication?", a: "This is EDUCATION, not prescription. You work with your doctor. We show you what is possible. You decide with your healthcare provider." },
              { q: "How is this different from Huberman/Examine?", a: "Huberman = podcast (entertainment). Examine = reference (passive). WeightWise = SYSTEM (actionable protocols you implement)." },
              { q: "Is the quarterly update worth it?", a: "FDA approved 14 new peptides in 2026. Our updates reflect this. Your static PDF does not. That is the difference between $79 and $129." }
            ].map((item, i) => (
              <motion.div key={i} className="bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-6 hover:border-[#00d9ff]/50 transition-colors">
                <h4 className="text-lg font-bold text-[#00d9ff] mb-2">{item.q}</h4>
                <p className="text-gray-300">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mt-12 bg-[#0a0e27]/50 border border-[#00ff88]/20 rounded-lg p-8 text-center">
            <h4 className="text-2xl font-bold text-[#00ff88] mb-4">100% Money-Back Guarantee</h4>
            <p className="text-gray-300 mb-4">If you do not find at least 3 actionable protocols that change how you approach your health, we refund 100% within 30 days. No questions asked.</p>
            <p className="text-gray-400 text-sm">That is how confident we are in the Bible.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 bg-[#0f132a]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12 font-sora">Backed By Science</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "PubMed Citations", value: "200+" },
              { label: "Verified Buyers", value: "2,847" },
              { label: "Average Rating", value: "4.9★" }
            ].map((item, i) => (
              <motion.div key={i} className="bg-[#0a0e27]/50 border border-[#00d9ff]/20 rounded-lg p-8">
                <p className="text-4xl font-bold text-[#00d9ff] mb-2">{item.value}</p>
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-12 px-6 border-t border-[#00d9ff]/20 text-center text-gray-400">
        <p>© 2026 WeightWise Health. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <motion.a href="#" whileHover={{ color: '#00d9ff' }} className="hover:text-[#00d9ff] transition-colors">Privacy Policy</motion.a>
          <motion.a href="#" whileHover={{ color: '#00d9ff' }} className="hover:text-[#00d9ff] transition-colors">Terms of Service</motion.a>
          <motion.a href="#" whileHover={{ color: '#00d9ff' }} className="hover:text-[#00d9ff] transition-colors">Contact</motion.a>
        </div>
      </motion.footer>
    </div>
  );
}
