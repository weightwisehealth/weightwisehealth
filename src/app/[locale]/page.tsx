import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export default function HomePage({params: {locale}}: {params: {locale: string}}) {
  const t = useTranslations('home');

  const featuredArticles = [
    {
      category: 'Hormones',
      readTime: 12,
      title: 'Testosterone Cypionate: Complete Protocol Guide',
      slug: 'testosterone-cypionate-complete-guide',
    },
    {
      category: 'Peptides',
      readTime: 15,
      title: 'Semaglutide (Ozempic) Weight Loss Guide',
      slug: 'semaglutide-weight-loss-guide',
    },
    {
      category: 'Diagnostics',
      readTime: 10,
      title: 'How to Read Your Testosterone Bloodwork',
      slug: 'how-to-read-testosterone-bloodwork',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/blog`}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
            >
              {t('hero.cta')}
            </Link>
            <Link
              href={`/${locale}/products`}
              className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition text-lg border-2 border-white"
            >
              TRT Starter Kit - $197 →
            </Link>
          </div>
        </div>
      </section>

      {/* Product Banner */}
      <section className="bg-primary-50 border-y border-primary-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                🎯 TRT Protocol Starter Kit - $197
              </h3>
              <p className="text-gray-700">
                Injection calculators + Bloodwork guide + AI protocols. Everything you need to dial in your protocol.
              </p>
            </div>
            <Link
              href={`/${locale}/products`}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition whitespace-nowrap"
            >
              Get Instant Access →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t('featured.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${locale}/blog/${article.slug}`}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {article.readTime} {t('featured.minRead')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition">
                  {article.title}
                </h3>
                <span className="text-primary-600 font-semibold group-hover:underline">
                  {t('featured.readMore')} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
          <p className="text-xl text-gray-700 mb-8">
            {t('about.description')}
          </p>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{t('about.mission')}</h3>
            <p className="text-lg text-gray-600">{t('about.missionText')}</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
