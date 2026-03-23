import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-xs font-medium uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Free Demo Class Available
            </div>
            <h1 className="text-[3.5rem] md:text-[5.5rem] font-medium leading-[0.9] tracking-tighter mb-8 text-[#0a0a0a]">
              Learn <span className="font-serif italic text-blue-600 font-light">Job-Ready</span> Skills & Start Your Career in Just 3 Months.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mb-10 text-balance">
              Join Bhavna Institute – Get practical training, certification & career guidance. 
              Affordable fees and 100% job-oriented courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0a0a0a] text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group">
                Join Free Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1ebe57] transition-colors flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm font-medium text-gray-500">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> 500+ Students Trained</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Affordable Fees</span>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-4 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="premium-card p-8 rounded-3xl"
          >
            <div className="text-5xl font-light mb-2 tracking-tighter">500<span className="text-blue-600">+</span></div>
            <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Students Trained</div>
            <div className="mt-6 pt-6 border-t border-black/5 text-sm text-gray-500">
              Empowering students in Meerut with real-world digital skills.
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a0a0a] text-white p-8 rounded-3xl"
          >
            <div className="text-5xl font-light mb-2 tracking-tighter">100<span className="text-[#25D366]">+</span></div>
            <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Placed / Freelancing</div>
            <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-400">
              Our students are actively working in the industry or earning as freelancers.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
