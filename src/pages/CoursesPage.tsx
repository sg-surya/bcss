import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, ArrowRight, Clock, ChevronDown, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import CourseCardSkeleton from '../components/ui/CourseCardSkeleton';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [isLoading, setIsLoading] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Sort by Latest');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All Category', 'Beginner', 'Job-Oriented', 'Professional'];

  const getBasePrice = (feesStr: string) => {
    const match = feesStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const filteredCourses = coursesData
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Category' || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (selectedSort === 'Price: Low to High') {
        return getBasePrice(a.fees) - getBasePrice(b.fees);
      } else if (selectedSort === 'Price: High to Low') {
        return getBasePrice(b.fees) - getBasePrice(a.fees);
      }
      return 0;
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
            {/* Sort Dropdown */}
            <div className="relative w-full sm:w-44">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full flex items-center justify-between pl-4 pr-4 py-3 bg-white/80 backdrop-blur-md border border-black/5 rounded-xl text-sm font-medium text-[#0a0a0a] cursor-pointer shadow-sm hover:bg-white transition-all"
              >
                <span>{selectedSort}</span>
                <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 w-full bg-white/90 backdrop-blur-xl border border-black/5 rounded-xl shadow-lg z-50 overflow-hidden py-1"
                >
                  {['Sort by Latest', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setSelectedSort(option);
                        setIsSortOpen(false);
                      }}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors"
                    >
                      {option}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
            
            {/* Category Dropdown */}
            <div className="relative w-full sm:w-44">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full flex items-center justify-between pl-4 pr-4 py-3 bg-white/80 backdrop-blur-md border border-black/5 rounded-xl text-sm font-medium text-[#0a0a0a] cursor-pointer shadow-sm hover:bg-white transition-all"
              >
                <span>{selectedCategory}</span>
                <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCategoryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 w-full bg-white/90 backdrop-blur-xl border border-black/5 rounded-xl shadow-lg z-50 overflow-hidden py-1"
                >
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsCategoryOpen(false);
                      }}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors"
                    >
                      {cat}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => <CourseCardSkeleton key={i} />)
        ) : (
          filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group bg-white rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Image Section with Padding */}
              <div className="p-3 pb-0">
                <div className="relative h-44 w-full overflow-hidden rounded-[1.5rem]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {course.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs font-medium">
                    <Clock size={13} className="mr-1" /> {course.duration}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0a0a0a] leading-snug mb-1.5 line-clamp-1">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-400 mb-5">
                  by <span className="text-gray-600 font-medium">{course.instructor}</span>
                </p>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users size={16} className="text-blue-500" />
                      <span className="font-semibold text-gray-600">{course.students}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#0a0a0a]">{course.fees}</span>
                      <div className="flex items-center gap-1">
                        <Star size={13} className="text-orange-400 fill-current" />
                        <span className="text-sm font-bold text-gray-600">{course.rating}</span>
                      </div>
                    </div>
                  </div>

                  <Link to={`/courses/${course.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-gray-50 group-hover:bg-[#0a0a0a] text-[#0a0a0a] group-hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      Explore Course <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
