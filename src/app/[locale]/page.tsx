'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home() {
  const t = useTranslations();
  const pathname = usePathname();
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

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'it', label: 'IT' },
    { code: 'ru', label: 'RU' },
  ];

  const currentLang = pathname.split('/')[1] || 'en';

  const handleGumroad = () => {
    window.location.href = 'https://weightwise8.gumroad.com/l/grmohs';
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white font-sans">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-[#0a0e27]/95 backdrop-blur-md border-b border-[#00d9ff]/20 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] bg-clip-text text-transparent cursor-pointer font-sora"
          >
            WeightWise Health
          </motion.h1>
          <div className="hidden md:flex gap-8">
            {['home', 'blog', 'products', 'about'].map((item ) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ color: '#00d9ff' }}
                className="text-gray-300 hover:text-[#00d9ff] transition-colors capitalize"
              >
                {t(`nav.${item}`)}
              </motion.a>
            ))}
          </div>
          <div className="flex gap-2">
            {languages.map((lang) => (
              <Link key={lang.code} href={`/${lang.code}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-2 rounded text-sm font-semibold transition-all ${
                    currentLang === lang.code
                      ? 'bg-[#00d9ff]/20 border border-[#00d9ff] text-[#00d9ff]'
                      : 'border border-[#00d9ff]/30 text-gray-300 hover:border-[#00d9ff]'
                  }`}
                >
                  {lang.label}
                </motion.button>
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

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
          <span className="text-[#00d9ff] text-sm font-semibold uppercase tracking-wider">
            {t('hero.badge')}
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl font-black mb-6 leading-tight relative z-10 font-sora"
        >
          <span className="text-white">{t('hero.title')}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 italic max-w-3xl mx-auto relative z-10"
        >
          "{t('hero.subtitle')}"
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGumroad}
          className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/50 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 relative z-10 cursor-pointer"
        >
          {t('hero.cta')}
        </motion.button>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs text-gray-500 mt-6 uppercase tracking-wider relative z-10"
        >
          {t('hero.note')}
        </motion.p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#00d9ff] mb-8 uppercase font-sora">
                {t('whatIs.title')}
              </h3>
              <motion.div className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[0, 1, 2, 3].map((i) => (
                  <motion.div key={i} variants={itemVariants} className="flex gap-4">
                    <span className="text-[#00ff88] text-2xl flex-shrink-0">✓</span>
                    <p className="text-gray-300">{t(`whatIs.items.${i}`)}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#ff6600] mb-8 uppercase font-sora">
                {t('whatIsNot.title')}
              </h3>
              <motion.div className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[0, 1, 2, 3].map((i) => (
                  <motion.div key={i} variants={itemVariants} className="flex gap-4">
                    <span className="text-[#ff6600] text-2xl flex-shrink-0">✕</span>
                    <p className="text-gray-300">{t(`whatIsNot.items.${i}`)}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-[#0f132a]/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4 font-sora">{t('whoFor.title')}</h3>
          <p className="text-xl text-gray-300 mb-12">{t('whoFor.subtitle')}</p>
          <motion.div className="space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-8 hover:border-[#00d9ff]/50 transition-colors"
              >
                <span className="text-4xl font-black text-[#00d9ff]/30">{23 + i * 19}</span>
                <p className="text-gray-300 mt-4">{t(`whoFor.items.${i}`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 font-sora">{t('architecture.title')}</h3>
          <motion.div className="space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {['knowledge', 'system', 'update'].map((key) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="bg-[#0f132a]/50 border border-[#00d9ff]/20 rounded-lg p-8 hover:border-[#00d9ff]/50 transition-colors"
              >
                <h4 className="text-lg font-bold text-[#00d9ff] mb-2">{t(`architecture.${key}.title`)}</h4>
                <p className="text-gray-300">{t(`architecture.${key}.desc`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-[#0f132a]/30"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 font-sora">{t('inside.title')}</h3>
          <p className="text-center text-gray-400 mb-12">{t('inside.subtitle')}</p>
          <motion.div className="grid md:grid-cols-2 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {['foundation', 'hormonal', 'peptides', 'protocol'].map((key) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="bg-[#0a0e27]/50 border border-[#00d9ff]/20 rounded-lg p-8 hover:border-[#00d9ff]/50 transition-colors"
              >
                <h4 className="text-lg font-bold text-[#00d9ff] mb-2">{t(`inside.${key}.title`)}</h4>
                <p className="text-gray-300 mb-4">{t(`inside.${key}.desc`)}</p>
                <p className="text-[#7c3aed] font-semibold text-sm">{t(`inside.${key}.chapters`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-b from-[#00d9ff]/10 to-[#0a0e27]/50 text-center"
      >
        <h3 className="text-4xl font-bold mb-4 uppercase font-sora">Founding Access</h3>
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
          onClick={handleGumroad}
          className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/50 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 cursor-pointer"
        >
          Get Founding Access — $79.90
        </motion.button>
        <p className="text-xs text-gray-500 mt-6 uppercase tracking-wider">Secure Checkout via Gumroad · Instant PDF Delivery</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 font-sora">Common Questions</h3>
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

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-12 px-6 border-t border-[#00d9ff]/20 text-center text-gray-400"
      >
        <p>{t('footer.copyright')}</p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <motion.a href="#" whileHover={{ color: '#00d9ff' }} className="hover:text-[#00d9ff] transition-colors">
            {t('footer.privacy')}
          </motion.a>
          <motion.a href="#" whileHover={{ color: '#00d9ff' }} className="hover:text-[#00d9ff] transition-colors">
            {t('footer.terms')}
          </motion.a>
          <motion.a href="#" whileHover={{ color: '#00d9ff' }} className="hover:text-[#00d9ff] transition-colors">
            {t('footer.contact')}
          </motion.a>
        </div>
      </motion.footer>
    </div>
  );
}
