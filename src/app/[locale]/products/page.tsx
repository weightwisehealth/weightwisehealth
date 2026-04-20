import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'products'});
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function ProductsPage() {
  const t = useTranslations('products');

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-2xl mb-8 text-primary-100">{t('hero.subtitle')}</p>
          <p className="text-xl mb-12">{t('hero.description')}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary-100 text-primary-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              BEST SELLER
            </div>
            <h2 className="text-4xl font-bold mb-4">Complete TRT Protocol System</h2>
            <div className="text-6xl font-bold text-primary-600 mb-6">
              $197 USD
            </div>
            <p className="text-xl text-gray-600">One-time payment. Lifetime access.</p>
          </div>

          <div className="text-center">
            
              href="https://pay.hotmart.com/M105463581A"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold text-xl px-12 py-4 rounded-lg transition shadow-lg hover:shadow-xl"
            >
              Get Instant Access - $197
            </a>
            <p className="mt-4 text-sm text-gray-500">30-day money-back guarantee. No questions asked.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
