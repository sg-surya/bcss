import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { Trophy, TrendingUp, DollarSign, Briefcase, Globe, Layout, CheckCircle2 } from 'lucide-react';

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number, suffix?: string, prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, target, count]);

  return (
    <span ref={ref} className="inline-flex">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { icon: <Trophy />, target: 5000, suffix: "+", label: "Students Trained" },
  { icon: <Briefcase />, target: 85, suffix: "%", label: "Placement Rate" },
  { icon: <TrendingUp />, target: 1000, suffix: "+", label: "Career Transitions" },
  { icon: <DollarSign />, isRange: true, text: "₹5L-₹12L", label: "Avg. Salary Package" }
];

export default function Placements() {
  return (
    <section className="py-24 px-6 max-w-[1536px] mx-auto bg-white border-t border-gray-100">
      
      {/* 1. Placement Statistics Section */}
      <div className="text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-bold uppercase tracking-wider mb-6 border border-green-100 shadow-sm"
        >
          Proven Track Record
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 font-heading"
        >
          Your Success is Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Ultimate Goal</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="premium-card group p-8 text-center flex flex-col items-center justify-center cursor-default"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shadow-sm mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-100">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-gray-900 mb-1">
                {stat.isRange ? stat.text : <AnimatedCounter target={stat.target!} suffix={stat.suffix} />}
              </div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wide group-hover:text-brand-600 transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
        
        {/* 2. Student Success Stories */}
        <div className="lg:col-span-2 premium-card p-8 bg-gray-50/50">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
            <Briefcase className="text-brand-600" size={24} />
            <h3 className="text-2xl font-bold font-heading text-gray-900">Student Success Stories</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://i.pravatar.cc/150?img=32" alt="Student" className="w-16 h-16 rounded-full object-cover border-2 border-brand-100" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Rahul Sharma</h4>
                  <p className="text-brand-600 font-semibold text-sm">Placed at TCS</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"The Advanced Excel & Tally course helped me clear my corporate interview on the very first try. Highly recommended!"</p>
              <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-lg w-fit">
                <CheckCircle2 size={14} /> Verified Placement
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://i.pravatar.cc/150?img=47" alt="Student" className="w-16 h-16 rounded-full object-cover border-2 border-brand-100" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Priya Verma</h4>
                  <p className="text-brand-600 font-semibold text-sm">Web Developer at Wipro</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"Learning HTML, CSS, and JS from scratch gave me the confidence to build real projects and land a tech job."</p>
              <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-lg w-fit">
                <CheckCircle2 size={14} /> Verified Placement
              </div>
            </div>
          </div>
        </div>

        {/* 3. Freelancing Achievements */}
        <div className="col-span-1 premium-card p-8 bg-gradient-to-br from-brand-900 to-brand-950 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-8 border-b border-brand-800 pb-4 relative z-10">
            <Globe className="text-brand-400 group-hover:rotate-12 transition-transform duration-500" size={24} />
            <h3 className="text-2xl font-bold font-heading">Freelancing Success</h3>
          </div>

          <div className="relative z-10 space-y-6">
            <p className="text-brand-100 text-sm leading-relaxed">
              Our <span className="font-bold text-white">AI Tools + Freelancing</span> and <span className="font-bold text-white">Digital Marketing</span> students are actively earning in Dollars globally.
            </p>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
              <div className="text-brand-300 font-bold text-xs uppercase tracking-wider mb-1">Top Earner</div>
              <div className="text-3xl font-black text-white mb-2">$<AnimatedCounter target={2500} /><span className="text-lg text-brand-200 font-medium">/mo</span></div>
              <p className="text-xs text-brand-100">Average income of our top 10 freelance graphic designers on Upwork.</p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-brand-50">
                <CheckCircle2 size={16} className="text-green-400" />
                <AnimatedCounter target={50} suffix="+" /> Top Rated Sellers on Fiverr
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-50">
                <CheckCircle2 size={16} className="text-green-400" />
                Direct international client projects
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* 4. Real Project Showcases */}
      <div className="mt-12 premium-card p-8 bg-white border border-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Layout className="text-brand-600" size={24} />
            <h3 className="text-2xl font-bold font-heading text-gray-900">Real Project Showcases</h3>
          </div>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">Build a portfolio before you graduate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group rounded-2xl overflow-hidden border border-gray-200 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-video bg-gray-100 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="E-Commerce Website" className="w-full h-full object-cover img-hover-zoom" />
              <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors duration-300"></div>
            </div>
            <div className="p-4 bg-white relative z-10">
              <h4 className="font-bold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors">E-Commerce Website</h4>
              <p className="text-xs text-brand-600 font-bold uppercase">React & Node.js</p>
            </div>
          </div>

          <div className="group rounded-2xl overflow-hidden border border-gray-200 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-video bg-gray-100 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Corporate Dashboard" className="w-full h-full object-cover img-hover-zoom" />
              <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors duration-300"></div>
            </div>
            <div className="p-4 bg-white relative z-10">
              <h4 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">Corporate Dashboard</h4>
              <p className="text-xs text-green-600 font-bold uppercase">Advanced Excel</p>
            </div>
          </div>

          <div className="group rounded-2xl overflow-hidden border border-gray-200 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-video bg-gray-100 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" alt="Social Media Campaign" className="w-full h-full object-cover img-hover-zoom" />
              <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors duration-300"></div>
            </div>
            <div className="p-4 bg-white relative z-10">
              <h4 className="font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">Social Media Campaign</h4>
              <p className="text-xs text-orange-600 font-bold uppercase">Digital Marketing</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
