import { motion } from 'motion/react';
import { Star, Quote, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The AI Tools & Freelancing course completely changed my career trajectory. I am now taking international freelance projects and earning in dollars. The 1-on-1 mentorship is simply unmatched in Meerut.",
      name: "Priya Singh",
      course: "AI Tools + Freelancing",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      hasVideo: true,
      size: "large"
    },
    {
      quote: "Bhavna Institute provided me with the exact practical skills I needed. The Tally + GST course was so detailed, I started working immediately after completion.",
      name: "Aman Sharma",
      course: "Tally + GST",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      size: "small"
    },
    {
      quote: "The Web Development course is amazing. The mentors give personal attention and the small batch size really helps in clearing doubts quickly.",
      name: "Neha Gupta",
      course: "Web Development",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      size: "medium"
    },
    {
      quote: "Digital Marketing practicals were spot on. We ran real ad campaigns with actual budgets. It's not just theory, it's 100% practical learning.",
      name: "Rahul Verma",
      course: "Digital Marketing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      size: "small"
    },
    {
      quote: "Graphic Design classes are very interactive. I learned Photoshop, Illustrator, and Premiere Pro. Now I'm working as a full-time designer.",
      name: "Sneha Desai",
      course: "Graphic Design",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
      hasVideo: true,
      size: "large"
    },
    {
      quote: "The Data Analytics course gave me the confidence to handle large datasets. The Python and SQL modules were taught exceptionally well.",
      name: "Vikram Singh",
      course: "Data Analytics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      size: "medium"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-[1536px] mx-auto relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-xs font-bold uppercase tracking-widest mb-6 text-blue-700"
        >
          Wall of Love
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#0a0a0a] mb-6 leading-tight">
          Don't just take our <br className="hidden md:block" />
          <span className="font-serif italic text-blue-600 font-light">word for it</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg md:text-xl">
          Real stories from students who transformed their careers with our practical, job-oriented training.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`break-inside-avoid relative group ${
              t.size === 'large' ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white' : 
              'bg-white/70 backdrop-blur-xl border border-white/40 text-gray-800'
            } p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
          >
            {/* Glassmorphism shine effect */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
              <div className="absolute -top-[100%] -left-[100%] w-[50%] h-[300%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></div>
            </div>

            <Quote className={`absolute top-8 right-8 w-12 h-12 ${t.size === 'large' ? 'text-white/10' : 'text-blue-500/10'} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`} />
            
            <div className="flex gap-1 mb-6 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={`fill-yellow-400 text-yellow-400 ${t.size === 'large' ? 'drop-shadow-md' : ''}`} />
              ))}
            </div>
            
            <p className={`${t.size === 'large' ? 'text-white/90 text-lg md:text-xl font-medium' : 'text-gray-600'} leading-relaxed mb-8 relative z-10`}>
              "{t.quote}"
            </p>
            
            {t.hasVideo && (
              <div className="mb-8 relative rounded-xl overflow-hidden aspect-video cursor-pointer group/video border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-background duration-300 group-hover/video:bg-black/20">
                  <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover/video:opacity-100 group-hover/video:scale-110 transition-all" />
                </div>
              </div>
            )}

            <div className={`flex items-center gap-4 pt-6 border-t ${t.size === 'large' ? 'border-white/20' : 'border-black/5'} relative z-10`}>
              <div className="relative">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/50 shadow-md" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <div className={`font-bold text-lg ${t.size === 'large' ? 'text-white' : 'text-[#0a0a0a]'}`}>{t.name}</div>
                <div className={`text-sm font-medium ${t.size === 'large' ? 'text-blue-200' : 'text-blue-600'}`}>{t.course}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
