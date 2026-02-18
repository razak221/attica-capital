import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TrendingUp, Shield, Zap } from 'lucide-react';

export function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.8, 0.6]);

  return (
    <section className="relative py-40 bg-[#f5f5f7] overflow-hidden">
      {/* Parallax Background Layers */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#006039] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#006039] rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-10 relative">
        {/* Main Content */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Zap className="h-5 w-5 text-[#006039]" strokeWidth={1} />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/60 font-light">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extralight text-[#002817] mb-6 tracking-tight"
          >
            Redefining Investment
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#002817]/60 text-lg font-light max-w-3xl mx-auto leading-relaxed"
          >
            A platform built on trust, transparency, and technological excellence
          </motion.p>
        </div>

        {/* Statistics with Parallax */}
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: TrendingUp,
              value: '₹250Cr+',
              label: 'Assets Under Management',
              delay: 0,
              y: y1
            },
            {
              icon: Shield,
              value: '50,000+',
              label: 'Trusted Investors',
              delay: 0.1,
              y: y2
            },
            {
              icon: Zap,
              value: '99.9%',
              label: 'Pure BIS Hallmarked Silver',
              delay: 0.2,
              y: y1
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              style={{ y: stat.y }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-white border border-[#002817]/10 p-12 text-center hover:border-[#006039]/50 transition-all duration-700 hover:shadow-2xl hover:shadow-[#002817]/10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 border border-[#002817]/10 mb-8 group-hover:border-[#006039]/50 transition-all">
                  <stat.icon className="h-9 w-9 text-[#006039]" strokeWidth={1} />
                </div>

                {/* Value */}
                <div className="text-5xl font-extralight text-[#002817] mb-4 tracking-tight">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-[#002817]/60 text-sm font-light tracking-wide">
                  {stat.label}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#006039]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
