import { motion } from 'motion/react';
import { Code, PieChart, Briefcase, PenTool, Monitor, Megaphone } from 'lucide-react';

const outcomes = [
  { icon: <Code size={32} />, title: 'Web Developer', desc: 'Build modern websites and web apps.', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: <PieChart size={32} />, title: 'Accountant', desc: 'Manage finances using Tally & GST.', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: <Briefcase size={32} />, title: 'Freelancer', desc: 'Work globally on your own terms.', color: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: <PenTool size={32} />, title: 'Graphic Designer', desc: 'Create stunning visual branding.', color: 'text-pink-500', bg: 'bg-pink-50' },
  { icon: <Monitor size={32} />, title: 'Data Entry Operator', desc: 'Manage organizational data effectively.', color: 'text-teal-500', bg: 'bg-teal-50' },
  { icon: <Megaphone size={32} />, title: 'Digital Marketer', desc: 'Grow businesses and brands online.', color: 'text-red-500', bg: 'bg-red-50' },
];

export default function CareerOutcomes() {
  return (
    <section className="py-24 px-6 max-w-[1536px] mx-auto">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-4 border border-brand-100"
        >
          Your Future Career
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 font-heading"
        >
          Build A Career You Are <span className="text-brand-600">Proud Of</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Our practical courses open doors to high-paying jobs and freelance opportunities across multiple industries.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4"
          >
            <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
