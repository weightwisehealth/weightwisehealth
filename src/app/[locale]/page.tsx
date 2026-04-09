import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export default function HomePage({params: {locale}}: {params: {locale: string}}) {
  const t = useTranslations('home');

  // TODO: Fetch real featured articles from CMS/database
  const featuredArticles = [
    {
      id: 1,
      title: 'Testosterone Cypionate: Complete Protocol Guide',
      excerpt: 'Comprehensive guide covering dosing protocols, injection techniques, side effect management, and bloodwork requirements for TRT.',
      category: 'Hormones',
      readTime: 12,
      slug: 'testosterone-cypionate-complete-guide',
    },
    {
      id: 2,
      title: 'Semaglutide (Ozempic) for Weight Loss: Science & Protocols',
      excerpt: 'Evidence-based analysis of GLP-1 agonists, dosing strategies, expected outcomes, and safety considerations.',
      category: 'Peptides',
      readTime: 15,
      slug: 'semaglutide-weight-loss-guide',
    },
    {
      id: 3,
      title: 'How to Read Your Testosterone Blood Test Results',
      excerpt: 'Learn to interpret Total T, Free T, SHBG, E2, and other markers. Understand optimal vs reference ranges.',
      category: 'Diagnostics',
      readTime: 10,
      slug: 'read-testosterone-blood-test',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Link
            href={`/${locale}/blog`}
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition shadow-lg hover:shadow-xl"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t('featured.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.readTime} {t('featured.minRead')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link
                  href={`/${locale}/blog/${article.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                >
                  {t('featured.readMore')}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('about.description')}
          </p>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-primary-600 mb-3">
              {t('about.mission')}
            </h3>
            <p className="text-gray-700">
              {t('about.missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
