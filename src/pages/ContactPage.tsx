import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#f5f5f4]">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-xs font-medium uppercase tracking-widest mb-8"
        >
          Contact Us
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-medium tracking-tighter text-[#0a0a0a] mb-6"
        >
          We're Here to <br />
          <span className="font-serif italic text-blue-600">Help You Succeed.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          Whether you have a question about our courses, need career counseling, or want to visit our campus, our team is ready to assist you.
        </motion.p>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="premium-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium mb-1">Call Us</div>
                    <div className="text-lg font-semibold text-[#0a0a0a]">+91 97192 05268</div>
                    <div className="text-sm text-gray-500 mt-1">Mon-Sat, 9am to 6pm</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-[#25D366]">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium mb-1">WhatsApp</div>
                    <div className="text-lg font-semibold text-[#0a0a0a]">+91 97192 05268</div>
                    <div className="text-sm text-gray-500 mt-1">Quick replies within 1 hour</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-[#0a0a0a]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium mb-1">Visit Us</div>
                    <div className="text-lg font-medium text-[#0a0a0a] leading-relaxed">
                      Bhavna Institute, Pooth Khas,<br />Rohta Road, Meerut, UP
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card p-8 rounded-3xl bg-[#0a0a0a] text-white">
              <h3 className="text-xl font-semibold mb-4">Need Career Guidance?</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Not sure which course is right for you? Schedule a free counseling session with our experts to discuss your career goals.
              </p>
              <a 
                href="https://wa.me/919719205268?text=Hi,%20I%20would%20like%20to%20schedule%20a%20free%20career%20counseling%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-white text-[#0a0a0a] px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Book Free Counseling
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="premium-card p-8 md:p-12 rounded-[2.5rem] h-full">
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-2">Send us a Message</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0a0a0a] mb-2">First Name</label>
                    <input 
                      type="text" 
                      placeholder="John"
                      className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
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
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your goals or any specific questions you have..."
                    className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"
                  ></textarea>
                </div>

                <button type="button" className="w-full bg-blue-600 text-white px-8 py-4 rounded-2xl font-medium hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-4 rounded-[2.5rem] overflow-hidden h-[400px]"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.123456789!2d77.654321!3d28.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU5JzE1LjYiTiA3N8KwMzknMTUuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '2rem' }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
}
