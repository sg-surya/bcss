import React from 'react';
import { motion } from 'motion/react';

export default function CampusGallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070",
      className: "md:col-span-2 md:row-span-2",
      alt: "Students in classroom"
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
      className: "md:col-span-1 md:row-span-1",
      alt: "Group study"
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
      className: "md:col-span-1 md:row-span-2",
      alt: "Student coding"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
      className: "md:col-span-1 md:row-span-1",
      alt: "Team collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
      className: "md:col-span-2 md:row-span-1",
      alt: "Computer lab"
    },
    {
      url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070",
      className: "md:col-span-2 md:row-span-1",
      alt: "Focused student"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-[1536px] mx-auto bg-[#f5f5f4]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6"
        >
          LIFE AT BHAVNA INSTITUTE
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tighter text-[#0a0a0a] mb-6"
        >
          Our <span className="text-blue-600 font-serif italic">Campus Gallery</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-500 leading-relaxed"
        >
          Take a look at our state-of-the-art infrastructure, computer labs, and vibrant student community.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            className={`relative group overflow-hidden rounded-3xl ${image.className}`}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src={image.url} 
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
