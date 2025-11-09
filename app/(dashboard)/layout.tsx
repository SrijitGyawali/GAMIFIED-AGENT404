'use client';

import { Navbar } from '@/components/Navbar';
import { ParticleBackground } from '@/components/ParticleBackground';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <ParticleBackground />
      <Navbar onConnectWallet={() => {}} />
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}

