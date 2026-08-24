import { motion } from 'motion/react';
import { Star, Quote, ArrowUpRight, BadgeCheck, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { quote: "Best institute for tech skills! Highly recommended. Excellent learning environment and supportive staff. Five stars! The best place to learn computer courses. Loved it.", name: "Varsha Sharma", course: "Computer Courses", avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23005aab'/><text x='50' y='67' font-family='system-ui' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>V</text></svg>", featured: true },
    { quote: "Bhavna Institute is one of the best computer institutes in Meerut. The teachers explain every topic very clearly and focus on practical learning.", name: "Amit Kumar", course: "Computer Courses", avatar: "/avatar_2.png", featured: false },
    { quote: "Bhavna Institute is an excellent place for anyone looking to upgrade their skills. The faculty is highly knowledgeable and the curriculum is well-structured.", name: "Gunjan Kushwaha", course: "Skills Upgrade", avatar: "/avatar.png", featured: false },
    { quote: "Amazing experience! Faculty explains every concept with real examples, and the environment is very supportive. Learned more in weeks than months elsewhere.", name: "Manvendra", course: "Practical Learning", avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23ff6b00'/><text x='50' y='67' font-family='system-ui' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>M</text></svg>", featured: false },
    { quote: "Great institute for computer courses! I learned Basic and found the training very practical and useful for my career.", name: "Varsha Rani", course: "Computer Courses", avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23005aab'/><text x='50' y='67' font-family='system-ui' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>V</text></svg>", featured: true },
    { quote: "The learning experience was amazing! The practical approach really helped me grasp concepts quickly.", name: "Shivam", course: "Practical Learning", avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23e91e63'/><text x='50' y='67' font-family='system-ui' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>S</text></svg>", featured: false },
    { quote: "Great institute with supportive teachers and a positive learning environment. Staff is very helpful and guides properly. Highly recommended.", name: "Arnay Tiwari", course: "Computer Courses", avatar: "/avatar_3.png", featured: false },
    { quote: "Provides an exceptional learning ecosystem that bridges theory and practical application. Faculty dedication is evident in every session.", name: "Biswajit Kumar", course: "Professional Excellence", avatar: "/avatar_4.png", featured: false }
  ];

  const spans = [
    "lg:col-span-8",
    "lg:col-span-4 lg:translate-y-8 lg:rotate-[0.7deg]",
    "lg:col-span-4 lg:-rotate-[0.6deg]",
    "lg:col-span-4 lg:translate-y-4 lg:rotate-[0.4deg]",
    "lg:col-span-4 lg:-translate-y-2 lg:rotate-[-0.5deg]",
    "lg:col-span-5 lg:translate-y-2",
    "lg:col-span-7 lg:translate-y-6 lg:rotate-[0.3deg]",
    "lg:col-span-8 lg:col-start-3 lg:-rotate-[0.4deg]",
  ];

  return (
    <section className="py-20 md:py-28 px-6 max-w-[1536px] mx-auto bg-[#FCFBF8] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #0a0a0a 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
      <div className="absolute top-10 right-10 w-32 h-32 border border-black/10 rounded-full hidden lg:block" />
      <div className="absolute top-24 right-20 w-2 h-2 bg-orange-400 rounded-full hidden lg:block" />

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-10 relative">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black text-xs font-bold tracking-widest uppercase mb-5 shadow-[3px_3px_0px_0px_#0a0a0a]">
            <Sparkles size={12} className="text-orange-500" /> Wall of Love • 500+ reviews
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tighter text-[#0a0a0a] leading-[0.9]">
            Real stories.<br />
            <span className="font-serif italic font-light text-blue-600">Real growth.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-gray-500 mt-4 text-base md:text-lg max-w-xl leading-relaxed">
            Students who transformed their careers with practical, job-oriented training at BHAVNA.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="shrink-0 bg-white border-[1.5px] border-black rounded-2xl p-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_#0a0a0a] w-fit rotate-[0.5deg]">
          <div className="flex -space-x-2">
            {["/avatar.png","/avatar_2.png","/avatar_3.png","/avatar_4.png"].map((a,i)=>(
              <img key={i} src={a} alt="" className="w-9 h-9 rounded-full border-2 border-white object-cover bg-gray-100" />
            ))}
            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] text-white border-2 border-white flex items-center justify-center text-xs font-bold">+3k</div>
          </div>
          <div className="pr-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_,i)=><Star key={i} size={14} className="fill-[#FFB800] text-[#FFB800]" />)}
              <span className="text-sm font-bold ml-1">4.8/5</span>
            </div>
            <div className="text-xs text-gray-500 font-medium">Trusted by 2,000+ learners</div>
          </div>
        </motion.div>
      </div>

      <div className="hidden md:grid grid-cols-12 gap-5 lg:gap-6 relative">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className={`group relative flex flex-col rounded-[28px] border-[1.5px] border-black p-6 lg:p-7 transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_0px_#0a0a0a] shadow-[5px_5px_0px_0px_#0a0a0a] col-span-12 ${spans[idx]} ${t.featured ? 'bg-[#0a0a0a] text-white' : 'bg-white text-[#0a0a0a]'}`}
          >
            {t.featured && <div className="absolute -top-3 -right-3 bg-[#FFB800] text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-black rotate-3">★ Featured</div>}

            <div className="flex items-start justify-between mb-5">
              <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border ${t.featured ? 'bg-white text-black border-white' : 'bg-[#FFF4CC] text-black border-black/10'}`}>
                {t.course}
              </span>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center border ${t.featured ? 'bg-white/10 border-white/20 text-white' : 'bg-[#0a0a0a] text-white border-black'}`}>
                <Quote size={14} />
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>
              <span className={`text-xs font-bold ${t.featured ? 'text-white/70' : 'text-gray-400'}`}>5.0</span>
              <span className={`ml-auto flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-full ${t.featured ? 'bg-white/10 text-white/80' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                <BadgeCheck size={12} /> Verified
              </span>
            </div>

            <p className={`text-[15px] leading-relaxed flex-1 ${t.featured ? 'text-white/90 font-medium text-[17px] leading-7' : 'text-gray-600'}`}>
              “{t.quote}”
            </p>

            <div className={`flex items-center justify-between mt-6 pt-5 border-t ${t.featured ? 'border-white/10' : 'border-black/10'}`}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm bg-gray-100" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                </div>
                <div>
                  <div className={`text-sm font-bold leading-none ${t.featured ? 'text-white' : 'text-[#0a0a0a]'}`}>{t.name}</div>
                  <div className={`text-xs mt-1 ${t.featured ? 'text-white/60' : 'text-gray-500'}`}>Student • Meerut</div>
                </div>
              </div>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-transform group-hover:rotate-12 ${t.featured ? 'bg-white text-black border-white' : 'bg-white text-black border-black shadow-[2px_2px_0px_0px_#0a0a0a]'}`}>
                <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden relative -mx-6 px-6 overflow-hidden">
        <style>{`@keyframes marqueeR{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.marquee-track{display:flex;animation:marqueeR 30s linear infinite;width:max-content}.marquee-track:hover{animation-play-state:paused}`}</style>
        <div className="marquee-track gap-4 py-4">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div key={idx} className={`shrink-0 w-[300px] flex flex-col rounded-[24px] border-[1.5px] border-black p-5 shadow-[4px_4px_0px_0px_#0a0a0a] ${t.featured ? 'bg-[#0a0a0a] text-white' : 'bg-white text-[#0a0a0a]'}`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${t.featured ? 'bg-white text-black' : 'bg-[#FFF4CC] border-black/10'}`}>{t.course}</span>
                <Quote size={14} className={t.featured? 'text-white/60':'text-black/20'} />
              </div>
              <div className="flex gap-1 mb-3">{[...Array(5)].map((_,i)=><Star key={i} size={13} className="fill-[#FFB800] text-[#FFB800]" />)}</div>
              <p className={`text-sm leading-relaxed flex-1 ${t.featured?'text-white/90':'text-gray-600'}`}>“{t.quote}”</p>
              <div className={`flex items-center gap-3 mt-5 pt-4 border-t ${t.featured?'border-white/10':'border-black/10'}`}>
                <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover border-2 border-white bg-gray-100" />
                <div><div className="text-sm font-bold">{t.name}</div><div className={`text-xs ${t.featured?'text-white/60':'text-gray-500'}`}>Student • Meerut</div></div>
                <BadgeCheck size={14} className="ml-auto text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
