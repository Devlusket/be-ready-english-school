'use client';

import { useLanguage } from '@/context/LanguageContext';

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.859L.057 23.535a.5.5 0 0 0 .608.608l5.676-1.476A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.188-1.433l-.372-.22-3.862 1.004 1.004-3.862-.22-.372A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

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
    { label: 'Instagram', icon: <IconInstagram />, href: '#' },
    { label: 'Facebook', icon: <IconFacebook />, href: '#' },
    { label: 'YouTube', icon: <IconYoutube />, href: '#' },
    { label: 'LinkedIn', icon: <IconLinkedin />, href: '#' },
    { label: 'WhatsApp', icon: <IconWhatsapp />, href: '#' },
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
            <p>Rua Ouro Preto, 146 - Sala 1</p>
            <p>Medina, MG</p>
            <a
              href="https://wa.me/553384144942"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              +55 (33) 8414-4942
            </a>
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
              title={s.label}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 no-underline hover:bg-blue-light hover:text-white transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}