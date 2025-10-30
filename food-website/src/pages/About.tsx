import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaHeart, FaRocket } from 'react-icons/fa';

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const stats: Stat[] = [
    { number: '50K+', label: 'Happy Customers', icon: <FaUsers /> },
    { number: '500+', label: 'Restaurant Partners', icon: <FaAward /> },
    { number: '10+', label: 'Cities', icon: <FaRocket /> },
    { number: '98%', label: 'Satisfaction Rate', icon: <FaHeart /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 pt-32">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About FoodieHeaven</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform the food delivery experience, connecting food lovers 
            with the best local restaurants in your city.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-orange-500 text-3xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2020, FoodieHeaven started as a simple idea: make great food 
              accessible to everyone, anytime, anywhere. What began as a small local 
              service has grown into a platform serving thousands of customers daily.
            </p>
            <p className="text-lg text-gray-600">
              Our innovative technology connects food lovers with the best local 
              restaurants, ensuring fast delivery, competitive prices, and exceptional 
              quality with every order.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="bg-orange-100 rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🍕</span>
                </div>
                <p className="font-semibold">Feature {item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          className="bg-white rounded-3xl p-12 text-center shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            To create unforgettable food experiences by connecting people with the best 
            local restaurants through innovative technology, exceptional service, and 
            a passion for great food.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;