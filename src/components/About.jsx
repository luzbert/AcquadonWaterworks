import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="modern-about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img 
            src="https://placehold.co/600x700/003f4f/94d2bd?text=Acquadon+Facility" 
            alt="Acquadon Facility" 
            className="main-about-img"
          />
          <div className="experience-badge">
             <span className="badge-icon">💧</span>
            <span className="badge-text">Premium<br/>Quality</span>
          </div>
        </div>

        {/* KANANANG BAHAGI: Text at Kwento ng Kumpanya */}
        <div className="about-text-content">
          <h4 className="about-subtitle">WHO WE ARE</h4>
          <h2 className="about-title">Acquadon Waterworks</h2>
          <h3 className="about-tagline">"PURPOSE ENGINEERED SYSTEM"</h3>
          
          <div className="about-description">
            <p>
              Founded in <strong>January 2021</strong>, Acquadon Waterworks is spearheaded by the father-and-son team of <strong>Engr. Don Paulo M. Dimayuga</strong> and <strong>Mr. Felix S. Dimayuga</strong>. 
            </p>
            <p>
              Together, they boast over 30 years of combined expertise in waterworks, general plumbing installation and maintenance, and comprehensive process plant operations—spanning pre-commissioning, commissioning, shut-downs, and turnarounds. 
            </p>
            <p>
              The duo brings a strong entrepreneurial foundation to the company, having successfully run their family-owned water refilling station for more than five years prior to this venture.
            </p>
          </div>

          {/* MGA HIGHLIGHT BOXES PARA SA INOBASYON */}
          <div className="about-highlights">
            <div className="highlight-box">
              <h4>💡 Engineered Solutions</h4>
              <p>Specialized in process plant operations & efficient system turnarounds.</p>
            </div>
            <div className="highlight-box">
              <h4>⚙️ Proven Experience</h4>
              <p>Rooted in real-world business foundation and expert plumbing maintenance.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;