import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useEffect } from "react";
import logoImage from "figma:asset/c7de477d5ab92371dc03a4fb9b41f7c77638ce4b.png";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthClick: (mode: 'signin' | 'signup') => void;
  user: any;
  onDashboardClick: () => void;
}

const menuItems = [
  { label: "Home", id: "hero" },
  { label: "Our Collection", id: "collection" },
  { label: "Investment", id: "calculator" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Testimonials", id: "testimonials" },
  { label: "FAQ", id: "faq" },
];

export function NavigationMenu({ isOpen, onClose, onAuthClick, user, onDashboardClick }: NavigationMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 w-full md:w-[480px] bg-[#001a0f] z-[70] border-r border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/5">
              <img src={logoImage} alt="Attica Silver" className="h-8 object-contain opacity-90" />
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors group"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" strokeWidth={1} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-8 px-8">
              <nav className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => handleScrollTo(item.id)}
                    className="group flex items-center justify-between text-left text-2xl md:text-3xl text-white font-light tracking-wide hover:text-[#006039] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#006039]" />
                  </motion.button>
                ))}
              </nav>

              <div className="mt-12 w-full h-px bg-white/10" />

              {/* User Actions */}
              <div className="mt-12 flex flex-col gap-4">
                {user ? (
                  <button
                    onClick={() => {
                      onClose();
                      onDashboardClick();
                    }}
                    className="w-full py-4 border border-white/20 text-white uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-300"
                  >
                    My Portfolio
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => {
                        onClose();
                        onAuthClick('signin');
                      }}
                      className="py-4 border border-white/20 text-white uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onAuthClick('signup');
                      }}
                      className="py-4 bg-[#006039] text-white uppercase tracking-[0.2em] text-xs hover:bg-[#00754a] transition-all duration-300"
                    >
                      Register
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/5 bg-black/20">
              <div className="flex gap-6 mb-6">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="text-white/40 hover:text-white transition-colors">
                    <Icon className="w-5 h-5" strokeWidth={1} />
                  </a>
                ))}
              </div>
              <p className="text-white/30 text-[10px] uppercase tracking-widest">
                &copy; 2024 Attica Silver. All Rights Reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
