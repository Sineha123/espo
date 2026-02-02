
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  onOpenReservation: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Coffee Context"
          className="w-full h-full object-cover brightness-[0.4] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0D0D0D]" />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p className="text-amber-400 text-[10px] md:text-xs uppercase tracking-[0.8em] mb-8 font-bold">
            EXPERIENCE THE EXTRAORDINARY
          </p>
          
          <h1 className="text-8xl md:text-[14rem] font-serif text-white tracking-tighter leading-none mb-4 overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
              className="inline-block"
            >
              ESPO
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent max-w-md mx-auto mb-8"
          />

          <p className="text-lg md:text-xl font-light text-white/60 max-w-xl mx-auto mb-12 tracking-wide font-serif italic">
            "A sanctuary where craft meets sophistication."
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const menu = document.querySelector('#menu');
                menu?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-amber-400 transition-colors"
            >
              Explore Menu
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenReservation}
              className="px-12 py-5 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-colors"
            >
              Book a Table
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
