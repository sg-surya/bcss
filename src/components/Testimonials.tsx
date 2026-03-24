import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The AI Tools & Freelancing course completely changed my career trajectory. I am now taking international freelance projects and earning in dollars. The 1-on-1 mentorship is simply unmatched in Meerut.",
      name: "Priya Singh",
      course: "AI Tools + Freelancing",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote: "Bhavna Institute provided me with the exact practical skills I needed. The Tally + GST course was so detailed, I started working immediately after completion.",
      name: "Aman Sharma",
      course: "Tally + GST",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote: "The Web Development course is amazing. The mentors give personal attention and the small batch size really helps in clearing doubts quickly.",
      name: "Neha Gupta",
      course: "Web Development",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote: "Digital Marketing practicals were spot on. We ran real ad campaigns with actual budgets. It's not just theory, it's 100% practical learning.",
      name: "Rahul Verma",
      course: "Digital Marketing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote: "Graphic Design classes are very interactive. I learned Photoshop, Illustrator, and Premiere Pro. Now I'm working as a full-time designer.",
      name: "Sneha Desai",
      course: "Graphic Design",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote: "The Data Analytics course gave me the confidence to handle large datasets. The Python and SQL modules were taught exceptionally well.",
      name: "Vikram Singh",
      course: "Data Analytics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    }
  ];

  return (
    <section className="py-24 px-6 max-w-[1536px] mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
          What Our <span className="font-serif italic text-blue-600">Students Say</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Real stories from students who transformed their careers with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col relative group"
          >
            <Quote className="absolute top-8 right-8 w-10 h-10 text-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              "{t.quote}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-black/5">
              <img 
                src={t.avatar} 
                alt={t.name} 
                className="w-12 h-12 rounded-full object-cover" 
                referrerPolicy="no-referrer" 
              />
              <div>
                <div className="font-semibold text-[#0a0a0a]">{t.name}</div>
                <div className="text-sm text-blue-600 font-medium">{t.course}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
