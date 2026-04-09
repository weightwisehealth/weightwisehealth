import {useTranslations} from 'next-intl';
import Newsletter from '@/components/Newsletter';

export default function AboutPage() {
  const t = useTranslations('home.about');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-primary-100">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('mission')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('missionText')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-primary-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Evidence-Based
              </h3>
              <p className="text-gray-600">
                Every protocol and recommendation backed by peer-reviewed research and clinical experience.
              </p>
            </div>

            <div className="bg-secondary-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Global Access
              </h3>
              <p className="text-gray-600">
                Information available in multiple languages to reach people worldwide.
              </p>
            </div>

            <div className="bg-accent-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Actionable
              </h3>
              <p className="text-gray-600">
                Practical protocols and tools you can use to optimize your health today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What We Cover
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary-600 mb-2">
                Hormone Optimization
              </h3>
              <p className="text-gray-600">
                Testosterone replacement therapy (TRT), hormone replacement therapy (HRT) for menopause, thyroid optimization, and comprehensive hormone protocols for men and women.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary-600 mb-2">
                Peptides & Biologics
              </h3>
              <p className="text-gray-600">
                GLP-1 agonists (Semaglutide, Tirzepatide), recovery peptides (BPC-157, TB-500), growth hormone secretagogues, and emerging peptide therapies.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary-600 mb-2">
                Diagnostics & Testing
              </h3>
              <p className="text-gray-600">
                Bloodwork interpretation, optimal vs reference ranges, biomarker tracking, and comprehensive health monitoring protocols.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary-600 mb-2">
                Research & Updates
              </h3>
              <p className="text-gray-600">
                Weekly analysis of new clinical trials, research papers, FDA approvals, and emerging treatments in hormone optimization and longevity medicine.
              </p>
            </div>
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
