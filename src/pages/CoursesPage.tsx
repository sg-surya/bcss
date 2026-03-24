import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Users, Search, Filter, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import CourseCardSkeleton from '../components/ui/CourseCardSkeleton';
import ImageWithSkeleton from '../components/ui/ImageWithSkeleton';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All Category', 'Beginner', 'Job-Oriented', 'Professional'];

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Category' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1536px] mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-4xl font-bold text-[#0a0a0a]"
        >
          Courses
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto"
        >
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search in your courses..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-40">
              <select 
                className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all cursor-pointer"
              >
                <option>Sort by Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
            
            <div className="relative w-full sm:w-40">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all cursor-pointer"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => <CourseCardSkeleton key={i} />)
        ) : (
          filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group cursor-pointer bg-white rounded-[2.5rem] border border-black/5 shadow-sm hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-[440px] overflow-hidden relative"
            >
              {/* Image Section with Padding and Radius */}
              <div className="p-4 pb-0">
                <div className="relative h-44 w-full overflow-hidden rounded-[2rem]">
                  <ImageWithSkeleton 
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

                  <Link to={`/courses/${course.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gray-50 group-hover:bg-[#0a0a0a] group-hover:text-white text-[#0a0a0a] font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Explore Course <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
      
      {filteredCourses.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No courses found matching your search.</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All Category');
            }}
            className="mt-4 text-blue-600 font-medium hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
