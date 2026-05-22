import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find the element with the hash ID (e.g. #why-us -> why-us)
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: wait a moment for the component to mount, then scroll
        const timer = setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      // If no hash, scroll to top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
