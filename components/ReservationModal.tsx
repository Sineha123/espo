
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, ChevronRight, Check } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-xl bg-[#0F0F0F] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl relative"
          >
            {/* Close Button */}
            <button 
              onClick={resetAndClose}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            {!submitted ? (
              <div className="p-8 md:p-12">
                <div className="mb-10">
                  <span className="text-amber-400 text-[10px] uppercase tracking-[0.6em] font-bold mb-2 block">Reservations</span>
                  <h3 className="text-3xl md:text-4xl font-serif text-white">Find Your <span className="italic text-white/40">Sanctuary.</span></h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2 group">
                          <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-amber-400 transition-colors">Date</label>
                          <div className="relative">
                            <Calendar size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20" />
                            <input required type="date" className="w-full bg-transparent border-b border-white/10 py-3 pl-8 text-white focus:outline-none focus:border-amber-400 transition-all font-light" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-2 group">
                            <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-amber-400 transition-colors">Time</label>
                            <div className="relative">
                              <Clock size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20" />
                              <input required type="time" className="w-full bg-transparent border-b border-white/10 py-3 pl-8 text-white focus:outline-none focus:border-amber-400 transition-all font-light" />
                            </div>
                          </div>
                          <div className="space-y-2 group">
                            <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-amber-400 transition-colors">Guests</label>
                            <div className="relative">
                              <Users size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20" />
                              <select className="w-full bg-transparent border-b border-white/10 py-3 pl-8 text-white focus:outline-none focus:border-amber-400 transition-all font-light appearance-none">
                                <option className="bg-[#0F0F0F]">2 Persons</option>
                                <option className="bg-[#0F0F0F]">4 Persons</option>
                                <option className="bg-[#0F0F0F]">6+ Persons</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <button type="button" onClick={handleNext} className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 group hover:bg-amber-400 transition-all">
                          Next Step <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2 group">
                          <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-amber-400 transition-colors">Name</label>
                          <input required type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-amber-400 transition-all font-light" />
                        </div>
                        <div className="space-y-2 group">
                          <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-amber-400 transition-colors">Phone</label>
                          <input required type="tel" placeholder="+91 000 000 0000" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-amber-400 transition-all font-light" />
                        </div>
                        <div className="space-y-2 group">
                          <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-amber-400 transition-colors">Requests</label>
                          <input type="text" placeholder="Window table, anniversary, etc." className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-amber-400 transition-all font-light" />
                        </div>
                        <div className="flex gap-4">
                          <button type="button" onClick={() => setStep(1)} className="flex-1 py-5 border border-white/10 text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white/5 transition-all">
                            Back
                          </button>
                          <button type="submit" className="flex-[2] py-5 bg-amber-400 text-black font-bold uppercase tracking-[0.3em] text-[10px] shadow-xl shadow-amber-400/20">
                            Confirm Booking
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-16 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-amber-400/30">
                  <Check size={40} className="text-black" />
                </div>
                <h4 className="text-3xl font-serif text-white tracking-tight">Booking Confirmed</h4>
                <p className="text-white/50 font-light leading-relaxed">
                  Your table at <span className="text-amber-400">Espo Lounge</span> is reserved. A confirmation message has been sent to your phone.
                </p>
                <button onClick={resetAndClose} className="mt-8 px-12 py-4 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 hover:text-white hover:border-white transition-all">
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;
