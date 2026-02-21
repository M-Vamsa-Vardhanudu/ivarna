import { motion } from 'motion/react';
import { Lightbulb, Key, Globe, ExternalLink, Users, Trophy } from 'lucide-react';

interface EventProps {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  icon: React.ElementType;
  color: string;
  delay: number;
  onRegister: (eventName: string) => void;
}

const EventCard = ({ id, title, description, details, image, icon: Icon, color, delay, onRegister }: EventProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative">
        <div className={`absolute inset-0 bg-${color}-500/20 mix-blend-overlay z-10`} />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 z-20 bg-slate-950/70 p-2 rounded-lg backdrop-blur-md border border-slate-700">
          <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
        
        <ul className="space-y-2 mb-6 flex-grow">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
              <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-${color}-500 flex-shrink-0`} />
              {detail}
            </li>
          ))}
        </ul>
        
        <button 
          onClick={() => onRegister(title)}
          className={`w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-${color}-600 text-white font-medium transition-all flex items-center justify-center gap-2 group-hover:shadow-lg`}
        >
          Register for {title.split(' ')[0]} <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export function EventsSection({ onSelectEvent }: { onSelectEvent: (event: string) => void }) {
  const events = [
  {
    id: 'project-expo',
    title: 'Project Expo',
    description:
      'Teams pitch ideas and present prototypes. Best idea with strong execution and communication wins.',
    details: [
      'Idea pitching and prototype demo',
      'Evaluation on innovation and feasibility',
      'Team presentation round',
      'Best project receives prize'
    ],
    image: "https://imgs.search.brave.com/W-qykGjmXjNnj5GkTLCnGwnRN_O4KKwj2J1s8G2zPOs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNDM2/NzE3NDY0L3N0b2Nr/LXBob3RvLWJ1c2lu/ZXNzLXNwZWFrZXIt/Z2l2aW5nLWEtdGFs/ay1hdC1idXNpbmVz/cy1jb25mZXJlbmNl/LWV2ZW50",
    icon: Lightbulb,
    color: 'yellow',
  },
  {
    id: 'mystery-doors',
    title: 'Mystery of Doors & Memory Lane',
    description:
      'Multi-level puzzle challenge. Teams solve puzzles to progress, with final level winners earning grand prize.',
    details: [
      'Team-based puzzle solving',
      'Multiple difficulty levels',
      'Logic and memory challenges',
      'Grand prize for final level completion'
    ],
    image: "https://imgs.search.brave.com/eUd08DNOmEs236cQaD9oLYTw2FUS-NAUTKDBMecETZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MC8yNC8yMy8xMS9k/b29ycy0xNzY3NTYy/XzY0MC5qcGc",
    icon: Key,
    color: 'purple',
  },
  {
    id: 'hyperlink-hustle',
    title: 'Hyperlink Hustle',
    description:
      'Wikipedia speed run challenge. Start from a given page and reach target page using only hyperlinks.',
    details: [
      'Navigation via hyperlinks only',
      'Start and target pages provided',
      'Fastest completion wins',
      'No search tools allowed'
    ],
    image: "https://imgs.search.brave.com/1H4MaJ6bp2L0I1o-OQJONg9BsX-wFE565o93h9TfnkY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NjUxODI3L3Bob3Rv/L3dpa2lwZWRpYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VEhvOUNuMHlQR21X/R21XUW0xTnBuU2ZK/Xy1TV0VJTGZjemY3/WTRLdHMtdz0",
    icon: Globe,
    color: 'cyan',
  }
];

  return (
    <div id="events" className="py-24 bg-slate-950 relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Events</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Challenge yourself and compete with the best minds.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard 
              key={event.id}
              {...event}
              delay={index * 0.1}
              onRegister={onSelectEvent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
