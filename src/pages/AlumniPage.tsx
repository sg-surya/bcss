import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

const allAlumni = [
  { name: "Atul Chaudhary", role: "Supervisor", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
  { name: "Aruna", role: "Sales Executive", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
  { name: "Bulbul", role: "Accountant", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
];

export default function AlumniPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#f5f5f4]">
      <div className="max-w-[1536px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#0a0a0a] mb-6">
            Our Proud <span className="font-serif italic text-blue-600">Alumni</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the amazing journeys of our graduates who are now leading the tech industry across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allAlumni.map((alumni, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-[2rem] p-2 border border-black/5 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                  <img 
                    src={alumni.image} 
                    alt={alumni.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow pr-4">
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-1">{alumni.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">{alumni.role}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:bg-[#0077b5] hover:text-white transition-colors"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
