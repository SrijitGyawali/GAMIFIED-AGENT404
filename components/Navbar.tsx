'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Wallet, Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onConnectWallet: () => void;
}

export function Navbar({ onConnectWallet }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Dashboard', 'Quests', 'Badges', 'Leaderboard'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled 
          ? 'rgba(15, 23, 42, 0.8)' 
          : 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center glow-emerald">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <span className="text-xl text-white drop-shadow-lg">
                Hedera <span className="text-emerald-400">Learn</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const href = item === 'Leaderboard' ? '/#leaderboard' : `/${item.toLowerCase()}`;
              const isActive = pathname === href || (pathname === '/' && item === 'Dashboard');
              return (
                <Link key={item} href={href}>
                  <motion.div
                    className={`px-4 py-2 rounded-xl transition-all relative group cursor-pointer ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:w-1/2 transition-all duration-300" />
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <motion.button
              onClick={onConnectWallet}
              className="px-6 py-2.5 rounded-full text-white flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 transition-all shadow-lg shadow-emerald-500/20"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Wallet className="w-4 h-4" />
              <span>Connect Wallet</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 rounded-2xl p-4 space-y-3"
            style={{
              background: 'rgba(30, 41, 59, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {navItems.map((item) => {
              const href = item === 'Leaderboard' ? '/#leaderboard' : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  href={href}
                  className="block text-white/80 hover:text-emerald-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
            <button
              onClick={() => {
                onConnectWallet();
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-2.5 rounded-full text-white flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 transition-all"
            >
              <Wallet className="w-4 h-4" />
              <span>Connect Wallet</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}