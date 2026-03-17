import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

// ✅ IMPORT IMAGES
import apple from '../assets/juices/Apple.png';
import avocado from '../assets/juices/Avocado.png';
import banana from '../assets/juices/Banana.png';
import beetroot from '../assets/juices/Betroot.png';
import blackgrapes from '../assets/juices/BlackGrapes.png';
import carrot from '../assets/juices/carrot.png';
import dragon from '../assets/juices/Dargeon.png';
import kiwi from '../assets/juices/Kiwi.png';
import orange from '../assets/juices/orange.png';
import watermelon from '../assets/juices/watermelon.png';

function Gallery() {
  const juices = [
    {
      name: 'Apple Juice',
      image: apple,
      description: 'Naturally sweet apple juice',
      benefits: ['Heart Health', 'Fiber', 'Energy'],
    },
    {
      name: 'Avocado Shake',
      image: avocado,
      description: 'Creamy and healthy avocado drink',
      benefits: ['Healthy Fats', 'Skin Glow', 'Energy'],
    },
    {
      name: 'Banana Shake',
      image: banana,
      description: 'Rich banana energy drink',
      benefits: ['Energy Boost', 'Muscle Strength', 'Potassium'],
    },
    {
      name: 'Beetroot Juice',
      image: beetroot,
      description: 'Power-packed red detox juice',
      benefits: ['Blood Boost', 'Detox', 'Stamina'],
    },
    {
      name: 'Black Grapes Juice',
      image: blackgrapes,
      description: 'Sweet antioxidant-rich juice',
      benefits: ['Heart Health', 'Immunity', 'Skin Care'],
    },
    {
      name: 'Carrot Juice',
      image: carrot,
      description: 'Vitamin A rich juice',
      benefits: ['Eye Health', 'Skin Glow', 'Immunity'],
    },
    {
      name: 'Dragon Fruit Juice',
      image: dragon,
      description: 'Exotic and refreshing fruit drink',
      benefits: ['Antioxidants', 'Immunity', 'Hydration'],
    },
    {
      name: 'Kiwi Juice',
      image: kiwi,
      description: 'Tangy and vitamin-rich juice',
      benefits: ['Vitamin C', 'Digestion', 'Energy'],
    },
    {
      name: 'Orange Juice',
      image: orange,
      description: 'Classic citrus refreshment',
      benefits: ['Immunity Boost', 'Energy', 'Vitamin C'],
    },
    {
      name: 'Watermelon Juice',
      image: watermelon,
      description: 'Cool and hydrating summer drink',
      benefits: ['Hydration', 'Cooling', 'Low Calories'],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4">

        {/* 🔥 TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-green-700">
            Our Juice Collection
          </h1>
          <p className="text-gray-600 text-lg">
            Fresh, healthy and delicious juices made daily 🍹
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {juices.map((juice, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              
              {/* IMAGE */}
              <img
                src={juice.image}
                alt={juice.name}
                className="h-56 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {juice.name}
                </h3>

                <p className="text-gray-600 mb-3">
                  {juice.description}
                </p>

                <div className="space-y-1">
                  {juice.benefits.map((b, i) => (
                    <p key={i} className="text-sm text-green-600">
                      ✔ {b}
                    </p>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* 🔥 CTA */}
        <div className="mt-20 text-center">
          <div className="bg-green-600 text-white p-10 rounded-2xl max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Want to Start Your Juice Business?
            </h2>
            <p className="mb-6">
              Join Farm Fresh Juice Franchise and earn daily income 🚀
            </p>
            <a
              href="/franchise"
              className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold"
            >
              Apply Now
            </a>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}

export default Gallery;