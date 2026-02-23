import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Key, Globe, ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";

interface EventProps {
  id: string;
  title: string;
  description: string;
  details: string[];
  thumbnail: string;
  poster: string;
  icon: React.ElementType;
  color: string;
  delay: number;
  onRegister: (eventId: string) => void;
}

const EventCard = ({
  id,
  title,
  description,
  thumbnail,
  icon: Icon,
  color,
  delay,
  onRegister,
}: EventProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/60 p-2 rounded-lg backdrop-blur-md">
          <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

        <p className="text-gray-400 mb-6">{description}</p>

        <button
          onClick={() => onRegister(id)}
          className={`mt-auto w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-${color}-600 text-white font-medium transition-all flex items-center justify-center gap-2`}
        >
          Discover More <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      id: "project-expo",
      title: "Project Expo",
      description: "Teams pitch ideas and present prototypes.",
      details: [
        "Innovation-focused showcase",
        "Live prototype demos",
        "Panel of judges",
        "Exciting prizes",
      ],
      thumbnail:
        "/stock-video-audience-listens-to-the-lecturer-at-the-conference.webp",
      poster: "/projectexpo.png",
      icon: Lightbulb,
      color: "yellow",
      longDescription:
        "Project Expo is a platform where participants showcase innovative ideas and working prototypes. Teams will present their concepts to a panel of judges and audience members, explaining the problem they aim to solve and how their solution works. This event emphasizes creativity, technical feasibility, and real-world applicability. It encourages students to think beyond theoretical learning and develop projects that could make a tangible impact. Judges will evaluate ideas based on originality, implementation, usability, and presentation skills. Participants gain exposure to idea pitching and constructive feedback, helping them refine their solutions and entrepreneurial mindset."
    },
    {
      id: "mystery-doors",
      title: "Mystery of Doors & Memory Lane",
      description: "Multi-level puzzle challenge.",
      details: [
        "Team-based puzzle solving",
        "Multiple difficulty levels",
        "Logic and memory challenges",
        "Grand prize for final completion",
      ],
      thumbnail: "/doors-1767562_640.webp",
      poster: "/mystery.png",
      icon: Key,
      color: "purple",
      longDescription:
        "Mystery of Doors & Memory Lane combines layered puzzles and memory-based challenges into a multi-stage experience. Teams must solve logical riddles, sequence-based problems, and hidden clues to progress through different levels. Each stage becomes progressively more challenging, requiring critical thinking and collaboration. Participants will encounter doors representing various problem sets, and only by solving them can they advance. The event aims to enhance analytical skills, teamwork, and creative problem solving in a fun and interactive environment. The final stage offers a grand prize for teams that successfully complete all levels."
    },
    {
      id: "hyperlink-hustle",
      title: "Hyperlink Hustle",
      description: "Wikipedia speed navigation race.",
      details: [
        "Navigation via hyperlinks only",
        "Start & target pages given",
        "Fastest completion wins",
        "No search tools allowed",
      ],
      thumbnail: "/wikipedia-home-page.webp",
      poster: "/hyperlink.png",
      icon: Globe,
      color: "cyan",
      longDescription:
        "Hyperlink Hustle is a fast-paced navigation challenge based on hyperlink traversal. Participants are given a starting page and a target page, and they must reach the destination using only hyperlinks—no external search tools or shortcuts. The challenge tests information literacy, quick thinking, and familiarity with web navigation structures. Teams must strategically select links to reach the target page in the shortest possible path. Speed and accuracy both matter, making this event exciting and competitive. It also highlights how interconnected knowledge is and encourages participants to explore information efficiently."
    },
    {
      id: "bug-finder",
      title: "Exploit Arena",
      description: "Hunt vulnerabilities and break the system before others.",
      details: [
        "First team to fully compromise the site wins",
        "Live simulated website provided to all teams",
        "Identify hidden bugs, logic flaws, and unintended behaviors",
        "Exploit simple vulnerabilities to unlock next levels"
      ],
      thumbnail: "/exploidAreanaThumbnail.webp",
      poster: "/exploidArenaPoster.png",
      icon: Key,
      color: "orange",
      longDescription:
        "Exploit Arena challenges participants to identify and exploit vulnerabilities in a simulated web environment. Teams will analyze the system, discover hidden flaws, and use logical reasoning to progress through different levels. The event introduces concepts of security awareness and ethical problem solving. Participants will learn how vulnerabilities arise and why secure development practices are important. The goal is not malicious exploitation but understanding system weaknesses in a controlled setting. The first team to fully compromise the system by solving all challenges wins."
    },
    {
      id: "tech-tambola",
      title: "Tech Tambola",
      description: "Classic tambola meets technical quiz.",
      details: [
        "Tambola-style tickets filled with tech terms",
        "Questions announced instead of numbers",
        "Mark answers if present on your ticket",
        "Patterns like Row, Corners, Full House",
        "Fastest correct claim wins the round",
        "Covers CS, AI, Web, Cyber & more",
      ],
      thumbnail: "/tambolathumbnail.png",
      poster: "/techtambolaposter.png",
      icon: Lightbulb,
      color: "blue",
      longDescription:
        "Tech Tambola merges the excitement of traditional tambola with technical quizzes. Instead of numbers being called, questions related to technology, programming, and general knowledge are announced. Participants must mark answers on their tickets if they contain the correct response. Completing patterns such as rows, corners, or full house results in winning rounds. The event covers topics from computer science, artificial intelligence, web development, and cybersecurity, making it both educational and entertaining. It encourages quick thinking and familiarity with technical concepts in a gamified format."
    }
  ];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div id="events" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white">Featured Events</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/60 p-2 rounded-lg backdrop-blur-md">
                  <event.icon className={`w-6 h-6 text-${event.color}-400`} />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-6">{event.description}</p>

                <button
                  onClick={() => setSelectedEvent(event)}
                  className={`mt-auto w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-${event.color}-600 text-white font-medium transition-all flex items-center justify-center gap-2`}
                >
                  Discover More <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL WITH POSTER + DETAILS SIDE BY SIDE */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-7xl bg-slate-900 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white z-10"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Poster Section */}
                <div className="flex items-center justify-center p-4 bg-black">
                  <img
                    src={selectedEvent.poster}
                    alt={selectedEvent.title}
                    className="max-h-[80vh] object-contain"
                  />
                </div>

                {/* Details Section */}
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedEvent.title}
                  </h2>

                  <p className="text-gray-400 mb-4">
                    {selectedEvent.longDescription}
                  </p>

                  <p className="text-gray-400 mb-6">
                    These events encourage creativity, teamwork, and problem solving. 
                    Participants gain hands-on exposure to technical ideas and live challenges. 
                    Each event follows a structured format with judging and interactive participation.
                  </p>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    Highlights
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {selectedEvent.details.map((detail: string) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}