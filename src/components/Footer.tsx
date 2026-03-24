import { Phone, MapPin, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 pt-20 pb-10 px-6 mt-12">
      <div className="max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <a href="#" className="text-xl font-semibold tracking-tight text-[#0a0a0a] block mb-4">
              BHAVNA<span className="text-blue-600">.</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering students in Meerut with practical, job-oriented computer education.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-gray-500 hover:text-pink-600 hover:border-pink-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-gray-500 hover:text-blue-700 hover:border-blue-700 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#0a0a0a] mb-6 uppercase tracking-wider">Courses</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">AI Tools + Freelancing</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Web Development</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Tally + GST</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#0a0a0a] mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">About Us</a></li>
              <li><a href="#why-us" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#0a0a0a] mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-gray-400 shrink-0 mt-0.5" size={16} />
                <span className="text-sm text-gray-500">+91 97192 05268</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-gray-400 shrink-0 mt-0.5" size={16} />
                <span className="text-sm text-gray-500">info@bhavnainstitute.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-gray-400 shrink-0 mt-0.5" size={16} />
                <span className="text-sm text-gray-500 leading-relaxed">
                  Bhavna Institute, Pooth Khas,<br />Rohta Road, Meerut
                </span>
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
