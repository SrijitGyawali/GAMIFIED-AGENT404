import { motion } from 'motion/react';
import { ArrowRight, Trophy, Target, Zap, Coins } from 'lucide-react';

interface HeroProps {
  onConnectWallet: () => void;
  scrollY: number;
}

export function Hero({ onConnectWallet, scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="glass-panel px-4 py-2 rounded-full inline-flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-white/80">Powered by Hedera Blockchain</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl mb-6"
            >
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">
                Learn Blockchain,
              </span>
              <br />
              <span className="text-white">Earn Rewards</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/60 mb-8 max-w-lg"
            >
              Master Web3 technology through gamified quests, earn LRN tokens, and unlock exclusive NFT badges on your learning journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-white flex items-center justify-center gap-2 glow-emerald hover:glow-ring-emerald transition-all"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onConnectWallet}
                className="px-8 py-4 glass-card rounded-full text-white flex items-center justify-center gap-2 hover:glow-blue transition-all"
              >
                <span>Connect Wallet</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { label: 'Active Learners', value: '12.5K+' },
                { label: 'Quests Completed', value: '48K+' },
                { label: 'Rewards Earned', value: '$2.1M' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl text-emerald-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
            style={{ transform: `translateY(${-parallaxOffset * 0.3}px)` }}
          >
            {/* Central hub */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main central circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full glass-panel glow-emerald flex items-center justify-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-white" />
                </div>
              </motion.div>

              {/* Floating quest cards */}
              {[
                { icon: Trophy, color: 'emerald', position: 'top-0 left-1/4', delay: 0 },
                { icon: Target, color: 'blue', position: 'top-1/4 right-0', delay: 0.5 },
                { icon: Coins, color: 'amber', position: 'bottom-1/4 left-0', delay: 1 },
                { icon: Trophy, color: 'emerald', position: 'bottom-0 right-1/4', delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} float`}
                  style={{ animationDelay: `${item.delay}s` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className={`w-16 h-16 rounded-2xl glass-card glow-${item.color} flex items-center justify-center depth-shadow cursor-pointer`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                  </div>
                </motion.div>
              ))}

              {/* Orbiting particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-emerald-400/50"
                  animate={{
                    x: [0, Math.cos(i * Math.PI / 4) * 200],
                    y: [0, Math.sin(i * Math.PI / 4) * 200],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}