import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

const allAlumni = [
  { name: "Johnson", role: "Senior Developer at Google", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
  { name: "Alex Brown", role: "CEO & Founder at TechCorp", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { name: "Marina Doe", role: "Product Manager at Amazon", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
  { name: "Michael Smith", role: "COO & Founder at StartupX", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { name: "Sarah Connor", role: "Data Scientist at Meta", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
  { name: "David Lee", role: "Frontend Engineer at Netflix", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
  { name: "Emily Chen", role: "UX Designer at Apple", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
  { name: "James Wilson", role: "Backend Developer at Spotify", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=400" },
  { name: "Priya Patel", role: "AI Researcher at OpenAI", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { name: "Robert Taylor", role: "DevOps Engineer at Microsoft", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  { name: "Lisa Wong", role: "Full Stack Developer at Airbnb", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  { name: "Tom Harris", role: "Security Analyst at Cisco", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
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
