// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';
// import logo from '../assets/logo.png';
// import ContactModal from './ContactModal';

// function Navbar() {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);
//   const [openContact, setOpenContact] = useState(false);

//   const navLinks = [
//     { to: '/', label: 'Home' },
//     { to: '/about', label: 'About' },
//     { to: '/franchise', label: 'Franchise' },
//     { to: '/gallery', label: 'Gallery' },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       {/* 🔥 NAVBAR */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

//           {/* 🔥 LOGO */}
//           <Link to="/" className="flex items-center gap-3">
//             <motion.img
//               src={logo}
//               alt="Farm Fresh Juice"
//               whileHover={{ scale: 1.05 }}
//               className="h-12 object-contain"
//             />
//             <span className="text-xl font-semibold tracking-tight">
//               Farm Fresh Juice
//             </span>
//           </Link>

//           {/* 🔥 DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-8">

//             {navLinks.map((link) => (
//               <Link key={link.to} to={link.to}>
//                 <span
//                   className={`relative text-sm font-medium transition ${
//                     isActive(link.to)
//                       ? 'text-black'
//                       : 'text-gray-600 hover:text-black'
//                   }`}
//                 >
//                   {link.label}

//                   {/* 🔥 UNDERLINE EFFECT */}
//                   {isActive(link.to) && (
//                     <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black"></span>
//                   )}
//                 </span>
//               </Link>
//             ))}

//             {/* 🔥 PREMIUM CTA BUTTON */}
//             <button
//               onClick={() => setOpenContact(true)}
//               className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition"
//             >
//               Get Franchise
//             </button>
//           </div>

//           {/* 🔥 MOBILE ICON */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* 🔥 MOBILE MENU */}
//         {isOpen && (
//           <div className="md:hidden bg-white border-t px-6 py-6 space-y-4">

//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 onClick={() => setIsOpen(false)}
//                 className="block text-lg text-gray-700"
//               >
//                 {link.label}
//               </Link>
//             ))}

//             <button
//               onClick={() => {
//                 setIsOpen(false);
//                 setOpenContact(true);
//               }}
//               className="w-full bg-black text-white py-3 rounded-full"
//             >
//               Get Franchise
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* 🔥 CONTACT MODAL */}
//       <ContactModal
//         isOpen={openContact}
//         onClose={() => setOpenContact(false)}
//       />
//     </>
//   );
// }

// export default Navbar;
