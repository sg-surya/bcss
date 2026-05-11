import { MessageCircle, PhoneCall, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function MobileStickyActions() {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Hidden on Mobile) */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919719205268?text=Hi,%20I%20have%20an%20inquiry%20about%20the%20courses."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-shadow hidden md:flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-gray-900 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </motion.a>

      {/* Mobile Sticky Bottom Action Bar (Visible only on Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-safe">
        <div className="flex items-center justify-between p-2 gap-2">
          
          <a 
            href="tel:+919719205268" 
            className="flex-1 flex flex-col items-center justify-center py-2 text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
          >
            <PhoneCall size={20} className="mb-1" />
            <span className="text-[10px] font-bold uppercase">Call Us</span>
          </a>
          
          <a 
            href="https://wa.me/919719205268?text=Hi,%20I%20want%20to%20book%20a%20free%20demo."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.5] bg-gradient-to-r from-brand-600 to-brand-500 text-white flex items-center justify-center gap-1.5 py-3 rounded-xl font-bold shadow-md shadow-brand-500/30 active:scale-95 transition-transform"
          >
            <PlayCircle size={18} />
            <span className="text-sm">Free Demo</span>
          </a>

          <a 
            href="https://wa.me/919719205268?text=Hi,%20I%20have%20an%20inquiry." 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-2 text-[#25D366] hover:bg-green-50 rounded-lg transition-colors"
          >
            <MessageCircle size={20} className="mb-1" />
            <span className="text-[10px] font-bold uppercase">WhatsApp</span>
          </a>

        </div>
      </div>
      
      {/* Spacer to prevent content from hiding behind the mobile sticky bar */}
      <div className="h-20 md:hidden w-full"></div>
    </>
  );
}
