import { Home, Building2, MessageSquare, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-semibold tracking-wide">Kevin Moore</span>
              <span className="text-xs sm:text-sm font-light text-gray-600">Real Estate</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Testimonials</span>
            </button>
            <button
              onClick={() => scrollToSection('properties')}
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
            >
              <Building2 className="w-4 h-4" />
              <span>Properties</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors w-full py-2"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors w-full py-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Testimonials</span>
            </button>
            <button
              onClick={() => scrollToSection('properties')}
              className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors w-full py-2"
            >
              <Building2 className="w-5 h-5" />
              <span>Properties</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-3 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full"
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
