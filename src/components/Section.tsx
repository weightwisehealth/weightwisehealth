'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  dark?: boolean;
}
export function Section({ title, subtitle, children, dark = false }: SectionProps) {
  return (
    <section className={`py-20 px-6 ${dark ? 'bg-[#0f132a]/50' : ''} relative overflow-hidden`}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-6xl mx-auto relative z-10">
        <h3 className="text-3xl font-bold text-center mb-4">{title}</h3>
        {subtitle && <p className="text-center text-gray-300 mb-12">{subtitle}</p>}
        {children}
      </motion.div>
    </section>
  );
}
