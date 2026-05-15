import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MessageCircle, Star, Play, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const navigate = useNavigate();

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
      <section id="home" className="pt-32 pb-20 px-6 max-w-[1536px] mx-auto min-h-screen flex flex-col items-center text-center justify-center relative overflow-hidden">
        {/* The Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-1.5 py-1.5 pr-4 rounded-full border border-gray-200 bg-white mb-8 shadow-sm"
        >
          <div className="bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            NEW
          </div>
          <span className="text-sm font-medium text-gray-700">Admissions open for 2026 Batch</span>
          <ArrowRight size={14} className="text-gray-400" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-bold leading-[1.05] tracking-tight mb-6 text-[#0a0a0a]"
        >
          Master the skills that <br className="hidden md:block" />
          <span className="font-serif italic text-gray-500 font-normal">shape</span> the future.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-10 font-medium"
        >
          Bhavna Institute provides 100% job-oriented practical training, expert
          mentorship, and placement support to launch your career.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/courses')}
            className="bg-[#0a0a0a] text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:bg-black flex items-center justify-center gap-2 group text-base"
          >
            Explore Courses
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/919719205268?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20courses."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).gtag?.('event', 'whatsapp_click', { event_category: 'engagement', event_label: 'WhatsApp Hero' })}
            className="bg-white border border-gray-200 text-[#0a0a0a] px-8 py-3.5 rounded-xl font-medium hover:border-gray-300 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow text-base group"
          >
            <MessageCircle size={18} className="text-gray-400 group-hover:text-green-500 transition-colors" />
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl relative"
        >
          <div 
            className="relative rounded-[2rem] overflow-hidden aspect-[16/10] md:aspect-video shadow-2xl cursor-pointer group bg-gray-100"
            onClick={() => setIsVideoOpen(true)}
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
              alt="Students learning at Bhavna Institute" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black pl-1">
                  <Play size={24} className="fill-current" />
                </div>
              </div>
            </div>

            {/* Testimonial Overlay - Bottom Left */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <div className="bg-white rounded-2xl p-4 pr-6 flex items-center gap-4 shadow-xl">
                <div className="flex -space-x-3 shrink-0">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-left">
                  <div className="flex text-orange-500 gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                  </div>
                  <p className="text-xs font-bold text-[#0a0a0a] leading-snug">"The best institute for<br/>practical learning."</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
