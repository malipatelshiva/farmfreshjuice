// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { TrendingUp, DollarSign, CheckCircle, Store } from 'lucide-react';
// import PageTransition from '../components/PageTransition';
// import ContactModal from '../components/ContactModal';

// // ✅ IMPORT REAL IMAGES
// import franchise1 from '../assets/juices/Franchise.png';
// import franchise2 from '../assets/juices/Franchise1.png';
// import franchise3 from '../assets/juices/Franchise2.png';

// function Franchise() {

//   const [openModal, setOpenModal] = useState(false);

//   const benefits = [
//     {
//       icon: Store,
//       title: 'Proven Model',
//       description: 'Successfully running outlets with strong demand.',
//     },
//     {
//       icon: DollarSign,
//       title: 'Low Investment',
//       description: 'Start your business in just ₹3.99 Lakhs.',
//     },
//     {
//       icon: TrendingUp,
//       title: 'High Profit',
//       description: 'Daily income business with strong margins.',
//     },
//   ];

//   const steps = [
//     'Submit your enquiry',
//     'Get call from our team',
//     'Select location',
//     'Setup & training',
//     'Start earning',
//   ];

//   return (
//     <PageTransition>
//       <div className="min-h-screen pt-20">

//         {/* 🔥 HERO */}
//         <section className="text-center py-20 bg-black text-white px-6">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             Start Your Juice Franchise
//           </h1>
//           <p className="text-lg mb-6 text-gray-300">
//             Investment ₹3.99 Lakhs • High Demand • Daily Income
//           </p>

//           <button
//             onClick={() => setOpenModal(true)}
//             className="bg-white text-black px-8 py-4 rounded-full font-semibold"
//           >
//             Apply Now
//           </button>
//         </section>

//         {/* 🔥 BENEFITS */}
//         <section className="py-20 px-6 text-center">
//           <h2 className="text-4xl font-bold mb-12">
//             Why Choose Our Franchise?
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {benefits.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <motion.div
//                   key={i}
//                   whileHover={{ y: -10, scale: 1.05 }}
//                   className="card"
//                 >
//                   <Icon className="w-10 h-10 text-green-600 mx-auto mb-4" />
//                   <h3 className="font-bold text-xl">{item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </section>

//         {/* 📸 REAL PHOTOS */}
//         <section className="py-20 px-6 text-center bg-gray-50">
//           <h2 className="text-4xl font-bold mb-10">Real Franchise Setups</h2>

//           <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {[franchise1, franchise2, franchise3].map((img, i) => (
//               <img key={i} src={img} className="rounded-2xl shadow-lg hover:scale-105 transition" />
//             ))}
//           </div>
//         </section>

//         {/* 📍 LOCATIONS */}
//         <section className="py-20 text-center px-6">
//           <h2 className="text-4xl font-bold mb-6">Our Locations</h2>

//           <div className="flex flex-wrap justify-center gap-4">
//             {["Armur", "Chevella (2 Shops)", "Kompally", "Patancheruvu"].map((loc, i) => (
//               <div key={i} className="px-5 py-2 bg-gray-100 rounded-full shadow">
//                 📍 {loc}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 🔥 STEPS */}
//         <section className="py-20 bg-gray-50 px-6 text-center">
//           <h2 className="text-4xl font-bold mb-12">
//             How It Works
//           </h2>

//           <div className="space-y-6 max-w-3xl mx-auto">
//             {steps.map((step, index) => (
//               <div key={index} className="card flex items-center gap-4">
//                 <div className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full">
//                   {index + 1}
//                 </div>
//                 <p>{step}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 🔥 REQUIREMENTS */}
//         <section className="py-20 px-6 text-center">
//           <h2 className="text-4xl font-bold mb-10">
//             Requirements
//           </h2>

//           <div className="space-y-4">
//             {[
//               'Small space (kiosk/shop)',
//               'Investment ₹3.99 Lakhs',
//               'Interest in business',
//               'Daily operations',
//             ].map((item, i) => (
//               <div key={i} className="flex justify-center gap-2 items-center">
//                 <CheckCircle className="text-green-600" />
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 🔥 FINAL CTA */}
//         <section className="py-20 text-center bg-black text-white">
//           <h2 className="text-3xl font-bold mb-4">
//             Limited Slots Available 🚀
//           </h2>

//           <button
//             onClick={() => setOpenModal(true)}
//             className="bg-white text-black px-8 py-4 rounded-full"
//           >
//             Apply Now
//           </button>
//         </section>

//         {/* 🔥 MODAL */}
//         <ContactModal
//           isOpen={openModal}
//           onClose={() => setOpenModal(false)}
//         />

//       </div>
//     </PageTransition>
//   );
// }

// export default Franchise;
