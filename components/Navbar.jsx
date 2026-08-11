import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Acquadon Waterworks Logo" />
        </Link>
      </div>
      
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        
        {/* PRODUCTS DROPDOWN */}
        <li className="dropdown-container">
          <Link to="/products">PRODUCTS</Link>
          <ul className="dropdown-menu">
            <li><Link to="/products/tanks">STORAGE TANKS PRESSURE TANKS AND BLADDERS</Link></li>
            <li><Link to="/products/water-pumps">WATER PUMPS</Link></li>
            <li><Link to="/products/pipes-fittings">PIPES AND FITTINGS</Link></li>
            <li><Link to="/products/filters">WATER FILTERS</Link></li>
            <li><Link to="/products/pool-equipment">SWIMMING POOL CHEMICALS AND CLEANING EQUIPMENT</Link></li>
            <li><Link to="/products/refilling-consumables">WATER REFILLING STATION CONSUMABLES</Link></li>
          </ul>
        </li>

        {/* --- SERVICES DROPDOWN --- */}
        <li className="dropdown-container">
          <Link to="/" className="nav-link">SERVICES</Link>
          <ul className="dropdown-menu">
            <li><Link to="/services/storage-tanks">STORAGE TANKS, BOOSTER PUMP SYSTEM INSTALLATIONS AND MAINTENANCE</Link></li>
            <li><Link to="/services/water-filter">WATER FILTER AND TREATMENT SYSTEM INSTALLATIONS AND MAINTENANCE</Link></li>
            <li><Link to="/services/swimming-pool">SWIMMING POOL DESIGN AND BUILD</Link></li>
            <li><Link to="/services/consultation-design">CONSULTATION & DESIGN</Link></li>
          </ul>
        </li>
        {/* --- PROJECTS DROPDOWN --- */}
        <li className="dropdown-container">
          <Link to="/" className="nav-link">PROJECTS</Link>
          <ul className="dropdown-menu">
            <li><Link to="/projects/residential">RESIDENTIAL</Link></li>
            <li><Link to="/projects/commercial">COMMERCIAL</Link></li>
            <li><Link to="/projects/industrial">INDUSTRIAL</Link></li>
            <li><Link to="/projects/swimming-pool">SWIMMING POOLS</Link></li>
          </ul>
        </li>

        <li><Link to="/contact">Contact us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;