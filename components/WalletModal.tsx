'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { useState } from 'react';

interface WalletModalProps {
  onClose: () => void;
}

export function WalletModal({ onClose }: WalletModalProps) {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const wallets = [
    {
      id: 'hashpack',
      name: 'HashPack',
      description: 'The most popular Hedera wallet',
      icon: '🎒',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'blade',
      name: 'Blade Wallet',
      description: 'Simple and secure',
      icon: '⚔️',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'metamask',
      name: 'MetaMask',
      description: 'Connect via EVM compatibility',
      icon: '🦊',
      color: 'from-orange-500 to-amber-500',
    },
  ];

  const handleConnect = (walletId: string) => {
    setSelectedWallet(walletId);
    setIsConnecting(true);

    // Simulate connection
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
      
      // Close modal after success animation
      setTimeout(() => {
        onClose();
      }, 1500);
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative glass-card rounded-3xl p-8 max-w-md w-full depth-shadow-lg"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full glass-panel flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center"
            >
              <span className="text-3xl">👛</span>
            </motion.div>
            <h2 className="text-2xl text-white mb-2">Connect Wallet</h2>
            <p className="text-white/60">Choose your preferred wallet to get started</p>
          </div>

          {/* Wallet options */}
          <div className="space-y-3 mb-6">
            {wallets.map((wallet, index) => (
              <motion.button
                key={wallet.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => !isConnecting && !isConnected && handleConnect(wallet.id)}
                disabled={isConnecting || isConnected}
                className={`w-full glass-panel rounded-2xl p-4 flex items-center gap-4 transition-all ${
                  selectedWallet === wallet.id
                    ? isConnected
                      ? 'glow-emerald ring-2 ring-emerald-500/50'
                      : 'glow-blue ring-2 ring-blue-500/50'
                    : 'hover:glow-emerald'
                } ${(isConnecting || isConnected) && selectedWallet !== wallet.id ? 'opacity-40' : ''}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${wallet.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {wallet.icon}
                </div>

                {/* Info */}
                <div className="flex-1 text-left">
                  <div className="text-white mb-1">{wallet.name}</div>
                  <div className="text-sm text-white/60">{wallet.description}</div>
                </div>

                {/* Status indicator */}
                {selectedWallet === wallet.id && (
                  <div className="flex-shrink-0">
                    {isConnecting && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 rounded-full border-2 border-blue-500 border-t-transparent"
                      />
                    )}
                    {isConnected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center"
                      >
                        <Check className="w-5 h-5 text-white" />
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Success message */}
          <AnimatePresence>
            {isConnected && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <div className="glass-panel rounded-2xl p-4 bg-emerald-500/10">
                  <div className="flex items-center justify-center gap-2 text-emerald-400">
                    <Check className="w-5 h-5" />
                    <span>Wallet connected successfully!</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info footer */}
          {!isConnected && !isConnecting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-sm text-white/40"
            >
              New to Hedera? <a href="#" className="text-emerald-400 hover:underline">Get a wallet</a>
            </motion.div>
          )}

          {/* Confetti on success */}
          {isConnected && (
            <>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    backgroundColor: ['#16a34a', '#2563eb', '#d97706'][i % 3],
                  }}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: (Math.random() - 0.5) * 300,
                    y: (Math.random() - 0.5) * 300,
                    opacity: [1, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.02,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
