import React from 'react';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <FaPizzaSlice className="text-2xl text-orange-500" />
              <span className="text-xl font-bold">FoodieHeaven</span>
            </div>
            <p className="text-gray-400">
              Delivering happiness through great food and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-orange-500 transition-colors">
                Contact
              </Link>
              <Link to="/download" className="block text-gray-400 hover:text-orange-500 transition-colors">
                Download App
              </Link>
            </div>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-bold mb-4">For Business</h3>
            <div className="space-y-2">
              <Link to="/onboard-restaurant" className="block text-gray-400 hover:text-orange-500 transition-colors">
                Add Restaurant
              </Link>
              <Link to="/careers" className="block text-gray-400 hover:text-orange-500 transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FoodieHeaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;