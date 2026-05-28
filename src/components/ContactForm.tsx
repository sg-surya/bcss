import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const coursesList = [
    { value: "ai-tools", label: "AI Tools + Prompt Engineering" },
    { value: "html-css", label: "Web Development" },
    { value: "data-analytics", label: "Data Analytics" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "tally-prime", label: "Tally Prime with GST" },
    { value: "graphic-design", label: "Graphic Design" }
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
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
        event_label: 'ContactForm Home',
        value: formData.course
      });
    }, 1000);
  };

  const getWhatsAppLink = () => {
    const selectedCourseLabel = coursesList.find(c => c.value === formData.course)?.label || formData.course;
    const text = `Hi, my name is ${formData.name}. I am interested in enrolling in the "${selectedCourseLabel}" course. My phone number is ${formData.phone}. Please guide me on the next steps.`;
    return `https://wa.me/919719205268?text=${encodeURIComponent(text)}`;
  };

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

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0a0a0a] mb-2">Details Submitted!</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Thank you, <strong className="text-[#0a0a0a]">{formData.name}</strong>. We have received your inquiry for <strong className="text-[#0a0a0a]">{coursesList.find(c => c.value === formData.course)?.label}</strong>.
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Our career counselor will call you on <span className="font-semibold">{formData.phone}</span> shortly.
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
                    Connect via WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setFormData({ name: '', phone: '', course: '' });
                      setIsSuccess(false);
                    }}
                    className="text-sm font-medium text-gray-500 hover:text-[#0a0a0a] transition-colors cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#0a0a0a] mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-5 py-4 rounded-2xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.name 
                        ? 'border-red-500/50 focus:ring-red-500/10 focus:border-red-500' 
                        : 'border-black/10 focus:ring-blue-600/20 focus:border-blue-600'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name}</p>}
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

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#0a0a0a] text-white px-8 py-4 rounded-2xl font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Details'
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <div className="bg-white border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-10 rounded-2xl space-y-8">
            <h3 className="text-2xl font-semibold text-[#0a0a0a]">Direct Contact</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Call Us</div>
                <a href="tel:+919719205268" className="text-lg font-semibold text-[#0a0a0a] hover:text-blue-600 transition-colors">+91 97192 05268</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-[#25D366]">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">WhatsApp</div>
                <a href="https://wa.me/919719205268" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#0a0a0a] hover:text-green-600 transition-colors">+91 97192 05268</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-[#0a0a0a]">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Visit Us</div>
                <a href="https://maps.app.goo.gl/if7jNUcfgLrePCx39" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-[#0a0a0a] hover:text-blue-600 transition-colors leading-relaxed">
                  Bhavna Institute, Pooth Khas,<br />Rohta Road, Meerut
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
