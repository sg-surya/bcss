import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, ArrowRight, Star } from 'lucide-react';

const alumniList = [
  { name: "Rahul Kumar", role: "Frontend Engineer", company: "TCS", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
  { name: "Priya Sharma", role: "UI/UX Designer", company: "Wipro", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
  { name: "Amit Patel", role: "Data Analyst", company: "Infosys", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
  { name: "Neha Gupta", role: "Digital Marketer", company: "HCL", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
  { name: "Vikram Singh", role: "Backend Developer", company: "Tech Mahindra", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { name: "Anjali Desai", role: "Product Manager", company: "Google", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
];

export default function AlumniSection() {
  // We duplicate the list 4 times to ensure smooth infinite scrolling even on ultra-wide screens
  const marqueeItems = [...alumniList, ...alumniList, ...alumniList, ...alumniList];
  const reverseMarqueeItems = [...alumniList].reverse().concat([...alumniList].reverse(), [...alumniList].reverse(), [...alumniList].reverse());

  return (
    <section id="alumni" className="py-24 bg-gradient-to-b from-white to-brand-50/30 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-[1536px] mx-auto text-center mb-16 px-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-6 border border-brand-100 shadow-sm"
        >
          <GraduationCap size={16} />
          Our Pride
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 font-heading"
        >
          Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">Successful Alumni</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join a thriving network of 2000+ professionals who transformed their careers with Bhavna Institute and are now leading the tech industry.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link 
            to="/courses" 
            className="btn-primary inline-flex mx-auto"
          >
            Start Your Journey <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex flex-col gap-8 pb-10 pt-4 z-0">
        {/* Row 1 */}
        <div className="flex overflow-hidden relative w-full">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex gap-6 px-3 w-max hover:[animation-play-state:paused]"
          >
            {marqueeItems.map((alumni, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 p-5 w-[280px] sm:w-[320px] bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 group cursor-default">
                <div className="relative shrink-0">
                  <img src={alumni.image} alt={alumni.name} className="w-20 h-20 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white p-1 rounded-full border-2 border-white shadow-sm">
                    <Star size={12} className="fill-current" />
                  </div>
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{alumni.name}</h3>
                  <p className="text-brand-600 font-medium text-sm mb-3">{alumni.role}</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-lg border border-gray-100 group-hover:bg-brand-50 transition-colors">
                    <Briefcase size={12} className="text-gray-500 group-hover:text-brand-500" />
                    <span className="text-xs font-semibold text-gray-700 group-hover:text-brand-700">{alumni.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Row 2 (Reverse) */}
        <div className="flex overflow-hidden relative w-full">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
            className="flex gap-6 px-3 w-max hover:[animation-play-state:paused]"
          >
            {reverseMarqueeItems.map((alumni, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 p-5 w-[280px] sm:w-[320px] bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 group cursor-default">
                <div className="relative shrink-0">
                  <img src={alumni.image} alt={alumni.name} className="w-20 h-20 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-2 border-white shadow-sm">
                    <Star size={12} className="fill-current" />
                  </div>
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{alumni.name}</h3>
                  <p className="text-brand-600 font-medium text-sm mb-3">{alumni.role}</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-lg border border-gray-100 group-hover:bg-brand-50 transition-colors">
                    <Briefcase size={12} className="text-gray-500 group-hover:text-brand-500" />
                    <span className="text-xs font-semibold text-gray-700 group-hover:text-brand-700">{alumni.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
