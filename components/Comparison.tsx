'use client';

import { useLanguage } from '@/context/LanguageContext';
import RevealSection from '@/components/RevealSection';

export default function Comparison() {
  const { t } = useLanguage();

  return (
    <section className="bg-offwhite px-6 md:px-12 py-24">
      <RevealSection>
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-blue-light mb-3">
          {t.comparison.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-12">
          {t.comparison.title}
        </h2>
      </RevealSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevealSection delay="d1">
          <div className="rounded-sm overflow-hidden">
            <div className="bg-gray-200 px-6 py-4 text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-text-mid">
              {t.comparison.traditional}
            </div>
            <div className="flex flex-col">
              {t.comparison.items.traditional.map((item) => (
                <div key={item.title} className="bg-white px-6 py-6 border-b border-black/5 last:border-none">
                  <div className="font-display text-lg font-bold text-text-mid mb-2">{item.title}</div>
                  <p className="text-sm text-text-mid leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection delay="d2">
          <div className="rounded-sm overflow-hidden">
            <div className="bg-blue px-6 py-4 text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-white">
              {t.comparison.beready}
            </div>
            <div className="flex flex-col">
              {t.comparison.items.beready.map((item) => (
                <div key={item.title} className="bg-blue/5 px-6 py-6 border-b border-black/5 last:border-none">
                  <div className="font-display text-lg font-bold text-blue mb-2">{item.title}</div>
                  <p className="text-sm text-text-mid leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}