import React from 'react';

const OnboardRestaurant: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 pt-32">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Grow Your Restaurant with Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of restaurants that are growing their business with FoodieHeaven. 
              Reach new customers, increase your sales, and manage your orders efficiently.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="bg-orange-500 p-2 rounded-full mr-4">
                  <span className="text-white">✓</span>
                </div>
                <span className="text-gray-700">Reach thousands of new customers</span>
              </li>
              <li className="flex items-center">
                <div className="bg-orange-500 p-2 rounded-full mr-4">
                  <span className="text-white">✓</span>
                </div>
                <span className="text-gray-700">Easy order management</span>
              </li>
              <li className="flex items-center">
                <div className="bg-orange-500 p-2 rounded-full mr-4">
                  <span className="text-white">✓</span>
                </div>
                <span className="text-gray-700">Marketing and promotion support</span>
              </li>
            </ul>
            <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-2xl shadow-lg hover:bg-orange-600 transition-all">
              Get Started Today
            </button>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <button type="submit" className="w-full px-6 py-4 bg-orange-500 text-white font-bold rounded-2xl shadow-lg hover:bg-orange-600 transition-all">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardRestaurant;