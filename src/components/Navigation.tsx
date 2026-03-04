import { Home, Building2, User, Mail } from 'lucide-react';

function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-black" />
            <span className="text-2xl font-light tracking-wide">Elite Estates</span>
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
              onClick={() => scrollToSection('properties')}
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
            >
              <Building2 className="w-4 h-4" />
              <span>Properties</span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
            >
              <User className="w-4 h-4" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
