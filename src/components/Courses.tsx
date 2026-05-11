import { Clock, IndianRupee, Users, ArrowRight, BarChart, Flame } from 'lucide-react';
import { courses } from '../data/courses';
import { motion } from 'motion/react';

export default function Courses() {
  return (
    <section id="courses" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-[1536px] mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            Explore Our Programs
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 font-heading"
          >
            Industry-Relevant <span className="text-brand-600">Courses</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Practical, job-oriented computer training designed to make you industry-ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={course.id}
              className="premium-card group overflow-hidden flex flex-col bg-white h-full"
            >
              {/* Thumbnail Container */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-full h-full object-cover img-hover-zoom"
                  referrerPolicy="no-referrer"
                />
                
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-10">
                    <Flame size={14} className="fill-current" />
                    Bestseller
                  </div>
                )}
                
                {/* Overlay Gradient for readability if needed, though clean design usually skips it */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                
                {/* Top Meta Data (Difficulty & Students) */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 ${
                    course.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 border border-green-100' :
                    course.difficulty === 'Intermediate' ? 'bg-orange-50 text-orange-700 border border-orange-100' :
                    'bg-red-50 text-red-700 border border-red-100'
                  }`}>
                    <BarChart size={14} />
                    {course.difficulty}
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                    <Users size={16} />
                    <span>{course.studentCount}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading group-hover:text-brand-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
                  {course.description}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-gray-100 mb-6"></div>

                {/* Bottom Meta Data (Duration & Pricing) */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                      <Clock size={16} />
                    </div>
                    <span className="font-semibold text-sm">{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-900">
                    <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                      <IndianRupee size={16} />
                    </div>
                    <span className="font-bold text-lg">{course.pricing}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href={`https://wa.me/919719205268?text=Hi,%20I%20am%20interested%20in%20the%20${course.title}%20course.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-brand-100 text-brand-700 font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-all duration-300 shadow-sm"
                >
                  Enroll Now
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/919719205268?text=Hi,%20I%20want%20to%20know%20more%20about%20all%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
          >
            Download Full Syllabus Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
