
import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Pistachio Iced Latte',
    desc: 'Espresso with silky milk and signature green swirl.',
    price: 'Rs. 650',
    image: 'https://picsum.photos/id/1060/400/500',
    tag: 'Popular'
  },
  {
    id: 2,
    name: 'Chocolate Pistachio Strawberries',
    desc: 'Fresh strawberries dipped in premium dark chocolate and pistachio dust.',
    price: 'Rs. 800',
    image: 'https://picsum.photos/id/493/400/500',
    tag: 'Seasonal'
  },
  {
    id: 3,
    name: 'Chef Special Sandwich',
    desc: 'Artisanal sourdough with signature toasted textures.',
    price: 'Rs. 1200',
    image: 'https://picsum.photos/id/425/400/500',
    tag: 'Chef Choice'
  },
  {
    id: 4,
    name: 'Espresso Romano',
    desc: 'A classic twist with a refreshing lemon undertone.',
    price: 'Rs. 450',
    image: 'https://picsum.photos/id/312/400/500',
    tag: 'Classic'
  }
];

// Added React.FC type to handle standard React props like 'key' implicitly
const ProductCard: React.FC<{ product: typeof products[0] }> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative flex-shrink-0 w-80 md:w-96 group"
    >
      <div className="relative overflow-hidden rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm p-4 transition-all group-hover:bg-white/10 group-hover:border-amber-400/30">
        <div className="relative h-96 overflow-hidden rounded-lg mb-6">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-amber-400 text-black text-[10px] font-bold uppercase py-1 px-3 rounded-full">
            {product.tag}
          </div>
        </div>
        
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-serif text-white group-hover:text-amber-400 transition-colors">{product.name}</h4>
          <span className="text-amber-400 font-bold">{product.price}</span>
        </div>
        
        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {product.desc}
        </p>

        <button className="w-full py-3 border border-white/10 text-xs uppercase tracking-widest font-bold group-hover:bg-amber-400 group-hover:text-black transition-all">
          Order Now
        </button>
      </div>
    </motion.div>
  );
};

const Products: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-[#0D0D0D]">
      <div className="px-6 md:px-12 mb-16 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-amber-400 text-sm uppercase tracking-[0.4em] mb-4">Our Signature</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white">The Craft Collection</h3>
        </div>
        <p className="text-white/50 max-w-sm">
          A curated selection of our most refined creations, blending traditional techniques with modern flavor profiles.
        </p>
      </div>

      <div className="overflow-x-auto pb-12 px-6 md:px-12 flex gap-8 scrollbar-hide no-scrollbar">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-12 py-4 border border-amber-400/20 text-amber-400 uppercase tracking-widest text-sm font-bold hover:bg-amber-400 hover:text-black transition-all">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Products;
