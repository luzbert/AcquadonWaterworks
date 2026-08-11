import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="modern-footer" id="contact">
      <div className="footer-container">
        
        {/* COLUMN 1: MAIN OFFICE & TELEPHONE */}
        <div className="footer-col">
          <h4 className="footer-title">CONTACT US</h4>

          <div className="footer-item">
            <strong>📍 MAIN OFFICE</strong>
            <p>Daang Marinig<br/>Cabuyao City, Laguna 4025</p>
          </div>
          
          <div className="footer-item">
            <strong>📞 TELEPHONE</strong>
            <p>
              {/* Ginawa nating clickable at animated ang mga numbers */}
              <a href="tel:+63778549865" className="animated-link">(63+) 77-854-9865</a><br/>
              <a href="tel:+63778550368" className="animated-link">(63+) 77-855-0368</a>
            </p>
          </div>
        </div>

        {/* COLUMN 2: FACEBOOK & EMAIL */}
        <div className="footer-col">
          <h4 className="footer-title">CONNECT WITH US</h4>
          
          <div className="footer-item">
            <strong>👍 LIKE OUR PAGE</strong>
            <p>
              <a href="https://www.facebook.com/AcquadonWaterworks" target="_blank" rel="noopener noreferrer" className="animated-link">
                www.facebook.com/AcquadonWaterworks
              </a>
            </p>
          </div>
          
          <div className="footer-item">
            <strong>✉️ EMAIL US AT:</strong>
            <p>
              WATER TREATMENT:<br/>
              <a href="mailto:acquadonwaterworks@gmail.com" className="animated-link">acquadonwaterworks@gmail.com</a>
            </p>
          </div>
        </div>

      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Acquadon Waterworks. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;