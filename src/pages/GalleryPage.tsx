import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const images = [
  { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070", alt: "Students in classroom", category: "Classroom" },
  { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070", alt: "Group study session", category: "Study" },
  { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072", alt: "Student coding", category: "Lab" },
  { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070", alt: "Team collaboration", category: "Collaboration" },
  { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070", alt: "Computer lab", category: "Lab" },
  { url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070", alt: "Focused student", category: "Student Life" },
  { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070", alt: "Classroom lecture", category: "Classroom" },
  { url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070", alt: "Students learning together", category: "Study" },
  { url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070", alt: "Computer workstation", category: "Lab" },
  { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070", alt: "Library study area", category: "Student Life" },
  { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070", alt: "Group project work", category: "Collaboration" },
  { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070", alt: "Workshop session", category: "Classroom" }
];

const categories = ["All", "Classroom", "Lab", "Study", "Collaboration", "Student Life"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    } else {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#f5f5f4]">
      <SEO title="Gallery" description="Take a look at our state-of-the-art infrastructure, computer labs, and vibrant student community." canonical="/gallery" />
      
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-[1536px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-xs font-semibold text-blue-600 uppercase tracking-widest mb-8"
          >
            LIFE AT BHAVNA INSTITUTE
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tighter text-[#0a0a0a] mb-6"
          >
            Our <span className="font-serif italic text-blue-600">Campus Gallery.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Take a look at our state-of-the-art infrastructure, computer labs, and vibrant student community.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#0a0a0a] text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-black/5 hover:border-black/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.url}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative group overflow-hidden rounded-3xl cursor-pointer aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0a0a0a] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                  {filteredImages[selectedImage].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 px-6 max-w-[1536px] mx-auto text-center border-t border-black/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto premium-card p-12 md:p-16 rounded-[2.5rem]"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#0a0a0a] mb-6">
            Want to See It <span className="font-serif italic text-blue-600">In Person?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Schedule a campus visit and experience our world-class facilities yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-black/5 text-base"
            >
              Visit Our Campus
            </Link>
            <Link 
              to="/courses" 
              className="inline-flex items-center justify-center gap-2 border border-black/10 bg-white text-[#0a0a0a] px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-colors shadow-lg shadow-black/5 text-base"
            >
              Explore Courses
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
