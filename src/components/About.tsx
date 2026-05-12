import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, BookOpen, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { icon: <Users size={24} />, count: "2,000+", label: "Happy Students", color: "text-brand-600", bg: "bg-brand-100" },
    { icon: <BookOpen size={24} />, count: "15+", label: "Expert Courses", color: "text-purple-600", bg: "bg-purple-100" },
    { icon: <Building size={24} />, count: "Top MNC", label: "Placements", color: "text-green-600", bg: "bg-green-100" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-[-5%] w-[400px] h-[400px] bg-brand-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Visual Area - Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-[4/5] xl:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Students learning at Bhavna Institute" 
                  className="w-full h-full object-cover img-hover-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card rounded-2xl p-5 flex items-center gap-4 border-white/20">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <Award size={24} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">Govt. Certified Institute</p>
                      <p className="text-white/80 text-sm font-medium">ISO 9001:2015 Recognized</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 sm:-right-10 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 z-20 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                    <span className="text-orange-500 font-bold text-2xl">🏆</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900 font-heading leading-none mb-1">10+</p>
                    <p className="text-gray-500 font-medium text-sm">Years of Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-6 border border-brand-100 shadow-sm">
              <Building size={16} />
              About Bhavna Institute
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 font-heading leading-tight">
              Empowering Students with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">Real-World Skills.</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bhavna Institute is a premier computer training center in Meerut, dedicated to providing high-quality, practical education. We don't just teach theory; we prepare you for the industry with hands-on projects and expert mentorship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "100% Practical Training",
                "Industry-Expert Trainers",
                "Placement Assistance",
                "ISO Certified Institute"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-brand-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <Link to="/courses" className="btn-primary inline-flex">
                Explore Our Courses <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-10 pt-8 border-t border-gray-100">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 font-heading">{stat.count}</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
