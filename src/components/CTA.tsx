import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-[#0a0a0a] mb-6">
            Ready to <span className="font-serif italic text-blue-600">Build?</span>
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto text-balance">
            Join the next cohort of elite developers and designers. Applications for the 2026 batch are now open.
          </p>
          
          <button className="bg-[#0a0a0a] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors shadow-xl shadow-black/10">
            Apply for Admission
          </button>
        </motion.div>
      </div>
    </section>
  );
}
