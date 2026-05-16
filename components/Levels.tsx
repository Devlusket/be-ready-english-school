'use client';

import { useLanguage } from '@/context/LanguageContext';
import RevealSection from '@/components/RevealSection';

const gradients = [
  'from-blue-dark to-blue-light',
  'from-blue to-blue-mid',
  'from-blue-mid to-blue-light',
  'from-blue-dark to-blue-mid',
];

const delays = ['d1', 'd2', 'd3', 'd4'] as const;

export default function Levels() {
  const { t } = useLanguage();

  return (
    <section id="niveis" className="bg-blue-mid px-6 md:px-12 py-24">
      <RevealSection>
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-white/60 mb-3">
          {t.levels.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
          {t.levels.title}
        </h2>
        <p className="text-sm text-white/75 max-w-[54ch] mb-12 leading-relaxed">
          {t.levels.sub}
        </p>
      </RevealSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {t.levels.items.map((item, i) => (
          <RevealSection key={item.title} delay={delays[i]}>
            <div className="bg-white/12 border border-white/25 rounded-lg overflow-hidden hover:-translate-y-2 hover:bg-white/18 transition-all duration-300 h-full">
              <div className={`w-full aspect-3/4 bg-linear-to-br ${gradients[i]} flex items-center justify-center`}>
                <div className="font-display text-lg font-bold text-white text-center px-2 leading-tight drop-shadow-md">
                  {item.badge}
                </div>
              </div>
              <div className="p-4">
                <div className="font-display text-base font-bold text-white mb-2">{item.title}</div>
                <p className="text-[0.8rem] text-white/75 leading-relaxed">{item.text}</p>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}