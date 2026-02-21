import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-cyan-900/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Rocket className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              IVARNA
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('events')} className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Events
              </button>
              <button onClick={() => scrollToSection('highlights')} className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Highlights
              </button>
              <button 
                onClick={() => scrollToSection('registration')} 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-[0_0_15px_rgba(8,145,178,0.5)]"
              >
                Register Now
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-cyan-900/30 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('events')} className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Events
              </button>
              <button onClick={() => scrollToSection('highlights')} className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Highlights
              </button>
              <button onClick={() => scrollToSection('registration')} className="bg-cyan-600 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left mt-4">
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
