// import { Link } from 'react-router-dom';
// import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

// function Footer() {
//   return (
//     <footer className="bg-black text-white">

//       {/* 🔥 TOP CTA */}
//       <div className="bg-green-600 text-center py-6 px-4">
//         <h2 className="text-lg md:text-xl font-semibold">
//           Start Your Franchise Today 🚀
//         </h2>
//         <p className="text-sm mt-1">
//           Starting from ₹3.99 Lakhs • Limited Slots Available
//         </p>

//         <Link
//           to="/franchise"
//           className="inline-block mt-3 bg-white text-green-700 px-5 py-2 rounded-full text-sm font-semibold"
//         >
//           Apply Now
//         </Link>
//       </div>

//       {/* 🔥 MAIN FOOTER */}
//       <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

//           {/* 🔥 BRAND */}
//           <div>
//             <h2 className="text-xl md:text-2xl font-bold mb-3">
//               Farm Fresh Juice
//             </h2>

//             <p className="text-gray-400 text-sm">
//               Fresh Brands. Proven Business. Scalable Success.
//             </p>

//             <p className="text-gray-500 text-xs mt-3">
//               India's growing juice franchise network.
//             </p>

//             {/* 🔥 SOCIAL */}
//             <div className="flex gap-4 mt-4">
//               <a
//                 href="https://instagram.com/farmfreshjuice"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-pink-500"
//               >
//                 <Instagram />
//               </a>

//               <a
//                 href="https://wa.me/917221892189"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-green-500"
//               >
//                 <Phone />
//               </a>
//             </div>
//           </div>

//           {/* 🔥 QUICK LINKS */}
//           <div>
//             <h3 className="font-semibold mb-4">Quick Links</h3>

//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li>
//                 <Link to="/" className="hover:text-white">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about" className="hover:text-white">About</Link>
//               </li>
//               <li>
//                 <Link to="/franchise" className="hover:text-white">Franchise</Link>
//               </li>
//               <li>
//                 <Link to="/gallery" className="hover:text-white">Gallery</Link>
//               </li>
//             </ul>
//           </div>

//           {/* 🔥 LOCATIONS (UPDATED) */}
//           <div>
//             <h3 className="font-semibold mb-4">Our Locations</h3>

//             <ul className="space-y-3 text-gray-400 text-sm">

//               {/* ARMUR */}
//               <li>
//                 <a
//                   href="https://www.google.com/maps/place/Farm+Fresh+Juice/@18.7928806,78.3201134,17z"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 hover:text-green-400 transition"
//                 >
//                   <MapPin size={14} />
//                   Armur
//                 </a>
//               </li>

//               {/* CHEVELLA (TEA TIME) */}
//               <li>
//                 <a
//                   href="https://www.google.com/maps/search/?api=1&query=Chevella+Telangana"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 hover:text-green-400 transition"
//                 >
//                   <MapPin size={14} />
//                   Chevella 
//                 </a>
//               </li>

//               {/* KOMPALLY */}
//               <li>
//                 <a
//                   href="https://www.google.com/maps/place/Farm+Fresh+Juice/@17.5149188,78.4781175,17z"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 hover:text-green-400 transition"
//                 >
//                   <MapPin size={14} />
//                   Kompally
//                 </a>
//               </li>

//               {/* PATANCHERUVU */}
//               <li>
//                 <a
//                   href="https://www.google.com/maps/place/Farm+Fresh+Juice/@17.5541682,78.2578377,17z"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 hover:text-green-400 transition"
//                 >
//                   <MapPin size={14} />
//                   Patancheruvu
//                 </a>
//               </li>

//             </ul>
//           </div>

//           {/* 🔥 CONTACT */}
//           <div>
//             <h3 className="font-semibold mb-4">Contact</h3>

//             <ul className="space-y-3 text-gray-400 text-sm">

//               <li>
//                 <a
//                   href="mailto:franchise@fruitasty.in"
//                   className="flex items-center gap-2 hover:text-white"
//                 >
//                   <Mail size={16} />
//                   franchise@fruitasty.in
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="tel:+917221892189"
//                   className="flex items-center gap-2 hover:text-green-400"
//                 >
//                   <Phone size={16} />
//                   +91 72218 92189
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="https://wa.me/917221892189"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 hover:text-green-500"
//                 >
//                   <Phone size={16} />
//                   WhatsApp Chat
//                 </a>
//               </li>

//             </ul>
//           </div>

//         </div>

//         {/* 🔥 BOTTOM */}
//         <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
//           © 2026 FarmFresh Juice India • All Rights Reserved
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;
