import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-office.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="slide-in-left">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 hero-text">
            NAEEM DOCUMENTATION
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Your one-stop shop for all your documentation and printing needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-primary text-lg px-8 py-6 glow-primary"
            >
              GET A QUOTE
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
            >
              ORDER NOW
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-accent font-semibold text-lg float">
            <Zap className="w-6 h-6" />
            <span>24/7 POWER BACKUP - NO EXTRA CHARGES</span>
            <Zap className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;