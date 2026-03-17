import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

// ✅ LOGO
import logo from '../assets/logo.png';

// ✅ CONTACT MODAL
import ContactModal from './ContactModal';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/franchise', label: 'Franchise' },
    { to: '/gallery', label: 'Gallery' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-center h-16">

            {/* 🔥 LOGO */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.img
                src={logo}
                alt="Farm Fresh Juice"
                whileHover={{ scale: 1.05 }}
                className="h-12 w-auto object-contain"
              />
              <span className="text-lg md:text-xl font-semibold text-green-700">
                Farm Fresh
              </span>
            </Link>

            {/* 🔥 DESKTOP MENU */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  <span
                    className={`${
                      isActive(link.to)
                        ? 'text-green-600 font-semibold'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}

              {/* 🔥 CONTACT BUTTON */}
              <button
                onClick={() => setOpenContact(true)}
                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
              >
                Apply Now 🚀
              </button>
            </div>

            {/* 🔥 MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* 🔥 MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">

              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  {link.label}
                </Link>
              ))}

              {/* 🔥 CONTACT BUTTON MOBILE */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setOpenContact(true);
                }}
                className="w-full bg-green-600 text-white py-2 rounded"
              >
                Apply Now 🚀
              </button>

            </div>
          </div>
        )}
      </nav>

      {/* 🔥 CONTACT MODAL */}
      <ContactModal
        isOpen={openContact}
        onClose={() => setOpenContact(false)}
      />
    </>
  );
}

export default Navbar;