import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from "figma:asset/c7de477d5ab92371dc03a4fb9b41f7c77638ce4b.png";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          {/* Animated Background Gradient */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, #f5f5f7 0%, #ffffff 50%)',
                'radial-gradient(circle at 80% 50%, #f5f5f7 0%, #ffffff 50%)',
                'radial-gradient(circle at 20% 50%, #f5f5f7 0%, #ffffff 50%)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 opacity-50"
          />

          <div className="relative text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12"
            >
              <motion.img
                animate={{
                  filter: [
                    'brightness(1) drop-shadow(0 0 20px rgba(0, 96, 57, 0.1))',
                    'brightness(1.1) drop-shadow(0 0 40px rgba(0, 96, 57, 0.2))',
                    'brightness(1) drop-shadow(0 0 20px rgba(0, 96, 57, 0.1))',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                src={logoImage}
                alt="Attica Silver"
                className="h-24 mx-auto object-contain filter invert contrast-150"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-extralight text-[#002817] tracking-[0.3em] uppercase mb-2">
                Attica Silver
              </h2>
              <p className="text-[#002817]/40 text-xs tracking-[0.2em] uppercase font-light">
                Loading Excellence
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-64 mx-auto"
            >
              <div className="h-px bg-[#002817]/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#006039] to-[#4a7c5d]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="mt-3 text-[#002817]/30 text-xs font-light tracking-wider">
                {progress}%
              </div>
            </motion.div>

            {/* Animated Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center gap-2 mt-8"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-1.5 h-1.5 bg-[#006039] rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
