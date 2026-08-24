import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Quote, BadgeCheck, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import SEO from '../components/SEO';

const testimonials = [
  { quote: "Best institute for tech skills! Highly recommended. Excellent learning environment and supportive staff. Five stars!", name: "Varsha Sharma", course: "Computer Courses", avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23005aab'/><text x='50' y='67' font-family='system-ui' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>V</text></svg>", date: "2 weeks ago", featured: true },
  { quote: "Bhavna Institute is one of the best computer institutes in Meerut. The teachers explain every topic very clearly and focus on practical learning.", name: "Amit Kumar", course: "Computer Courses", avatar: "/avatar_2.png", date: "1 month ago", featured: false },
  { quote: "Excellent place for anyone looking to upgrade their skills. The faculty is highly knowledgeable and supportive. Curriculum is well-structured.", name: "Gunjan Kushwaha", course: "Skills Upgrade", avatar: "/avatar.png", date: "3 weeks ago", featured: false },
  { quote: "Amazing experience! Faculty explains every concept with real examples, and the environment is very supportive.", name: "Manvendra", course: "Practical Learning", avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23ff6b00'/><text x='50' y='67' font-family='system-ui' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>M</text></svg>", date: "5 days ago", featured: false },
  { quote: "Great institute for computer courses! I learned Basic and found the training very practical and useful for my career.", name: "Varsha Rani", course: "Computer Courses", avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23005aab'/><text x='50' y='67' font-family='system-ui' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>V</text></svg>", date: "1 week ago", featured: true },
  { quote: "The learning experience was amazing! The practical approach really helped me grasp concepts quickly.", name: "Shivam", course: "Practical Learning", avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23e91e63'/><text x='50' y='67' font-family='system-ui' font-size='50' font-weight='bold' fill='white' text-anchor='middle'>S</text></svg>", date: "4 days ago", featured: false },
  { quote: "Great institute with supportive teachers and a positive environment. Staff is very helpful and guides properly.", name: "Arnay Tiwari", course: "Computer Courses", avatar: "/avatar_3.png", date: "2 months ago", featured: false },
  { quote: "Provides an exceptional learning ecosystem that bridges theory and practical application.", name: "Biswajit Kumar", course: "Professional Excellence", avatar: "/avatar_4.png", date: "3 months ago", featured: false }
];

const stats = [
  { value: "4.8", suffix: "/5", label: "Average Rating" },
  { value: "500+", suffix: "", label: "Happy Students" },
  { value: "100+", suffix: "", label: "5-Star Reviews" },
  { value: "94%", suffix: "", label: "Recommend Us" }
];

const filters = ["All Reviews", "Computer Courses", "Skills Upgrade", "Practical Learning"];

export default function StudentReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("All Reviews");
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const filtered = testimonials.filter(t => activeFilter === "All Reviews" || t.course === activeFilter);

  const getAsym = (idx: number, featured: boolean) => {
    if (filtered.length !== 8) return "col-span-12 md:col-span-6 lg:col-span-4";
    const map = [
      "col-span-12 lg:col-span-8",
      "col-span-12 lg:col-span-4 lg:translate-y-8 lg:rotate-[0.6deg]",
      "col-span-12 lg:col-span-4 lg:-rotate-[0.5deg]",
      "col-span-12 lg:col-span-4 lg:translate-y-3",
      "col-span-12 lg:col-span-4 lg:rotate-[0.4deg]",
      "col-span-12 lg:col-span-5",
      "col-span-12 lg:col-span-7 lg:translate-y-4",
      "col-span-12 lg:col-span-8 lg:col-start-3",
    ];
    return map[idx] || "col-span-12 lg:col-span-4";
  };

  return (
    <div className="pt-20 min-h-screen bg-[#FCFBF8]">
      <SEO title="Student Reviews" description="Read what our students say about Bhavna Institute." canonical="/reviews" />

      <section className="px-6 max-w-[1536px] mx-auto pt-8 md:pt-12">
        <div className="bg-[#0a0a0a] rounded-[32px] md:rounded-[40px] p-8 md:p-12 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '28px 28px' }} />
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] opacity-20" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase mb-6">
                <Sparkles size={12} className="text-orange-500" /> Student Reviews • Verified
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[0.9]">
                Don't just take<br />
                <span className="font-serif italic font-light text-blue-400">our word for it.</span>
              </h1>
              <p className="text-white/60 mt-4 text-lg max-w-xl leading-relaxed">Real stories from students who transformed their careers with practical training.</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["/avatar.png","/avatar_2.png","/avatar_3.png","/avatar_4.png"].map((a,i)=><img key={i} src={a} alt="" className="w-9 h-9 rounded-full border-2 border-[#0a0a0a] object-cover bg-white" />)}
                  <div className="w-9 h-9 rounded-full bg-white text-black border-2 border-[#0a0a0a] flex items-center justify-center text-xs font-bold">+500</div>
                </div>
                <div className="text-white text-sm">
                  <div className="flex items-center gap-1"><Star size={14} className="fill-yellow-400 text-yellow-400" /><Star size={14} className="fill-yellow-400 text-yellow-400" /><Star size={14} className="fill-yellow-400 text-yellow-400" /><Star size={14} className="fill-yellow-400 text-yellow-400" /><Star size={14} className="fill-yellow-400 text-yellow-400" /><span className="font-bold ml-1">4.8/5</span></div>
                  <div className="text-white/60 text-xs">Average rating from 500+ learners</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-black/5">
                  <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]">{s.value}<span className="text-blue-600">{s.suffix}</span></div>
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-[1536px] mx-auto py-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-gray-400 mr-2"><Filter size={12}/> Filter:</span>
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 py-2 rounded-full text-sm font-semibold border-[1.5px] transition-all ${activeFilter===f ? 'bg-[#0a0a0a] text-white border-black shadow-[3px_3px_0px_0px_#0a0a0a]' : 'bg-white text-gray-600 border-black/10 hover:border-black/20'}`}>{f}</button>
          ))}
          <span className="ml-auto text-sm text-gray-400 font-medium hidden md:block">{filtered.length} reviews</span>
        </div>
      </section>

      <section className="px-6 max-w-[1536px] mx-auto pb-12">
        <div className="grid grid-cols-12 gap-5 lg:gap-6">
          {filtered.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className={`${getAsym(idx, t.featured)} group relative flex flex-col rounded-[28px] border-[1.5px] border-black p-6 md:p-7 shadow-[5px_5px_0px_0px_#0a0a0a] hover:rotate-0 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#0a0a0a] transition-all ${t.featured ? 'bg-[#0a0a0a] text-white' : 'bg-white text-[#0a0a0a]'}`}
            >
              {t.featured && <div className="absolute -top-3 -right-3 bg-[#FFB800] text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-black rotate-3">★ Featured</div>}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border ${t.featured ? 'bg-white text-black border-white' : 'bg-[#FFF4CC] border-black/10'}`}>{t.course}</span>
                <span className={`text-xs font-medium ${t.featured ? 'text-white/60' : 'text-gray-400'}`}>{t.date}</span>
              </div>
              <div className="flex items-center gap-1.5 mb-4">
                <div className="flex">{[...Array(5)].map((_,i)=><Star key={i} size={14} className="fill-[#FFB800] text-[#FFB800]" />)}</div>
                <span className={`text-xs font-bold ${t.featured?'text-white/60':'text-gray-400'}`}>5.0</span>
                <span className={`ml-auto inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-full ${t.featured?'bg-white/10 text-white/80':'bg-green-50 text-green-700 border border-green-200'}`}><BadgeCheck size={12}/> Verified</span>
              </div>
              <div className="relative flex-1">
                <Quote size={28} className={`absolute -top-1 -left-1 ${t.featured ? 'text-white/10' : 'text-black/5'}`} />
                <p className={`relative text-[15px] leading-relaxed pl-2 ${t.featured ? 'text-white/90 font-medium text-[16px]' : 'text-gray-600'}`}>“{t.quote}”</p>
              </div>
              <div className={`flex items-center justify-between mt-6 pt-5 border-t ${t.featured?'border-white/10':'border-black/10'}`}>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm bg-gray-100" />
                  <div>
                    <div className={`text-sm font-bold leading-none ${t.featured?'text-white':'text-[#0a0a0a]'}`}>{t.name}</div>
                    <div className={`text-xs mt-1 font-medium ${t.featured?'text-white/60':'text-gray-500'}`}>Student • Meerut</div>
                  </div>
                </div>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center border group-hover:rotate-12 transition-transform ${t.featured?'bg-white text-black border-white':'bg-white text-black border-black shadow-[2px_2px_0px_0px_#0a0a0a]'}`}><ArrowUpRight size={16} /></div>
              </div>
            </motion.div>
          ))}
        </div>
        {filtered.length===0 && (
          <div className="text-center py-16 bg-white border-[1.5px] border-dashed border-black/20 rounded-[28px] mt-6">
            <p className="text-gray-500">No reviews found for this filter.</p>
            <button onClick={()=>setActiveFilter("All Reviews")} className="mt-3 text-sm font-bold text-blue-600">Clear filter</button>
          </div>
        )}
      </section>

      <section className="px-6 max-w-[1536px] mx-auto pb-20">
        <div className="bg-white border-[1.5px] border-black rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[6px_6px_0px_0px_#0a0a0a] rotate-[-0.2deg]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a0a0a]">Join our <span className="font-serif italic text-blue-600">happy students.</span></h2>
            <p className="text-gray-500 mt-2 max-w-xl">Start your journey today and become our next success story.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link to="/courses" className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-7 py-3.5 rounded-full font-bold">Explore Courses <ArrowUpRight size={16}/></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white border-[1.5px] border-black px-7 py-3.5 rounded-full font-bold shadow-[3px_3px_0px_0px_#0a0a0a]">Book Demo</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
