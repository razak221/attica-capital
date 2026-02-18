import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "figma:asset/c7de477d5ab92371dc03a4fb9b41f7c77638ce4b.png";

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#002817] border-t border-[#002817]/10">
      <div className="max-w-[1800px] mx-auto px-10 py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-28">
          {/* Company Info */}
          <div>
            <div className="mb-10">
              <img src={logoImage} alt="Attica Silver" className="h-14 object-contain opacity-90 hover:opacity-100 transition-opacity duration-500 filter invert contrast-150" />
            </div>
            <p className="text-[#002817]/60 mb-10 leading-relaxed font-light text-sm tracking-wide">
              Redefining precious metal investment. Luxury, accessibility, and excellence in every detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] tracking-[0.4em] text-[#002817]/40 mb-10 uppercase font-light">Navigate</h3>
            <ul className="space-y-5">
              <li><a href="#collection" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">Collection</a></li>
              <li><a href="#investment" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">Investment</a></li>
              <li><a href="#about" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">About</a></li>
              <li><a href="#" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">Authenticity</a></li>
              <li><a href="#" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">Service</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[10px] tracking-[0.4em] text-[#002817]/40 mb-10 uppercase font-light">Legal</h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">Terms of Service</a></li>
              <li><a href="#" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">Privacy Policy</a></li>
              <li><a href="#" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">Shipping Policy</a></li>
              <li><a href="#" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">Returns</a></li>
              <li><a href="#" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">Compliance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] tracking-[0.4em] text-[#002817]/40 mb-10 uppercase font-light">Contact</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 group">
                <Mail className="h-4 w-4 text-[#002817]/40 mt-1 group-hover:text-[#006039] transition-colors duration-500" strokeWidth={1} />
                <div>
                  <a href="mailto:concierge@atticasilver.com" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">
                    concierge@atticasilver.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <Phone className="h-4 w-4 text-[#002817]/40 mt-1 group-hover:text-[#006039] transition-colors duration-500" strokeWidth={1} />
                <div>
                  <a href="tel:+911234567890" className="text-[#002817]/60 hover:text-[#006039] transition-all duration-500 text-sm font-light tracking-wide hover:tracking-wider">
                    +91 12345 67890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <MapPin className="h-4 w-4 text-[#002817]/40 mt-1 group-hover:text-[#006039] transition-colors duration-500" strokeWidth={1} />
                <div>
                  <p className="text-[#002817]/60 text-sm font-light tracking-wide leading-relaxed">
                    123 Silver Street<br />Mumbai, Maharashtra 400001
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-[#002817]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#002817]/40 text-[10px] tracking-[0.3em] uppercase font-light">
              © 2026 Attica Silver. All Rights Reserved.
            </p>
            <div className="flex gap-12 text-[10px] tracking-[0.3em] uppercase">
              <a href="#" className="text-[#002817]/40 hover:text-[#006039] transition-all duration-500 font-light hover:tracking-[0.4em]">Instagram</a>
              <a href="#" className="text-[#002817]/40 hover:text-[#006039] transition-all duration-500 font-light hover:tracking-[0.4em]">LinkedIn</a>
              <a href="#" className="text-[#002817]/40 hover:text-[#006039] transition-all duration-500 font-light hover:tracking-[0.4em]">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
