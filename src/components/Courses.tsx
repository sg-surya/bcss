import { motion } from 'motion/react';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: "Full-Stack Engineering",
      category: "Engineering",
      duration: "6 Months",
      modules: 12,
      price: "₹49,999",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Data Science & AI",
      category: "Data",
      duration: "8 Months",
      modules: 16,
      price: "₹59,999",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "UI/UX Product Design",
      category: "Design",
      duration: "4 Months",
      modules: 8,
      price: "₹34,999",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="courses" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
            Featured <span className="font-serif italic text-gray-400">Programs</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-lg">Curriculums designed by industry veterans.</p>
        </div>
        <button className="text-sm font-medium text-[#0a0a0a] flex items-center gap-2 hover:text-blue-600 transition-colors">
          View All Programs <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="relative h-64 mb-6 overflow-hidden rounded-3xl premium-card p-2">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover rounded-2xl filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0a0a0a]">
                {course.category}
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-3 group-hover:text-blue-600 transition-colors">{course.title}</h3>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1.5">
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen size={16} />
                <span>{course.modules} Modules</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-black/5">
              <span className="text-lg font-medium text-[#0a0a0a]">{course.price}</span>
              <span className="text-sm font-medium text-blue-600 flex items-center gap-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Enroll <ArrowRight size={16} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
