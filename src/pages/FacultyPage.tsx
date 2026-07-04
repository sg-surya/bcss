import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Award, Sparkles, Linkedin, BookOpen, Target, Users } from 'lucide-react';
import SEO from '../components/SEO';

const mentors = [
  {
    name: "Surya Pratap Singh",
    role: "Founder of Vasudev AI & Lead Instructor",
    image: "/mentor.png",
    bio: "Pursuing Bachelor's from IIT Jodhpur. Expert in Data Analysis and Web Development. He has successfully delivered over 50+ freelance projects globally, specializing in AI-driven web applications and complex data pipelines. At Bhavna Institute, Surya aims to bridge the gap between academic learning and industry demands, empowering students to secure top-tier tech roles.",
    skills: ["Data Analysis", "Web Development", "Python", "React", "IIT Jodhpur", "AI Integration"],
    linkedin: "https://www.linkedin.com/in/sgsurya/"
  }
];

const stats = [
  { icon: <BookOpen size={24} />, value: "50+", label: "Projects Delivered" },
  { icon: <Target size={24} />, value: "500+", label: "Students Trained" },
  { icon: <Users size={24} />, value: "10+", label: "Years Experience" },
  { icon: <Award size={24} />, value: "94%", label: "Placement Rate" }
];

export default function FacultyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#f5f5f4]">
      <SEO title="Faculty" description="Meet our expert faculty at Bhavna Institute. Industry professionals with real-world experience." canonical="/faculty" />
      
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-[1536px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-xs font-medium uppercase tracking-widest mb-8"
          >
            <Award size={14} className="text-blue-600" />
            Our Faculty
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tighter text-[#0a0a0a] mb-6"
          >
            Learn from <br />
            <span className="font-serif italic text-blue-600">Industry Experts.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Our mentors bring real-world experience from top companies and IITs to help you build practical skills that employers actually look for.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mentor Card */}
        {mentors.map((mentor, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-black/5 flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start mb-24"
          >
            {/* Image Section */}
            <div className="shrink-0 relative group">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover object-[30%_top] group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-blue-50 rounded-full scale-110 -z-0 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg z-20 group-hover:rotate-12 transition-transform duration-500">
                <Sparkles size={24} className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-2 tracking-tight">{mentor.name}</h3>
              <p className="text-blue-600 font-medium text-lg mb-6">{mentor.role}</p>
              
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                {mentor.bio}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
                {mentor.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-gray-50 border border-black/5 text-sm font-medium text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
              
              <a 
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-2xl font-medium hover:bg-black/80 transition-all hover:-translate-y-0.5 shadow-lg shadow-black/10"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        ))}

        {/* Why Our Faculty */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] rounded-[3rem] p-10 md:p-16 text-white"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-6">
              Why Learn from <span className="font-serif italic text-blue-400">Our Faculty?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Industry Experience", desc: "Our mentors have worked on real projects at top companies and bring practical knowledge to the classroom." },
              { title: "IIT Background", desc: "Learn from IIT graduates who understand the rigour and depth needed for tech excellence." },
              { title: "Personal Mentorship", desc: "Small batch sizes ensure every student gets individual attention and 1-on-1 doubt resolution." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-[1536px] mx-auto text-center border-t border-black/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto premium-card p-12 md:p-16 rounded-[2.5rem]"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-6">
            Ready to <span className="font-serif italic text-blue-600">Learn from the Best?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Join our upcoming batch and get mentored by industry experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/courses" 
              className="inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-black/5 text-base"
            >
              Explore Courses
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 border border-black/10 bg-white text-[#0a0a0a] px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-colors shadow-lg shadow-black/5 text-base"
            >
              Contact Admission Desk
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
