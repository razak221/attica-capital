import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I start investing in silver with Attica Silver?",
        a: "Getting started is simple! Sign up for a free account, complete your KYC verification, and you can start investing from as low as ₹10. You can make one-time investments or set up recurring monthly investments (SIP)."
      },
      {
        q: "What is the minimum investment amount?",
        a: "You can start investing with just ₹10. There's no maximum limit, and you can invest any amount that suits your financial goals."
      },
      {
        q: "Is my investment safe and secure?",
        a: "Absolutely. We use bank-grade 256-bit SSL encryption, and all silver is stored in fully insured vaults with 24/7 security. Your investments are also backed by government-certified hallmarked silver."
      }
    ]
  },
  {
    category: "Delivery & Storage",
    questions: [
      {
        q: "When do I receive physical silver delivery?",
        a: "Physical delivery is automatically triggered when your accumulated silver reaches 10 grams. You'll receive authenticated, hallmarked 99.9% pure silver bars with tamper-proof packaging and certificates."
      },
      {
        q: "How long does delivery take?",
        a: "Standard delivery takes 3-5 business days across India. We also offer express delivery (1-2 days) for premium customers. All deliveries are fully insured and trackable."
      },
      {
        q: "Can I store silver in the vault instead of taking delivery?",
        a: "Yes! You can choose to keep your silver in our secure vault facility for free. This is ideal if you want to accumulate more silver before taking delivery or prefer vault storage for security."
      }
    ]
  },
  {
    category: "Pricing & Charges",
    questions: [
      {
        q: "What are the charges and fees?",
        a: "We charge a nominal 3% making charge on delivery. There are zero storage fees, zero account maintenance fees, and no hidden charges. What you invest is what you get in silver."
      },
      {
        q: "How is the silver price determined?",
        a: "Our prices are based on real-time international silver prices (COMEX/MCX) with transparent pricing. You can see live price updates on our website and app."
      },
      {
        q: "Can I sell my silver back to Attica Silver?",
        a: "Yes, we offer a buyback facility at prevailing market rates. You can sell your digital silver instantly or send back physical silver bars for buyback."
      }
    ]
  },
  {
    category: "Tax & Legal",
    questions: [
      {
        q: "What are the tax implications?",
        a: "Silver investment held for more than 36 months qualifies for long-term capital gains tax at 20% with indexation benefits. Short-term gains are taxed as per your income slab. We provide detailed tax statements for easy filing."
      },
      {
        q: "Is Attica Silver regulated?",
        a: "Yes, we comply with all SEBI, RBI, and FEMA regulations. All our silver is sourced from LBMA-certified refineries and is fully hallmarked by BIS-certified agencies."
      },
      {
        q: "What documents do I receive?",
        a: "You receive: Invoice for every purchase, Certificate of Authenticity, BIS Hallmark Certificate, Delivery challan, and detailed monthly statements for your records."
      }
    ]
  }
];

export function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>("Getting Started");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenQuestion(null);
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <HelpCircle className="h-5 w-5 text-[#006039]" strokeWidth={1} />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/60 font-light">
              Your Questions Answered
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extralight text-[#002817] mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#002817]/60 text-lg font-light max-w-2xl mx-auto"
          >
            Everything you need to know about investing in silver with Attica Silver
          </motion.p>
        </div>

        <div className="space-y-6">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-[#f5f5f7] border border-[#002817]/10"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.category)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-[#002817]/5 transition-colors"
              >
                <span className="text-xl font-light text-[#002817] tracking-wide">
                  {category.category}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-[#002817]/40 transition-transform ${
                    openCategory === category.category ? 'rotate-180' : ''
                  }`}
                  strokeWidth={1}
                />
              </button>

              {/* Questions */}
              <AnimatePresence>
                {openCategory === category.category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#002817]/10">
                      {category.questions.map((item, qIndex) => (
                        <div key={qIndex} className="border-b border-[#002817]/5 last:border-0">
                          <button
                            onClick={() => toggleQuestion(item.q)}
                            className="w-full px-8 py-5 flex items-start justify-between hover:bg-[#002817]/5 transition-colors text-left"
                          >
                            <span className="text-[#002817]/80 font-light pr-4">
                              {item.q}
                            </span>
                            <ChevronDown
                              className={`h-4 w-4 text-[#002817]/40 flex-shrink-0 mt-1 transition-transform ${
                                openQuestion === item.q ? 'rotate-180' : ''
                              }`}
                              strokeWidth={1}
                            />
                          </button>

                          <AnimatePresence>
                            {openQuestion === item.q && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="px-8 pb-6 text-[#002817]/60 font-light leading-relaxed">
                                  {item.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-[#006039]/5 border border-[#006039]/20 p-10 inline-block">
            <div className="text-[#002817] font-light mb-4">
              Still have questions?
            </div>
            <div className="text-[#002817]/50 text-sm font-light mb-6">
              Our customer support team is here to help you
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@atticasilver.com"
                className="text-[#006039] hover:text-[#002817] transition-colors text-sm font-light tracking-wide"
              >
                support@atticasilver.com
              </a>
              <span className="text-[#002817]/20 hidden sm:inline">|</span>
              <a
                href="tel:+918000800800"
                className="text-[#006039] hover:text-[#002817] transition-colors text-sm font-light tracking-wide"
              >
                +91 8000 800 800
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
