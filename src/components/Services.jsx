import React from 'react';
import './Services.css';
import placeholderImg from '../assets/logo.png'; 

function Services() {
  return (
    <section id="services" className="modern-services-section">
      <div className="services-container">
        
        <div className="services-split-layout">
          <div className="services-image-wrapper">
            <img 
              src={placeholderImg} 
              alt="Waterworks Services" 
              className="main-services-img"
            />
            
            <div className="service-badge">
              <span className="badge-icon">💧</span>
              <span className="badge-text">Premium<br/>Quality</span>
            </div>
          </div>

          <div className="services-text-content">
            <h4 className="services-subtitle">WHAT WE DO</h4>
            <h2 className="services-title">Our Services</h2>
            <div className="services-description">
              <p>
                Today, our team continues to expand its footprint in waterworks contracting, 
                delivering comprehensive plumbing, water refilling, and water treatment solutions 
                across residential, commercial, and industrial sectors.
              </p>
              <p className="services-highlight-text">
                <strong>Our core operations are focused on:</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="core-operations-grid">
          <div className="operation-box">
            <h4>📦 Operational Supply</h4>
            <p>Providing essential parts and consumables to support the daily operations of water treatment facilities.</p>
          </div>
          
          <div className="operation-box">
            <h4>🔧 Maintenance & Rehab</h4>
            <p>Delivering expert maintenance services, including piping repairs, system rehabilitations, and facility upgrades.</p>
          </div>
          
          <div className="operation-box">
            <h4>🏗️ Comprehensive Installation</h4>
            <p>Executing general plumbing installations, complex piping networks, irrigation systems, and advanced water treatment setups.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;