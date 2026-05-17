'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const t = useTranslations('home');
  const [spotsRemaining, setSpotsRemaining] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsRemaining(prev => Math.max(0, prev - Math.floor(Math.random() * 3)));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0a0e27] via-[#0a0e27] to-[#1a1f3a] min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 lg:px-20 py-4 bg-[#0a0e27]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#00d9ff] via-white to-[#00d9ff]/50 bg-clip-text text-transparent drop-shadow-lg">
            WeightWise
          </h1>
          <div className="hidden lg:flex items-center space-x-8 text-lg font-medium">
            <a href="#results" className="hover:text-[#00d9ff] transition-colors duration-300 py-2">Results</a>
            <a href="#features" className="hover:text-[#00d9ff] transition-colors duration-300 py-2">Features</a>
                                                   00d9ff] transition-colors duration-300 py-2">How It Works</a>
            <a href="#testimonials" className="hover:text-[#00d9ff] transition-colors duration-300 py-2">Testimonials</a>
          </div>
          <div className="lg:hidden relative">
            <details className="">
              <summary className="flex items-center space-x-2 p-2 rounded-xl hover:bg-white/10 transition-all duration-300 list-none cursor-pointer font-semibold">
                <span className="text-/span>2xl">
                <span>Menu</span>
              </summary>
              <div className="absolute top-full right-0 mt-2 w-64 bg-[#0a0e27]/95 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 space-y-4">
                <a href="#results" className="block py-3 px-4 rounded-2xl hover:bg-[#00d9ff]/20 hover:text-[#00d9ff] transition-all duration-300 font-medium">Results</a>
                <a href="#features" className="block py-3 px-4 rounded-2xl hover:bg-[#00d9ff]/20 hover:text-[#00d9ff] transition-all duration-300 font-medium">Features</a>
                <a href="#how" className="block py-3 px-4 rounded-2xl hover:bg-[#00d9ff]/20 hover:text-[#00d9ff] transition-all duration-300 font-medium">How It Works</a>
                <a href="#testimonials" className="block py-3 px-4 rounded-2xl hover:bg-[#00d9ff]/20 hover:text-[#00d9ff] transition-all duration-300 font-medium">Testimonials</a>
              </div>
            </details>
          </div>
          <a
            href="#cta"
            className="hidden lg:inline-flex bg-gradient-to-r from-[#00d9ff] to-[#00b8d9] text-black px-8 py-3 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </nav>

      <main className="scroll-smooth pt-24 lg:pt-28">

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-20 py-20 lg:py-32 gap-12 lg:gap-24 max-w-7xl mx-auto">
          <div className="text-center lg:text-left max-w-lg lg:max-w-xl space-y-8 flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight bg-gradient-to-r from-white via-[#00d9ff] to-white bg-clip-text text-transparent drop-shadow-2xl">
              Unlock Peak
              <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-[#00d9ff] to-cyan-400 bg-clip-text text-transparent">Performance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
#              Otimiza
o hormonal revolucionria para homens. Aumente testosterona, equilibre cortisol e domine seu metabolismo.
            </p>
            <a
              href="#cta"
              className="inline-block bg-gradient-to-r from-[#00d9ff] to-[#00b8d9] text-black px-10 py-6 lg:px-12 lg:py-7 rounded-3xl text-xl lg:text-2xl font-bold shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-500 mx-auto lg:mx-0"
            >
              Inicie Sua Jornada
            </a>
          </div>

          {/* Before/After Visual */}
          <div className="flex-1 flex flex-col items-center space-y-12 lg:space-y-16 w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-md mx-auto">
              {/* Before */}
              <div className="group relative w-28 h-72 sm:w-32 sm:h-80 lg:w-36 lg:h-96 bg-gradient-to-b from-orange-400/40 to-red-500/40 rounded-[70%_40%_60%_30%] shadow-2xl border-4 border-orange-400/60 hover:scale-110 transition-all duration-500 cursor-pointer">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500/80 backdrop-blur-sm px-6 py-2 rounded-2xl text-xs font-bold text-white shadow-lg whitespace-nowrap">
                  Before
                </span>
              </div>
              {/* After */}
              <div className="group relative w-28 h-72 sm:w-32 sm:h-80 lg:w-36 lg:h-96 bg-gradient-to-b from-[#00d9ff]/40 via-cyan-400/40 to-[#00d9ff]/60 rounded-[25%_60%_50%_20%] shadow-2xl border-4 border-[#00d9ff]/70 hover:scale-110 transition-all duration-500 cursor-pointer">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00d9ff]/90 backdrop-blur-sm px-6 py-2 rounded-2xl text-xs font-bold text-black shadow-lg whitespace-nowrap">
                  After
                </span>
              </div>
            </div>

            {/* Biomarker Graphs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
              {/* Testosterone */}
              <div className="bg-[#1a1f3a]/70 backdrop-blur-sm p-6 rounded-3xl border border-[#00d9ff]/30 hover:border-[#00d9ff]/60 transition-all duration-300 flex flex-col items-center">
                <svg className="w-24 h-24 mb-3" viewBox="0 0 200 100" fill="none">
                  <path d="M20 85 Q60 60 100 35 Q140 20 180 10" stroke="#00d9ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="20" y1="95" x2="180" y2="95" stroke="#00d9ff" strokeWidth="1.5" opacity="0.4" />
                  <line x1="20" y1="95" x2="20" y2="10" stroke="#00d9ff" strokeWidth="1.5" opacity="0.4" />
                </svg>
                <p className="text-[#00d9ff] font-bold text-sm lg:text-base mb-1">Testosterona</p>
                <p className="text-xs text-gray-120%</p>400">
              </div>
              {/* Cortisol */}
              <div className="bg-[#1a1f3a]/70 backdrop-blur-sm p-6 rounded-3xl border border-[#00d9ff]/30 hover:border-[#00d9ff]/60 transition-all duration-300 flex flex-col items-center">
                <svg className="w-24 h-24 mb-3" viewBox="0 0 200 100" fill="none">
                  <path d="M20 25 Q60 45 100 65 Q140 75 180 85" stroke="#10b981" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="20" y1="95" x2="180" y2="95" stroke="#00d9ff" strokeWidth="1.5" opacity="0.4" />
                  <line x1="20" y1="95" x2="20" y2="10" stroke="#00d9ff" strokeWidth="1.5" opacity="0.4" />
                </svg>
                <p className="text-[#00d9ff] font-bold text-sm lg:text-base mb-1">Cortisol</p>
                <p className="text-xs text-gray-50%</p>400">
              </div>
              {/* Insulin */}
              <div className="bg-[#1a1f3a]/70 backdrop-blur-sm p-6 rounded-3xl border border-[#00d9ff]/30 hover:border-[#00d9ff]/60 transition-all duration-300 flex flex-col items-center">
                <svg className="w-24 h-24 mb-3" viewBox="0 0 200 100" fill="none">
                  <path d="M20 35 Q60 55 100 70 Q140 80 180 90" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="20" y1="95" x2="180" y2="95" stroke="#00d9ff" strokeWidth="1.5" opacity="0.4" />
                  <line x1="20" y1="95" x2="20" y2="10" stroke="#00d9ff" strokeWidth="1.5" opacity="0.4" />
                </svg>
                <p className="text-[#00d9ff] font-bold text-sm lg:text-base mb-1">Insulina</p>
                <p className="text-xs text-gray-60%</p>400">
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-32 px-6 md:px-12 lg:px-20 bg-[#0a0e27]/50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 items-center justify-items-center">
            <div className="text-center group">
              <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#00d9ff] mb-6 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">+120%</div>
              <p className="text-2xl md:text-3xl font-semibold text-gray-200">Aumento de Testosterona</p>
            </div>
            <div className="text-center group">
              <div className="-rotate-6 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#10b981] mb-6 drop-shadow-2xl group-hover:scale-110 transition-all duration-500">-50%</div>
#              <p className="text-2xl md:text-3xl font-semibold text-gray-200">Redu
o de Cortisol</p>
            </div>
            <div className="text-center group">
              <div className="rotate-6 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#f59e0b] mb-6 drop-shadow-2xl group-hover:scale-110 transition-all duration-500">-60%</div>
              <p className="text-2xl md:text-3xl font-semibold text-gray-200">Sensibilidade  Insulina</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 px-6 md:px-12 lg:px-20">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-[#00d9ff] to-white/50 bg-clip-text text-transparent drop-shadow-xl mb-6">
              Recursos Principais
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tudo projetado para resultados mximos com cincia comprovada.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
            ].map((feature, index) => (              { icon: '              { icon: '              { icon: '              { icon: '              { icon: '
              <div
                key={index}
                className="group bg-[#1a1f3a]/50 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-[#00d9ff]/20 hover:border-[#00d9ff]/60 hover:bg-[#00d9ff]/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#00d9ff]/20 group-hover:bg-[#00d9ff]/40 rounded-3xl flex items-center justify-center mb-8 mx-auto transition-all duration-500 text-3xl lg:text-4xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center group-hover:text-[#00d9ff] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed text-sm lg:text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how" className="py-32 px-6 md:px-12 lg:px-20 bg-[#0a0e27]/50">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-[#00d9ff] to-white/50 bg-clip-text text-transparent drop-shadow-xl mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              3 passos simples para transformar sua sade hormonal.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
#              { step: '01', title: 'Avalia
o Completa', desc: 'Teste seus hormnnnnios com nosso kit em casa. Resultados em 48h.' },
              { step: '02', title: 'Plano Personalizado', desc: 'IA analisa seus dados e cria protocolo 100% customizado.' },
#              { step: '03', title: 'Transforma
o', desc: 'Acompanhamento semanal com coaches. Resultados garantidos.' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-[#1a1f3a]/70 backdrop-blur-sm p-8 rounded-3xl border border-[#00d9ff]/30 hover:border-[#00d9ff]/60 transition-all duration-300 h-full">
                  <div className="text-5xl font-black text-[#00d9ff]/30 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-[#00d9ff] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-32 px-6 md:px-12 lg:px-20">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-[#00d9ff] to-white/50 bg-clip-text text-transparent drop-shadow-xl mb-6">
              Depoimentos de Elite
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Resultados reais de homens que transformaram suas vidas.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Carlos M.', role: 'CEO', text: 'Meu nel de energia disparou. Produtividade +300%. Recomendo para todo homem srio.' },
              { name: 'Rafael S.', role: 'Atleta', text: 'Testosterona subiu 180%. Ganho muscular sem precedentes. Isso  cincia real.' },
#              { name: 'Jo
o P.', role: 'Empresrio', text: 'Perdi 15kg de gordura, mantendo msculo. Meu cortisol normalizou. Vida transformada.' },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1f3a]/70 backdrop-blur-sm p-8 rounded-3xl border border-[#00d9ff]/30 hover:border-[#00d9ff]/60 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d9ff] to-cyan-400"></div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-[#00d9ff]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spots Counter */}
        <section className="py-20 px-4 bg-[#0a0e27]/50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-UrgWhitencia Real</h2>">
            <div className="bg-[#1a1f3a]/70 backdrop-blur-sm rounded-3xl p-8 border border-[#00d9ff]/30">
              <div className="w-full bg-gray-700/50 rounded-full h-6 mb-4 overflow-hidden">
                <div className="bg-gradient-to-r from-[#00d9ff] to-cyan-400 h-full w-[42%] transition-all duration-500"></div>
              </div>
              <p className="text-3xl font-bold text-[#00d9ff] mb-2">{spotsRemaining}/100 Spots Restantes</p>
              <p className="text-gray-300">Garanta seu lugar antes que os preos subam para $129.90</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#00d9ff]/10 via-transparent to-cyan-500/10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-[#00d9ff] to-white/50 bg-clip-text text-transparent drop-shadow-xl">
              Pronto para Dominar Seu Potencial?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Apenas {spotsRemaining} spots disponeis este ms. Junte-se aos elite biohackers transformando suas vidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#"
                className="bg-gradient-to-r from-[#00d9ff] to-[#00b8d9] text-black px-12 py-6 rounded-3xl text-xl font-bold shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-30                classNa            Comear Agora
              </a>
              <a
                href="#"
                className="border-2 border-[#00d9ff] text-[#00d9ff] px-12 py-6 rounded-3xl text-xl font-bold hover:bg-[#00d9ff]/10 transition-all duration-300"
              >
                Agendar Consulta
              </a>
            </div>
            <p className="text-sm text-gray-400">
 30 dias de garantia de dinheiro de  Suporte 24/ Resultados comprovados7 | volta |               
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-white/10 bg-[#0a0e27]">
          <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
            < 2026 WeightWise Health. Todos os direitos reservados.</p>p>
            <div className="mt-4 flex justify-center gap-6 text-xs">
              <a href="#" className="hover:text-[#00d9ff] transition-colors">Privacidade</a>
              <a href="#" className="hover:text-[#00d9ff] transition-colors">Termos</a>
              <a href="#" className="hover:text-[#00d9ff] transition-colors">Contato</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
