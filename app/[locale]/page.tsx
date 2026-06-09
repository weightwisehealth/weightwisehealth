import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">{t('home.title')}</h1>
        <p className="text-xl text-gray-300 mb-8">{t('home.subtitle')}</p>
        <p className="text-lg text-gray-400 mb-12">{t('home.description')}</p>
        <button className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition">
          {t('home.cta')}
        </button>
      </div>
    </main>
  );
}
