import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Clock, IndianRupee, BookOpen, Target, 
  Star, Users, MonitorPlay, Code, PenTool, BarChart, 
  Database, Globe, Cpu, Video, CheckCircle2, Zap, 
  PlayCircle, FileText, Award, Smartphone,
  ChevronDown, ChevronUp, Check, Briefcase, MessageSquare, HelpCircle
} from 'lucide-react';
import { coursesData } from '../data/courses';
import { useEffect, useState } from 'react';

// Helper function to dynamically assign icons based on learning point text
const getIconForLearningPoint = (text: string) => {
  const lower = text.toLowerCase();
  
  // Code / Web Development
  if (lower.includes('html') || lower.includes('css') || lower.includes('code') || lower.includes('script') || lower.includes('website') || lower.includes('structure') || lower.includes('styling')) return <Code className="text-blue-500" size={24} />;
  
  // Design / Graphics
  if (lower.includes('photoshop') || lower.includes('design') || lower.includes('corel') || lower.includes('canva') || lower.includes('logo') || lower.includes('poster') || lower.includes('banner') || lower.includes('print')) return <PenTool className="text-purple-500" size={24} />;
  
  // Data / Excel / Charts
  if (lower.includes('excel') || lower.includes('data') || lower.includes('chart') || lower.includes('power bi') || lower.includes('formula') || lower.includes('dashboard') || lower.includes('analysis')) return <BarChart className="text-green-500" size={24} />;
  
  // Accounting / Database
  if (lower.includes('tally') || lower.includes('gst') || lower.includes('accounting') || lower.includes('finance') || lower.includes('inventory') || lower.includes('billing') || lower.includes('financial')) return <Database className="text-orange-500" size={24} />;
  
  // Marketing / Web / SEO
  if (lower.includes('seo') || lower.includes('marketing') || lower.includes('ads') || lower.includes('social media') || lower.includes('internet')) return <Globe className="text-teal-500" size={24} />;
  
  // AI / Automation / Core Tech
  if (lower.includes('ai') || lower.includes('chatgpt') || lower.includes('midjourney') || lower.includes('automation') || lower.includes('fundamentals')) return <Cpu className="text-indigo-500" size={24} />;
  
  // Video / Editing
  if (lower.includes('video') || lower.includes('editing') || lower.includes('premiere') || lower.includes('capcut') || lower.includes('reels') || lower.includes('shorts') || lower.includes('effects') || lower.includes('transitions')) return <Video className="text-red-500" size={24} />;
  
  // Computer / Office
  if (lower.includes('computer') || lower.includes('word') || lower.includes('powerpoint')) return <MonitorPlay className="text-sky-500" size={24} />;
  
  // Speed / Typing
  if (lower.includes('typing') || lower.includes('fast') || lower.includes('speed')) return <Zap className="text-yellow-500" size={24} />;
  
  // Interactive / Live
  if (lower.includes('live') || lower.includes('play') || lower.includes('interactive')) return <PlayCircle className="text-rose-500" size={24} />;
  
  // Business / Career / Portfolio
  if (lower.includes('freelanc') || lower.includes('job') || lower.includes('portfolio') || lower.includes('client') || lower.includes('business')) return <Briefcase className="text-amber-600" size={24} />;
  
  // Mobile / Responsive
  if (lower.includes('mobile') || lower.includes('app') || lower.includes('responsive')) return <Smartphone className="text-pink-500" size={24} />;
  
  // Certificate / Award
  if (lower.includes('certificate') || lower.includes('award') || lower.includes('outcome')) return <Award className="text-yellow-600" size={24} />;

  // Default
  return <CheckCircle2 className="text-blue-500" size={24} />;
};

export default function CourseDetailsPage() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === id);
  const [activeTab, setActiveTab] = useState('overview');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'curriculum', label: 'Curriculum', icon: FileText },
    { id: 'prerequisites', label: 'Prerequisites', icon: CheckCircle2 },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  // Mock data for new tabs (since it's not in coursesData)
  const curriculumData = [
    { title: 'Month 1: Fundamentals & Basics', items: ['Introduction to core concepts', 'Setting up the environment', 'Basic tools and techniques', 'First practice assignment'] },
    { title: 'Month 2: Advanced Skills & Practice', items: ['Deep dive into advanced topics', 'Real-world problem solving', 'Optimizing workflow', 'Mid-term project'] },
    { title: 'Month 3: Live Projects & Freelancing', items: ['Building a professional portfolio', 'Freelancing platforms setup (Fiverr/Upwork)', 'Client communication strategies', 'Final live project delivery'] },
  ];

  const projectsData = [
    'Fiverr/Upwork Gig Setup & Optimization',
    'Complete Portfolio Website Creation',
    'Live Client Project Simulation',
    'End-to-End Ad Campaign / Design Project'
  ];

  const reviewsData = [
    { name: 'Rahul S.', role: 'Student', text: 'This course changed my career path. The practical approach is amazing!', img: 'https://i.pravatar.cc/150?img=11' },
    { name: 'Priya M.', role: 'Freelancer', text: 'I started earning within 3 months of joining. Highly recommended.', img: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Amit K.', role: 'Professional', text: 'The mentors are very supportive and the curriculum is up-to-date.', img: 'https://i.pravatar.cc/150?img=8' },
  ];

  const faqData = [
    { q: 'Kya ye beginners ke liye hai?', a: 'Haan, bilkul! Ye course zero se start hota hai, koi prior experience nahi chahiye.' },
    { q: 'Online available hai?', a: 'Haan, aap online aur offline dono modes mein classes attend kar sakte hain.' },
    { q: 'Certificate milega?', a: 'Yes, course complete karne par aapko ek verified certificate milega.' },
    { q: 'Job support milega?', a: '100% placement assistance aur freelancing guidance provide ki jaati hai.' },
  ];

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

        <div className="max-w-[1536px] mx-auto relative z-10">
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
      <div className="max-w-[1536px] mx-auto px-6 -mt-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column: Course Details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Horizontal Tabs Navigation */}
            <div className="sticky top-20 z-30 py-4 -mx-6 px-6 md:mx-0 md:px-0">
              <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2 snap-x">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`snap-start shrink-0 group flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#0a0a0a] text-white shadow-lg shadow-black/10' 
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#0a0a0a] border border-black/5'
                      }`}
                    >
                      <Icon size={18} className={`transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-blue-500'}`} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content Area */}
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-black/5 shadow-sm min-h-[500px]">
              <AnimatePresence mode="wait">
                
                {/* 1. OVERVIEW TAB */}
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-12"
                  >
                    {/* About Course */}
                    <div>
                      <h2 className="text-2xl font-bold text-[#0a0a0a] mb-5 flex items-center gap-3">
                        <BookOpen className="text-blue-600" /> About This Course
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        Is course me aap <span className="text-[#0a0a0a] font-bold">{course.title}</span> aur freelancing seekh kar 3 months me earning start kar sakte ho. Practical training aur live projects ke sath apne career ko boost karein.
                      </p>
                    </div>

                    {/* Mentor Section */}
                    <div>
                      <h3 className="text-xl font-bold text-[#0a0a0a] mb-5 flex items-center gap-2">
                        <Users className="text-purple-500" /> Your Mentor
                      </h3>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100/50 rounded-3xl p-6 flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-black/5 overflow-hidden shrink-0">
                          <img 
                            src="https://media.licdn.com/dms/image/v2/D5603AQGx-6ApteXvQA/profile-displayphoto-scale_200_200/B56Zzgiis5HMAc-/0/1773293679145?e=1775692800&v=beta&t=R6UwVYWEfKXTRWKEYZTbrAnp7E9kqCQ55weoZwn0hl4" 
                            alt="Surya Pratap Singh" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0a0a0a] mb-1 flex items-center gap-2">
                            Surya Pratap Singh 
                            <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Instructor</span>
                          </h3>
                          <p className="text-sm text-gray-600 font-medium">
                            Pursuing Bachelor's (AI & DE) from IIT Jodhpur
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* What You Will Learn */}
                    <div>
                      <h3 className="text-xl font-bold text-[#0a0a0a] mb-5 flex items-center gap-2">
                        <Target className="text-orange-500" /> What You'll Learn
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {course.learn.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-black/5 hover:bg-white hover:shadow-md hover:border-blue-100 transition-all duration-300">
                            <div className="mt-0.5 bg-white p-2 rounded-xl shadow-sm border border-black/5">
                              {getIconForLearningPoint(item)}
                            </div>
                            <span className="text-gray-700 font-medium text-sm leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Career Outcomes */}
                    <div className="bg-[#0a0a0a] rounded-3xl p-8 relative overflow-hidden text-white">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl" />
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                          <Briefcase className="text-blue-400" /> Career Outcomes
                        </h3>
                        <p className="text-gray-300 font-medium leading-relaxed mb-8 max-w-2xl">
                          {course.outcome}
                        </p>
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
                          <IndianRupee size={18} className="text-green-400" /> High Earning Potential
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. CURRICULUM TAB */}
                {activeTab === 'curriculum' && (
                  <motion.div
                    key="curriculum"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8 flex items-center gap-3">
                      <FileText className="text-blue-600" /> Course Curriculum
                    </h2>
                    <div className="space-y-4">
                      {curriculumData.map((module, idx) => (
                        <div key={idx} className={`border rounded-2xl overflow-hidden bg-white transition-colors ${openAccordion === idx ? 'border-blue-200 shadow-md shadow-blue-900/5' : 'border-gray-200 hover:border-blue-100'}`}>
                          <button
                            onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors text-left"
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${openAccordion === idx ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                {idx + 1}
                              </div>
                              <span className="font-bold text-[#0a0a0a] text-lg">{module.title}</span>
                            </div>
                            {openAccordion === idx ? (
                              <ChevronUp className="text-blue-600 shrink-0" />
                            ) : (
                              <ChevronDown className="text-gray-400 shrink-0" />
                            )}
                          </button>
                          <AnimatePresence>
                            {openAccordion === idx && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="p-5 pt-0 pl-[76px] border-t border-gray-50">
                                  <ul className="space-y-4 mt-4">
                                    {module.items.map((item, i) => (
                                      <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 3. PREREQUISITES TAB */}
                {activeTab === 'prerequisites' && (
                  <motion.div
                    key="prerequisites"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8 flex items-center gap-3">
                      <CheckCircle2 className="text-blue-600" /> Prerequisites
                    </h2>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 mb-8">
                      <p className="text-blue-800 font-bold text-lg flex items-center gap-2">
                        <Zap className="fill-blue-600 text-blue-600" size={20} /> 
                        No prior experience required! (Beginner Friendly)
                      </p>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-blue-100 transition-colors">
                        <div className="bg-gray-50 p-3 rounded-xl text-gray-600"><MonitorPlay size={24} /></div>
                        <span className="font-medium text-gray-700 text-lg">Basic computer knowledge</span>
                      </li>
                      <li className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-blue-100 transition-colors">
                        <div className="bg-gray-50 p-3 rounded-xl text-gray-600"><Code size={24} /></div>
                        <span className="font-medium text-gray-700 text-lg">Laptop or PC recommended for practice</span>
                      </li>
                      <li className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-blue-100 transition-colors">
                        <div className="bg-gray-50 p-3 rounded-xl text-gray-600"><Globe size={24} /></div>
                        <span className="font-medium text-gray-700 text-lg">Basic internet browsing skills</span>
                      </li>
                    </ul>
                  </motion.div>
                )}

                {/* 4. PROJECTS TAB */}
                {activeTab === 'projects' && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-[#0a0a0a] mb-2 flex items-center gap-3">
                      <Briefcase className="text-blue-600" /> Real-World Projects
                    </h2>
                    <p className="text-gray-500 font-medium mb-8">Build your portfolio with live assignments and practical work.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {projectsData.map((project, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition-all group relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform" />
                          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Target size={28} />
                          </div>
                          <h4 className="font-bold text-[#0a0a0a] text-xl leading-tight mb-3">{project}</h4>
                          <p className="text-sm text-gray-500 font-medium">Hands-on practical implementation</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 5. REVIEWS TAB */}
                {activeTab === 'reviews' && (
                  <motion.div
                    key="reviews"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8 flex items-center gap-3">
                      <Star className="text-yellow-500 fill-yellow-500" /> Student Reviews
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {reviewsData.map((review, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-shadow flex flex-col">
                          <div className="flex text-yellow-400 mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-current" />)}
                          </div>
                          <p className="text-gray-700 font-medium italic mb-8 text-lg leading-relaxed">"{review.text}"</p>
                          <div className="flex items-center gap-4 mt-auto">
                            <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover bg-gray-100 border-2 border-white shadow-sm" />
                            <div>
                              <h4 className="font-bold text-[#0a0a0a]">{review.name}</h4>
                              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{review.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 6. FAQ TAB */}
                {activeTab === 'faq' && (
                  <motion.div
                    key="faq"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8 flex items-center gap-3">
                      <HelpCircle className="text-blue-600" /> Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {faqData.map((faq, idx) => (
                        <div key={idx} className={`border rounded-2xl overflow-hidden bg-white transition-colors ${openFaq === idx ? 'border-blue-200 shadow-md shadow-blue-900/5' : 'border-gray-200 hover:border-blue-100'}`}>
                          <button
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
                          >
                            <span className="font-bold text-[#0a0a0a] text-lg pr-4">{faq.q}</span>
                            {openFaq === idx ? (
                              <ChevronUp className="text-blue-600 shrink-0" />
                            ) : (
                              <ChevronDown className="text-gray-400 shrink-0" />
                            )}
                          </button>
                          <AnimatePresence>
                            {openFaq === idx && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="p-6 pt-0 text-gray-600 font-medium leading-relaxed text-lg">
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-24 bg-white rounded-[2.5rem] p-3 border border-black/5 shadow-2xl shadow-black/5"
            >
              <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-4">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-sm">
                  <PlayCircle size={48} className="text-white drop-shadow-lg" />
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="mb-6">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-bold text-[#0a0a0a] tracking-tight">{course.fees}</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">One-time payment, full access</div>
                </div>

                <a 
                  href={`https://wa.me/919719205268?text=${encodeURIComponent(`Hi, I am interested in enrolling in the ${course.title} course.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 mb-6"
                >
                  Enroll Now
                </a>

                <div className="space-y-4 bg-gray-50 rounded-2xl p-5 border border-black/5">
                  <h4 className="font-bold text-[#0a0a0a] text-xs uppercase tracking-wider mb-4">This course includes</h4>
                  <ul className="space-y-3.5">
                    <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <PlayCircle size={18} className="text-blue-600" /> Practical hands-on training
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <FileText size={18} className="text-blue-600" /> Assignments & Projects
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <Smartphone size={18} className="text-blue-600" /> Access on mobile and desktop
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <Award size={18} className="text-blue-600" /> Certificate of completion
                    </li>
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500 font-medium mb-1">Need help deciding?</p>
                  <a href="tel:+919719205268" className="inline-flex items-center gap-1.5 font-bold text-[#0a0a0a] hover:text-blue-600 transition-colors text-sm">
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
