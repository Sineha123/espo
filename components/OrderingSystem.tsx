
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Search } from 'lucide-react';
import { fullMenuData } from './MenuSection';

interface OrderingSystemProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderingSystem: React.FC<OrderingSystemProps> = ({ isOpen, onClose }) => {
  const [cart, setCart] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allItems = Object.entries(fullMenuData).flatMap(([cat, items]) => 
    items.map(i => ({ ...i, category: cat }))
  );

  const filteredItems = allItems.filter(item => 
    (selectedCategory === "All" || item.category === selectedCategory) &&
    (item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart(prev => prev.map(i => i.name === name ? { ...i, qty: Math.max(0, i.qty - 1) } : i).filter(i => i.qty > 0));
  };

  const total = cart.reduce((acc, curr) => acc + (parseInt(curr.price) * curr.qty), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-[110]"
          >
            <X size={32} />
          </button>

          <div className="w-full h-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 p-8 pt-24">
            
            {/* Main Ordering View */}
            <div className="flex-1 flex flex-col">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <h2 className="text-4xl font-serif text-white">Place Your Order</h2>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search dishes..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-3 text-white focus:outline-none focus:border-amber-400 w-full md:w-64"
                  />
                </div>
              </div>

              {/* Categories Scroll */}
              <div className="flex gap-4 mb-8 overflow-x-auto no-scrollbar pb-2">
                {["All", ...Object.keys(fullMenuData)].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                      selectedCategory === cat ? 'bg-amber-400 text-black' : 'bg-white/5 text-white/40 border border-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto no-scrollbar grid md:grid-cols-2 gap-4">
                {filteredItems.map(item => (
                  <motion.div 
                    layout
                    key={item.name}
                    className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between hover:border-amber-400/30 transition-all group"
                  >
                    <div>
                      <h4 className="text-lg font-serif text-white group-hover:text-amber-400 transition-colors">{item.name}</h4>
                      <p className="text-white/40 text-xs mt-1">Rs. {item.price}</p>
                    </div>
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-black transition-all"
                    >
                      <Plus size={20} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cart / Summary View */}
            <div className="w-full lg:w-96 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <ShoppingBag className="text-amber-400" />
                <h3 className="text-xl font-bold uppercase tracking-widest text-white">Cart</h3>
              </div>

              <div className="flex-1 overflow-y-auto no-scrollbar space-y-6 mb-8">
                {cart.length === 0 ? (
                  <div className="text-center py-20 opacity-20">
                    <p className="text-sm uppercase tracking-widest">Your cart is empty</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.name} className="flex items-center justify-between group">
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">{item.name}</p>
                        <p className="text-white/40 text-xs">Rs. {item.price}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button onClick={() => removeFromCart(item.name)} className="text-white/30 hover:text-amber-400"><Minus size={16} /></button>
                        <span className="text-amber-400 font-bold w-4 text-center">{item.qty}</span>
                        <button onClick={() => addToCart(item)} className="text-white/30 hover:text-amber-400"><Plus size={16} /></button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-white/10 pt-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white/40 uppercase text-xs tracking-widest">Subtotal</span>
                  <span className="text-white text-xl font-bold">Rs. {total}</span>
                </div>
                <button 
                  disabled={cart.length === 0}
                  className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                    cart.length > 0 ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20 hover:scale-[1.02]' : 'bg-white/10 text-white/20 cursor-not-allowed'
                  }`}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderingSystem;
