import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'blog'});
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

const articles = [
  {
    slug: 'testosterone-cypionate-complete-guide',
    category: 'hormones',
    readTime: 12,
    title: 'Testosterone Cypionate: Complete Protocol Guide',
    excerpt: 'Everything you need to know about Test Cyp: injection frequency, dosing, bloodwork, and dialing in your protocol for optimal results.',
    date: '2026-04-10'
  },
  {
    slug: 'semaglutide-weight-loss-guide',
    category: 'peptides',
    readTime: 15,
    title: 'Semaglutide for Weight Loss: Real Protocol & Results',
    excerpt: 'Lost 42 lbs on Semaglutide. Week-by-week breakdown, side effects, protein requirements, and what nobody tells you before starting.',
    date: '2026-04-11'
  }
];

export default function BlogPage({params: {locale}}: {params: {locale: string}}) {
  const t = useTranslations('blog');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${locale}/blog/${article.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime} min read</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want the Complete Protocols?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get injection calculators, bloodwork guides, and AI dosing protocols in one system.
          </p>
          <Link
            href={`/${locale}/products`}
            className="inline-block bg-white text-primary-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition"
          >
            View TRT Starter Kit →
          </Link>
        </div>
      </section>
    </div>
  );
}
