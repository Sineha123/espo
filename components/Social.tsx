
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const images = [
  "https://picsum.photos/id/102/600/600",
  "https://picsum.photos/id/163/600/600",
  "https://picsum.photos/id/431/600/600",
  "https://picsum.photos/id/225/600/600",
  "https://picsum.photos/id/30/600/600",
  "https://picsum.photos/id/42/600/600"
];

const Social: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div>
            <h2 className="text-amber-400 text-sm uppercase tracking-[0.4em] mb-4">On the Gram</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Join the Community</h3>
          </div>
          <a
            href="https://instagram.com/espo_coffee_lounge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full text-white hover:border-amber-400 hover:text-amber-400 transition-all group"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm uppercase tracking-widest font-bold">@espo_coffee_lounge</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img 
                src={img} 
                alt={`Espo Instagram ${i}`} 
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-full">
                  <Instagram className="text-white w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
