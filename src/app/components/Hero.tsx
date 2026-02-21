import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1761319659783-cceb1973d6f8?q=80&w=1080"
          alt="Future Technology"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>
      </div>

      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            The Ultimate Technical Fest
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            IVARNA <span className="text-cyan-500">2026</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Explore innovation, problem-solving, and competitive technical challenges in a world of infinite possibilities.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('registration')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(8,145,178,0.6)] hover:shadow-[0_0_30px_rgba(8,145,178,0.8)] transition-all flex items-center justify-center gap-2 group"
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const el = document.getElementById('events');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all"
            >
              Explore Events
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}