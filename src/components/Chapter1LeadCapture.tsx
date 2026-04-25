// Componente — colar na /en/bible page.tsx
// Inserir antes do botão principal de compra do Gumroad

'use client'
import { useState } from 'react'

export function Chapter1LeadCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubmit() {
    if (!email.includes('@')) return
    setStatus('loading')
    try {
      const res = await fetch('/api/send-chapter1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) setStatus('done')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div style={{
        background: 'rgba(0,212,255,0.08)',
        border: '1px solid rgba(0,212,255,0.3)',
        borderRadius: '12px',
        padding: '28px 32px',
        textAlign: 'center',
        maxWidth: '480px',
        margin: '0 auto',
      }}>
        <p style={{ color: '#00D4FF', fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>
          Chapter 01 is on its way.
        </p>
        <p style={{ color: '#8888AA', fontSize: '14px' }}>
          Check your inbox — including spam. The PDF is attached.
        </p>
      </div>
    )
  }

  return (
    <div style={{
      background: 'rgba(26,26,46,0.8)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '12px',
      padding: '32px',
      maxWidth: '480px',
      margin: '0 auto',
    }}>
      <p style={{ color: '#8888AA', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
        FREE — NO PURCHASE REQUIRED
      </p>
      <h3 style={{ color: '#F0F0F5', fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
        Read Chapter 01 Free
      </h3>
      <p style={{ color: '#8888AA', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
        Why "Normal" Lab Results May Be Silently Destroying You.<br />
        15 pages. 13 PubMed references. No optin wall after.
      </p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '8px',
            padding: '12px 16px',
            color: '#F0F0F5',
            fontSize: '14px',
            outline: 'none',
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={status === 'loading'}
          style={{
            background: '#00D4FF',
            color: '#0A0A0F',
            fontWeight: 700,
            fontSize: '14px',
            padding: '12px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {status === 'loading' ? 'Sending...' : 'Send it →'}
        </button>
      </div>
      {status === 'error' && (
        <p style={{ color: '#FF4D00', fontSize: '13px', marginTop: '8px' }}>
          Something went wrong. Try again.
        </p>
      )}
      <p style={{ color: '#555570', fontSize: '12px', marginTop: '12px' }}>
        No spam. One email. The PDF arrives in minutes.
      </p>
    </div>
  )
}
