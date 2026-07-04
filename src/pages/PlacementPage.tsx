import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, Building2, Trophy, ArrowUpRight, CheckCircle2, Users, TrendingUp, Target } from 'lucide-react';
import SEO from '../components/SEO';

const placedStudents = [
  {
    name: "Rahul Kumar",
    company: "TCS",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    package: "4.5 LPA"
  },
  {
    name: "Priya Sharma",
    company: "Infosys",
    role: "System Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    package: "4.2 LPA"
  },
  {
    name: "Amit Singh",
    company: "Wipro",
    role: "Project Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    package: "4.0 LPA"
  },
  {
    name: "Neha Gupta",
    company: "HCL",
    role: "Software Analyst",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    package: "3.8 LPA"
  },
  {
    name: "Sahil Verma",
    company: "Tech Mahindra",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    package: "5.2 LPA"
  },
  {
    name: "Anjali Mehra",
    company: "IBM",
    role: "Data Analyst",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    package: "4.8 LPA"
  },
  {
    name: "Vikram Chauhan",
    company: "Cognizant",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    package: "3.5 LPA"
  },
  {
    name: "Pooja Singh",
    company: "L&T Infotech",
    role: "Quality Analyst",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    package: "3.6 LPA"
  }
];

const hiringPartners = [
  "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "Cognizant", 
  "IBM", "L&T Infotech", "Mindtree", "Mphasis"
];

const stats = [
  { icon: <Users size={28} />, value: "500+", label: "Students Placed" },
  { icon: <Building2 size={28} />, value: "50+", label: "Hiring Partners" },
  { icon: <TrendingUp size={28} />, value: "94%", label: "Placement Rate" },
  { icon: <Target size={28} />, value: "4.5 LPA", label: "Avg. Package" }
];

const process = [
  { step: "01", title: "Skill Training", desc: "Intensive practical training on industry-relevant tools and technologies." },
  { step: "02", title: "Resume Building", desc: "Professional resume creation and LinkedIn profile optimization." },
  { step: "03", title: "Mock Interviews", desc: "Practice interviews with industry experts andHR professionals." },
  { step: "04", title: "Job Placement", desc: "Direct interviews with our network of 50+ hiring partners." }
];

export default function PlacementPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#f5f5f4]">
      <SEO title="Placements" description="100% placement assistance at Bhavna Institute. Our students work at TCS, Infosys, Wipro, and more." canonical="/placement" />
      
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-[1536px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-xs font-bold uppercase tracking-widest mb-8 text-blue-700"
          >
            <Trophy size={14} className="text-blue-700" />
            Our Placements
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tighter text-[#0a0a0a] mb-6"
          >
            Your Career <br />
            <span className="font-serif italic text-blue-600">Starts Here.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            We don't just train students — we launch careers. With 100% placement assistance and a network of top companies, your dream job is within reach.
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
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Placed Students Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
              Our <span className="font-serif italic text-blue-600">Success Stories</span>
            </h2>
            <p className="text-gray-500 text-lg">Meet our students who are now working at top companies.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {placedStudents.map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center">
                  <div className="absolute top-6 right-6 text-gray-300 group-hover:text-blue-500 transition-colors duration-300">
                    <ArrowUpRight size={20} />
                  </div>

                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 blur-xl opacity-70 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md relative z-10 transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center z-20 shadow-md">
                      <Trophy size={10} className="text-white fill-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {student.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mb-5">
                    {student.role}
                  </p>

                  <div className="grid grid-cols-2 gap-3 w-full mt-auto">
                    <div className="bg-slate-50 rounded-2xl p-3 text-center border border-gray-100/80 transition-colors duration-300 group-hover:bg-blue-50/30 group-hover:border-blue-100/50">
                      <Building2 size={14} className="text-gray-400 mx-auto mb-1 group-hover:text-blue-500 transition-colors" />
                      <p className="text-[10px] text-gray-400 mb-0.5">Company</p>
                      <p className="font-bold text-[#0a0a0a] text-xs">{student.company}</p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-3 text-center border border-gray-100/80 transition-colors duration-300 group-hover:bg-blue-50/30 group-hover:border-blue-100/50">
                      <Briefcase size={14} className="text-gray-400 mx-auto mb-1 group-hover:text-blue-500 transition-colors" />
                      <p className="text-[10px] text-gray-400 mb-0.5">Package</p>
                      <p className="font-bold text-blue-600 text-xs">{student.package}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-1/2 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Placement Process */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
              Our <span className="font-serif italic text-blue-600">Placement Process</span>
            </h2>
            <p className="text-gray-500 text-lg">A systematic approach to ensure every student gets placed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-black/5 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="text-6xl font-bold text-black/5 absolute top-4 right-4">{item.step}</div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hiring Partners */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] rounded-[3rem] p-10 md:p-16 text-white mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-6">
              Our <span className="font-serif italic text-blue-400">Hiring Partners</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We have strong relationships with top companies who actively recruit from our institute.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {hiringPartners.map((partner, i) => (
              <div key={i} className="bg-white/10 border border-white/10 px-8 py-4 rounded-2xl text-white font-semibold hover:bg-white/20 transition-colors">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us for Placement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card rounded-[3rem] p-10 md:p-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-[#0a0a0a] mb-6">
                Why Students Trust Our <span className="font-serif italic text-blue-600">Placement Support?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our dedicated placement cell works tirelessly to connect students with the right opportunities.
              </p>
              <div className="space-y-4">
                {[
                  '100% placement assistance guarantee',
                  'Direct interview opportunities with top companies',
                  'Resume building and interview preparation',
                  'Lifetime access to our job portal',
                  'Career counseling and guidance'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold text-blue-600 mb-2">94%</div>
                <div className="text-xl text-gray-600 font-medium">Placement Rate</div>
                <div className="text-sm text-gray-400 mt-2">and counting...</div>
              </div>
            </div>
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
            Ready to Start Your <span className="font-serif italic text-blue-600">Career Journey?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Join the next batch and let us help you land your dream job.
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
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
