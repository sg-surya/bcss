import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 text-xs font-semibold uppercase tracking-widest mb-8 bg-white/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Free Demo Class Available
            </div>
            
            <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5rem] font-medium leading-[1.05] tracking-tight mb-6 text-[#0a0a0a]">
              Learn <span className="font-serif italic text-blue-600 font-light">Job-Ready</span> Skills & Start Your Career in 3 Months.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed mb-10 text-balance">
              Join Bhavna Institute – Get practical training, certification & career guidance. 
              Affordable fees and 100% job-oriented courses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0a0a0a] text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-black/5">
                Join Free Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-black/10 text-[#0a0a0a] px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                <MessageCircle size={18} className="text-[#25D366]" />
                Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border border-black/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Students learning at Bhavna Institute" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Floating Trust Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Star className="text-blue-600 fill-blue-600" size={20} />
                </div>
                <div>
                  <div className="text-xl font-bold text-[#0a0a0a] leading-none mb-1">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Students Trained & Placed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative background element */}
          <div className="absolute -z-10 top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
