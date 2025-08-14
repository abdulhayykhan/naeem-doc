import { useState } from 'react';
import { Menu, X, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">ND</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              ABOUT US
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              CONTACT
            </button>
            <Button variant="default" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Phone className="w-4 h-4 mr-2" />
              ORDER NOW
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-secondary hover:text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-text-secondary hover:text-primary transition-colors text-left"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-text-secondary hover:text-primary transition-colors text-left"
              >
                ABOUT US
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-text-secondary hover:text-primary transition-colors text-left"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-text-secondary hover:text-primary transition-colors text-left"
              >
                CONTACT
              </button>
              <Button variant="default" className="bg-gradient-primary hover:opacity-90 w-full">
                <Phone className="w-4 h-4 mr-2" />
                ORDER NOW
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;