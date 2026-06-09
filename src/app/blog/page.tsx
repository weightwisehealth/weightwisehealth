import Link from 'next/link';

export default function BlogPage() {
  const articles = [
    { id: 1, title: 'Testosterone Cypionate: Complete Protocol Guide', excerpt: 'Comprehensive guide covering dosing protocols, injection techniques, side effect management, and bloodwork requirements for TRT.', category: 'Hormones', readTime: 12, slug: 'testosterone-cypionate-complete-guide', date: '2026-04-10' },
    { id: 2, title: 'Semaglutide (Ozempic) for Weight Loss: Science & Protocols', excerpt: 'Evidence-based analysis of GLP-1 agonists, dosing strategies, expected outcomes, and safety considerations.', category: 'Peptides', readTime: 15, slug: 'semaglutide-weight-loss-guide', date: '2026-04-09' },
    { id: 3, title: 'How to Read Your Testosterone Blood Test Results', excerpt: 'Learn to interpret Total T, Free T, SHBG, E2, and other markers.', category: 'Diagnostics', readTime: 10, slug: 'read-testosterone-blood-test', date: '2026-04-08' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research & Protocols</h1>
          <p className="text-xl text-gray-600">Evidence-based guides on hormone optimization.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{article.category}</span>
                  <span className="text-xs text-gray-500">{article.readTime} min</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <Link href={`/blog/${article.slug}`} className="text-blue-600 hover:text-blue-700 font-semibold">Read More →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
