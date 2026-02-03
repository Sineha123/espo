
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#0D0D0D] px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-amber-400/5 blur-[150px] rounded-full pointer-events-none" />
      
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
            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('tel:03391113776')}>
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
                <Clock size={24} />
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
          className="lg:w-1/2 w-full bg-white/[0.02] border border-white/10 p-10 md:p-14 rounded-[3rem] backdrop-blur-md relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 blur-3xl -z-10" />
          
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
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

      {/* Embedded Map Section - Robust coordinates for Hyderabad */}
      <div className="max-w-7xl mx-auto mt-24">
         <div className="w-full h-80 rounded-[2rem] overflow-hidden border border-white/10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.40166258079!2d68.30722100000001!3d25.396008700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d444f3dd%3A0x5538356947e19330!2sHyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>
         <p className="mt-6 text-[10px] text-center text-white/20 uppercase tracking-[1em]">Espo Sanctuary • Hyderabad</p>
      </div>
    </section>
  );
};

export default Contact;
