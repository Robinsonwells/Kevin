import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

function App() {
  const [blackSectionOpacity, setBlackSectionOpacity] = useState(0);
  const [showSignature, setShowSignature] = useState(false);
  const blackSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!blackSectionRef.current) return;

      const rect = blackSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate opacity based on how much the section is in view
      if (rect.top < windowHeight) {
        const visibleAmount = Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.5));
        setBlackSectionOpacity(visibleAmount);

        // Trigger signature animation when section is 30% visible
        if (visibleAmount > 0.3 && !showSignature) {
          setShowSignature(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showSignature]);

  return (
    <div className="bg-white">
      {/* Spline Hero Section */}
      <div className="w-full h-screen relative">
        <Spline scene="https://prod.spline.design/60Kcp3NeoO9iBOiT/scene.splinecode" />
      </div>

      {/* Black Section with Animated Signature */}
      <div
        ref={blackSectionRef}
        className="w-full h-screen bg-black flex items-center justify-center transition-opacity duration-700"
        style={{ opacity: blackSectionOpacity }}
      >
        <svg
          viewBox="0 0 800 300"
          className="w-full max-w-2xl px-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Placeholder signature path - replace with your actual SVG */}
          <path
            d="M 50 150 Q 100 50, 150 150 T 250 150 M 270 100 L 270 200 M 270 150 L 330 150 M 350 100 Q 380 100, 380 130 Q 380 160, 350 160 Q 380 160, 380 190 Q 380 220, 350 220 M 420 100 L 420 200 L 480 100 L 480 200 M 520 150 Q 520 100, 560 100 Q 600 100, 600 150 Q 600 200, 560 200 Q 520 200, 520 150 M 640 100 L 640 180 Q 640 200, 660 200 L 720 200"
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={showSignature ? 'animate-signature' : ''}
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: showSignature ? 0 : 2000,
            }}
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
