import { motion } from 'motion/react';
import { MapPin, ExternalLink } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-12 px-6 max-w-[1536px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="premium-card rounded-[2.5rem] overflow-hidden relative h-[400px] group"
      >
        <iframe 
          src="https://maps.google.com/maps?q=Bhavna%20Institute,%20Pooth%20Khas,%20Rohta%20Road,%20Meerut&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
          allowFullScreen={false} 
          loading="lazy"
        ></iframe>
        
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-white p-6 rounded-2xl shadow-xl border border-black/5 transition-transform group-hover:-translate-y-2 duration-300">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-[#0a0a0a]">Bhavna Institute</h4>
            <a 
              href="https://maps.app.goo.gl/if7jNUcfgLrePCx39" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 p-1 rounded-full hover:bg-blue-50 transition-colors"
              title="Open in Google Maps"
            >
              <ExternalLink size={18} />
            </a>
          </div>
          <p className="text-sm text-gray-500 mb-4 flex items-start gap-2">
            <MapPin size={16} className="shrink-0 mt-0.5 text-gray-400" />
            <span>Pooth Khas, Rohta Road, Meerut, Uttar Pradesh</span>
          </p>
          <a 
            href="https://maps.app.goo.gl/if7jNUcfgLrePCx39" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full block text-center bg-[#0a0a0a] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            Get Directions
          </a>
        </div>
      </motion.div>
    </section>
  );
}
