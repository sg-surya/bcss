import { motion } from 'motion/react';

const companies = [
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/HCL_Technologies_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_2012.svg" },
  { name: "Tech Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Tech_Mahindra_logo.svg" }
];

export default function CompanyCarousel() {
  return (
    <div className="bg-[#fafafa] py-14 border-y border-gray-100 relative overflow-hidden">
      {/* Subtle background glow to match theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-[1536px] mx-auto px-6 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-xs font-bold uppercase tracking-widest mb-4 text-blue-700">
          Our Placements
        </div>
        <p className="text-gray-500 text-sm font-medium">
          Top companies where our students are working
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex gap-8 items-center whitespace-nowrap py-4">
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="flex items-center justify-center bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
              <div className="w-16 h-10 flex items-center justify-center p-1">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target.parentElement as HTMLDivElement).innerHTML = `<span class="text-sm font-bold text-blue-600">${company.name}</span>`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
