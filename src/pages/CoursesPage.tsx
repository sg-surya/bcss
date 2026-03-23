import { motion } from 'motion/react';
import { Clock, IndianRupee, BookOpen, Target, ArrowRight } from 'lucide-react';

export default function CoursesPage() {
  const courseCategories = [
    {
      title: "Beginner Courses",
      description: "Start your journey with foundational computer skills.",
      courses: [
        {
          id: 1,
          title: "Basic Computer Course",
          duration: "3 Months",
          fees: "₹2750",
          description: "Ye course beginners ke liye hai jisme students computer ki basic knowledge se start karte hain.",
          learn: ["Computer fundamentals", "MS Word, Excel, PowerPoint", "Internet & Email usage", "Typing practice"],
          outcome: "Basic computer operator jobs ke liye ready"
        },
        {
          id: 4,
          title: "DTP (Desktop Publishing)",
          duration: "3 Months",
          fees: "₹6000",
          description: "Designing aur printing related kaam ke liye best course.",
          learn: ["Photoshop basics", "CorelDRAW", "Poster, banner, visiting card design", "Print setup"],
          outcome: "Graphic / Printing shop jobs"
        }
      ]
    },
    {
      title: "Job-Oriented Courses",
      description: "Practical skills designed to get you hired quickly.",
      courses: [
        {
          id: 2,
          title: "Advanced Excel Course",
          duration: "3 Months",
          fees: "₹5750",
          description: "Data handling aur office job ke liye best course.",
          learn: ["Advanced formulas & functions", "Pivot tables & charts", "Data analysis & dashboards", "Automation basics"],
          outcome: "Office jobs / Data operator / MIS roles"
        },
        {
          id: 3,
          title: "Tally Prime with GST",
          duration: "3–6 Months",
          fees: "₹15000",
          description: "Accounting aur GST ka practical course jo business aur job dono ke liye useful hai.",
          learn: ["Tally Prime software", "GST billing & returns", "Financial reports", "Inventory management"],
          outcome: "Accountant / Billing executive jobs"
        },
        {
          id: 8,
          title: "Digital Marketing Course",
          duration: "3 Months",
          fees: "₹6000 – ₹10000",
          description: "Online marketing aur business growth ke liye powerful skill.",
          learn: ["SEO basics", "Social media marketing", "Ads (Facebook/Google)", "Freelancing"],
          outcome: "Digital marketer / Freelancer"
        },
        {
          id: 9,
          title: "Video Editing Course",
          duration: "3 Months",
          fees: "₹5000 – ₹8000",
          description: "YouTube aur social media content editing seekho.",
          learn: ["CapCut / Premiere Pro", "Reels & Shorts editing", "Effects & transitions"],
          outcome: "Content creator / Editor"
        },
        {
          id: 10,
          title: "Graphic Design Course",
          duration: "3 Months",
          fees: "₹5000 – ₹9000",
          description: "Creative designing aur branding skills develop karo.",
          learn: ["Photoshop", "Canva", "Logo & poster design"],
          outcome: "Designer / Freelancer"
        }
      ]
    },
    {
      title: "Professional Courses",
      description: "Advanced skills for high-paying careers and freelancing.",
      courses: [
        {
          id: 5,
          title: "HTML + CSS (Web Design)",
          duration: "3 Months",
          fees: "₹5000",
          description: "Website designing ka foundation course.",
          learn: ["HTML structure", "CSS styling", "Responsive design", "Live website creation"],
          outcome: "Web designer / Freelancing start"
        },
        {
          id: 6,
          title: "WordPress Development",
          duration: "2–3 Months",
          fees: "₹5000",
          description: "Without coding website banana seekho.",
          learn: ["WordPress setup", "Themes & plugins", "Business website creation", "SEO basics"],
          outcome: "Freelancing / Website business"
        },
        {
          id: 7,
          title: "AI Tools + Freelancing Course",
          duration: "3 Months",
          fees: "₹7999",
          description: "Latest AI tools use karke online earning start karo.",
          learn: ["ChatGPT mastery", "Canva AI / Midjourney", "Content creation", "Freelancing setup"],
          outcome: "Online earning / AI expert"
        },
        {
          id: 11,
          title: "Python Programming Course",
          duration: "3 Months",
          fees: "₹6000 – ₹12000",
          description: "Programming aur automation ka powerful course.",
          learn: ["Python basics", "Automation scripts", "Mini projects"],
          outcome: "Developer / Automation expert"
        },
        {
          id: 12,
          title: "Data Analytics Course",
          duration: "3 Months",
          fees: "₹8000 – ₹15000",
          description: "Data analysis aur dashboard creation ka course.",
          learn: ["Excel advanced", "Power BI", "Data visualization"],
          outcome: "Data analyst / MIS job"
        }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-medium tracking-tighter text-[#0a0a0a] mb-6"
        >
          Our <span className="font-serif italic text-blue-600">Courses</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl"
        >
          Detailed curriculum designed to make you industry-ready. Choose the right path for your career.
        </motion.p>
      </div>

      <div className="space-y-24">
        {courseCategories.map((category, catIdx) => (
          <div key={catIdx}>
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-[#0a0a0a] mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
                  {catIdx + 1}
                </span>
                {category.title}
              </h2>
              <p className="text-gray-500 text-lg ml-11">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.courses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">{course.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
                      <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-black/5">
                        <Clock size={16} className="text-blue-600" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-black/5">
                        <IndianRupee size={16} className="text-green-600" />
                        <span>{course.fees}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mb-8 flex-grow">
                    <h4 className="font-semibold text-[#0a0a0a] mb-4 flex items-center gap-2">
                      <BookOpen size={18} className="text-blue-600" />
                      What You Will Learn:
                    </h4>
                    <ul className="space-y-3">
                      {course.learn.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-black/5 mt-auto">
                    <div className="flex items-start gap-3">
                      <Target size={20} className="text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Outcome</div>
                        <div className="text-[#0a0a0a] font-medium">{course.outcome}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
