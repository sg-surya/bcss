import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1536px] mx-auto bg-[#0a0a0a] rounded-[2.5rem] p-12 md:p-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-[100px] pointer-events-none" />
        
        <div className="mb-16 md:text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">
            Our Results <span className="font-serif italic text-gray-400">Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl md:text-6xl font-light mb-4 font-serif italic text-blue-400">500+</div>
            <div className="text-lg font-medium mb-2">Students Trained</div>
            <p className="text-gray-400 text-sm leading-relaxed">Successfully upskilled and ready for the industry.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-5xl md:text-6xl font-light mb-4 font-serif italic text-[#25D366]">100+</div>
            <div className="text-lg font-medium mb-2">Placed / Freelancing</div>
            <p className="text-gray-400 text-sm leading-relaxed">Earning and growing in their respective fields.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-5xl md:text-6xl font-light mb-4 font-serif italic text-blue-400">4.8</div>
            <div className="text-lg font-medium mb-2">Star Rating</div>
            <p className="text-gray-400 text-sm leading-relaxed">Highly rated by our students for quality education.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="mb-6 text-blue-400">
              <MapPin size={56} strokeWidth={1.5} />
            </div>
            <div className="text-lg font-medium mb-2">Meerut Based</div>
            <p className="text-gray-400 text-sm leading-relaxed">Proudly serving the students of Meerut and beyond.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
