import { useState } from 'react';
import { Target, Plus, TrendingUp, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  targetWeight: number;
  currentAmount: number;
  deadline: string;
  progress: number;
}

const sampleGoals: Goal[] = [
  {
    id: '1',
    name: 'Wedding Gift',
    targetAmount: 50000,
    targetWeight: 750,
    currentAmount: 15000,
    deadline: '2025-12-31',
    progress: 30
  },
  {
    id: '2',
    name: 'Emergency Fund',
    targetAmount: 100000,
    targetWeight: 1500,
    currentAmount: 42000,
    deadline: '2026-06-30',
    progress: 42
  }
];

export function GoalsTracker() {
  const { user } = useAuth();
  const [goals] = useState<Goal[]>(user ? sampleGoals : []);
  const [showNewGoal, setShowNewGoal] = useState(false);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #006039 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-10 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Target className="h-5 w-5 text-[#006039]" strokeWidth={1} />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/60 font-light">
              Investment Goals
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extralight text-[#002817] mb-6 tracking-tight"
          >
            Track Your Financial Goals
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#002817]/60 text-lg font-light max-w-3xl mx-auto leading-relaxed"
          >
            Set specific investment targets and watch your progress toward financial milestones
          </motion.p>
        </div>

        {user ? (
          <>
            {/* Goals Grid */}
            {goals.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {goals.map((goal, index) => (
                  <motion.div
                    key={goal.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-[#f5f5f7] border border-[#002817]/10 p-8 hover:border-[#006039]/40 transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#006039]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-10">
                      {/* Goal Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-light text-[#002817] mb-2">{goal.name}</h3>
                          <div className="flex items-center gap-2 text-[#002817]/50 text-sm font-light">
                            <Calendar className="h-3 w-3" strokeWidth={1} />
                            <span>Due: {new Date(goal.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 border border-[#006039]/20 flex items-center justify-center group-hover:border-[#006039]/50 transition-all bg-white">
                          <Target className="h-5 w-5 text-[#006039]" strokeWidth={1} />
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[#002817]/40 text-xs uppercase tracking-wider">Progress</span>
                          <span className="text-[#002817] text-sm font-light">{goal.progress}%</span>
                        </div>
                        <div className="h-2 bg-[#002817]/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${goal.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-[#006039] to-[#4a7c5d]"
                          />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-6">
import { SILVER_PRICE_PER_GRAM } from "@/app/constants/config";

// ...
                        <div>
                          <div className="text-[#002817]/40 text-xs uppercase tracking-wider mb-2">
                            Current
                          </div>
                          <div className="text-[#002817] text-lg font-light">
                            ₹{goal.currentAmount.toLocaleString()}
                          </div>
                          <div className="text-[#002817]/50 text-xs font-light">
                            {(goal.currentAmount / SILVER_PRICE_PER_GRAM).toFixed(0)}g silver
                          </div>
                        </div>
                        <div>
                          <div className="text-[#002817]/40 text-xs uppercase tracking-wider mb-2">
                            Target
                          </div>
                          <div className="text-[#006039] text-lg font-light">
                            ₹{goal.targetAmount.toLocaleString()}
                          </div>
                          <div className="text-[#002817]/50 text-xs font-light">
                            {goal.targetWeight}g silver
                          </div>
                        </div>
                      </div>

                      {/* Remaining */}
                      <div className="mt-6 pt-6 border-t border-[#002817]/10">
                        <div className="flex justify-between items-center">
                          <span className="text-[#002817]/60 text-sm font-light">Remaining</span>
                          <span className="text-[#002817] font-light">
                            ₹{(goal.targetAmount - goal.currentAmount).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#f5f5f7] border border-[#002817]/10 p-16 text-center mb-12"
              >
                <Award className="h-12 w-12 text-[#006039] mx-auto mb-6" strokeWidth={1} />
                <h3 className="text-2xl font-extralight text-[#002817] mb-4">No Goals Yet</h3>
                <p className="text-[#002817]/50 font-light mb-8">
                  Create your first investment goal and start tracking your progress
                </p>
              </motion.div>
            )}

            {/* Add New Goal Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                onClick={() => setShowNewGoal(true)}
                className="bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-14 px-10 transition-all duration-500 border border-[#006039]/30 inline-flex items-center gap-3"
              >
                <Plus className="h-4 w-4" strokeWidth={1} />
                Create New Goal
              </Button>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f7] border border-[#002817]/10 p-16 text-center"
          >
            <Target className="h-16 w-16 text-[#006039] mx-auto mb-8" strokeWidth={1} />
            <h3 className="text-3xl font-extralight text-[#002817] mb-4">
              Start Setting Goals Today
            </h3>
            <p className="text-[#002817]/50 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Sign in to create investment goals, track your progress, and achieve your financial milestones with silver
            </p>

            {/* Sample Goal Preview */}
            <div className="max-w-md mx-auto bg-white border border-[#002817]/10 p-8 text-left mb-10 shadow-sm relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="text-lg font-light text-[#002817] mb-2">Sample Goal</h4>
                  <div className="text-[#002817]/50 text-sm font-light">Wedding Fund • Dec 2025</div>
                </div>
                <TrendingUp className="h-5 w-5 text-[#006039]" strokeWidth={1} />
              </div>
              <div className="h-2 bg-[#002817]/10 mb-6">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "45%" }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-[#006039] to-[#4a7c5d]" 
                />
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <div className="text-[#002817]/40 mb-1">Current</div>
                  <div className="text-[#002817] font-light">₹45,000</div>
                </div>
                <div className="text-right">
                  <div className="text-[#002817]/40 mb-1">Target</div>
                  <div className="text-[#006039] font-light">₹1,00,000</div>
                </div>
              </div>
            </div>

            <Button
              className="bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-14 px-10"
            >
              Sign In to Get Started
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
