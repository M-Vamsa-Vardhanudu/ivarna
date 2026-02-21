import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { EventsSection } from '../components/EventsSection';
import { RegistrationForm } from '../components/RegistrationForm';
import { HighlightsSection } from '../components/HighlightsSection';
import { Footer } from '../components/Footer';

export function Home() {
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleEventSelection = (eventName: string) => {
    setSelectedEvent(eventName);
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <HighlightsSection />
      <EventsSection onSelectEvent={handleEventSelection} />
      <RegistrationForm selectedEvent={selectedEvent} />
      <Footer />
    </div>
  );
}
