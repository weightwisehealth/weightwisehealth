'use client'

import { useState, useRef } from 'react'

// ─── CONFIG ──────────────────────────────────────────────────
const GUMROAD_URL = '#'
const FOUNDING_PRICE = '$79.90'
const REGULAR_PRICE = '$129.90'
const BUYERS_SO_FAR = 0
const SPOTS_LEFT = 100 - BUYERS_SO_FAR

// ─── DESIGN TOKENS ───────────────────────────────────────────
const C = {
  bg: '#0A0A0F',
  surface: '#1A1A2E',
  surfaceAlt: '#12121E',
  border: 'rgba(0,212,255,0.12)',
  blue: '#00D4FF',
  green: '#00FF88',
  purple: '#7B2FBE',
  red: '#FF4D00',
  text: '#F0F0F5',
  muted: '#8888AA',
} as const

const font = {
  headline: '"Space Grotesk", sans-serif',
  body: '"Inter", sans-serif',
  mono: '"Space Mono", monospace',
} as const

// ─── SYMPTOM + EXAM DATA ──────────────────────────────────────

const SYMPTOMS = [
  { id: 'fatigue', color: '#FF4D00', label: 'Constant fatigue', sub: 'even after sleeping well' },
  { id: 'stress',  color: '#FF8C00', label: 'Wake up already stressed', sub: 'for no clear reason' },
  { id: 'libido',  color: '#FFD700', label: 'Low or absent libido', sub: '' },
  { id: 'fat',     color: '#00FF88', label: "Can't lose fat", sub: 'despite training consistently' },
  { id: 'muscle',  color: '#00D4FF', label: "Can't build muscle", sub: 'training hard but stalling' },
  { id: 'mood',    color: '#7B2FBE', label: 'Irritability & anxiety', sub: 'unstable mood' },
  { id: 'brain',   color: '#B0B0CC', label: 'Brain fog', sub: 'difficulty focusing' },
  { id: 'aging',   color: '#556677', label: 'Accelerated aging', sub: 'you feel it before you see it' },
]

type Exam = { name: string; detects: string }
const EXAM_MAP: Record<string, Exam[]> = {
  fatigue: [
    { name: 'TSH + Free T3 + Free T4', detects: 'Thyroid running below threshold — the most silently destructive cause of chronic fatigue, routinely missed' },
    { name: 'Ferritin', detects: '"Normal" iron panels hide functional deficiency — cells are starving for oxygen at values doctors consider fine' },
    { name: 'Vitamin D (25-OH)', detects: 'Direct impact on mitochondrial function — without adequate D3, energy production is structurally impaired' },
    { name: 'Cortisol (8am serum)', detects: 'HPA axis dysfunction — your energy system is depleted before the day even starts' },
  ],
  stress: [
    { name: 'Morning Cortisol (serum)', detects: 'Circadian stress rhythm — elevated on waking without cause signals compromised adrenal axis' },
    { name: 'DHEA-S', detects: "Cortisol's counterbalance — when DHEA drops, stress hormones dominate every downstream system" },
    { name: 'Fasting Glucose + Insulin (HOMA-IR)', detects: 'Insulin resistance chronically elevates cortisol — a self-reinforcing cycle most labs never test for' },
  ],
  libido: [
    { name: 'Total + Free Testosterone', detects: 'Absolute and bioavailable levels — the gap between them reveals where the real problem lives' },
    { name: 'SHBG (Sex Hormone Binding Globulin)', detects: '"Normal levels" can coexist with zero functional availability — SHBG sequesters testosterone silently' },
    { name: 'Estradiol (E2)', detects: 'E2/T imbalance in either direction suppresses libido — in men and women equally' },
    { name: 'Prolactin', detects: 'Elevated prolactin suppresses testosterone and dopamine — the most underdiagnosed cause of absent desire' },
  ],
  fat: [
    { name: 'Fasting Insulin + HOMA-IR', detects: 'Subclinical insulin resistance — the reason the diet stopped working despite the caloric math being right' },
    { name: 'TSH + Reverse T3', detects: 'Slow thyroid accumulates fat in a caloric deficit — Reverse T3 is the test most doctors skip' },
    { name: 'Leptin (fasting)', detects: 'Satiety hormone resistance means fullness signals never arrive — willpower is being asked to fix biology' },
    { name: 'Cortisol (24h or serum)', detects: 'Chronic cortisol redistributes fat to the abdomen independent of caloric intake' },
  ],
  muscle: [
    { name: 'Total + Free Testosterone', detects: 'Primary anabolic signal — without adequate levels, training stimulus cannot produce expected hypertrophy' },
    { name: 'IGF-1 (Insulin-like Growth Factor)', detects: 'GH proxy — low IGF-1 means impaired recovery, reduced protein synthesis, and stalled adaptation' },
    { name: 'Vitamin D + Magnesium (RBC)', detects: 'Rate-limiting cofactors for protein synthesis — deficiency here nullifies any training protocol' },
    { name: 'Albumin + Total Protein', detects: 'Capacity to use dietary protein — intake means nothing if utilization is impaired' },
  ],
  mood: [
    { name: 'Estradiol + Progesterone', detects: 'Hormonal imbalance is the #1 organic cause of irritability — vastly underdiagnosed in both men and women' },
    { name: 'Cortisol/DHEA-S Ratio', detects: 'This ratio predicts stress resilience better than either marker alone — never ordered by default' },
    { name: 'TSH + Free T3', detects: 'Subclinical hypothyroidism generates anxiety, depression, emotional instability at lab values called "normal"' },
    { name: 'Vitamin B12 + Folate', detects: 'Rate-limiting cofactors for serotonin and dopamine synthesis — without them, neurochemistry cannot function' },
  ],
  brain: [
    { name: 'TSH + Free T3', detects: 'Thyroid is the primary regulator of brain processing speed — subclinical dysfunction is permanent fog' },
    { name: 'Vitamin B12 + Homocysteine', detects: 'Elevated homocysteine is a neurological damage marker — detectable years before any visible symptoms appear' },
    { name: 'Vitamin D (25-OH)', detects: 'Vitamin D receptors in the hippocampus — deficiency directly impairs memory and cognitive processing' },
    { name: 'hsCRP (high-sensitivity CRP)', detects: 'Systemic neuro-inflammation — the slow fire that quietly extinguishes cognition over years' },
  ],
  aging: [
    { name: 'IGF-1 + DHEA-S', detects: 'Hormonal longevity markers — early decline accelerates aging across every tissue simultaneously' },
    { name: 'hsCRP + Homocysteine', detects: 'Silent systemic inflammation — the single strongest predictor of accelerated biological aging' },
    { name: 'Testosterone + Estradiol', detects: 'Sex hormone balance affects skin, muscle, bone, cognition, and longevity rate — all at once' },
    { name: 'Uric Acid + Fasting Glucose', detects: 'Metabolic aging markers — chronically elevated compresses healthspan regardless of lifestyle choices' },
  ],
}

function getExams(ids: string[]): Exam[] {
  const seen = new Set<string>()
  const result: Exam[] = []
  for (const id of ids) {
    for (const exam of EXAM_MAP[id] ?? []) {
      if (!seen.has(exam.name)) {
        seen.add(exam.name)
        result.push(exam)
      }
    }
  }
  return result
}

// ─── ANNOUNCEMENT BAR ─────────────────────────────────────────
function AnnouncementBar() {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: 'linear-gradient(90deg, #0A0A0F 0%, #1A1A2E 50%, #0A0A0F 100%)',
      borderBottom: '1px solid rgba(0,212,255,0.15)',
      padding: '10px 20px',
      textAlign: 'center',
      fontFamily: font.mono,
      fontSize: '11px',
      color: C.blue,
      letterSpacing: '0.08em',
    }}>
      ⬡ FOUNDING ACCESS:{' '}
      <strong style={{ color: C.green }}>{FOUNDING_PRICE}</strong>
      <span style={{ color: C.muted, margin: '0 10px' }}>·</span>
      Rises to {REGULAR_PRICE} after 100 members
      <span style={{ color: C.muted, margin: '0 10px' }}>·</span>
      <span style={{ color: C.text }}>{SPOTS_LEFT} spots left</span>
      {' '}⬡
    </div>
  )
}

// ─── HERO ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: '88vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 24px 80px',
      background: `
        radial-gradient(ellipse 60% 50% at 10% 50%, rgba(123,47,190,0.12) 0%, transparent 70%),
        radial-gradient(ellipse 50% 60% at 90% 50%, rgba(0,212,255,0.08) 0%, transparent 70%),
        ${C.bg}
      `,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.6,
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,420px)',
          gap: '80px',
          alignItems: 'center',
          flexWrap: 'wrap',
        } as React.CSSProperties}>

          {/* Left */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: '4px',
              padding: '6px 12px',
              marginBottom: '28px',
            }}>
              <span style={{
                fontFamily: font.mono,
                fontSize: '10px',
                color: C.blue,
                letterSpacing: '0.16em',
              }}>
                HUMAN OPTIMIZATION SYSTEM
              </span>
            </div>

            <h1 style={{
              fontFamily: font.headline,
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 700,
              color: C.text,
              margin: '0 0 20px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}>
              Your body is trying<br />
              to tell you something.{' '}
              <span style={{
                background: `linear-gradient(90deg, ${C.blue}, ${C.green})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Do you know how to listen?
              </span>
            </h1>

            <p style={{
              fontFamily: font.body,
              fontSize: '18px',
              color: C.muted,
              margin: '0 0 36px',
              lineHeight: 1.6,
              maxWidth: '480px',
            }}>
              For anyone who feels their body can deliver more than it's delivering right now.
              Any age. Any body.
            </p>

            <a
              href="#symptom-block"
              onClick={e => {
                e.preventDefault()
                document.getElementById('symptom-block')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: `linear-gradient(135deg, ${C.red}, #CC3D00)`,
                borderRadius: '8px',
                padding: '16px 32px',
                fontFamily: font.headline,
                fontSize: '16px',
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                boxShadow: `0 8px 32px rgba(255,77,0,0.35)`,
              }}
            >
              Discover what's happening →
            </a>
          </div>

          {/* Right — Book mockup */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              width: '280px',
              height: '380px',
              background: `linear-gradient(135deg, #1A1A2E 0%, #0D0D1A 100%)`,
              border: '1px solid rgba(0,212,255,0.25)',
              borderRadius: '8px',
              boxShadow: `
                0 0 60px rgba(0,212,255,0.15),
                0 0 120px rgba(123,47,190,0.1),
                inset 0 0 60px rgba(0,212,255,0.03)
              `,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${C.blue}, ${C.purple}, transparent)`,
              }} />
              <div style={{
                fontFamily: font.mono,
                fontSize: '9px',
                color: C.muted,
                letterSpacing: '0.2em',
                marginBottom: '16px',
              }}>
                WEIGHTWISEHEALTH.COM
              </div>
              <div style={{
                fontFamily: font.mono,
                fontSize: '9px',
                color: C.blue,
                letterSpacing: '0.14em',
                marginBottom: '32px',
              }}>
                FOUNDING ACCESS EDITION
              </div>
              <div style={{
                fontFamily: font.headline,
                fontSize: '22px',
                fontWeight: 700,
                color: C.text,
                textAlign: 'center',
                lineHeight: 1.2,
                marginBottom: '8px',
              }}>
                THE OPTIMIZATION BIBLE
              </div>
              <div style={{
                fontFamily: font.body,
                fontSize: '11px',
                color: C.muted,
                textAlign: 'center',
                marginBottom: '32px',
              }}>
                Hormones · Peptides · GLP-1 · Bloodwork
              </div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${C.blue}20, ${C.purple}10)`,
                border: `1px solid ${C.blue}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
              }}>
                🔬
              </div>
              <div style={{
                position: 'absolute',
                bottom: '16px',
                fontFamily: font.mono,
                fontSize: '10px',
                color: C.muted,
              }}>
                40 CHAPTERS · 7 LANGUAGES
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CREDIBILITY BAR ──────────────────────────────────────────
function CredibilityBar() {
  return (
    <div style={{
      borderTop: '1px solid rgba(0,212,255,0.08)',
      borderBottom: '1px solid rgba(0,212,255,0.08)',
      padding: '18px 24px',
      background: C.surfaceAlt,
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '20px 32px',
        justifyContent: 'center',
      }}>
        <span style={{ fontFamily: font.mono, fontSize: '9px', color: C.muted, letterSpacing: '0.16em' }}>
          REFERENCED IN
        </span>
        {['PubMed', 'Endocrine Society', 'NEJM', 'JCEM', 'ISSM'].map(n => (
          <span key={n} style={{
            fontFamily: font.headline,
            fontSize: '12px',
            fontWeight: 600,
            color: '#404060',
            letterSpacing: '0.06em',
          }}>
            {n}
          </span>
        ))}
        <span style={{ width: 1, height: 20, background: 'rgba(0,212,255,0.12)' }} />
        {[['40', 'Chapters'], ['7', 'Languages'], ['4×', 'Year updates']].map(([n, l]) => (
          <span key={n} style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontFamily: font.mono, fontSize: '15px', color: C.blue, fontWeight: 700 }}>{n}</span>
            <span style={{ fontFamily: font.body, fontSize: '11px', color: C.muted }}>{l}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── INTERACTIVE SYMPTOM BLOCK ────────────────────────────────
type Stage = 'select' | 'results' | 'path-a' | 'path-b'

function SymptomBlock() {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [stage, setStage] = useState<Stage>('select')
  const resultsRef = useRef<HTMLDivElement>(null)

  const toggle = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
    if (stage !== 'select') setStage('select')
  }

  const analyze = () => {
    setStage('results')
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 80)
  }

  const exams = getExams([...selected])

  return (
    <section id="symptom-block" style={{
      padding: 'clamp(64px, 8vw, 104px) 24px',
      background: C.bg,
    }}>
      <div style={{ maxWidth: 940, margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span style={{
            fontFamily: font.mono,
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: C.blue,
            display: 'block',
            marginBottom: '16px',
          }}>
            SYMPTOM INTELLIGENCE
          </span>
          <h2 style={{
            fontFamily: font.headline,
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: C.text,
            margin: '0 0 16px',
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
          }}>
            How is your body<br />communicating with you?
          </h2>
          <p style={{
            fontFamily: font.body,
            fontSize: '16px',
            color: C.muted,
            margin: '0 auto',
            maxWidth: '420px',
            lineHeight: 1.6,
          }}>
            Select what you're experiencing.<br />Any age. Any body.
          </p>
        </div>

        {/* Symptom Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(198px, 1fr))',
          gap: '10px',
          marginBottom: selected.size > 0 && stage === 'select' ? '28px' : '0',
        }}>
          {SYMPTOMS.map(s => {
            const on = selected.has(s.id)
            return (
              <button
                key={s.id}
                onClick={() => toggle(s.id)}
                style={{
                  background: on
                    ? `linear-gradient(135deg, ${s.color}1A, ${s.color}08)`
                    : C.surface,
                  border: `1px solid ${on ? s.color + '60' : 'rgba(136,136,170,0.1)'}`,
                  borderRadius: '10px',
                  padding: '16px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'border-color 0.15s, box-shadow 0.15s, transform 0.15s',
                  transform: on ? 'translateY(-2px)' : 'none',
                  boxShadow: on ? `0 6px 24px ${s.color}18` : 'none',
                  outline: 'none',
                  position: 'relative',
                }}
              >
                {/* Check badge */}
                {on && (
                  <div style={{
                    position: 'absolute',
                    top: '10px', right: '10px',
                    width: '18px', height: '18px',
                    background: s.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="10" height="8" viewBox="0 0 10 8">
                      <path d="M1 4l2.5 2.5L9 1" stroke="#0A0A0F" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                )}
                {/* Color dot */}
                <div style={{
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  background: s.color,
                  boxShadow: on ? `0 0 10px ${s.color}90` : `0 0 4px ${s.color}50`,
                  marginBottom: '10px',
                  transition: 'box-shadow 0.15s',
                }} />
                <div style={{
                  fontFamily: font.headline,
                  fontSize: '13px',
                  fontWeight: 600,
                  color: on ? C.text : '#A0A0BC',
                  marginBottom: s.sub ? '3px' : 0,
                  lineHeight: 1.3,
                  transition: 'color 0.15s',
                }}>
                  {s.label}
                </div>
                {s.sub && (
                  <div style={{
                    fontFamily: font.body,
                    fontSize: '11px',
                    color: C.muted,
                    lineHeight: 1.4,
                  }}>
                    {s.sub}
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Analyze CTA */}
        {selected.size > 0 && stage === 'select' && (
          <div style={{ textAlign: 'center', paddingTop: '8px' }}>
            <p style={{
              fontFamily: font.mono,
              fontSize: '11px',
              color: C.muted,
              letterSpacing: '0.08em',
              marginBottom: '14px',
            }}>
              {selected.size} SIGNAL{selected.size > 1 ? 'S' : ''} SELECTED
            </p>
            <button
              onClick={analyze}
              style={{
                background: `linear-gradient(135deg, ${C.blue}, #009EBF)`,
                border: 'none',
                borderRadius: '8px',
                padding: '14px 40px',
                fontFamily: font.headline,
                fontSize: '15px',
                fontWeight: 700,
                color: '#0A0A0F',
                cursor: 'pointer',
                letterSpacing: '0.01em',
                boxShadow: `0 8px 28px rgba(0,212,255,0.3)`,
              }}
            >
              Analyze my signals →
            </button>
          </div>
        )}

        {/* ── RESULTS PANEL ── */}
        {stage !== 'select' && (
          <div ref={resultsRef} style={{
            marginTop: '40px',
            border: '1px solid rgba(0,212,255,0.18)',
            borderRadius: '16px',
            overflow: 'hidden',
            background: C.surfaceAlt,
          }}>

            {/* Result Header */}
            <div style={{
              padding: 'clamp(20px, 3vw, 28px) clamp(20px, 4vw, 32px)',
              borderBottom: '1px solid rgba(0,212,255,0.1)',
              background: 'linear-gradient(90deg, rgba(0,212,255,0.07) 0%, transparent 80%)',
            }}>
              <div style={{
                fontFamily: font.mono,
                fontSize: '9px',
                color: C.blue,
                letterSpacing: '0.18em',
                marginBottom: '10px',
              }}>
                ANALYSIS COMPLETE
              </div>
              <p style={{
                fontFamily: font.headline,
                fontSize: 'clamp(16px, 2.5vw, 21px)',
                fontWeight: 700,
                color: C.text,
                margin: 0,
                lineHeight: 1.4,
              }}>
                These signals point to{' '}
                <span style={{ color: C.blue }}>{exams.length} biomarkers</span>{' '}
                that have probably never been tested together.
              </p>
            </div>

            {/* Exam List */}
            <div style={{ padding: 'clamp(20px, 3vw, 28px) clamp(20px, 4vw, 32px)' }}>
              <div style={{
                fontFamily: font.mono,
                fontSize: '9px',
                color: C.muted,
                letterSpacing: '0.16em',
                marginBottom: '14px',
              }}>
                MARKERS YOUR PROFILE REQUIRES
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {exams.map((exam, i) => (
                  <div key={i} style={{
                    background: C.surface,
                    border: '1px solid rgba(136,136,170,0.08)',
                    borderRadius: '8px',
                    padding: '14px 16px',
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                  }}>
                    <span style={{
                      fontFamily: font.mono,
                      fontSize: '10px',
                      color: C.blue,
                      minWidth: '20px',
                      paddingTop: '2px',
                      flexShrink: 0,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div style={{
                        fontFamily: font.headline,
                        fontSize: '13px',
                        fontWeight: 600,
                        color: C.text,
                        marginBottom: '4px',
                      }}>
                        {exam.name}
                      </div>
                      <div style={{
                        fontFamily: font.body,
                        fontSize: '12px',
                        color: C.muted,
                        lineHeight: 1.55,
                      }}>
                        {exam.detects}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Protocol note */}
            <div style={{ padding: '0 clamp(20px, 4vw, 32px) 24px' }}>
              <div style={{
                background: 'rgba(0,255,136,0.06)',
                border: '1px solid rgba(0,255,136,0.14)',
                borderRadius: '8px',
                padding: '13px 16px',
                fontFamily: font.body,
                fontSize: '13px',
                color: C.green,
                lineHeight: 1.5,
              }}>
                ✓ &nbsp;There are protocols designed for exactly this profile. Each one is mapped inside the Bible.
              </div>
            </div>

            {/* ── PATH SPLIT ── */}
            {stage === 'results' && (
              <div style={{
                padding: '0 clamp(20px, 4vw, 32px) 32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
              }}>
                <button
                  onClick={() => setStage('path-a')}
                  style={{
                    background: `linear-gradient(135deg, rgba(0,212,255,0.08), rgba(0,212,255,0.04))`,
                    border: `1px solid rgba(0,212,255,0.25)`,
                    borderRadius: '10px',
                    padding: '18px 20px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    outline: 'none',
                    transition: 'border-color 0.15s',
                  }}
                >
                  <div style={{
                    fontFamily: font.headline,
                    fontSize: '14px',
                    fontWeight: 700,
                    color: C.blue,
                    marginBottom: '5px',
                  }}>
                    I already have my labs →
                  </div>
                  <div style={{
                    fontFamily: font.body,
                    fontSize: '12px',
                    color: C.muted,
                    lineHeight: 1.4,
                  }}>
                    I have results but no system to read them
                  </div>
                </button>

                <button
                  onClick={() => setStage('path-b')}
                  style={{
                    background: `linear-gradient(135deg, rgba(0,255,136,0.08), rgba(0,255,136,0.04))`,
                    border: `1px solid rgba(0,255,136,0.25)`,
                    borderRadius: '10px',
                    padding: '18px 20px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    outline: 'none',
                  }}
                >
                  <div style={{
                    fontFamily: font.headline,
                    fontSize: '14px',
                    fontWeight: 700,
                    color: C.green,
                    marginBottom: '5px',
                  }}>
                    I haven't tested yet →
                  </div>
                  <div style={{
                    fontFamily: font.body,
                    fontSize: '12px',
                    color: C.muted,
                    lineHeight: 1.4,
                  }}>
                    I want to know exactly what to order
                  </div>
                </button>
              </div>
            )}

            {/* ── PATH A: Has labs ── */}
            {stage === 'path-a' && (
              <div style={{ padding: '0 clamp(20px, 4vw, 32px) 32px' }}>
                <div style={{
                  background: `linear-gradient(135deg, rgba(0,212,255,0.07), transparent)`,
                  border: `1px solid rgba(0,212,255,0.15)`,
                  borderRadius: '12px',
                  padding: 'clamp(20px, 3vw, 28px)',
                }}>
                  <p style={{
                    fontFamily: font.headline,
                    fontSize: 'clamp(17px, 2.5vw, 21px)',
                    fontWeight: 700,
                    color: C.text,
                    margin: '0 0 10px',
                    lineHeight: 1.3,
                  }}>
                    Perfect. You have the data.<br />
                    <span style={{ color: C.blue }}>What's missing is the system.</span>
                  </p>
                  <p style={{
                    fontFamily: font.body,
                    fontSize: '15px',
                    color: C.muted,
                    margin: '0 0 24px',
                    lineHeight: 1.65,
                  }}>
                    Most people with lab results stop there. They have numbers and no framework to act on them.
                    The Bible translates your existing data into a protocol that actually moves — without guessing.
                  </p>
                  <a href={GUMROAD_URL} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: `linear-gradient(135deg, ${C.red}, #CC3D00)`,
                    borderRadius: '8px',
                    padding: '14px 32px',
                    fontFamily: font.headline,
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#fff',
                    textDecoration: 'none',
                    boxShadow: `0 8px 24px rgba(255,77,0,0.35)`,
                  }}>
                    Get the system — {FOUNDING_PRICE} →
                  </a>
                  <p style={{
                    fontFamily: font.mono,
                    fontSize: '10px',
                    color: C.muted,
                    margin: '10px 0 0',
                    letterSpacing: '0.08em',
                  }}>
                    FOUNDING PRICE · {SPOTS_LEFT} SPOTS LEFT
                  </p>
                </div>
              </div>
            )}

            {/* ── PATH B: No labs yet ── */}
            {stage === 'path-b' && (
              <div style={{ padding: '0 clamp(20px, 4vw, 32px) 32px' }}>
                <div style={{
                  background: `linear-gradient(135deg, rgba(0,255,136,0.06), transparent)`,
                  border: `1px solid rgba(0,255,136,0.15)`,
                  borderRadius: '12px',
                  padding: 'clamp(20px, 3vw, 28px)',
                }}>
                  <p style={{
                    fontFamily: font.headline,
                    fontSize: 'clamp(17px, 2.5vw, 21px)',
                    fontWeight: 700,
                    color: C.text,
                    margin: '0 0 10px',
                    lineHeight: 1.3,
                  }}>
                    No problem.{' '}
                    <span style={{ color: C.green }}>Start here.</span>
                  </p>
                  <p style={{
                    fontFamily: font.body,
                    fontSize: '15px',
                    color: C.muted,
                    margin: '0 0 20px',
                    lineHeight: 1.65,
                  }}>
                    Based on your signals, these are the exact tests to request from your doctor.
                    The Bible shows you what each result means — and what to do with it.
                  </p>

                  {/* Priority exam list */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '7px',
                    marginBottom: '24px',
                  }}>
                    {exams.slice(0, 5).map((exam, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontFamily: font.body,
                        fontSize: '13px',
                        color: C.text,
                      }}>
                        <span style={{ color: C.green, fontSize: '14px', fontWeight: 700 }}>→</span>
                        {exam.name}
                      </div>
                    ))}
                    {exams.length > 5 && (
                      <div style={{
                        fontFamily: font.mono,
                        fontSize: '11px',
                        color: C.muted,
                        paddingLeft: '24px',
                        letterSpacing: '0.06em',
                      }}>
                        + {exams.length - 5} more markers inside the Bible
                      </div>
                    )}
                  </div>

                  <a href={GUMROAD_URL} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: `linear-gradient(135deg, ${C.red}, #CC3D00)`,
                    borderRadius: '8px',
                    padding: '14px 32px',
                    fontFamily: font.headline,
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#fff',
                    textDecoration: 'none',
                    boxShadow: `0 8px 24px rgba(255,77,0,0.35)`,
                  }}>
                    Get the complete protocol — {FOUNDING_PRICE} →
                  </a>
                  <p style={{
                    fontFamily: font.mono,
                    fontSize: '10px',
                    color: C.muted,
                    margin: '10px 0 0',
                    letterSpacing: '0.08em',
                  }}>
                    FOUNDING PRICE · {SPOTS_LEFT} SPOTS LEFT
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

// ─── TRANSITION COPY ─────────────────────────────────────────
function TransitionSection() {
  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 96px) 24px',
      background: C.surfaceAlt,
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <p style={{
          fontFamily: font.headline,
          fontSize: 'clamp(20px, 3vw, 28px)',
          fontWeight: 700,
          color: C.text,
          lineHeight: 1.5,
          margin: 0,
        }}>
          There is a system where{' '}
          <span style={{ color: C.blue }}>you are the laboratory.</span>
          <br />
          Where your real data generates real direction.
          <br />
          Where each protocol was designed for your body —{' '}
          <span style={{ color: C.muted, fontWeight: 400 }}>
            not for the average body in a 1987 study.
          </span>
        </p>
      </div>
    </section>
  )
}

// ─── VSL ──────────────────────────────────────────────────────
function VSLSection() {
  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 96px) 24px',
      background: C.bg,
    }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{
            fontFamily: font.mono,
            fontSize: '10px',
            color: C.blue,
            letterSpacing: '0.16em',
          }}>
            WATCH FIRST
          </span>
        </div>
        <div style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%',
          background: C.surface,
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(0,212,255,0.12)',
          boxShadow: `0 0 60px rgba(0,212,255,0.06)`,
        }}>
          <video
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
            }}
            controls
            poster=""
            playsInline
          >
            <source src="/videos/vsl.mp4" type="video/mp4" />
          </video>
          {/* Overlay label if no video */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <div style={{
              fontFamily: font.headline,
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              fontWeight: 700,
              color: C.text,
              textAlign: 'center',
              maxWidth: '420px',
              lineHeight: 1.35,
            }}>
              7 minutes that will change how you see your body
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 3 LAYERS ─────────────────────────────────────────────────
function ThreeLayers() {
  const layers = [
    {
      n: '01',
      color: C.blue,
      title: 'The Knowledge',
      sub: 'What everyone tries to have',
      body: 'Hormones, peptides, GLP-1, bloodwork. Solid scientific base. 40 dense chapters. The foundation most guides pretend to offer but don\'t.',
    },
    {
      n: '02',
      color: C.green,
      title: 'The System',
      sub: 'What no one else delivers',
      body: 'Calculators, decision tables, objective-based protocols. You insert your real data — you get real direction. This lives on the site. The pirated PDF never reaches it.',
    },
    {
      n: '03',
      color: C.purple,
      title: 'The Update',
      sub: 'What makes it impossible to copy',
      body: 'Quarterly updates: new compounds, new studies, new protocols. Only legitimate buyers get access. The PDF ages. Founding members always have the current version.',
    },
  ]

  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 96px) 24px',
      background: C.surfaceAlt,
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span style={{
            fontFamily: font.mono, fontSize: '10px',
            color: C.blue, letterSpacing: '0.16em',
            display: 'block', marginBottom: '14px',
          }}>
            THE ARCHITECTURE
          </span>
          <h2 style={{
            fontFamily: font.headline,
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            fontWeight: 700, color: C.text,
            margin: 0, letterSpacing: '-0.02em',
          }}>
            3 layers. No competitor has all three.
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          {layers.map(l => (
            <div key={l.n} style={{
              background: C.surface,
              border: `1px solid ${l.color}20`,
              borderRadius: '12px',
              padding: '28px 24px',
              borderTop: `2px solid ${l.color}`,
            }}>
              <div style={{
                fontFamily: font.mono,
                fontSize: '11px',
                color: l.color,
                letterSpacing: '0.12em',
                marginBottom: '12px',
              }}>
                LAYER {l.n}
              </div>
              <h3 style={{
                fontFamily: font.headline,
                fontSize: '20px',
                fontWeight: 700,
                color: C.text,
                margin: '0 0 4px',
              }}>
                {l.title}
              </h3>
              <p style={{
                fontFamily: font.mono,
                fontSize: '11px',
                color: C.muted,
                margin: '0 0 16px',
                letterSpacing: '0.06em',
              }}>
                {l.sub}
              </p>
              <p style={{
                fontFamily: font.body,
                fontSize: '14px',
                color: C.muted,
                margin: 0,
                lineHeight: 1.65,
              }}>
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── WHAT'S INSIDE ────────────────────────────────────────────
function WhatsInside() {
  const blocks = [
    {
      label: 'BLOCK 1 — FOUNDATION', color: C.blue,
      title: '"You don\'t know your own body"',
      caps: 'Chapters 1–10',
      items: ['Why your "normal" labs may be destroying you', 'The 8 tests every adult should have done yesterday', 'How to read your hormonal panel without a medical degree', 'Complete hormonal map — men and women'],
    },
    {
      label: 'BLOCK 2 — HORMONAL SYSTEM', color: C.green,
      title: '"The instruments of the laboratory"',
      caps: 'Chapters 11–20',
      items: ['Testosterone, estrogen, progesterone, GH, insulin, cortisol, thyroid', 'Optimal ranges, what elevates each, what destroys each', 'Objective protocols: fat loss / muscle / energy / longevity', 'Decision tables: "my lab shows this → I do this"'],
    },
    {
      label: 'BLOCK 3 — PEPTIDES & GLP-1', color: C.purple,
      title: '"The frontier medicine hasn\'t delivered yet"',
      caps: 'Chapters 21–30',
      items: ['What peptides actually are — in plain language', 'The 12 peptides that change body and performance', 'GLP-1 beyond Ozempic — what the media doesn\'t tell you', 'Stacks by objective. Tables. QR codes to the live site.'],
    },
    {
      label: 'BLOCK 4 — YOUR PROTOCOL', color: C.red,
      title: '"You are the scientist of your laboratory"',
      caps: 'Chapters 31–40',
      items: ['Build your protocol from your real exams', 'Biohacking applied: sleep, fasting, training, light, cold, heat', 'Body composition: fat loss + muscle preservation', 'Chapter 40: you didn\'t finish a book. You started a new OS.'],
    },
  ]

  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 96px) 24px',
      background: C.bg,
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span style={{
            fontFamily: font.mono, fontSize: '10px',
            color: C.blue, letterSpacing: '0.16em',
            display: 'block', marginBottom: '14px',
          }}>
            40 CHAPTERS · 4 BLOCKS
          </span>
          <h2 style={{
            fontFamily: font.headline,
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            fontWeight: 700, color: C.text,
            margin: '0 0 12px', letterSpacing: '-0.02em',
          }}>
            What's inside
          </h2>
          <p style={{
            fontFamily: font.body, fontSize: '15px',
            color: C.muted, margin: 0,
          }}>
            Each block delivers a measurable result. Each chapter ends pointing to the live system.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '14px',
        }}>
          {blocks.map(b => (
            <div key={b.label} style={{
              background: C.surface,
              border: `1px solid rgba(136,136,170,0.08)`,
              borderRadius: '10px',
              padding: '22px',
              borderLeft: `3px solid ${b.color}`,
            }}>
              <div style={{
                fontFamily: font.mono,
                fontSize: '9px',
                color: b.color,
                letterSpacing: '0.14em',
                marginBottom: '6px',
              }}>
                {b.label}
              </div>
              <div style={{
                fontFamily: font.body,
                fontSize: '11px',
                color: C.muted,
                marginBottom: '10px',
              }}>
                {b.caps}
              </div>
              <h3 style={{
                fontFamily: font.headline,
                fontSize: '15px',
                fontWeight: 700,
                color: C.text,
                margin: '0 0 14px',
                lineHeight: 1.3,
              }}>
                {b.title}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {b.items.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    gap: '8px',
                    fontFamily: font.body,
                    fontSize: '12px',
                    color: C.muted,
                    lineHeight: 1.4,
                  }}>
                    <span style={{ color: b.color, flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FOR WHO ─────────────────────────────────────────────────
function ForWho() {
  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 96px) 24px',
      background: C.surfaceAlt,
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <span style={{
          fontFamily: font.mono, fontSize: '10px',
          color: C.blue, letterSpacing: '0.16em',
          display: 'block', marginBottom: '20px',
        }}>
          FOR WHO
        </span>
        <h2 style={{
          fontFamily: font.headline,
          fontSize: 'clamp(26px, 3.5vw, 36px)',
          fontWeight: 700, color: C.text,
          margin: '0 0 20px', lineHeight: 1.2,
        }}>
          The only criterion is this:<br />
          <span style={{ color: C.blue }}>you feel your body can do more.</span>
        </h2>
        <p style={{
          fontFamily: font.body,
          fontSize: '16px',
          color: C.muted,
          margin: '0 0 32px',
          lineHeight: 1.7,
        }}>
          It doesn't matter if you've never read a lab report.
          It doesn't matter if you already have advanced protocols.
          The system meets you where you are.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '32px',
        }}>
          {[
            '22-year-old with low testosterone',
            '55-year-old athlete optimizing performance',
            '38-year-old woman with unexplained fatigue',
            '47-year-old man who can\'t lose belly fat',
            '32-year-old with brain fog and mood instability',
            '68-year-old focused on longevity',
          ].map(tag => (
            <span key={tag} style={{
              background: C.surface,
              border: '1px solid rgba(136,136,170,0.12)',
              borderRadius: '100px',
              padding: '7px 14px',
              fontFamily: font.body,
              fontSize: '12px',
              color: C.muted,
            }}>
              {tag}
            </span>
          ))}
        </div>
        <p style={{
          fontFamily: font.mono,
          fontSize: '11px',
          color: C.muted,
          letterSpacing: '0.1em',
        }}>
          ALL OF THE ABOVE: ✓ INSIDE
        </p>
      </div>
    </section>
  )
}

// ─── PRICING ─────────────────────────────────────────────────
function Pricing() {
  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 96px) 24px',
      background: C.bg,
    }}>
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <span style={{
          fontFamily: font.mono, fontSize: '10px',
          color: C.blue, letterSpacing: '0.16em',
          display: 'block', marginBottom: '20px',
        }}>
          FOUNDING ACCESS
        </span>
        <h2 style={{
          fontFamily: font.headline,
          fontSize: 'clamp(26px, 3.5vw, 38px)',
          fontWeight: 700, color: C.text,
          margin: '0 0 8px',
        }}>
          Enter now at{' '}
          <span style={{
            background: `linear-gradient(90deg, ${C.blue}, ${C.green})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {FOUNDING_PRICE}
          </span>
        </h2>
        <p style={{
          fontFamily: font.body,
          fontSize: '15px',
          color: C.muted,
          margin: '0 0 32px',
          lineHeight: 1.6,
        }}>
          Price rises to{' '}
          <span style={{ color: C.text }}>{REGULAR_PRICE}</span>{' '}
          after the first 100 members — no exceptions, no extensions.
          <br />
          The counter is verifiable. The urgency is real.
        </p>

        {/* Counter */}
        <div style={{
          background: C.surface,
          border: '1px solid rgba(0,212,255,0.15)',
          borderRadius: '10px',
          padding: '18px 24px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
        }}>
          <div>
            <div style={{
              fontFamily: font.mono,
              fontSize: '32px',
              color: C.blue,
              fontWeight: 700,
              lineHeight: 1,
            }}>
              {BUYERS_SO_FAR}
            </div>
            <div style={{
              fontFamily: font.mono,
              fontSize: '9px',
              color: C.muted,
              letterSpacing: '0.12em',
              marginTop: '4px',
            }}>
              MEMBERS IN
            </div>
          </div>
          <div style={{ width: 1, height: 40, background: 'rgba(136,136,170,0.2)' }} />
          <div>
            <div style={{
              fontFamily: font.mono,
              fontSize: '32px',
              color: C.green,
              fontWeight: 700,
              lineHeight: 1,
            }}>
              {SPOTS_LEFT}
            </div>
            <div style={{
              fontFamily: font.mono,
              fontSize: '9px',
              color: C.muted,
              letterSpacing: '0.12em',
              marginTop: '4px',
            }}>
              SPOTS LEFT
            </div>
          </div>
        </div>

        <a href={GUMROAD_URL} style={{
          display: 'block',
          background: `linear-gradient(135deg, ${C.red}, #CC3D00)`,
          borderRadius: '10px',
          padding: '18px 32px',
          fontFamily: font.headline,
          fontSize: '17px',
          fontWeight: 700,
          color: '#fff',
          textDecoration: 'none',
          letterSpacing: '0.01em',
          boxShadow: `0 12px 40px rgba(255,77,0,0.4)`,
          marginBottom: '14px',
        }}>
          Enter now for {FOUNDING_PRICE} →
        </a>
        <p style={{
          fontFamily: font.mono,
          fontSize: '10px',
          color: C.muted,
          margin: 0,
          letterSpacing: '0.08em',
        }}>
          30-DAY MONEY-BACK GUARANTEE · INSTANT ACCESS · 7 LANGUAGES
        </p>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const items = [
    {
      q: 'Is this for men or women?',
      a: 'Both. Equally. The system was built from day one to serve every human body. Every protocol, every chapter, every marker addresses men and women with the same depth. There are no "female sections" — the biology is integrated.',
    },
    {
      q: 'I\'m not a doctor. Will I understand this?',
      a: 'That\'s exactly who this was written for. We write like a professor — not like a guru, not like a physician. Complex concepts are broken into frameworks you can actually act on. If you can read a nutrition label, you can read this.',
    },
    {
      q: 'What if I don\'t have labs yet?',
      a: 'The Bible tells you exactly which tests to request for your specific profile. It then explains what each result means and what to do with it. You can start reading today and order your tests this week.',
    },
    {
      q: 'How is this different from what I can find on YouTube or PubMed?',
      a: 'Fragmented information isn\'t a system. The Bible integrates hormones, peptides, bloodwork, and body composition into a single framework where your real data generates real decisions. That integration doesn\'t exist anywhere else.',
    },
    {
      q: 'What does "live site layer" mean?',
      a: 'Every chapter ends with a QR code pointing to a section on this site that contains updated protocols, calculators, and new research — refreshed quarterly. The PDF is the foundation. The site is the living system. Pirated copies get the foundation. You get both.',
    },
  ]

  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 96px) 24px',
      background: C.surfaceAlt,
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            fontFamily: font.mono, fontSize: '10px',
            color: C.blue, letterSpacing: '0.16em',
            display: 'block', marginBottom: '14px',
          }}>
            FAQ
          </span>
          <h2 style={{
            fontFamily: font.headline,
            fontSize: 'clamp(24px, 3vw, 34px)',
            fontWeight: 700, color: C.text,
            margin: 0,
          }}>
            Common questions
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {items.map((item, i) => (
            <div key={i} style={{
              background: C.surface,
              border: `1px solid ${open === i ? 'rgba(0,212,255,0.2)' : 'rgba(136,136,170,0.08)'}`,
              borderRadius: '10px',
              overflow: 'hidden',
              transition: 'border-color 0.15s',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: '18px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: '16px',
                  outline: 'none',
                }}
              >
                <span style={{
                  fontFamily: font.headline,
                  fontSize: '14px',
                  fontWeight: 600,
                  color: C.text,
                  textAlign: 'left',
                }}>
                  {item.q}
                </span>
                <span style={{
                  color: C.blue,
                  fontSize: '18px',
                  flexShrink: 0,
                  transition: 'transform 0.2s',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                }}>
                  +
                </span>
              </button>
              {open === i && (
                <div style={{
                  padding: '0 20px 18px',
                  fontFamily: font.body,
                  fontSize: '14px',
                  color: C.muted,
                  lineHeight: 1.7,
                }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      padding: '40px 24px',
      background: C.bg,
      borderTop: '1px solid rgba(0,212,255,0.08)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div style={{
          fontFamily: font.headline,
          fontSize: '16px',
          fontWeight: 700,
          color: C.text,
          marginBottom: '6px',
        }}>
          WeightWise Health
        </div>
        <div style={{
          fontFamily: font.mono,
          fontSize: '10px',
          color: C.muted,
          letterSpacing: '0.12em',
          marginBottom: '20px',
        }}>
          HUMAN OPTIMIZATION SYSTEM · HORMONES · PEPTIDES · GLP-1
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          marginBottom: '20px',
        }}>
          {[
            ['Instagram', 'https://instagram.com/weightwiselab'],
            ['Twitter/X', 'https://twitter.com/WeightWiseLab'],
            ['Reddit', 'https://reddit.com/u/weightwisehealth'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{
              fontFamily: font.body,
              fontSize: '12px',
              color: C.muted,
              textDecoration: 'none',
            }}>
              {label}
            </a>
          ))}
        </div>
        <p style={{
          fontFamily: font.body,
          fontSize: '11px',
          color: '#444460',
          margin: 0,
          lineHeight: 1.6,
        }}>
          For educational purposes only. Not medical advice. Always consult a qualified healthcare professional
          before making decisions about your health or protocols.
        </p>
      </div>
    </footer>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────
export default function BiblePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #0A0A0F; }
        @media (max-width: 640px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-book { display: none !important; }
        }
      `}</style>

      <AnnouncementBar />

      <main style={{ paddingTop: '40px', background: C.bg }}>
        <Hero />
        <CredibilityBar />
        <SymptomBlock />
        <TransitionSection />
        <VSLSection />
        <ThreeLayers />
        <WhatsInside />
        <ForWho />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </>
  )
}
