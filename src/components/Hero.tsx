import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Star, CheckCircle2, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const words = ["Job-Ready", "In-Demand", "High-Paying"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 backdrop-blur-sm text-xs font-semibold uppercase tracking-widest mb-8 text-blue-700"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              Admissions Open for 2026 Batch
            </motion.div>
            
            <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5rem] font-medium leading-[1.05] tracking-tight mb-6 text-[#0a0a0a]">
              Learn <br className="hidden md:block" />
              <div className="inline-grid overflow-hidden h-[1.1em] align-bottom">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    className="font-serif italic text-blue-600 font-light col-start-1 row-start-1"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ 
                      y: currentWord === index ? "0%" : currentWord > index ? "-100%" : "100%",
                      opacity: currentWord === index ? 1 : 0
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <br className="hidden md:block" /> Skills & Start Your Career.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed mb-10 text-balance">
              Join Bhavna Institute – Get practical training, certification & career guidance. 
              Affordable fees and 100% job-oriented courses in Meerut.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button className="bg-[#0a0a0a] text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-600/20 flex items-center justify-center gap-2 group">
                Join Free Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/919719205268?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-black/10 text-[#0a0a0a] px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-6 text-sm font-medium text-gray-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span>100% Placement Assistance</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-5 relative mt-10 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border border-black/5 z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Students learning at Bhavna Institute" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Floating Trust Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Star className="text-blue-600 fill-blue-600" size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <div className="text-xl font-bold text-[#0a0a0a] leading-none">4.9/5</div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Based on 200+ Reviews</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-black/5 z-20 hidden md:flex items-center gap-3 animate-bounce"
            style={{ animationDuration: '3s' }}
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Award size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0a0a0a]">Govt. Recognized</div>
              <div className="text-xs text-gray-500">Valid Certification</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -left-8 bottom-1/3 bg-white p-4 rounded-2xl shadow-xl border border-black/5 z-20 hidden md:flex items-center gap-3 animate-bounce"
            style={{ animationDuration: '4s', animationDelay: '1s' }}
          >
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Student" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">+5k</div>
            </div>
            <div className="text-sm font-bold text-[#0a0a0a]">Students Placed</div>
          </motion.div>

          {/* Decorative background element */}
          <div className="absolute -z-10 top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
