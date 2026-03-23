import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Clock, IndianRupee, BookOpen, Target, 
  Star, Users, MonitorPlay, Code, PenTool, BarChart, 
  Database, Globe, Cpu, Video, CheckCircle2, Zap, 
  PlayCircle, FileText, Award, Smartphone
} from 'lucide-react';
import { coursesData } from '../data/courses';
import { useEffect } from 'react';

// Helper function to dynamically assign icons based on learning point text
const getIconForLearningPoint = (text: string) => {
  const lower = text.toLowerCase();
  if (lower.includes('html') || lower.includes('css') || lower.includes('code') || lower.includes('script')) return <Code className="text-blue-500" size={24} />;
  if (lower.includes('photoshop') || lower.includes('design') || lower.includes('corel') || lower.includes('canva') || lower.includes('logo')) return <PenTool className="text-purple-500" size={24} />;
  if (lower.includes('excel') || lower.includes('data') || lower.includes('chart') || lower.includes('power bi')) return <BarChart className="text-green-500" size={24} />;
  if (lower.includes('tally') || lower.includes('gst') || lower.includes('accounting') || lower.includes('finance')) return <Database className="text-orange-500" size={24} />;
  if (lower.includes('seo') || lower.includes('marketing') || lower.includes('ads') || lower.includes('social media')) return <Globe className="text-teal-500" size={24} />;
  if (lower.includes('ai') || lower.includes('chatgpt') || lower.includes('midjourney') || lower.includes('automation')) return <Cpu className="text-indigo-500" size={24} />;
  if (lower.includes('video') || lower.includes('editing') || lower.includes('premiere') || lower.includes('capcut')) return <Video className="text-red-500" size={24} />;
  if (lower.includes('computer') || lower.includes('word') || lower.includes('powerpoint') || lower.includes('internet')) return <MonitorPlay className="text-sky-500" size={24} />;
  return <CheckCircle2 className="text-blue-500" size={24} />;
};

export default function CourseDetailsPage() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 bg-[#f5f5f4]">
        <h1 className="text-2xl font-bold mb-4 text-[#0a0a0a]">Course not found</h1>
        <Link to="/courses" className="text-blue-600 hover:underline flex items-center gap-2 font-medium">
          <ArrowLeft size={16} /> Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f4] pb-24">
      {/* Dark Premium Hero Section */}
      <div className="bg-[#0a0a0a] text-white pt-32 pb-48 px-6 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600 blur-[120px]" />
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-600 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-medium text-sm">
            <ArrowLeft size={16} /> Back to all courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-3 mb-2"
              >
                <span className="bg-white/10 text-white border border-white/20 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
                  {course.category}
                </span>
                <div className="flex items-center text-orange-400 text-sm font-bold bg-orange-400/10 px-3 py-1.5 rounded-full border border-orange-400/20">
                  <Star size={14} className="mr-1.5 fill-current" /> {course.rating} Rating
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
              >
                {course.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                {course.description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-gray-300"
              >
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-blue-400" />
                  <span>{course.students} students enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-blue-400" />
                  <span>{course.duration} to complete</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Overlapping Sidebar */}
      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column: Course Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What You Will Learn (Bento Grid Style) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8 flex items-center gap-3">
                <BookOpen className="text-blue-600" /> What You'll Learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {course.learn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors">
                    <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 shrink-0">
                      {getIconForLearningPoint(item)}
                    </div>
                    <span className="text-gray-700 font-medium leading-snug pt-1">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Course Journey / Progress */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8 flex items-center gap-3">
                <Zap className="text-yellow-500 fill-yellow-500/20" /> Course Journey
              </h2>
              
              <div className="space-y-8">
                {/* Progress Bar */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex justify-between text-sm font-bold mb-3">
                    <span className="text-[#0a0a0a] uppercase tracking-wider">Estimated Completion</span>
                    <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{course.duration}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-full rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse" />
                    </motion.div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
                  <div className="hidden sm:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-gray-100 -z-10" />
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4 shadow-sm border-4 border-white">1</div>
                    <h4 className="font-bold text-[#0a0a0a] mb-2">Fundamentals</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Build a strong core foundation in the basics.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4 shadow-sm border-4 border-white">2</div>
                    <h4 className="font-bold text-[#0a0a0a] mb-2">Advanced Skills</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Master complex concepts and techniques.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg mb-4 shadow-sm border-4 border-white">3</div>
                    <h4 className="font-bold text-[#0a0a0a] mb-2">Live Projects</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Apply your skills to real-world scenarios.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Career Outcome */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-[#0a0a0a] to-gray-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="text-blue-400" /> Career Outcome
                </h2>
                <p className="text-xl text-gray-300 font-medium leading-relaxed">
                  {course.outcome}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gray-800 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover opacity-80" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Join <span className="text-white">{course.students}</span> successful graduates
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-24 bg-white rounded-3xl p-2 border border-gray-100 shadow-2xl shadow-black/5"
            >
              <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-2">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-sm">
                  <PlayCircle size={48} className="text-white drop-shadow-lg" />
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-bold text-[#0a0a0a] tracking-tight">{course.fees}</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">One-time payment, full access</div>
                </div>

                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 mb-6"
                >
                  Enroll Now
                </a>

                <div className="space-y-4">
                  <h4 className="font-bold text-[#0a0a0a] text-sm uppercase tracking-wider">This course includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <PlayCircle size={18} className="text-gray-400" /> Practical hands-on training
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <FileText size={18} className="text-gray-400" /> Assignments & Projects
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <Smartphone size={18} className="text-gray-400" /> Access on mobile and desktop
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <Award size={18} className="text-gray-400" /> Certificate of completion
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500 mb-2">Need help deciding?</p>
                  <a href="tel:+919719205268" className="inline-flex items-center gap-2 font-bold text-[#0a0a0a] hover:text-blue-600 transition-colors">
                    Call +91 97192 05268
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
