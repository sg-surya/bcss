import { motion } from 'motion/react';
import { CheckCircle2, Briefcase, IndianRupee, Users, UserCheck, PlayCircle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <CheckCircle2 size={24} className="text-[#0a0a0a]" />,
      title: "100% Practical Training",
      desc: "No boring theory. Learn by doing real-world projects."
    },
    {
      icon: <Briefcase size={24} className="text-blue-600" />,
      title: "Job-Oriented Courses",
      desc: "Curriculum designed strictly according to industry demands."
    },
    {
      icon: <IndianRupee size={24} className="text-[#0a0a0a]" />,
      title: "Affordable Fees",
      desc: "Premium education that doesn't break the bank."
    },
    {
      icon: <Users size={24} className="text-[#0a0a0a]" />,
      title: "Small Batch Size",
      desc: "Limited students per batch for maximum attention."
    },
    {
      icon: <UserCheck size={24} className="text-blue-600" />,
      title: "Personal Guidance",
      desc: "1-on-1 mentorship to solve your doubts instantly."
    },
    {
      icon: <PlayCircle size={24} className="text-[#0a0a0a]" />,
      title: "Free Demo Class",
      desc: "Experience our teaching quality before you enroll."
    }
  ];

  return (
    <section id="why-us" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
          Why Students Choose <span className="font-serif italic text-blue-600">Bhavna Institute?</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          We focus on what matters: your skills and your career.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="premium-card p-8 rounded-3xl flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-black/5">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
