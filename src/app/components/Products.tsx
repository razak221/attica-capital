import { Button } from "@/app/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Auth } from "@/app/components/Auth";
import { projectId } from '/utils/supabase/info';
import { motion } from "motion/react";
import silverBar10g from "figma:asset/490d58609b18c4e4e69844f5d50c1d5b71ef6df0.png";
import silverBar50g from "figma:asset/9158faeb4b19f0b059565a1eb683a2c552fc5197.png";
import silverBar100g from "figma:asset/f61a3922d4958159ce35538600cd168b50b7603e.png";
import silverBar1kg from "figma:asset/5605dd54bab63476ae58b777d42c0547e7401b83.png";
import { SILVER_PRICE_PER_GRAM } from "@/app/constants/config";

const calculatePrice = (grams: number) => grams * SILVER_PRICE_PER_GRAM;
const formatPrice = (price: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

const products = [
  {
    weight: "10g",
    price: formatPrice(calculatePrice(10)),
    priceValue: calculatePrice(10),
    popular: false,
    image: silverBar10g,
    features: ["99.9% Pure Silver", "Certified Authenticity", "Premium Packaging", "Complimentary Delivery"],
    comingSoon: false
  },
  {
    weight: "50g",
    price: formatPrice(calculatePrice(50)),
    priceValue: calculatePrice(50),
    popular: true,
    image: silverBar50g,
    features: ["99.9% Pure Silver", "Certified Authenticity", "Tamper-proof Seal", "Complimentary Delivery", "Priority Service"],
    comingSoon: false
  },
  {
    weight: "100g",
    price: formatPrice(calculatePrice(100)),
    priceValue: calculatePrice(100),
    popular: false,
    image: silverBar100g,
    features: ["99.9% Pure Silver", "Certified Authenticity", "Tamper-proof Seal", "Complimentary Delivery", "Dedicated Support"],
    comingSoon: false
  },
  {
    weight: "1kg",
    price: formatPrice(calculatePrice(1000)),
    priceValue: calculatePrice(1000),
    popular: false,
    image: silverBar1kg,
    features: ["99.9% Pure Silver", "Certified Authenticity", "Vault Packaging", "White Glove Delivery", "Concierge Service"],
    comingSoon: false
  },
  {
    weight: "Digital Silver",
    price: "Starts @ ₹10",
    priceValue: 10,
    popular: false,
    image: "figma:asset/490d58609b18c4e4e69844f5d50c1d5b71ef6df0.png",
    features: ["Fractional Ownership", "Instant Liquidity", "No Storage Fees", "Redeem for Physical Bars"],
    comingSoon: true
  }
];

export function Products() {
  const { user, accessToken } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [ordering, setOrdering] = useState<string | null>(null);

  const handleAcquire = async (product: typeof products[0]) => {
    if (product.comingSoon) return;

    if (!user) {
      setShowAuth(true);
      return;
    }

    setOrdering(product.weight);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-535ce1a9/order`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            weight: product.weight,
            price: product.priceValue
          })
        }
      );

      if (response.ok) {
        alert(`Order placed successfully! Your ${product.weight} silver bar order has been confirmed.`);
      } else {
        const error = await response.json();
        alert(error.error || 'Order failed');
      }
    } catch (error) {
      console.error('Order error:', error);
      alert('Failed to place order');
    } finally {
      setOrdering(null);
    }
  };

  return (
    <section id="collection" className="py-40 bg-[#fbfbfd] relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-10 relative">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#006039]/80 font-medium">The Collection</span>
            <div className="w-px h-8 bg-[#006039]/20" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extralight text-[#002817] mb-8 tracking-tight leading-[1.1]"
          >
            Investment Grade Silver
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#002817]/60 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Precision-crafted silver bars. Each piece a testament to purity and excellence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className={`relative transition-all duration-700 h-full flex flex-col bg-white overflow-hidden ${
                product.popular ? "border-t-2 border-[#006039] shadow-xl shadow-[#002817]/5" : "border-t border-[#002817]/10"
              } ${product.comingSoon ? "opacity-75 bg-[#f5f5f7]" : "group-hover:shadow-2xl group-hover:shadow-[#002817]/5"}`}>
                
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-[#006039] text-white text-[9px] tracking-[0.2em] uppercase font-medium">
                      Bestseller
                    </span>
                  </div>
                )}

                {product.comingSoon && (
                   <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-[#002817] text-white text-[9px] tracking-[0.2em] uppercase font-medium">
                      Coming Soon
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Image Area */}
                  <div className={`mb-10 aspect-[4/5] relative -mx-8 -mt-8 overflow-hidden ${product.comingSoon ? 'grayscale' : 'bg-[#f5f5f7]'}`}>
                    <ImageWithFallback
                      src={product.image}
                      alt={`${product.weight} Silver Bar`}
                      className={`w-full h-full object-cover mix-blend-multiply opacity-90 ${!product.comingSoon && "group-hover:scale-105 transition-transform duration-1000"}`}
                    />
                    {!product.comingSoon && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="mb-8">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-3xl font-light text-[#002817]">{product.weight}</h3>
                      <span className={`text-lg font-medium tracking-wide ${product.comingSoon ? "text-[#002817]/40" : "text-[#006039]"}`}>
                        {product.price}
                      </span>
                    </div>
                    <div className="h-px w-full bg-[#002817]/5 my-6 group-hover:bg-[#006039]/20 transition-colors duration-500" />
                    
                    <ul className="space-y-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className={`h-3 w-3 mt-1.5 flex-shrink-0 ${product.comingSoon ? "text-[#002817]/20" : "text-[#006039]/60"}`} strokeWidth={1.5} />
                          <span className={`text-xs font-light tracking-wide leading-relaxed ${product.comingSoon ? "text-[#002817]/40" : "text-[#002817]/60"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full mt-auto rounded-none tracking-[0.3em] text-[10px] uppercase h-12 transition-all duration-300 group/btn ${
                      product.comingSoon 
                        ? "bg-[#002817]/5 text-[#002817]/20 border border-[#002817]/5 cursor-not-allowed hover:bg-[#002817]/5"
                        : "bg-white text-[#002817] border border-[#002817]/20 hover:bg-[#006039] hover:text-white hover:border-[#006039]"
                    }`}
                    onClick={() => handleAcquire(product)}
                    disabled={ordering === product.weight || product.comingSoon}
                  >
                    <span className="flex items-center gap-2">
                      {product.comingSoon 
                        ? 'Launching Soon' 
                        : ordering === product.weight 
                          ? 'Processing...' 
                          : 'Acquire Now'
                      }
                      {!product.comingSoon && ordering !== product.weight && (
                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                      )}
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-28 text-center">
          <Button 
            variant="outline" 
            className="border-none text-[#002817]/40 hover:text-[#002817] hover:bg-transparent tracking-[0.2em] text-xs uppercase transition-colors"
          >
            View Full Catalogue
          </Button>
        </div>
      </div>

      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </section>
  );
}
