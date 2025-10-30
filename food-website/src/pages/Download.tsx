import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Download: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 pt-32">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Download Our App</h1>
            <p className="text-xl text-gray-600 mb-8">
              Get the best food delivery experience with our mobile app. Enjoy exclusive offers, track your order in real-time, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-6 py-4 bg-gray-800 text-white rounded-2xl shadow-lg hover:bg-gray-900 transition-all">
                <FaGooglePlay className="text-2xl mr-3" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </button>
              <button className="flex items-center justify-center px-6 py-4 bg-gray-800 text-white rounded-2xl shadow-lg hover:bg-gray-900 transition-all">
                <FaApple className="text-2xl mr-3" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xs">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">FoodieHeaven</h3>
                  <p className="text-orange-100">Delicious food delivered</p>
                </div>
                <div className="mt-6 space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center p-3 bg-orange-50 rounded-xl">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {item}
                      </div>
                      <div className="h-3 bg-gray-300 rounded-full flex-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;