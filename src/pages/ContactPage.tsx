import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    course: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coursesList = [
    { value: "ai-tools", label: "AI Tools + Prompt Engineering" },
    { value: "html-css", label: "Web Development" },
    { value: "data-analytics", label: "Data Analytics" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "tally-prime", label: "Tally Prime with GST" },
    { value: "graphic-design", label: "Graphic Design" },
    { value: "other", label: "Other / Not Sure" }
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (window as any).gtag?.('event', 'lead_submit', { 
        event_category: 'conversion', 
        event_label: 'ContactForm Page',
        value: formData.course
      });
    }, 1000);
  };

  const getWhatsAppLink = () => {
    const selectedCourseLabel = coursesList.find(c => c.value === formData.course)?.label || formData.course;
    const text = `Hi, my name is ${formData.firstName} ${formData.lastName}. I am interested in the "${selectedCourseLabel}" course. My phone number is ${formData.phone}.${formData.message ? ` Message: ${formData.message}` : ''}`;
    return `https://wa.me/919719205268?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-24 min-h-screen bg-[#f5f5f4]">
      <SEO title="Contact Us" description="Get in touch with Bhavna Institute. Visit us or call for free demo classes." canonical="/contact" />
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 max-w-[1536px] mx-auto text-center">
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
      <section className="py-12 px-6 max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium mb-1">Call Us</div>
                    <a href="tel:+919719205268" className="text-lg font-semibold text-[#0a0a0a] hover:text-blue-600 transition-colors">+91 97192 05268</a>
                    <div className="text-sm text-gray-500 mt-1">Mon-Sat, 9am to 6pm</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-[#25D366]">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium mb-1">WhatsApp</div>
                    <a href="https://wa.me/919719205268" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#0a0a0a] hover:text-green-600 transition-colors">+91 97192 05268</a>
                    <div className="text-sm text-gray-500 mt-1">Quick replies within 1 hour</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-[#0a0a0a]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium mb-1">Visit Us</div>
                    <a href="https://maps.app.goo.gl/if7jNUcfgLrePCx39" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-[#0a0a0a] hover:text-blue-600 transition-colors leading-relaxed">
                      Bhavna Institute, Pooth Khas,<br />Rohta Road, Meerut, UP
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] text-white p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Need Career Guidance?</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Not sure which course is right for you? Schedule a free counseling session with our experts to discuss your career goals.
              </p>
              <a 
                href="https://wa.me/919719205268?text=Hi,%20I%20would%20like%20to%20schedule%20a%20free%20career%20counseling%20session."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => (window as any).gtag?.('event', 'whatsapp_click', { event_category: 'engagement', event_label: 'WhatsApp Contact Counseling' })}
                className="inline-flex items-center justify-center w-full bg-white text-[#0a0a0a] px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
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
            <div className="bg-white border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-8 md:p-12 rounded-2xl h-full">
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-2">Send us a Message</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 text-center space-y-6 h-full flex flex-col justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0a0a0a] mb-2">Message Sent!</h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Thank you, <strong className="text-[#0a0a0a]">{formData.firstName}</strong>. Your inquiry for <strong className="text-[#0a0a0a]">{coursesList.find(c => c.value === formData.course)?.label}</strong> has been received.
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        Our career counselor will reach out to you at <span className="font-semibold">{formData.phone}</span>.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/5 flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-2xl text-sm font-semibold hover:bg-[#20ba56] transition-colors shadow-sm w-full sm:w-auto"
                      >
                        <MessageCircle size={18} />
                        Fast-Track via WhatsApp
                      </a>
                      <button
                        onClick={() => {
                          setFormData({ firstName: '', lastName: '', phone: '', course: '', message: '' });
                          setIsSuccess(false);
                        }}
                        className="text-sm font-medium text-gray-500 hover:text-[#0a0a0a] transition-colors cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#0a0a0a] mb-2">First Name</label>
                        <input 
                          type="text" 
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className={`w-full px-5 py-4 rounded-2xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.firstName 
                              ? 'border-red-500/50 focus:ring-red-500/10 focus:border-red-500' 
                              : 'border-black/10 focus:ring-blue-600/20 focus:border-blue-600'
                          }`}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Last Name</label>
                        <input 
                          type="text" 
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-5 py-4 rounded-2xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone 
                            ? 'border-red-500/50 focus:ring-red-500/10 focus:border-red-500' 
                            : 'border-black/10 focus:ring-blue-600/20 focus:border-blue-600'
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Course Interested In</label>
                      <div className="relative">
                        <select 
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className={`w-full px-5 py-4 rounded-2xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all appearance-none ${
                            errors.course 
                              ? 'border-red-500/50 focus:ring-red-500/10 focus:border-red-500' 
                              : 'border-black/10 focus:ring-blue-600/20 focus:border-blue-600'
                          }`}
                        >
                          <option value="">Select a course</option>
                          {coursesList.map((course) => (
                            <option key={course.value} value={course.value}>{course.label}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                      {errors.course && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.course}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Your Message</label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us about your goals or any specific questions you have..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-2xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-6 max-w-[1536px] mx-auto mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-4 rounded-2xl overflow-hidden h-[400px]"
        >
          <iframe 
            src="https://maps.google.com/maps?q=Bhavna%20Institute,%20Pooth Khas,%20Rohta%20Road,%20Meerut&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '1rem', filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
            allowFullScreen={false} 
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
}
