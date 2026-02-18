import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-535ce1a9/newsletter`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({ email })
        }
      );

      if (response.ok) {
        setSuccess(true);
        setEmail('');
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#f5f5f7] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#006039] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#002817]/10 p-16 text-center shadow-lg"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 border border-[#006039]/20 mb-8"
          >
            <Mail className="h-9 w-9 text-[#006039]" strokeWidth={1} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-extralight text-[#002817] mb-6 tracking-tight"
          >
            Stay Informed
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[#002817]/60 font-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Get exclusive insights on silver market trends, investment strategies, special offers, and the latest from Attica Silver
          </motion.p>

          {/* Form */}
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#006039]/10 border border-[#006039]/30 text-[#006039] px-8 py-6 inline-flex items-center gap-3 rounded-sm"
            >
              <CheckCircle className="h-5 w-5" strokeWidth={1.5} />
              <span className="font-light">Successfully subscribed! Check your inbox.</span>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-[#f5f5f7] border border-[#002817]/10 text-[#002817] px-6 py-4 text-sm font-light focus:outline-none focus:border-[#006039] transition-colors placeholder:text-[#002817]/30"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase px-8 h-auto py-4 transition-all duration-500 border border-[#006039]/30 group whitespace-nowrap"
                >
                  {loading ? 'Subscribing...' : (
                    <>
                      Subscribe
                      <Send className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" strokeWidth={1} />
                    </>
                  )}
                </Button>
              </div>
            </motion.form>
          )}

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#002817]/40 font-light"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3" strokeWidth={1.5} />
              No spam ever
            </span>
            <span className="hidden sm:inline text-[#002817]/20">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3" strokeWidth={1.5} />
              Unsubscribe anytime
            </span>
            <span className="hidden sm:inline text-[#002817]/20">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3" strokeWidth={1.5} />
              15,000+ subscribers
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
