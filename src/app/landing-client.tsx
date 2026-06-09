/**
 * src/app/[locale]/landing-client.tsx
 *
 * CLIENT COMPONENT — "use client" required for useState (FAQ, disclaimer).
 * All strings are hardcoded English. Structure is ready for next-intl
 * useTranslations() when i18n is activated — just extract every string to
 * a translation key.
 *
 * Sections (11):
 *  1. DisclaimerBanner
 *  2. HeroSection
 *  3. FounderSection
 *  4. ProblemSection         — 5 biomarkers (Testosterone, TSH, hs-CRP, SHBG, IGF-1)
 *  5. RetatrutideSection     — drug comparison table with PMIDs
 *  6. HormonesPeptidesSection — educational, NOT prescriptive
 *  7. IgnoredBiomarkersSection — 5 ignored markers
 *  8. ScienceSection         — replaces testimonials; PMID cards
 *  9. PlatformSection        — Q3 2026 roadmap
 * 10. FAQSection             — 6 questions, full answers, accordion
 * 11. FinalCTAAndFooter
 */

'use client'

import { useState } from 'react'

/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN TOKENS — Dark Lab Luxury system
   ═══════════════════════════════════════════════════════════════════════════ */

const T = {
  bg:           '#0A0A0F',
  surface:      '#1A1A2E',
  surface2:     '#12122A',
  surfaceHover: '#1f1f3a',
  cyan:         '#00D4FF',
  green:        '#00FF88',
  purple:       '#7B2FBE',
  cta:          '#FF4D00',
  textPrimary:  '#F0F0F5',
  textSecondary:'#8888AA',
  border:       'rgba(255,255,255,0.08)',
  borderHover:  'rgba(255,255,255,0.15)',
  overlay:      'rgba(10,14,39,0.0)',   // hero gradient base
} as const

/* ═══════════════════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════════════════ */

const GUMROAD_URL = 'https://gumroad.com/l/grmohs'

const IMG = {
  hero:   'https://d2xsxph8kpxj0f.cloudfront.net/310419663027248425/PDKRbAaDzZrZTooyy4D93E/hero-biomarker-lab-NgmnubefHZyFrVn3rHbHSC.webp',
  before: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663027248425/PDKRbAaDzZrZTooyy4D93E/founder-before-120kg-TZ8mXgzdNZu9sUAZopUvEH.webp',
  after:  'https://d2xsxph8kpxj0f.cloudfront.net/310419663027248425/PDKRbAaDzZrZTooyy4D93E/founder-after-110kg-KYQA65u79ZpH2pqiMQdRFM.webp',
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const BIOMARKERS_PROBLEM = [
  {
    name: 'Testosterone',
    icon: '⚡',
    detail:
      'Affects men AND women. Low levels correlate with fatigue, fat accumulation, and cognitive fog regardless of sex. Dozens of biomarkers have sex-specific reference ranges — testosterone being among the most clinically significant (Sobhani et al., Biology of Sex Differences 2018, PMID 30223903).',
  },
  {
    name: 'TSH',
    icon: '🦋',
    detail:
      'Thyroid-stimulating hormone governs metabolic rate, weight trajectory, and mood. Subclinical dysfunction routinely falls inside "normal" ranges yet produces real, measurable symptoms — and is missed on standard panels.',
  },
  {
    name: 'hs-CRP',
    icon: '🔥',
    detail:
      'High-sensitivity C-reactive protein quantifies low-grade systemic inflammation — a root-cause driver of insulin resistance, cardiovascular risk, and metabolic dysfunction. Standard CRP assays lack the sensitivity to catch early signals.',
  },
  {
    name: 'SHBG',
    icon: '🔗',
    detail:
      'Sex hormone-binding globulin determines how much testosterone and estradiol are biologically available to your cells. Reporting total testosterone without SHBG tells half the story — or less.',
  },
  {
    name: 'IGF-1',
    icon: '📈',
    detail:
      'Insulin-like Growth Factor-1 reflects the status of the growth hormone axis, anabolic capacity, and pace of biological aging. Rarely ordered on standard panels. Tracked routinely by people serious about long-term optimization.',
  },
] as const

const BIOMARKERS_IGNORED = [
  {
    name: 'Fasting Insulin',
    icon: '💉',
    why: 'Most standard panels measure fasting glucose but not insulin. A normal fasting glucose paired with elevated fasting insulin is the hallmark of early insulin resistance — often detectable a decade before type 2 diabetes appears on any diagnostic radar.',
  },
  {
    name: 'Free T3',
    icon: '🦋',
    why: 'TSH tells you how loudly the pituitary is signaling the thyroid. Free T3 tells you what thyroid hormone is actually reaching your cells. You can have a textbook-normal TSH and functionally low Free T3 simultaneously — a gap standard panels don\'t close.',
  },
  {
    name: 'Cortisol (24h Urinary Free)',
    icon: '⏱️',
    why: 'A single morning cortisol draw captures one point in a dynamic diurnal curve. A 24-hour urinary free cortisol reveals patterns of chronic HPA axis dysregulation that a spot check misses entirely — including subclinical hypercortisolism.',
  },
  {
    name: 'Ferritin',
    icon: '🩸',
    why: 'Ferritin reflects iron stores. Low ferritin impairs thyroid hormone conversion, mitochondrial function, and dopamine synthesis. Particularly prevalent in women — and routinely absent from annual physicals despite the outsized downstream effects.',
  },
  {
    name: 'Reverse T3 (rT3)',
    icon: '🔄',
    why: 'Under chronic physiological stress, the body preferentially converts T4 to Reverse T3 — an inactive metabolic brake — rather than to active T3. This HPA–thyroid axis crosstalk is real and clinically significant. Standard thyroid panels do not include rT3.',
  },
] as const

const DRUGS = [
  {
    name: 'Semaglutide',
    class: 'GLP-1 receptor agonist',
    stat: '−14.9%',
    context: 'STEP-1 trial · 68 weeks',
    ref: 'NEJM 2021 · PMID 33526457',
    accent: T.textSecondary,
    badge: null,
    note: null,
    tradeoff: null,
    approved: true,
  },
  {
    name: 'Tirzepatide',
    class: 'Dual GIP / GLP-1 agonist',
    stat: '−22.5%',
    context: 'SURMOUNT-1 · efficacy estimand',
    ref: 'NEJM 2022 · PMID 35658024',
    accent: T.green,
    badge: 'FDA APPROVED',
    note: null,
    tradeoff: null,
    approved: true,
  },
  {
    name: 'Retatrutide',
    class: 'Triple GIP / GLP-1 / Glucagon agonist',
    stat: '−24.2%',
    context: 'Phase 2 · 48 weeks · 12mg',
    ref: 'NEJM 2023 · PMID 37366315',
    accent: T.cyan,
    badge: 'PHASE 2',
    note: 'Phase 3 TRIUMPH-4 topline: −28.7% (Dec 2025)',
    tradeoff: 'Dysesthesia: 20.9% of participants',
    approved: false,
  },
]

const SCIENCE_CARDS = [
  {
    pmid: '37366315',
    shortPmid: 'PMID 37366315',
    citation: 'Jastreboff et al. · NEJM 2023',
    headline: 'Retatrutide Phase 2',
    stat: '−24.2%',
    detail:
      '48-week Phase 2 RCT, 12mg dose. Triple receptor agonism produced the highest efficacy signal in obesity pharmacology to date. Phase 3 TRIUMPH-4 topline (Dec 2025) reported −28.7%. Trade-off: dysesthesia in 20.9% of participants.',
    accent: T.cyan,
  },
  {
    pmid: '35658024',
    shortPmid: 'PMID 35658024',
    citation: 'Jastreboff et al. · NEJM 2022',
    headline: 'Tirzepatide SURMOUNT-1',
    stat: '−22.5%',
    detail:
      'Efficacy estimand from the SURMOUNT-1 trial. Dual GIP/GLP-1 receptor agonism. Redefined the pharmacological standard of care for obesity. FDA-approved as Zepbound.',
    accent: T.green,
  },
  {
    pmid: '30223903',
    shortPmid: 'PMID 30223903',
    citation: 'Sobhani et al. · Biology of Sex Differences 2018',
    headline: 'Sex-Specific Biomarker Ranges',
    stat: 'Dozens of ranges',
    detail:
      'Dozens of biomarkers have sex-specific reference ranges. Most commercial labs still apply historically male-skewed pooled intervals — systematically missing pathology in women and producing false reassurance.',
    accent: T.purple,
  },
]

const FAQ_ITEMS = [
  {
    q: 'Is The Optimization Bible for men or for women?',
    a: `Both. Every hormone chapter in the Bible addresses male and female physiology where they diverge — because the science demands it. Testosterone optimization looks fundamentally different at 250 ng/dL in a 35-year-old woman versus a 40-year-old man with primary hypogonadism. We use sex-specific reference ranges throughout. Dozens of biomarkers carry sex-specific clinical thresholds (Sobhani et al., Biology of Sex Differences 2018, PMID 30223903), and our framework reflects that rigor across all 87 pages.`,
  },
  {
    q: 'Do I need to be on TRT, HRT, or any medication to benefit?',
    a: `No. The Bible is designed for anyone who wants to understand their bloodwork — whether you are completely unmedicated, weighing a conversation with your physician about optimization options, or already working with a hormone specialist and want to understand the science behind your protocol. The content raises your scientific literacy so you can ask better questions, read your labs in context, and evaluate what the peer-reviewed literature actually says — not what wellness marketing says.`,
  },
  {
    q: 'Is this medical advice?',
    a: `No. The Optimization Bible is an educational resource built on peer-reviewed science. Nothing in it constitutes medical advice, diagnosis, or treatment recommendation. It is designed to improve your scientific literacy around hormone and metabolic health so you can have more productive, informed conversations with your licensed healthcare provider. Every clinical decision involving your body requires a physician who knows your complete medical history.`,
  },
  {
    q: 'What exactly does the $79.90 Founding Member price include?',
    a: `Founding Members receive: (1) The complete 87-page Optimization Bible PDF — all 40 chapters covering hormonal physiology, thyroid function, peptides, advanced biomarkers, and personalized protocol design frameworks. (2) Founding Member pricing locked permanently before it increases to $129.90. (3) Priority access to the WeightWise interactive platform (roadmap: Q3 2026), where you will input your actual lab values and receive personalized educational interpretation contextualized to your specific profile. Only the first 100 members get this pricing — that counter is real and not a marketing device.`,
  },
  {
    q: 'Where do the citations come from? Can I verify them?',
    a: `Every citation is traceable to PubMed (pubmed.ncbi.nlm.nih.gov). Search any PMID listed in the Bible directly on PubMed to read the abstract — most primary papers are available in full text. We cite primary literature only: randomized controlled trials, meta-analyses, and peer-reviewed observational studies published in indexed journals. We do not cite news articles, blog posts, or manufacturer data as scientific evidence.`,
  },
  {
    q: 'What happens immediately after I purchase?',
    a: `After completing your purchase on Gumroad, you will receive an automated email with your permanent download link within minutes. No subscription. No recurring charges. The file is yours. If the email does not arrive within 10 minutes, check your spam or promotions folder. You can also reach us on Instagram (@weightwiselab) — we respond to every message within 24 hours.`,
  },
]

/* ═══════════════════════════════════════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

function CTAButton({
  label = 'Get Founding Access — $79.90',
  size = 'md',
}: {
  label?: string
  size?: 'md' | 'lg'
}) {
  const [hovered, setHovered] = useState(false)
  const pad = size === 'lg' ? '18px 44px' : '15px 32px'
  const fs  = size === 'lg' ? '1.1rem' : '1rem'

  return (
    <a
      href={GUMROAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Founding Member access to The Optimization Bible on Gumroad — $79.90"
      style={{
        display: 'inline-block',
        background: T.cta,
        color: '#fff',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: fs,
        padding: pad,
        borderRadius: '8px',
        textDecoration: 'none',
        letterSpacing: '0.02em',
        transition: 'filter 0.2s, transform 0.2s',
        filter: hovered ? 'brightness(1.15)' : 'brightness(1)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: T.cyan,
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.7rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: '14px',
      }}
    >
      {children}
    </p>
  )
}

function Heading({
  children,
  center = false,
}: {
  children: React.ReactNode
  center?: boolean
}) {
  return (
    <h2
      style={{
        color: T.textPrimary,
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        fontWeight: 800,
        lineHeight: 1.2,
        marginBottom: '16px',
        textAlign: center ? 'center' : 'left',
        letterSpacing: '-0.01em',
      }}
    >
      {children}
    </h2>
  )
}

function Pill({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: `${color}1a`,
        color,
        border: `1px solid ${color}44`,
        borderRadius: '4px',
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.65rem',
        letterSpacing: '0.1em',
        padding: '3px 9px',
      }}
    >
      {children}
    </span>
  )
}

function Sub({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p
      style={{
        color: T.textSecondary,
        fontFamily: "'Inter', sans-serif",
        fontSize: '1rem',
        lineHeight: 1.75,
        textAlign: center ? 'center' : 'left',
      }}
    >
      {children}
    </p>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 1 — Disclaimer Banner
   ═══════════════════════════════════════════════════════════════════════════ */

function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null
  return (
    <div
      role="note"
      aria-label="Educational content disclaimer"
      style={{
        background: `${T.purple}28`,
        borderBottom: `1px solid ${T.purple}44`,
        color: T.textSecondary,
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.8rem',
        textAlign: 'center',
        padding: '10px 48px',
        position: 'relative',
      }}
    >
      ⚕️{' '}
      <strong style={{ color: T.textPrimary }}>Educational content only — not medical advice.</strong>{' '}
      Always consult a licensed healthcare provider before making clinical decisions.
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss disclaimer"
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: T.textSecondary,
          cursor: 'pointer',
          fontSize: '1.2rem',
          lineHeight: 1,
          padding: '0 4px',
        }}
      >
        ×
      </button>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 2 — Hero
   ═══════════════════════════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section
      aria-label="Hero — The Optimization Bible"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
    >
      {/* Background */}
      <img
        src={IMG.hero}
        alt="Laboratory biomarker analysis — microscope and scientific data visualization"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
        loading="eager"
      />
      {/* Overlay: navy #0a0e27 — heavy at bottom (60%), lighter at top (20%) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(10,14,39,0.97) 0%, rgba(10,14,39,0.75) 45%, rgba(10,14,39,0.22) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '860px',
          margin: '0 auto',
          padding: 'clamp(100px, 15vh, 160px) 24px 80px',
          textAlign: 'center',
        }}
      >
        <Pill color={T.cyan}>FOUNDING ACCESS · FIRST 100 MEMBERS ONLY</Pill>

        <h1
          style={{
            color: T.textPrimary,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 6vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            marginTop: '24px',
            marginBottom: '22px',
            letterSpacing: '-0.02em',
          }}
        >
          Your Bloodwork Has Answers.
          <br />
          <span style={{ color: T.cyan }}>Most Doctors Don't Have Time</span>
          <br />
          to Explain Them.
        </h1>

        <p
          style={{
            color: 'rgba(240,240,245,0.82)',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            lineHeight: 1.72,
            maxWidth: '620px',
            margin: '0 auto 40px',
          }}
        >
          An 87-page evidence-based guide to hormones, peptides, and biomarkers — for men and women
          who want to understand their bodies, not just treat symptoms.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          <CTAButton size="lg" />
          <p
            style={{
              color: T.textSecondary,
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.06em',
            }}
          >
            Price increases to $129.90 after 100 members · Instant PDF download · No subscription
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 3 — Founder Credibility
   ═══════════════════════════════════════════════════════════════════════════ */

function FounderSection() {
  return (
    <section
      aria-label="About the author — founder credibility"
      style={{ background: T.surface, padding: 'clamp(60px, 8vw, 100px) 24px' }}
    >
      <div
        style={{
          maxWidth: '1040px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '56px',
          alignItems: 'center',
        }}
      >
        {/* Text */}
        <div>
          <Kicker>ABOUT THE AUTHOR</Kicker>
          <Heading>
            Built from{' '}
            <span style={{ color: T.cyan }}>Personal Experience,</span>
            <br />
            Grounded in Science
          </Heading>
          <Sub>
            The Optimization Bible wasn't written in a vacuum. It was built to answer the questions
            that took years of reading primary literature to resolve — the same questions hiding in
            every bloodwork result your physician has 7 minutes to review.
          </Sub>
          <p
            style={{
              color: T.textSecondary,
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.72,
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: `1px solid ${T.border}`,
            }}
          >
            On a mission to help thousands understand their bodies — starting with the first 100
            Founding Members.
          </p>
        </div>

        {/* Before / After */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          {[
            {
              src: IMG.before,
              alt: 'Founder before — 120 kg, starting point of the evidence-based optimization journey',
              label: 'BEFORE · 120 KG',
              labelColor: T.textSecondary,
              borderColor: T.border,
            },
            {
              src: IMG.after,
              alt: 'Founder after — 110 kg lean, result of hormone and biomarker-driven optimization',
              label: 'AFTER · 110 KG LEAN',
              labelColor: T.cyan,
              borderColor: `${T.cyan}55`,
            },
          ].map(img => (
            <div key={img.label} style={{ flex: '0 1 180px' }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  borderRadius: '14px',
                  border: `1px solid ${img.borderColor}`,
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
              <p
                style={{
                  color: img.labelColor,
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.65rem',
                  textAlign: 'center',
                  marginTop: '10px',
                  letterSpacing: '0.1em',
                }}
              >
                {img.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 4 — The Problem (5 biomarkers)
   ═══════════════════════════════════════════════════════════════════════════ */

function ProblemSection() {
  return (
    <section
      aria-label="Critical biomarkers rarely explained on standard lab panels"
      style={{ background: T.bg, padding: 'clamp(60px, 8vw, 100px) 24px' }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Kicker>THE PROBLEM</Kicker>
          <Heading center>
            5 Biomarkers That Change{' '}
            <span style={{ color: T.cyan }}>Everything</span> — Rarely Explained
          </Heading>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <Sub center>
              Standard bloodwork panels were designed for disease detection, not optimization. These
              five markers sit at the intersection of hormonal health, metabolism, and aging — for
              men and women equally.
            </Sub>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {BIOMARKERS_PROBLEM.map(b => (
            <BiomarkerCard key={b.name} icon={b.icon} name={b.name} detail={b.detail} accent={T.cyan} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BiomarkerCard({
  icon,
  name,
  detail,
  accent,
}: {
  icon: string
  name: string
  detail: string
  accent: string
}) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: T.surface,
        borderRadius: '14px',
        border: `1px solid ${hov ? accent + '55' : T.border}`,
        padding: '28px 24px',
        transition: 'border-color 0.2s',
      }}
    >
      <span style={{ fontSize: '2rem' }}>{icon}</span>
      <h3
        style={{
          color: T.textPrimary,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '1.05rem',
          marginTop: '14px',
          marginBottom: '10px',
        }}
      >
        {name}
      </h3>
      <p
        style={{
          color: T.textSecondary,
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.87rem',
          lineHeight: 1.65,
        }}
      >
        {detail}
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 5 — Retatrutide Showcase (drug comparison)
   ═══════════════════════════════════════════════════════════════════════════ */

function RetatrutideSection() {
  return (
    <section
      aria-label="GLP-1 class drug efficacy comparison — Semaglutide, Tirzepatide, Retatrutide"
      style={{ background: T.surface2, padding: 'clamp(60px, 8vw, 100px) 24px' }}
    >
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Kicker>ADVANCED PHARMACOLOGY</Kicker>
          <Heading center>
            The New Weight-Loss Drug Landscape —{' '}
            <span style={{ color: T.cyan }}>What the Data Actually Show</span>
          </Heading>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <Sub center>
              The Optimization Bible dedicates a full chapter to GLP-1 class pharmacology. Below is
              the peer-reviewed efficacy signal — with honest trade-offs included. Understanding
              mechanism helps you ask your physician the right questions.
            </Sub>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
          }}
        >
          {DRUGS.map(d => (
            <DrugCard key={d.name} drug={d} />
          ))}
        </div>

        <p
          style={{
            color: `${T.textSecondary}88`,
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.78rem',
            textAlign: 'center',
            marginTop: '28px',
            fontStyle: 'italic',
          }}
        >
          All efficacy figures from peer-reviewed RCTs. No pharmaceutical affiliation. Educational
          analysis — not a treatment recommendation.
        </p>
      </div>
    </section>
  )
}

function DrugCard({ drug }: { drug: (typeof DRUGS)[number] }) {
  return (
    <div
      style={{
        background: T.surface,
        borderRadius: '16px',
        border: `1px solid ${drug.accent}44`,
        padding: '28px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent top bar */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: drug.accent }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <h3
          style={{
            color: drug.accent,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: '1.25rem',
          }}
        >
          {drug.name}
        </h3>
        {drug.badge && <Pill color={drug.accent}>{drug.badge}</Pill>}
      </div>

      <p
        style={{
          color: T.textSecondary,
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.82rem',
          marginBottom: '20px',
        }}
      >
        {drug.class}
      </p>

      <p
        style={{
          color: drug.accent,
          fontFamily: "'Space Mono', monospace",
          fontSize: '2.4rem',
          fontWeight: 700,
          lineHeight: 1,
          marginBottom: '4px',
        }}
      >
        {drug.stat}
      </p>
      <p
        style={{
          color: `${T.textSecondary}bb`,
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.06em',
          marginBottom: '8px',
        }}
      >
        BODY WEIGHT REDUCTION
      </p>
      <p
        style={{
          color: T.textSecondary,
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.82rem',
          marginBottom: '12px',
        }}
      >
        {drug.context}
      </p>
      <p
        style={{
          color: `${T.textSecondary}88`,
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.62rem',
          letterSpacing: '0.06em',
        }}
      >
        {drug.ref}
      </p>

      {drug.note && (
        <div
          style={{
            marginTop: '16px',
            background: `${T.cyan}12`,
            border: `1px solid ${T.cyan}33`,
            borderRadius: '8px',
            padding: '10px 12px',
            color: `${T.cyan}cc`,
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            lineHeight: 1.5,
          }}
        >
          📊 {drug.note}
        </div>
      )}

      {drug.tradeoff && (
        <div
          style={{
            marginTop: '10px',
            background: 'rgba(255,153,85,0.08)',
            border: '1px solid rgba(255,153,85,0.25)',
            borderRadius: '8px',
            padding: '10px 12px',
            color: '#FF9955',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            lineHeight: 1.5,
          }}
        >
          ⚠️ {drug.tradeoff}
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 6 — Hormones + Peptides (educational, not prescriptive)
   ═══════════════════════════════════════════════════════════════════════════ */

function HormonesPeptidesSection() {
  const cards = [
    {
      icon: '🔁',
      title: 'Hormone Feedback Loops',
      body: 'The Bible maps how hormones interact in cascading feedback loops — so you understand, for example, how thyroid function affects testosterone conversion, or how cortisol dysregulation shifts progesterone and estrogen balance.',
    },
    {
      icon: '💬',
      title: 'Conversations to Have With Your Doctor',
      body: 'Each protocol chapter ends with a section titled "Conversations to have with your physician about cascading effects" — science-backed questions derived from the literature that you can bring to your next appointment.',
    },
    {
      icon: '🧬',
      title: 'Peptide Mechanism Education',
      body: 'The peptide chapters cover mechanism of action, tissue targets, and what the research shows — without prescribing dosage. Understanding how peptides work helps you evaluate claims and participate meaningfully in treatment discussions.',
    },
    {
      icon: '📊',
      title: 'Biomarker Context, Not Just Numbers',
      body: 'Every biomarker chapter includes clinical reference ranges with sex-specific breakdowns, what out-of-range values may signal, and the relevant primary literature — not cherry-picked wellness blog citations.',
    },
  ]

  return (
    <section
      aria-label="Hormones and peptides — integrated educational framework"
      style={{ background: T.bg, padding: 'clamp(60px, 8vw, 100px) 24px' }}
    >
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Kicker>WHAT'S INSIDE</Kicker>
          <Heading center>
            Hormones + Peptides —{' '}
            <span style={{ color: T.green }}>An Integrated Framework</span>
          </Heading>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <Sub center>
              The Optimization Bible doesn't treat hormones and peptides as separate silos. It maps
              the connections — so you understand your biology as a system, not a checklist.
            </Sub>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {cards.map(c => (
            <div
              key={c.title}
              style={{
                background: T.surface,
                borderRadius: '14px',
                border: `1px solid ${T.border}`,
                padding: '28px 24px',
              }}
            >
              <span style={{ fontSize: '2rem' }}>{c.icon}</span>
              <h3
                style={{
                  color: T.green,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  marginTop: '14px',
                  marginBottom: '10px',
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  color: T.textSecondary,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.87rem',
                  lineHeight: 1.65,
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 7 — 5 Biomarkers Ignored
   ═══════════════════════════════════════════════════════════════════════════ */

function IgnoredBiomarkersSection() {
  return (
    <section
      aria-label="Five biomarkers routinely omitted from standard lab panels"
      style={{ background: T.surface, padding: 'clamp(60px, 8vw, 100px) 24px' }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Kicker>WHAT STANDARD PANELS MISS</Kicker>
          <Heading center>
            5 Markers Rarely Ordered —{' '}
            <span style={{ color: T.cta }}>That Routinely Determine Outcomes</span>
          </Heading>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <Sub center>
              Your annual physical likely included none of these. Each one adds a layer of clinical
              resolution that a standard metabolic panel or CBC simply cannot provide.
            </Sub>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {BIOMARKERS_IGNORED.map((b, i) => (
            <div
              key={b.name}
              style={{
                background: T.surface2,
                borderRadius: '14px',
                border: `1px solid ${T.border}`,
                padding: '24px 28px',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '20px',
                alignItems: 'center',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: '50px',
                  height: '50px',
                  background: `${T.cta}1a`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  flexShrink: 0,
                }}
              >
                {b.icon}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span
                    style={{
                      color: T.cta,
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.6rem',
                      letterSpacing: '0.12em',
                      background: `${T.cta}1a`,
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    style={{
                      color: T.textPrimary,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '1rem',
                    }}
                  >
                    {b.name}
                  </h3>
                </div>
                <p
                  style={{
                    color: T.textSecondary,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.87rem',
                    lineHeight: 1.65,
                  }}
                >
                  {b.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 8 — The Science Behind The Bible (replaces testimonials)
   ═══════════════════════════════════════════════════════════════════════════ */

function ScienceSection() {
  return (
    <section
      aria-label="The science behind The Optimization Bible — peer-reviewed PMID citations"
      style={{ background: T.bg, padding: 'clamp(60px, 8vw, 100px) 24px' }}
    >
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Kicker>EVIDENCE BASE</Kicker>
          <Heading center>The Science Behind the Bible</Heading>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Sub center>
              Every chapter cites primary literature. Here are three cornerstone studies that
              underpin the framework. Verify each PMID on PubMed yourself.
            </Sub>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
          }}
        >
          {SCIENCE_CARDS.map(c => (
            <ScienceCard key={c.pmid} card={c} />
          ))}
        </div>

        <p
          style={{
            color: `${T.textSecondary}77`,
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.78rem',
            textAlign: 'center',
            marginTop: '28px',
          }}
        >
          Click any card to open the PubMed abstract in a new tab.
        </p>
      </div>
    </section>
  )
}

function ScienceCard({ card }: { card: (typeof SCIENCE_CARDS)[number] }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={`https://pubmed.ncbi.nlm.nih.gov/${card.pmid}/`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open PubMed abstract — ${card.shortPmid}: ${card.citation}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'block',
        background: T.surface,
        borderRadius: '16px',
        border: `1px solid ${hov ? card.accent : card.accent + '44'}`,
        padding: '28px',
        textDecoration: 'none',
        transition: 'border-color 0.2s, transform 0.2s',
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        textAlign: 'left',
      }}
    >
      <Pill color={card.accent}>{card.shortPmid}</Pill>
      <h3
        style={{
          color: card.accent,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '1.1rem',
          marginTop: '18px',
          marginBottom: '4px',
        }}
      >
        {card.headline}
      </h3>
      <p
        style={{
          color: T.textSecondary,
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.06em',
          marginBottom: '18px',
        }}
      >
        {card.citation}
      </p>
      <p
        style={{
          color: card.accent,
          fontFamily: "'Space Mono', monospace",
          fontSize: '2rem',
          fontWeight: 700,
          lineHeight: 1,
          marginBottom: '14px',
        }}
      >
        {card.stat}
      </p>
      <p
        style={{
          color: T.textSecondary,
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.85rem',
          lineHeight: 1.65,
        }}
      >
        {card.detail}
      </p>
      <p
        style={{
          color: card.accent,
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.78rem',
          marginTop: '18px',
          opacity: 0.7,
        }}
      >
        ↗ View on PubMed
      </p>
    </a>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 9 — Platform Preview
   ═══════════════════════════════════════════════════════════════════════════ */

function PlatformSection() {
  const features = [
    { icon: '🧪', f: 'Lab Value Input', d: 'Enter your actual results directly' },
    { icon: '📐', f: 'Sex-Specific Ranges', d: 'Age- and sex-adjusted context' },
    { icon: '🔗', f: 'Biomarker Interplay', d: 'See how values affect each other' },
    { icon: '📚', f: 'Cited Literature', d: 'Every insight points to a PMID' },
  ]

  return (
    <section
      aria-label="WeightWise interactive platform — Q3 2026 roadmap"
      style={{ background: T.surface2, padding: 'clamp(60px, 8vw, 100px) 24px' }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
        <Pill color={T.purple}>ROADMAP · Q3 2026</Pill>

        <h2
          style={{
            color: T.textPrimary,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginTop: '20px',
            marginBottom: '16px',
            letterSpacing: '-0.01em',
          }}
        >
          <span style={{ color: T.purple }}>An Interactive Platform</span> Is Coming
        </h2>

        <div style={{ maxWidth: '580px', margin: '0 auto 44px' }}>
          <Sub center>
            Founding Members get priority access to the WeightWise interactive platform — where
            you'll input your actual lab values and receive educational analysis contextualized to
            your specific biomarker profile. Not generic advice. Your data, your context.
          </Sub>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '16px',
            marginBottom: '44px',
            textAlign: 'left',
          }}
        >
          {features.map(item => (
            <div
              key={item.f}
              style={{
                background: T.surface,
                borderRadius: '12px',
                border: `1px solid ${T.purple}44`,
                padding: '20px',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              <p
                style={{
                  color: T.textPrimary,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginTop: '10px',
                  marginBottom: '4px',
                }}
              >
                {item.f}
              </p>
              <p
                style={{
                  color: T.textSecondary,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                }}
              >
                {item.d}
              </p>
            </div>
          ))}
        </div>

        <CTAButton label="Get Founding Access — Lock Your Price at $79.90" />
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 10 — FAQ
   ═══════════════════════════════════════════════════════════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      aria-label="Frequently asked questions"
      style={{ background: T.bg, padding: 'clamp(60px, 8vw, 100px) 24px' }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Kicker>FAQ</Kicker>
          <Heading center>
            Common Questions, <span style={{ color: T.cyan }}>Straight Answers</span>
          </Heading>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                style={{
                  background: T.surface,
                  borderRadius: '12px',
                  border: `1px solid ${isOpen ? T.cyan + '55' : T.border}`,
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    gap: '16px',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      color: T.textPrimary,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: '1rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      color: T.cyan,
                      fontSize: '1.4rem',
                      flexShrink: 0,
                      display: 'block',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-${i}`}
                    role="region"
                    style={{
                      padding: '0 24px 22px',
                      borderTop: `1px solid ${T.border}`,
                    }}
                  >
                    <p
                      style={{
                        color: T.textSecondary,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.93rem',
                        lineHeight: 1.8,
                        paddingTop: '18px',
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 11 — Final CTA + Footer
   ═══════════════════════════════════════════════════════════════════════════ */

function FinalCTAAndFooter() {
  return (
    <>
      {/* Final CTA */}
      <section
        aria-label="Final call to action"
        style={{
          background: `linear-gradient(140deg, ${T.surface} 0%, #0c0c22 100%)`,
          padding: 'clamp(80px, 10vw, 120px) 24px',
          textAlign: 'center',
          borderTop: `1px solid ${T.cyan}22`,
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Pill color={T.cta}>FOUNDING ACCESS · FIRST 100 ONLY</Pill>

          <h2
            style={{
              color: T.textPrimary,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              lineHeight: 1.15,
              margin: '24px 0 18px',
              letterSpacing: '-0.02em',
            }}
          >
            Stop Guessing.
            <br />
            Start <span style={{ color: T.cyan }}>Understanding.</span>
          </h2>

          <p
            style={{
              color: T.textSecondary,
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              lineHeight: 1.72,
              marginBottom: '40px',
              maxWidth: '560px',
              margin: '0 auto 40px',
            }}
          >
            87 pages. 40 chapters. Real citations. For men and women who want to understand what
            their bloodwork actually means — before the price goes up.
          </p>

          <CTAButton size="lg" label="Get The Optimization Bible — $79.90" />

          <p
            style={{
              color: `${T.textSecondary}99`,
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              marginTop: '18px',
              letterSpacing: '0.06em',
            }}
          >
            Instant PDF download · Price rises to $129.90 after 100 members · No recurring charges
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        aria-label="Site footer"
        style={{ background: '#06060C', borderTop: `1px solid ${T.border}`, padding: '56px 24px 32px' }}
      >
        <div
          style={{
            maxWidth: '1040px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                color: T.cyan,
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: '1.25rem',
                marginBottom: '10px',
              }}
            >
              WeightWise Health
            </p>
            <p
              style={{
                color: T.textSecondary,
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                lineHeight: 1.65,
              }}
            >
              Evidence-based education in hormones, peptides, and biomarkers. For men and women. No
              fluff. No guru language. Just the science.
            </p>
          </div>

          {/* Social */}
          <div>
            <p
              style={{
                color: T.textPrimary,
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                marginBottom: '14px',
              }}
            >
              Follow
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                {
                  href: 'https://www.instagram.com/weightwiselab/',
                  label: 'WeightWise Health on Instagram (@weightwiselab)',
                  text: '📸 Instagram · @weightwiselab',
                },
                {
                  href: 'https://x.com/WeightWiseLab',
                  label: 'WeightWise Health on X / Twitter (@WeightWiseLab)',
                  text: '🐦 X / Twitter · @WeightWiseLab',
                },
              ].map(link => (
                <FooterLink key={link.href} href={link.href} label={link.label}>
                  {link.text}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p
              style={{
                color: T.textPrimary,
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                marginBottom: '14px',
              }}
            >
              Disclaimer
            </p>
            <p
              style={{
                color: T.textSecondary,
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                lineHeight: 1.65,
              }}
            >
              The Optimization Bible is an educational document and does not constitute medical
              advice, diagnosis, or treatment. No content on this site should be construed as a
              clinical recommendation. Always consult a licensed healthcare provider for medical
              decisions.
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${T.border}`,
            paddingTop: '24px',
            textAlign: 'center',
            color: `${T.textSecondary}66`,
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.78rem',
          }}
        >
          © 2026 WeightWise Health · All rights reserved
        </div>
      </footer>
    </>
  )
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        color: hov ? T.cyan : T.textSecondary,
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.85rem',
        textDecoration: 'none',
        transition: 'color 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}
    >
      {children}
    </a>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   ROOT EXPORT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function LandingClient() {
  return (
    <main style={{ background: T.bg, minHeight: '100vh' }}>
      {/*
        Google Fonts — Space Grotesk (headlines), Inter (body), Space Mono (data/mono)
        Loaded inline to avoid layout shift. For production, prefer next/font/google.
        prefers-reduced-motion: disables all CSS transitions/animations globally.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html { scroll-behavior: smooth; }

        body {
          background: #0A0A0F;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Accessibility: respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* Improve tap target size on mobile */
        button { min-height: 44px; }
        a { min-height: 44px; display: inline-flex; align-items: center; }
      `}</style>

      <DisclaimerBanner />
      <HeroSection />
      <FounderSection />
      <ProblemSection />
      <RetatrutideSection />
      <HormonesPeptidesSection />
      <IgnoredBiomarkersSection />
      <ScienceSection />
      <PlatformSection />
      <FAQSection />
      <FinalCTAAndFooter />
    </main>
  )
}
