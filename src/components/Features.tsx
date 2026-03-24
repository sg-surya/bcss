import { motion } from 'motion/react';
import { CheckCircle2, Briefcase, IndianRupee, Users, UserCheck, PlayCircle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <CheckCircle2 size={32} className="text-white" />,
      title: "100% Practical Training",
      desc: "No boring theory. Learn by doing real-world projects and building a strong portfolio that gets you hired.",
      className: "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 bg-[#0a0a0a] text-white shadow-2xl shadow-black/10",
      iconClass: "bg-white/10 border-white/10",
      titleClass: "text-white text-2xl md:text-3xl mt-auto pt-12",
      descClass: "text-gray-400 text-lg"
    },
    {
      icon: <Briefcase size={24} className="text-blue-600" />,
      title: "Job-Oriented Courses",
      desc: "Curriculum designed strictly according to industry demands.",
      className: "md:col-span-1 lg:col-span-2 premium-card bg-gradient-to-br from-blue-50/50 to-transparent",
      iconClass: "bg-white border-black/5",
      titleClass: "text-[#0a0a0a] text-xl",
      descClass: "text-gray-500"
    },
    {
      icon: <IndianRupee size={24} className="text-[#0a0a0a]" />,
      title: "Affordable Fees",
      desc: "Premium education that doesn't break the bank.",
      className: "md:col-span-1 lg:col-span-1 premium-card",
      iconClass: "bg-gray-50 border-black/5",
      titleClass: "text-[#0a0a0a] text-lg",
      descClass: "text-gray-500 text-sm"
    },
    {
      icon: <Users size={24} className="text-[#0a0a0a]" />,
      title: "Small Batch Size",
      desc: "Limited students per batch for maximum attention.",
      className: "md:col-span-1 lg:col-span-1 premium-card",
      iconClass: "bg-gray-50 border-black/5",
      titleClass: "text-[#0a0a0a] text-lg",
      descClass: "text-gray-500 text-sm"
    },
    {
      icon: <UserCheck size={24} className="text-blue-600" />,
      title: "Personal Guidance",
      desc: "1-on-1 mentorship to solve your doubts instantly.",
      className: "md:col-span-2 lg:col-span-2 premium-card",
      iconClass: "bg-gray-50 border-black/5",
      titleClass: "text-[#0a0a0a] text-xl",
      descClass: "text-gray-500"
    },
    {
      icon: <PlayCircle size={24} className="text-[#0a0a0a]" />,
      title: "Free Demo Class",
      desc: "Experience our teaching quality before you enroll.",
      className: "md:col-span-3 lg:col-span-2 premium-card bg-gray-50/50",
      iconClass: "bg-white border-black/5",
      titleClass: "text-[#0a0a0a] text-xl",
      descClass: "text-gray-500"
    }
  ];

  return (
    <section id="why-us" className="py-24 px-6 max-w-[1536px] mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
          Why Students Choose <span className="font-serif italic text-blue-600">Bhavna Institute?</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          We focus on what matters: your skills and your career.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className={`p-8 rounded-[2rem] flex flex-col items-start border border-black/5 ${feature.className}`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 border ${feature.iconClass}`}>
              {feature.icon}
            </div>
            <h3 className={`font-semibold mb-3 tracking-tight ${feature.titleClass}`}>{feature.title}</h3>
            <p className={`leading-relaxed ${feature.descClass}`}>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
