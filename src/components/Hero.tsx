import { MessageCircle, PlayCircle, BookOpen, Star, Award, Code, CheckCircle2, TrendingUp, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-[1536px] mx-auto min-h-[90vh] flex flex-col xl:flex-row items-center justify-between gap-12 relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-brand-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Left Content Area */}
      <div className="flex-1 w-full flex flex-col items-start text-left z-10">
        
        {/* The Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-2 py-1.5 pr-4 rounded-full border border-brand-200 bg-brand-50 mb-6 shadow-sm"
        >
          <span className="bg-gradient-to-r from-brand-600 to-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
            NEW
          </span>
          <span className="text-sm font-semibold text-brand-900 pr-2">Admissions Open for 2026 Batch</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold leading-[1.05] text-gray-900 mb-6 font-heading tracking-tight"
        >
          Learn Skills That <br className="hidden xl:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">Build Real Careers.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10 font-medium"
        >
          Join Bhavna Institute and gain practical computer skills through hands-on training, expert mentorship, certification, and career-focused learning.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 w-full mb-12"
        >
          <a 
            href="https://wa.me/919719205268?text=Hi,%20I%20want%20to%20book%20a%20free%20demo."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <PlayCircle size={20} />
            Book Free Demo
          </a>

          <Link to="/courses" className="w-full sm:w-auto">
            <button className="btn-secondary w-full text-brand-700">
              <BookOpen size={20} className="text-brand-600" />
              Explore Courses
            </button>
          </Link>
          
          <a 
            href="https://wa.me/919719205268?text=Hi,%20I%20have%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !border-green-200 hover:!bg-green-50"
          >
            <MessageCircle size={20} className="text-green-600" />
            <span className="text-gray-800">Chat on WhatsApp</span>
          </a>
        </motion.div>
        
        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-gray-100 w-full max-w-xl"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Student" className="w-12 h-12 rounded-full border-2 border-white object-cover bg-gray-100 shadow-sm" />
            ))}
          </div>
          <div>
            <div className="flex text-yellow-400 mb-1 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
            </div>
            <p className="text-sm font-medium text-gray-600">
              <strong className="text-gray-900">4.9/5</strong> rating from over 2,000 students
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Visual Area - MOBILE ONLY */}
      <div className="flex sm:hidden flex-1 w-full relative h-[380px] items-center justify-center mt-12 perspective-[1000px]">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-500/20 rounded-full blur-[60px]"></div>

        {/* Floating Code Card (Center) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-20 w-[90%] max-w-[320px] bg-[#0f172a] rounded-2xl shadow-2xl border border-gray-700/50 p-5"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-[10px] font-mono text-gray-500 ml-2">master.js</span>
          </div>
          <div className="font-mono text-[11px] sm:text-xs leading-loose">
            <div><span className="text-purple-400">const</span> <span className="text-blue-300">student</span> <span className="text-pink-400">=</span> <span className="text-yellow-200">new</span> <span className="text-green-300">Developer</span><span className="text-gray-300">();</span></div>
            <div><span className="text-blue-300">student</span><span className="text-gray-300">.</span><span className="text-yellow-200">learn</span><span className="text-gray-300">(</span><span className="text-orange-300">"React & Next"</span><span className="text-gray-300">);</span></div>
            <div className="mt-2"><span className="text-pink-400">if</span> <span className="text-gray-300">(</span><span className="text-blue-300">skills</span> <span className="text-pink-400">&gt;=</span> <span className="text-orange-300">100</span><span className="text-gray-300">) {`{`}</span></div>
            <div className="pl-4"><span className="text-blue-300">console</span><span className="text-gray-300">.</span><span className="text-yellow-200">log</span><span className="text-gray-300">(</span><span className="text-green-300">"Hired!"</span><span className="text-gray-300">);</span></div>
            <div><span className="text-gray-300">{`}`}</span></div>
          </div>
        </motion.div>

        {/* Floating Govt Badge (Top Left) */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute z-30 top-4 left-2 bg-white/95 backdrop-blur rounded-xl p-2.5 shadow-xl border border-gray-100 flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-sm">
            <Award size={16} />
          </div>
          <div className="pr-1">
            <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-wide">Govt. Certified</h3>
            <p className="text-[9px] text-gray-500 font-medium">ISO 9001:2015</p>
          </div>
        </motion.div>

        {/* Floating Student Badge (Bottom Right) */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute z-30 bottom-6 right-2 bg-white/95 backdrop-blur rounded-xl p-2.5 shadow-xl border border-gray-100 flex items-center gap-2"
        >
          <div className="relative">
            <img src="https://i.pravatar.cc/100?img=33" alt="Student" className="w-8 h-8 rounded-full border border-white object-cover shadow-sm" />
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
              <CheckCircle2 size={8} className="text-white" />
            </div>
          </div>
          <div>
            <p className="text-[9px] font-bold text-brand-600 uppercase tracking-wider">Placed in TCS</p>
            <p className="text-xs font-bold text-gray-900 leading-tight">Rahul Kumar</p>
          </div>
        </motion.div>
        
        {/* Floating Excel Badge (Top Right) */}
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute z-10 top-20 right-2 bg-white/90 backdrop-blur rounded-xl p-2 shadow-lg border border-gray-100 flex items-center gap-2"
        >
           <div className="w-5 h-5 bg-green-600 rounded flex items-center justify-center text-white text-[10px] font-bold">X</div>
           <h3 className="text-[10px] font-bold text-green-900 pr-1">Adv. Excel</h3>
        </motion.div>
      </div>

      {/* Right Visual Area - Cascading Isometric UI Stack (DESKTOP/TABLET ONLY) */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden sm:flex flex-1 w-full max-w-lg xl:max-w-2xl relative h-[450px] sm:h-[500px] xl:h-[600px] items-center justify-center mt-8 xl:mt-0 perspective-[2000px] sm:scale-90 lg:scale-100 origin-top xl:origin-center"
      >
        
        {/* Background glow for the stack */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/30 rounded-full blur-[80px]"></div>

        {/* LAYER 1: Dashboard UI (Back) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          className="absolute right-0 xl:right-10 top-10 xl:top-20 w-72 glass-card rounded-2xl shadow-2xl border border-white/60 p-5 transform rotate-6 scale-90 z-10"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800">Placement Analytics</h3>
            <BarChart3 size={16} className="text-brand-500" />
          </div>
          <div className="flex items-end gap-2 h-24 mb-4 border-b border-gray-100 pb-2">
            {[40, 60, 45, 80, 55, 90, 100].map((h, i) => (
              <div key={i} className="w-full bg-brand-100 rounded-t-sm relative group">
                <div className="absolute bottom-0 w-full bg-brand-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-gray-500 font-bold">
            <span>2020</span>
            <span>2026</span>
          </div>
        </motion.div>

        {/* LAYER 2: Coding Interface (Middle) */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[340px] bg-[#0f172a] rounded-2xl shadow-2xl border border-gray-700/50 p-5 z-20"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-[10px] font-mono text-gray-500 ml-2">master.js</span>
          </div>
          <div className="font-mono text-xs leading-loose">
            <div><span className="text-purple-400">const</span> <span className="text-blue-300">student</span> <span className="text-pink-400">=</span> <span className="text-yellow-200">new</span> <span className="text-green-300">Developer</span><span className="text-gray-300">();</span></div>
            <div><span className="text-blue-300">student</span><span className="text-gray-300">.</span><span className="text-yellow-200">learn</span><span className="text-gray-300">(</span><span className="text-orange-300">"React & Next.js"</span><span className="text-gray-300">);</span></div>
            <div className="mt-2"><span className="text-pink-400">if</span> <span className="text-gray-300">(</span><span className="text-blue-300">student</span><span className="text-gray-300">.</span><span className="text-blue-300">skills</span> <span className="text-pink-400">&gt;=</span> <span className="text-orange-300">100</span><span className="text-gray-300">) {`{`}</span></div>
            <div className="pl-4"><span className="text-blue-300">console</span><span className="text-gray-300">.</span><span className="text-yellow-200">log</span><span className="text-gray-300">(</span><span className="text-green-300">"Hired at Top MNC!"</span><span className="text-gray-300">);</span></div>
            <div><span className="text-gray-300">{`}`}</span></div>
          </div>
        </motion.div>

        {/* LAYER 3: Excel/Tally UI (Front Left) */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-0 xl:-left-6 bottom-10 xl:bottom-20 w-64 glass-card rounded-2xl shadow-2xl border border-white/80 p-4 transform -rotate-6 z-30"
        >
          <div className="flex items-center gap-2 mb-3 bg-green-50 p-2 rounded border border-green-100">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold shadow">X</div>
            <h3 className="text-xs font-bold text-green-900">Advanced Excel</h3>
          </div>
          <div className="grid grid-cols-3 gap-1 mb-1">
            <div className="bg-gray-100 text-[9px] text-gray-500 font-bold p-1 text-center rounded">A</div>
            <div className="bg-gray-100 text-[9px] text-gray-500 font-bold p-1 text-center rounded">B</div>
            <div className="bg-gray-100 text-[9px] text-gray-500 font-bold p-1 text-center rounded">C</div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="border border-gray-100 text-[10px] p-1.5 text-gray-700 bg-white rounded-sm">Revenue</div>
            <div className="border border-gray-100 text-[10px] p-1.5 text-gray-700 bg-white rounded-sm font-mono">₹50,000</div>
            <div className="border border-green-200 text-[10px] p-1.5 text-green-700 bg-green-50 rounded-sm font-mono font-bold">+15%</div>
            <div className="border border-gray-100 text-[10px] p-1.5 text-gray-700 bg-white rounded-sm">Profit</div>
            <div className="border border-gray-100 text-[10px] p-1.5 text-gray-700 bg-white rounded-sm font-mono">₹20,000</div>
            <div className="border border-gray-100 text-[10px] p-1.5 text-gray-700 bg-white rounded-sm font-mono">...</div>
          </div>
        </motion.div>

        {/* FLOATER 1: Certification Badge (Top Left) */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-24 left-10 xl:left-0 bg-white/90 backdrop-blur rounded-2xl p-3 shadow-xl border border-gray-100 flex items-center gap-3 z-40"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-sm ring-4 ring-orange-500/10">
            <Award size={20} />
          </div>
          <div className="pr-2 hidden sm:block">
            <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-wide">Govt. Certified</h3>
            <p className="text-[10px] text-gray-500 font-medium">ISO 9001:2015</p>
          </div>
        </motion.div>

        {/* FLOATER 2: Student Success (Bottom Right) */}
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-24 right-4 xl:right-0 glass-card rounded-2xl p-3 shadow-xl z-40 flex items-center gap-3 border border-white/60"
        >
          <div className="relative">
            <img src="https://i.pravatar.cc/100?img=33" alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
              <CheckCircle2 size={10} className="text-white" />
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">Placed in TCS</p>
            <p className="text-sm font-bold text-gray-900 leading-tight">Rahul Kumar</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
