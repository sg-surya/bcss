import { motion } from 'motion/react';
import { Linkedin, Award } from 'lucide-react';

const mentor = {
  name: "Surya Pratap Singh",
  role: "Lead Instructor & Tech Expert",
  image: "https://media.licdn.com/dms/image/v2/D5603AQGx-6ApteXvQA/profile-displayphoto-scale_200_200/B56Zzgiis5HMAc-/0/1773293679145?e=1775692800&v=beta&t=R6UwVYWEfKXTRWKEYZTbrAnp7E9kqCQ55weoZwn0hl4",
  bio: "Pursuing Bachelor's from IIT Jodhpur. Expert in Data Analysis and Web Development. Passionate about teaching and helping students build real-world skills to land their dream jobs.",
  skills: ["Data Analysis", "Web Development", "Python", "React", "IIT Jodhpur"],
  linkedin: "https://www.linkedin.com/in/sgsurya/"
};

export default function Faculty() {
  return (
    <section id="faculty" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-xs font-semibold uppercase tracking-widest mb-6 text-blue-600">
              <Award size={14} />
              Lead Mentor
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0a0a0a]">
              Learn from an <span className="font-serif italic text-blue-600">Industry Expert</span>
            </h2>
          </div>
          <p className="text-lg text-gray-500 max-w-md text-balance">
            Get mentored by a professional who brings real-world knowledge and top-tier academic experience to the classroom.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative group rounded-[2.5rem] p-1 bg-gradient-to-b from-blue-500 to-blue-600 shadow-2xl shadow-blue-600/20"
        >
          <div className="h-full rounded-[2.35rem] overflow-hidden flex flex-col md:flex-row bg-white">
            {/* Image Container */}
            <div className="relative w-full md:w-2/5 lg:w-1/3 bg-blue-50/50 p-8 flex items-center justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent"></div>
              <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
                <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col flex-grow justify-center w-full md:w-3/5 lg:w-2/3">
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-2">{mentor.name}</h3>
                <p className="text-blue-600 font-medium text-lg">{mentor.role}</p>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {mentor.bio}
              </p>
              
              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {mentor.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-sm font-medium px-4 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                <a 
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-full font-medium hover:bg-[#006097] transition-all duration-300 shadow-lg shadow-[#0077b5]/20 hover:shadow-[#0077b5]/40 hover:-translate-y-0.5"
                >
                  <Linkedin size={18} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
