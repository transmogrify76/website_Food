import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaHamburger, FaArrowRight, FaMotorcycle, FaStar, FaClock,FaChild,  } from 'react-icons/fa';
import { GiHotMeal } from 'react-icons/gi';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const features: Feature[] = [
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Fast Delivery',
      description: 'Get your food delivered in under 30 minutes'
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: 'Top Restaurants',
      description: 'Curated selection of the best local restaurants'
    },
    {
      icon: <FaChild className="text-3xl" />,
      title: 'Secure Payment',
      description: 'Multiple safe payment options'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Delicious Food{' '}
                <span className="text-orange-500">Delivered</span>{' '}
                to Your Door
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-600 mb-8"
                variants={itemVariants}
              >
                Experience the finest cuisine from top restaurants in your city. 
                Fast delivery, amazing discounts, and exclusive deals await you.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Link
                  to="/download"
                  className="px-8 py-4 bg-orange-500 text-white font-bold rounded-2xl shadow-lg flex items-center justify-center hover:bg-orange-600 transition-all"
                >
                  Download App
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-white text-gray-800 font-bold rounded-2xl shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-all"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Food Icons Animation */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  className="p-6 bg-orange-100 rounded-2xl shadow-lg"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FaPizzaSlice className="text-orange-500 text-6xl mx-auto" />
                </motion.div>
                <motion.div
                  className="p-6 bg-orange-100 rounded-2xl shadow-lg mt-12"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <FaHamburger className="text-orange-400 text-6xl mx-auto" />
                </motion.div>
                <motion.div
                  className="p-6 bg-orange-100 rounded-2xl shadow-lg"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  <GiHotMeal className="text-orange-600 text-6xl mx-auto" />
                </motion.div>
                <motion.div
                  className="p-6 bg-orange-100 rounded-2xl shadow-lg mt-12"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                >
                  <FaMotorcycle className="text-blue-500 text-6xl mx-auto" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose FoodieHeaven?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing food delivery with technology that puts you first
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-orange-50 rounded-2xl hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="text-orange-500 mb-4 inline-block p-4 bg-white rounded-full"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience FoodieHeaven?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Download our app today and get $10 off your first order!
            </p>
            <Link
              to="/download"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-500 font-bold rounded-2xl shadow-lg hover:bg-gray-100 transition-all"
            >
              Download Now
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;