'use client';

import {useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  
  const locale = pathname.split('/')[1] || 'en';

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('blog'), href: `/${locale}/blog` },
    { name: 'Products', href: `/${locale}/products` },
    { name: t('about'), href: `/${locale}/about` },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-2xl font-bold text-primary-600">
              WeightWise Health
            </Link>
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
