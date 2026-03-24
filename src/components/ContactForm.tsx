import { motion } from 'motion/react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 max-w-[1536px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-4">
            Get in <span className="font-serif italic text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Fill out the form and our career counselor will call you back shortly.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+91 97192 05268"
                className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Course Interested In</label>
              <select className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none">
                <option value="">Select a course</option>
                <option value="ai">AI Tools + Freelancing</option>
                <option value="web">Web Development</option>
                <option value="data">Data Analytics</option>
                <option value="marketing">Digital Marketing</option>
                <option value="tally">Tally + GST</option>
                <option value="design">Graphic Design</option>
              </select>
            </div>
            <button type="button" className="w-full bg-[#0a0a0a] text-white px-8 py-4 rounded-2xl font-medium hover:bg-blue-600 transition-colors">
              Submit Details
            </button>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <div className="premium-card p-10 rounded-[2.5rem] space-y-8">
            <h3 className="text-2xl font-semibold text-[#0a0a0a]">Direct Contact</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Call Us</div>
                <div className="text-lg font-semibold text-[#0a0a0a]">+91 97192 05268</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-[#25D366]">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">WhatsApp</div>
                <div className="text-lg font-semibold text-[#0a0a0a]">+91 97192 05268</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-[#0a0a0a]">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Visit Us</div>
                <div className="text-lg font-medium text-[#0a0a0a] leading-relaxed">
                  Bhavna Institute, Pooth Khas,<br />Rohta Road, Meerut
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
