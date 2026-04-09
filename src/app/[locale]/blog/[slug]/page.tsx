import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

// TODO: Replace with real article fetching from CMS/database
export default function ArticlePage({
  params: {locale, slug}
}: {
  params: {locale: string; slug: string}
}) {
  const t = useTranslations('article');

  // Sample article - replace with real data
  const article = {
    title: 'Testosterone Cypionate: Complete Protocol Guide',
    category: 'Hormones',
    readTime: 12,
    date: '2026-04-10',
    author: 'WeightWise Health',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-bold text-yellow-800">
                {t('disclaimer')}
              </h3>
              <p className="text-sm text-yellow-700 mt-1">
                {t('disclaimerText')}
              </p>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-gray-500">
              {article.readTime} min read
            </span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{article.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          
          <p className="text-gray-600">By {article.author}</p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            {t('tableOfContents')}
          </h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#what-is" className="text-primary-600 hover:text-primary-700">What is Testosterone Cypionate</a></li>
            <li><a href="#how-works" className="text-primary-600 hover:text-primary-700">How It Works</a></li>
            <li><a href="#medical-uses" className="text-primary-600 hover:text-primary-700">Medical Uses</a></li>
            <li><a href="#protocols" className="text-primary-600 hover:text-primary-700">TRT Protocols</a></li>
            <li><a href="#dosing" className="text-primary-600 hover:text-primary-700">Dosing Guidelines</a></li>
            <li><a href="#injection" className="text-primary-600 hover:text-primary-700">Injection Techniques</a></li>
            <li><a href="#side-effects" className="text-primary-600 hover:text-primary-700">Side Effects & Management</a></li>
            <li><a href="#bloodwork" className="text-primary-600 hover:text-primary-700">Blood Work Requirements</a></li>
            <li><a href="#faqs" className="text-primary-600 hover:text-primary-700">FAQs</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none bg-white rounded-lg p-8 shadow-sm">
          <h2 id="what-is">What is Testosterone Cypionate</h2>
          <p>
            Testosterone cypionate is a synthetic version of the naturally occurring male hormone testosterone. It's an esterified form of testosterone, meaning it has a cypionate ester attached that controls the release rate of the hormone into the bloodstream.
          </p>
          <p>
            First developed in the 1950s, testosterone cypionate quickly became one of the most prescribed forms of testosterone replacement therapy (TRT) in the United States. The cypionate ester provides a relatively slow and steady release of testosterone, making it ideal for therapeutic use.
          </p>

          <h2 id="how-works">How It Works</h2>
          <p>
            When injected intramuscularly, testosterone cypionate is slowly released from the injection site into the bloodstream. The cypionate ester must be cleaved off by enzymes in the body before the testosterone becomes bioavailable. This process takes time, which is why the effects are sustained over several days.
          </p>
          <p>
            The half-life of testosterone cypionate is approximately 8 days, meaning it takes about 8 days for half of the injected dose to be eliminated from the body. This long half-life allows for less frequent injections compared to shorter-acting esters.
          </p>

          <h2 id="medical-uses">Medical Uses</h2>
          <p><strong>FDA-Approved Indications:</strong></p>
          <ul>
            <li>Primary hypogonadism (congenital or acquired)</li>
            <li>Hypogonadotropic hypogonadism (congenital or acquired)</li>
            <li>Delayed puberty in males</li>
          </ul>
          <p><strong>Common Off-Label Uses:</strong></p>
          <ul>
            <li>Age-related testosterone decline</li>
            <li>Symptoms of low testosterone (fatigue, low libido, depression)</li>
            <li>Body composition optimization</li>
          </ul>

          <h2 id="protocols">TRT Protocols</h2>
          
          <h3>Standard Protocol</h3>
          <p>
            The most common TRT protocol involves injecting <strong>100-200mg of testosterone cypionate once weekly</strong>. This provides stable testosterone levels throughout the week and mimics natural daily production (approximately 7mg per day).
          </p>
          
          <h3>Twice-Weekly Protocol</h3>
          <p>
            Many patients and physicians prefer splitting the weekly dose into two injections (e.g., <strong>50-100mg twice per week</strong>). This approach provides even more stable blood levels and can reduce side effects related to peak-and-trough fluctuations.
          </p>
          
          <h3>Micro-Dosing Protocol</h3>
          <p>
            An increasingly popular approach is <strong>micro-dosing: 20-40mg every other day</strong> or even daily. This most closely mimics natural testosterone production and provides the most stable levels, though it requires more frequent injections.
          </p>

          <h2 id="dosing">Dosing Guidelines</h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Goal</th>
                <th className="text-left">Typical Dosage</th>
                <th className="text-left">Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TRT (Replacement)</td>
                <td>100-200mg/week</td>
                <td>1-2x per week</td>
              </tr>
              <tr>
                <td>TRT (Optimized)</td>
                <td>150-250mg/week</td>
                <td>2-3x per week</td>
              </tr>
              <tr>
                <td>Performance (not recommended)</td>
                <td>300-600mg/week</td>
                <td>2-3x per week</td>
              </tr>
            </tbody>
          </table>

          <h2 id="injection">Injection Techniques</h2>
          <p><strong>Injection Sites:</strong></p>
          <ul>
            <li><strong>Gluteal (buttocks):</strong> Traditional site, large muscle mass</li>
            <li><strong>Vastus lateralis (outer thigh):</strong> Easy self-injection</li>
            <li><strong>Deltoid (shoulder):</strong> Smaller volume injections only</li>
            <li><strong>Ventrogluteal (hip):</strong> Safest site anatomically</li>
          </ul>
          <p><strong>Technique:</strong></p>
          <ol>
            <li>Clean injection site with alcohol swab</li>
            <li>Use 22-25 gauge needle, 1-1.5 inches long</li>
            <li>Insert at 90-degree angle quickly</li>
            <li>Aspirate (check for blood)</li>
            <li>Inject slowly over 30-60 seconds</li>
            <li>Withdraw and apply pressure</li>
          </ol>

          <h2 id="side-effects">Side Effects & Management</h2>
          <p><strong>Common Side Effects:</strong></p>
          <ul>
            <li><strong>Estrogen conversion:</strong> Testosterone converts to estradiol via aromatase enzyme. Can cause water retention, gynecomastia, emotional changes. Manage with AI if needed (anastrozole, exemestane).</li>
            <li><strong>Testicular atrophy:</strong> Natural production shuts down. Prevent with HCG (250-500 IU 2-3x/week).</li>
            <li><strong>Acne:</strong> Increased sebum production. Usually improves after initial months.</li>
            <li><strong>Hair loss:</strong> Accelerates male pattern baldness in genetically predisposed individuals.</li>
            <li><strong>Elevated hematocrit:</strong> Increased red blood cell production. Monitor closely, donate blood if needed.</li>
          </ul>

          <h2 id="bloodwork">Blood Work Requirements</h2>
          <p><strong>Baseline (before starting TRT):</strong></p>
          <ul>
            <li>Total testosterone (morning fasting)</li>
            <li>Free testosterone</li>
            <li>Estradiol (sensitive assay)</li>
            <li>SHBG</li>
            <li>LH and FSH</li>
            <li>Prolactin</li>
            <li>PSA (men over 40)</li>
            <li>Complete blood count (CBC)</li>
            <li>Comprehensive metabolic panel (CMP)</li>
            <li>Lipid panel</li>
          </ul>
          <p><strong>Follow-up Testing:</strong></p>
          <ul>
            <li>6 weeks: Total T, Free T, E2, CBC</li>
            <li>3 months: Full panel</li>
            <li>Every 6 months: Full panel ongoing</li>
          </ul>

          <h2 id="faqs">Frequently Asked Questions</h2>
          
          <h3>How long does it take to feel effects?</h3>
          <p>
            Most patients notice initial improvements in energy and mood within 2-4 weeks. Full benefits typically manifest over 3-6 months as levels stabilize.
          </p>

          <h3>Is TRT permanent?</h3>
          <p>
            No. Natural production can resume after stopping TRT, though recovery time varies. Younger patients and those on TRT for shorter periods typically recover faster.
          </p>

          <h3>Can I use testosterone cypionate for muscle building?</h3>
          <p>
            While testosterone does promote muscle growth, using supraphysiological doses purely for performance enhancement carries significant health risks and is not medically recommended.
          </p>

          <h3>What's the difference between cypionate and enanthate?</h3>
          <p>
            Very little. Both have similar half-lives (cypionate ~8 days, enanthate ~7 days) and produce nearly identical results. The choice often comes down to availability and personal preference.
          </p>

          <h2 id="references">{t('references')}</h2>
          <ol className="text-sm">
            <li>Bhasin S, et al. Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2018.</li>
            <li>Bassil N, et al. The benefits and risks of testosterone replacement therapy: a review. Ther Clin Risk Manag. 2009.</li>
            <li>Mulhall JP, et al. Evaluation and Management of Testosterone Deficiency: AUA Guideline. J Urol. 2018.</li>
          </ol>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12">
          <Newsletter />
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('relatedArticles')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href={`/${locale}/blog/semaglutide-weight-loss-guide`} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-2">Semaglutide Guide</h3>
              <p className="text-sm text-gray-600">Complete GLP-1 protocols</p>
            </Link>
            <Link href={`/${locale}/blog/read-testosterone-blood-test`} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-2">Reading Blood Tests</h3>
              <p className="text-sm text-gray-600">Interpret your results</p>
            </Link>
            <Link href={`/${locale}/blog`} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-2">View All Articles</h3>
              <p className="text-sm text-gray-600">Browse our library</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
