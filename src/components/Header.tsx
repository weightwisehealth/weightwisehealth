'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const locales = [
    {code: 'en', name: 'English', flag: '🇺🇸'},
    {code: 'es', name: 'Español', flag: '🇪🇸'},
    {code: 'pt', name: 'Português', flag: '🇧🇷'},
    {code: 'fr', name: 'Français', flag: '🇫🇷'},
    {code: 'de', name: 'Deutsch', flag: '🇩🇪'},
    {code: 'it', name: 'Italiano', flag: '🇮🇹'},
    {code: 'ru', name: 'Русский', flag: '🇷🇺'},
    {code: 'zh', name: '简体中文', flag: '🇨🇳'},
    {code: 'ar', name: 'العربية', flag: '🇦🇪'},
    {code: 'hi', name: 'हिन्दी', flag: '🇮🇳'},
    {code: 'ja', name: '日本語', flag: '🇯🇵'},
    {code: 'ko', name: '한국어', flag: '🇰🇷'},
    {code: 'tr', name: 'Türkçe', flag: '🇹🇷'},
  ];

  const currentLocale = locales.find(l => l.code === locale);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-bold text-xl text-gray-900">
              WeightWise Health
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-gray-700 hover:text-primary-600 font-medium transition">
              {t('home')}
            </Link>
            <Link href={`/${locale}/blog`} className="text-gray-700 hover:text-primary-600 font-medium transition">
              {t('blog')}
            </Link>
            <Link href={`/${locale}/research`} className="text-gray-700 hover:text-primary-600 font-medium transition">
              {t('research')}
            </Link>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-primary-600 font-medium transition">
              {t('about')}
            </Link>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 transition"
            >
              <span className="text-lg">{currentLocale?.flag}</span>
              <span className="font-medium text-gray-700">{currentLocale?.code.toUpperCase()}</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                {locales.map((loc) => (
                  <Link
                    key={loc.code}
                    href={switchLocale(loc.code)}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 transition ${
                      locale === loc.code ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{loc.flag}</span>
                    <span className="font-medium">{loc.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
