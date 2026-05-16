'use client';

import { useReveal } from '@/hooks/useReveal';
import clsx from 'clsx';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: 'none' | 'd1' | 'd2' | 'd3' | 'd4';
}

export default function RevealSection({ children, className, delay = 'none' }: RevealSectionProps) {
  const ref = useReveal();

  const delayClass = {
    none: '',
    d1: 'reveal-d1',
    d2: 'reveal-d2',
    d3: 'reveal-d3',
    d4: 'reveal-d4',
  }[delay];

  return (
    <div ref={ref} className={clsx('reveal', delayClass, className)}>
      {children}
    </div>
  );
}