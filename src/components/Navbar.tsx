import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

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
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            onClick={() => window.scrollTo(0, 0)}
            className={`text-sm font-medium transition-colors ${
              location.pathname === item.path 
                ? 'text-blue-600' 
                : 'text-gray-500 hover:text-[#0a0a0a]'
            }`}
          >
            {item.name}
          </Link>
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
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className={`p-3 text-sm font-medium rounded-xl ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
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
