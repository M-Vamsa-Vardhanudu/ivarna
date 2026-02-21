import { Rocket, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-bold text-white">IVARNA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The premier technical fest bringing together the brightest minds for innovation, competition, and growth.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-cyan-400 transition-colors">Home</button></li>
              <li><button onClick={() => document.getElementById('events')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-cyan-400 transition-colors">Events</button></li>
              <li><button onClick={() => document.getElementById('register')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-cyan-400 transition-colors">Register</button></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Code of Conduct</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:info@ivarna.edu" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-600 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>Email: contact@ivarna.edu</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 IVARNA Technical Fest. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            Designed with <span className="text-red-500">♥</span> by Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
}
