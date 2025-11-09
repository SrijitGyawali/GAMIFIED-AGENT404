'use client';

import { useState, useEffect } from 'react';
import { BadgeCollection } from '@/components/BadgeCollection';

export default function BadgesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <BadgeCollection scrollY={scrollY} />;
}

