
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Zoya Malik",
    role: "Lifestyle Blogger",
    text: "The best ambiance in the city—truly a coffeeholic's paradise. The pistachio iced latte is to die for!",
    img: "https://picsum.photos/id/64/100/100"
  },
  {
    name: "Arjun Singh",
    role: "Coffee Aficionado",
    text: "Espo takes brewing to a level of artistry I haven't seen elsewhere. A perfect blend of luxury and taste.",
    img: "https://picsum.photos/id/91/100/100"
  },
  {
    name: "Sara Khan",
    role: "Designer",
    text: "The interior design is a masterpiece. I spend hours here working and soaking in the noir vibes.",
    img: "https://picsum.photos/id/177/100/100"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Quote className="w-16 h-16 text-amber-400/20 mx-auto mb-8" />
        
        <div className="relative h-80 md:h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-2xl md:text-3xl font-serif text-white italic mb-10 leading-relaxed">
                "{reviews[current].text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={reviews[current].img} 
                  alt={reviews[current].name} 
                  className="w-12 h-12 rounded-full border border-amber-400/50"
                />
                <div className="text-left">
                  <p className="text-white font-bold">{reviews[current].name}</p>
                  <p className="text-amber-400 text-xs uppercase tracking-widest">{reviews[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prev}
            className="p-3 border border-white/10 rounded-full text-white/50 hover:text-amber-400 hover:border-amber-400 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-amber-400 w-8' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-3 border border-white/10 rounded-full text-white/50 hover:text-amber-400 hover:border-amber-400 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
