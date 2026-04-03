import { motion } from 'framer-motion';
import { Target, Users, Award, Sprout } from 'lucide-react';
import PageTransition from '../components/PageTransition';

function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To deliver fresh, nutritious juices while creating affordable business opportunities for everyone.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Sprout,
      title: 'Sustainability',
      description:
        'We focus on natural ingredients, eco-friendly practices, and supporting local fruit vendors.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Award,
      title: 'Quality First',
      description:
        'Every juice is prepared fresh with high-quality fruits and strict hygiene standards.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Users,
      title: 'Community Growth',
      description:
        'We help entrepreneurs grow through our affordable franchise and kiosk models.',
      color: 'bg-pink-100 text-pink-600',
    },
  ];

  const timeline = [
    { year: '2015', event: 'Started planning a café model called Fruitasty' },
    { year: '2017', event: 'Launched Fruitasty café for fresh juice and hangout experience' },
    { year: '2020', event: 'Expanded Fruitasty into multiple café outlets' },
    { year: '2024', event: 'Successfully running 5+ Fruitasty franchise outlets' },
    { year: '2025', event: 'Introduced budget-friendly model under ₹3.9 Lakhs' },
    { year: '2026', event: 'Launched Farm Fresh Juice kiosk model for mass market' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">

        {/* HERO SECTION */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"
            >
              About Us
            </motion.h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From a small café idea to a growing juice brand, our journey is driven by passion, quality, and opportunity.
            </p>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                From Fruitasty Café to Farm Fresh Juice
              </h2>

              <p className="text-lg text-gray-700">
                Our journey began in 2015 with a vision to create a unique café experience
                focused on fresh juices and healthy living. This idea became Fruitasty,
                a place where people could relax, enjoy fresh drinks, and connect.
              </p>

              <p className="text-lg text-gray-700">
                Over time, Fruitasty expanded into 5+ successful franchise outlets.
                Seeing the demand for affordable business models, we introduced a
                budget-friendly setup under ₹3.9 Lakhs to help new entrepreneurs start easily.
              </p>

              <p className="text-lg text-gray-700">
                In 2026, we launched Farm Fresh Juice — a kiosk-based model designed
                to serve fresh juices quickly and reach more customers in high-traffic areas.
              </p>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-400 to-green-600 p-10 rounded-3xl text-white shadow-xl"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-bold">7+</h3>
                  <p>Fruitasty Outlets</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold">₹3.9L</h3>
                  <p>Budget Model</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold">2026</h3>
                  <p>Farm Fresh Launch</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">

            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Our Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className={`${value.color} w-14 h-14 flex items-center justify-center rounded-xl mb-4`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Our Journey
            </h2>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md flex justify-between"
                >
                  <h3 className="font-bold text-green-600">{item.year}</h3>
                  <p className="text-gray-700">{item.event}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}

export default About;