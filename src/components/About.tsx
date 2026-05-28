import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance font-light mb-10">
            Bhavna Institute is a leading computer training institute in Meerut, providing practical and job-oriented courses. 
            Our mission is to help students build real skills and achieve career success in today's digital world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/about" className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-8 py-3.5 rounded-2xl font-medium hover:bg-blue-600 transition-colors shadow-sm text-base">
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
            <Link to="/courses" className="inline-flex items-center gap-2 border border-black/10 bg-white text-[#0a0a0a] px-8 py-3.5 rounded-2xl font-medium hover:border-black/30 transition-all text-base shadow-sm">
              Explore All Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
