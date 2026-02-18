import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = '918000800800';
    const message = encodeURIComponent('Hi! I would like to know more about Attica Silver investment options.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-7 w-7 text-white" fill="white" strokeWidth={0} />
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-8 z-40 w-80 bg-white border border-[#002817]/10 shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Attica Silver</div>
                  <div className="text-white/80 text-xs">Typically replies instantly</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4 bg-[#f5f5f7]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-[#002817]/10 p-4 rounded-lg rounded-tl-none shadow-sm"
              >
                <div className="text-[#002817] text-sm font-light mb-2">
                  👋 Hello! Welcome to Attica Silver
                </div>
                <div className="text-[#002817]/60 text-xs font-light">
                  How can we help you today?
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full text-left bg-white hover:bg-[#002817]/5 border border-[#002817]/10 p-3 rounded-lg transition-all text-[#002817]/80 text-sm font-light shadow-sm"
                >
                  💰 Investment Information
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full text-left bg-white hover:bg-[#002817]/5 border border-[#002817]/10 p-3 rounded-lg transition-all text-[#002817]/80 text-sm font-light shadow-sm"
                >
                  📦 Track My Delivery
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full text-left bg-white hover:bg-[#002817]/5 border border-[#002817]/10 p-3 rounded-lg transition-all text-[#002817]/80 text-sm font-light shadow-sm"
                >
                  🤝 Speak to Expert
                </button>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#002817]/10 bg-white">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Start WhatsApp Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
