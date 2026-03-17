import { Phone } from 'lucide-react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917221892189?text=Hi%20I%20am%20interested%20in%20Farm%20Fresh%20Juice%20Franchise"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 animate-bounce">
        <Phone className="w-6 h-6" />
      </div>
    </a>
  );
}

export default WhatsAppButton;