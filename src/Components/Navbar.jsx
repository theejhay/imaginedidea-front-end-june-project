import React, { useState } from 'react';
import logo from '../assets/images/Logo.png';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Brooklyn Logo" className="logo-img" />
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </button>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Process</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Services</a></li>
        <li><button className="contact-btn">Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;