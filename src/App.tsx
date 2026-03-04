import { useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import FeaturedProperties from './components/FeaturedProperties';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.65/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <Testimonials />
      <FeaturedProperties />
      <Contact />
    </div>
  );
}

export default App;
