import { Award, Trophy, Star, Target } from 'lucide-react';
import { motion } from 'motion/react';

const awards = [
  {
    year: '2025',
    title: 'Best Fintech Startup',
    organization: 'Economic Times',
    icon: Trophy,
    color: 'from-yellow-600 to-yellow-800'
  },
  {
    year: '2024',
    title: 'Innovation in Precious Metals',
    organization: 'FICCI India',
    icon: Star,
    color: 'from-[#6b9d7a] to-[#4a7c5d]'
  },
  {
    year: '2024',
    title: 'Customer Choice Award',
    organization: 'Business Today',
    icon: Target,
    color: 'from-blue-600 to-blue-800'
  },
  {
    year: '2024',
    title: 'Excellence in Digital Banking',
    organization: 'IAMAI',
    icon: Award,
    color: 'from-purple-600 to-purple-800'
  }
];

const press = [
  {
    outlet: 'Economic Times',
    logo: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=80&fit=crop',
    quote: '"Revolutionizing precious metal investment for the masses"'
  },
  {
    outlet: 'Business Standard',
    logo: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=200&h=80&fit=crop',
    quote: '"A game-changer in the silver investment space"'
  },
  {
    outlet: 'Forbes India',
    logo: 'https://images.unsplash.com/photo-1504711331083-9c895941bf81?w=200&h=80&fit=crop',
    quote: '"Making wealth accessible from just ₹10"'
  },
  {
    outlet: 'Mint',
    logo: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=200&h=80&fit=crop',
    quote: '"Setting new standards in transparency and trust"'
  }
];

const certifications = [
  'ISO 27001:2013 Certified',
  'PCI DSS Compliant',
  'SOC 2 Type II',
  'GDPR Compliant',
  'BIS Hallmarked',
  'LBMA Approved'
];

export function Awards() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#006039] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#006039] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-10 relative">
        {/* Awards Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Trophy className="h-5 w-5 text-[#006039]" strokeWidth={1} />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/60 font-light">
              Recognition & Trust
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extralight text-[#002817] mb-6 tracking-tight"
          >
            Award-Winning Excellence
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#002817]/60 text-lg font-light max-w-2xl mx-auto"
          >
            Recognized by industry leaders for innovation, trust, and customer excellence
          </motion.p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#f5f5f7] border border-[#002817]/10 p-8 hover:border-[#006039]/40 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-[#002817]/10 group-hover:border-[#006039]/50 transition-all">
                    <award.icon className="h-7 w-7 text-[#006039]" strokeWidth={1} />
                  </div>
                </div>

                {/* Year */}
                <div className="text-[#006039] text-xs uppercase tracking-[0.3em] mb-3 font-light">
                  {award.year}
                </div>

                {/* Title */}
                <h3 className="text-xl font-light text-[#002817] mb-4 leading-tight">
                  {award.title}
                </h3>

                {/* Organization */}
                <div className="text-[#002817]/40 text-xs uppercase tracking-wider">
                  {award.organization}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Mentions */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-extralight text-[#002817] mb-4 tracking-tight">
              Featured In
            </h3>
            <p className="text-[#002817]/50 font-light">
              Leading publications trust and recommend Attica Silver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {press.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f5f5f7] border border-[#002817]/10 p-8 hover:border-[#006039]/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 h-16 bg-white border border-[#002817]/10 flex items-center justify-center overflow-hidden">
                    <img 
                      src={item.logo} 
                      alt={item.outlet}
                      className="w-full h-full object-cover opacity-60 grayscale"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#002817]/90 text-xs uppercase tracking-[0.2em] mb-3 font-light">
                      {item.outlet}
                    </div>
                    <p className="text-[#002817]/60 font-light italic text-sm leading-relaxed">
                      {item.quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#006039]/5 border border-[#006039]/20 p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extralight text-[#002817] mb-3 tracking-tight">
              Certifications & Compliance
            </h3>
            <p className="text-[#002817]/50 text-sm font-light">
              Meeting the highest global standards for security and quality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[#002817]/10 p-4 text-center hover:border-[#006039]/40 transition-all"
              >
                <div className="w-8 h-8 border border-[#002817]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-4 w-4 text-[#006039]" strokeWidth={1} />
                </div>
                <div className="text-[#002817]/70 text-xs font-light leading-tight">
                  {cert}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
