import { motion } from 'motion/react';
import { Linkedin, Award, Sparkles } from 'lucide-react';

const mentor = {
  name: "Surya Pratap Singh",
  role: "Founder of Vasudev AI & Lead Instructor",
  image: "https://media.licdn.com/dms/image/v2/D5603AQGx-6ApteXvQA/profile-displayphoto-scale_200_200/B56Zzgiis5HMAc-/0/1773293679145?e=1775692800&v=beta&t=R6UwVYWEfKXTRWKEYZTbrAnp7E9kqCQ55weoZwn0hl4",
  bio: "Pursuing Bachelor's from IIT Jodhpur. Expert in Data Analysis and Web Development. He has successfully delivered over 50+ freelance projects globally, specializing in AI-driven web applications and complex data pipelines. At Bhavna Institute, Surya aims to bridge the gap between academic learning and industry demands, empowering students to secure top-tier tech roles.",
  skills: ["Data Analysis", "Web Development", "Python", "React", "IIT Jodhpur", "AI Integration"],
  linkedin: "https://www.linkedin.com/in/sgsurya/"
};

export default function Faculty() {
  return (
    <section id="faculty" className="py-24 px-6 bg-[#f5f5f4]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-xs font-medium uppercase tracking-widest mb-6 bg-white shadow-sm">
            <Award size={14} className="text-blue-600" />
            Meet Your Mentor
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
            Learn from an <span className="font-serif italic text-blue-600">Industry Expert</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-black/5 flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start"
        >
          {/* Image Section */}
          <div className="shrink-0 relative group">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background circle */}
            <div className="absolute inset-0 bg-blue-50 rounded-full scale-110 -z-0 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg z-20 group-hover:rotate-12 transition-transform duration-500">
              <Sparkles size={24} className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-2 tracking-tight">{mentor.name}</h3>
            <p className="text-blue-600 font-medium text-lg mb-6">
              {mentor.role}
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
              {mentor.bio}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
              {mentor.skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 rounded-xl bg-gray-50 border border-black/5 text-sm font-medium text-gray-700">
                  {skill}
                </span>
              ))}
            </div>
            
            <a 
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-2xl font-medium hover:bg-black/80 transition-all hover:-translate-y-0.5 shadow-lg shadow-black/10"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
