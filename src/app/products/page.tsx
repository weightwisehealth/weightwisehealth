'use client';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "The Optimization Bible",
    price: "$79.90",
    description: "The complete system for hormone optimization. 40 chapters of applied biology.",
    features: [
      "40 chapters of applied biology",
      "200+ PubMed citations",
      "Personalized protocol framework",
      "Lifetime access",
      "Quarterly updates"
    ],
    cta: "Get Founding Access",
    highlight: true
  },
  {
    id: 2,
    name: "OTO: Advanced Protocols",
    price: "$99.90",
    description: "Advanced protocols for serious optimizers. Peptide stacks, hormone cycling, and more.",
    features: [
      "Advanced peptide protocols",
      "Hormone cycling systems",
      "Lab testing interpretation",
      "Supplement stacking guides",
      "Quarterly updates"
    ],
    cta: "Coming Soon",
    highlight: false
  },
  {
    id: 3,
    name: "The Sistema: Complete Funnel",
    price: "$497",
    description: "The complete business system for health optimization. For serious entrepreneurs.",
    features: [       "Everything in Bible + OTO",
      "Business system included",
      "Done-for-you templates",
      "Monthly group calls",
      "Lifetime support"
    ],
    cta: "Coming Soon",
    highlight: false
  }
];

export default function Products() {
  const handleGumroad = () => {
    window.location.href = 'https://we    window.location.hre/gr    ';
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl font-bold mb-6 font-sora">
            <span className="text-white">Our</span> <span className="text-[#00d9ff]">Products</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-xl text-gray-300 max-w-3xl">
            From the foundational Bible to the complete Sistema. Choose your level of optimization.
          </motion.p>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className={`rounded-lg p-8 transition-all ${product.highlight ? 'bg-gradient-to-b from-[#00d9ff]/10 to-[#7c3aed]/10 border-2 border-[#00d9ff]/50 shadow-lg shadow-[#00d9ff]/20' : 'bg-[#0f132a]/50 border border-[#00d9ff]/20'}`}>
                {product.highlight && (
                  <div className="mb-4 inline-block px-3 py-1 bg-[#ff6600]/20 border border-[#ff6600]/50 rounded-full">
                    <span className="text-[#ff6600] text-sm font-semibold">MOST POPULAR</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-4xl font-bold text-[#00d9ff] mb-4">{product.price}</p>
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-[#00ff88] flex-shrink-</span>0">
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={product.id === 1 ? handleGumroad : undefined}
                  disabled={product.id !== 1}
                  className={`w-full font-bold py-3 px-6 rounded-lg transition-all ${
                    product.id === 1 
                      ? 'bg-gradient-to-r from-[#ff6600] to-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/50 text-white cursor-pointer' 
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {product.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-20 px-6 bg-[#0f132a]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-sora">The Optimization Funnel</h2>
          <p className="text-gray-300 mb-12 text-lg">Start with the Bible. Master the fundamentals. Then upgrade to advanced protocols and the complete business system.</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-[#0a0e27]/50 border border-[#ff6600]/30 rounded-lg p-6">
              <p className="text-3xl font-bold text-[#ff6600] mb-2">$79.90</p>
              <p className="text-gray-300">The Bible</p>
              <p className="text-sm text-gray-500 mt-2">Foundation</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="bg-[#0a0e27]/50 border border-[#00d9ff]/30 rounded-lg p-6">
 $99.90</p>
              <p className="text-gray-300">OTO</p>
              <p className="text-sm text-gray-500 mt-2">Advanced</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-[#0a0e27]/50 border border-[#7c3aed]/30 rounded-lg p-6">
 $497</p>
              <p className="text-gray-300">Sistema</p>
              <p className="text-sm text-gray-500 mt-2">Complete</p>
            </motion.div>
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
