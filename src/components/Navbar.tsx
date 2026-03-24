import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

  // Check if we are on a page with a dark hero section
  const isDarkHero = location.pathname.startsWith('/courses/') && location.pathname !== '/courses';
  
  // Determine if navbar should be white (either scrolled or mobile menu is open)
  const isNavbarWhite = scrolled || mobileMenuOpen;
  
  // Determine text color based on scroll state, menu state, and page
  const textColorClass = !isNavbarWhite && isDarkHero ? 'text-white' : 'text-[#0a0a0a]';
  const navLinkColorClass = !isNavbarWhite && isDarkHero ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-[#0a0a0a]';

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${
        isNavbarWhite ? 'bg-white/90 backdrop-blur-md shadow-sm border border-black/5 py-3' : 'bg-transparent py-4'
      } rounded-full px-6 md:px-8 flex items-center justify-between`}
    >
      <Link to="/" onClick={() => window.scrollTo(0, 0)} className={`text-xl font-semibold tracking-tight transition-colors duration-300 ${textColorClass}`}>
        BHAVNA<span className="text-blue-600">.</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => window.scrollTo(0, 0)}
              className={`relative text-sm font-medium transition-colors duration-300 group ${
                isActive 
                  ? 'text-blue-600' 
                  : navLinkColorClass
              }`}
            >
              {item.name}
              {isActive ? (
                <motion.div 
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ) : (
                <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-blue-600 rounded-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-center" />
              )}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:block">
        <a 
          href="https://wa.me/919719205268?text=Hi,%20I%20am%20interested%20in%20enrolling%20in%20a%20course."
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 inline-block ${
            !isNavbarWhite && isDarkHero 
              ? 'bg-white text-[#0a0a0a] hover:bg-blue-600 hover:text-white' 
              : 'bg-[#0a0a0a] text-white hover:bg-blue-600'
          }`}
        >
          Enroll Now
        </a>
      </div>

      <button className={`md:hidden transition-colors duration-300 ${textColorClass}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-black/5 rounded-2xl shadow-xl flex flex-col gap-2 md:hidden origin-top"
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`p-3 text-sm font-medium rounded-xl transition-colors duration-200 ${
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
              className="w-full bg-[#0a0a0a] text-white px-6 py-3 rounded-xl text-sm font-medium mt-2 text-center block hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
