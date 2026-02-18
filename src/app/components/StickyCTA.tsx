import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '@/contexts/AuthContext';

interface StickyCTAProps {
  onInvestClick: () => void;
}

export function StickyCTA({ onInvestClick }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 800px
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#002817]/10 backdrop-blur-md shadow-[0_-5px_30px_rgba(0,0,0,0.05)]"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsDismissed(true)}
            className="absolute top-2 right-2 p-2 text-[#002817]/30 hover:text-[#002817] transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="max-w-7xl mx-auto px-10 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Left - Message */}
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-12 h-12 border border-[#002817]/10 items-center justify-center bg-[#f5f5f7]">
                  <TrendingUp className="h-6 w-6 text-[#006039]" strokeWidth={1} />
                </div>
                <div>
                  <div className="text-[#002817] font-light text-sm sm:text-base tracking-wide">
                    {user ? 'Ready to grow your portfolio?' : 'Start Your Silver Investment Journey'}
                  </div>
                  <div className="text-[#002817]/60 text-xs font-light">
                    Invest from just ₹10 • Get physical delivery at 10g
                  </div>
                </div>
              </div>

              {/* Right - CTA */}
              <button
                onClick={onInvestClick}
                className="group flex items-center gap-3 bg-[#006039] text-white px-8 py-3 hover:bg-[#004d2e] transition-all duration-300 whitespace-nowrap shadow-lg shadow-[#006039]/20"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-medium">
                  {user ? 'Invest Now' : 'Get Started'}
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
