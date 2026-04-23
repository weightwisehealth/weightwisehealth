'use client'

import { useState, useEffect, useRef } from 'react'
import { Space_Grotesk, Inter, Space_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-headline' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-body' })
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400','700'], variable: '--font-mono' })

const GUMROAD_URL = 'https://weightwise8.gumroad.com/l/grmohs'

const colors = {
  bg: '#0A0A0F',
  surface: '#1A1A2E',
  surface2: '#16213E',
  blue: '#00D4FF',
  green: '#00FF88',
  purple: '#7B2FBE',
  red: '#FF4D00',
  redHover: '#E64400',
  textPrimary: '#F0F0F5',
  textSecondary: '#8888AA',
  border: 'rgba(0,212,255,0.15)',
}

// ─── ANNOUNCEMENT BAR ──────────────────────────────────────────────
function AnnouncementBar() {
  const [spots, setSpots] = useState(347)
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: `linear-gradient(90deg, ${colors.purple}, ${colors.blue})`,
      padding: '10px 16px',
      textAlign: 'center',
    }}>
      <p style={{ margin: 0, fontFamily: inter.style.fontFamily, fontSize: '13px', color: '#fff', fontWeight: 500 }}>
        We are redefining human optimization. Be one of the first {spots} to access The Optimization Bible —{' '}
        <strong>1 year at $79.90, guaranteed.</strong> After that, renewal at 70%.
      </p>
    </div>
  )
}

// ─── CREDIBILITY BAR ───────────────────────────────────────────────
function CredibilityBar() {
  const refs = ['PubMed Indexed Research', 'Endocrine Society Guidelines', 'JCEM Protocols', 'ISSM Standards', 'NEJM Studies']
  return (
    <div style={{
      borderTop: `1px solid ${colors.border}`,
      borderBottom: `1px solid ${colors.border}`,
      padding: '14px 24px',
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      flexWrap: 'wrap',
      background: colors.surface,
    }}>
      {refs.map(r => (
        <span key={r} style={{ fontFamily: spaceMono.style.fontFamily, fontSize: '11px', color: colors.textSecondary, letterSpacing: '0.05em' }}>
          {r}
        </span>
      ))}
    </div>
  )
}

// ─── HERO ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      padding: '100px 24px 80px',
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '60px',
      alignItems: 'center',
    }}>
      {/* LEFT */}
      <div>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(0,212,255,0.08)',
          border: `1px solid ${colors.border}`,
          borderRadius: '100px',
          padding: '6px 16px',
          marginBottom: '28px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.green, display: 'inline-block' }} />
          <span style={{ fontFamily: spaceMono.style.fontFamily, fontSize: '11px', color: colors.blue, letterSpacing: '0.08em' }}>
            FOUNDING ACCESS — 100 SPOTS ONLY
          </span>
        </div>

        <h1 style={{
          fontFamily: spaceGrotesk.style.fontFamily,
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 700,
          color: colors.textPrimary,
          lineHeight: 1.1,
          margin: '0 0 24px',
        }}>
          The First System Built to{' '}
          <span style={{ color: colors.blue }}>Optimize</span>{' '}
          You. Not Just Treat You.
        </h1>

        <p style={{
          fontFamily: inter.style.fontFamily,
          fontSize: '18px',
          color: colors.textSecondary,
          lineHeight: 1.7,
          margin: '0 0 40px',
          maxWidth: '520px',
        }}>
          40 chapters. Evidence-based protocols for hormones, peptides, and GLP-1. 
          Built on PubMed research. Designed for men and women who refuse to operate below capacity.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href={GUMROAD_URL} style={{
            display: 'inline-block',
            background: colors.red,
            color: '#fff',
            fontFamily: spaceGrotesk.style.fontFamily,
            fontWeight: 700,
            fontSize: '16px',
            padding: '16px 36px',
            borderRadius: '8px',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'background 0.2s',
          }}>
            Get Founding Access — $79.90 →
          </a>
          <div style={{ fontFamily: spaceMono.style.fontFamily, fontSize: '12px', color: colors.textSecondary }}>
            <div>✓ Instant PDF delivery</div>
            <div>✓ 1-year price lock</div>
          </div>
        </div>
      </div>

      {/* RIGHT — Book mockup placeholder */}
      <div style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: '16px',
        padding: '48px 32px',
        textAlign: 'center',
        minHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
      }}>
        <h2 style={{
          fontFamily: spaceGrotesk.style.fontFamily,
          fontSize: '28px',
          fontWeight: 700,
          color: colors.blue,
          margin: 0,
          letterSpacing: '0.04em',
        }}>THE OPTIMIZATION BIBLE</h2>
        <p style={{ fontFamily: spaceMono.style.fontFamily, fontSize: '11px', color: colors.textSecondary, margin: 0, letterSpacing: '0.1em' }}>
          WEIGHTWISEHEALTH.COM
        </p>
        <div style={{ width: '80%', height: '3px', background: `linear-gradient(90deg, ${colors.blue}, ${colors.purple})`, borderRadius: '2px' }} />
        <div style={{ fontFamily: spaceMono.style.fontFamily, fontSize: '11px', color: colors.textSecondary, lineHeight: 2 }}>
          <div>40 Chapters</div>
          <div>4 Appendices</div>
          <div>Evidence-Based Protocols</div>
          <div>Men & Women</div>
        </div>
        {/* Image slot — substituir por mockup Manus */}
        <div style={{
          width: '100%',
          background: 'rgba(0,212,255,0.04)',
          border: `1px dashed ${colors.border}`,
          borderRadius: '8px',
          padding: '24px',
          fontFamily: spaceMono.style.fontFamily,
          fontSize: '11px',
          color: colors.textSecondary,
        }}>
          [ Book cover — Manus mockup ]
        </div>
      </div>
    </section>
  )
}

// ─── TRANSITION ─────────────────────────────────────────────────────
function TransitionSection() {
  return (
    <section style={{
      padding: '60px 24px',
      maxWidth: '760px',
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: spaceGrotesk.style.fontFamily,
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: 700,
        color: colors.textPrimary,
        margin: '0 0 20px',
      }}>
        You Are Flying Blind.
      </h2>
      <p style={{
        fontFamily: inter.style.fontFamily,
        fontSize: '18px',
        color: colors.textSecondary,
        lineHeight: 1.7,
        margin: 0,
      }}>
        Most people optimizing their hormones are doing it without a real system. 
        They have fragments — a Reddit post, a clinic visit, a YouTube protocol. 
        None of it is designed around their biology. That ends here.
      </p>
    </section>
  )
}

// ─── PAIN SECTION ──────────────────────────────────────────────────
function PainSection() {
  const pains = [
    {
      title: 'Your GP Was Trained to Treat Disease. Not Optimize You.',
      body: `General practitioners work with population-based reference ranges. A testosterone of 280 ng/dL is "within normal limits" by those standards. It is not, by any functional definition, optimal. Your doctor isn't wrong — they're using the wrong framework for the wrong question. They were never trained to ask: "Is this person performing at full capacity?" They were trained to ask: "Is this person sick?" Those are not the same question.`,
    },
    {
      title: 'Reddit Has 47 Opinions on Your Protocol. None of Them Are Yours.',
      body: `Online communities democratized access to information about TRT, peptides, and GLP-1. That's genuinely valuable. But the signal-to-noise ratio is catastrophic. For every accurate, personalized insight, there are dozens of anecdotes masquerading as data — dosing advice from people whose bloodwork, body weight, receptor sensitivity, and goals are completely different from yours. Copying someone else's protocol is the most expensive mistake in hormone optimization.`,
    },
    {
      title: 'The TRT Clinic Manages Your Protocol. It Doesn\'t Teach You to Own It.',
      body: `TRT clinics serve a real purpose. But their business model depends on monthly visits, not on you becoming self-sufficient. The result? Most patients on TRT for years still can't explain what their SHBG does, why their estradiol matters, or what their hematocrit means for their cardiovascular risk. They know their dose. They don't know their biology. We believe you should own both.`,
    },
  ]

  return (
    <section style={{
      padding: '60px 24px',
      maxWidth: '860px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
    }}>
      {pains.map((p, i) => (
        <div key={i} style={{
          background: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: '12px',
          padding: '36px',
          display: 'flex',
          gap: '24px',
        }}>
          <span style={{ fontSize: '24px', color: colors.red, flexShrink: 0 }}>✕</span>
          <div>
            <h3 style={{
              fontFamily: spaceGrotesk.style.fontFamily,
              fontSize: '20px',
              fontWeight: 700,
              color: colors.textPrimary,
              margin: '0 0 12px',
            }}>{p.title}</h3>
            <p style={{
              fontFamily: inter.style.fontFamily,
              fontSize: '16px',
              color: colors.textSecondary,
              lineHeight: 1.7,
              margin: 0,
            }}>{p.body}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

// ─── VSL SECTION ───────────────────────────────────────────────────
function VSLSection() {
  return (
    <section style={{
      padding: '60px 24px',
      maxWidth: '860px',
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: spaceGrotesk.style.fontFamily,
        fontSize: 'clamp(24px, 3vw, 36px)',
        fontWeight: 700,
        color: colors.textPrimary,
        margin: '0 0 32px',
      }}>
        See What We Built
      </h2>
      <div style={{
        borderRadius: '16px',
        overflow: 'hidden',
        aspectRatio: '16/9',
        background: colors.surface,
        border: `1px solid ${colors.border}`,
      }}>
        <video
          src="/videos/vsl.mp4"
          controls
          playsInline
          style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}

// ─── WHAT YOU GET ──────────────────────────────────────────────────
function WhatYouGet() {
  const chapters = [
    'The Optimization Framework — why reference ranges fail you',
    'Testosterone Cypionate — dosing, timing, bloodwork targets',
    'Estradiol Management — the aromatase equation',
    'SHBG: The Binding Variable Nobody Explains',
    'hCG and Fertility Preservation on TRT',
    'Peptide Hierarchy — GH secretagogues ranked by evidence',
    'Semaglutide & GLP-1 — the metabolic reset protocol',
    'BPC-157 — tissue repair and gut health applications',
    'Thyroid Optimization — T3, T4, and conversion failures',
    'Cortisol Management — the protocol killer',
    'Female Hormone Optimization — HRT, testosterone, peptides',
    'Bloodwork Mastery — reading your own labs like a clinician',
    'The Injection Protocol — technique, rotation, safety',
    'Cardiovascular Risk Management on TRT',
    'Sleep Architecture and Hormonal Recovery',
    'Nutrition Frameworks for Hormonal Health',
    'Supplementation Stack — evidence-only',
    'PCT — if you ever need to come off',
    'Peptide Stacking — combinations that work',
    'The Diagnostic Loop — test, adjust, retest',
    'Building Your Protocol from Scratch',
    'The Long Game — 10-year optimization roadmap',
  ]

  return (
    <section style={{
      padding: '80px 24px',
      maxWidth: '1000px',
      margin: '0 auto',
    }}>
      <h2 style={{
        fontFamily: spaceGrotesk.style.fontFamily,
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: 700,
        color: colors.textPrimary,
        margin: '0 0 12px',
        textAlign: 'center',
      }}>40 Chapters. Zero Fluff.</h2>
      <p style={{
        fontFamily: inter.style.fontFamily,
        fontSize: '16px',
        color: colors.textSecondary,
        textAlign: 'center',
        margin: '0 0 48px',
      }}>
        Every chapter is built on peer-reviewed research. Every protocol is designed to be implemented — not just read.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '12px',
      }}>
        {chapters.map((c, i) => (
          <div key={i} style={{
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: '8px',
            padding: '16px 20px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
          }}>
            <span style={{ fontFamily: spaceMono.style.fontFamily, fontSize: '11px', color: colors.blue, flexShrink: 0, paddingTop: '2px' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: colors.textSecondary, lineHeight: 1.5 }}>
              {c}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── PRICING ───────────────────────────────────────────────────────
function Pricing() {
  return (
    <section style={{
      padding: '80px 24px',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: spaceGrotesk.style.fontFamily,
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: 700,
        color: colors.textPrimary,
        margin: '0 0 48px',
      }}>Founding Access</h2>

      <div style={{
        background: colors.surface,
        border: `2px solid ${colors.blue}`,
        borderRadius: '16px',
        padding: '48px 36px',
      }}>
        <div style={{ fontFamily: spaceMono.style.fontFamily, fontSize: '12px', color: colors.blue, letterSpacing: '0.1em', marginBottom: '16px' }}>
          FIRST 100 ONLY
        </div>
        <div style={{
          fontFamily: spaceGrotesk.style.fontFamily,
          fontSize: '64px',
          fontWeight: 700,
          color: colors.textPrimary,
          lineHeight: 1,
          margin: '0 0 8px',
        }}>$79.90</div>
        <div style={{ fontFamily: inter.style.fontFamily, fontSize: '14px', color: colors.textSecondary, marginBottom: '32px' }}>
          Locked for 1 year. Renewal at 70% after that.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px', textAlign: 'left' }}>
          {[
            'The Optimization Bible — 40 chapters + 4 appendices',
            'Instant PDF delivery',
            'All future updates included',
            '1-year founding price guarantee',
            'Access to founding member community',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: colors.green, flexShrink: 0 }}>✓</span>
              <span style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', color: colors.textSecondary }}>{item}</span>
            </div>
          ))}
        </div>

        <a href={GUMROAD_URL} style={{
          display: 'block',
          background: colors.red,
          color: '#fff',
          fontFamily: spaceGrotesk.style.fontFamily,
          fontWeight: 700,
          fontSize: '18px',
          padding: '18px 36px',
          borderRadius: '8px',
          textDecoration: 'none',
          letterSpacing: '0.02em',
        }}>
          Get Founding Access — $79.90 →
        </a>

        <p style={{ fontFamily: spaceMono.style.fontFamily, fontSize: '11px', color: colors.textSecondary, marginTop: '16px' }}>
          Secure checkout via Gumroad · Instant delivery
        </p>
      </div>
    </section>
  )
}

// ─── FAQ ───────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const faqs = [
    {
      q: 'Is this for men or women?',
      a: 'Both. Every chapter addresses male and female physiology where relevant. Hormone optimization is not a gendered discipline.',
    },
    {
      q: 'Is this medical advice?',
      a: 'No. This is education — evidence-based, PubMed-sourced, designed to make you an informed participant in your own healthcare. Always work with a licensed clinician.',
    },
    {
      q: 'What does the 1-year price lock mean?',
      a: 'You pay $79.90 today. For the next 12 months, your price stays at $79.90. After that, renewal is offered at 70% of whatever the current price is.',
    },
    {
      q: 'What format is the Bible?',
      a: 'PDF — instant delivery after purchase. Compatible with any device.',
    },
    {
      q: 'What if I already see a TRT clinic?',
      a: 'This makes you a better patient. You will understand your labs, ask better questions, and stop guessing whether your protocol is actually working.',
    },
  ]

  return (
    <section style={{
      padding: '80px 24px',
      maxWidth: '760px',
      margin: '0 auto',
    }}>
      <h2 style={{
        fontFamily: spaceGrotesk.style.fontFamily,
        fontSize: 'clamp(24px, 3vw, 36px)',
        fontWeight: 700,
        color: colors.textPrimary,
        margin: '0 0 40px',
        textAlign: 'center',
      }}>Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{
            background: colors.surface,
            border: `1px solid ${open === i ? colors.blue : colors.border}`,
            borderRadius: '10px',
            overflow: 'hidden',
            cursor: 'pointer',
          }} onClick={() => setOpen(open === i ? null : i)}>
            <div style={{
              padding: '20px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontFamily: spaceGrotesk.style.fontFamily, fontSize: '16px', fontWeight: 600, color: colors.textPrimary }}>
                {f.q}
              </span>
              <span style={{ color: colors.blue, fontSize: '20px', flexShrink: 0 }}>{open === i ? '−' : '+'}</span>
            </div>
            {open === i && (
              <div style={{ padding: '0 24px 20px' }}>
                <p style={{ fontFamily: inter.style.fontFamily, fontSize: '15px', color: colors.textSecondary, lineHeight: 1.7, margin: 0 }}>
                  {f.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── FOOTER CTA ────────────────────────────────────────────────────
function FooterCTA() {
  return (
    <section style={{
      padding: '80px 24px',
      textAlign: 'center',
      borderTop: `1px solid ${colors.border}`,
    }}>
      <h2 style={{
        fontFamily: spaceGrotesk.style.fontFamily,
        fontSize: 'clamp(28px, 4vw, 48px)',
        fontWeight: 700,
        color: colors.textPrimary,
        margin: '0 0 20px',
      }}>
        Stop guessing.<br />Start optimizing.
      </h2>
      <p style={{
        fontFamily: inter.style.fontFamily,
        fontSize: '18px',
        color: colors.textSecondary,
        margin: '0 0 40px',
      }}>
        100 founding spots. One price. One year locked.
      </p>
      <a href={GUMROAD_URL} style={{
        display: 'inline-block',
        background: colors.red,
        color: '#fff',
        fontFamily: spaceGrotesk.style.fontFamily,
        fontWeight: 700,
        fontSize: '18px',
        padding: '20px 48px',
        borderRadius: '8px',
        textDecoration: 'none',
        letterSpacing: '0.02em',
      }}>
        Get Founding Access — $79.90 →
      </a>
      <p style={{ fontFamily: spaceMono.style.fontFamily, fontSize: '11px', color: colors.textSecondary, marginTop: '20px' }}>
        weightwisehealth.com · Evidence-based human optimization
      </p>
    </section>
  )
}

// ─── PAGE ──────────────────────────────────────────────────────────
export default function BiblePage() {
  return (
    <div style={{
      background: colors.bg,
      minHeight: '100vh',
      color: colors.textPrimary,
      fontFamily: inter.style.fontFamily,
    }} className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}>
      <AnnouncementBar />
      <div style={{ paddingTop: '40px' }}>
        <CredibilityBar />
        <Hero />
        <TransitionSection />
        <PainSection />
        <VSLSection />
        <WhatYouGet />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </div>
    </div>
  )
}
