import { Menu, Search, MapPin, ChevronRight, TrendingUp } from "lucide-react";
import logoImage from "figma:asset/c7de477d5ab92371dc03a4fb9b41f7c77638ce4b.png";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Auth } from "@/app/components/Auth";
import { EnhancedDashboard } from "@/app/components/EnhancedDashboard";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { StickyCTA } from "@/app/components/StickyCTA";
import { NavigationMenu } from "@/app/components/NavigationMenu";
import { SILVER_PRICE_PER_GRAM } from "@/app/constants/config";

const heroImages = [
  "https://images.unsplash.com/photo-1641324113377-969d83f8bd20?q=80&w=2070&auto=format&fit=crop", // Silver Bars
  "https://images.unsplash.com/photo-1766340744390-b13d21439515?q=80&w=2070&auto=format&fit=crop", // Liquid Silver
  "https://images.unsplash.com/photo-1692607520918-7d8bb85e7e64?q=80&w=2070&auto=format&fit=crop"  // Abstract Luxury
];

const BASE_PRICE_10G = SILVER_PRICE_PER_GRAM * 10;

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAuth, setShowAuth] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();
  const { scrollY } = useScroll();
  
  // Live Price State
  const [price, setPrice] = useState(BASE_PRICE_10G);
  const [previousPrice, setPreviousPrice] = useState(BASE_PRICE_10G);
  const [change, setChange] = useState(0);

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(timer);
  }, []);

  // Price Fluctuation Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousPrice(price);
      // Simulate realistic price fluctuations
      const fluctuation = (Math.random() - 0.5) * 5; 
      const newPrice = Math.max(BASE_PRICE_10G * 0.98, Math.min(BASE_PRICE_10G * 1.02, price + fluctuation));
      setPrice(newPrice);
      setChange(newPrice - price);
    }, 3000);

    return () => clearInterval(interval);
  }, [price]);

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  return (
    <>
      {/* Dynamic Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-[#006039]/95 text-white backdrop-blur-md py-3 border-[#006039]" 
            : "bg-transparent text-white py-6 border-white/10"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10">
          {/* Left - Menu */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setShowMenu(true)}
              className="flex items-center gap-3 hover:opacity-70 transition-all duration-300 group"
            >
              <Menu className="h-5 w-5 group-hover:rotate-90 transition-transform duration-500" strokeWidth={1} />
              <span className="text-xs tracking-[0.2em] uppercase font-light hidden sm:inline">Menu</span>
            </button>
            
            {/* Live Price in Header (Only when scrolled) */}
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="hidden md:flex items-center gap-4 pl-6 border-l border-white/20"
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-white/60">Silver 10g</span>
                    <div className="flex items-center gap-2">
                      <span className="font-light tracking-wide">₹{price.toFixed(2)}</span>
                      <span className={`text-[10px] ${change >= 0 ? 'text-[#4a7c5d]' : 'text-[#D4AF37]'}`}>
                        {change >= 0 ? '+' : ''}{((change / previousPrice) * 100).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          >
            <img src={logoImage} alt="Attica Silver" className="h-10 md:h-14 object-contain opacity-95 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Right - Icons */}
          <div className="flex items-center gap-4 md:gap-8">
            <button className="flex items-center gap-2 hover:opacity-70 transition-all duration-300">
              <Search className="h-4 w-4" strokeWidth={1} />
              <span className="text-xs tracking-[0.2em] uppercase font-light hidden lg:inline">Search</span>
            </button>
            <button className="flex items-center gap-2 hover:opacity-70 transition-all duration-300 hidden md:flex">
              <MapPin className="h-4 w-4" strokeWidth={1} />
              <span className="text-xs tracking-[0.2em] uppercase font-light hidden lg:inline">Store locator</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#001a0f]">
        {/* Cinematic Background Images */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.1 }} // Ken Burns Effect: Scale up
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5 },
              scale: { duration: 10, ease: "linear" } 
            }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={heroImages[currentImageIndex]} 
              alt="Luxury Silver Background" 
              className="w-full h-full object-cover"
            />
            {/* Sophisticated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70" />
            <div className="absolute inset-0 bg-[#002817]/30 mix-blend-multiply" /> {/* Rich Green Tint */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Decorative Lines */}
        <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent z-10 hidden lg:block" />
        <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent z-10 hidden lg:block" />

        {/* Hero Content */}
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-20 text-center px-6 max-w-6xl mx-auto mt-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex flex-col items-center gap-4">
              <span className="text-white/80 text-[10px] tracking-[0.5em] uppercase font-light">
                Est. 2024 • Excellence in Metals
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>
          </motion.div>
          
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl text-white tracking-[-0.03em] font-extralight leading-[0.9] drop-shadow-2xl"
            >
              PURE SILVER
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-12">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl text-[#d4d4d4] tracking-[0.2em] font-thin uppercase drop-shadow-lg"
            >
              Investment Grade Bars
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              {!user ? (
                <button
                  onClick={() => {
                    const el = document.getElementById('collection');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative inline-flex items-center gap-4 px-12 py-4 bg-[#006039] overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(0,96,57,0.5)]"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative text-xs tracking-[0.3em] uppercase font-medium text-white z-10">Buy Silver Bars</span>
                  <ChevronRight className="relative h-3 w-3 text-white group-hover:translate-x-1 transition-transform duration-300 z-10" strokeWidth={1} />
                </button>
              ) : (
                <button
                  onClick={() => setShowDashboard(true)}
                  className="group relative inline-flex items-center gap-4 px-12 py-4 bg-[#006039] overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(0,96,57,0.5)]"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative text-xs tracking-[0.3em] uppercase font-medium text-white z-10">View Portfolio</span>
                  <ChevronRight className="relative h-3 w-3 text-white group-hover:translate-x-1 transition-transform duration-300 z-10" strokeWidth={1} />
                </button>
              )}

              <button
                onClick={() => {
                  const el = document.getElementById('collection');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-4 px-12 py-4 border border-white/20 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-xs tracking-[0.3em] uppercase font-medium text-white">Explore</span>
              </button>
            </div>
            
            <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-light max-w-md leading-relaxed">
              Premium Silver Bars • Secure Storage • Physical Delivery
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-light">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-full h-1/2 bg-white"
                animate={{ top: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Auth Modal */}
      {showAuth && (
        <Auth
          onClose={() => setShowAuth(false)}
          initialMode={authMode}
        />
      )}
      
      {/* Navigation Menu */}
      <NavigationMenu
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        onAuthClick={handleAuthClick}
        user={user}
        onDashboardClick={() => setShowDashboard(true)}
      />

      {/* Dashboard Modal */}
      {showDashboard && user && (
        <EnhancedDashboard onClose={() => setShowDashboard(false)} />
      )}

      {/* Sticky CTA */}
      <StickyCTA 
        onInvestClick={() => {
          if (user) {
            setShowDashboard(true);
          } else {
            handleAuthClick('signup');
          }
        }}
      />
    </>
  );
}
