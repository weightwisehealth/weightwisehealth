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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-2xl mb-8 text-primary-100">{t('hero.subtitle')}</p>
          <p className="text-xl mb-12">{t('hero.description')}</p>
        </div>
      </section>

      {/* Product Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary-100 text-primary-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              {t('badge')}
            </div>
            <h2 className="text-4xl font-bold mb-4">{t('product.name')}</h2>
            <div className="text-6xl font-bold text-primary-600 mb-6">
              $197 USD
            </div>
            <p className="text-xl text-gray-600">{t('product.tagline')}</p>
          </div>

          {/* What's Included */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">{t('included.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-lg">{t('included.module1.title')}</h4>
                  <p className="text-gray-600">{t('included.module1.description')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-lg">{t('included.module2.title')}</h4>
                  <p className="text-gray-600">{t('included.module2.description')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-lg">{t('included.module3.title')}</h4>
                  <p className="text-gray-600">{t('included.module3.description')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-lg">{t('included.module4.title')}</h4>
                  <p className="text-gray-600">{t('included.module4.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            
              href="#"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold text-xl px-12 py-4 rounded-lg transition shadow-lg hover:shadow-xl"
            >
              {t('cta.button')}
            </a>
            <p className="mt-4 text-sm text-gray-500">{t('cta.guarantee')}</p>
          </div>

          {/* Testimonials */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-8 text-center">{t('testimonials.title')}</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">"{t('testimonials.testimonial1.text')}"</p>
                <p className="text-sm text-gray-500">{t('testimonials.testimonial1.author')}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">"{t('testimonials.testimonial2.text')}"</p>
                <p className="text-sm text-gray-500">{t('testimonials.testimonial2.author')}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">"{t('testimonials.testimonial3.text')}"</p>
                <p className="text-sm text-gray-500">{t('testimonials.testimonial3.author')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
