'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
}
export function Card({ title, description, children }: CardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }} className="bg-[#0a0e27] border border-[#00d9ff]/20 rounded-lg p-8 hover:border-[#00d9ff]/50 transition-all duration-300">
      <h4 className="text-xl font-bold text-[#00d9ff] mb-4">{title}</h4>
      <p className="text-gray-300 mb-4">{description}</p>
      {children}
    </motion.div>
  );
}
