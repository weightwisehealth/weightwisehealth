'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary?: string;
  spotCount?: number;
  spotLabel?: string;
}

export function Hero({
  title,
  subtitle,
  cta,
  ctaSecondary,
  spotCount = 47,
  spotLabel = 'Premium Spots Available',
}: HeroProps) {
  const [displayCount, setDisplayCount] = useState(spotCount);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayCount((prev) => {
        if (prev <= 1) return spotCount;
        return prev - 1;
      });
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }, 8000);

    return () => clearInterval(interval);
  }, [spotCount]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark pt-20 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-lab-accent opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-lab-purple opacity-5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-foreground leading-tight"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-lg"
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Spot Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-4 py-3 rounded-lg border border-lab-accent border-opacity-30 bg-lab-accent bg-opacity-5 backdrop-blur-xs"
            >
              <div className="w-2 h-2 rounded-full bg-lab-accent animate-pulse" />
              <span className="text-sm font-semibold text-lab-accent">
                {spotLabel}:{' '}
                <motion.span
                  key={displayCount}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-bold text-lab-gold"
                >
                  {displayCount}
                </motion.span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" variant="primary" className="shadow-glow-cyan">
                {cta}
              </Button>
              {ctaSecondary && (
                <Button size="lg" variant="outline">
                  {ctaSecondary}
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-full flex items-center justify-center"
          >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-10">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                  className="rounded-lg border border-lab-accent"
                />
              ))}
            </div>

            {/* Central Glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-lab-accent to-lab-purple opacity-20 blur-3xl"
            />

            {/* Floating Elements */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute w-20 h-20 rounded-lg border border-lab-accent border-opacity-30 bg-lab-accent bg-opacity-5 backdrop-blur-xs"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
