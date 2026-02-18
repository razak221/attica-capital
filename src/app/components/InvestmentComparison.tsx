import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Minus, ChevronRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const performanceData = [
  { year: '2020', silver: 100, gold: 100, fd: 100, snp500: 100 },
  { year: '2021', silver: 154.1, gold: 100.1, fd: 105, snp500: 116.4 },
  { year: '2022', silver: 135.7, gold: 108.3, fd: 110, snp500: 153.8 },
  { year: '2023', silver: 193.6, gold: 116.8, fd: 116, snp500: 136.3 },
  { year: '2024', silver: 235.7, gold: 130.2, fd: 122, snp500: 169.9 },
  { year: '2025', silver: 645.3, gold: 169.4, fd: 129, snp500: 219.8 },
  { year: '2026', silver: 1010.2, gold: 357.9, fd: 135, snp500: 272.8 }
];

const comparisons = [
  {
    feature: 'Entry Amount',
    silver: '₹10',
    gold: '₹500+',
    fd: '₹1,000+',
    winner: 'silver'
  },
  {
    feature: 'Annual Returns (Avg)',
    silver: '12-15%',
    gold: '8-10%',
    fd: '6-7%',
    winner: 'silver'
  },
  {
    feature: 'Physical Delivery',
    silver: 'Yes (10g+)',
    gold: 'Yes (varies)',
    fd: 'No',
    winner: 'silver'
  },
  {
    feature: 'Liquidity',
    silver: 'High',
    gold: 'High',
    fd: 'Low',
    winner: 'silver'
  },
  {
    feature: 'Tax Benefits',
    silver: 'LTCG + Indexation',
    gold: 'LTCG + Indexation',
    fd: 'Taxed as Income',
    winner: 'silver'
  },
  {
    feature: 'Storage Fees',
    silver: 'Free',
    gold: '0.5-1%/year',
    fd: 'None',
    winner: 'silver'
  },
  {
    feature: 'Inflation Hedge',
    silver: 'Excellent',
    gold: 'Excellent',
    fd: 'Poor',
    winner: 'silver'
  },
  {
    feature: 'Market Risk',
    silver: 'Moderate',
    gold: 'Low',
    fd: 'Very Low',
    winner: 'fd'
  }
];

export function InvestmentComparison() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#006039] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#006039] rounded-full blur-3xl" />
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
            <TrendingUp className="h-5 w-5 text-[#006039]" strokeWidth={1} />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/60 font-light">
              Investment Analysis
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extralight text-[#002817] mb-6 tracking-tight"
          >
            Why Silver Outperforms
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#002817]/60 text-lg font-light max-w-3xl mx-auto"
          >
            Comprehensive comparison with gold, equity, and fixed deposits — see why silver is the smart choice
          </motion.p>
        </div>

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f5f5f7] border border-[#002817]/10 p-10 mb-16"
        >
          <h3 className="text-2xl font-extralight text-[#002817] mb-8 tracking-tight">
            5-Year Performance Comparison
          </h3>
          <div className="text-xs text-[#002817]/40 mb-6 font-light">
            Base: ₹100 invested in 2020 (Indexed)
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#002817" opacity={0.1} />
              <XAxis 
                dataKey="year" 
                stroke="#002817" 
                style={{ fontSize: '12px', fontWeight: 300, opacity: 0.6 }}
              />
              <YAxis 
                stroke="#002817" 
                style={{ fontSize: '12px', fontWeight: 300, opacity: 0.6 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '0',
                  color: '#002817',
                  fontWeight: 300,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend 
                wrapperStyle={{ 
                  color: '#002817',
                  paddingTop: '20px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="silver" 
                stroke="#006039" 
                strokeWidth={3}
                name="Silver"
                dot={{ fill: '#006039', r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="gold" 
                stroke="#FFD700" 
                strokeWidth={2}
                name="Gold"
                dot={{ fill: '#FFD700', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="fd" 
                stroke="#9ca3af" 
                strokeWidth={2}
                name="Fixed Deposit"
                dot={{ fill: '#9ca3af', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="snp500" 
                stroke="#ef4444" 
                strokeWidth={2}
                name="S&P 500"
                dot={{ fill: '#ef4444', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#002817]/10 overflow-hidden shadow-sm"
        >
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-[#f5f5f7] border-b border-[#002817]/10">
            <div className="p-6 font-light text-[#002817]/60 text-xs uppercase tracking-[0.2em]">
              Parameter
            </div>
            <div className="p-6 font-light text-[#002817] text-xs uppercase tracking-[0.2em] text-center border-l border-[#002817]/10">
              <div className="flex items-center justify-center gap-2">
                <span>Silver</span>
                <span className="text-[#006039] text-lg">★</span>
              </div>
            </div>
            <div className="p-6 font-light text-[#002817]/60 text-xs uppercase tracking-[0.2em] text-center border-l border-[#002817]/10">
              Gold
            </div>
            <div className="p-6 font-light text-[#002817]/60 text-xs uppercase tracking-[0.2em] text-center border-l border-[#002817]/10">
              Fixed Deposit
            </div>
          </div>

          {/* Table Body */}
          {comparisons.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-4 border-b border-[#002817]/5 last:border-0 hover:bg-[#f5f5f7] transition-colors"
            >
              <div className="p-6 font-light text-[#002817] text-sm">
                {row.feature}
              </div>
              <div className={`p-6 font-light text-sm text-center border-l border-[#002817]/5 ${
                row.winner === 'silver' ? 'bg-[#006039]/5 text-[#006039] font-normal' : 'text-[#002817]/70'
              }`}>
                {row.silver}
              </div>
              <div className={`p-6 font-light text-sm text-center border-l border-[#002817]/5 ${
                row.winner === 'gold' ? 'bg-yellow-50 text-yellow-600 font-normal' : 'text-[#002817]/70'
              }`}>
                {row.gold}
              </div>
              <div className={`p-6 font-light text-sm text-center border-l border-[#002817]/5 ${
                row.winner === 'fd' ? 'bg-gray-50 text-gray-400 font-normal' : 'text-[#002817]/70'
              }`}>
                {row.fd}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Superior Returns',
              value: '+910%',
              description: 'Silver growth since 2020, outperforming all assets'
            },
            {
              title: 'Lowest Entry',
              value: '₹10',
              description: 'Most accessible precious metal investment'
            },
            {
              title: 'Zero Storage',
              value: '₹0',
              description: 'No annual storage fees unlike gold'
            }
          ].map((insight, index) => (
            <div key={index} className="bg-white border border-[#002817]/10 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl font-extralight text-[#006039] mb-2">{insight.value}</div>
              <div className="text-[#002817] font-light mb-2 tracking-wide">{insight.title}</div>
              <div className="text-[#002817]/50 text-xs font-light">{insight.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-xs text-[#002817]/30 font-light"
        >
          * Past performance is not indicative of future results. Data based on historical market trends. Investment decisions should be made after careful consideration.
        </motion.div>
      </div>
    </section>
  );
}
