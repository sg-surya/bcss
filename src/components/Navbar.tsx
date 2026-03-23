import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border border-black/5 py-3' : 'bg-transparent py-4'
      } rounded-full px-6 md:px-8 flex items-center justify-between`}
    >
      <a href="#" className="text-xl font-semibold tracking-tight text-[#0a0a0a]">
        BHAVNA<span className="text-blue-600">.</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {['Home', 'Courses', 'About', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-500 hover:text-[#0a0a0a] transition-colors">
            {item}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <button className="bg-[#0a0a0a] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
          Enroll Now
        </button>
      </div>

      <button className="md:hidden text-[#0a0a0a]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-black/5 rounded-2xl shadow-xl flex flex-col gap-2 md:hidden">
          {['Home', 'Courses', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="p-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button className="w-full bg-[#0a0a0a] text-white px-6 py-3 rounded-xl text-sm font-medium mt-2">
            Enroll Now
          </button>
        </div>
      )}
    </motion.nav>
  );
}
