import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16 lg:py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-brand-600/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1536px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="space-y-6 lg:pr-8">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
                B
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-heading">
                BHAVNA<span className="text-brand-500">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Transforming careers with job-oriented computer courses, hands-on training, and expert mentorship since 2010.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-all duration-300 text-gray-400 hover:-translate-y-1 shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-heading tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', path: '/' }, 
                { name: 'Courses', path: '/courses' }, 
                { name: 'About Institute', path: '/about' }, 
                { name: 'Student Alumni', path: '/alumni' }, 
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} onClick={() => window.scrollTo(0,0)} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-500 duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-heading tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              Top Courses
            </h3>
            <ul className="space-y-3.5">
              {['Advanced Excel', 'Tally Prime + GST', 'Web Development', 'Digital Marketing', 'AI Tools + Freelancing'].map((course) => (
                <li key={course}>
                  <Link to="/courses" onClick={() => window.scrollTo(0,0)} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-500 duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{course}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-heading tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              Contact Us
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 text-sm text-gray-400 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-colors">
                  <MapPin size={16} />
                </div>
                <span className="mt-1">Bhavna Institute, Main Market, Meerut, Uttar Pradesh, India</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-colors">
                  <Phone size={16} />
                </div>
                <a href="tel:+919719205268" className="mt-1 hover:text-white transition-colors">+91 9719205268</a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-colors">
                  <Mail size={16} />
                </div>
                <a href="mailto:info@bhavnainstitute.com" className="mt-1 hover:text-white transition-colors">info@bhavnainstitute.com</a>
              </li>
            </ul>
            
            {/* Massive WhatsApp CTA for Footer */}
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919719205268?text=Hi,%20I%20have%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#25D366] to-[#1da851] text-white py-3.5 px-4 rounded-xl font-bold shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 hover:shadow-[#25D366]/40 border border-[#25D366]/50"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </motion.a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Bhavna Institute. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
