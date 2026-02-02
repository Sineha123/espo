
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Logo from './Logo';

interface NavbarProps {
  onOpenOrder: () => void;
  onOpenReservation: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenOrder, onOpenReservation }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Reservations', href: '#book', action: onOpenReservation },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    if (item.action) {
      item.action();
      return;
    }
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12 ${
        isScrolled ? 'bg-black/95 backdrop-blur-2xl py-3 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); }} className="block w-fit">
            <Logo className="scale-75 md:scale-90 origin-left" />
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item)}
              className="relative text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors group font-bold"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          <button 
            onClick={onOpenOrder}
            className="px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-black bg-amber-400 hover:bg-white hover:scale-105 transition-all rounded-full shadow-xl shadow-amber-400/10"
          >
            Order Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
