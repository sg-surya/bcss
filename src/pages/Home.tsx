import Hero from '../components/Hero';
import CompanyCarousel from '../components/CompanyCarousel';
import Courses from '../components/Courses';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Faculty from '../components/Faculty';
import PlacedStudents from '../components/PlacedStudents';
import AlumniSection from '../components/AlumniSection';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import FAQ from '../components/FAQ';
import CampusGallery from '../components/CampusGallery';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Location from '../components/Location';

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyCarousel />
      <Courses />
      <Features />
      <Stats />
      <Faculty />
      <PlacedStudents />
      <AlumniSection />
      <Testimonials />
      <About />
      <FAQ />
      <CampusGallery />
      <CTA />
      <ContactForm />
      <Location />
    </main>
  );
}
