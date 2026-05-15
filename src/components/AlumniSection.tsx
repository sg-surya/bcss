import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';

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
    <section id="alumni" className="py-24 bg-[#fafafa] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-[1536px] mx-auto text-center mb-16 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-xs font-bold uppercase tracking-widest mb-6 text-blue-700"
        >
          <GraduationCap size={14} className="text-blue-700" />
          Alumni Network
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#0a0a0a] mb-6 leading-tight">
          Meet Our <span className="font-serif italic text-blue-600 font-light">Alumni</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl mb-10">
          Join a network of successful professionals working at top companies worldwide.
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-8 pb-10">
        {/* Row 1 */}
        <div className="flex gap-6 w-max animate-marquee">
          {[...alumniList, ...alumniList].map((alumni, i) => (
            <div key={i} className="flex items-center gap-5 p-3 pr-10 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <img src={alumni.image} alt={alumni.name} className="w-16 h-16 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-300" referrerPolicy="no-referrer" />
              <div>
                <h3 className="text-lg font-bold text-[#0a0a0a]">{alumni.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{alumni.role}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Row 2 (Reverse) */}
        <div className="flex gap-6 w-max animate-marquee-reverse -ml-48">
          {[...alumniList].reverse().concat([...alumniList].reverse()).map((alumni, i) => (
            <div key={i} className="flex items-center gap-5 p-3 pr-10 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <img src={alumni.image} alt={alumni.name} className="w-16 h-16 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-300" referrerPolicy="no-referrer" />
              <div>
                <h3 className="text-lg font-bold text-[#0a0a0a]">{alumni.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{alumni.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12 relative z-10">
        <Link 
          to="/alumni" 
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0a0a0a] text-white font-medium hover:bg-black transition-colors group text-base"
        >
          View All Alumni
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
