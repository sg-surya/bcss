import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (item === 'Courses') {
      navigate('/courses');
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(item.toLowerCase());
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      if (item === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(item.toLowerCase());
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border border-black/5 py-3' : 'bg-transparent py-4'
      } rounded-full px-6 md:px-8 flex items-center justify-between`}
    >
      <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-xl font-semibold tracking-tight text-[#0a0a0a]">
        BHAVNA<span className="text-blue-600">.</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {['Home', 'Courses', 'Faculty', 'Alumni', 'About', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            onClick={(e) => handleNavClick(e, item)}
            className={`text-sm font-medium transition-colors ${
              (location.pathname === '/courses' && item === 'Courses') 
                ? 'text-blue-600' 
                : 'text-gray-500 hover:text-[#0a0a0a]'
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <a 
          href="https://wa.me/919719205268?text=Hi,%20I%20am%20interested%20in%20enrolling%20in%20a%20course."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0a0a0a] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors inline-block"
        >
          Enroll Now
        </a>
      </div>

      <button className="md:hidden text-[#0a0a0a]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-black/5 rounded-2xl shadow-xl flex flex-col gap-2 md:hidden">
          {['Home', 'Courses', 'Faculty', 'Alumni', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleNavClick(e, item)}
              className={`p-3 text-sm font-medium rounded-xl ${
                (location.pathname === '/courses' && item === 'Courses')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item}
            </a>
          ))}
          <a 
            href="https://wa.me/919719205268?text=Hi,%20I%20am%20interested%20in%20enrolling%20in%20a%20course."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0a0a0a] text-white px-6 py-3 rounded-xl text-sm font-medium mt-2 text-center block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Enroll Now
          </a>
        </div>
      )}
    </motion.nav>
  );
}
