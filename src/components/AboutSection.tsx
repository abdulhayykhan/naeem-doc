import { Button } from '@/components/ui/button';
import { Image as ImageIcon, MapPin, Clock, Shield } from 'lucide-react';
import servicesGallery from '@/assets/services-gallery.jpg';
import officeInterior1 from '/lovable-uploads/office-interior-1.png';
import officeInterior2 from '/lovable-uploads/office-interior-2.png';
import officeWorkspace from '/lovable-uploads/office-workspace.png';
import officeExterior1 from '/lovable-uploads/office-exterior-1.png';
import officeExterior2 from '/lovable-uploads/office-exterior-2.png';
import officeEquipment from '/lovable-uploads/office-equipment.png';

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-surface rounded-lg">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-text-primary font-medium text-sm sm:text-base">Strategic Location</span>
              </div>
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-surface rounded-lg">
                <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-accent flex-shrink-0" />
                <span className="text-text-primary font-medium text-sm sm:text-base">Extended Hours</span>
              </div>
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-surface rounded-lg">
                <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-success flex-shrink-0" />
                <span className="text-text-primary font-medium text-sm sm:text-base">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-surface rounded-lg">
                <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-text-primary font-medium text-sm sm:text-base">Power Backup</span>
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
          
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            {/* First Row */}
            <div className="relative group aspect-square bg-surface rounded-lg overflow-hidden cursor-pointer hover:shadow-primary transition-all duration-300">
              <img
                src={officeInterior1}
                alt="Office Interior 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  Office Interior
                </span>
              </div>
            </div>
            
            <div className="relative group aspect-square bg-surface rounded-lg overflow-hidden cursor-pointer hover:shadow-primary transition-all duration-300">
              <img
                src={officeInterior2}
                alt="Office Interior 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  Workspace
                </span>
              </div>
            </div>
            
            <div className="relative group aspect-square bg-surface rounded-lg overflow-hidden cursor-pointer hover:shadow-primary transition-all duration-300">
              <img
                src={officeWorkspace}
                alt="Office Workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  Equipment Setup
                </span>
              </div>
            </div>
            
            {/* Second Row */}
            <div className="relative group aspect-square bg-surface rounded-lg overflow-hidden cursor-pointer hover:shadow-primary transition-all duration-300">
              <img
                src={officeExterior1}
                alt="Office Exterior 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  Storefront
                </span>
              </div>
            </div>
            
            <div className="relative group aspect-square bg-surface rounded-lg overflow-hidden cursor-pointer hover:shadow-primary transition-all duration-300">
              <img
                src={officeExterior2}
                alt="Office Exterior 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  Service Center
                </span>
              </div>
            </div>
            
            <div className="relative group aspect-square bg-surface rounded-lg overflow-hidden cursor-pointer hover:shadow-primary transition-all duration-300">
              <img
                src={officeEquipment}
                alt="Office Equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  Professional Equipment
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <ImageIcon className="w-4 h-4 mr-2" />
              View More Photos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;