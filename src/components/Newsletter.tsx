'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';

export default function Newsletter() {
  const t = useTranslations('home.newsletter');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup (Substack, ConvertKit, etc)
    console.log('Newsletter signup:', email);
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">{t('title')}</h2>
        <p className="text-primary-100 mb-6">
          {t('description')}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('placeholder')}
            required
            className="flex-grow px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition whitespace-nowrap"
          >
            {t('subscribe')}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-secondary-200 font-medium">
            {t('success')}
          </p>
        )}
      </div>
    </div>
  );
}
