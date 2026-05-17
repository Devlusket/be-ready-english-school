'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useCounter } from '@/hooks/useCounter';

interface StatCardProps {
  target: number;
  suffix: string;
  label: string;
}

function StatCard({ target, suffix, label }: StatCardProps) {
  const { ref, value } = useCounter(target);

  return (
    <div
      ref={ref}
      className="border-l-4 border-blue pl-4 py-2 bg-white/90 shadow-md pr-6"
    >
      <div className="font-display text-4xl font-bold text-blue leading-none">
        {value}{suffix}
      </div>
      <div className="text-[0.68rem] tracking-widest uppercase text-text-mid mt-1">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 pt-32 pb-16 gap-12 relative overflow-hidden bg-white">
      {/* Padrão dourado de fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(212,168,67,0.07) 18px, rgba(212,168,67,0.07) 19px),
            repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(212,168,67,0.07) 18px, rgba(212,168,67,0.07) 19px)
          `,
        }}
      />

      {/* Esquerda — com animações de entrada */}
      <div className="relative z-10">
        <p
          className="text-[0.7rem] tracking-[0.22em] uppercase text-text-mid mb-5"
          style={{ animation: 'fadeUp 0.8s 0.2s ease both' }}
        >
          {t.hero.eyebrow}
        </p>
        <h1
          className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6"
          style={{ animation: 'fadeUp 0.8s 0.35s ease both' }}
        >
          {t.hero.titleStart}{' '}
          <span className="font-script text-red" style={{ fontSize: '1.15em' }}>
            {t.hero.titleScript}
          </span>{' '}
          {t.hero.titleEnd}
        </h1>
        <p
          className="text-[0.95rem] text-text-mid max-w-[46ch] mb-10 leading-relaxed"
          style={{ animation: 'fadeUp 0.8s 0.5s ease both' }}
        >
          {t.hero.sub}
        </p>
        <div
          className="flex gap-4 flex-wrap"
          style={{ animation: 'fadeUp 0.8s 0.65s ease both' }}
        >
          <a
            href="#placement"
            className="inline-block px-8 py-4 bg-blue text-white text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-blue-dark transition-colors no-underline"
          >
            {t.hero.cta}
          </a>
          <a
            href="#metodologia"
            className="inline-block px-8 py-4 border-2 border-blue text-blue text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-blue hover:text-white transition-all no-underline"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Direita — stats com contador */}
      <div
        className="relative z-10 flex flex-col gap-4 md:pl-8"
        style={{ animation: 'fadeUp 0.8s 0.4s ease both' }}
      >
        <StatCard target={98} suffix="%" label={t.stats.fluency} />
        <StatCard target={5}  suffix="+" label={t.stats.years} />
        <StatCard target={100} suffix="%" label={t.stats.personalized} />
        <StatCard target={100} suffix="+" label={t.stats.students} />
      </div>
    </section>
  );
}