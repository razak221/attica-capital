import { UserPlus, Wallet, TrendingUp, Package } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register",
    description: "A seamless onboarding experience. Complete verification in minutes."
  },
  {
    icon: Wallet,
    step: "02",
    title: "Invest",
    description: "Begin with ₹10. Your silver accumulates with each contribution."
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Monitor",
    description: "Real-time portfolio tracking. Transparency at every moment."
  },
  {
    icon: Package,
    step: "04",
    title: "Acquire",
    description: "Physical delivery when ready. Your investment, materialized."
  }
];

export function HowItWorks() {
  return (
    <section className="py-40 bg-[#f5f5f7] relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(to right, #002817 1px, transparent 1px), linear-gradient(to bottom, #002817 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="max-w-[1800px] mx-auto px-10 relative">
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/60 font-light">The Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extralight text-[#002817] mb-8 tracking-tight leading-[1.1]"
          >
            Four Refined Steps
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-[#006039]/40 to-transparent mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#002817]/60 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            From registration to physical acquisition in seamless elegance
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
                  style={{ transformOrigin: "left" }}
                  className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#002817]/10 to-transparent"
                />
              )}
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700">
                  <div className="p-10 border border-[#002817]/10 bg-white group-hover:border-[#006039] group-hover:shadow-2xl group-hover:shadow-[#002817]/10 transition-all duration-700 relative">
                    <step.icon className="h-11 w-11 text-[#002817]/90 group-hover:text-[#006039]" strokeWidth={0.75} />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#006039]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="text-[9px] tracking-[0.4em] text-[#006039]/50 mb-6 font-light"
                >
                  {step.step}
                </motion.div>
                
                <h3 className="text-2xl font-extralight text-[#002817] mb-5 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-[#002817]/60 leading-relaxed font-light text-sm tracking-wide">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
