import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you provide 100% placement assistance?",
    answer: "Yes, we have a dedicated placement cell that helps students with resume building, interview preparation, and connects them with our network of hiring partners. We have a strong track record of placing our students in top companies."
  },
  {
    question: "Are the courses practical or theoretical?",
    answer: "Our courses are 90% practical and 10% theoretical. We believe in learning by doing. You will work on real-world projects, case studies, and assignments that simulate actual workplace scenarios."
  },
  {
    question: "Do I get a certificate after completion?",
    answer: "Absolutely. Upon successful completion of the course and assignments, you will receive a government-recognized and ISO-certified certificate from Bhavna Institute, which is highly valued by employers."
  },
  {
    question: "Can I take demo classes before joining?",
    answer: "Yes, we offer free demo classes for all our courses. This allows you to experience our teaching methodology, interact with the mentors, and ensure the course is the right fit for you before making a commitment."
  },
  {
    question: "What is the batch size?",
    answer: "We maintain small batch sizes (typically 10-15 students) to ensure personalized attention for every student. This allows our mentors to focus on individual progress and clear doubts effectively."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 max-w-[1536px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Column - Sticky Header */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-xs font-bold uppercase tracking-widest mb-6 text-blue-700"
            >
              FAQ
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-[#0a0a0a] mb-6 leading-tight"
            >
              Got <br className="hidden lg:block" />
              <span className="font-serif italic text-blue-600 font-light">Questions?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg md:text-xl mb-8 max-w-md"
            >
              Find answers to common questions about our courses, placements, and teaching methodology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a 
                href="https://wa.me/919719205268"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group"
              >
                Still have questions? Chat with us
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="lg:col-span-7">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border ${isOpen ? 'border-blue-200 bg-blue-50/30' : 'border-black/10 bg-white'} rounded-2xl overflow-hidden transition-colors duration-300`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`text-lg md:text-xl font-semibold pr-8 ${isOpen ? 'text-blue-600' : 'text-[#0a0a0a]'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
