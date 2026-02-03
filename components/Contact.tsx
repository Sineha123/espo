
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#0D0D0D] px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-amber-400 text-[10px] uppercase tracking-[0.6em] mb-6 font-bold">CONNECT WITH US</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
            Start Your <span className="italic text-white/40">Experience.</span>
          </h3>
          <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-lg">
            Whether you're looking for a quiet corner to work, a space to host a meeting, or a quick artisan coffee for delivery—we are here for you.
          </p>
          
          <div className="space-y-10">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-1">Call for Delivery</p>
                <p className="text-2xl font-serif text-white group-hover:text-amber-400 transition-colors">03391113776</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-1">Our Location</p>
                <p className="text-2xl font-serif text-white group-hover:text-amber-400 transition-colors">📍 Hyderabad</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-1">Social Lounge</p>
                <p className="text-2xl font-serif text-white">Open Daily: 12 PM - 12 AM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enquiry Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full bg-white/[0.02] border border-white/10 p-10 md:p-14 rounded-[3rem] backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 blur-3xl -z-10" />
          
          <form className="space-y-8">
            <div className="space-y-2 group">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 group-focus-within:text-amber-400 transition-colors">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-amber-400 transition-all font-light text-lg" placeholder="e.g. John Doe" />
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 group-focus-within:text-amber-400 transition-colors">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-amber-400 transition-all font-light text-lg" placeholder="john@example.com" />
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 group-focus-within:text-amber-400 transition-colors">Your Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-amber-400 transition-all font-light text-lg resize-none" placeholder="Tell us how we can help..."></textarea>
            </div>

            <button className="w-full py-6 bg-amber-400 text-black font-bold uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 hover:bg-white transition-all shadow-xl shadow-amber-400/10 group">
              Send Message <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
