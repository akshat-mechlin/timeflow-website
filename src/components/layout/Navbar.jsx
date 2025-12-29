import React, { useState, useEffect } from 'react';
import { Clock, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { NAV_LINKS } from '../../utils/constants';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="logo">
          <img 
            src="/logo.svg"
            alt="TimeFlow Logo"
            className="logo-icon"
          />
          <span className="logo-text">TimeFlow</span>
        </a>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {NAV_LINKS.map(link => (


            <a 
              key={link.id} 
              href={link.href}
              onClick={closeMenu}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <div className="nav-buttons">
            <Button variant="secondary" size="small">Sign In</Button>
            <Button variant="primary" size="small">Start Free Trial</Button>
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