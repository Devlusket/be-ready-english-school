'use client';

import { useLanguage } from '@/context/LanguageContext';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#' },
    { label: t.nav.methodology, href: '#metodologia' },
    { label: t.nav.levels, href: '#niveis' },
    { label: t.nav.gallery, href: '#galeria' },
    { label: t.nav.placement, href: '#placement' },
  ];

  const linkClass =
    'text-xs font-medium tracking-widest uppercase text-[var(--color-text-mid)] no-underline hover:text-[var(--color-blue)] transition-colors';

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4 transition-all duration-300',
        scrolled ? 'bg-white shadow-sm' : 'bg-white/80',
      )}
    >
      {/* Logo */}
      <a href="#" className="flex items-center no-underline">
        <Image
          src="/logo.png"
          alt="Be Ready English School"
          width={150}
          height={55}
          className="object-contain"
          style={{ mixBlendMode: 'multiply', height: 'auto', width: 'auto' }}
          priority
        />
      </a>

      {/* Links desktop */}
      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={linkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Language toggle */}
        <button
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          className="text-xs font-medium border border-blue text-blue px-3 py-1.5 rounded-sm hover:bg-blue hover:text-white transition-all cursor-pointer bg-transparent"
        >
          {lang === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
        </button>

        {/* CTA desktop */}
        <a
          href="#placement"
          className="hidden md:inline-block text-xs font-medium tracking-wider uppercase bg-blue text-white px-5 py-2.5 rounded-sm hover:bg-blue-dark transition-colors no-underline"
        >
          {t.nav.apply}
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none"
        >
          <span
            className={clsx(
              'block w-6 h-0.5 bg-blue transition-all duration-300',
              menuOpen && 'rotate-45 translate-y-2',
            )}
          />
          <span
            className={clsx(
              'block w-6 h-0.5 bg-blue transition-all duration-300',
              menuOpen && 'opacity-0',
            )}
          />
          <span
            className={clsx(
              'block w-6 h-0.5 bg-blue transition-all duration-300',
              menuOpen && '-rotate-45 -translate-y-2',
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col p-6 gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#placement"
            onClick={() => setMenuOpen(false)}
            className="text-center text-xs font-medium tracking-wider uppercase bg-blue text-white px-5 py-3 rounded-sm no-underline"
          >
            {t.nav.apply}
          </a>
        </div>
      )}
    </nav>
  );
}
