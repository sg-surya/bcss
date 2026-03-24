import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import AlumniPage from './pages/AlumniPage';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f4] font-sans text-[#0a0a0a] selection:bg-[#0a0a0a] selection:text-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
