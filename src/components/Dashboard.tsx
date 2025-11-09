import { motion } from 'motion/react';
import { Trophy, Coins, Award, TrendingUp, Flame, Target, CheckCircle2, Clock } from 'lucide-react';
import { StatsCard } from './StatsCard';

interface DashboardProps {
  scrollY: number;
}

export function Dashboard({ scrollY }: DashboardProps) {
  const parallaxOffset = scrollY * 0.1;

  return (
    <section id="dashboard" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Your Learning <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Dashboard</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Track your progress, manage quests, and watch your rewards grow
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <StatsCard icon={Target} label="Skill Points" value={2847} suffix="SP" color="emerald" delay={0} />
          <StatsCard icon={Coins} label="LRN Tokens" value={1523} suffix="LRN" color="amber" delay={0.1} />
          <StatsCard icon={Award} label="Badges Earned" value={24} color="blue" delay={0.2} />
          <StatsCard icon={TrendingUp} label="Global Rank" value={342} suffix="" color="purple" delay={0.3} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Active Quest */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card rounded-3xl p-8 depth-shadow"
            style={{
              background: 'rgba(30, 41, 59, 0.6)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl text-white">Active Quest</h3>
              <div className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>2h 34m remaining</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center glow-emerald flex-shrink-0">
                  <Target className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-white mb-2">Smart Contract Fundamentals</h4>
                  <p className="text-white/60 mb-4">
                    Learn the basics of Hedera smart contracts and deploy your first dApp
                  </p>
                  
                  {/* Progress */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/80">Progress</span>
                      <span className="text-emerald-400">75%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="space-y-3">
                    {[
                      { label: 'Watch Introduction Video', completed: true },
                      { label: 'Complete Interactive Tutorial', completed: true },
                      { label: 'Deploy Test Contract', completed: true },
                      { label: 'Pass Final Quiz', completed: false },
                    ].map((task, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          task.completed 
                            ? 'bg-emerald-500/20 text-emerald-400' 
                            : 'bg-white/10 text-white/40'
                        }`}>
                          {task.completed && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                        <span className={task.completed ? 'text-white/80 line-through' : 'text-white'}>
                          {task.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rewards */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-white/60">Quest Rewards</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-400">+250 LRN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400">NFT Badge</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl text-white hover:glow-emerald transition-all"
              >
                Continue Quest
              </motion.button>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Streak */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6 depth-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-white">Daily Streak</h3>
                <Flame className="w-6 h-6 text-amber-400 pulse-glow" />
              </div>
              
              <div className="text-center mb-6">
                <div className="text-5xl mb-2">🔥</div>
                <div className="text-4xl text-white mb-1">7</div>
                <div className="text-sm text-white/60">Days in a row!</div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg ${
                      i < 7 
                        ? 'bg-gradient-to-br from-amber-500/30 to-orange-500/30 glow-gold' 
                        : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Quick Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-3xl p-6 depth-shadow"
            >
              <h3 className="text-lg text-white mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                {[
                  { icon: '🏆', label: 'First Quest', color: 'emerald' },
                  { icon: '⚡', label: 'Speed Learner', color: 'blue' },
                  { icon: '🎯', label: 'Perfect Score', color: 'amber' },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-${achievement.color}-500/20 flex items-center justify-center`}>
                      <span className="text-xl">{achievement.icon}</span>
                    </div>
                    <span className="text-white/80">{achievement.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}