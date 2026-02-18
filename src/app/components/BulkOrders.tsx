import { Button } from "@/app/components/ui/button";
import { Building2, Truck, Shield, HeadphonesIcon, X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useState } from "react";
import { projectId, publicAnonKey } from '/utils/supabase/info';
import silverBarsImage from "figma:asset/d758cde6e4f40a389ba24f991ed0ac1024862ff6.png";

const benefits = [
  {
    icon: Building2,
    title: "Bespoke Pricing",
    description: "Tailored rates for substantial acquisitions"
  },
  {
    icon: Truck,
    title: "Priority Logistics",
    description: "Expedited delivery with precision tracking"
  },
  {
    icon: Shield,
    title: "Certified Quality",
    description: "Authenticated purity with documentation"
  },
  {
    icon: HeadphonesIcon,
    title: "Concierge Service",
    description: "Dedicated relationship management"
  }
];

export function BulkOrders() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    weight: '100g'
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-535ce1a9/bulk-order`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setShowForm(false);
          setSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            quantity: '',
            weight: '100g'
          });
        }, 2000);
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to submit request');
      }
    } catch (error) {
      console.error('Bulk order error:', error);
      alert('Failed to submit request');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="about" className="py-40 bg-[#001a0e] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002817]/80 via-transparent to-[#002817]/80" />
      
      <div className="max-w-[1800px] mx-auto px-10 relative">
        <div className="grid lg:grid-cols-2 gap-28 items-center">
          <div className="relative aspect-[4/3] overflow-hidden group">
            <ImageWithFallback
              src={silverBarsImage}
              alt="Enterprise Solutions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 border border-[#4a7c5d]/20" />
          </div>

          <div className="text-white">
            <div className="mb-8">
              <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-light">Enterprise Solutions</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extralight mb-10 tracking-tight leading-[1.1]">
              For the<br />Discerning Few
            </h2>
            
            <div className="w-20 h-px bg-gradient-to-r from-white/30 to-transparent mb-10" />
            
            <p className="text-lg text-white/50 mb-16 font-light leading-relaxed tracking-wide max-w-xl">
              Exceptional service for jewelers, institutions, and sophisticated investors. Bespoke solutions crafted to your specifications.
            </p>

            <div className="grid sm:grid-cols-2 gap-12 mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="mb-6 inline-flex items-center justify-center">
                    <div className="p-4 border border-[#4a7c5d]/20 group-hover:border-[#6b9d7a]/50 transition-all duration-700 group-hover:shadow-lg group-hover:shadow-[#006039]/20">
                      <benefit.icon className="h-7 w-7 text-white" strokeWidth={0.75} />
                    </div>
                  </div>
                  <h4 className="text-xl font-light mb-3 tracking-wide group-hover:tracking-wider transition-all duration-500">{benefit.title}</h4>
                  <p className="text-sm text-white/40 font-light tracking-wide leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="border border-[#4a7c5d]/20 p-12 mb-16 hover:border-[#4a7c5d]/40 transition-all duration-700 relative group bg-[#002817]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#006039]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="text-3xl font-extralight mb-10 tracking-wide relative">Volume Tiers</h3>
              <div className="space-y-8 relative">
                <div className="flex justify-between items-center pb-8 border-b border-white/5">
                  <span className="text-white/50 font-light tracking-wide">1kg — 10kg</span>
                  <span className="tracking-[0.2em] text-xs uppercase font-light">5% Premium Discount</span>
                </div>
                <div className="flex justify-between items-center pb-8 border-b border-white/5">
                  <span className="text-white/50 font-light tracking-wide">10kg — 50kg</span>
                  <span className="tracking-[0.2em] text-xs uppercase font-light">10% Premium Discount</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50 font-light tracking-wide">50kg+</span>
                  <span className="tracking-[0.2em] text-xs uppercase font-light">Bespoke Pricing</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase px-10 h-14 transition-all duration-500 border border-[#4a7c5d]/30"
              >
                Request Consultation
              </Button>
              <Button variant="outline" className="border-[#4a7c5d]/30 text-white hover:bg-[#006039] hover:text-white rounded-none tracking-[0.3em] text-[10px] uppercase px-10 h-14 transition-all duration-500">
                Contact Team
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bulk Order Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-[#001a0e]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#001a0e] border border-[#4a7c5d]/30 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extralight text-white mb-3 tracking-tight">
                  Enterprise Inquiry
                </h2>
                <p className="text-white/50 text-sm font-light tracking-wide">
                  Submit your requirements and our team will contact you within 24 hours
                </p>
              </div>

              {success ? (
                <div className="bg-green-950/30 border border-green-900/50 text-green-200 px-8 py-12 text-center">
                  <div className="text-lg mb-2">✓ Request Submitted Successfully</div>
                  <div className="text-sm opacity-75">Our team will contact you shortly</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3 font-light">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="w-full bg-[#002817] border border-[#4a7c5d]/30 text-white px-5 py-3.5 text-sm focus:outline-none focus:border-[#6b9d7a] transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3 font-light">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-[#002817] border border-[#4a7c5d]/30 text-white px-5 py-3.5 text-sm focus:outline-none focus:border-[#6b9d7a] transition-colors"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3 font-light">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="w-full bg-[#002817] border border-[#4a7c5d]/30 text-white px-5 py-3.5 text-sm focus:outline-none focus:border-[#6b9d7a] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3 font-light">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="w-full bg-[#002817] border border-[#4a7c5d]/30 text-white px-5 py-3.5 text-sm focus:outline-none focus:border-[#6b9d7a] transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quantity" className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3 font-light">
                        Quantity (kg) *
                      </label>
                      <input
                        id="quantity"
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        required
                        min="1"
                        className="w-full bg-[#002817] border border-[#4a7c5d]/30 text-white px-5 py-3.5 text-sm focus:outline-none focus:border-[#6b9d7a] transition-colors"
                        placeholder="Minimum 1kg"
                      />
                    </div>

                    <div>
                      <label htmlFor="weight" className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3 font-light">
                        Bar Weight Preference
                      </label>
                      <select
                        id="weight"
                        value={formData.weight}
                        onChange={(e) => setFormData({...formData, weight: e.target.value})}
                        className="w-full bg-[#002817] border border-[#4a7c5d]/30 text-white px-5 py-3.5 text-sm focus:outline-none focus:border-[#6b9d7a] transition-colors"
                      >
                        <option value="10g">10g Bars</option>
                        <option value="50g">50g Bars</option>
                        <option value="100g">100g Bars</option>
                        <option value="1kg">1kg Bars</option>
                        <option value="mixed">Mixed</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-12 transition-all duration-500 border border-[#4a7c5d]/30"
                  >
                    {submitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}