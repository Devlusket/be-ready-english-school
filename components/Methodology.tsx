'use client';

import { useLanguage } from '@/context/LanguageContext';
import RevealSection from '@/components/RevealSection';

const delays = ['d1', 'd2', 'd3'] as const;

export default function Methodology() {
  const { t } = useLanguage();

  return (
    <section id="metodologia" className="bg-blue px-6 md:px-12 py-24">
      <RevealSection>
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-white/60 mb-3">
          {t.methodology.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
          {t.methodology.title}
        </h2>
        <p className="text-sm text-white/75 max-w-[54ch] mb-12 leading-relaxed">
          {t.methodology.sub}
        </p>
      </RevealSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/20 rounded-sm overflow-hidden">
        {t.methodology.items.map((item, i) => (
          <RevealSection key={item.num} delay={delays[i]}>
            <div className={`p-10 bg-white/7 hover:bg-white/14 transition-all duration-300 hover:-translate-y-1 h-full ${i < t.methodology.items.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/20' : ''}`}>
              <div className="font-display text-6xl font-bold text-white/15 leading-none mb-5">{item.num}</div>
              <div className="font-display text-xl font-bold text-white mb-3">{item.title}</div>
              <p className="text-sm text-white/75 leading-relaxed">{item.text}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}