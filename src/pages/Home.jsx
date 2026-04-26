// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Leaf, Heart, Droplets } from 'lucide-react';
// import PageTransition from '../components/PageTransition';
// import FloatingFruits from '../components/FloatingFruits';
// import { useRef } from 'react';

// // ✅ IMPORT IMAGES
// import franchise1 from '../assets/juices/Franchise.png';
// import franchise2 from '../assets/juices/Franchise1.png';
// import franchise3 from '../assets/juices/Franchise2.png';
// import qr from '../assets/juices/review-qr.png';

// // ✅ IMPORT LOGO
// import logo from '../assets/logo.png';

// // 🔥 ANIMATIONS
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// };

// function Home() {

//   const mapRef = useRef(null);

//   const changeMap = (location) => {
//     if (!mapRef.current) return;

//     const urls = {
//       armur: "https://www.google.com/maps?q=Armur,Telangana&output=embed",
//       chevella: "https://www.google.com/maps?q=Chevella,Telangana&output=embed",
//       kompally: "https://www.google.com/maps?q=Kompally,Hyderabad&output=embed",
//       patancheruvu: "https://www.google.com/maps?q=Patancheruvu,Hyderabad&output=embed",
//     };

//     mapRef.current.src = urls[location];
//   };

//   const features = [
//     {
//       icon: Leaf,
//       title: 'High Demand Market',
//       description: 'Juice business is growing fast with health trends',
//       color: 'text-green-500',
//     },
//     {
//       icon: Heart,
//       title: 'Low Investment',
//       description: 'Start with minimal investment and quick returns',
//       color: 'text-red-500',
//     },
//     {
//       icon: Droplets,
//       title: 'Easy Operations',
//       description: 'Simple process, no complex skills required',
//       color: 'text-blue-500',
//     },
//   ];

//   return (
//     <PageTransition>
//       <div className="min-h-screen pt-20 bg-white">

//         <FloatingFruits />

//         {/* 🔥 HERO */}
//         <section className="min-h-screen flex items-center justify-center px-6 bg-[#CFF5E7] text-center">
//           <div>

//             {/* 🔥 LOGO */}
//             <motion.img
//               src={logo}
//               alt="Farm Fresh Juice"
//               className="w-32 mx-auto mb-6"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//             />

//             {/* 🔥 TITLE */}
//             <motion.h1
//               variants={fadeUp}
//               initial="hidden"
//               animate="show"
//               className="text-5xl md:text-7xl font-bold"
//             >
//               Build Your Own Juice Business
//               <span className="block text-green-700">In ₹3.99 Lakhs</span>
//             </motion.h1>

//             <p className="mt-6 text-lg text-gray-700">
//               Complete setup, training, and support to start earning from day one.
//             </p>

//             <div className="flex gap-4 justify-center mt-8 flex-wrap">
//               <Link to="/franchise" className="btn-primary">
//                 Apply Now
//               </Link>

//               <a href="https://wa.me/917221892189" className="btn-secondary">
//                 WhatsApp
//               </a>
//             </div>

//           </div>
//         </section>

//         {/* 💰 INVESTMENT */}
//         <section className="text-center py-20">
//           <h2 className="text-4xl font-bold mb-10">Investment Overview</h2>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               { title: "Total Investment", value: "₹3.99 Lakhs" },
//               { title: "Setup Time", value: "7 Days" },
//               { title: "Support", value: "Full Training" },
//             ].map((item, i) => (
//               <div key={i} className="card">
//                 <h3 className="text-gray-500">{item.title}</h3>
//                 <p className="text-2xl font-bold">{item.value}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 🔥 FEATURES */}
//         <section className="py-20 text-center">
//           <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {features.map((f, i) => (
//               <div key={i} className="card">
//                 <f.icon className={`w-10 h-10 mx-auto ${f.color}`} />
//                 <h3 className="font-bold mt-3">{f.title}</h3>
//                 <p className="text-gray-600">{f.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 📸 PHOTOS */}
//         <section className="py-20 text-center">
//           <h2 className="text-4xl font-bold mb-10">Real Franchise Setups</h2>

//           <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {[franchise1, franchise2, franchise3].map((img, i) => (
//               <img key={i} src={img} className="rounded-2xl shadow-lg" />
//             ))}
//           </div>
//         </section>

//         {/* 📍 MAP */}
//         <section className="bg-gray-100 py-20 text-center px-6">
//           <h2 className="text-4xl font-bold mb-6">Our Locations</h2>

//           <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
//             <iframe
//               ref={mapRef}
//               src="https://www.google.com/maps?q=Armur,Telangana&output=embed"
//               className="w-full h-[400px]"
//             ></iframe>
//           </div>

//           <div className="flex flex-wrap justify-center gap-4 mt-6">
//             <button onClick={() => changeMap("armur")} className="btn-secondary">Armur</button>
//             <button onClick={() => changeMap("chevella")} className="btn-secondary">Chevella</button>
//             <button onClick={() => changeMap("kompally")} className="btn-secondary">Kompally</button>
//             <button onClick={() => changeMap("patancheruvu")} className="btn-secondary">Patancheruvu</button>
//           </div>
//         </section>

//         {/* 📱 QR */}
//         <section className="py-20 text-center bg-green-50">
//           <h2 className="text-3xl font-bold mb-4">Scan & Review Us ⭐</h2>
//           <img src={qr} className="w-40 mx-auto shadow-lg rounded-lg" />
//         </section>

//         {/* 🚀 CTA */}
//         <section className="py-20 text-center">
//           <div className="bg-black text-white p-10 rounded-3xl max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold mb-4">Start Your Franchise Today 🚀</h2>
//             <Link to="/franchise" className="bg-white text-black px-6 py-3 rounded-full">
//               Apply Now
//             </Link>
//           </div>
//         </section>

//       </div>
//     </PageTransition>
//   );
// }

// export default Home;
