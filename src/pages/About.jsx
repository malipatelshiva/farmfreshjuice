import { motion } from 'framer-motion';
import { Target, Users, Award, Sprout } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// ✅ IMPORT YOUR REAL IMAGE
import franchise1 from '../assets/juices/Franchise.png';

function About() {

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To deliver fresh juices while creating affordable business opportunities.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Sprout,
      title: 'Sustainability',
      description:
        'We focus on natural ingredients and eco-friendly practices.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Award,
      title: 'Quality First',
      description:
        'Fresh juices with strict hygiene and premium quality.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Users,
      title: 'Community Growth',
      description:
        'Helping new entrepreneurs grow with our franchise model.',
      color: 'bg-pink-100 text-pink-600',
    },
  ];

  const timeline = [
    { year: '2015', event: 'Started Fruitasty café concept' },
    { year: '2017', event: 'Launched first Fruitasty café' },
    { year: '2020', event: 'Expanded into multiple outlets' },
    { year: '2024', event: '5+ successful franchise outlets' },
    { year: '2025', event: 'Introduced ₹3.9 Lakhs model' },
    { year: '2026', event: 'Launched Farm Fresh Juice kiosks' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">

        {/* 🔥 HERO */}
        <section className="text-center py-20 px-6 bg-[#CFF5E7]">
          <h1 className="text-5xl font-bold mb-6">
            About Farm Fresh Juice
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            From a small café idea to a growing franchise brand, our journey is built on passion and opportunity.
          </p>
        </section>

        {/* 🔥 STORY + IMAGE */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Our Journey
              </h2>

              <p className="text-gray-700 mb-4">
                Started in 2015 as Fruitasty café, we focused on fresh juices and customer experience.
              </p>

              <p className="text-gray-700 mb-4">
                Over time, we expanded into multiple outlets and built a strong franchise model.
              </p>

              <p className="text-gray-700">
                Today, Farm Fresh Juice brings a low-investment business opportunity for everyone.
              </p>
            </div>

            {/* 📸 IMAGE */}
            <img
              src={franchise1}
              className="rounded-2xl shadow-lg"
            />

          </div>
        </section>

        {/* 🔥 STATS */}
        <section className="py-20 bg-black text-white text-center">
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

            <div>
              <h3 className="text-4xl font-bold">7+</h3>
              <p>Outlets Running</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">₹3.99L</h3>
              <p>Starting Investment</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">2026</h3>
              <p>New Model Launch</p>
            </div>

          </div>
        </section>

        {/* 🔥 VALUES */}
        <section className="py-20 px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <div key={i} className="card">
                <value.icon className={`w-10 h-10 ${value.color} p-2 rounded-lg mb-4`} />
                <h3 className="font-bold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔥 TIMELINE */}
        <section className="py-20 px-6 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Growth Journey
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="card flex justify-between">
                <span className="font-bold text-green-600">{item.year}</span>
                <span>{item.event}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 🔥 CTA */}
        <section className="text-center py-20 px-6">
          <div className="bg-black text-white p-10 rounded-3xl max-w-3xl mx-auto">

            <h2 className="text-3xl font-bold mb-4">
              Become a Franchise Owner 🚀
            </h2>

            <p className="mb-6 text-gray-300">
              Join our growing network and start your business today.
            </p>

            <a
              href="/franchise"
              className="bg-white text-black px-6 py-3 rounded-full"
            >
              Apply Now
            </a>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}

export default About;