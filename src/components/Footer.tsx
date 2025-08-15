import { FileText, MapPin, Phone, Mail, Clock, Facebook, MessageSquare, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open('https://wa.me/923158157721', '_blank');
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary">Naeem Documentation</h3>
                <p className="text-text-secondary">Professional Documentation Services</p>
              </div>
            </div>
            
            <p className="text-text-secondary mb-6 max-w-md">
              Your trusted partner for all documentation and printing needs. Serving Karachi 
              with excellence for over 5 years with state-of-the-art equipment and 24/7 power backup.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
              </button>
              <button 
                onClick={handleWhatsApp}
                className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center hover:bg-success/20 transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-success" />
              </button>
              <button className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Send className="w-5 h-5 text-accent" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-text-secondary text-sm">
                    Plot No. 3/31-A, Near Red Oven Restaurant,
                    Shah Faisal Colony No. 3, Karachi-75230, Pakistan
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-text-secondary">0315-8157721</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-success flex-shrink-0" />
                <p className="text-text-secondary">naeemdocumentation@gmail.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-text-secondary text-sm">
                    Monday to Sunday<br />
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-6">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-text-secondary hover:text-primary transition-colors cursor-pointer">
                Legal Documentation
              </li>
              <li className="text-text-secondary hover:text-primary transition-colors cursor-pointer">
                Printing & Binding
              </li>
              <li className="text-text-secondary hover:text-primary transition-colors cursor-pointer">
                NADRA Services
              </li>
              <li className="text-text-secondary hover:text-primary transition-colors cursor-pointer">
                Photo Printing
              </li>
              <li className="text-text-secondary hover:text-primary transition-colors cursor-pointer">
                Document Scanning
              </li>
              <li className="text-text-secondary hover:text-primary transition-colors cursor-pointer">
                Graphic Design
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-secondary text-sm text-center md:text-left">
              © {currentYear} Naeem Documentation. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center justify-center space-x-2 sm:space-x-6 text-xs sm:text-sm text-text-secondary">
              <span>24/7 Power Backup</span>
              <span className="hidden sm:inline">•</span>
              <span>Quality Assured</span>
              <span className="hidden sm:inline">•</span>
              <span>Professional Service</span>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="text-center mt-6 pt-6 border-t border-border/50">
            <p className="text-text-secondary text-sm">
              Made with ❤️ by{' '}
              <a 
                href="https://www.linkedin.com/in/abdul-hayy-khan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
              >
                Abdul Hayy Khan
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;