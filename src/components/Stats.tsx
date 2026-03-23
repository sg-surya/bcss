import { motion } from 'motion/react';

export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-[2.5rem] p-12 md:p-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-[100px] pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl font-light mb-4 font-serif italic text-blue-400">10k+</div>
            <div className="text-lg font-medium mb-2">Alumni Network</div>
            <p className="text-gray-400 text-sm leading-relaxed">Join a thriving community of professionals working at top tech firms globally.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-6xl font-light mb-4 font-serif italic text-blue-400">4.9</div>
            <div className="text-lg font-medium mb-2">Average Rating</div>
            <p className="text-gray-400 text-sm leading-relaxed">Consistently rated as the top computer institute for practical, hands-on learning.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-6xl font-light mb-4 font-serif italic text-blue-400">24/7</div>
            <div className="text-lg font-medium mb-2">Expert Support</div>
            <p className="text-gray-400 text-sm leading-relaxed">Never get stuck. Our mentors are available round the clock to resolve your doubts.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
