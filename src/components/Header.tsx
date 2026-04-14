'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const locales = [
    {code: 'en', name: 'EN', flag: '🇺🇸'},
    {code: 'es', name: 'ES', flag: '🇪🇸'},
    {code: 'pt', name: 'PT', flag: '🇧🇷'},
    {code: 'fr', name: 'FR', flag: '🇫🇷'},
    {code: 'de', name: 'DE', flag: '🇩🇪'},
    {code: 'it', name: 'IT', flag: '🇮🇹'},
    {code: 'ru', name: 'RU', flag: '🇷🇺'},
  ];

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-bold text-xl text-gray-900">
              WeightWise Health
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${locale}`}
              className="text-gray-700 hover:text-primary-600 font-medium transition"
            >
              {t('home')}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="text-gray-700 hover:text-primary-600 font-medium transition"
            >
              {t('blog')}
            </Link>
            <Link
              href={`/${locale}/research`}
              className="text-gray-700 hover:text-primary-600 font-medium transition"
            >
              {t('research')}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-gray-700 hover:text-primary-600 font-medium transition"
            >
              {t('about')}
            </Link>
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            {locales.map((loc) => (
              <Link
                key={loc.code}
                href={switchLocale(loc.code)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                  locale === loc.code
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-1">{loc.flag}</span>
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
