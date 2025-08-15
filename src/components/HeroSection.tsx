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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 sm:mb-6 hero-text leading-tight">
            NAEEM DOCUMENTATION
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-text-secondary mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Your one-stop shop for all your documentation and printing needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-primary text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 glow-primary w-full sm:w-auto"
            >
              GET A QUOTE
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
            >
              ORDER NOW
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-accent font-semibold text-sm sm:text-base lg:text-lg float px-4 text-center">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 sm:w-6 h-5 sm:h-6" />
              <span className="whitespace-nowrap">24/7 POWER BACKUP</span>
            </div>
            <span className="hidden sm:inline">-</span>
            <span className="whitespace-nowrap">NO EXTRA CHARGES</span>
            <Zap className="w-5 sm:w-6 h-5 sm:h-6" />
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