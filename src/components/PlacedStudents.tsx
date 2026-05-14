import { motion } from 'motion/react';
import { Briefcase, Building2, Trophy, ArrowUpRight } from 'lucide-react';

const placedStudents = [
  {
    name: "Rahul Kumar",
    company: "TCS",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    package: "4.5 LPA"
  },
  {
    name: "Priya Sharma",
    company: "Infosys",
    role: "System Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    package: "4.2 LPA"
  },
  {
    name: "Amit Singh",
    company: "Wipro",
    role: "Project Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    package: "4.0 LPA"
  },
  {
    name: "Neha Gupta",
    company: "HCL",
    role: "Software Analyst",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    package: "3.8 LPA"
  }
];

export default function PlacedStudents() {
  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-[1536px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-xs font-bold uppercase tracking-widest mb-6 text-blue-700"
          >
            <Trophy size={14} className="text-blue-700" />
            Wall of Fame
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#0a0a0a] mb-6 leading-tight">
            Our Placed <span className="font-serif italic text-blue-600 font-light">Students</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl">
            We take pride in our students who have successfully secured placements at top companies.
          </p>
        </div>

        {/* Desktop View: Grid (Original) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {placedStudents.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center">
                
                {/* Arrow icon on top right */}
                <div className="absolute top-6 right-6 text-gray-300 group-hover:text-blue-500 transition-colors duration-300">
                  <ArrowUpRight size={20} />
                </div>

                {/* Avatar Section */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 blur-xl opacity-70 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md relative z-10 transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Mini badge */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-white flex items-center justify-center z-20 shadow-md">
                    <Trophy size={12} className="text-white fill-white" />
                  </div>
                </div>

                {/* Info Section */}
                <h3 className="text-2xl font-bold text-[#0a0a0a] mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {student.name}
                </h3>
                <p className="text-gray-500 text-sm font-medium mb-6">
                  {student.role}
                </p>

                {/* Stats/Details Grid */}
                <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-gray-100/80 transition-colors duration-300 group-hover:bg-blue-50/30 group-hover:border-blue-100/50">
                    <Building2 size={16} className="text-gray-400 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                    <p className="text-xs text-gray-400 mb-1">Company</p>
                    <p className="font-bold text-[#0a0a0a] text-sm">{student.company}</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-gray-100/80 transition-colors duration-300 group-hover:bg-blue-50/30 group-hover:border-blue-100/50">
                    <Briefcase size={16} className="text-gray-400 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                    <p className="text-xs text-gray-400 mb-1">Package</p>
                    <p className="font-bold text-blue-600 text-sm">{student.package}</p>
                  </div>
                </div>

                {/* Hover border line at bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-1/2 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Auto-scrolling Marquee */}
        <div className="md:hidden relative overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              animation: marquee 15s linear infinite;
              width: max-content;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="animate-marquee gap-6">
            {[...placedStudents, ...placedStudents].map((student, index) => (
              <div
                key={index}
                className="group relative shrink-0 w-[280px]"
              >
                {/* Card Background */}
                <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center">
                  
                  {/* Arrow icon on top right */}
                  <div className="absolute top-6 right-6 text-gray-300 group-hover:text-blue-500 transition-colors duration-300">
                    <ArrowUpRight size={20} />
                  </div>

                  {/* Avatar Section */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 blur-xl opacity-70 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md relative z-10 transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Mini badge */}
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-white flex items-center justify-center z-20 shadow-md">
                      <Trophy size={12} className="text-white fill-white" />
                    </div>
                  </div>

                  {/* Info Section */}
                  <h3 className="text-2xl font-bold text-[#0a0a0a] mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {student.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mb-6">
                    {student.role}
                  </p>

                  {/* Stats/Details Grid */}
                  <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                    <div className="bg-slate-50 rounded-2xl p-4 text-center border border-gray-100/80 transition-colors duration-300 group-hover:bg-blue-50/30 group-hover:border-blue-100/50">
                      <Building2 size={16} className="text-gray-400 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                      <p className="text-xs text-gray-400 mb-1">Company</p>
                      <p className="font-bold text-[#0a0a0a] text-sm">{student.company}</p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-4 text-center border border-gray-100/80 transition-colors duration-300 group-hover:bg-blue-50/30 group-hover:border-blue-100/50">
                      <Briefcase size={16} className="text-gray-400 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                      <p className="text-xs text-gray-400 mb-1">Package</p>
                      <p className="font-bold text-blue-600 text-sm">{student.package}</p>
                    </div>
                  </div>

                  {/* Hover border line at bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-1/2 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
