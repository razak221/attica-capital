import { useState } from 'react';
import { Repeat, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { useAuth } from '@/contexts/AuthContext';
import { projectId } from '/utils/supabase/info';

import { SILVER_PRICE_PER_GRAM } from "@/app/constants/config";

export function SIPSetup() {
  const { user, accessToken } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [sipData, setSipData] = useState({
    amount: '1000',
    frequency: 'monthly',
    startDate: new Date().toISOString().split('T')[0],
    duration: '12'
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please sign in to set up SIP');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-535ce1a9/setup-sip`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify(sipData)
        }
      );

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setShowForm(false);
          setSuccess(false);
        }, 3000);
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to set up SIP');
      }
    } catch (error) {
      console.error('SIP setup error:', error);
      alert('Failed to set up SIP');
    } finally {
      setSubmitting(false);
    }
  };

  const totalInvestment = parseInt(sipData.amount) * parseInt(sipData.duration);
  const expectedSilver = totalInvestment / SILVER_PRICE_PER_GRAM;

  return (
    <>
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #006039 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-10 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <Repeat className="h-5 w-5 text-[#006039]" strokeWidth={1} />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/60 font-light">
                  Systematic Investment Plan
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-extralight text-[#002817] mb-6 tracking-tight"
              >
                Automate Your Wealth
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#002817]/60 text-lg font-light leading-relaxed mb-12"
              >
                Set up recurring investments and watch your silver holdings grow automatically. Invest consistently without the effort.
              </motion.p>

              {/* Benefits */}
              <div className="space-y-6 mb-12">
                {[
                  {
                    title: 'Rupee Cost Averaging',
                    description: 'Buy more when prices are low, less when high — averaging your cost'
                  },
                  {
                    title: 'Disciplined Investing',
                    description: 'Automated investments remove emotion from decision-making'
                  },
                  {
                    title: 'Flexible & Convenient',
                    description: 'Start, pause, or modify your SIP anytime with zero penalties'
                  },
                  {
                    title: 'From ₹500/month',
                    description: 'Begin your wealth journey with small, consistent amounts'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#006039] flex-shrink-0 mt-1" strokeWidth={1} />
                    <div>
                      <div className="text-[#002817] font-light mb-1">{benefit.title}</div>
                      <div className="text-[#002817]/50 text-sm font-light">{benefit.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  disabled
                  className="bg-[#002817]/20 text-[#002817]/40 cursor-not-allowed rounded-none tracking-[0.3em] text-[10px] uppercase h-14 px-10 transition-all duration-500 border border-[#002817]/10"
                >
                  Coming Soon
                </Button>
              </motion.div>
            </div>

            {/* Right - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-[#f5f5f7] border border-[#002817]/10 p-12">
                {/* Sample SIP Card */}
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#002817]/40 mb-4">
                    Sample Plan
                  </div>
                  <div className="text-4xl font-extralight text-[#002817] mb-2">₹2,000/month</div>
                  <div className="text-[#002817]/50 text-sm font-light">12 months commitment</div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center py-4 border-b border-[#002817]/10">
                    <span className="text-[#002817]/60 text-sm font-light">Total Investment</span>
                    <span className="text-[#002817] font-light">₹24,000</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-[#002817]/10">
                    <span className="text-[#002817]/60 text-sm font-light">Expected Silver</span>
                    <span className="text-[#002817] font-light">≈ 369g</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-[#002817]/10">
                    <span className="text-[#002817]/60 text-sm font-light">Delivery Triggered</span>
                    <span className="text-[#006039] font-light">3 times (36g each)</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-[#002817]/60 text-sm font-light">Expected Return</span>
                    <span className="text-[#006039] font-light">+12% CAGR</span>
                  </div>
                </div>

                {/* Visual Timeline */}
                <div className="bg-white p-6 border border-[#002817]/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#002817]/40 mb-4">
                    Investment Timeline
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((month, idx) => (
                      <motion.div
                        key={month}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="text-[#002817]/40 text-xs w-16">Month {month}</div>
                        <div className="flex-1">
                          <div className="h-2 bg-[#f5f5f7] rounded-full overflow-hidden border border-[#002817]/5">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${month * 20}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                              className="h-full bg-gradient-to-r from-[#006039] to-[#4a7c5d]"
                            />
                          </div>
                        </div>
                        <div className="text-[#002817]/60 text-xs">₹2,000</div>
                      </motion.div>
                    ))}
                    <div className="text-[#002817]/30 text-xs pt-2">... and continues</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SIP Setup Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-[#002817]/10 max-w-2xl w-full shadow-2xl"
          >
            <div className="p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extralight text-[#002817] mb-3 tracking-tight">
                  Setup Your SIP
                </h2>
                <p className="text-[#002817]/50 text-sm font-light">
                  {user ? 'Configure your automated investment plan' : 'Please sign in to continue'}
                </p>
              </div>

              {!user ? (
                <div className="text-center py-12">
                  <div className="text-[#002817]/70 mb-6">You need to be signed in to set up a SIP</div>
                  <Button
                    onClick={() => setShowForm(false)}
                    className="bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-12 px-8"
                  >
                    Sign In First
                  </Button>
                </div>
              ) : success ? (
                <div className="bg-[#006039]/10 border border-[#006039]/20 text-[#006039] px-8 py-12 text-center">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-[#006039]" strokeWidth={1} />
                  <div className="text-lg mb-2">SIP Setup Successful!</div>
                  <div className="text-sm opacity-75">Your first investment will be processed on {sipData.startDate}</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Amount */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#002817]/60 mb-4 font-light">
                        Monthly Amount *
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#002817]/40">₹</span>
                        <input
                          type="number"
                          value={sipData.amount}
                          onChange={(e) => setSipData({...sipData, amount: e.target.value})}
                          min="500"
                          step="100"
                          required
                          className="w-full bg-[#f5f5f7] border border-[#002817]/10 text-[#002817] pl-10 pr-4 py-4 text-lg font-light focus:outline-none focus:border-[#006039] transition-colors"
                        />
                      </div>
                      <div className="mt-2 text-[#002817]/40 text-xs">Minimum ₹500</div>
                    </div>

                    {/* Frequency */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#002817]/60 mb-4 font-light">
                        Frequency
                      </label>
                      <select
                        value={sipData.frequency}
                        onChange={(e) => setSipData({...sipData, frequency: e.target.value})}
                        className="w-full bg-[#f5f5f7] border border-[#002817]/10 text-[#002817] px-4 py-4 text-lg font-light focus:outline-none focus:border-[#006039] transition-colors"
                      >
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Start Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#002817]/60 mb-4 font-light">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        value={sipData.startDate}
                        onChange={(e) => setSipData({...sipData, startDate: e.target.value})}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-[#f5f5f7] border border-[#002817]/10 text-[#002817] px-4 py-4 font-light focus:outline-none focus:border-[#006039] transition-colors"
                      />
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#002817]/60 mb-4 font-light">
                        Duration (Months)
                      </label>
                      <input
                        type="number"
                        value={sipData.duration}
                        onChange={(e) => setSipData({...sipData, duration: e.target.value})}
                        min="3"
                        max="120"
                        required
                        className="w-full bg-[#f5f5f7] border border-[#002817]/10 text-[#002817] px-4 py-4 text-lg font-light focus:outline-none focus:border-[#006039] transition-colors"
                      />
                      <div className="mt-2 text-[#002817]/40 text-xs">3-120 months</div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-[#006039]/5 border border-[#006039]/20 p-6">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#002817]/60 mb-4">Summary</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[#002817]/40 text-xs mb-1">Total Investment</div>
                        <div className="text-[#002817] text-xl font-light">₹{totalInvestment.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-[#002817]/40 text-xs mb-1">Expected Silver</div>
                        <div className="text-[#002817] text-xl font-light">≈ {expectedSilver.toFixed(0)}g</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={() => setShowForm(false)}
                      variant="outline"
                      className="flex-1 border-[#002817]/20 text-[#002817] hover:bg-[#002817] hover:text-white rounded-none tracking-[0.3em] text-[10px] uppercase h-12"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-12"
                    >
                      {submitting ? 'Setting up...' : 'Confirm SIP'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
