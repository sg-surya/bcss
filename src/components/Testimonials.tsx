import { useRef } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, PlayCircle, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "The AI Tools & Freelancing course completely changed my career trajectory. I am now taking international freelance projects and earning in dollars. The mentorship is simply unmatched.",
      name: "Priya Singh",
      course: "AI Tools + Freelancing",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      hasVideo: true,
      videoThumb: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
    },
    {
      quote: "Bhavna Institute provided me with the exact practical skills I needed. The Tally + GST course was so detailed, I started working immediately after completion.",
      name: "Aman Sharma",
      course: "Tally + GST",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      hasVideo: false
    },
    {
      quote: "The Web Development course is amazing. The mentors give personal attention and the small batch size really helps in clearing doubts quickly.",
      name: "Neha Gupta",
      course: "Web Development",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      hasVideo: true,
      videoThumb: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
    },
    {
      quote: "Digital Marketing practicals were spot on. We ran real ad campaigns with actual budgets. It's not just theory, it's 100% practical learning.",
      name: "Rahul Verma",
      course: "Digital Marketing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      hasVideo: false
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth + 50 : current.offsetWidth - 50;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 max-w-[1536px] mx-auto relative overflow-hidden dark-premium-section rounded-[2.5rem] my-12 text-white shadow-2xl">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10 px-2 md:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-400/20 text-[10px] font-bold uppercase tracking-widest mb-4 text-brand-300"
          >
            Student Testimonials
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 font-heading"
          >
            Don't just take our <span className="text-brand-400">word for it</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-xl text-base"
          >
            Real stories from students who transformed their careers.
          </motion.p>
        </div>
        
        {/* Slider Controls */}
        <div className="flex gap-3">
          <button 
            onClick={() => scroll('left')} 
            className="w-10 h-10 rounded-full border border-white/10 dark-glass-card flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/30"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Smooth Slider Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-2 md:px-8 relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="snap-center w-[300px] md:w-[380px] shrink-0 dark-glass-card p-6 md:p-8 rounded-3xl border border-white/10 group hover:border-brand-500/40 transition-all duration-300 relative overflow-hidden flex flex-col"
          >
            {/* Ambient hover glow inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-500/10" />
            
            {/* Star Ratings */}
            <div className="flex gap-1 mb-5 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400 drop-shadow-sm" />
              ))}
            </div>
            
            <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed mb-6 relative z-10 flex-1">
              "{t.quote}"
            </p>
            
            {/* Video Testimonials */}
            {t.hasVideo && t.videoThumb && (
              <div className="mb-6 relative rounded-xl overflow-hidden aspect-video cursor-pointer group/video border border-white/10 shadow-md">
                <img 
                  src={t.videoThumb} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors duration-300 group-hover/video:bg-black/20">
                  <PlayCircle className="w-10 h-10 text-white opacity-90 group-hover/video:scale-110 transition-transform drop-shadow-lg" />
                </div>
              </div>
            )}

            {/* Real Student Images & Meta */}
            <div className="flex items-center gap-3 pt-5 border-t border-white/10 relative z-10 mt-auto">
              <div className="relative">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-500 shadow-sm" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#0f172a] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div>
                <div className="font-bold text-base text-white font-heading">{t.name}</div>
                <div className="text-[11px] font-medium text-brand-400 mt-0.5 uppercase tracking-wide">{t.course}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
