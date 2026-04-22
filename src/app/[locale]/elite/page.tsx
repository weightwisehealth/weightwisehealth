'use client'

import { useState, useEffect, useRef } from 'react'
import { Space_Grotesk, Inter, Space_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-headline' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-body' })
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400','700'], variable: '--font-mono' })

const GUMROAD_URL = '#' // TODO: substituir pela URL real do Gumroad

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
      background: `linear-gradient(90deg, ${colors.red}, #FF8C00)`,
      padding: '10px 20px',
      textAlign: 'center',
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      height: 44,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <p style={{ fontFamily: 'var(--font-headline)', fontSize: 13, fontWeight: 500, color: '#fff', margin: 0, letterSpacing: '0.01em' }}>
        ⚡ FOUNDING MEMBER PRICE: Only <strong>{spots}</strong> of 500 Inner Circle spots remaining — Locks in at $49.90 forever
      </p>
    </div>
  )
}

// ─── STICKY HEADER ─────────────────────────────────────────────────
function StickyHeader() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <div style={{
      position: 'fixed', top: 44, left: 0, right: 0, zIndex: 99,
      background: 'rgba(10,10,15,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${colors.border}`,
      padding: '12px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 16, color: colors.textPrimary }}>
        WeightWise<span style={{ color: colors.blue }}>Health</span>
      </span>
      <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer" style={{
        background: colors.red, color: '#fff',
        fontFamily: 'var(--font-headline)', fontWeight: 600, fontSize: 13,
        padding: '8px 18px', borderRadius: 6, textDecoration: 'none',
        letterSpacing: '0.02em',
      }}>
        Get Access — $49.90
      </a>
    </div>
  )
}

// ─── HERO ──────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section style={{
      background: `radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 65%), ${colors.bg}`,
      padding: '120px 24px 80px', // 120px top = 44px bar + 76px breathing room
      marginTop: 44, // push below fixed announcement bar
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        alignItems: 'center',
      }}
        className="hero-grid"
      >
        {/* LEFT — Copy */}
        <div>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            border: `1px solid ${colors.blue}`,
            borderRadius: 20, padding: '6px 16px', marginBottom: 28,
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: colors.blue, letterSpacing: '0.15em' }}>
              EVIDENCE-BASED · SCIENTIFICALLY REFERENCED · NOT MEDICAL ADVICE
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontFamily: 'var(--font-headline)', fontWeight: 700,
            fontSize: 'clamp(2.2rem, 4vw, 4.5rem)',
            lineHeight: 1.08, letterSpacing: '-0.03em',
            color: colors.textPrimary, margin: '0 0 20px',
          }}>
            Your Doctor Said <em style={{ color: colors.blue, fontStyle: 'italic' }}>"Normal."</em><br />
            Your Body Is Saying Otherwise.
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: colors.textSecondary, margin: '0 0 24px',
            lineHeight: 1.6, maxWidth: 520,
          }}>
            The complete education system for testosterone, peptides, GLP-1 and bloodwork —
            built for people who refuse to accept mediocre biology.
          </p>

          {/* Social proof */}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: colors.textSecondary, marginBottom: 32 }}>
            <span style={{ color: colors.blue }}>★★★★★</span>&nbsp; Trusted by 2,400+ biohackers across 40+ countries
          </p>

          {/* CTA */}
          <CTAButton />

          {/* Micro copy */}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: colors.textSecondary, marginTop: 14 }}>
            🔒 256-bit Secure Checkout · 30-Day Money-Back Guarantee · Instant Digital Delivery
          </p>
        </div>

        {/* RIGHT — Visual */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: '100%', maxWidth: 420,
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: 16, padding: '48px 32px',
            textAlign: 'center',
            boxShadow: `0 0 60px rgba(0,212,255,0.08)`,
          }}>
            <div style={{
              fontFamily: 'var(--font-headline)', fontWeight: 700,
              fontSize: 22, color: colors.blue, marginBottom: 8,
              letterSpacing: '-0.02em',
            }}>
              THE OPTIMIZATION BIBLE
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: colors.textSecondary, marginBottom: 32,
              letterSpacing: '0.1em',
            }}>
              WEIGHTWISEHEALTH.COM
            </div>
            {/* Decorative lines simulating content */}
            {[80, 60, 90, 50, 70].map((w, i) => (
              <div key={i} style={{
                height: 6, borderRadius: 3, marginBottom: 10,
                background: i === 0 ? `linear-gradient(90deg, ${colors.blue}, ${colors.purple})` : colors.surface2,
                width: `${w}%`, margin: '0 auto 10px',
              }} />
            ))}
            <div style={{
              marginTop: 24, padding: '12px',
              background: `rgba(0,212,255,0.06)`,
              borderRadius: 8, border: `1px solid ${colors.border}`,
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: colors.textSecondary,
            }}>
              [ Substituir por mockup real — Midjourney Prompt 01 ]
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA BUTTON ────────────────────────────────────────────────────
function CTAButton({ label = 'GET INSTANT ACCESS — $49.90 →', large = true }: { label?: string; large?: boolean }) {
  return (
    <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer" style={{
      display: 'inline-block',
      background: `linear-gradient(135deg, ${colors.red}, #FF8C00)`,
      color: '#fff',
      fontFamily: 'var(--font-headline)', fontWeight: 700,
      fontSize: large ? 18 : 16,
      padding: large ? '20px 48px' : '16px 36px',
      borderRadius: 8, textDecoration: 'none',
      boxShadow: '0 8px 40px rgba(255,77,0,0.35)',
      letterSpacing: '0.02em',
      transition: 'all 0.2s ease',
    }}>
      {label}
    </a>
  )
}

// ─── CREDIBILITY BAR ───────────────────────────────────────────────
function CredibilityBar() {
  const refs = ['PubMed', 'Endocrine Society', 'Journal of Clinical Endocrinology & Metabolism', 'ISSM', 'New England Journal of Medicine']
  return (
    <section style={{ background: '#111118', borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}`, padding: '28px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: colors.textSecondary, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
          Scientific references used in this guide:
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', alignItems: 'center' }}>
          {refs.map(r => (
            <span key={r} style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: '#444466', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{r}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PAIN SECTION ──────────────────────────────────────────────────
function PainSection() {
  const pains = [
    {
      title: 'Your GP Was Trained to Treat Disease. Not Optimize You.',
      desc: 'General practitioners work with population-based reference ranges. A testosterone of 280 ng/dL is "within normal limits" by those standards. It is not, by any functional definition, optimal. Your doctor isn\'t wrong — they\'re using the wrong framework for the wrong question. They were never trained to ask: "Is this person performing at full capacity?" They were trained to ask: "Is this person sick?" Those are not the same question.',
    },
    {
      title: 'Reddit Has 47 Opinions on Your Protocol. None of Them Are Yours.',
      desc: 'Online communities democratized access to information about TRT, peptides, and GLP-1. That\'s genuinely valuable. But the signal-to-noise ratio is catastrophic. For every accurate, personalized insight, there are dozens of anecdotes masquerading as data — dosing advice from people whose bloodwork, body weight, receptor sensitivity, and goals are completely different from yours. Copying someone else\'s protocol is the most expensive mistake in hormone optimization.',
    },
    {
      title: 'The TRT Clinic Manages Your Protocol. It Doesn\'t Teach You to Own It.',
      desc: 'TRT clinics serve a real purpose. But their business model depends on monthly visits, not on you becoming self-sufficient. The result? Most patients on TRT for years still can\'t explain what their SHBG does, why their estradiol matters, or what their hematocrit means for their cardiovascular risk. They know their dose. They don\'t know their biology. We believe you should own both.',
    },
  ]
  return (
    <section style={{ background: colors.bg, padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-headline)', fontWeight: 700,
          fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
          color: colors.textPrimary, textAlign: 'center',
          marginBottom: 16, lineHeight: 1.15,
        }}>
          Why 90% of People Using Hormones<br />and Peptides Are Flying Blind
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: colors.textSecondary, textAlign: 'center', maxWidth: 680, margin: '0 auto 48px', lineHeight: 1.6 }}>
          The information exists. The compounds exist. The clinics exist.<br />
          So why do most people still feel like they're guessing?<br />
          Because the system wasn't built to educate you. It was built to keep you coming back.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {pains.map((p, i) => (
            <div key={i} style={{
              background: '#111118', borderRadius: 12,
              border: `1px solid ${colors.surface}`, padding: '32px',
            }}>
              <div style={{ fontSize: 32, color: '#FF4444', marginBottom: 16 }}>✕</div>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 600, fontSize: 18, color: colors.textPrimary, marginBottom: 14, lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: colors.textSecondary, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TRANSITION SECTION ────────────────────────────────────────────
function TransitionSection() {
  return (
    <section style={{ background: '#111118', padding: '60px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-headline)', fontWeight: 600,
          fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
          color: colors.textPrimary, lineHeight: 1.5, marginBottom: 24,
        }}>
          There's a better way. It doesn't require a medical degree.<br />
          It doesn't require a $500/hour longevity clinic.<br />
          It requires one thing: the right framework for reading your own data.
        </p>
        <div style={{
          width: 80, height: 2, margin: '0 auto',
          background: `linear-gradient(90deg, ${colors.blue}, ${colors.purple})`,
          borderRadius: 2,
        }} />
      </div>
    </section>
  )
}

// ─── VSL SECTION ───────────────────────────────────────────────────
function VSLSection() {
  return (
    <section style={{ background: colors.bg, padding: '80px 24px', borderTop: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: colors.textPrimary, marginBottom: 12 }}>
          Watch: The System That Changes How You Understand Your Biology
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: colors.textSecondary, marginBottom: 32 }}>
          12 minutes. Watch it once. You'll never read a lab result the same way.
        </p>

        {/* Video placeholder */}
        <div style={{
          background: colors.surface,
          border: `1px solid ${colors.blue}`,
          boxShadow: `0 0 40px rgba(0,212,255,0.15)`,
          borderRadius: 12,
          aspectRatio: '16/9',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: 16,
          marginBottom: 40, position: 'relative',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: colors.textSecondary, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            WeightWiseHealth.com Presents
          </div>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: colors.red, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, boxShadow: '0 4px 24px rgba(255,77,0,0.4)' }}>▶</div>
          <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 600, fontSize: 18, color: colors.textPrimary }}>
            The Optimization Bible — Introduction
          </p>
          <div style={{ position: 'absolute', bottom: 16, right: 20, fontFamily: 'var(--font-mono)', fontSize: 13, color: colors.textSecondary }}>12:47</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: colors.textSecondary, opacity: 0.5 }}>
            [ Substituir por embed Wistia/Vimeo ]
          </p>
        </div>

        <CTAButton label="YES — I'M READY TO OPTIMIZE. GET ACCESS NOW →" />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: colors.textSecondary, marginTop: 12 }}>
          $49.90 one-time · No subscription · Instant access · 30-day guarantee
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: colors.red, marginTop: 8, fontWeight: 500 }}>
          ⚡ Founding member price locks in today. Price increases with each new module added.
        </p>
      </div>
    </section>
  )
}

// ─── VALUE STACK ───────────────────────────────────────────────────
function ValueStackSection() {
  const items = [
    { name: 'Hormone Foundation Guide', desc: 'Testosterone, Estradiol, DHEA, Cortisol — complete protocols', value: '$97' },
    { name: 'Peptide Protocol Library', desc: '30+ compounds with dosing, timing & reconstitution guides', value: '$127' },
    { name: 'GLP-1 Complete Guide', desc: 'Semaglutide, Tirzepatide, Retatrutide — science-based protocols', value: '$67' },
    { name: 'Bloodwork Decoded Framework', desc: '14 critical biomarkers with optimal vs reference ranges', value: '$97' },
    { name: 'Precision Calculators', desc: 'Half-life, dosage, reconstitution — built for accuracy', value: '$87' },
    { name: 'Female Optimization Section', desc: 'TRT for women, perimenopause, hormone balance protocols', value: '$67' },
    { name: 'Emerging Compounds Watch List', desc: 'Q1 2026 update — new peptides, clinical trials, alerts', value: '$37' },
  ]
  return (
    <section style={{ background: colors.bg, padding: '80px 24px', borderTop: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 768, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-headline)', fontWeight: 700,
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          color: colors.textPrimary, textAlign: 'center', marginBottom: 8,
        }}>
          Everything Inside The Optimization Bible
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: colors.textSecondary, textAlign: 'center', marginBottom: 40 }}>
          22 chapters + 4 appendices. Evidence-based. PubMed-referenced.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {items.map((item, i) => (
            <div key={i} style={{
              background: colors.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: i === 0 ? '10px 10px 0 0' : i === items.length - 1 ? '0 0 10px 10px' : 0,
              padding: '16px 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, flex: 1 }}>
                <span style={{ color: colors.green, fontSize: 18, flexShrink: 0 }}>✓</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 600, fontSize: 15, color: colors.textPrimary }}>{item.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: colors.textSecondary, marginTop: 2 }}>{item.desc}</div>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: colors.textSecondary, flexShrink: 0 }}>
                <span style={{ textDecoration: 'line-through' }}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div style={{
          background: colors.surface2, border: `1px solid ${colors.blue}`,
          borderRadius: 10, padding: '20px 24px', marginTop: 12,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: colors.textSecondary }}>Total Value</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, color: colors.textSecondary, textDecoration: 'line-through' }}>$579</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: colors.blue }}>Your Price Today</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 36, fontWeight: 700, color: colors.textPrimary }}>$49.90</div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <CTAButton label="CLAIM YOUR COPY — $49.90 →" />
        </div>
      </div>
    </section>
  )
}

// ─── UPSELL TEASER ─────────────────────────────────────────────────
function UpsellTeaser() {
  return (
    <section style={{ padding: '48px 24px', background: colors.bg }}>
      <div style={{ maxWidth: 768, margin: '0 auto' }}>
        <div style={{
          background: colors.surface,
          border: `1px solid ${colors.purple}`,
          borderRadius: 12, padding: '28px 28px',
          boxShadow: `0 0 40px rgba(123,47,190,0.1)`,
        }}>
          <div style={{
            display: 'inline-block',
            background: colors.purple, borderRadius: 4,
            padding: '4px 12px', marginBottom: 16,
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: '#fff', letterSpacing: '0.1em',
          }}>
            MOST POPULAR — UPGRADE AVAILABLE AFTER CHECKOUT
          </div>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 22, color: colors.textPrimary, marginBottom: 8 }}>
            Want to go deeper? Add The Elite Blood Protocol.
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: colors.textSecondary, margin: 0 }}>
            Your bloodwork. Your compounds. Your exact optimization map. — Offered once, immediately after your purchase.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ──────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    { text: "I've been on TRT for 2 years. Chapter 14 alone explained things my clinic never told me. Finally understand why my SHBG was tanking my free T.", name: 'Marcus T.', location: 'Austin, TX' },
    { text: "The female section is everything I couldn't find anywhere else. Clear, referenced, written by people who actually understand female hormones.", name: 'Jennifer K.', location: 'Denver, CO' },
    { text: "Started semaglutide 3 months ago. The GLP-1 guide prevented every mistake my doctor didn't warn me about. Worth 10x the price.", name: 'David R.', location: 'Miami, FL' },
  ]
  return (
    <section style={{ background: colors.surface, padding: '80px 24px', borderTop: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 768, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: colors.textPrimary, textAlign: 'center', marginBottom: 40 }}>
          What Biohackers Are Saying
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: colors.bg, border: `1px solid ${colors.border}`,
              borderRadius: 10, padding: '24px',
            }}>
              <div style={{ color: colors.blue, fontSize: 16, marginBottom: 12 }}>★★★★★</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: colors.textSecondary, lineHeight: 1.65, marginBottom: 16 }}>"{t.text}"</p>
              <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 600, fontSize: 14, color: colors.textPrimary }}>{t.name}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: colors.textSecondary }}>{t.location}</div>
              <div style={{
                display: 'inline-block', marginTop: 8,
                background: 'rgba(0,255,136,0.1)', border: `1px solid rgba(0,255,136,0.3)`,
                borderRadius: 4, padding: '2px 8px',
                fontFamily: 'var(--font-mono)', fontSize: 10, color: colors.green,
              }}>Verified Buyer</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── GUARANTEE ─────────────────────────────────────────────────────
function GuaranteeSection() {
  return (
    <section style={{ background: colors.bg, padding: '80px 24px', borderTop: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>🛡️</div>
        <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'clamp(1.6rem, 4vw, 2rem)', color: colors.textPrimary, marginBottom: 16 }}>
          The 30-Day Money-Back Guarantee
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: colors.textSecondary, lineHeight: 1.7 }}>
          Apply it. If after 30 days you can't read your own bloodwork better than before — full refund.
          No questions. No forms. Just email <span style={{ color: colors.blue }}>contact@weightwisehealth.com</span>.
        </p>
      </div>
    </section>
  )
}

// ─── FAQ ───────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)
  const faqs = [
    { q: 'Is this medical advice?', a: 'No. This is education. Everything in The Optimization Bible is written to help you understand your biology — not to diagnose, treat or replace medical care. Always consult a qualified healthcare provider before starting any protocol.' },
    { q: 'Who is this for?', a: 'Anyone using or seriously researching testosterone, peptides, GLP-1 compounds or bloodwork optimization — men and women, 32–54+. If you\'ve ever left a doctor\'s appointment more confused than when you arrived, this is for you.' },
    { q: 'Is the information up to date?', a: 'Yes. The Bible includes an Emerging Compounds Watch List updated quarterly. New compounds, new studies, new protocols — you get updates as the market moves.' },
    { q: 'What format do I get?', a: 'Instant digital download (PDF). Readable on any device — phone, tablet, computer. Delivered to your email within 2 minutes of purchase.' },
    { q: 'Do you cover female hormones?', a: 'Yes — a full dedicated section. TRT for women, perimenopause, female bloodwork panels, hormone balance protocols. Not an afterthought — a complete section.' },
    { q: 'What if I want a refund?', a: 'Email contact@weightwisehealth.com within 30 days. No forms, no questions, no friction. Full refund.' },
  ]
  return (
    <section style={{ background: colors.surface, padding: '80px 24px', borderTop: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 768, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: colors.textPrimary, textAlign: 'center', marginBottom: 40 }}>
          Questions We Get Every Day
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: colors.bg,
              border: `1px solid ${open === i ? colors.blue : colors.border}`,
              borderRadius: 8, overflow: 'hidden',
              transition: 'border-color 0.2s',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', padding: '18px 20px',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  textAlign: 'left',
                }}>
                <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 600, fontSize: 16, color: colors.textPrimary }}>{faq.q}</span>
                <span style={{ color: colors.blue, fontSize: 20, flexShrink: 0, marginLeft: 16 }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 20px 18px', fontFamily: 'var(--font-body)', fontSize: 15, color: colors.textSecondary, lineHeight: 1.65 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FINAL CTA ─────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section style={{
      background: `radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.06) 0%, transparent 60%), ${colors.bg}`,
      padding: '100px 24px', textAlign: 'center',
      borderTop: `1px solid ${colors.border}`,
    }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-headline)', fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          color: colors.textPrimary, lineHeight: 1.15, marginBottom: 16,
        }}>
          The 1% Don't Guess.<br />They Optimize.
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: colors.textSecondary, marginBottom: 36 }}>
          Join 2,400+ biohackers who made the switch from guessing to knowing.
        </p>
        <CTAButton />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: colors.textSecondary, marginTop: 16 }}>
          This price increases as new modules are added.
        </p>
      </div>
    </section>
  )
}

// ─── FOOTER ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: colors.surface,
      borderTop: `1px solid ${colors.border}`,
      padding: '40px 24px', textAlign: 'center',
    }}>
      <div style={{ maxWidth: 768, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 18, color: colors.textPrimary, marginBottom: 16 }}>
          WeightWise<span style={{ color: colors.blue }}>Health</span>
        </p>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
          {['Privacy Policy', 'Terms of Use', 'Contact'].map(link => (
            <a key={link} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: colors.textSecondary, textDecoration: 'none' }}>{link}</a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: colors.textSecondary, lineHeight: 1.6, maxWidth: 580, margin: '0 auto 12px' }}>
          WeightWise Health provides educational content only. Nothing on this site constitutes medical advice, diagnosis, or treatment.
          Always consult a qualified healthcare provider before starting any protocol.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: colors.textSecondary, opacity: 0.5 }}>
          © 2026 WeightWise Health. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// ─── MOBILE CTA BAR ────────────────────────────────────────────────
function MobileCTABar() {
  const [visible, setVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = document.getElementById('final-cta')
    if (!target) return
    const obs = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting), { threshold: 0.1 })
    obs.observe(target)
    return () => obs.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: 'rgba(10,10,15,0.97)',
      backdropFilter: 'blur(12px)',
      borderTop: `1px solid ${colors.border}`,
      padding: '12px 16px',
      zIndex: 90,
      display: 'block',
    }}
      className="md:hidden"
    >
      <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer" style={{
        display: 'block', width: '100%',
        background: `linear-gradient(135deg, ${colors.red}, #FF8C00)`,
        color: '#fff', textAlign: 'center',
        fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 16,
        padding: '16px', borderRadius: 8, textDecoration: 'none',
        boxShadow: '0 4px 24px rgba(255,77,0,0.35)',
      }}>
        GET INSTANT ACCESS — $49.90
      </a>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: colors.textSecondary, textAlign: 'center', margin: '6px 0 0' }}>
        🔒 30-Day Money-Back Guarantee
      </p>
    </div>
  )
}

// ─── PAGE ──────────────────────────────────────────────────────────
export default function ElitePage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
      style={{ background: colors.bg, color: colors.textPrimary, minHeight: '100vh' }}
    >
      <AnnouncementBar />
      <StickyHeader />
      <HeroSection />
      <CredibilityBar />
      <PainSection />
      <TransitionSection />
      <VSLSection />
      <ValueStackSection />
      <UpsellTeaser />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <div id="final-cta">
        <FinalCTASection />
      </div>
      <Footer />
      <MobileCTABar />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${colors.bg}; padding-top: 0; }
        .hero-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none; }
        }
        @media (max-width: 640px) {
          .credibility-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .md\\:hidden { display: none; }
        @media (max-width: 768px) {
          .md\\:hidden { display: block; }
        }
      `}</style>
    </div>
  )
}
