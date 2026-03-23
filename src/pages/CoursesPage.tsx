import { motion } from 'motion/react';
import { Star, Users, Search, Filter } from 'lucide-react';
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
            className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group"
          >
            <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                {course.category}
              </span>
              <span className="flex items-center text-orange-400 text-sm font-bold">
                <Star size={14} className="mr-1 fill-current" /> {course.rating}
              </span>
            </div>
            
            <h3 className="font-bold text-[#0a0a0a] text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {course.title}
            </h3>
            
            <div className="mt-auto pt-6 flex items-center justify-between text-sm text-gray-500 mb-4">
              <span className="flex items-center font-medium">
                <Users size={14} className="mr-1.5" /> {course.students} students
              </span>
              <span className="font-bold text-blue-600 text-lg">{course.fees}</span>
            </div>
            
            <Link 
              to={`/courses/${course.id}`} 
              className="w-full block text-center bg-gray-50 text-[#0a0a0a] py-3 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition-colors border border-gray-100 hover:border-blue-600"
            >
              Learn More
            </Link>
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
