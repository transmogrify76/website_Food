import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Download from './pages/Download';
import Careers from './pages/Careers';
import OnboardRestaurant from './pages/OnboardRestaurant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<Download />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/onboard-restaurant" element={<OnboardRestaurant />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;