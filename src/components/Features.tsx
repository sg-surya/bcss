import { motion } from 'motion/react';
import { Code2, Briefcase, Globe2, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Code2 size={24} className="text-[#0a0a0a]" />,
      title: "Modern Tech Stack",
      desc: "Learn React, Node.js, Python, and AI integration. We teach the tools that top tech companies actually use.",
      colSpan: "md:col-span-2"
    },
    {
      icon: <Globe2 size={24} className="text-blue-600" />,
      title: "Bilingual Learning",
      desc: "Master complex concepts in Hindi & English.",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Briefcase size={24} className="text-[#0a0a0a]" />,
      title: "Career Support",
      desc: "Resume building, mock interviews, and direct placement assistance.",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Award size={24} className="text-[#0a0a0a]" />,
      title: "Recognized Certification",
      desc: "Earn certificates that hold weight in the industry. Validate your skills to employers globally.",
      colSpan: "md:col-span-2"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
          The Bhavna <span className="font-serif italic text-blue-600">Standard.</span>
        </h2>
        <p className="text-gray-500 max-w-xl text-lg">
          We don't just teach coding. We engineer careers through rigorous, practical, and modern education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className={`premium-card p-8 rounded-3xl flex flex-col ${feature.colSpan}`}
          >
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-black/5">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed mt-auto">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
