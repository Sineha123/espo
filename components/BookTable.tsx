
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, MessageSquare } from 'lucide-react';

const BookTable: React.FC = () => {
  return (
    <section id="book" className="py-32 bg-[#0D0D0D] px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-amber-400 text-[10px] uppercase tracking-[0.6em] mb-6 font-bold">THE EXPERIENCE</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
            Reserve Your <span className="italic text-white/40">Sanctuary.</span>
          </h3>
          <p className="text-white/50 text-lg font-light leading-relaxed mb-8 max-w-lg">
            Ensure your evening is flawless. Whether it's an intimate date or a social gathering, we provide the perfect noir setting.
          </p>
          
          <div className="grid grid-cols-2 gap-8 text-white/70">
            <div className="flex flex-col gap-2">
               <div className="w-10 h-10 rounded-full border border-amber-400/30 flex items-center justify-center text-amber-400 mb-2">
                 <Clock size={18} />
               </div>
               <p className="text-xs uppercase tracking-widest font-bold text-white">Lounge Hours</p>
               <p className="text-sm font-light">12:00 PM - 12:00 AM</p>
            </div>
            <div className="flex flex-col gap-2">
               <div className="w-10 h-10 rounded-full border border-amber-400/30 flex items-center justify-center text-amber-400 mb-2">
                 <Users size={18} />
               </div>
               <p className="text-xs uppercase tracking-widest font-bold text-white">Private Events</p>
               <p className="text-sm font-light">Capacity up to 50 guests</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-sm"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-400 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Phone Number</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-400 transition-colors" placeholder="+91 000 000 0000" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Date</label>
                <div className="relative">
                   <Calendar size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20" />
                   <input type="date" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-400 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Time</label>
                <input type="time" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-400 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Guests</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-400 transition-colors appearance-none">
                   <option>2 Person</option>
                   <option>4 Person</option>
                   <option>6+ Person</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Special Request</label>
              <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-400 transition-colors" placeholder="Birthday celebration, anniversary, etc."></textarea>
            </div>

            <button className="w-full py-5 bg-amber-400 text-black font-bold uppercase tracking-[0.3em] text-xs hover:scale-[1.02] transition-all active:scale-95 shadow-xl shadow-amber-400/10">
              Confirm Reservation
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookTable;
