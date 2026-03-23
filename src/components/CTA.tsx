import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-12 md:p-20 rounded-[3rem] bg-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            Limited Seats Available
          </div>

          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-[#0a0a0a] mb-6">
            Start Your Career <span className="font-serif italic text-blue-600">Today!</span>
          </h2>
          
          <p className="text-xl text-gray-500 mb-4 max-w-2xl mx-auto text-balance">
            Book your free demo class now.
          </p>
          <p className="text-lg font-medium text-[#0a0a0a] mb-10">
            "Aaj hi join karo aur apni career journey start karo 🚀"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0a0a0a] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors shadow-xl shadow-black/10 flex items-center justify-center gap-2">
              Enroll Now <ArrowRight size={20} />
            </button>
            <button className="bg-[#25D366] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#1ebe57] transition-colors shadow-xl shadow-green-500/20 flex items-center justify-center gap-2">
              <MessageCircle size={20} /> WhatsApp Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
