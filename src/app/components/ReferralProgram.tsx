import { useState } from 'react';
import { Gift, Users, Copy, CheckCircle, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

export function ReferralProgram() {
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);
  
  // Generate referral code based on user ID
  const referralCode = user ? `ATTICA${user.id.slice(0, 6).toUpperCase()}` : 'ATTICAXXXXXX';
  const referralLink = `https://atticasilver.com/signup?ref=${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join Attica Silver',
          text: 'Start investing in silver from just ₹10! Use my referral code and get ₹100 bonus.',
          url: referralLink
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#006039] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#006039] rounded-full blur-3xl" />
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
              <Gift className="h-5 w-5 text-[#006039]" strokeWidth={1} />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/60 font-light">
                Referral Program
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-extralight text-[#002817] mb-6 tracking-tight"
            >
              Share the Wealth
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#002817]/60 text-lg font-light leading-relaxed mb-12"
            >
              Invite friends to start their silver investment journey and earn rewards together. Everyone wins.
            </motion.p>

            {/* Benefits */}
            <div className="space-y-6">
              {[
                {
                  reward: '₹100',
                  title: 'For You',
                  description: 'Earn ₹100 bonus for each friend who invests ₹1,000+'
                },
                {
                  reward: '₹100',
                  title: 'For Your Friend',
                  description: 'They get ₹100 bonus on their first investment of ₹1,000+'
                },
                {
                  reward: 'Unlimited',
                  title: 'No Limits',
                  description: 'Refer as many friends as you want. Unlimited earning potential'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="text-[#006039] text-2xl font-extralight">{benefit.reward}</div>
                  </div>
                  <div className="flex-1 border-l border-[#002817]/10 pl-6">
                    <div className="text-[#002817] font-light mb-1">{benefit.title}</div>
                    <div className="text-[#002817]/50 text-sm font-light">{benefit.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Referral Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-[#f5f5f7] border border-[#002817]/10 p-12">
              {user ? (
                <>
                  {/* Referral Code Display */}
                  <div className="mb-8">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#002817]/40 mb-4">
                      Your Referral Code
                    </div>
                    <div className="bg-white border border-[#002817]/10 p-6 text-center">
                      <div className="text-3xl font-extralight text-[#002817] tracking-[0.2em] mb-2">
                        {referralCode}
                      </div>
                      <div className="text-[#002817]/40 text-xs font-light">
                        Share this code with friends
                      </div>
                    </div>
                  </div>

                  {/* Referral Link */}
                  <div className="mb-8">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#002817]/40 mb-4">
                      Or Share Link
                    </div>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={referralLink}
                        readOnly
                        className="flex-1 bg-white border border-[#002817]/10 text-[#002817] px-4 py-3 text-sm font-light focus:outline-none"
                      />
                      <button
                        onClick={handleCopy}
                        className="px-6 bg-[#006039] text-white hover:bg-[#004d2e] transition-all border border-[#002817]/10"
                      >
                        {copied ? (
                          <CheckCircle className="h-4 w-4" strokeWidth={1.5} />
                        ) : (
                          <Copy className="h-4 w-4" strokeWidth={1.5} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="space-y-3">
                    <Button
                      onClick={handleShare}
                      className="w-full bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-12 transition-all border border-[#002817]/10"
                    >
                      <Share2 className="h-4 w-4 mr-2" strokeWidth={1} />
                      Share with Friends
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 pt-8 border-t border-[#002817]/10">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-extralight text-[#002817] mb-1">0</div>
                        <div className="text-[#002817]/40 text-xs uppercase tracking-wider">
                          Referrals
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-extralight text-[#006039] mb-1">₹0</div>
                        <div className="text-[#002817]/40 text-xs uppercase tracking-wider">
                          Earned
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-[#006039] mx-auto mb-6" strokeWidth={1} />
                  <div className="text-[#002817] font-light mb-3">
                    Sign in to access your referral code
                  </div>
                  <div className="text-[#002817]/50 text-sm font-light mb-8">
                    Create an account to start earning rewards
                  </div>
                  <Button
                    className="bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-12 px-8"
                  >
                    Sign In Now
                  </Button>
                </div>
              )}
            </div>

            {/* Decorative Corner */}
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t border-r border-[#006039]/30" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b border-l border-[#006039]/30" />
          </motion.div>
        </div>

        {/* Terms */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-xs text-[#002817]/30 font-light"
        >
          * Referral rewards are credited after your friend's first investment of ₹1,000 or more. Terms & conditions apply.
        </motion.div>
      </div>
    </section>
  );
}
