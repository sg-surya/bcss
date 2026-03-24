import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const alumniList = [
  { name: "Johnson", role: "Senior Developer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
  { name: "Alex Brown", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
  { name: "Marina Doe", role: "Product Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
  { name: "Michael Smith", role: "COO & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { name: "Sarah Connor", role: "Data Scientist", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
  { name: "David Lee", role: "Frontend Engineer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
];

export default function AlumniSection() {
  return (
    <section id="alumni" className="py-24 bg-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1536px] mx-auto text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0a0a0a] mb-4">
          Meet Our <span className="font-serif italic text-blue-600">Alumni</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Join a network of successful professionals working at top companies worldwide.
        </p>
        <Link 
          to="/alumni" 
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0a0a0a] text-white font-medium hover:bg-blue-600 transition-colors"
        >
          View All Alumni
        </Link>
      </div>

      <div className="relative w-full flex flex-col gap-6 pb-10">
        {/* Row 1 */}
        <div className="flex gap-6 w-max animate-marquee">
          {[...alumniList, ...alumniList].map((alumni, i) => (
            <div key={i} className="flex items-center gap-6 p-2 pr-12 bg-[#e5e5e5] rounded-full border border-white shadow-sm hover:bg-white/40 transition-colors">
              <img src={alumni.image} alt={alumni.name} className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300" referrerPolicy="no-referrer" />
              <div>
                <h3 className="text-2xl font-medium text-[#0a0a0a]">{alumni.name}</h3>
                <p className="text-gray-500 text-base">{alumni.role}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Row 2 (Reverse) */}
        <div className="flex gap-6 w-max animate-marquee-reverse -ml-48">
          {[...alumniList].reverse().concat([...alumniList].reverse()).map((alumni, i) => (
            <div key={i} className="flex items-center gap-6 p-2 pr-12 bg-[#e5e5e5] rounded-full border border-white shadow-sm hover:bg-white/40 transition-colors">
              <img src={alumni.image} alt={alumni.name} className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300" referrerPolicy="no-referrer" />
              <div>
                <h3 className="text-2xl font-medium text-[#0a0a0a]">{alumni.name}</h3>
                <p className="text-gray-500 text-base">{alumni.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
