import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function BlogPage({params: {locale}}: {params: {locale: string}}) {
  const t = useTranslations('blog');

  // TODO: Fetch from CMS/database
  const articles = [
    {
      id: 1,
      title: 'Testosterone Cypionate: Complete Protocol Guide',
      excerpt: 'Comprehensive guide covering dosing protocols, injection techniques, side effect management, and bloodwork requirements for TRT.',
      category: 'hormones',
      readTime: 12,
      slug: 'testosterone-cypionate-complete-guide',
      date: '2026-04-10',
    },
    {
      id: 2,
      title: 'Semaglutide (Ozempic) for Weight Loss: Science & Protocols',
      excerpt: 'Evidence-based analysis of GLP-1 agonists, dosing strategies, expected outcomes, and safety considerations.',
      category: 'peptides',
      readTime: 15,
      slug: 'semaglutide-weight-loss-guide',
      date: '2026-04-09',
    },
    {
      id: 3,
      title: 'How to Read Your Testosterone Blood Test Results',
      excerpt: 'Learn to interpret Total T, Free T, SHBG, E2, and other markers. Understand optimal vs reference ranges.',
      category: 'diagnostics',
      readTime: 10,
      slug: 'read-testosterone-blood-test',
      date: '2026-04-08',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Categories Filter - TODO: Implement filtering */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'hormones', 'peptides', 'nutrition', 'diagnostics'].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                cat === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {t(`categories.${article.category}`)}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.readTime} min
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <Link
                    href={`/${locale}/blog/${article.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                  >
                    {t('readMore')}
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
