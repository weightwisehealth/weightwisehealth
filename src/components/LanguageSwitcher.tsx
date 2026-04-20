'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useState} from 'react';

const languages = [
  {code: 'en', name: 'EN'},
  {code: 'es', name: 'ES'},
  {code: 'pt', name: 'PT'},
  {code: 'fr', name: 'FR'},
  {code: 'de', name: 'DE'},
  {code: 'it', name: 'IT'},
  {code: 'ru', name: 'RU'},
  {code: 'zh', name: 'ZH'},
  {code: 'ar', name: 'AR'},
  {code: 'hi', name: 'HI'},
  {code: 'ja', name: 'JA'},
  {code: 'ko', name: 'KO'},
  {code: 'tr', name: 'TR'},
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1] || 'en';
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentLocale === lang.code ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
