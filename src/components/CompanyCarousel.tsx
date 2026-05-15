import { motion } from 'motion/react';

const companies = [
  { name: "TATA", logo: "https://cdn.worldvectorlogo.com/logos/tata-1.svg" },
  { name: "Hero", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hero_MotoCorp.svg/1280px-Hero_MotoCorp.svg.png" }
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
      
      <div className="relative flex justify-center">
        <div className="flex gap-12 items-center py-4">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
              <div className="w-24 h-14 flex items-center justify-center p-1">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className={`w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ${company.name === 'Tata Motors' ? 'scale-125' : ''}`}
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
