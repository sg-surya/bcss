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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-6 flex items-center justify-between">
            
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 z-50 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:shadow-brand-500/40 transition-all">
              B
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 font-heading">
              BHAVNA<span className="text-brand-600">.</span>
            </span>
          </Link>

          {/* Desktop Nav - Animated Hover Effects */}
          <nav className="hidden md:flex items-center gap-2">
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
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+919719205268" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              <PhoneCall size={16} className="text-gray-400" />
              <span>+91 9719205268</span>
            </a>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919719205268?text=Hi,%20I%20am%20interested%20in%20enrolling%20in%20a%20course."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-600 to-brand-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-brand-500/30 transition-all"
            >
              Enroll Now
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Responsive Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl overflow-hidden md:hidden"
            >
              <div className="p-6 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
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
                      className={`p-4 text-base font-semibold rounded-xl transition-colors duration-200 ${
                        isActive
                          ? 'bg-brand-50 text-brand-700'
                          : 'text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                
                <div className="h-px bg-gray-100 my-4"></div>
                
                <a href="tel:+919719205268" className="flex items-center justify-center gap-3 p-4 text-gray-800 font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <PhoneCall size={18} className="text-gray-500" />
                  Call Us: +91 9719205268
                </a>
                
                <a 
                  href="https://wa.me/919719205268?text=Hi,%20I%20am%20interested%20in%20enrolling%20in%20a%20course."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-brand-600 to-brand-500 text-white p-4 rounded-xl text-center font-bold shadow-md mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
