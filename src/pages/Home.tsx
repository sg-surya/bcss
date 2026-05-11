import Hero from '../components/Hero';
import Courses from '../components/Courses';
import CareerOutcomes from '../components/CareerOutcomes';
import Timeline from '../components/Timeline';
import Placements from '../components/Placements';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Location from '../components/Location';

export default function Home() {
  return (
    <main>
      <Hero />
      <CareerOutcomes />
      <Courses />
      <Timeline />
      <Placements />
      <Testimonials />
      <Gallery />
      <ContactForm />
      <Location />
    </main>
  );
}
