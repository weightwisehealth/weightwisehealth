import Newsletter from '@/components/Newsletter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About WeightWise Health</h1>
          <p className="text-xl opacity-90">Evidence-based hormone optimization for everyone.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Evidence-Based</h3>
              <p className="text-gray-600">Every protocol backed by peer-reviewed research.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Access</h3>
              <p className="text-gray-600">Information available to reach people worldwide.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Actionable</h3>
              <p className="text-gray-600">Practical protocols you can use today.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
