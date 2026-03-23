import { motion } from 'motion/react';
import { ArrowRight, Clock, IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Courses() {
  const navigate = useNavigate();
  
  const courses = [
    {
      title: "AI Tools + Freelancing",
      duration: "3 Months",
      price: "Affordable",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Web Development",
      duration: "3 Months",
      price: "Affordable",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Data Analytics",
      duration: "3 Months",
      price: "Affordable",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Digital Marketing",
      duration: "3 Months",
      price: "Affordable",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Tally + GST",
      duration: "3 Months",
      price: "Affordable",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Graphic Design",
      duration: "3 Months",
      price: "Affordable",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="courses" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
            Our Popular <span className="font-serif italic text-gray-400">Courses</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-lg">Job-oriented programs designed to make you industry-ready.</p>
        </div>
        <button 
          onClick={() => {
            navigate('/courses');
            window.scrollTo(0, 0);
          }}
          className="hidden md:flex items-center gap-2 text-[#0a0a0a] font-medium hover:text-blue-600 transition-colors group"
        >
          View All Courses <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group cursor-pointer premium-card p-3 rounded-3xl"
          >
            <div className="relative h-56 mb-6 overflow-hidden rounded-2xl">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="px-3 pb-3">
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 group-hover:text-blue-600 transition-colors">{course.title}</h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1.5">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <IndianRupee size={16} />
                  <span>{course.price}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-black/5">
                <button 
                  onClick={() => {
                    navigate('/courses');
                    window.scrollTo(0, 0);
                  }}
                  className="w-full bg-gray-50 text-[#0a0a0a] py-3 rounded-xl text-sm font-medium group-hover:bg-[#0a0a0a] group-hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="md:hidden flex justify-center">
        <button 
          onClick={() => {
            navigate('/courses');
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-2xl font-medium hover:bg-blue-600 transition-colors"
        >
          View All Courses <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
