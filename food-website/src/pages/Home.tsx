import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaShippingFast, FaChild, FaUtensils, FaRocket } from 'react-icons/fa';
import { GiIndiaGate, GiRiceCooker, GiKnifeFork, GiHotSpices } from 'react-icons/gi';

// Using reliable image sources with proper dimensions
const indianFoodImages = {
  biryani: "https://images.unsplash.com/photo-1563379091339-03246963d96f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&w=400&h=300&fit=crop",
  dosa: "https://images.unsplash.com/photo-1631452180519-c014fe7622e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D&w=400&h=300&fit=crop",
  butterChicken: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&w=400&h=300&fit=crop",
  streetFood: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=400&h=300&fit=crop",
  appMockup: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBhcHB8ZW58MHx8MHx8fDA%3D&w=400&h=600&fit=crop",
  delivery: "https://images.unsplash.com/photo-1540350394557-8d25378f4c15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaXZlcnklMjBib3l8ZW58MHx8MHx8fDA%3D&w=400&h=300&fit=crop",
  samosa: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftb3NhfGVufDB8fDB8fHww&w=400&h=300&fit=crop",
  paneer: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyfGVufDB8fDB8fHww&w=400&h=300&fit=crop"
};

// Fallback images in case the URLs don't work
const fallbackImages = {
  food: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23fed7aa'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23ea580c'%3E🍛 Indian Food%3C/text%3E%3C/svg%3E",
  app: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600' viewBox='0 0 400 600'%3E%3Crect width='400' height='600' fill='%23fef3c7'/%3E%3Crect x='50' y='50' width='300' height='500' rx='20' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%23ffffff'%3E📱 App Screen%3C/text%3E%3C/svg%3E"
};

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

// Image component with error handling
const FoodImage: React.FC<{ src: string; alt: string; className?: string; fallback?: string }> = ({ 
  src, 
  alt, 
  className = "", 
  fallback = fallbackImages.food 
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [loading, setLoading] = React.useState(true);

  const handleError = () => {
    setImgSrc(fallback);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-orange-100 animate-pulse rounded-lg flex items-center justify-center">
          <div className="text-orange-300">Loading...</div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`w-full h-full object-cover ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${className}`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
    </div>
  );
};

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const features: Feature[] = [
    {
      icon: <FaShippingFast className="text-3xl" />,
      title: '30 Minute Delivery',
      description: 'Get your favorite dishes delivered hot and fresh in under 30 minutes across major Indian cities',
      image: indianFoodImages.delivery
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: 'Authentic Indian Cuisine',
      description: 'From street food to fine dining, experience the true taste of India with our curated restaurant partners',
      image: indianFoodImages.biryani
    },
    {
      icon: <FaChild className="text-3xl" />,
      title: 'Family Feasts',
      description: 'Perfect for family dinners, festivals, and celebrations with special thali and combo offers',
      image: indianFoodImages.streetFood
    }
  ];

  const popularCategories = [
    { 
      name: 'North Indian', 
      icon: <GiHotSpices className="text-2xl" />, 
      image: indianFoodImages.butterChicken, 
      items: 'Butter Chicken, Naan, Dal Makhani' 
    },
    { 
      name: 'South Indian', 
      icon: <GiRiceCooker className="text-2xl" />, 
      image: indianFoodImages.dosa, 
      items: 'Dosa, Idli, Vada, Uttapam' 
    },
    { 
      name: 'Street Food', 
      icon: <GiKnifeFork className="text-2xl" />, 
      image: indianFoodImages.samosa, 
      items: 'Pani Puri, Chaat, Samosa, Kachori' 
    },
    { 
      name: 'Vegetarian', 
      icon: <GiIndiaGate className="text-2xl" />, 
      image: indianFoodImages.paneer, 
      items: 'Paneer Dishes, Veg Biryani, Curries' 
    }
  ];

  const cities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata',
    'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-amber-100 to-yellow-100">
      {/* Enhanced Hero Section with Indian Theme */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Indian pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 bg-orange-300 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-red-400 rounded-full"></div>
        </div>
        
        <div className="container mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants} className="relative z-10">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 font-semibold mb-6 border border-orange-200"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <FaStar className="mr-2 text-orange-500" />
                🇮🇳 #1 Food Delivery App in India
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-orange-500">Swad</span> 
                <span className="text-yellow-500"> Anusaar</span>
                <br />
                <span className="text-lg md:text-xl text-gray-600 font-normal">
                  Taste Delivered with Love
                </span>
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                From <span className="font-semibold text-orange-500">buttery North Indian curries</span> to 
                <span className="font-semibold text-yellow-500"> crispy South Indian dosas</span> - experience 
                the diverse flavors of India delivered to your doorstep.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                variants={itemVariants}
              >
                <Link
                  to="/download"
                  className="px-8 py-4 bg-linear-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-lg flex items-center justify-center hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-orange-200"
                >
                  <FaArrowRight className="mr-2" />
                  Download App
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-white text-gray-800 font-bold rounded-2xl shadow-lg flex items-center justify-center border border-orange-200 hover:bg-orange-50 transition-all transform hover:scale-105"
                >
                  <FaUtensils className="mr-2" />
                  Explore Restaurants
                </Link>
              </motion.div>

              {/* Indian Cities */}
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-gray-600 text-sm">Available in:</span>
                {cities.slice(0, 4).map((city) => (
                  <span key={city} className="text-orange-600 bg-orange-100 px-3 py-1 rounded-full text-sm font-medium">
                    {city}
                  </span>
                ))}
                <span className="text-orange-500 text-sm font-semibold">+{cities.length - 4} more</span>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-6 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-orange-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">2L+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">10K+</div>
                  <div className="text-gray-600 text-sm">Restaurants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">50+</div>
                  <div className="text-gray-600 text-sm">Cities</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Image Section with Indian Food */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="relative">
                {/* Main App Mockup */}
                <motion.div
                  className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl border-8 border-white"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FoodImage
                    src={indianFoodImages.appMockup}
                    alt="Swad Anusaar App"
                    className="w-full h-auto rounded-2xl"
                    fallback={fallbackImages.app}
                  />
                </motion.div>

                {/* Floating Indian Food Cards */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-lg z-20 border-2 border-orange-200"
                  animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <FoodImage
                      src={indianFoodImages.biryani}
                      alt="Biryani"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-bold text-sm">Hyderabadi Biryani</div>
                      <div className="text-orange-500 text-xs">₹299</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-lg z-20 border-2 border-yellow-200"
                  animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center space-x-3">
                    <FoodImage
                      src={indianFoodImages.dosa}
                      alt="Dosa"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-bold text-sm">Masala Dosa</div>
                      <div className="text-orange-500 text-xs">₹129</div>
                    </div>
                  </div>
                </motion.div>

                {/* Traditional Indian Decoration */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-linear-to-r from-orange-400 to-yellow-400 text-white p-3 rounded-full shadow-lg z-30"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-lg">🍛</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Popular Indian Cuisines Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Taste of India
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the rich diversity of Indian cuisine from every corner of the country
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCategories.map((category) => (
              <motion.div
                key={category.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-linear-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 text-center transition-all duration-300 group-hover:from-orange-100 group-hover:to-yellow-100 group-hover:shadow-xl border-2 border-transparent group-hover:border-orange-200 h-full">
                  <div className="relative mb-4">
                    <FoodImage
                      src={category.image}
                      alt={category.name}
                      className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -top-2 -right-2 bg-linear-to-r from-orange-500 to-yellow-500 text-white p-2 rounded-full shadow-lg">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.items}
                  </p>
                  <div className="mt-3">
                    <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      Order Now
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with Indian Context */}
      <section className="py-20 bg-linear-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Kyon Choose Karein Swad Anusaar?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Humare khaas features jo aapko pasand aayenge
            </p>
          </motion.div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="flex-1">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FoodImage
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-80 object-cover rounded-3xl shadow-lg border-4 border-white"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-linear-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-2xl shadow-lg">
                      {feature.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-orange-500 mb-4 inline-block p-3 bg-orange-100 rounded-full">
                      {feature.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-yellow-500 mb-4">
                      <FaStar className="fill-current" />
                      <FaStar className="fill-current" />
                      <FaStar className="fill-current" />
                      <FaStar className="fill-current" />
                      <FaStar className="fill-current" />
                      <span className="ml-2 text-gray-600">4.8/5 (2L+ reviews)</span>
                    </div>
                    <motion.button
                      className="px-6 py-3 bg-linear-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Aur Janiye
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Festive Offer Section */}
      <section className="py-16 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 relative overflow-hidden">
        {/* Diwali/ Festival Theme */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-lg font-semibold mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🪔 Special Festival Offer 🪔
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Festival Special!
              <br />
              <span className="text-yellow-200">50% OFF</span> on First Order
            </h2>
            
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Celebrate every festival with delicious food. Get <span className="font-bold text-white">50% discount</span> on your first order + 
              <span className="font-bold text-white"> free delivery</span>!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/download"
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-500 font-bold rounded-2xl shadow-2xl hover:bg-gray-100 transition-all text-lg"
                >
                  <FaRocket className="mr-3" />
                  Download Now - 50% OFF!
                </Link>
              </motion.div>
            </div>

            {/* Indian Payment Methods */}
            <motion.div
              className="flex justify-center gap-6 mt-8 flex-wrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-white text-sm">Accepting:</div>
              <div className="bg-white/20 px-4 py-2 rounded-lg text-white font-semibold text-sm">UPI</div>
              <div className="bg-white/20 px-4 py-2 rounded-lg text-white font-semibold text-sm">Credit Card</div>
              <div className="bg-white/20 px-4 py-2 rounded-lg text-white font-semibold text-sm">Paytm</div>
              <div className="bg-white/20 px-4 py-2 rounded-lg text-white font-semibold text-sm">Cash</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Indian Cities Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Serving Across India
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From Kashmir to Kanyakumari, we deliver happiness to your doorstep
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city) => (
              <motion.div
                key={city}
                className="text-center p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors cursor-pointer border border-orange-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-orange-500 font-semibold">{city}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;