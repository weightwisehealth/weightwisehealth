'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button>{t('cta')}</button>
    </div>
  );
}
