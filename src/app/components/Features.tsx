import { Coins, TrendingUp, Package, Truck, ShoppingCart, Smartphone } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Coins,
    title: "Micro-Investment",
    description: "Begin your journey with as little as ₹10. Luxury investment, accessible to all."
  },
  {
    icon: TrendingUp,
    title: "Fractional Ownership",
    description: "Accumulate pure silver digitally. Investment without boundaries."
  },
  {
    icon: Package,
    title: "Certified Bars",
    description: "99.9% pure silver bars. Certified quality, delivered with precision."
  },
  {
    icon: Truck,
    title: "White Glove Delivery",
    description: "Secure delivery to your doorstep. Every detail perfected."
  },
  {
    icon: ShoppingCart,
    title: "Bespoke Solutions",
    description: "Tailored bulk orders for discerning investors and businesses."
  },
  {
    icon: Smartphone,
    title: "Digital Experience",
    description: "Manage your portfolio seamlessly. Excellence at your fingertips."
  }
];

export function Features() {
  return (
    <section id="features" className="py-40 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#006039_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />
      
      <div className="max-w-[1800px] mx-auto px-10 relative">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/80 font-medium">Attica Difference</span>
            <div className="w-px h-8 bg-[#006039]/20" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extralight text-[#002817] mb-8 tracking-tight leading-[1.1]"
          >
            Exceptional by Design
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#002817]/60 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Where tradition meets innovation in precious metal investment
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-20 h-20 rounded-full bg-[#f5f5f7] flex items-center justify-center group-hover:bg-[#006039] transition-colors duration-500"
                  >
                    <feature.icon className="h-8 w-8 text-[#002817] group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                  </motion.div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full border border-[#006039]/0 group-hover:border-[#006039]/20 group-hover:scale-125 transition-all duration-700" />
                </div>
                
                <h3 className="text-2xl font-light text-[#002817] mb-4 tracking-wide group-hover:text-[#006039] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <div className="w-8 h-px bg-[#002817]/10 mb-6 group-hover:w-16 group-hover:bg-[#006039]/30 transition-all duration-500" />
                
                <p className="text-[#002817]/60 leading-relaxed font-light text-sm tracking-wide max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
