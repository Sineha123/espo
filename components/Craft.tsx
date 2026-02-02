
import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Users, Music, Zap } from 'lucide-react';

const highlights = [
  {
    icon: <Coffee className="w-8 h-8 text-amber-400" />,
    title: "Organic Beans",
    desc: "Single-origin beans sourced responsibly from high-altitude estates."
  },
  {
    icon: <Users className="w-8 h-8 text-amber-400" />,
    title: "Master Baristas",
    desc: "Our team treats every pour as a unique piece of performance art."
  },
  {
    icon: <Music className="w-8 h-8 text-amber-400" />,
    title: "Ambient Soul",
    desc: "Curated soundtracks designed to complement the noir atmosphere."
  },
  {
    icon: <Zap className="w-8 h-8 text-amber-400" />,
    title: "Artistic Lighting",
    desc: "Shadow and light choreographed to create an intimate sanctuary."
  }
];

const Craft: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFD700 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-400 text-sm uppercase tracking-[0.4em] mb-4"
          >
            The Espo Standard
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Sip, Savor, Smile
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all text-center group"
            >
              <div className="mb-6 flex justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-serif text-white mb-4">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 border border-amber-400/20 rounded-3xl bg-gradient-to-br from-amber-400/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-xl">
            <h4 className="text-3xl font-serif text-white mb-4">Visit Our Sanctuary</h4>
            <p className="text-white/60">Open daily from 12 PM to 12 AM. Experience the ultimate social lounge atmosphere.</p>
          </div>
          <button className="px-10 py-4 bg-amber-400 text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform gold-glow">
            Reserve Your Space
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Craft;
