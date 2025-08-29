import { FileText, MapPin, Phone, Mail, Clock, Facebook, MessageSquare, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open('https://wa.me/923158157721', '_blank');
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-6 sm:w-7 h-6 sm:h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary">Naeem Documentation</h3>
                <p className="text-text-secondary text-sm sm:text-base">Professional Documentation Services</p>
              </div>
            </div>
            
            <p className="text-text-secondary mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Your trusted partner for all documentation and printing needs. Serving Karachi 
              with excellence for over 5 years with state-of-the-art equipment and 24/7 power backup.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:space-x-0">
              <button 
                onClick={() => window.open('tel:+923158157721', '_self')}
                className="flex items-center justify-center sm:justify-start space-x-2 px-4 py-2.5 sm:py-2 bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent/20 transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Now</span>
              </button>
              <button 
                onClick={() => window.open('mailto:naeemdocumentation@gmail.com', '_self')}
                className="flex items-center justify-center sm:justify-start space-x-2 px-4 py-2.5 sm:py-2 bg-success/10 text-success border border-success/20 rounded-lg hover:bg-success/20 transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">Send Email</span>
              </button>
            </div>

          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-4 sm:mb-6">Contact Information</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    Plot No. 3/31-A, Near Red Oven Restaurant,
                    Shah Faisal Colony No. 3, Karachi-75230, Pakistan
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
                <p className="text-text-secondary text-sm sm:text-base">0315-8157721</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-success flex-shrink-0" />
                <p className="text-text-secondary text-xs sm:text-sm break-all sm:break-normal">naeemdocumentation@gmail.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-text-secondary text-xs sm:text-sm">
                    Monday to Sunday<br />
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
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
        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-secondary text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Naeem Documentation. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-text-secondary">
              <span>24/7 Power Backup</span>
              <span className="text-border">•</span>
              <span>Quality Assured</span>
              <span className="text-border">•</span>
              <span className="text-center sm:text-left">Professional Service</span>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/50">
            <p className="text-text-secondary text-xs sm:text-sm">
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