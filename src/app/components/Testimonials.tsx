import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    rating: 5,
    text: "Started with just ₹500 monthly investment. In 2 years, I've accumulated over 150g of silver. The auto-delivery at 10g is brilliant!",
    investment: "₹12,000",
    silver: "184g"
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    rating: 5,
    text: "The platform is incredibly user-friendly. I love tracking my portfolio and seeing my silver holdings grow. Much better than keeping cash!",
    investment: "₹25,000",
    silver: "385g"
  },
  {
    name: "Amit Patel",
    role: "Jeweler",
    location: "Surat",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    rating: 5,
    text: "As a jeweler, I needed a reliable source for bulk silver. Attica Silver's enterprise solutions and competitive pricing are unmatched.",
    investment: "₹5,00,000",
    silver: "7.7kg"
  },
  {
    name: "Sneha Reddy",
    role: "Doctor",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    rating: 5,
    text: "I was skeptical about digital silver investment, but the physical delivery option and certifications gave me confidence. Highly recommended!",
    investment: "₹18,000",
    silver: "277g"
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    rating: 5,
    text: "The mobile app makes investing seamless. I can invest anytime, anywhere. The transparency and security are top-notch.",
    investment: "₹35,000",
    silver: "538g"
  },
  {
    name: "Meera Iyer",
    role: "Teacher",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 5,
    text: "Perfect for small investors like me. Starting from ₹10 is amazing! I'm building wealth slowly but surely.",
    investment: "₹6,500",
    silver: "100g"
  }
];

export function Testimonials() {
  return (
    <section className="py-40 bg-[#f5f5f7] relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-10 relative">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/80 font-medium">Trusted by Thousands</span>
            <div className="w-px h-8 bg-[#006039]/20" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extralight text-[#002817] mb-8 tracking-tight"
          >
            Stories of Wealth
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#002817]/60 text-lg font-light max-w-2xl mx-auto"
          >
            Real investors, real results — see how Attica Silver is transforming financial futures
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-10 hover:shadow-xl hover:shadow-[#002817]/5 transition-all duration-500 group relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#006039] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-[#006039]/10 mb-8 group-hover:text-[#006039]/20 transition-colors" strokeWidth={1} />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 text-[#006039] fill-[#006039]"
                    strokeWidth={1}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#002817]/70 font-light leading-relaxed mb-8 text-sm tracking-wide">
                "{testimonial.text}"
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-[#002817]/5">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#002817]/40 mb-2">
                    Invested
                  </div>
                  <div className="text-[#002817] font-light text-lg">{testimonial.investment}</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#002817]/40 mb-2">
                    Silver Owned
                  </div>
                  <div className="text-[#002817] font-light text-lg">{testimonial.silver}</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <div className="text-[#002817] font-light tracking-wide">{testimonial.name}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#002817]/40 mt-1">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
