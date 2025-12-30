import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleStartTrial = () => {
    navigate('/start-trial');
    closeMenu();
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img 
            src="/logo.svg"
            alt="TimeFlow Logo"
            className="logo-icon"
          />
          <span className="logo-text">TimeFlow</span>
        </Link>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/#features" onClick={closeMenu} className="nav-link">Features</a>
          <a href="/#pricing" onClick={closeMenu} className="nav-link">Pricing</a>
          <Link to="/about" onClick={closeMenu} className="nav-link">About</Link>
          <Link to="/contact" onClick={closeMenu} className="nav-link">Contact</Link>
          <div className="nav-buttons">
            <Button variant="secondary" size="small">Sign In</Button>
            <Button variant="primary" size="small" onClick={handleStartTrial}>
              Start Free Trial
            </Button>
          </div>
        </div>

        <button 
          className="mobile-menu" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;