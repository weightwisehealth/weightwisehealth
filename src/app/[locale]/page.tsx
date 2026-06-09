'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [spotsRemaining, setSpotsRemaining] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsRemaining(prev => Math.max(0, prev - Math.floor(Math.random() * 3)));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0a0e27] via-[#0a0e27] to-[#1a1f3a] min-h-screen text-white">
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 lg:px-20 py-4 bg-[#0a0e27]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#00d9ff] via-white to-[#00d9ff]/50 bg-clip-text text-transparent drop-shadow-lg">WeightWise</h1>
          <div className="hidden lg:flex items-center space-x-8 text-lg font-medium">
            <a href="#results">Results</a>
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
          </div>
          <a href="#cta" className="hidden lg:inline-flex bg-gradient-to-r from-[#00d9ff] to-[#00b8d9] text-black px-8 py-3 rounded-2xl font-bold">Get Started</a>
        </div>
      </nav>

      <main className="scroll-smooth pt-24 lg:pt-28">
        <section id="hero" className="min-h-screen flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-20 py-20 gap-12 max-w-7xl mx-auto">
          <div className="text-center lg:text-left max-w-lg space-y-8 flex-1">
            <h1 className="text-6xl font-black text-transparent bg-gradient-to-r from-white via-[#00d9ff] to-white bg-clip-text">Unlock Peak Performance</h1>
            <p className="text-xl text-gray-300">Otimização hormonal revolucionária para homens.</p>
            <a href="#cta" className="inline-block bg-gradient-to-r from-[#00d9ff] to-[#00b8d9] text-black px-12 py-6 rounded-3xl font-bold">Inicie Sua Jornada</a>
          </div>
        </section>

        <section id="cta" className="py-32 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-white via-[#00d9ff] to-white/50 bg-clip-text">Pronto para Dominar Seu Potencial?</h2>
            <p className="text-xl text-gray-300">Apenas {spotsRemaining} spots disponíveis este mês.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#" className="bg-gradient-to-r from-[#00d9ff] to-[#00b8d9] text-black px-12 py-6 rounded-3xl font-bold">Começar Agora</a>
              <a href="#" className="border-2 border-[#00d9ff] text-[#00d9ff] px-12 py-6 rounded-3xl font-bold">Agendar Consulta</a>
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-white/10 bg-[#0a0e27]">
          <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
            <p>© 2026 WeightWise Health. Todos os direitos reservados.</p>
            <div className="mt-4 flex justify-center gap-6">
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
              <a href="#">Contato</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
