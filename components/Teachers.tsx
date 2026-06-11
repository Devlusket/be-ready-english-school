'use client';

import Image from 'next/image';
import RevealSection from '@/components/RevealSection';
import { useLanguage } from '@/context/LanguageContext';

export default function Teachers() {
  const { t } = useLanguage();

  return (
    <section id="professores" className="bg-offwhite px-6 md:px-12 py-24">
      <RevealSection>
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-blue-light mb-3">
          {t.teachers.eyebrow}
        </p>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-3">
          {t.teachers.title}
        </h2>

        <p className="text-sm text-text-dark/70 max-w-[60ch] mb-12 leading-relaxed">
          {t.teachers.sub}
        </p>
      </RevealSection>

      <div className="grid md:grid-cols-2 gap-8">
        {t.teachers.items.map((teacher) => (
          <RevealSection key={teacher.name}>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-black/5 hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover object-top"
                  quality={90}
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-text-dark">
                  {teacher.name}
                </h3>

                <p className="text-blue font-medium text-sm mt-1 mb-4">
                  {teacher.role}
                </p>

                <p className="text-sm text-text-dark/70 leading-relaxed">
                  {teacher.description}
                </p>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}