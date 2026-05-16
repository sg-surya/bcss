import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, BookOpen, FileText, Briefcase, HelpCircle,
  CheckCircle2, ChevronDown, ChevronUp, GraduationCap, Star, Check,
  Users, Clock, Award, Zap, BarChart, Layers, Mail, Cpu
} from 'lucide-react';
import { coursesData } from '../data/courses';
import { useEffect, useState } from 'react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'curriculum', label: 'Curriculum', icon: FileText },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
];

const aboutIntoParagraphs = (text: string): string[] => {
  const parts = text.split(/\.\s+/).filter(Boolean);
  if (parts.length <= 2) return [text];
  const mid = Math.ceil(parts.length / 2);
  return [parts.slice(0, mid).join('. ') + '.', parts.slice(mid).join('. ') + '.'];
};

const learnShort = (item: string) => item.split(':')[0];

export default function CourseDetailsPage() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === id);
  const [activeTab, setActiveTab] = useState('overview');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!course) return;
    document.title = `${course.title} | BHAVNA Institute - Meerut`;
    const desc = (course as any).seoDescription || course.description;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', desc);
  }, [course]);

  const curriculumData = (course as any).curriculum || [];
  const projectsData = (course as any).projects || [];
  const faqData = (course as any).faq || [];
  const aboutText = (course as any).about || course?.description || '';

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: (course as any).seoDescription || course.description,
    provider: { "@type": "Organization", name: "BHAVNA Institute", sameAs: "https://bcss-vai.vercel.app" },
    offers: { "@type": "Offer", price: course.fees.replace('₹', ''), priceCurrency: "INR", availability: "https://schema.org/InStock" }
  };

  const aboutParagraphs = aboutIntoParagraphs(aboutText);

  return (
    <div className="min-h-screen bg-[#f5f5f4] pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="bg-[#0a0a0a] text-white pt-28 pb-60 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600 blur-[120px]" />
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-600 blur-[120px]" />
        </div>

        <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={14} /> Back to courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
                <span className="bg-white/10 border border-white/20 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
                  {course.category}
                </span>
                <span className="flex items-center gap-1.5 text-orange-400 text-sm font-bold">
                  <Star size={14} className="fill-current" /> {course.rating}
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {course.title}
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
                {course.description}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-2 text-sm md:text-base text-gray-400">
                <span className="flex items-center gap-1.5"><Users size={15} className="text-blue-400" />{course.students} Enrolled</span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1.5"><Clock size={15} className="text-purple-400" />{(course as any).durationDetail || course.duration}</span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1.5"><Award size={15} className="text-amber-400" />Certificate</span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1.5"><Zap size={15} className="text-emerald-400" />Practical Training</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-6 md:px-12 lg:px-20 -mt-40 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Tabs */}
            <div className="sticky top-20 z-30 py-4">
              <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 snap-x">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                      className={`snap-start shrink-0 group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        isActive ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-500 hover:text-[#0a0a0a] border border-black/5'
                      }`}>
                      <Icon size={16} className={isActive ? 'text-blue-400' : 'text-gray-400'} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/5 shadow-sm min-h-[400px]">
              <AnimatePresence mode="wait">

                {/* OVERVIEW */}
                {activeTab === 'overview' && (
                  <motion.div key="overview" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    className="space-y-14">

                    {/* About */}
                    {aboutText && (
                      <div>
                        <h2 className="text-xl font-bold text-[#0a0a0a] mb-4 flex items-center gap-2">
                          <BookOpen size={20} className="text-blue-600" /> About This Course</h2>
                        <div className="space-y-3">
                          {aboutParagraphs.map((p, i) => (
                            <p key={i} className="text-[15px] text-gray-600 leading-relaxed">{p}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    <div>
                      <h3 className="text-xl font-bold text-[#0a0a0a] mb-4 flex items-center gap-2">
                        <Zap size={20} className="text-orange-500" /> What You'll Learn</h3>
                      <div className="flex flex-wrap gap-2">
                        {course.learn.map((item, idx) => (
                          <span key={idx}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-black/5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                            {learnShort(item)}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Mentor */}
                    <div>
                      <h3 className="text-xl font-bold text-[#0a0a0a] mb-4 flex items-center gap-2">
                        <GraduationCap size={20} className="text-purple-500" /> Your Mentor
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-black/5 overflow-hidden shrink-0">
                          <img
                            src="https://ui-avatars.com/api/?name=Surya+Pratap+Singh&background=1d4ed8&color=fff&size=96&bold=true"
                            alt="Surya Pratap Singh" className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <h4 className="font-bold text-[#0a0a0a]">Surya Pratap Singh</h4>
                            <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase">Instructor</span>
                          </div>
                          <p className="text-sm text-gray-500">{(course as any).mentorDesignation}</p>
                        </div>
                      </div>
                    </div>

                    {/* Why Choose - minimal */}
                    {(course as any).whyChoose && (
                      <div>
                        <h3 className="text-xl font-bold text-[#0a0a0a] mb-4 flex items-center gap-2">
                          <Award size={20} className="text-amber-500" /> Why BHAVNA Institute</h3>
                        <div className="flex flex-wrap gap-2">
                          {((course as any).whyChoose as string[]).slice(0, 3).map((reason, idx) => (
                            <span key={idx} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100/50 rounded-xl text-sm font-medium text-emerald-700">
                              <Check size={14} />
                              {reason}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Career note - subtle */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-black/5 flex items-start gap-3">
                      <Users size={20} className="text-blue-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Perfect for beginners, students, office professionals, and anyone looking to build career-ready digital skills.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* CURRICULUM */}
                {activeTab === 'curriculum' && (
                  <motion.div key="curriculum" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    <h2 className="text-xl font-bold text-[#0a0a0a] mb-6">Course Curriculum</h2>
                    {curriculumData.length === 0 ? (
                      <p className="text-gray-500">Curriculum details coming soon.</p>
                    ) : (
                      <div className="space-y-3">
                        {curriculumData.map((module: { title: string; items: string[] }, idx: number) => (
                          <div key={idx} className={`border rounded-xl overflow-hidden bg-white transition-colors ${openAccordion === idx ? 'border-black/10' : 'border-gray-100'}`}>
                            <button onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                              className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left">
                              <div className="flex items-center gap-3">
                                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors ${openAccordion === idx ? 'bg-[#0a0a0a] text-white' : 'bg-gray-100 text-gray-600'}`}>
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                                <span className="font-semibold text-[#0a0a0a]">{module.title}</span>
                              </div>
                              {openAccordion === idx ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                            </button>
                            <AnimatePresence>
                              {openAccordion === idx && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                  <div className="px-5 pb-4 pt-2 pl-16 border-t border-gray-50">
                                    <ul className="space-y-2">
                                      {module.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                                          <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 shrink-0" />
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
                    )}
                  </motion.div>
                )}

                {/* PROJECTS */}
                {activeTab === 'projects' && (
                  <motion.div key="projects" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    <h2 className="text-xl font-bold text-[#0a0a0a] mb-2">Projects & Practical Work</h2>
                    <p className="text-gray-500 text-sm mb-6">Real-world projects to build your skills.</p>
                    {projectsData.length === 0 ? (
                      <p className="text-gray-500">Project details coming soon.</p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {projectsData.map((project: string, idx: number) => {
                          const icons = [FileText, BarChart, Layers, Mail, Cpu];
                          const colors = ['text-blue-600', 'text-emerald-600', 'text-purple-600', 'text-orange-600', 'text-indigo-600'];
                          const bgColors = ['from-blue-500/10', 'from-emerald-500/10', 'from-purple-500/10', 'from-orange-500/10', 'from-indigo-500/10'];
                          const Icon = icons[idx % icons.length];
                          return (
                            <div key={idx} className="relative flex items-center p-5 bg-gray-50 rounded-2xl border border-black/5 hover:bg-white hover:shadow-md hover:border-blue-100 transition-all group overflow-hidden">
                              <div className={`absolute -right-6 top-1/2 -translate-y-1/2 opacity-15 ${colors[idx]}`}>
                                <Icon size={96} />
                              </div>
                              <div className={`absolute inset-0 bg-gradient-to-r ${bgColors[idx]} to-transparent pointer-events-none`} />
                              <div className="relative z-10 flex items-center gap-4">
                                <div className={`w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm border border-black/5 shrink-0 ${colors[idx]}`}>
                                  <Icon size={22} />
                                </div>
                                <p className="font-semibold text-[#0a0a0a] text-sm leading-relaxed">{project}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* FAQ */}
                {activeTab === 'faq' && (
                  <motion.div key="faq" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    <h2 className="text-xl font-bold text-[#0a0a0a] mb-6">Frequently Asked Questions</h2>
                    {faqData.length === 0 ? (
                      <p className="text-gray-500">FAQ coming soon.</p>
                    ) : (
                      <div className="space-y-3">
                        {faqData.map((faq: { q: string; a: string }, idx: number) => (
                          <div key={idx} itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                            className={`border rounded-xl overflow-hidden bg-white transition-colors ${openFaq === idx ? 'border-black/10' : 'border-gray-100'}`}>
                            <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                              className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left">
                              <span itemProp="name" className="font-semibold text-[#0a0a0a] text-sm pr-4">{faq.q}</span>
                              {openFaq === idx ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
                            </button>
                            <AnimatePresence>
                              {openFaq === idx && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"
                                  itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                  <div itemProp="text" className="px-5 pb-4 pt-0 text-sm text-gray-600 leading-relaxed">
                                    {faq.a}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="sticky top-24 bg-white rounded-[2rem] p-4 border border-black/5 shadow-xl">

              <div className="relative h-56 w-full rounded-[1.25rem] overflow-hidden mb-4">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="px-4 pb-4">
                <div className="mb-5">
                  <div className="text-3xl font-bold text-[#0a0a0a] tracking-tight">{course.fees}</div>
                  <p className="text-xs text-gray-500 mt-0.5">One-time payment, full access</p>
                </div>

                <a href={`https://wa.me/919719205268?text=${encodeURIComponent(`Hi, I am interested in enrolling in the ${course.title} course.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 mb-5">
                  Enroll Now
                </a>

                <div className="space-y-3">
                  <h4 className="font-bold text-[#0a0a0a] text-xs uppercase tracking-wider">Includes</h4>
                  <ul className="space-y-2.5">
                    {((course as any).courseIncludes || []).slice(0, 5).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-600 font-medium">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-4 border-t border-black/5 text-center">
                  <a href="tel:+919719205268" className="text-sm font-semibold text-[#0a0a0a] hover:text-blue-600 transition-colors">
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
