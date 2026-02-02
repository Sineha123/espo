
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#0D0D0D] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        
        {/* Left: Atmospheric Visual - Reflecting the actual lounge interior */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/5 group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
              alt="Espo Coffee Lounge Interior" 
              className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8 right-8">
               <p className="text-amber-400 font-serif text-4xl italic mb-2 tracking-tighter">EST. 2023</p>
               <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">Legacy of the Lounge</p>
            </div>
          </div>
          
          <div className="absolute -top-10 -left-10 w-full h-full border border-amber-400/10 rounded-2xl -z-0" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-amber-400 text-[10px] uppercase tracking-[0.6em] mb-6 font-bold">THE HERITAGE</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
            Where Craft Meets <span className="italic text-white/40">Dark Elegance.</span>
          </h3>
          
          <div className="space-y-8 text-white/60 leading-relaxed text-lg font-light">
            <p>
              Espo Coffee Lounge isn't just a destination; it's an aesthetic experience. Born in the heart of winter 2023, we redefined the coffee house as a "Social Sanctuary." 
            </p>
            <p>
              Our noir-inspired interiors, characterized by deep textures and warm golden accents, create an intimate backdrop for meaningful conversations and artisanal discovery. 
            </p>
            <blockquote className="border-l-2 border-amber-400 pl-8 py-2 italic text-white text-xl font-serif">
              "We believe that the finest coffee deserves the finest atmosphere. No compromises, only perfection."
            </blockquote>
          </div>

          <motion.button
            whileHover={{ x: 10 }}
            className="mt-12 flex items-center gap-6 text-amber-400 uppercase tracking-[0.4em] text-[10px] font-bold group"
          >
            <span>Read Our Philosophy</span>
            <div className="w-16 h-[1px] bg-amber-400/30 group-hover:w-24 transition-all duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
