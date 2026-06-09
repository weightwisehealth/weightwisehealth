'use client';

import {useState} from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus('success'); setEmail(''); }
      else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">Stay Ahead of the Science</h2>
        <p className="text-primary-100 mb-6">Evidence-based updates on hormone optimization, peptides, and metabolic health.</p>
        {status === 'success' ? (
          <p className="mt-4 font-medium">You're in. Check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" required
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none" />
            <button type="submit" disabled={status === 'loading'}
              className="px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition disabled:opacity-60">
              {status === 'loading' ? 'Sending...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && <p className="mt-3 text-red-300 text-sm">Something went wrong. Try again.</p>}
      </div>
    </div>
  );
}
