
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: "Zoya Malik",
    role: "Lifestyle Blogger",
    text: "Espo isn't just a coffee shop; it's an entire aesthetic experience. The warm rope lighting and noir vibes make it the perfect escape from the city noise. Their Pistachio Iced Latte is unmatched!",
    img: "https://i.pravatar.cc/150?u=zoya"
  },
  {
    name: "Arjun Singh",
    role: "Coffee Aficionado",
    text: "As a frequent traveler, I've seen many lounges, but Espo's master baristas bring a level of craft that is truly world-class. The balance of flavors in their Spanish Café is exquisite.",
    img: "https://i.pravatar.cc/150?u=arjun"
  },
  {
    name: "Sara Khan",
    role: "Creative Director",
    text: "The interior design is a masterpiece of light and shadow. It's my go-to spot for brainstorming sessions. A perfect fusion of luxury, comfort, and the finest organic beans in Hyderabad.",
    img: "https://i.pravatar.cc/150?u=sara"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % reviews.length);
  };
  
  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-32 bg-[#0D0D0D] relative overflow-hidden border-t border-white/5">
      {/* Decorative Gold Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-amber-400/5 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-amber-400/5 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex gap-1 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </motion.div>
          <h2 className="text-amber-400 text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">GUEST PERSPECTIVES</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Kind Words From <span className="italic text-white/40">Our Patrons</span></h3>
        </div>
        
        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center"
            >
              <div className="relative mb-12">
                <Quote className="absolute -top-12 -left-16 w-32 h-32 text-amber-400/5 -z-10" />
                <p className="text-2xl md:text-4xl font-serif text-white italic leading-relaxed text-center">
                  "{reviews[current].text}"
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                <motion.div 
                   initial={{ scale: 0.5, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="relative"
                >
                  <div className="absolute inset-0 bg-amber-400 rounded-full blur-md opacity-20" />
                  <img 
                    src={reviews[current].img} 
                    alt={reviews[current].name} 
                    className="w-16 h-16 rounded-full border-2 border-amber-400 relative z-10"
                  />
                </motion.div>
                <div className="text-left">
                  <p className="text-white text-xl font-bold tracking-tight">{reviews[current].name}</p>
                  <p className="text-amber-400 text-xs uppercase tracking-[0.3em] font-bold opacity-70">{reviews[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-20">
          <button
            onClick={prev}
            className="group flex items-center gap-4 text-white/40 hover:text-amber-400 transition-all uppercase text-[10px] tracking-[0.4em] font-bold"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-400 transition-all">
              <ChevronLeft size={20} />
            </div>
            <span className="hidden md:inline">Previous</span>
          </button>

          <div className="flex gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                className={`h-[3px] rounded-full transition-all duration-700 ${
                  i === current ? 'bg-amber-400 w-12' : 'bg-white/10 w-6'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="group flex items-center gap-4 text-white/40 hover:text-amber-400 transition-all uppercase text-[10px] tracking-[0.4em] font-bold"
          >
            <span className="hidden md:inline">Next</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-400 transition-all">
              <ChevronRight size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
