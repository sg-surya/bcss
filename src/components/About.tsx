import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-xs font-medium uppercase tracking-widest mb-8">
            About Us
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-8 leading-tight">
            About <span className="font-serif italic text-blue-600">Bhavna Institute</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance font-light">
            Bhavna Institute is a leading computer training institute in Meerut, providing practical and job-oriented courses. 
            Our mission is to help students build real skills and achieve career success in today's digital world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
