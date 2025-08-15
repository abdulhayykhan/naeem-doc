import { useState } from 'react';
import { 
  FileText, 
  Printer, 
  CreditCard, 
  Camera,
  Scan,
  Palette,
  BookOpen,
  Shield,
  Award,
  UserCheck,
  Building,
  GraduationCap,
  ArrowRight,
  Zap,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import servicePrinting from '@/assets/service-printing.jpg';
import serviceLegal from '@/assets/service-legal.jpg';
import serviceBinding from '@/assets/service-binding.jpg';
import serviceBiometric from '@/assets/service-biometric.jpg';

const services = [
  {
    id: 'laser-copy',
    title: 'LASER COPY',
    description: 'High-quality black & white laser printing',
    image: servicePrinting,
    category: 'printing',
    features: ['Black & White', 'High Quality', 'Fast Service']
  },
  {
    id: 'color-printing',
    title: 'COLOR LASER PRINTING',
    description: 'Professional color laser printing services',
    image: servicePrinting,
    category: 'printing',
    features: ['Full Color', 'Professional Quality', 'All Sizes']
  },
  {
    id: 'black-printing',
    title: 'BLACK LASER PRINTING', 
    description: 'Premium black laser printing solutions',
    image: servicePrinting,
    category: 'printing',
    features: ['Premium Quality', 'Fast Turnaround', 'Bulk Orders']
  },
  {
    id: 'document-scanning',
    title: 'DOCUMENTS SCANNING',
    description: 'Digital document conversion services',
    image: servicePrinting,
    category: 'printing',
    features: ['High Resolution', 'Digital Format', 'Secure Process']
  },
  {
    id: 'typing-services',
    title: 'ENGLISH - URDU TYPING',
    description: 'Professional typing in multiple languages',
    image: serviceLegal,
    category: 'legal',
    features: ['Multiple Languages', 'Accurate Typing', 'Fast Delivery']
  },
  {
    id: 'photo-printing',
    title: 'PHOTO PRINTING PASSPORT SIZE TO A3',
    description: 'Photo printing from passport to A3 size',
    image: servicePrinting,
    category: 'printing',
    features: ['All Sizes', 'High Quality', 'Quick Service']
  },
  {
    id: 'pvc-cards',
    title: 'PVC PLASTIC CARDS',
    description: 'Professional PVC card printing services',
    image: serviceBiometric,
    category: 'nadra',
    features: ['Durable Material', 'Professional Design', 'Custom Printing']
  },
  {
    id: 'legal-documentation',
    title: 'LEGAL DOCUMENTATION',
    description: 'Complete legal document services',
    image: serviceLegal,
    category: 'legal',
    features: ['Legal Compliance', 'Expert Service', 'Secure Process']
  },
  {
    id: 'biometric-verification',
    title: 'BIOMETRIC VERIFICATION',
    description: 'NADRA biometric verification services',
    image: serviceBiometric,
    category: 'nadra',
    features: ['NADRA Certified', 'Secure Process', 'Instant Verification']
  },
  {
    id: 'wiro-binding',
    title: 'WIRO BINDING',
    description: 'Professional wiro binding services',
    image: serviceBinding,
    category: 'binding',
    features: ['Durable Binding', 'Professional Finish', 'Various Sizes']
  },
  {
    id: 'domicile',
    title: 'DOMICILE & P.R.C',
    description: 'Domicile and PRC document services',
    image: serviceLegal,
    category: 'legal',
    features: ['Government Approved', 'Fast Processing', 'Legal Compliance']
  },
  {
    id: 'affidavits',
    title: 'AFFIDAVITS (ZAKAT & WIDOW)',
    description: 'Specialized affidavit documentation',
    image: serviceLegal,
    category: 'legal',
    features: ['Legal Format', 'Expert Guidance', 'Quick Process']
  },
  {
    id: 'agreements',
    title: 'SALE & RENT AGREEMENTS',
    description: 'Legal agreement documentation',
    image: serviceLegal,
    category: 'legal',
    features: ['Legal Format', 'Professional Service', 'Secure Documentation']
  },
  {
    id: 'birth-certificates',
    title: 'BIRTH CERTIFICATES',
    description: 'Birth certificate processing services',
    image: serviceLegal,
    category: 'legal',
    features: ['Official Documents', 'Fast Processing', 'Government Approved']
  },
  {
    id: 'nikah-nama',
    title: 'NADRA COMPUTERIZED NIKAH NAMA',
    description: 'Computerized Nikah Nama services',
    image: serviceBiometric,
    category: 'nadra',
    features: ['NADRA Approved', 'Digital Format', 'Official Process']
  },
  {
    id: 'electric-bills',
    title: 'K-ELECTRIC DUPLICATE BILLS',
    description: 'Duplicate utility bill services',
    image: serviceLegal,
    category: 'utility',
    features: ['Official Format', 'Quick Service', 'All Utilities']
  }
];

const categoryFilters = [
  { id: 'all', name: 'All Services', icon: Building },
  { id: 'printing', name: 'Printing & Scanning', icon: Printer },
  { id: 'legal', name: 'Legal Documents', icon: FileText },
  { id: 'nadra', name: 'NADRA Services', icon: CreditCard },
  { id: 'binding', name: 'Binding Services', icon: BookOpen },
  { id: 'utility', name: 'Utility Services', icon: Shield }
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const handleServiceClick = (serviceId: string) => {
    // Scroll to contact section
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Comprehensive documentation and printing solutions with state-of-the-art equipment
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categoryFilters.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground border-primary shadow-primary' 
                      : 'bg-card text-text-secondary border-border hover:border-primary hover:text-primary'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.id)}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-primary/90 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredService === service.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-primary-foreground">
                    <ArrowRight className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-semibold">Learn More</span>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-xs text-text-muted"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                  {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-card animate-slide-in-up">
          <div className="flex items-center justify-center space-x-2 text-accent mb-4">
            <Zap className="w-6 h-6" />
            <span className="text-lg font-semibold">24/7 Power Backup - No Extra Charges</span>
            <Zap className="w-6 h-6" />
          </div>
          
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Need a Custom Service?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact us for custom documentation 
            and printing solutions tailored to your specific needs.
          </p>
          
          <Button 
            onClick={() => handleServiceClick('custom')}
            className="bg-gradient-primary hover:opacity-90 shadow-primary"
            size="lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Get Custom Quote
          </Button>
        </div>

        {/* Complete Documentation Services */}
        <div className="mt-16 bg-card rounded-2xl p-8 sm:p-12 shadow-card animate-slide-in-up">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-text-primary mb-12">
            Complete Documentation Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Legal Documentation */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-primary mb-4 border-b border-primary/20 pb-2">
                Legal Documentation:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Domicile & P.R.C</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Affidavits (Zakat & Widow)</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Undertaking Documents</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sale & Rent Agreements</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Birth Certificates</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>NADRA Computerized Nikah Nama</span>
                </li>
              </ul>
            </div>

            {/* NADRA Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-accent mb-4 border-b border-accent/20 pb-2">
                NADRA Services:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>E-Sahulat Services</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>ID Card Services</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Family Registration Certificate</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Biometric Verification</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Character Certificate</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Computerized Nikah Nama</span>
                </li>
              </ul>
            </div>

            {/* Printing & Binding */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-success mb-4 border-b border-success/20 pb-2">
                Printing & Binding:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Laser Copy (Black & Color)</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Photo Printing (All Sizes)</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Document Scanning</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Wiro & Comb Binding</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lamination Services</span>
                </li>
                <li className="flex items-start space-x-3 text-text-secondary">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>PVC Card Printing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <p className="text-lg font-semibold text-text-primary">
              Professional Documentation Services Since 2010 • 24/7 Power Backup • No Extra Charges
            </p>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20 animate-fade-in">
            <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-text-primary mb-2">Expert Team</h4>
            <p className="text-text-secondary">Skilled professionals ensuring quality results</p>
          </div>
          
          <div className="text-center p-6 bg-accent/5 rounded-xl border border-accent/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Building className="w-12 h-12 text-accent mx-auto mb-4" />
            <h4 className="text-xl font-bold text-text-primary mb-2">Modern Equipment</h4>
            <p className="text-text-secondary">State-of-the-art printing and binding technology</p>
          </div>
          
          <div className="text-center p-6 bg-success/5 rounded-xl border border-success/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <GraduationCap className="w-12 h-12 text-success mx-auto mb-4" />
            <h4 className="text-xl font-bold text-text-primary mb-2">Student Friendly</h4>
            <p className="text-text-secondary">Special rates and services for students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;