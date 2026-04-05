
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Droplets, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// ✅ ASSETS
import logo from '../assets/logo.png';
import FloatingFruits from '../components/FloatingFruits';

// ✅ NEW JUICE IMAGES
import avocado from '../assets/juices/Avocado.png';
import apple from '../assets/juices/Apple.png';
import orange from '../assets/juices/Orange.png';

function Home() {
  const features = [
    {
      icon: Leaf,
      title: 'All Natural',
      description: 'No artificial colors or preservatives',
      color: 'text-green-500',
    },
    {
      icon: Heart,
      title: 'Healthy Choice',
      description: 'Packed with vitamins and nutrients',
      color: 'text-red-500',
    },
    {
      icon: Droplets,
      title: 'Pure & Clean',
      description: 'Highest quality standards maintained',
      color: 'text-blue-500',
    },
  ];

  // ✅ UPDATED JUICES WITH IMAGES
  const juices = [
    { name: 'Apple Juice', image: apple },
    { name: 'Orange Juice', image: orange },
    { name: 'Avocado Juice', image: avocado },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden bg-white">

        {/* 🔥 FLOATING BACKGROUND */}
        <FloatingFruits />

        {/* 🔥 HERO */}
        <section className="relative z-20 min-h-[90vh] flex items-center justify-center px-4">
          <div className="max-w-6xl text-center">

            {/* LOGO */}
            <motion.img
              src={logo}
              alt="Farm Fresh Juice"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="h-24 sm:h-28 mx-auto mb-6 drop-shadow-xl"
            />

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Start Your Own Juice Business
              </span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Launch your own franchise under ₹3.99 Lakhs 🚀  
              Proven model • High demand • Daily income
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/franchise"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-green-700 shadow-xl"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/917221892189"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50"
              >
                Talk on WhatsApp
              </a>
            </motion.div>

            {/* TRUST BADGES */}
            <p className="mt-6 text-gray-500 text-sm">
              ✔ Low Investment &nbsp; ✔ High Profit &nbsp; ✔ Easy Setup
            </p>

          </div>
        </section>

        {/* 🔥 FEATURES */}
        <section className="relative z-20 py-20 px-4">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 🔥 PRODUCTS */}
        <section className="relative z-20 py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
              Our Popular Juices
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {juices.map((juice, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center"
                >
                  <img
                    src={juice.image}
                    alt={juice.name}
                    className="w-32 h-32 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    {juice.name}
                  </h3>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 🔥 FINAL CTA */}
        <section className="relative z-20 py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">

            <div className="bg-green-600 text-white p-10 rounded-3xl shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Start Your Business?
              </h2>
              <p className="mb-6 text-green-100">
                Join Farm Fresh Juice and build your own successful franchise.
              </p>

              <Link
                to="/franchise"
                className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold"
              >
                Get Franchise Details
              </Link>
            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}

export default Home;

