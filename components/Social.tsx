
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

const socialImages = [
  { 
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAVaodwydoDeOF-NnJJDF76TNH4pb2wJygQ&s",
    link: "https://www.instagram.com/p/DScM8fGjHYV/"
  },
  { 
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9KFJg2kk8z3Zm66Wi-aSgvAM-Qy1B_TSxuw&s",
    link: "https://www.instagram.com/p/DUQJBNajTAY/"
  },
  { 
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRashB-3NICqkHwsLXXPdffWQn-e0h0N-8cLQ&s",
    link: "https://www.instagram.com/p/DScM8fGjHYV/"
  },
  { 
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJ66wIX9SuV_K6Ji7wIik3wY5-OJJ2M7KnQ&s",
    link: "https://www.instagram.com/p/DUQJBNajTAY/"
  },
  { 
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ508A8ArHYl7ZkrtPrzNtdKE11kRvDUiTaA&s",
    link: "https://www.instagram.com/p/DScM8fGjHYV/"
  },
  { 
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecrvBZuuG9dL-17tzoQHu3L6iC4vLEBmjTQ&s",
    link: "https://www.instagram.com/p/DUQJBNajTAY/"
  },
  { 
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTMPxuEymXWVIy-oJDcH0i3lRUCBtUw7x_A&s",
    link: "https://www.instagram.com/p/DScM8fGjHYV/"
  },
  { 
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAVaodwydoDeOF-NnJJDF76TNH4pb2wJygQ&s",
    link: "https://www.instagram.com/espo_coffee_lounge/"
  }
];

const Social: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-400 text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">THE SOCIAL SCENE</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Join the Community</h3>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/espo_coffee_lounge/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:border-amber-400 hover:text-amber-400 transition-all group"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold">@espo_coffee_lounge</span>
            <ExternalLink className="w-4 h-4 opacity-30 group-hover:opacity-100" />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialImages.map((img, i) => (
            <motion.a
              key={i}
              href={img.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={img.url} 
                alt={`Espo Moment ${i}`} 
                className="w-full h-full object-cover aspect-square transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="flex flex-col items-center gap-3 scale-90 group-hover:scale-100 transition-transform text-center p-4">
                  <div className="p-3 bg-amber-400 rounded-full shadow-xl shadow-amber-400/20 mb-2">
                    <Instagram className="text-black w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white leading-tight">Follow Our Journey</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
