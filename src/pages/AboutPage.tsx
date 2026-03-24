import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Target, Users, Award, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Students Trained', value: '5,000+' },
    { label: 'Placement Rate', value: '94%' },
    { label: 'Expert Faculty', value: '25+' },
    { label: 'Years of Excellence', value: '10+' },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: 'Our Mission',
      description: 'To provide accessible, high-quality, and industry-relevant education that empowers students to achieve their academic and professional goals in the digital age.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: 'Our Vision',
      description: 'To be the most trusted educational institution in the region, known for excellence in teaching, practical skill development, and outstanding student success.'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Student-Centric',
      description: 'We place our students at the heart of everything we do, ensuring personalized attention, mentorship, and support throughout their learning journey.'
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: 'Excellence',
      description: 'We are committed to maintaining the highest standards in our curriculum, teaching methodologies, and infrastructure to deliver the best learning experience.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#f5f5f4]">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-xs font-medium uppercase tracking-widest mb-8"
          >
            About Us
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tighter text-[#0a0a0a] mb-6"
          >
            Empowering Minds, <br />
            <span className="font-serif italic text-blue-600">Shaping Futures.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Founded with a vision to democratize quality education, Bhavna Institute has grown into a premier destination for competitive exam preparation and skill development in Meerut.
          </motion.p>
        </div>

        {/* Image Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          <div className="md:col-span-2 h-[400px] rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
              alt="Students learning" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-[400px] rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
              alt="Campus" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-8 rounded-3xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] rounded-[3rem] p-10 md:p-16 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-6">
                Why Choose <span className="font-serif italic text-blue-400">Bhavna Institute?</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We bridge the gap between traditional education and industry requirements. Our curriculum is constantly updated to reflect the latest trends and technologies.
              </p>
              <div className="space-y-4">
                {[
                  'Industry-expert instructors with real-world experience',
                  '100% placement assistance and career guidance',
                  'Hands-on practical training with live projects',
                  'Modern infrastructure and computer labs'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                alt="Teaching" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
