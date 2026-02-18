import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Shield, Zap, Award, Clock, Lock, TrendingUp } from 'lucide-react';
import { useState, useRef } from 'react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="relative cursor-pointer"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-[#006039]/20 to-[#001a0e] border border-[#4a7c5d]/30 p-10 h-full relative overflow-hidden"
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        {/* Glossy Overlay */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.1 : 0
          }}
          className="absolute inset-0 bg-gradient-to-br from-white to-transparent"
          style={{ transform: "translateZ(20px)" }}
        />

        {/* Icon */}
        <motion.div
          style={{ transform: "translateZ(50px)" }}
          className="inline-flex items-center justify-center w-16 h-16 border border-[#4a7c5d]/30 mb-8"
        >
          <Icon className="h-7 w-7 text-[#6b9d7a]" strokeWidth={1} />
        </motion.div>

        {/* Content */}
        <motion.div style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-xl font-light text-white mb-4 tracking-wide">
            {title}
          </h3>
          <p className="text-white/50 text-sm font-light leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Shine Effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.15 : 0,
            x: isHovered ? "100%" : "-100%"
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
        />
      </motion.div>
    </motion.div>
  );
}

export function PremiumFeatures() {
  const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: '256-bit encryption, multi-factor authentication, and ISO 27001 certified infrastructure protecting your investments'
    },
    {
      icon: Zap,
      title: 'Instant Transactions',
      description: 'Lightning-fast investment processing with real-time portfolio updates and instant delivery triggers'
    },
    {
      icon: Award,
      title: 'Certified Purity',
      description: '99.9% pure BIS hallmarked silver bars with complete authenticity certificates and traceability'
    },
    {
      icon: Clock,
      title: '24/7 Trading',
      description: 'Invest anytime, anywhere with round-the-clock market access and automated SIP executions'
    },
    {
      icon: Lock,
      title: 'Secure Vaulting',
      description: 'Free secure storage in state-of-the-art vaults with comprehensive insurance coverage'
    },
    {
      icon: TrendingUp,
      title: 'Smart Analytics',
      description: 'Advanced portfolio insights, performance tracking, and AI-powered investment recommendations'
    }
  ];

  return (
    <section className="py-40 bg-gradient-to-b from-[#001a0e] via-[#002817] to-[#001a0e] relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6b9d7a] rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#006039] rounded-full blur-3xl opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-10 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Award className="h-5 w-5 text-[#6b9d7a]" strokeWidth={1} />
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-light">
              Premium Platform
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extralight text-white mb-6 tracking-tight"
          >
            Enterprise-Grade Excellence
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg font-light max-w-3xl mx-auto leading-relaxed"
          >
            Technology and security that sets new standards in precious metal investment
          </motion.p>
        </div>

        {/* 3D Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-white/30 text-sm font-light italic">
            "The most advanced silver investment platform in India"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
