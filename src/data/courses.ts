export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  pricing: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  studentCount: string;
  popular?: boolean;
}

export const courses: Course[] = [
  {
    id: "basic-computer",
    title: "Basic Computer",
    description: "Master fundamental computer skills, MS Office, and internet usage for daily tasks.",
    thumbnail: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
    duration: "3 Months",
    pricing: "₹3,500",
    difficulty: "Beginner",
    studentCount: "1,200+",
  },
  {
    id: "advanced-excel",
    title: "Advanced Excel",
    description: "Learn complex formulas, data analysis, VLOOKUP, and pivot tables for corporate jobs.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    duration: "2 Months",
    pricing: "₹4,000",
    difficulty: "Intermediate",
    studentCount: "850+",
    popular: true,
  },
  {
    id: "tally-gst",
    title: "Tally Prime + GST",
    description: "Complete accounting course covering inventory, payroll, taxation, and GST filing.",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
    duration: "3 Months",
    pricing: "₹6,000",
    difficulty: "Intermediate",
    studentCount: "1,500+",
    popular: true,
  },
  {
    id: "dtp",
    title: "DTP (Desktop Publishing)",
    description: "Professional graphic designing using Adobe Photoshop, CorelDRAW, and PageMaker.",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
    duration: "3 Months",
    pricing: "₹5,000",
    difficulty: "Beginner",
    studentCount: "600+",
  },
  {
    id: "html-css",
    title: "HTML + CSS",
    description: "Build beautiful, responsive web pages from scratch using modern web standards.",
    thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=600",
    duration: "2 Months",
    pricing: "₹4,500",
    difficulty: "Beginner",
    studentCount: "950+",
  },
  {
    id: "wordpress",
    title: "WordPress",
    description: "Create professional websites, blogs, and e-commerce stores without writing code.",
    thumbnail: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=600",
    duration: "2 Months",
    pricing: "₹5,000",
    difficulty: "Beginner",
    studentCount: "700+",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master SEO, social media marketing, Google Ads, and analytics to drive traffic.",
    thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=600",
    duration: "4 Months",
    pricing: "₹12,000",
    difficulty: "Intermediate",
    studentCount: "1,100+",
    popular: true,
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Professional video editing and motion graphics using Premiere Pro and After Effects.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600",
    duration: "3 Months",
    pricing: "₹8,000",
    difficulty: "Intermediate",
    studentCount: "500+",
  },
  {
    id: "ai-freelancing",
    title: "AI Tools + Freelancing",
    description: "Leverage ChatGPT, Midjourney, and start earning on global platforms like Upwork/Fiverr.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
    duration: "2 Months",
    pricing: "₹6,500",
    difficulty: "Beginner",
    studentCount: "2,000+",
    popular: true,
  }
];
