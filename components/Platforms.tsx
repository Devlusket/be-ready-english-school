'use client';

import { useLanguage } from '@/context/LanguageContext';
import RevealSection from '@/components/RevealSection';

export default function Platforms() {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-6 md:px-12 py-24">
      <RevealSection>
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-blue-light mb-3">
          {t.platforms.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-3">
          {t.platforms.title}
        </h2>
        <p className="text-sm text-text-mid mb-12 max-w-[54ch]">
          {t.platforms.sub}
        </p>
      </RevealSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevealSection delay="d1">
          <div className="p-10 border-t-4 border-blue bg-offwhite rounded-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase text-blue-light mb-3">
              {t.platforms.flexge.tag}
            </p>
            <div className="font-display text-3xl font-bold text-blue mb-4">Flexge</div>
            <p className="text-sm text-text-mid leading-relaxed">{t.platforms.flexge.text}</p>
          </div>
        </RevealSection>

        <RevealSection delay="d2">
          <div className="p-10 border-t-4 border-blue bg-offwhite rounded-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase text-blue-light mb-3">
              {t.platforms.iorclass.tag}
            </p>
            <div className="font-display text-3xl font-bold text-blue mb-4">IORCLASS</div>
            <p className="text-sm text-text-mid leading-relaxed">{t.platforms.iorclass.text}</p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}