'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Placement() {
  const { t } = useLanguage();

  return (
    <section
      id="placement"
      className="px-6 md:px-12 py-24 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-blue-dark) 0%, var(--color-blue) 50%, #0D3070 100%)',
      }}
    >
      {/* Ícone decorativo de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20rem] opacity-[0.03]">📖</span>
      </div>

      <div className="relative z-10">
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-white/60 mb-3">
          {t.placement.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
          {t.placement.title}
        </h2>
        <p className="text-sm md:text-base text-white/80 max-w-[64ch] mx-auto mb-4 leading-relaxed">
          {t.placement.desc}
        </p>
        <p className="text-sm text-white/65 max-w-[60ch] mx-auto mb-14 leading-relaxed">
          {t.placement.desc2}
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-14 text-left">
          {t.placement.steps.map((step) => (
            <div
              key={step.num}
              className="bg-white/8 border border-white/15 rounded-sm p-8"
            >
              <div className="font-display text-4xl font-bold text-white/20 leading-none mb-4">
                {step.num}
              </div>
              <div className="font-display text-lg font-bold text-white mb-2">
                {step.title}
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-block bg-white text-blue font-semibold text-sm tracking-wider uppercase px-10 py-4 rounded-sm hover:bg-offwhite transition-colors no-underline"
        >
          {t.placement.cta}
        </a>
      </div>
    </section>
  );
}