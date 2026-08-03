'use client';

import { useLanguage } from '@/context/LanguageContext';
import RevealSection from '@/components/RevealSection';

const delays = ['d1', 'd2', 'd3'] as const;

const WHATSAPP_NUMBER = '553384144942';

// const WHATSAPP_MESSAGE = encodeURIComponent(
//   t.placement.whatsappMessage
// );

export default function Placement() {
  const { t } = useLanguage();

  const trackEvent = (eventName: string, eventLabel: string) => {
    window.gtag?.('event', eventName, {
      event_category: 'CTA',
      event_label: eventLabel,
    });
  };

  return (
    <section
      id="placement"
      className="relative overflow-hidden px-6 py-24 text-center md:px-12"
      style={{
        background:
          'linear-gradient(135deg, var(--color-blue-dark) 0%, var(--color-blue) 50%, #0D3070 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center">
        <span className="text-[20rem] opacity-[0.03]">📖</span>
      </div>

      <div className="relative z-10">
        <RevealSection>
          <p className="mb-3 text-[0.7rem] uppercase tracking-[0.2em] text-white/60">
            {t.placement.eyebrow}
          </p>

          <h2 className="font-display mb-6 text-3xl font-bold text-white md:text-5xl">
            {t.placement.title}
          </h2>

          <p className="mx-auto mb-4 max-w-[64ch] text-sm leading-relaxed text-white/80 md:text-base">
            {t.placement.desc}
          </p>

          <p className="mx-auto mb-14 max-w-[60ch] text-sm leading-relaxed text-white/65">
            {t.placement.desc2}
          </p>
        </RevealSection>

        <div className="mx-auto mb-14 grid max-w-4xl grid-cols-1 gap-4 text-left md:grid-cols-3">
          {t.placement.steps.map((step, i) => (
            <RevealSection key={step.num} delay={delays[i]}>
              <div className="h-full rounded-sm border border-white/15 bg-white/8 p-8">
                <div className="font-display mb-4 text-4xl font-bold leading-none text-white/20">
                  {step.num}
                </div>

                <div className="font-display mb-2 text-lg font-bold text-white">
                  {step.title}
                </div>

                <p className="text-sm leading-relaxed text-white/70">
                  {step.text}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay="d1">
          <div className="mx-auto flex max-w-xl flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="https://student.flexge.com/v2/placement/bereadyenglishschool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 flex-1 items-center justify-center rounded-sm bg-white px-8 py-4 text-center text-sm font-semibold uppercase tracking-wider text-blue no-underline transition-colors hover:bg-offwhite"
              onClick={() =>
                trackEvent(
                  'click_placement_test',
                  'Placement Test Button',
                )
              }
            >
              {t.placement.cta}
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${t.placement.whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco pelo WhatsApp"
              className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-sm border border-white bg-transparent px-8 py-4 text-center text-sm font-semibold uppercase tracking-wider text-white no-underline transition-colors hover:bg-white hover:text-blue"
              onClick={() =>
                trackEvent(
                  'click_placement_whatsapp',
                  'Placement WhatsApp Button',
                )
              }
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 32 32"
                className="h-5 w-5 shrink-0 fill-current"
              >
                <path d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.97 2.62 1.1 2.8c.14.18 1.91 2.91 4.62 4.08.65.28 1.15.45 1.54.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.31z" />

                <path d="M16.03 3C8.84 3 3 8.75 3 15.84c0 2.52.75 4.99 2.15 7.1L3 29l6.27-2.06a13.1 13.1 0 0 0 6.75 1.85H16c7.18 0 13-5.75 13-12.84C29 8.75 23.21 3 16.03 3zm0 23.62h-.01a10.9 10.9 0 0 1-5.55-1.5l-.4-.24-3.72 1.22 1.25-3.58-.26-.41a10.57 10.57 0 0 1-1.64-5.67c0-5.88 4.82-10.66 10.75-10.66 2.87 0 5.57 1.11 7.59 3.11a10.5 10.5 0 0 1 3.15 7.52c0 5.87-4.83 10.65-10.76 10.65z" />
              </svg>

              {t.placement.whatsappCta}
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}