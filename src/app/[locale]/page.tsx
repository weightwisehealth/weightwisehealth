"use client";

import { useState, useEffect, useRef } from "react";

const GUMROAD_URL = "https://weightwise8.gumroad.com/l/grmohs";
const FOUNDING_PRICE = "$79.90";
const REGULAR_PRICE = "$129.90";
const FOUNDING_SPOTS = 100;

// ─── DATA ─────────────────────────────────────────────────────────────────────

const blocks = [
  {
    number: "01",
    title: "FOUNDATION",
    subtitle: "You don't know your own body",
    color: "#00D4FF",
    chapters: [
      { n: 1,  title: "Why Your Doctor's Normal Range Is Lying to You" },
      { n: 2,  title: "The Four Biomarkers That Govern Everything" },
      { n: 3,  title: "How to Read a Blood Panel Like a Researcher" },
      { n: 4,  title: "The Body Composition Equation Nobody Teaches" },
      { n: 5,  title: "Sleep: The Master Regulator You're Ignoring" },
      { n: 6,  title: "Stress Physiology and the Cortisol Tax" },
      { n: 7,  title: "Nutrition as Information, Not Fuel" },
      { n: 8,  title: "The Inflammation Spectrum" },
      { n: 9,  title: "Your Chronotype and Hormonal Timing" },
      { n: 10, title: "Building Your Baseline: The First Lab Protocol" },
    ],
  },
  {
    number: "02",
    title: "HORMONAL SYSTEM",
    subtitle: "The instruments of the laboratory",
    color: "#7B2FBE",
    chapters: [
      { n: 11, title: "Testosterone: Function, Ranges, and What Moves the Needle" },
      { n: 12, title: "Estrogen: The Misunderstood Hormone (In Every Body)" },
      { n: 13, title: "Progesterone: The Calming Counterweight" },
      { n: 14, title: "Growth Hormone: The Repair Signal" },
      { n: 15, title: "Insulin and Metabolic Flexibility" },
      { n: 16, title: "Cortisol: Friend, Enemy, and the Fine Line Between" },
      { n: 17, title: "Thyroid: The Thermostat of Your Entire System" },
      { n: 18, title: "DHEA and the Adrenal Axis" },
      { n: 19, title: "Melatonin Beyond Sleep" },
      { n: 20, title: "Hormonal Synergy: Reading the Full Orchestra" },
    ],
  },
  {
    number: "03",
    title: "PEPTIDES & FULL SPECTRUM",
    subtitle: "The frontier medicine hasn't delivered yet",
    color: "#00FF88",
    chapters: [
      { n: 21, title: "What Are Peptides and Why Science Is Accelerating" },
      { n: 22, title: "GH Secretagogues: CJC-1295, Ipamorelin, Sermorelin" },
      { n: 23, title: "BPC-157: The Tissue Repair Evidence" },
      { n: 24, title: "TB-500 and Systemic Recovery" },
      { n: 25, title: "GLP-1 Receptor Agonists: Beyond Weight Loss" },
      { n: 26, title: "PT-141 and the Neurobiology of Drive" },
      { n: 27, title: "GHK-Cu: Copper Peptide and Cellular Renewal" },
      { n: 28, title: "The Evidence Hierarchy: Ranking by Research Tier" },
      { n: 29, title: "Safety, Sourcing, and What Responsible Use Looks Like" },
      { n: 30, title: "The Peptide Decision Matrix" },
    ],
  },
  {
    number: "04",
    title: "PERSONALIZED PROTOCOL",
    subtitle: "You are the scientist of your laboratory",
    color: "#FF4D00",
    chapters: [
      { n: 31, title: "Defining Your Optimization Objective" },
      { n: 32, title: "The Symptom-First Diagnostic Framework" },
      { n: 33, title: "Building Your Personal Blood Panel Protocol" },
      { n: 34, title: "The Recovery Architecture" },
      { n: 35, title: "Nutrition Periodization for Your Hormonal Profile" },
      { n: 36, title: "The Training–Hormone Interface" },
      { n: 37, title: "Tracking, Adjusting, and Iterating" },
      { n: 38, title: "Working With (and Around) Conventional Medicine" },
      { n: 39, title: "The Long Game: Optimization at Every Decade" },
      { n: 40, title: "You Haven't Finished the Book. You've Started a New Operating System." },
    ],
  },
];

const comparisonRows = [
  { them: "Teaches concepts", us: "Delivers the personalized system" },
  { them: "Starts with the compound", us: "Starts with your symptom" },
  { them: "Excludes women", us: "Men and women — always, no exceptions" },
  { them: "Has a target age group", us: "Any age — the filter is your symptom" },
  { them: "Static PDF, easy to pirate", us: "Living layer on the site — impossible to copy" },
  { them: "Guru or doctor voice", us: "University professor — education, never prescription" },
  { them: "One niche", us: "Every adult who knows they can perform better" },
];

const faqs = [
  {
    q: "Is this for men or women?",
    a: "Both. Every chapter, every protocol, every example is built for any body. The filter is never age or gender — it's always your symptom and your goal.",
  },
  {
    q: "Do I need medical knowledge to read this?",
    a: "None. The Bible was written as a university course, not a medical paper. You start from zero and build a framework that makes every future conversation with a doctor more productive.",
  },
  {
    q: "Does this recommend buying hormones or peptides?",
    a: "Never. This is education. The Bible gives you the knowledge to understand your own biology and have informed conversations with healthcare professionals.",
  },
  {
    q: "Why $79.90 and not $49?",
    a: "Because this is not a blog post formatted as a PDF. Every citation is a real PubMed PMID. The research took months. After 100 Founding Access purchases, the price becomes $129.90 — permanently.",
  },
  {
    q: "What happens after I buy?",
    a: "You get immediate access to the full 40-chapter PDF. Founding Access members also receive quarterly updates automatically — the PDF you pirate ages. Your copy never does.",
  },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function GlowDot({ color }: { color: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: color,
        boxShadow: `0 0 8px ${color}, 0 0 16px ${color}40`,
        flexShrink: 0,
      }}
    />
  );
}

function BlockCard({ block, index }: { block: typeof blocks[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "#0F0F1A",
        border: `1px solid ${open ? block.color + "60" : "#1E1E30"}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "border-color 0.3s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "28px 32px",
          display: "flex",
          alignItems: "center",
          gap: 20,
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            color: block.color,
            letterSpacing: "0.15em",
            opacity: 0.8,
            minWidth: 28,
          }}
        >
          {block.number}
        </span>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: "#F0F0F5",
              letterSpacing: "0.05em",
            }}
          >
            {block.title}
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#8888AA",
              marginTop: 4,
            }}
          >
            {block.subtitle}
          </div>
        </div>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            color: block.color,
            letterSpacing: "0.1em",
            marginRight: 16,
          }}
        >
          10 CHAPTERS
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
            color: "#8888AA",
            flexShrink: 0,
          }}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          style={{
            borderTop: `1px solid #1E1E30`,
            padding: "8px 0 16px",
          }}
        >
          {block.chapters.map((ch) => (
            <div
              key={ch.n}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
                padding: "12px 32px",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#1A1A2E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  color: block.color,
                  opacity: 0.6,
                  minWidth: 28,
                  paddingTop: 2,
                }}
              >
                {String(ch.n).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#C0C0D0",
                  lineHeight: 1.5,
                }}
              >
                {ch.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function FAQItem({ item }: { item: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid #1E1E30",
        padding: "24px 0",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          textAlign: "left",
          padding: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#F0F0F5",
          }}
        >
          {item.q}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.25s",
            color: "#8888AA",
            flexShrink: 0,
          }}
        >
          <path
            d="M10 4V16M4 10H16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {open && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "#8888AA",
            lineHeight: 1.75,
            marginTop: 12,
            marginBottom: 0,
          }}
        >
          {item.a}
        </p>
      )}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BiblePage() {
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null);

  // Fetch real spot count from Gumroad or use static founding count
  // For now, display the founding context without fake live counter
  useEffect(() => {
    // When Gumroad API or webhook is set up, replace this with real data
    // setSpotsLeft(realSpotsFromAPI)
  }, []);

  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #0A0A0F;
          color: #F0F0F5;
        }

        .bible-page {
          background: #0A0A0F;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        /* Noise overlay */
        .bible-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
          z-index: 0;
        }

        .section { position: relative; z-index: 1; }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.7s 0.15s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.3s ease both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.45s ease both; }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px #FF4D0040, 0 0 40px #FF4D0020; }
          50%       { box-shadow: 0 0 32px #FF4D0070, 0 0 64px #FF4D0030; }
        }

        .cta-btn {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .cta-btn:hover {
          transform: translateY(-2px) scale(1.01);
          transition: transform 0.2s ease;
        }

        .gradient-text-cyan {
          background: linear-gradient(135deg, #00D4FF, #7B2FBE);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-green {
          background: linear-gradient(135deg, #00FF88, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (max-width: 640px) {
          .hero-headline { font-size: clamp(32px, 8vw, 56px) !important; }
          .comparison-grid { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="bible-page">

        {/* ─── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="section"
          style={{
            padding: "100px 0 80px",
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, #00D4FF10 0%, transparent 70%)",
          }}
        >
          <div className="container" style={{ textAlign: "center" }}>

            {/* Label */}
            <div
              className="fade-up"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#1A1A2E",
                border: "1px solid #00D4FF30",
                borderRadius: 999,
                padding: "6px 16px",
                marginBottom: 36,
              }}
            >
              <GlowDot color="#00D4FF" />
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  color: "#00D4FF",
                  letterSpacing: "0.15em",
                }}
              >
                FOUNDING ACCESS — {FOUNDING_SPOTS} SPOTS ONLY
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="fade-up-2 hero-headline"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#F0F0F5",
                maxWidth: 780,
                margin: "0 auto 28px",
              }}
            >
              The Optimization{" "}
              <span className="gradient-text-cyan">Bible</span>
            </h1>

            {/* Governing phrase */}
            <p
              className="fade-up-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(18px, 2.5vw, 22px)",
                color: "#C0C0D8",
                lineHeight: 1.6,
                maxWidth: 620,
                margin: "0 auto 48px",
                fontStyle: "italic",
              }}
            >
              "You are about to see your body in a way you will{" "}
              <strong style={{ color: "#F0F0F5", fontStyle: "normal" }}>
                never be able to unsee.
              </strong>
              "
            </p>

            {/* CTA button */}
            <div className="fade-up-4">
              <button
                onClick={scrollToCTA}
                className="cta-btn"
                style={{
                  background: "#FF4D00",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  padding: "18px 40px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  cursor: "pointer",
                  marginBottom: 16,
                  display: "inline-block",
                }}
              >
                Get Founding Access — {FOUNDING_PRICE}
              </button>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  color: "#8888AA",
                  letterSpacing: "0.1em",
                }}
              >
                PRICE BECOMES {REGULAR_PRICE} AFTER 100 BUYERS · NO COUNTDOWN TRICK
              </p>
            </div>
          </div>
        </section>

        {/* ─── MOVEMENT STATEMENT ──────────────────────────────────────────── */}
        <section
          className="section"
          style={{
            padding: "80px 0",
            borderTop: "1px solid #1E1E30",
            borderBottom: "1px solid #1E1E30",
            background: "#0D0D18",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1px 1fr",
                gap: 40,
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    color: "#00FF88",
                    letterSpacing: "0.2em",
                    marginBottom: 16,
                  }}
                >
                  WHAT THIS IS
                </div>
                {[
                  "The first system where YOU are the laboratory",
                  "A movement — not a product",
                  "40 chapters of applied biology for any human body",
                  "Education built on real PubMed citations",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 14,
                    }}
                  >
                    <GlowDot color="#00FF88" />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 15,
                        color: "#C0C0D0",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ background: "#1E1E30", width: 1, height: "100%", minHeight: 200 }} />

              <div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    color: "#FF4D00",
                    letterSpacing: "0.2em",
                    marginBottom: 16,
                  }}
                >
                  WHAT THIS IS NOT
                </div>
                {[
                  "Another biohacking guide",
                  "A competitor to Huberman or Examine.com",
                  "A product that starts with the compound",
                  "A men-only manual",
                  "A $49 blog post in PDF form",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        color: "#FF4D00",
                        fontSize: 14,
                        flexShrink: 0,
                        paddingTop: 1,
                      }}
                    >
                      ✕
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 15,
                        color: "#666680",
                        lineHeight: 1.5,
                        textDecoration: "line-through",
                        textDecorationColor: "#FF4D0050",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOR EVERYONE ────────────────────────────────────────────────── */}
        <section className="section" style={{ padding: "80px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  color: "#8888AA",
                  letterSpacing: "0.2em",
                  marginBottom: 16,
                }}
              >
                WHO THIS IS FOR
              </div>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  color: "#F0F0F5",
                  lineHeight: 1.2,
                }}
              >
                The filter is your{" "}
                <span className="gradient-text-green">symptom</span>.
                <br />
                Not your age. Not your gender.
              </h2>
            </div>

            <div
              className="three-col"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 20,
              }}
            >
              {[
                {
                  age: "23",
                  profile: "You feel like you should have more energy than this.",
                  color: "#00D4FF",
                },
                {
                  age: "42",
                  profile: "You're doing everything right and still feel like you're running below capacity.",
                  color: "#7B2FBE",
                },
                {
                  age: "68",
                  profile: "You're not ready to accept that decline is mandatory.",
                  color: "#00FF88",
                },
              ].map((p) => (
                <div
                  key={p.age}
                  style={{
                    background: "#0F0F1A",
                    border: `1px solid ${p.color}30`,
                    borderRadius: 16,
                    padding: 28,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 40,
                      fontWeight: 700,
                      color: p.color,
                      lineHeight: 1,
                      marginBottom: 16,
                      opacity: 0.8,
                    }}
                  >
                    {p.age}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      color: "#A0A0B8",
                      lineHeight: 1.6,
                    }}
                  >
                    {p.profile}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{
                textAlign: "center",
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "#8888AA",
                marginTop: 32,
                lineHeight: 1.6,
              }}
            >
              If you recognize yourself in any of these — the Bible was built
              for you.
            </p>
          </div>
        </section>

        {/* ─── THE 3 LAYERS ────────────────────────────────────────────────── */}
        <section
          className="section"
          style={{
            padding: "80px 0",
            background: "#0D0D18",
            borderTop: "1px solid #1E1E30",
          }}
        >
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  color: "#8888AA",
                  letterSpacing: "0.2em",
                  marginBottom: 16,
                }}
              >
                THE ARCHITECTURE
              </div>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  color: "#F0F0F5",
                  lineHeight: 1.2,
                }}
              >
                3 layers. Only one competitor
                <br />
                has attempted the first.
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  n: "01",
                  label: "THE KNOWLEDGE",
                  tag: "What everyone tries to have",
                  body: "Hormones, peptides, body composition. A solid scientific foundation backed by real PubMed citations.",
                  color: "#00D4FF",
                  blur: false,
                },
                {
                  n: "02",
                  label: "THE SYSTEM",
                  tag: "What nobody delivers",
                  body: "Calculators, decision tables, objective-based protocols. You input your real data — you get a real direction. This lives on the site. A pirated PDF doesn't reach here.",
                  color: "#7B2FBE",
                  blur: false,
                },
                {
                  n: "03",
                  label: "THE UPDATE",
                  tag: "Impossible to copy",
                  body: "Quarterly updates exclusive to verified buyers. The pirated PDF ages. Your copy never does. Member stories and outcomes — an asset no competitor can replicate.",
                  color: "#00FF88",
                  blur: false,
                },
              ].map((layer) => (
                <div
                  key={layer.n}
                  style={{
                    display: "flex",
                    gap: 24,
                    background: "#0F0F1A",
                    border: `1px solid ${layer.color}25`,
                    borderRadius: 16,
                    padding: "28px 32px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 36,
                      fontWeight: 700,
                      color: layer.color,
                      opacity: 0.25,
                      lineHeight: 1,
                      minWidth: 48,
                      flexShrink: 0,
                    }}
                  >
                    {layer.n}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#F0F0F5",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {layer.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 10,
                          color: layer.color,
                          background: layer.color + "15",
                          border: `1px solid ${layer.color}30`,
                          borderRadius: 999,
                          padding: "2px 10px",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {layer.tag}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 15,
                        color: "#8888AA",
                        lineHeight: 1.65,
                      }}
                    >
                      {layer.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMPARISON ──────────────────────────────────────────────────── */}
        <section className="section" style={{ padding: "80px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(26px, 3.5vw, 36px)",
                  fontWeight: 700,
                  color: "#F0F0F5",
                }}
              >
                Why we're{" "}
                <span className="gradient-text-cyan">structurally different</span>
              </h2>
            </div>

            <div
              style={{
                background: "#0F0F1A",
                border: "1px solid #1E1E30",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  background: "#1A1A2E",
                  borderBottom: "1px solid #1E1E30",
                }}
              >
                <div
                  style={{
                    padding: "14px 24px",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    color: "#666680",
                    letterSpacing: "0.15em",
                  }}
                >
                  EVERYONE ELSE
                </div>
                <div
                  style={{
                    padding: "14px 24px",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    color: "#00D4FF",
                    letterSpacing: "0.15em",
                    borderLeft: "1px solid #1E1E30",
                  }}
                >
                  WEIGHTWISE
                </div>
              </div>

              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    borderBottom:
                      i < comparisonRows.length - 1
                        ? "1px solid #1E1E30"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      padding: "16px 24px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: "#4A4A60",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.them}
                  </div>
                  <div
                    style={{
                      padding: "16px 24px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: "#C0C0D8",
                      lineHeight: 1.5,
                      borderLeft: "1px solid #1E1E30",
                      background: "#0D0D1A",
                    }}
                  >
                    {row.us}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 40 CHAPTERS ─────────────────────────────────────────────────── */}
        <section
          className="section"
          style={{
            padding: "80px 0",
            background: "#0D0D18",
            borderTop: "1px solid #1E1E30",
          }}
        >
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  color: "#8888AA",
                  letterSpacing: "0.2em",
                  marginBottom: 16,
                }}
              >
                WHAT'S INSIDE
              </div>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  color: "#F0F0F5",
                }}
              >
                40 chapters.{" "}
                <span className="gradient-text-cyan">4 blocks.</span>
                <br />
                One complete system.
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {blocks.map((block, i) => (
                <BlockCard key={block.number} block={block} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── FOUNDING ACCESS CTA ─────────────────────────────────────────── */}
        <section
          className="section"
          ref={ctaRef}
          style={{
            padding: "100px 0",
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, #FF4D0010 0%, transparent 70%)",
            borderTop: "1px solid #1E1E30",
          }}
        >
          <div className="container">
            <div
              style={{
                maxWidth: 600,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#1A1A2E",
                  border: "1px solid #FF4D0040",
                  borderRadius: 999,
                  padding: "6px 16px",
                  marginBottom: 32,
                }}
              >
                <GlowDot color="#FF4D00" />
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    color: "#FF4D00",
                    letterSpacing: "0.15em",
                  }}
                >
                  FOUNDING ACCESS
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(32px, 5vw, 52px)",
                  fontWeight: 800,
                  color: "#F0F0F5",
                  lineHeight: 1.1,
                  marginBottom: 20,
                  letterSpacing: "-0.02em",
                }}
              >
                First 100 buyers.
                <br />
                <span className="gradient-text-cyan">Founding price. Forever.</span>
              </h2>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  color: "#8888AA",
                  lineHeight: 1.7,
                  marginBottom: 40,
                }}
              >
                The price is{" "}
                <strong style={{ color: "#F0F0F5" }}>{FOUNDING_PRICE}</strong>{" "}
                now. After the first 100 buyers, it becomes{" "}
                <strong style={{ color: "#8888AA" }}>{REGULAR_PRICE}</strong>{" "}
                permanently. There is no countdown. The number of buyers is the
                only gate. Real urgency — no tricks.
              </p>

              {/* What you get */}
              <div
                style={{
                  background: "#0F0F1A",
                  border: "1px solid #1E1E30",
                  borderRadius: 16,
                  padding: "28px 32px",
                  marginBottom: 32,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    color: "#8888AA",
                    letterSpacing: "0.2em",
                    marginBottom: 20,
                  }}
                >
                  WHAT'S INCLUDED
                </div>
                {[
                  { item: "The Optimization Bible — full 40-chapter PDF", color: "#00D4FF" },
                  { item: "Quarterly update access — your copy never ages", color: "#00FF88" },
                  { item: "Founding member status — locked at founding price", color: "#7B2FBE" },
                  { item: "Every citation is a real PubMed PMID — no invented references", color: "#00D4FF" },
                ].map(({ item, color }) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 14,
                    }}
                  >
                    <GlowDot color={color} />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 14,
                        color: "#C0C0D0",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price display */}
              <div style={{ marginBottom: 28 }}>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 48,
                    fontWeight: 700,
                    color: "#F0F0F5",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {FOUNDING_PRICE}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: "#8888AA",
                  }}
                >
                  One-time. No subscription. Founding Access.
                </div>
              </div>

              {/* CTA button */}
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
                style={{
                  display: "block",
                  background: "#FF4D00",
                  color: "#fff",
                  border: "none",
                  borderRadius: 14,
                  padding: "20px 40px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  cursor: "pointer",
                  textDecoration: "none",
                  marginBottom: 16,
                  transition: "transform 0.2s ease",
                }}
              >
                Get Founding Access — {FOUNDING_PRICE}
              </a>

              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  color: "#666680",
                  letterSpacing: "0.08em",
                  lineHeight: 1.7,
                }}
              >
                SECURE CHECKOUT VIA GUMROAD · INSTANT PDF DELIVERY
                <br />
                EDUCATION ONLY · NOT MEDICAL ADVICE
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
        <section
          className="section"
          style={{
            padding: "80px 0",
            background: "#0D0D18",
            borderTop: "1px solid #1E1E30",
          }}
        >
          <div className="container">
            <div style={{ maxWidth: 680, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(24px, 3vw, 32px)",
                    fontWeight: 700,
                    color: "#F0F0F5",
                  }}
                >
                  Common questions
                </h2>
              </div>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} item={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
        <footer
          className="section"
          style={{
            padding: "48px 0",
            borderTop: "1px solid #1E1E30",
          }}
        >
          <div
            className="container"
            style={{ textAlign: "center" }}
          >
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: "#444460",
                letterSpacing: "0.1em",
                lineHeight: 1.8,
              }}
            >
              © {new Date().getFullYear()} WEIGHTWISE HEALTH · CONTACT@WEIGHTWISEHEALTH.COM
              <br />
              FOR EDUCATIONAL PURPOSES ONLY · NOT MEDICAL ADVICE · NOT A PRESCRIPTION SERVICE
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}
