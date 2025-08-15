import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const whatsappNumber = '+923158157721'; // Your WhatsApp number
  const whatsappMessage = 'Hello! I need information about your documentation services.';
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 animate-float"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background text-text-primary px-3 py-2 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-border">
          <span className="text-sm font-medium">Chat with us on WhatsApp</span>
          {/* Arrow */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-l-4 border-l-background border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
      </button>
    </div>
  );
};

export default WhatsAppWidget;