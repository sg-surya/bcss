import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Admissions Open 2026
            </div>
            <h1 className="text-[4rem] md:text-[6.5rem] font-medium leading-[0.9] tracking-tighter mb-8 text-[#0a0a0a]">
              Master the <br />
              <span className="font-serif italic text-blue-600 font-light">Digital</span> Future.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mb-10 text-balance">
              Premium computer education designed for the modern workforce. 
              Industry-led curriculum, immersive learning, and career-defining outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0a0a0a] text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group">
                Explore Programs
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-black/10 text-[#0a0a0a] px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors">
                View Curriculum
              </button>
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
            <div className="text-5xl font-light mb-2 tracking-tighter">98<span className="text-blue-600">%</span></div>
            <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Placement Rate</div>
            <div className="mt-6 pt-6 border-t border-black/5 text-sm text-gray-500">
              Our graduates are hired by top tech companies globally within 3 months.
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a0a0a] text-white p-8 rounded-3xl"
          >
            <div className="text-5xl font-light mb-2 tracking-tighter">15<span className="text-blue-500">+</span></div>
            <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Specialized Tracks</div>
            <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-400">
              From Full-Stack to AI, learn what the industry demands today.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
