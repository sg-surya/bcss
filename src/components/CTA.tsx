import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center shadow-2xl"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              New Batch Started
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-6">
              Start Your Career <span className="font-serif italic text-blue-400">Today.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto text-balance">
              Book your free demo class now.
            </p>
            <p className="text-lg md:text-xl font-medium text-white mb-10">
              "Aaj hi join karo aur apni career journey start karo."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919719205268?text=Hi,%20I%20am%20interested%20in%20enrolling%20in%20a%20course."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0a0a0a] px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
              >
                Enroll Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/919719205268?text=Hi,%20I%20have%20a%20query."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#1ebe57] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
