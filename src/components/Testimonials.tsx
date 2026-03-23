import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The curriculum is rigorous and perfectly aligned with what the industry actually needs. I transitioned from a non-tech background to a Full-Stack Developer in 6 months.",
      name: "Rahul Verma",
      role: "Software Engineer at TechCorp",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "Bhavna Institute doesn't just teach syntax; they teach engineering principles. The mentorship and career support were instrumental in my placement.",
      name: "Priya Singh",
      role: "Data Analyst at InnovateInc",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
          Student <span className="font-serif italic text-gray-400">Outcomes</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="premium-card p-10 md:p-12 rounded-[2.5rem]"
          >
            <div className="text-4xl text-blue-600 font-serif italic mb-6">"</div>
            <p className="text-xl md:text-2xl text-[#0a0a0a] leading-relaxed mb-10 font-medium tracking-tight">
              {t.quote}
            </p>
            
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />
              <div>
                <div className="font-semibold text-[#0a0a0a]">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
