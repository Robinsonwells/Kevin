import { useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import FeaturedProperties from './components/FeaturedProperties';
import About from './components/About';
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
      <FeaturedProperties />
      <About />
      <Contact />
    </div>
  );
}

export default App;
