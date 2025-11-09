'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Dashboard } from '@/components/Dashboard';
import { QuestBoard } from '@/components/QuestBoard';
import { BadgeCollection } from '@/components/BadgeCollection';
import { Leaderboard } from '@/components/Leaderboard';
import { WalletModal } from '@/components/WalletModal';
import { ParticleBackground } from '@/components/ParticleBackground';

export default function Home() {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <ParticleBackground />
      <Navbar onConnectWallet={() => setShowWalletModal(true)} />
      
      <main>
        <Hero onConnectWallet={() => setShowWalletModal(true)} scrollY={scrollY} />
        <Dashboard scrollY={scrollY} />
        <QuestBoard scrollY={scrollY} />
        <BadgeCollection scrollY={scrollY} />
        <Leaderboard scrollY={scrollY} />
      </main>

      <footer className="relative z-10 mt-24 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel p-8 rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl text-emerald-400 mb-2">Hedera Learn</h3>
                <p className="text-white/60">Learn Blockchain, Earn Rewards</p>
              </div>
              <div className="flex gap-8 text-white/60">
                <a href="#" className="hover:text-emerald-400 transition-colors">About</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Docs</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Community</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showWalletModal && <WalletModal onClose={() => setShowWalletModal(false)} />}
    </div>
  );
}

