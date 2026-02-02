
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MapPin, Phone, Clock, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#080808] pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand & Social */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-4xl font-serif font-bold gold-text">ESPO</h3>
            <p className="text-white/50 leading-relaxed">
              WE ARE OPEN NOW!! Start your day right—sip, savor, and smile at our coffee lounge. Experience the pinnacle of luxury noir culture.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/espo_coffee_lounge/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-amber-400 hover:border-amber-400 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-amber-400 hover:border-amber-400 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-sm uppercase tracking-widest font-bold text-white">Explore</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Our Menu</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">The Experience</a></li>
              <li><a href="#book" className="hover:text-amber-400 transition-colors">Reservations</a></li>
              <li><a href="#social" className="hover:text-amber-400 transition-colors">Social</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-sm uppercase tracking-widest font-bold text-white">Contact & Delivery</h4>
            <ul className="space-y-6 text-white/50 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <span>📍 Hyderabad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Delivery: 03391113776</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Daily: 12 PM - 12 AM</span>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-3">
            <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/10 grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14418.000000000000!2d68.36!3d25.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c700000000001%3A0x0!2zMjXCsDIzJzI0LjAiTiA2OMKwMjEnMzYuMCJF!5e0!3m2!1sen!2spk!4v1630000000000!5m2!1sen!2spk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-amber-400 text-center">Espo Coffee Lounge • Hyderabad</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/30 text-xs text-center md:text-left">
            © 2024 Espo Coffee Lounge. Hyderabad's premier social sanctuary.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/40 hover:text-amber-400 transition-colors uppercase text-[10px] tracking-widest font-bold"
          >
            <span>Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-400 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
