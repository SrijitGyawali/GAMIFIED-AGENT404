'use client';

import { useState, useEffect } from 'react';
import { Dashboard } from '@/components/Dashboard';

export default function DashboardPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <Dashboard scrollY={scrollY} />;
}

