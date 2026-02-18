import { Shield, Award, Lock, CheckCircle, FileCheck, Building } from 'lucide-react';
import { motion } from 'motion/react';

const badges = [
  {
    icon: Shield,
    title: "BIS Hallmarked",
    description: "All silver certified by Bureau of Indian Standards"
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "256-bit SSL encryption and secure vaults"
  },
  {
    icon: Award,
    title: "LBMA Certified",
    description: "Silver sourced from London Bullion Market Association approved refineries"
  },
  {
    icon: CheckCircle,
    title: "99.9% Pure",
    description: "Guaranteed purity with certificate of authenticity"
  },
  {
    icon: FileCheck,
    title: "Fully Insured",
    description: "All stored silver insured against theft and damage"
  },
  {
    icon: Building,
    title: "SEBI Regulated",
    description: "Compliant with all regulatory requirements"
  }
];

export function TrustBadges() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Shield className="h-5 w-5 text-[#006039]" strokeWidth={1} />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/60 font-light">
              Security & Certification
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extralight text-[#002817] mb-6 tracking-tight"
          >
            Your Trust, Our Priority
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#f5f5f7] border border-[#002817]/10 p-8 hover:border-[#006039]/40 transition-all duration-500 group text-center shadow-sm hover:shadow-md"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 border border-[#002817]/10 mb-6 group-hover:border-[#006039]/50 transition-all bg-white"
              >
                <badge.icon className="h-7 w-7 text-[#006039]" strokeWidth={1} />
              </motion.div>
              
              <h3 className="text-xl font-light text-[#002817] mb-3 tracking-wide group-hover:text-[#006039] transition-colors">
                {badge.title}
              </h3>
              
              <p className="text-sm text-[#002817]/60 font-light leading-relaxed">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#002817]/10 border border-[#002817]/10"
        >
          {[
            { value: 'A+', label: 'Security Rating' },
            { value: '100%', label: 'Delivery Success' },
            { value: '24/7', label: 'Customer Support' },
            { value: '₹500Cr', label: 'Insurance Cover' }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 text-center group hover:bg-[#f5f5f7] transition-colors">
              <motion.div 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-3xl font-extralight text-[#002817] mb-2 group-hover:text-[#006039] transition-colors"
              >
                {item.value}
              </motion.div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#002817]/40">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
