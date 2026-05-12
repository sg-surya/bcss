import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Sticky navbar with scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
    <>
      <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6 md:px-8">
        <div 
          className={`pointer-events-auto w-full max-w-[1536px] flex items-center justify-between transition-all duration-300 rounded-2xl md:rounded-full relative ${
            scrolled 
              ? 'bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shadow-brand-500/10 py-3 px-5 md:px-8' 
              : 'bg-white/40 backdrop-blur-lg border border-white/50 shadow-sm py-4 px-5 md:px-8'
          }`}
        >
            
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 sm:gap-3 z-50 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md group-hover:shadow-brand-500/40 transition-all">
              B
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 font-heading">
              BHAVNA<span className="text-brand-600">.</span>
            </span>
          </Link>

          {/* Desktop Nav - Animated Hover Effects */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  onClick={() => window.scrollTo(0, 0)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-brand-700 bg-brand-50' 
                      : 'text-gray-600 hover:text-brand-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions & Premium CTA Button */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 shrink-0">
            <a href="tel:+919719205268" className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              <PhoneCall size={16} className="text-gray-400" />
              <span>+91 9719205268</span>
            </a>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919719205268?text=Hi,%20I%20am%20interested%20in%20enrolling%20in%20a%20course."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-600 to-brand-500 text-white px-5 lg:px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:shadow-brand-500/30 transition-all"
            >
              Enroll Now
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-gray-900 bg-white/50 backdrop-blur rounded-lg border border-gray-200/50 hover:bg-white transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Responsive Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-white/95 backdrop-blur-xl border border-gray-200/60 shadow-2xl rounded-2xl overflow-hidden md:hidden origin-top"
              >
                <div className="p-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        onClick={() => {
                          setMobileMenuOpen(false);
                          window.scrollTo(0, 0);
                        }}
                        className={`p-3.5 text-base font-semibold rounded-xl transition-colors duration-200 ${
                          isActive
                            ? 'bg-brand-50 text-brand-700'
                            : 'text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  
                  <div className="h-px bg-gray-100 my-3"></div>
                  
                  <a href="tel:+919719205268" className="flex items-center justify-center gap-3 p-3.5 text-gray-800 font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <PhoneCall size={18} className="text-brand-500" />
                    Call: +91 9719205268
                  </a>
                  
                  <a 
                    href="https://wa.me/919719205268?text=Hi,%20I%20am%20interested%20in%20enrolling%20in%20a%20course."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-brand-600 to-brand-500 text-white p-3.5 rounded-xl text-center font-bold shadow-md mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Enroll Now
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
