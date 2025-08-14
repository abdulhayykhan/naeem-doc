import { Button } from '@/components/ui/button';
import { Play, Image, MapPin, Clock, Shield } from 'lucide-react';
import servicesGallery from '@/assets/services-gallery.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="slide-in-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              ABOUT <span className="text-primary">US</span>
            </h2>
            
            <div className="space-y-6 text-lg text-text-secondary">
              <p>
                Welcome to Naeem Documentation. As a beacon of reprographic excellence, 
                Naeem Documentation has been serving as a one-stop shop for all your 
                documentation and printing needs. Established with an unwavering commitment 
                to quality and customer satisfaction, we have consistently upheld our 
                reputation as a trusted name in the industry.
              </p>
              
              <p>
                Located in Shah Faisal Colony, Block-3, Karachi, Pakistan, Naeem 
                Documentation boasts state-of-the-art copying, printing, graphic designing 
                solutions and document finishing that cater to individuals, businesses, 
                and students alike. Our skilled professionals and advanced technology 
                ensure that each document bears the hallmark of clarity and accuracy. 
                We maintain both generator and UPS backup systems to ensure uninterrupted 
                service during power outages with no extra charges for this facility!
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-surface rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-text-primary font-medium">Strategic Location</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-surface rounded-lg">
                <Clock className="w-6 h-6 text-accent" />
                <span className="text-text-primary font-medium">Extended Hours</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-surface rounded-lg">
                <Shield className="w-6 h-6 text-success" />
                <span className="text-text-primary font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-surface rounded-lg">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-text-primary font-medium">Power Backup</span>
              </div>
            </div>
          </div>

          <div className="slide-in-right">
            <div className="relative">
              <img
                src={servicesGallery}
                alt="Naeem Documentation Services"
                className="rounded-2xl shadow-elegant w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            GALLERY
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Gallery Placeholders */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="relative group aspect-square bg-surface rounded-lg overflow-hidden cursor-pointer hover:shadow-primary transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-surface flex items-center justify-center">
                  {item === 2 ? (
                    <Play className="w-12 h-12 text-primary" />
                  ) : (
                    <Image className="w-12 h-12 text-text-muted" />
                  )}
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {item === 2 ? 'Video' : 'Photo'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Image className="w-4 h-4 mr-2" />
              View More Photos
            </Button>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Play className="w-4 h-4 mr-2" />
              Watch Videos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;