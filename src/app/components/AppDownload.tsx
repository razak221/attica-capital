import { Button } from "@/app/components/ui/button";
import { Apple, Play } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "motion/react";

export function AppDownload() {
  return (
    <section id="investment" className="py-40 bg-[#f5f5f7]">
      <div className="max-w-[1800px] mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-28 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-[10px] tracking-[0.4em] text-[#006039]/60 uppercase font-light">Mobile Excellence</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extralight text-[#002817] mb-10 tracking-tight leading-[1.1]">
              Your Portfolio,<br />Perfected
            </h2>
            
            <div className="w-20 h-px bg-gradient-to-r from-[#006039]/40 to-transparent mb-10" />
            
            <p className="text-lg text-[#002817]/60 mb-16 font-light leading-relaxed tracking-wide max-w-xl">
              Experience seamless investment management. Real-time insights, instant transactions, and complete portfolio control—designed for those who demand excellence.
            </p>

            <div className="space-y-10 mb-16 pb-16 border-b border-[#002817]/10">
              {[
                { title: "Live Market Data", desc: "Precision pricing updated in real-time" },
                { title: "Instant Execution", desc: "Transactions completed in moments" },
                { title: "Vault-Grade Security", desc: "Bank-level protection for your assets" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <h4 className="text-xl font-light text-[#002817] mb-3 tracking-wide group-hover:tracking-wider transition-all duration-500">{item.title}</h4>
                  <p className="text-[#002817]/50 font-light text-sm tracking-wide leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button className="bg-[#006039] text-white hover:bg-[#004d2e] rounded-none h-16 px-10 transition-all duration-500 group border border-[#4a7c5d]/30">
                <Apple className="h-5 w-5 mr-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                <div className="text-left">
                  <div className="text-[9px] tracking-[0.3em] uppercase opacity-70 font-light">Download</div>
                  <div className="text-sm tracking-wide font-light">App Store</div>
                </div>
              </Button>
              <Button className="bg-[#006039] text-white hover:bg-[#004d2e] rounded-none h-16 px-10 transition-all duration-500 group border border-[#4a7c5d]/30">
                <Play className="h-5 w-5 mr-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                <div className="text-left">
                  <div className="text-[9px] tracking-[0.3em] uppercase opacity-70 font-light">Download</div>
                  <div className="text-sm tracking-wide font-light">Google Play</div>
                </div>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-[#002817]/10 shadow-2xl shadow-[#002817]/10 group-hover:shadow-[#002817]/20 transition-all duration-700">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1726653024714-42857c1b4906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnZlc3RtZW50fGVufDF8fHx8MTc2OTI2MzQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mobile Application"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
