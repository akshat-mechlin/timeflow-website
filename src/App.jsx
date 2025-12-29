import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Stats from './components/sections/Stats';
import Pricing from './components/sections/Pricing';
import CTA from './components/sections/CTA';
import Testimonials from './components/sections/Testimonials';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Pricing />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;