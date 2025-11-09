'use client';

import { useState, useEffect } from 'react';
import { QuestBoard } from '@/components/QuestBoard';

export default function QuestsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <QuestBoard scrollY={scrollY} />;
}

