
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const fullMenuData = {
  "Soups & Starters": [
    { name: "Espo Special Soup", price: "500", desc: "Signature rich-flavoured house special soup." },
    { name: "Dynamite Prawns", price: "1050", desc: "Creamy spicy prawn bites, a crowd favorite." },
    { name: "Finger Fish", price: "950", desc: "Crispy fried fish strips with signature dip." },
    { name: "Korean Wings", price: "780", desc: "Sweet and spicy Korean-style wings." },
    { name: "Loaded Fries", price: "700", desc: "Fries topped with cheese and signature sauces." }
  ],
  "Main Course": [
    { name: "Espo Special Steak", price: "1700", desc: "House special premium steak cooked to perfection." },
    { name: "Tarragon Steak", price: "1390", desc: "Creamy tarragon-flavoured steak with sides." },
    { name: "Chef's Special Pasta", price: "1700", desc: "A mystery within a mystery, signature creamy sauce." },
    { name: "Singaporean Rice", price: "1300", desc: "Spicy fusion rice with chicken and stir-fry veggies." },
    { name: "Lasagna", price: "1350", desc: "Layered pasta with cheese and premium meat sauce." }
  ],
  "Burgers & Pizza": [
    { name: "Espo Special Pizza", price: "2000", desc: "Our signature pizza with everything you love." },
    { name: "Korean Burger", price: "850", desc: "Korean-style spicy chicken burger with slaw." },
    { name: "Mushroom Burger", price: "780", desc: "Chicken burger with creamy mushroom sauce." },
    { name: "Chicken Tikka Pizza", price: "1400", desc: "Classic fusion flavors with premium cheese." }
  ],
  "Coffee & Frappes": [
    { name: "Pistachio Ice Latte", price: "1000", desc: "Sweetened iced latte with premium pistachio." },
    { name: "Pistachio Frappe", price: "1200", desc: "Rich pistachio-flavoured thick blended frappe." },
    { name: "Spanish Café", price: "680", desc: "Rich coffee with Spanish-style sweetness." },
    { name: "Butterscotch Ice Latte", price: "750", desc: "Chilled black coffee with butterscotch notes." },
    { name: "Lotus Chocolate Frappe", price: "1100", desc: "Lotus biscoff and chocolate thick frappe." }
  ],
  "Mocktails & Mojitos": [
    { name: "Saffron Rose Mocktail", price: "1050", desc: "Premium saffron and rose floral mocktail." },
    { name: "Barista's Special Mojito", price: "800", desc: "Signature house mojito with fresh herbs." },
    { name: "Strawberry Margarita", price: "650", desc: "Sweet strawberry blended margarita." },
    { name: "Sunrise Punch Mix Berry", price: "1150", desc: "Mixed berry fruity punch with a citrus kick." }
  ],
  "Desserts": [
    { name: "Pistachio Kunafa", price: "1800", desc: "Premium pistachio-layered Middle Eastern delight." },
    { name: "Lava Cake with Ice Cream", price: "749", desc: "Warm molten chocolate cake served with vanilla." },
    { name: "Kunafa", price: "1100", desc: "Classic Middle Eastern dessert with golden crispy texture." },
    { name: "Brownie with Ice Cream", price: "599", desc: "Rich chocolate brownie topped with ice cream." }
  ]
};

const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof fullMenuData>("Coffee & Frappes");

  return (
    <section id="menu" className="relative py-32 bg-[#080808] px-6 overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
           <path d="M10,90 Q50,10 90,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
           <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-400 text-[10px] uppercase tracking-[0.5em] mb-4 font-bold"
          >
            Sip, Savor, Smile
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white"
          >
            Our Menu
          </motion.h3>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-16 border-b border-white/5 pb-8 overflow-x-auto no-scrollbar">
          {Object.keys(fullMenuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category as any)}
              className={`text-xs uppercase tracking-[0.3em] font-bold transition-all whitespace-nowrap ${
                activeTab === category ? 'text-amber-400' : 'text-white/30 hover:text-white/60'
              }`}
            >
              {category}
              {activeTab === category && (
                <motion.div layoutId="tab-underline" className="h-[2px] bg-amber-400 mt-2" />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="contents"
            >
              {fullMenuData[activeTab].map((item, idx) => (
                <div
                  key={item.name}
                  className="group border-b border-white/5 pb-8 hover:border-amber-400/30 transition-all"
                >
                  <div className="flex justify-between items-baseline mb-3">
                    <h4 className="text-xl md:text-2xl font-serif text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h4>
                    <div className="flex-1 mx-4 border-b border-dotted border-white/10 group-hover:border-amber-400/20" />
                    <span className="text-lg text-white/80 font-medium">Rs. {item.price}</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Visual Graphic Element */}
        <div className="mt-24 flex flex-col items-center gap-6">
          <div className="flex gap-12 grayscale opacity-20">
             {/* Coffee Cup Graphic */}
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-[1em] mt-4">Espo Signature Series</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
