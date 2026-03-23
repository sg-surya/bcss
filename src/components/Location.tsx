import { motion } from 'motion/react';

export default function Location() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="premium-card rounded-[2.5rem] overflow-hidden relative h-[400px]"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3490.123456789!2d77.7000000!3d28.9800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU4JzQ4LjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
          allowFullScreen={false} 
          loading="lazy"
        ></iframe>
        
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-white p-6 rounded-2xl shadow-xl border border-black/5">
          <h4 className="font-semibold text-[#0a0a0a] mb-2">Bhavna Institute</h4>
          <p className="text-sm text-gray-500">Pooth Khas, Rohta Road, Meerut, Uttar Pradesh</p>
        </div>
      </motion.div>
    </section>
  );
}
