import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MessageCircle, Star, CheckCircle2, Award, Play, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const words = ["Job-Ready", "In-Demand", "High-Paying"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  return (
    <>
      <section id="home" className="pt-32 pb-20 px-6 max-w-[1536px] mx-auto min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none -z-10">
          <div className="absolute top-20 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200/50 bg-blue-50/80 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-8 text-blue-700 shadow-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                Admissions Open for 2026 Batch
              </motion.div>
              
              <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-bold leading-[0.9] tracking-tighter mb-8 text-[#0a0a0a]">
                Learn <br className="hidden md:block" />
                <div className="inline-grid overflow-hidden h-[1.1em] align-bottom text-blue-600 pr-4">
                  {words.map((word, index) => (
                    <motion.span
                      key={index}
                      className="font-serif italic font-light col-start-1 row-start-1"
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ 
                        y: currentWord === index ? "0%" : currentWord > index ? "-100%" : "100%",
                        opacity: currentWord === index ? 1 : 0
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
                <br className="hidden md:block" /> Skills.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed mb-10 font-medium">
                Join Bhavna Institute – Get practical training, certification & career guidance. 
                Affordable fees and 100% job-oriented courses in Meerut.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2 group text-lg">
                  Join Free Demo
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="https://wa.me/919719205268?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-gray-200 text-[#0a0a0a] px-8 py-4 rounded-full font-bold hover:border-green-500 hover:text-green-600 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md text-lg group"
                >
                  <MessageCircle size={20} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-bold text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-blue-500" />
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-blue-500" />
                  <span>100% Placement</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              {/* Main Image Container with brutalist/editorial touch */}
              <div 
                className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white bg-gray-100 cursor-pointer group"
                onClick={() => setIsVideoOpen(true)}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                  alt="Students learning at Bhavna Institute" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 pl-1">
                      <Play size={24} className="fill-current" />
                    </div>
                  </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center justify-between text-white">
                    <div>
                      <div className="text-3xl font-bold mb-1">4.9/5</div>
                      <div className="flex text-yellow-400 gap-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">200+</div>
                      <div className="text-sm text-white/80 font-medium">Happy Students</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                initial={{ opacity: 0, x: 50, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-black/5 flex items-center gap-4 z-20 pointer-events-none"
              >
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                  <Award className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0a0a0a]">Govt. Recognized</div>
                  <div className="text-xs text-gray-500 font-medium">Valid Certification</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="absolute top-1/2 -left-12 bg-white p-3 rounded-2xl shadow-xl border border-black/5 flex items-center gap-3 z-20 pointer-events-none"
              >
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Student" className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="Student" className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
                    +5k
                  </div>
                </div>
                <div className="text-sm font-bold text-[#0a0a0a] pr-2">Students Placed</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
              >
                <X size={20} />
              </button>
              
              {/* Using a placeholder video since we don't have a real one */}
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" 
                title="Bhavna Institute Promo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
