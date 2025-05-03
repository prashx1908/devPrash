import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';
import cvFile from './Prashanth_CV.pdf'; // Adjust the path accordingly

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <button className="logo" onClick={scrollToTop}>
        <span>&lt;PG&gt;</span>
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about-me" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li className="cv-link"><a href={cvFile} download="Prashanth_CV.pdf">Download CV</a></li>
      </ul>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Sidebar;