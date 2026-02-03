
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: "Zoya Malik",
    role: "Lifestyle Blogger",
    text: "Espo isn't just a coffee shop; it's an entire aesthetic experience. The warm rope lighting and noir vibes make it the perfect escape from the city noise. Their Pistachio Iced Latte is unmatched!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Arjun Singh",
    role: "Coffee Aficionado",
    text: "As a frequent traveler, I've seen many lounges, but Espo's master baristas bring a level of craft that is truly world-class. The balance of flavors in their Spanish Café is exquisite.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Sara Khan",
    role: "Creative Director",
    text: "The interior design is a masterpiece of light and shadow. It's my go-to spot for brainstorming sessions. A perfect fusion of luxury, comfort, and the finest organic beans in Hyderabad.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 8000);
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
    <section className="py-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-1 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </motion.div>
          <h2 className="text-amber-400 text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">VOICES OF THE LOUNGE</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-white">Guest Perspectives</h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Large Cinematic Image Container */}
          <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden border border-white/10 group">
             <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: "circOut" }}
                  src={reviews[current].img}
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </AnimatePresence>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
             
             <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div>
                   <p className="text-white text-3xl font-serif mb-1">{reviews[current].name}</p>
                   <p className="text-amber-400 text-[10px] uppercase tracking-widest font-bold opacity-80">{reviews[current].role}</p>
                </div>
                <div className="flex gap-4">
                  <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all backdrop-blur-md">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all backdrop-blur-md">
                    <ChevronRight size={20} />
                  </button>
                </div>
             </div>
          </div>

          {/* Large Quote Content */}
          <div className="relative">
             <Quote className="absolute -top-20 -left-10 w-40 h-40 text-amber-400/5 -z-10" />
             <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                   <p className="text-3xl md:text-5xl font-serif text-white/90 leading-tight italic mb-12">
                     "{reviews[current].text}"
                   </p>
                   
                   <div className="flex gap-2 mb-8">
                     {reviews.map((_, i) => (
                       <button
                         key={i}
                         onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                         className={`h-[2px] transition-all duration-700 ${
                           i === current ? 'bg-amber-400 w-16' : 'bg-white/10 w-8'
                         }`}
                       />
                     ))}
                   </div>
                </motion.div>
             </AnimatePresence>
             
             <div className="pt-8 border-t border-white/5 flex items-center gap-6">
                <div className="p-4 bg-amber-400/10 rounded-2xl">
                   <p className="text-amber-400 text-xs font-bold uppercase tracking-widest leading-none">Verified Experience</p>
                </div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">100% Organic • HYD</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
