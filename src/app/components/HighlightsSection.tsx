import { motion } from 'motion/react';
import { Trophy, Zap, Users, Brain } from 'lucide-react';

export function HighlightsSection() {
  const stats = [
    { icon: Users, value: '500+', label: 'Participants' },
    { icon: Trophy, value: '₹50k', label: 'Prize Pool' },
    { icon: Brain, value: '15+', label: 'Challenges' },
    { icon: Zap, value: '24h', label: 'Innovation' },
  ];

  return (
    <div id="highlights" className="py-20 bg-slate-950 border-t border-slate-900 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all"
            >
              <div className="mb-4 p-3 rounded-full bg-slate-800 text-cyan-400">
                <stat.icon className="w-6 h-6" />
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
