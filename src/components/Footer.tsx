import { Phone, MapPin, Mail, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 pt-20 pb-10 px-6 mt-12">
      <div className="max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-semibold tracking-tight text-[#0a0a0a] block mb-4">
              BHAVNA<span className="text-blue-600">.</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering students in Meerut with practical, job-oriented computer education.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-gray-500 hover:text-pink-600 hover:border-pink-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/bhavna-institute/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-gray-500 hover:text-blue-700 hover:border-blue-700 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#0a0a0a] mb-6 uppercase tracking-wider">Courses</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/courses/ai-tools" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">AI Tools + Prompt Engineering</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/html-css" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Web Development</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/data-analytics" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Data Analytics</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/digital-marketing" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Digital Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/tally-prime" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Tally + GST</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#0a0a0a] mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Our Faculty</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Student Reviews</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/placement" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Placements</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="group flex items-center text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <ArrowRight size={14} className="opacity-0 w-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:translate-x-0 group-hover:mr-2" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#0a0a0a] mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-gray-400 shrink-0 mt-0.5" size={16} />
                <a href="tel:+919719205268" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">+91 97192 05268</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-gray-400 shrink-0 mt-0.5" size={16} />
                <a href="mailto:bhavnainstitue@gmail.com" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">bhavnainstitue@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-gray-400 shrink-0 mt-0.5" size={16} />
                <a href="https://maps.app.goo.gl/if7jNUcfgLrePCx39" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-blue-600 transition-colors leading-relaxed">
                  Bhavna Institute, Pooth Khas,<br />Rohta Road, Meerut
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Bhavna Institute. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Made with <span className="text-red-500">♥</span> in Meerut | Made by <a href="https://vasudev.online" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors font-medium">Vasudev AI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
