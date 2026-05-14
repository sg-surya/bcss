import { motion } from 'motion/react';
import { Star, Quote, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Best institute for tech skills! Highly recommended. Excellent learning environment and supportive staff. Five stars! The best place to learn computer courses. Loved it. Very polite teachers and neat classrooms. Great experience! Highly professional trainers and affordable fees. Value for money.",
      name: "Varsha Sharma",
      course: "Computer Courses",
      avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23005aab'/><text x='50' y='67' font-family='system-ui, -apple-system, sans-serif' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>V</text></svg>",
      hasVideo: true,
      size: "large"
    },
    {
      quote: "Bhavna Institute is one of the best computer institutes in Meerut. The teachers explain every topic very clearly and focus on practical learning. I improved my computer skills a lot after joining here.",
      name: "Amit Kumar",
      course: "Computer Courses",
      avatar: "/avatar_2.png",
      size: "small"
    },
    {
      quote: "Bhavna Institute is an excellent place for anyone looking to upgrade their skills. The faculty is highly knowledgeable and supportive, ensuring that every student understands the core concepts thoroughly. The curriculum is well-structured and focuses on practical learning, which is a huge plus. Highly recommended for serious learners.",
      name: "Gunjan Kushwaha",
      course: "Skills Upgrade",
      avatar: "/avatar.png",
      size: "medium"
    },
    {
      quote: "Amazing experience at Bhavna Institute! The faculty explains every concept with real examples, and the environment is very supportive. I learned more here in weeks than I did in months elsewhere.",
      name: "Manvendra",
      course: "Practical Learning",
      avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23ff6b00'/><text x='50' y='67' font-family='system-ui, -apple-system, sans-serif' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>M</text></svg>",
      size: "small"
    },
    {
      quote: "Great institute for computer courses! I learned Basic and found the training very practical and useful for my career",
      name: "Varsha Rani",
      course: "Computer Courses",
      avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23005aab'/><text x='50' y='67' font-family='system-ui, -apple-system, sans-serif' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>V</text></svg>",
      hasVideo: true,
      size: "large"
    },
    {
      quote: "The learning experience at Bhavna Institute was amazing! The practical approach to teaching really helped me.",
      name: "Shivam",
      course: "Practical Learning",
      avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23e91e63'/><text x='50' y='67' font-family='system-ui, -apple-system, sans-serif' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>S</text></svg>",
      size: "medium"
    },
    {
      quote: "Great institute with supportive teachers and a positive learning environment. The staff is very helpful and always guides students properly. I had a really good experience here and learned many useful skills. Highly recommended for students who want quality education and good support.",
      name: "Arnay Tiwari",
      course: "Computer Courses",
      avatar: "/avatar_3.png",
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
            className={`break-inside-avoid relative group ${t.size === 'large'
              ? 'bg-white/70 backdrop-blur-xl border border-white/40 text-gray-800 md:bg-gradient-to-br md:from-blue-600 md:to-blue-800 md:text-white md:border-transparent'
              : 'bg-white/70 backdrop-blur-xl border border-white/40 text-gray-800'
              } p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
          >
            {/* Glassmorphism shine effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute -top-[100%] -left-[100%] w-[50%] h-[300%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></div>
            </div>

            <Quote className={`absolute top-8 right-8 w-12 h-12 ${t.size === 'large' ? 'text-blue-500/10 md:text-white/10' : 'text-blue-500/10'} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`} />

            <div className="flex gap-1 mb-6 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={`fill-yellow-400 text-yellow-400 ${t.size === 'large' ? 'md:drop-shadow-md' : ''}`} />
              ))}
            </div>

            <p className={`${t.size === 'large' ? 'text-gray-600 md:text-white/90 text-lg md:text-xl font-medium' : 'text-gray-600'} leading-relaxed mb-8 relative z-10`}>
              "{t.quote}"
            </p>

            {t.hasVideo && (
              <div className="hidden md:block mb-8 relative rounded-xl overflow-hidden aspect-video cursor-pointer group/video border border-white/20">
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

            <div className={`flex items-center gap-4 pt-6 border-t ${t.size === 'large' ? 'border-black/5 md:border-white/20' : 'border-black/5'} relative z-10`}>
              <div className="relative">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover object-top border-2 border-white/50 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <div className={`font-bold text-lg ${t.size === 'large' ? 'text-[#0a0a0a] md:text-white' : 'text-[#0a0a0a]'}`}>{t.name}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
