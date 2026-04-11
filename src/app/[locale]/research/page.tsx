import Newsletter from '@/components/Newsletter';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary-600 to-secondary-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Research Hub
          </h1>
          <p className="text-xl text-secondary-100">
            Weekly updates on clinical trials, new research, and emerging treatments
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="text-6xl mb-6">🔬</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're building a comprehensive research hub that will include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
              <div className="flex items-start">
                <span className="text-2xl mr-3">📊</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Clinical Trials Tracker</h3>
                  <p className="text-sm text-gray-600">Real-time updates on ongoing trials and new results</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-3">📄</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Research Paper Analysis</h3>
                  <p className="text-sm text-gray-600">Weekly breakdown of new studies in plain language</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">FDA/EMA Approvals</h3>
                  <p className="text-sm text-gray-600">Regulatory updates and what they mean for you</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-3">🌍</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Global Market Intelligence</h3>
                  <p className="text-sm text-gray-600">Emerging treatments from around the world</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to be notified when the Research Hub launches.
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
