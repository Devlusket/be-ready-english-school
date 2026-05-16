'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '#' },
    { label: t.nav.methodology, href: '#metodologia' },
    { label: t.nav.levels, href: '#niveis' },
    { label: t.nav.gallery, href: '#galeria' },
    { label: t.nav.placement, href: '#placement' },
  ];

  const socials = [
    { label: 'ig', href: '#' },
    { label: 'fb', href: '#' },
    { label: 'yt', href: '#' },
    { label: 'in', href: '#' },
  ];

  return (
    <footer className="bg-blue-dark text-white/80 px-6 md:px-12 pt-16 pb-8">
      {/* Top */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10 mb-8">
        {/* Brand */}
        <div>
          <div className="font-display text-xl font-bold text-white mb-3">
            Be Ready English School
          </div>
          <p className="text-sm leading-relaxed max-w-[36ch]">
            {t.footer.tagline}
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="text-[0.68rem] tracking-[0.18em] uppercase text-white/50 mb-4">
            {t.footer.nav}
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 no-underline hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[0.68rem] tracking-[0.18em] uppercase text-white/50 mb-4">
            {t.footer.contact}
          </p>
          <div className="text-sm leading-loose">
            <p>Teófilo Otoni, MG</p>
            <p>contato@bereadyenglish.com.br</p>
            <p>+55 (33) 9999-9999</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">
          {t.footer.rights}
        </p>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-xs no-underline hover:bg-blue-light hover:text-white transition-all"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}