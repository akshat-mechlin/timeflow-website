import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Stats from './components/sections/Stats';
import Pricing from './components/sections/Pricing';
import CTA from './components/sections/CTA';
import About from './pages/About';
import StartTrial from './pages/StartTrial';
import Contact from './pages/Contact';
import './App.css';

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Testimonials />
    <Stats />
    <Pricing />
    <CTA />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/start-trial" element={<StartTrial />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;