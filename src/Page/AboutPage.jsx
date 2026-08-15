import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css'; 
import placeholderImg from '../assets/logo.png'; 

function AboutPage() {
  const companyDetails = [
    {
      id: 1,
      name: "Our Mission",
      description: "To deliver superior, safe, and sustainable water treatment solutions and engineering services that improve the quality of life and support commercial and industrial growth.",
      image: placeholderImg,
    },
    {
      id: 2,
      name: "Our Vision",
      description: "To be the leading and most trusted waterworks engineering partner in the region, recognized for technical innovation, reliability, and excellent customer service.",
      image: placeholderImg,
    },
    {
      id: 3,
      name: "Core Values",
      description: "Integrity in our engineering, Excellence in our water quality solutions, and Commitment to long-term client satisfaction and safety.",
      image: placeholderImg,
    }
  ];

  return (
    <div className="modern-about-page">
      
      <div className="about-page-header">
        <h1>ABOUT US</h1>
        <p>Learn more about Acquadon Waterworks, our history, and our commitment to clean water solutions.</p>
      </div>

      <div className="about-page-container">
        
        <div className="about-story-section">
          
          <div className="about-image-wrapper">
            <img src={placeholderImg} alt="Acquadon Identity" className="main-about-img" />
            
            <div className="experience-badge">
             <span className="badge-icon">💧</span>
            <span className="badge-text">Premium<br/>Quality</span>
          </div>
        </div>

          <div className="about-text-content">
            <h4 className="about-subtitle">Our Identity</h4>
            <h2 className="about-title">Who We Are</h2>
            <div className="about-description">
              <p>
                <strong>Acquadon Waterworks</strong> is a growing utility and engineering firm built on decades of family expertise. Launched in <strong>January 2021</strong> by the father-and-son tandem of <strong>Engr. Don Paulo M. Dimayuga</strong> and <strong>Mr. Felix S. Dimayuga</strong>, our company leverages over 30 years of combined experience.
              </p>
              <p>
                Our technical background spans across waterworks, plumbing maintenance, and end-to-end process plant operations—from pre-commissioning to turnaround.
              </p>
              <p>
                Our journey began over five years ago with a humble, family-owned water refilling station. Today, we are proud to be expanding our footprint, scaling our operations to meet growing demands while maintaining our commitment to quality. 
              </p>
            </div>
          </div>

        </div>

        <div className="brand-highlights">
          <div className="highlight-box">
            <h4>💧 The Water Droplet</h4>
            <p>Honors water as life’s most basic necessity.</p>
          </div>
          <div className="highlight-box">
            <h4>🤲 The Hand</h4>
            <p>A pledge of care, ensuring the water we provide is always clean and safe.</p>
          </div>
          <div className="highlight-box">
            <h4>⚙️ The Mechanical Gear</h4>
            <p>Stands as the mark of our technical excellence and our purposely engineered, reliable systems.</p>
          </div>
        </div>

        <div className="mvv-section">
          <h2 className="mvv-header-title">Our Guiding Principles</h2>
          <div className="mvv-grid">
            {companyDetails.map((detail) => (
              <div key={detail.id} className="mvv-card">
                <img src={detail.image} alt={detail.name} className="mvv-image" />
                <div className="mvv-content">
                  <h3>{detail.name}</h3>
                  <p>{detail.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="back-btn-container">
          <Link to="/" className="modern-back-button">BACK TO HOME</Link>
        </div>

      </div>
    </div>
  );
}

export default AboutPage;