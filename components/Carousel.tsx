'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useCarousel } from '@/hooks/useCarousel';
import  Image  from 'next/image';

const images = [
  '/carousel/1.jpg',
  '/carousel/2.jpg',
  '/carousel/3.jpg',
  '/carousel/4.jpg',
  '/carousel/5.jpg',
  '/carousel/6.jpg',
];

export default function Carousel() {
  const { t } = useLanguage();
  const total = images.length;
  const slidesPerView = 3;
  const { current, goTo, next, prev, offset } = useCarousel(
    total,
    slidesPerView,
  );

  return (
    <section id="galeria" className="bg-offwhite py-24">
      {/* Header */}
      <div className="px-6 md:px-12 mb-10">
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-blue-light mb-3">
          {t.carousel.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark">
          {t.carousel.title}
        </h2>
      </div>

      {/* Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${offset}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="min-w-[33.333%] px-3 shrink-0">
              <div className="w-full aspect-4/3 rounded-md overflow-hidden bg-linear-to-br flex items-center justify-center">
                <Image
                  width={200}
                  height={200}
                  src={src}
                  alt={`Foto da Escola ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8 px-6 md:px-12">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border-2 border-blue text-blue flex items-center justify-center hover:bg-blue hover:text-white transition-all cursor-pointer bg-transparent text-lg"
        >
          ←
        </button>

        <div className="flex gap-2">
          {Array.from({ length: total - slidesPerView + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full border-none cursor-pointer transition-all duration-200 ${
                i === current ? 'bg-blue scale-125' : 'bg-blue/25'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full border-2 border-blue text-blue flex items-center justify-center hover:bg-blue hover:text-white transition-all cursor-pointer bg-transparent text-lg"
        >
          →
        </button>
      </div>
    </section>
  );
}
