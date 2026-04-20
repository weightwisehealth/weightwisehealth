import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'about'});
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function AboutPage({params: {locale}}: {params: {locale: string}}) {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-2xl text-primary-100">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <h2 className="text-3xl font-bold mb-6">{t('mission.title')}</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>{t('mission.paragraph1')}</p>
            <p>{t('mission.paragraph2')}</p>
            <p>{t('mission.paragraph3')}</p>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('different.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('different.point1.title')}</h3>
            <p className="text-gray-600">{t('different.point1.description')}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('different.point2.title')}</h3>
            <p className="text-gray-600">{t('different.point2.description')}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('different.point3.title')}</h3>
            <p className="text-gray-600">{t('different.point3.description')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-primary-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8 text-primary-100">{t('cta.description')}</p>
          <Link
            href={`/${locale}/products`}
            className="inline-block bg-white text-primary-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
