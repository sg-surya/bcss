import { motion } from 'motion/react';
import { Star, Users, Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { useState } from 'react';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Category');

  const categories = ['All Category', 'Beginner', 'Job-Oriented', 'Professional'];

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Category' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
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
        {filteredCourses.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className="bg-white rounded-[2rem] border border-black/5 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col h-full group overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-60 overflow-hidden p-2">
              <div className="w-full h-full relative overflow-hidden rounded-[1.5rem]">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-white/95 backdrop-blur-md text-[#0a0a0a] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 z-20">
                  <span className="flex items-center bg-white/95 backdrop-blur-md text-orange-500 text-xs font-bold px-2.5 py-1.5 rounded-full shadow-sm">
                    <Star size={14} className="mr-1 fill-current" /> {course.rating}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
              <h3 className="font-bold text-[#0a0a0a] text-xl mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                {course.title}
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                <span className="flex items-center">
                  <Users size={16} className="mr-1.5 text-gray-400" /> {course.students} students
                </span>
              </div>
              
              <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Course Fee</span>
                  <span className="font-bold text-[#0a0a0a] text-2xl">{course.fees}</span>
                </div>
                
                <Link 
                  to={`/courses/${course.id}`} 
                  className="inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn"
                >
                  Learn More
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
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
