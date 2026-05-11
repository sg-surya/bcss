import { motion } from 'motion/react';

const steps = [
  { num: '01', title: 'Free Demo', desc: 'Experience our teaching quality before you commit.' },
  { num: '02', title: 'Enrollment', desc: 'Simple admission process with flexible batch timings.' },
  { num: '03', title: 'Practical Training', desc: 'Learn through hands-on practice, not just theory.' },
  { num: '04', title: 'Live Projects', desc: 'Work on real-world projects to build your portfolio.' },
  { num: '05', title: 'Certification', desc: 'Get a recognized certificate upon course completion.' },
  { num: '06', title: 'Placement Support', desc: 'Receive job interview opportunities or freelance guidance.' },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 dark-premium-section relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-heading"
          >
            Your Learning <span className="text-brand-400 glow-text">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-100/70 text-lg max-w-2xl mx-auto"
          >
            A structured, step-by-step process designed to take you from a beginner to an industry-ready professional.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="dark-glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-brand-500/40 transition-all duration-300"
            >
              {/* Soft glow on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-brand-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-500/20">
                  {idx + 1}
                </div>
                <div className="text-5xl font-black text-white/5 select-none transition-all duration-300 group-hover:text-white/10 group-hover:scale-105">
                  {step.num}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 font-heading relative z-10 group-hover:text-brand-300 transition-colors">{step.title}</h3>
              <p className="text-brand-100/60 leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
