import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  MessageSquare,
  Send,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import contactBg from '@/assets/contact-bg.jpg';

const ContactSection = () => {
  const handlePhoneCall = () => {
    window.open('tel:+923158157721', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:naeemdocumentation@gmail.com', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/923158157721', '_blank');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            CONTACT <span className="text-primary">US</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get in touch with us for all your documentation and printing needs. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                Visit Our Shop
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Address</h4>
                    <p className="text-text-secondary">
                      Plot No. 3/31-A, Near Red Oven Restaurant,<br />
                      Shah Faisal Colony No. 3, Karachi-75230, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Phone</h4>
                    <p className="text-text-secondary">0315-8157721</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                    <p className="text-text-secondary">naeemdocumentation@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Working Hours</h4>
                    <p className="text-text-secondary">
                      Monday to Sunday<br />
                      8:00 AM - 11:59 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                Find Us on Map
              </h3>
              
              <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-border/50">
                <iframe
                  src="https://maps.app.goo.gl/Ej58qwnAhgVa2B3A7"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Button 
                onClick={handlePhoneCall}
                className="bg-gradient-primary hover:opacity-90 shadow-primary h-12 sm:h-14 text-base sm:text-lg"
              >
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Call Now
              </Button>
              
              <Button 
                onClick={handleEmail}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground h-12 sm:h-14 text-base sm:text-lg"
              >
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>

          {/* Quick Contact Form & Social */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Get Quick Quote
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-surface rounded-lg border border-border/50">
                  <h4 className="font-semibold text-text-primary mb-2">Popular Services</h4>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <div>• Document Printing & Binding</div>
                    <div>• NADRA Services & ID Cards</div>
                    <div>• Legal Documentation</div>
                    <div>• Photo Printing (All Sizes)</div>
                  </div>
                </div>

                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-success hover:bg-success/90 h-11 sm:h-12 text-sm sm:text-base"
                >
                  <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  WhatsApp for Quick Quote
                </Button>
              </div>
            </div>

            {/* Business Features */}
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Why Choose Us?
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">24/7 Power Backup (No Extra Cost)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">State-of-the-art Equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-text-secondary">Experienced Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">Competitive Pricing</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Follow Us
              </h3>
              
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Facebook className="w-6 h-6 text-primary" />
                </button>
                <button 
                  onClick={handleWhatsApp}
                  className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center hover:bg-success/20 transition-colors"
                >
                  <MessageSquare className="w-6 h-6 text-success" />
                </button>
                <button className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <Send className="w-6 h-6 text-accent" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
