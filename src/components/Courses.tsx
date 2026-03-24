import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { coursesData } from '../data/courses';

export default function Courses() {
  const navigate = useNavigate();
  
  // Show only first 6 courses on home page
  const courses = coursesData.slice(0, 6);

  return (
    <section id="courses" className="py-24 px-6 max-w-[1536px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
            Our Popular <span className="font-serif italic text-gray-400">Courses</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-lg">Job-oriented programs designed to make you industry-ready.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            navigate('/courses');
            window.scrollTo(0, 0);
          }}
          className="hidden md:flex relative overflow-hidden items-center gap-2 text-[#0a0a0a] font-medium hover:text-blue-600 transition-colors group px-6 py-3 rounded-full border border-black/10 hover:border-blue-600/30 hover:bg-blue-50/50"
        >
          <span className="absolute inset-0 w-[150%] h-full -translate-x-full bg-gradient-to-r from-transparent via-blue-600/5 to-transparent group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12" />
          <span className="relative z-10 flex items-center gap-2">
            View All Courses <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group cursor-pointer bg-white rounded-[2.5rem] border border-black/5 shadow-sm hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-[440px] overflow-hidden relative"
            onClick={() => {
              navigate('/courses');
              window.scrollTo(0, 0);
            }}
          >
            {/* Image Section with Padding and Radius */}
            <div className="p-4 pb-0">
              <div className="relative h-44 w-full overflow-hidden rounded-[2rem]">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-0.5 shadow-sm">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    <div className="w-1 h-1 bg-black rounded-full" />
                    <div className="w-1 h-1 bg-black rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {course.category}
                </span>
                <div className="flex items-center text-gray-400 text-xs font-medium">
                  <Clock size={14} className="mr-1" /> {course.duration}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-0.5 tracking-tight line-clamp-1">
                {course.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">
                by <span className="text-gray-600 font-medium">{course.instructor || 'Michael Anderson'}</span>
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                          <img src={`https://i.pravatar.cc/100?u=${course.id}${i}`} alt="user" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                    <span className="ml-3 text-sm font-bold text-gray-400">+{course.students}</span>
                  </div>
                  <div className="text-2xl font-bold text-[#0a0a0a]">
                    {course.fees}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gray-50 group-hover:bg-[#0a0a0a] group-hover:text-white text-[#0a0a0a] font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Explore Course <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="md:hidden flex justify-center">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            navigate('/courses');
            window.scrollTo(0, 0);
          }}
          className="relative overflow-hidden flex items-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-2xl font-medium hover:bg-blue-600 transition-colors group"
        >
          <span className="absolute inset-0 w-[150%] h-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12" />
          <span className="relative z-10 flex items-center gap-2">
            View All Courses <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </div>
    </section>
  );
}
