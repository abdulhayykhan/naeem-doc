import { 
  FileText, 
  Printer, 
  CreditCard, 
  BookOpen, 
  Shield, 
  Camera,
  Scan,
  Palette,
  Award,
  UserCheck,
  Building,
  GraduationCap
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'Legal Documentation',
    icon: FileText,
    color: 'primary',
    services: [
      'Domicile & P.R.C',
      'Affidavits (Zakat & Widow)',
      'Undertaking Documents',
      'Sale & Rent Agreements',
      'Birth Certificates',
      'NADRA Computerized Nikah Nama'
    ]
  },
  {
    title: 'Printing & Binding',
    icon: Printer,
    color: 'accent',
    services: [
      'Laser Copy (Black & Color)',
      'Photo Printing (All Sizes)',
      'Document Scanning',
      'Wiro & Comb Binding',
      'Lamination Services',
      'PVC Card Printing',
      'Sticker Print',
      'Glossy Print',
      'A3 Glossy Print',
      'Tape Binding',
      'Covering',
      'Spiral Binding',
      'Soft Coating',
      'A3 Hard Coating'
    ]
  },
  {
    title: 'NADRA & Other Services',
    icon: CreditCard,
    color: 'success',
    services: [
      'NADRA E-Sahulat Services',
      'ID Card Services',
      'Family Registration Certificate',
      'Biometric Verification',
      'Character Certificate',
      'NTN Registration',
      'College & University Forms',
      'CV & Job Applications',
      'Duplicate Bills (K-Electric, SSGC, PTCL)'
    ]
  }
];

const additionalServices = [
  { icon: Camera, name: 'Photography', description: 'Professional photo services' },
  { icon: Scan, name: 'Document Scanning', description: 'High-quality digital conversion' },
  { icon: Palette, name: 'Graphic Design', description: 'Creative design solutions' },
  { icon: BookOpen, name: 'Book Binding', description: 'Professional binding services' },
  { icon: Shield, name: 'Certification', description: 'Document certification' },
  { icon: Award, name: 'Quality Assurance', description: '100% quality guarantee' }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive documentation and printing solutions tailored to meet all your professional and personal needs
          </p>
        </div>

        {/* Main Service Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClass = category.color === 'primary' ? 'text-primary' : 
                             category.color === 'accent' ? 'text-accent' : 'text-success';
            const bgClass = category.color === 'primary' ? 'bg-primary/10' : 
                           category.color === 'accent' ? 'bg-accent/10' : 'bg-success/10';
            
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary/30"
              >
                <div className={`w-16 h-16 ${bgClass} rounded-full flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colorClass}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="flex items-start space-x-3 text-text-secondary"
                    >
                      <div className={`w-2 h-2 ${bgClass} rounded-full mt-2 flex-shrink-0`}></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-3xl font-bold text-text-primary text-center mb-8">
            Additional Professional Services
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-primary transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-1 text-sm">
                    {service.name}
                  </h4>
                  <p className="text-xs text-text-muted">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
            <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-text-primary mb-2">Expert Team</h4>
            <p className="text-text-secondary">Skilled professionals ensuring quality results</p>
          </div>
          
          <div className="text-center p-6 bg-accent/5 rounded-xl border border-accent/20">
            <Building className="w-12 h-12 text-accent mx-auto mb-4" />
            <h4 className="text-xl font-bold text-text-primary mb-2">Modern Equipment</h4>
            <p className="text-text-secondary">State-of-the-art printing and binding technology</p>
          </div>
          
          <div className="text-center p-6 bg-success/5 rounded-xl border border-success/20">
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