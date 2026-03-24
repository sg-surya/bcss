import { MessageCircle, PhoneCall, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Hidden on Mobile) */}
      <a 
        href="https://wa.me/919719205268" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:scale-110 hover:bg-[#1ebe57] transition-all duration-300 items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#0a0a0a] text-sm font-medium px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-black/5">
          Chat with us!
        </div>
      </a>

      {/* Mobile Floating Quick-Action Menu (Hidden on Desktop) */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-white/90 backdrop-blur-xl border border-black/10 shadow-2xl rounded-full p-2 flex items-center justify-between"
      >
        <a 
          href="tel:+919719205268" 
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <PhoneCall size={20} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>
        
        <div className="w-px h-8 bg-black/10 mx-1"></div>
        
        <a 
          href="https://wa.me/919719205268" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-[#25D366] hover:text-[#1ebe57] transition-colors"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>
        
        <div className="w-px h-8 bg-black/10 mx-1"></div>
        
        <a 
          href="#courses" 
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Download size={20} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Brochure</span>
        </a>
      </motion.div>
    </>
  );
}
