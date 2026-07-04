import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Quote, CheckCircle2, PlayCircle } from 'lucide-react';
import SEO from '../components/SEO';

const testimonials = [
  {
    quote: "Best institute for tech skills! Highly recommended. Excellent learning environment and supportive staff. Five stars! The best place to learn computer courses. Loved it. Very polite teachers and neat classrooms. Great experience! Highly professional trainers and affordable fees. Value for money.",
    name: "Varsha Sharma",
    course: "Computer Courses",
    avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23005aab'/><text x='50' y='67' font-family='system-ui, -apple-system, sans-serif' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>V</text></svg>",
    hasVideo: true,
    rating: 5
  },
  {
    quote: "Bhavna Institute is one of the best computer institutes in Meerut. The teachers explain every topic very clearly and focus on practical learning. I improved my computer skills a lot after joining here.",
    name: "Amit Kumar",
    course: "Computer Courses",
    avatar: "/avatar_2.png",
    rating: 5
  },
  {
    quote: "Bhavna Institute is an excellent place for anyone looking to upgrade their skills. The faculty is highly knowledgeable and supportive, ensuring that every student understands the core concepts thoroughly. The curriculum is well-structured and focuses on practical learning, which is a huge plus. Highly recommended for serious learners.",
    name: "Gunjan Kushwaha",
    course: "Skills Upgrade",
    avatar: "/avatar.png",
    rating: 5
  },
  {
    quote: "Amazing experience at Bhavna Institute! The faculty explains every concept with real examples, and the environment is very supportive. I learned more here in weeks than I did in months elsewhere.",
    name: "Manvendra",
    course: "Practical Learning",
    avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23ff6b00'/><text x='50' y='67' font-family='system-ui, -apple-system, sans-serif' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>M</text></svg>",
    rating: 5
  },
  {
    quote: "Great institute for computer courses! I learned Basic and found the training very practical and useful for my career.",
    name: "Varsha Rani",
    course: "Computer Courses",
    avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23005aab'/><text x='50' y='67' font-family='system-ui, -apple-system, sans-serif' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>V</text></svg>",
    hasVideo: true,
    rating: 5
  },
  {
    quote: "The learning experience at Bhavna Institute was amazing! The practical approach to teaching really helped me.",
    name: "Shivam",
    course: "Practical Learning",
    avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23e91e63'/><text x='50' y='67' font-family='system-ui, -apple-system, sans-serif' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>S</text></svg>",
    rating: 5
  },
  {
    quote: "Great institute with supportive teachers and a positive learning environment. The staff is very helpful and always guides students properly. I had a really good experience here and learned many useful skills. Highly recommended for students who want quality education and good support.",
    name: "Arnay Tiwari",
    course: "Computer Courses",
    avatar: "/avatar_3.png",
    rating: 5
  },
  {
    quote: "Bhavna Institute provides an exceptional learning ecosystem that bridges the gap between theoretical knowledge and practical application. The faculty's dedication to student success is evident in every session. A top choice for those aiming for professional excellence.",
    name: "Biswajit Kumar",
    course: "Professional Excellence",
    avatar: "/avatar_4.png",
    rating: 5
  }
];

const stats = [
  { value: "4.8", label: "Average Rating", suffix: "/5" },
  { value: "500+", label: "Happy Students" },
  { value: "100+", label: "5-Star Reviews" },
  { value: "94%", label: "Recommend Us" }
];

export default function StudentReviewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#f5f5f4]">
      <SEO title="Student Reviews" description="Read what our students say about Bhavna Institute. Real reviews from real students." canonical="/reviews" />
      
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-[1536px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-xs font-bold uppercase tracking-widest mb-8 text-blue-700"
          >
            <Star size={14} className="text-blue-700" />
            Student Reviews
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tighter text-[#0a0a0a] mb-6"
          >
            Don't Just Take Our <br />
            <span className="font-serif italic text-blue-600">Word for It.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Real stories from students who transformed their careers with our practical, job-oriented training.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-2">
                {stat.value}{stat.suffix || ''}
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group bg-white/70 backdrop-blur-xl border border-white/40 text-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                index === 0 || index === 4 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-600 to-blue-800 text-white border-transparent' : ''
              }`}
            >
              {/* Glassmorphism shine effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute -top-[100%] -left-[100%] w-[50%] h-[300%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></div>
              </div>

              <Quote className={`absolute top-8 right-8 w-12 h-12 ${
                index === 0 || index === 4 ? 'text-white/10' : 'text-blue-500/10'
              } transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`} />

              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className={`leading-relaxed mb-8 relative z-10 ${
                index === 0 || index === 4 ? 'text-white/90 text-lg font-medium' : 'text-gray-600'
              }`}>
                "{testimonial.quote}"
              </p>

              {testimonial.hasVideo && (
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

              <div className={`flex items-center gap-4 pt-6 border-t ${
                index === 0 || index === 4 ? 'border-white/20' : 'border-black/5'
              } relative z-10`}>
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover object-top border-2 border-white/50 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <div className={`font-bold text-lg ${
                    index === 0 || index === 4 ? 'text-white' : 'text-[#0a0a0a]'
                  }`}>{testimonial.name}</div>
                  <div className={`text-sm ${
                    index === 0 || index === 4 ? 'text-white/70' : 'text-gray-500'
                  }`}>{testimonial.course}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-[1536px] mx-auto text-center border-t border-black/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto premium-card p-12 md:p-16 rounded-[2.5rem]"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-6">
            Join Our <span className="font-serif italic text-blue-600">Happy Students.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Start your learning journey today and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/courses" 
              className="inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-black/5 text-base"
            >
              Explore Courses
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 border border-black/10 bg-white text-[#0a0a0a] px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-colors shadow-lg shadow-black/5 text-base"
            >
              Book Free Demo
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
