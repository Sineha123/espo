
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CursorFollower from './components/CursorFollower.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import MenuSection from './components/MenuSection.tsx';
import Craft from './components/Craft.tsx';
import Social from './components/Social.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
import Logo from './components/Logo.tsx';
import OrderingSystem from './components/OrderingSystem.tsx';
import ReservationModal from './components/ReservationModal.tsx';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [orderSystemOpen, setOrderSystemOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#0D0D0D] text-white selection:bg-amber-400 selection:text-black">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            exit={{ opacity: 0, transition: { duration: 1, ease: "circInOut" } }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className="flex flex-col items-center"
            >
              <Logo className="scale-125 md:scale-150" />
              <div className="w-48 h-[1px] bg-white/10 mt-12 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-amber-400 w-1/2"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <CursorFollower />
            <Navbar 
              onOpenOrder={() => setOrderSystemOpen(true)} 
              onOpenReservation={() => setReservationOpen(true)}
            />
            <Hero onOpenReservation={() => setReservationOpen(true)} />
            <About />
            <MenuSection />
            <Craft />
            <div id="social">
               <Social />
            </div>
            <Testimonials />
            <Footer />
            
            <OrderingSystem 
              isOpen={orderSystemOpen} 
              onClose={() => setOrderSystemOpen(false)} 
            />

            <ReservationModal
              isOpen={reservationOpen}
              onClose={() => setReservationOpen(false)}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;