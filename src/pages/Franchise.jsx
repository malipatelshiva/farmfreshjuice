import { motion } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp, DollarSign, CheckCircle, Store } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ContactModal from '../components/ContactModal';

function Franchise() {

  const [openModal, setOpenModal] = useState(false);

  const benefits = [
    {
      icon: Store,
      title: 'Proven Model',
      description: 'Successfully running Fruitasty outlets with strong demand.',
    },
    {
      icon: DollarSign,
      title: 'Low Investment',
      description: 'Start your juice business under ₹2.5 Lakhs.',
    },
    {
      icon: TrendingUp,
      title: 'High Profit',
      description: 'Daily income business with strong margins.',
    },
  ];

  const steps = [
    'Submit your enquiry',
    'Get call from our team',
    'Select location',
    'Setup & training',
    'Start earning',
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">

        {/* 🔥 HERO */}
        <section className="py-20 text-center bg-gradient-to-r from-green-500 to-green-700 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Start Your Juice Business
          </h1>
          <p className="text-xl mb-6">
            Investment ₹2.5 Lakhs • Daily Income • High Demand
          </p>

          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
          >
            Apply for Franchise
          </button>
        </section>

        {/* 🔥 BENEFITS */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-4xl font-bold mb-12">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="bg-white p-8 rounded-2xl shadow-lg"
                  >
                    <Icon className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 🔥 STEPS */}
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-4xl font-bold mb-12">
              How It Works
            </h2>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow flex items-center gap-4"
                >
                  <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                    {index + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 🔥 REQUIREMENTS */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl font-bold mb-10">
              Requirements
            </h2>

            <div className="space-y-4">
              {[
                'Small space (kiosk/shop)',
                'Basic investment ₹2.5L',
                'Interest in business',
                'Daily operation management',
              ].map((item, i) => (
                <div key={i} className="flex justify-center gap-2 items-center">
                  <CheckCircle className="text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 🔥 FINAL CTA */}
        <section className="py-20 text-center bg-green-600 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="mb-6">
            Limited franchise slots available 🚀
          </p>

          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold"
          >
            Apply Now
          </button>
        </section>

        {/* 🔥 MODAL */}
        <ContactModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />

      </div>
    </PageTransition>
  );
}

export default Franchise;