'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Disclaimer */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h3 className="text-accent-500 font-bold text-lg mb-2">
            {t('disclaimer')}
          </h3>
          <p className="text-sm text-gray-400">
            {t('disclaimerText')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-xl text-white">
                WeightWise Health
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Evidence-based hormone optimization and longevity medicine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('legal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-white transition">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-sm text-gray-400">
              contact@weightwisehealth.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
