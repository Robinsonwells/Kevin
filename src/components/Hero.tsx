import { ChevronDown } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
      };
    }
  }
}

function Hero() {
  const scrollToProperties = () => {
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <spline-viewer url="https://prod.spline.design/8pmVBVeVnC8O6Sq5/scene.splinecode" />
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-6xl md:text-8xl font-light tracking-wide text-center mb-6 drop-shadow-2xl">
          I Will Solve Your Real Estate Problems
        </h1>
      </div>

      <button
        onClick={scrollToProperties}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce"
      >
        <ChevronDown className="w-12 h-12" />
      </button>
    </section>
  );
}

export default Hero;
