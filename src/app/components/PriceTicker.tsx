import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SILVER_PRICE_PER_GRAM } from "@/app/constants/config";

const BASE_PRICE_10G = SILVER_PRICE_PER_GRAM * 10;

export function PriceTicker() {
  const [price, setPrice] = useState(BASE_PRICE_10G);
  const [previousPrice, setPreviousPrice] = useState(BASE_PRICE_10G);
  const [change, setChange] = useState(0);
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousPrice(price);
      // Simulate realistic price fluctuations
      const fluctuation = (Math.random() - 0.5) * 5; // Smaller fluctuation for 10g price
      const newPrice = Math.max(BASE_PRICE_10G * 0.98, Math.min(BASE_PRICE_10G * 1.02, price + fluctuation));
      setPrice(newPrice);
      setChange(newPrice - price);
    }, 3000);

    return () => clearInterval(interval);
  }, [price]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we are still within the Hero section (viewport height)
      // We add a buffer to transition smoothly as we exit the hero
      setIsHeroSection(window.scrollY < window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isPositive = change >= 0;
  const percentageChange = previousPrice > 0 ? (change / previousPrice) * 100 : 0;

  // Dynamic colors based on background
  const textColor = isHeroSection ? 'text-white' : 'text-[#002817]';
  
  if (!isHeroSection) return null;

  return (
    <div className="fixed top-24 right-0 z-40 px-6 py-4 transition-all duration-300">
      <div className="flex items-center gap-4">
        <div>
          <div className={`text-[9px] uppercase tracking-[0.3em] mb-1 font-light transition-colors duration-300 text-white/60`}>
            Silver 10g
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={price}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-2xl font-light transition-colors duration-300 ${textColor}`}
            >
              ₹{price.toFixed(2)}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className={`flex items-center gap-1 text-xs transition-colors duration-300 ${
          isPositive 
            ? 'text-[#4a7c5d]' 
            : 'text-[#D4AF37]'
        }`}>
          {isPositive ? (
            <TrendingUp className="h-3 w-3" strokeWidth={1.5} />
          ) : (
            <TrendingDown className="h-3 w-3" strokeWidth={1.5} />
          )}
          <span className="font-light">
            {isPositive ? '+' : ''}{percentageChange.toFixed(2)}%
          </span>
        </div>
      </div>
      
      <div className={`mt-2 text-[9px] tracking-wide transition-colors duration-300 text-white/40`}>
        Live • Updates every 3s
      </div>
    </div>
  );
}
