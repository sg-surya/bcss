import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Faculty from '../components/Faculty';
import AlumniSection from '../components/AlumniSection';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Location from '../components/Location';

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <Features />
      <Stats />
      <Faculty />
      <AlumniSection />
      <Testimonials />
      <About />
      <CTA />
      <ContactForm />
      <Location />
    </main>
  );
}
