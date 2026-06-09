'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10" style={{backgroundColor: '#0A0A0F'}}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#00D4FF'}}>
              <span className="font-bold text-lg" style={{color: '#0A0A0F'}}>W</span>
            </div>
            <span className="font-bold text-xl text-white">WeightWise Health</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`font-medium transition text-sm ${isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Home</Link>
            <Link href="/blog" className={`font-medium transition text-sm ${isActive('/blog') ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Blog</Link>
            <Link href="/research" className={`font-medium transition text-sm ${isActive('/research') ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Research</Link>
            <Link href="/about" className={`font-medium transition text-sm ${isActive('/about') ? 'text-white' : 'text-gray-400 hover:text-white'}`}>About</Link>
          </div>
          <Link href="/bible" className="px-4 py-2 rounded-lg text-sm font-semibold transition" style={{backgroundColor: '#FF6B2B', color: 'white'}}>
            Get The Bible — $79.90
          </Link>
        </div>
      </nav>
    </header>
  );
}
