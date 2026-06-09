import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-sm font-bold text-yellow-800">Educational Purposes Only</p>
          <p className="text-sm text-yellow-700 mt-1">Consult a qualified healthcare provider before starting any hormone therapy.</p>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{params.slug.replace(/-/g, ' ')}</h1>
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <p className="text-gray-600">Full article content coming soon.</p>
        </div>
        <Newsletter />
        <div className="mt-12">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">← Back to Blog</Link>
        </div>
      </article>
    </div>
  );
}
