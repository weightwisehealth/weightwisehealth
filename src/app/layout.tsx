'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>WeightWise Health | Elite Optimization Protocol</title>
        <meta name="description" content="The Optimization Bible - Premium hormone optimization e-book" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0a0e27] text-white font-sans">
        <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fixed top-0 w-full z-50 bg-[#0a0e27]/95 backdrop-blur-md border-b border-[#00d9ff]/20 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/">
              <motion.h1 whileHover={{ scale: 1.05 }} className="text-2xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] bg-clip-text text-transparent cursor-pointer font-sora">
                WeightWise Health
              </motion.h1>
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="/">
                <motion.span whileHover={{ color: '#00d9ff' }} className={`transition-colors cursor-pointer ${isActive('/') ? 'text-[#00d9ff]' : 'text-gray-300 hover:text-[#00d9ff]'}`}>
                  Home
                </motion.span>
              </Link>
              <Link href="/blog">
                <motion.span whileHover={{ color: '#00d9ff' }} className={`transition-colors cursor-pointer ${isActive('/blog') ? 'text-[#00d9ff]' : 'text-gray-300 hover:text-[#00d9ff]'}`}>
                  Blog
                </motion.span>
              </Link>
              <Link href="/products">
                <motion.span whileHover={{ color: '#00d9ff' }} className={`transition-colors cursor-pointer ${isActive('/products') ? 'text-[#00d9ff]' : 'text-gray-300 hover:text-[#00d9ff]'}`}>
                  Products
                </motion.span>
              </Link>
              <Link href="/about">
                <motion.span while                <motion.span while             tion-colors cursor-pointer ${isActive('/about') ? 'text-[#00d9ff]' : 'text-gray-300 hover:text-[#00d9ff]'}`}>
                  About
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.nav>
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
