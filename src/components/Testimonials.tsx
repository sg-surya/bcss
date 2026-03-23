import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The AI Tools & Freelancing course completely changed my career trajectory. I am now taking international freelance projects and earning in dollars. The 1-on-1 mentorship is simply unmatched in Meerut.",
      name: "Priya Singh",
      course: "AI Tools + Freelancing",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      className: "md:col-span-2 bg-[#0a0a0a] text-white",
      quoteClass: "text-2xl md:text-3xl text-white",
      nameClass: "text-white",
      roleClass: "text-gray-400",
      stars: 5
    },
    {
      quote: "Bhavna Institute provided me with the exact practical skills I needed. The Tally + GST course was so detailed, I started working immediately.",
      name: "Aman Sharma",
      course: "Tally + GST",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      className: "md:col-span-1 bg-white border border-black/5",
      quoteClass: "text-lg text-[#0a0a0a]",
      nameClass: "text-[#0a0a0a]",
      roleClass: "text-gray-500",
      stars: 5
    },
    {
      quote: "The Web Development course is amazing. The mentors give personal attention and the small batch size really helps in clearing doubts quickly.",
      name: "Neha Gupta",
      course: "Web Development",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      className: "md:col-span-1 bg-white border border-black/5",
      quoteClass: "text-lg text-[#0a0a0a]",
      nameClass: "text-[#0a0a0a]",
      roleClass: "text-gray-500",
      stars: 5
    },
    {
      quote: "Digital Marketing practicals were spot on. We ran real ad campaigns with actual budgets. It's not just theory, it's 100% practical learning.",
      name: "Rahul Verma",
      course: "Digital Marketing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      className: "md:col-span-2 bg-gradient-to-br from-blue-50 to-white border border-blue-100",
      quoteClass: "text-xl md:text-2xl text-[#0a0a0a]",
      nameClass: "text-[#0a0a0a]",
      roleClass: "text-blue-600",
      stars: 5
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
          What Our <span className="font-serif italic text-blue-600">Students Say</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Real stories from students who transformed their careers with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className={`p-8 md:p-10 rounded-[2rem] flex flex-col justify-between shadow-sm ${t.className}`}
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className={`leading-relaxed mb-10 font-medium tracking-tight ${t.quoteClass}`}>
                "{t.quote}"
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-auto">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />
              <div>
                <div className={`font-semibold ${t.nameClass}`}>{t.name}</div>
                <div className={`text-sm ${t.roleClass}`}>{t.course}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
