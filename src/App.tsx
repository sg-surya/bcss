import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Features from './components/Features';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import About from './components/About';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f4] font-sans text-[#0a0a0a] selection:bg-[#0a0a0a] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Features />
        <Stats />
        <Testimonials />
        <About />
        <CTA />
        <ContactForm />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
