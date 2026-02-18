import { useState } from 'react';
import { Calculator, TrendingUp, Calendar, Activity, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { SILVER_PRICE_PER_GRAM } from "@/app/constants/config";

export function InvestmentCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [duration, setDuration] = useState(12); // months
  const [expectedReturn] = useState(8); // 8% annual return on silver
  const [showSimulation, setShowSimulation] = useState(false);
  const [simulationData, setSimulationData] = useState<any[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Standard Calculation
  const totalInvested = monthlyInvestment * duration;
  const futureValue = monthlyInvestment * (((Math.pow(1 + expectedReturn/100/12, duration) - 1) / (expectedReturn/100/12)) * (1 + expectedReturn/100/12));
  const returns = futureValue - totalInvested;
  const silverGrams = totalInvested / SILVER_PRICE_PER_GRAM;

  // Monte Carlo Simulation Logic
  const runSimulation = () => {
    setIsSimulating(true);
    setShowSimulation(true);
    
    // Simulate slight delay for "processing" effect
    setTimeout(() => {
      const iterations = 100;
      const monthlyRate = expectedReturn / 100 / 12;
      const volatility = 0.05; // 5% monthly volatility standard deviation
      
      // We will track the "Average", "Best", and "Worst" paths
      const months = Array.from({ length: duration + 1 }, (_, i) => i);
      const paths: number[][] = [];

      for (let i = 0; i < iterations; i++) {
        let currentBalance = 0;
        const path = [0];
        
        for (let m = 1; m <= duration; m++) {
          // Random return with normal distribution approximation
          const u = 1 - Math.random();
          const v = Math.random();
          const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
          const randomReturn = monthlyRate + (z * volatility);
          
          currentBalance = (currentBalance + monthlyInvestment) * (1 + randomReturn);
          path.push(currentBalance);
        }
        paths.push(path);
      }

      // Calculate aggregated data for chart
      const chartData = months.map(month => {
        const valuesAtMonth = paths.map(p => p[month]);
        const sorted = [...valuesAtMonth].sort((a, b) => a - b);
        
        // Best case (95th percentile), Worst case (5th percentile), Average
        const best = sorted[Math.floor(iterations * 0.95)];
        const worst = sorted[Math.floor(iterations * 0.05)];
        const average = valuesAtMonth.reduce((a, b) => a + b, 0) / iterations;

        return {
          month,
          best: Math.round(best),
          average: Math.round(average),
          worst: Math.round(worst),
          invested: monthlyInvestment * month
        };
      });

      setSimulationData(chartData);
      setIsSimulating(false);
    }, 800);
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#006039] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#006039] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-10 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Calculator className="h-5 w-5 text-[#006039]" strokeWidth={1} />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/60 font-light">
              Plan Your Wealth
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extralight text-[#002817] mb-6 tracking-tight"
          >
            Investment Calculator
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#002817]/60 text-lg font-light max-w-2xl mx-auto"
          >
            Discover how your regular investments can grow. Run market simulations to see potential outcomes.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f7] border border-[#002817]/10 p-10"
          >
            <div className="space-y-10">
              {/* Monthly Investment */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs uppercase tracking-[0.2em] text-[#002817]/60 font-light">
                    Monthly Investment
                  </label>
                  <span className="text-2xl font-light text-[#002817]">₹{monthlyInvestment.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-full h-1 bg-[#002817]/10 rounded-lg appearance-none cursor-pointer accent-[#006039]"
                />
                <div className="flex justify-between mt-2 text-xs text-[#002817]/30">
                  <span>₹1,000</span>
                  <span>₹50,000</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs uppercase tracking-[0.2em] text-[#002817]/60 font-light">
                    Duration
                  </label>
                  <span className="text-2xl font-light text-[#002817]">{duration} months</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="60"
                  step="3"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-1 bg-[#002817]/10 rounded-lg appearance-none cursor-pointer accent-[#006039]"
                />
                <div className="flex justify-between mt-2 text-xs text-[#002817]/30">
                  <span>3 months</span>
                  <span>60 months</span>
                </div>
              </div>

              {/* Simulation Trigger */}
              <div className="pt-6 border-t border-[#002817]/10">
                <Button 
                  onClick={runSimulation}
                  disabled={isSimulating}
                  variant="outline"
                  className="w-full border-[#006039]/30 text-[#006039] hover:bg-[#006039] hover:text-white h-12 rounded-none uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all"
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Running 100 Scenarios...
                    </>
                  ) : (
                    <>
                      <Activity className="h-4 w-4" />
                      Analyze Market Scenarios
                    </>
                  )}
                </Button>
                <div className="text-center mt-3 text-[10px] text-[#002817]/40">
                  Runs 100 Monte Carlo simulations based on historical volatility
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Area */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {showSimulation ? (
                <motion.div
                  key="simulation"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="bg-white border border-[#002817]/10 p-8 shadow-sm h-[500px] flex flex-col"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-light text-[#002817]">Market Simulation Analysis</h3>
                      <p className="text-xs text-[#002817]/50 mt-1">Projection based on 100 iterations</p>
                    </div>
                    <Button 
                      onClick={() => setShowSimulation(false)}
                      variant="ghost"
                      className="text-[#002817]/40 hover:text-[#002817]"
                    >
                      Back to Summary
                    </Button>
                  </div>

                  <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={simulationData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorBest" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#006039" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#006039" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6b9d7a" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#6b9d7a" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#000000" opacity={0.05} vertical={false} />
                        <XAxis 
                          dataKey="month" 
                          stroke="#002817" 
                          opacity={0.3} 
                          tick={{fontSize: 10}}
                          tickLine={false}
                          axisLine={false}
                          label={{ value: 'Months', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#002817', opacity: 0.5 }}
                        />
                        <YAxis 
                          stroke="#002817" 
                          opacity={0.3} 
                          tick={{fontSize: 10}}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `₹${value/1000}k`}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #e5e5e5',
                            fontSize: '12px',
                            color: '#002817'
                          }}
                          formatter={(value: number) => [`₹${value.toLocaleString()}`, '']}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="best" 
                          stackId="1" 
                          stroke="#006039" 
                          strokeWidth={1}
                          fill="url(#colorBest)" 
                          name="Best Case"
                          isAnimationActive={true}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="average" 
                          stackId="2" 
                          stroke="#6b9d7a" 
                          strokeWidth={2}
                          fill="url(#colorAvg)" 
                          name="Average"
                          isAnimationActive={true}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="invested" 
                          stackId="3" 
                          stroke="#002817" 
                          strokeDasharray="3 3"
                          strokeOpacity={0.3}
                          fill="transparent" 
                          name="Invested"
                          isAnimationActive={true}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-[#f5f5f7] border border-[#002817]/5">
                      <div className="text-[10px] uppercase text-[#002817]/40 mb-1">Conservative</div>
                      <div className="text-[#002817] font-light">₹{simulationData[duration]?.worst.toLocaleString()}</div>
                    </div>
                    <div className="p-3 bg-[#006039]/5 border border-[#006039]/10">
                      <div className="text-[10px] uppercase text-[#006039]/60 mb-1">Expected</div>
                      <div className="text-[#006039] font-medium">₹{simulationData[duration]?.average.toLocaleString()}</div>
                    </div>
                    <div className="p-3 bg-[#f5f5f7] border border-[#002817]/5">
                      <div className="text-[10px] uppercase text-[#002817]/40 mb-1">Optimistic</div>
                      <div className="text-[#002817] font-light">₹{simulationData[duration]?.best.toLocaleString()}</div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="standard"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  {/* Total Invested */}
                  <div className="bg-white border border-[#002817]/10 p-8 hover:border-[#006039]/40 transition-all shadow-sm mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="h-5 w-5 text-[#006039]" strokeWidth={1} />
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[#002817]/40">Total Invested</div>
                    </div>
                    <div className="text-4xl font-extralight text-[#002817] mb-2">
                      ₹{totalInvested.toLocaleString()}
                    </div>
                    <div className="text-sm text-[#002817]/50 font-light">
                      Over {duration} months
                    </div>
                  </div>

                  {/* Silver Accumulated */}
                  <div className="bg-white border border-[#002817]/10 p-8 hover:border-[#006039]/40 transition-all shadow-sm mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[#002817]/40">Silver Accumulated</div>
                    </div>
                    <div className="text-4xl font-extralight text-[#002817] mb-2">
                      {silverGrams.toFixed(0)}g
                    </div>
                    <div className="text-sm text-[#002817]/50 font-light">
                      ≈ {(silverGrams / 1000).toFixed(2)}kg of pure silver
                    </div>
                  </div>

                  {/* Expected Returns */}
                  <div className="bg-gradient-to-br from-[#006039]/10 to-white border border-[#006039]/20 p-8 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="h-5 w-5 text-[#006039]" strokeWidth={1} />
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[#002817]/40">Projected Value</div>
                    </div>
                    <div className="text-4xl font-extralight text-[#002817] mb-2">
                      ₹{futureValue.toFixed(0).toLocaleString()}
                    </div>
                    <div className="text-sm text-[#006039] font-light">
                      +₹{returns.toFixed(0).toLocaleString()} estimated returns
                    </div>
                  </div>

                  {/* CTA */}
                  <Button disabled className="w-full bg-[#002817]/20 text-[#002817]/40 cursor-not-allowed rounded-none tracking-[0.3em] text-[10px] uppercase h-14 transition-all duration-500 border border-[#002817]/10 flex items-center justify-center gap-2">
                    Start SIP Investment (Coming Soon)
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-xs text-[#002817]/30 font-light"
        >
          * Returns are indicative and based on historical silver price appreciation. Actual returns may vary.
          Monte Carlo simulation uses 100 iterations to project possible outcomes.
        </motion.div>
      </div>
    </section>
  );
}
