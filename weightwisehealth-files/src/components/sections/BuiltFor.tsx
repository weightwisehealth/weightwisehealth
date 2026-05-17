'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

interface BuiltForItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface BuiltForProps {
  title: string;
  subtitle?: string;
  items: BuiltForItem[];
}

export function BuiltFor({ title, subtitle, items }: BuiltForProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 bg-lab-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lab-accent opacity-5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
          )}
        </motion.div>

        {/* Items List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-border bg-card hover:border-lab-accent hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-lab-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
