// import { motion } from 'framer-motion';
// import PageTransition from '../components/PageTransition';

// // ✅ IMPORT JUICE IMAGES
// import apple from '../assets/juices/Apple.png';
// import avocado from '../assets/juices/Avocado.png';
// import banana from '../assets/juices/Banana.png';
// import beetroot from '../assets/juices/Betroot.png';
// import blackgrapes from '../assets/juices/BlackGrapes.png';
// import carrot from '../assets/juices/Carrot.png';
// import dragon from '../assets/juices/Dargeon.png';
// import kiwi from '../assets/juices/Kiwi.png';
// import orange from '../assets/juices/Orange.png';
// import watermelon from '../assets/juices/Watermelon.png';

// // ✅ IMPORT REAL FRANCHISE IMAGES
// import franchise1 from '../assets/juices/Franchise.png';
// import franchise2 from '../assets/juices/Franchise1.png';
// import franchise3 from '../assets/juices/Franchise2.png';

// function Gallery() {

//   const juices = [
//     { name: 'Apple Juice', image: apple, desc: 'Fresh & naturally sweet' },
//     { name: 'Avocado Shake', image: avocado, desc: 'Healthy creamy drink' },
//     { name: 'Banana Shake', image: banana, desc: 'Energy boosting shake' },
//     { name: 'Beetroot Juice', image: beetroot, desc: 'Blood boosting juice' },
//     { name: 'Black Grapes', image: blackgrapes, desc: 'Antioxidant rich' },
//     { name: 'Carrot Juice', image: carrot, desc: 'Vitamin A rich' },
//     { name: 'Dragon Fruit', image: dragon, desc: 'Exotic refreshment' },
//     { name: 'Kiwi Juice', image: kiwi, desc: 'Vitamin C boost' },
//     { name: 'Orange Juice', image: orange, desc: 'Classic citrus drink' },
//     { name: 'Watermelon Juice', image: watermelon, desc: 'Cooling & hydrating' },
//   ];

//   return (
//     <PageTransition>
//       <div className="min-h-screen pt-20 px-4 bg-white">

//         {/* 🔥 TITLE */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-green-700 mb-4">
//             Fresh Juice Collection 🍹
//           </h1>
//           <p className="text-gray-600">
//             Real fruits. Real taste. Premium quality juices.
//           </p>
//         </div>

//         {/* 🔥 JUICE GRID */}
//         <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

//           {juices.map((juice, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
//             >
//               <img
//                 src={juice.image}
//                 alt={juice.name}
//                 className="h-56 w-full object-cover"
//               />

//               <div className="p-5">
//                 <h3 className="text-lg font-bold">{juice.name}</h3>
//                 <p className="text-gray-600 text-sm mt-1">{juice.desc}</p>
//               </div>
//             </motion.div>
//           ))}

//         </div>

//         {/* 🔥 REAL FRANCHISE PHOTOS */}
//         <div className="mt-24 text-center">
//           <h2 className="text-4xl font-bold mb-10">
//             Our Real Setups 📸
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {[franchise1, franchise2, franchise3].map((img, i) => (
//               <motion.img
//                 key={i}
//                 src={img}
//                 whileHover={{ scale: 1.05 }}
//                 className="rounded-2xl shadow-xl"
//               />
//             ))}
//           </div>
//         </div>

//         {/* 🔥 CTA */}
//         <div className="mt-24 text-center">
//           <div className="bg-black text-white p-10 rounded-3xl max-w-3xl mx-auto">

//             <h2 className="text-3xl font-bold mb-4">
//               Start Your Own Juice Business 🚀
//             </h2>

//             <p className="mb-6 text-gray-300">
//               Join Farm Fresh Juice Franchise & earn daily income
//             </p>

//             <a
//               href="/franchise"
//               className="bg-white text-black px-6 py-3 rounded-full"
//             >
//               Apply Now
//             </a>

//           </div>
//         </div>

//       </div>
//     </PageTransition>
//   );
// }

// export default Gallery;
