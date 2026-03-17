import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-white">
      
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-8">

          {/* 🔥 BRAND */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Farm Fresh Juice
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fresh Brands. Proven Business. Scalable Success.
            </p>

            {/* 🔥 SOCIAL */}
            <div className="flex gap-4 mt-4">

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/farmfreshjuice"
                target="_blank"
                className="hover:text-pink-500"
              >
                <Instagram />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917221892189"
                target="_blank"
                className="hover:text-green-500"
              >
                <Phone />
              </a>

            </div>
          </div>

          {/* 🔥 QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/franchise" className="hover:text-white">Franchise</Link></li>
            </ul>
          </div>

          {/* 🔥 CONTACT */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">

              <li className="flex items-center gap-2">
                <Mail size={16} />
                franchise@fruitasty.in
              </li>

              {/* 🔥 CLICKABLE WHATSAPP */}
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="https://wa.me/917221892189"
                  target="_blank"
                  className="hover:text-green-400"
                >
                  +91 72218 92189
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin size={16} />
                Hyderabad, Kompally
              </li>

            </ul>
          </div>

          {/* 🔥 HOURS */}
          <div>
            <h3 className="font-semibold mb-4">Business Hours</h3>
            <p className="text-gray-400 text-sm">
              Monday - Sunday
            </p>
            <p className="text-gray-400 text-sm mt-1">
              10:00 AM - 10:00 PM
            </p>
          </div>

        </div>

        {/* 🔥 BOTTOM */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Farmfreshjuice India. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;