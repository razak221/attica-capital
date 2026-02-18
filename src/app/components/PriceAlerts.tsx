import { useState } from 'react';
import { Bell, TrendingDown, TrendingUp, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { projectId } from '/utils/supabase/info';
import { SILVER_PRICE_PER_GRAM } from "@/app/constants/config";

export function PriceAlerts() {
  const [showModal, setShowModal] = useState(false);
  const [alertData, setAlertData] = useState({
    targetPrice: '64',
    alertType: 'below',
    notification: 'email'
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, accessToken } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please sign in to set price alerts');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-535ce1a9/price-alert`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify(alertData)
        }
      );

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setShowModal(false);
          setSuccess(false);
        }, 2000);
      } else {
        alert('Failed to set price alert');
      }
    } catch (error) {
      console.error('Price alert error:', error);
      alert('Failed to set price alert');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[#006039] rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-10 relative">
          <div className="bg-[#f5f5f7] border border-[#002817]/10 p-16 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#006039]/10 border border-[#006039]/20 mb-8"
            >
              <Bell className="h-9 w-9 text-[#006039]" strokeWidth={1} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extralight text-[#002817] mb-6 tracking-tight"
            >
              Never Miss the Perfect Price
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#002817]/60 font-light mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Set custom price alerts and get notified instantly when silver reaches your target price. Buy low, invest smart.
            </motion.p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: TrendingDown,
                  title: 'Price Drop Alerts',
                  description: 'Get notified when prices fall to your target'
                },
                {
                  icon: TrendingUp,
                  title: 'Price Rise Alerts',
                  description: 'Track when silver hits your selling point'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white border border-[#002817]/10 p-6 text-left"
                >
                  <feature.icon className="h-6 w-6 text-[#006039] mb-4" strokeWidth={1} />
                  <div className="text-[#002817] font-light mb-2">{feature.title}</div>
                  <div className="text-[#002817]/50 text-sm font-light">{feature.description}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                onClick={() => setShowModal(true)}
                className="bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-14 px-10 transition-all duration-500 border border-[#006039]/30"
              >
                Setup Price Alert
              </Button>
            </motion.div>

            <div className="mt-8 text-[#002817]/30 text-xs font-light">
              {user ? 'Free for all investors' : 'Sign in to enable price alerts'}
            </div>
          </div>
        </div>
      </section>

      {/* Price Alert Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-[#002817]/10 max-w-lg w-full shadow-2xl"
            >
              <div className="p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-extralight text-[#002817] mb-2 tracking-tight">
                      Set Price Alert
                    </h3>
                    <p className="text-[#002817]/50 text-sm font-light">
                      We'll notify you when silver hits your target price
                    </p>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-[#002817]/50 hover:text-[#002817] transition-colors"
                  >
                    <X className="h-5 w-5" strokeWidth={1} />
                  </button>
                </div>

                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#006039]/10 border border-[#006039]/20 text-[#006039] px-8 py-12 text-center"
                  >
                    <CheckCircle className="h-12 w-12 mx-auto mb-4 text-[#006039]" strokeWidth={1} />
                    <div className="text-lg mb-2">Price Alert Set!</div>
                    <div className="text-sm opacity-75">We'll notify you at ₹{alertData.targetPrice}/gram</div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Current Price */}
                    <div className="bg-[#f5f5f7] border border-[#002817]/10 p-4 text-center">
                      <div className="text-[#002817]/50 text-xs uppercase tracking-wider mb-1">Current Price</div>
                      <div className="text-[#002817] text-2xl font-light">₹{SILVER_PRICE_PER_GRAM.toFixed(2)}/gram</div>
                    </div>

                    {/* Target Price */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#002817]/60 mb-4 font-light">
                        Target Price (₹/gram)
                      </label>
                      <input
                        type="number"
                        value={alertData.targetPrice}
                        onChange={(e) => setAlertData({...alertData, targetPrice: e.target.value})}
                        min="1"
                        step="0.01"
                        required
                        className="w-full bg-white border border-[#002817]/20 text-[#002817] px-4 py-4 text-xl font-light focus:outline-none focus:border-[#006039] transition-colors text-center"
                      />
                    </div>

                    {/* Alert Type */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#002817]/60 mb-4 font-light">
                        Alert When Price
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setAlertData({...alertData, alertType: 'below'})}
                          className={`p-4 border transition-all ${
                            alertData.alertType === 'below'
                              ? 'bg-[#006039]/10 border-[#006039] text-[#006039]'
                              : 'border-[#002817]/10 text-[#002817]/50 hover:border-[#002817]/20'
                          }`}
                        >
                          <TrendingDown className="h-5 w-5 mx-auto mb-2" strokeWidth={1} />
                          <div className="text-xs">Falls Below</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setAlertData({...alertData, alertType: 'above'})}
                          className={`p-4 border transition-all ${
                            alertData.alertType === 'above'
                              ? 'bg-[#006039]/10 border-[#006039] text-[#006039]'
                              : 'border-[#002817]/10 text-[#002817]/50 hover:border-[#002817]/20'
                          }`}
                        >
                          <TrendingUp className="h-5 w-5 mx-auto mb-2" strokeWidth={1} />
                          <div className="text-xs">Rises Above</div>
                        </button>
                      </div>
                    </div>

                    {/* Notification Method */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#002817]/60 mb-4 font-light">
                        Notify Me Via
                      </label>
                      <select
                        value={alertData.notification}
                        onChange={(e) => setAlertData({...alertData, notification: e.target.value})}
                        className="w-full bg-white border border-[#002817]/20 text-[#002817] px-4 py-4 font-light focus:outline-none focus:border-[#006039] transition-colors"
                      >
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                        <option value="both">Email & SMS</option>
                        <option value="push">Push Notification</option>
                      </select>
                    </div>

                    {/* Submit */}
                    <div className="flex gap-4 pt-4">
                      <Button
                        type="button"
                        onClick={() => setShowModal(false)}
                        variant="outline"
                        className="flex-1 border-[#002817]/20 text-[#002817] hover:bg-[#f5f5f7] rounded-none tracking-[0.3em] text-[10px] uppercase h-12"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={submitting || !user}
                        className="flex-1 bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-12"
                      >
                        {submitting ? 'Setting...' : 'Set Alert'}
                      </Button>
                    </div>

                    {!user && (
                      <div className="text-center text-[#D4AF37] text-xs">
                        Please sign in to set price alerts
                      </div>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
