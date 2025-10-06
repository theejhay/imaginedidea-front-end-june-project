import React from 'react';
import logo from'../assets/images/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Brooklyn Logo" className="logo-img" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Process</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Services</a></li>
        <li>
          <button className="contact-btn">Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;