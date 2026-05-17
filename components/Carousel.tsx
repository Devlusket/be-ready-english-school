'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useCarousel } from '@/hooks/useCarousel';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

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
  const [slidesPerView, setSlidesPerView] = useState(3);
  const total = images.length;
  const { current, goTo, next, prev, offset } = useCarousel(total, slidesPerView);

  // Touch state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsivo
  useEffect(() => {
    const update = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  const slideWidth = slidesPerView === 1 ? 100 : 33.333;

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
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${offset}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} style={{ minWidth: `${slideWidth}%` }} className="px-3 shrink-0">
              <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden">
                <Image
                  src={src}
                  alt={`Foto da Escola ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 92vw, 33vw"
                  className="object-cover"
                  quality={90}
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