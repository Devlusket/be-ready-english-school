'use client';

import Image from 'next/image';
import RevealSection from '@/components/RevealSection';
import { useLanguage } from '@/context/LanguageContext';

export default function Feedbacks() {
  const { t } = useLanguage();

  const feedbacks = [
    '/feedbacks/1.jpg',
    '/feedbacks/2.jpg',
    '/feedbacks/3.jpg',
    '/feedbacks/4.jpg',
    '/feedbacks/5.jpg',
  ];

  return (
    <section id="feedbacks" className="bg-blue-mid px-6 md:px-12 py-24">
      <RevealSection>
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-white/60 mb-3">
          {t.feedbacks.eyebrow}
        </p>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
          {t.feedbacks.title}
        </h2>

        <p className="text-sm text-white/75 max-w-[60ch] mb-12 leading-relaxed">
          {t.feedbacks.sub}
        </p>
      </RevealSection>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {feedbacks.map((src, index) => (
          <RevealSection key={index}>
            <div className="mb-4 break-inside-avoid">
              <div className="overflow-hidden rounded-xl bg-white/10 border border-white/20 hover:-translate-y-1 transition-all duration-300">
                <Image
                  src={src}
                  alt={`Feedback ${index + 1}`}
                  width={500}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}