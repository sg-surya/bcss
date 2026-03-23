export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-black/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <a href="#" className="text-xl font-semibold tracking-tight text-[#0a0a0a] block mb-4">
              BHAVNA<span className="text-blue-600">.</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Engineering careers through rigorous, practical, and modern education.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#0a0a0a] mb-6 uppercase tracking-wider">Programs</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Full-Stack Engineering</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Data Science & AI</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#0a0a0a] mb-6 uppercase tracking-wider">Institute</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#0a0a0a] mb-6 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Bhavna Institute. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#0a0a0a] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#0a0a0a] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
