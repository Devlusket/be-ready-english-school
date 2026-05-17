'use client';

import Image from 'next/image';
import RevealSection from '@/components/RevealSection';
import { useLanguage } from '@/context/LanguageContext';

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
            <div className="bg-white/12 border border-white/25 rounded-lg overflow-hidden hover:-translate-y-2 hover:bg-white/18 transition-all duration-300 h-full flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-blue-dark flex items-center justify-center">
                <Image
                  src={item.image ?? `/book/${i + 1}.jpg`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="object-contain p-2"
                  quality={90}
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="font-display text-base font-bold text-white mb-2">
                  {item.title}
                </div>
                <p className="text-[0.8rem] text-white/75 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}