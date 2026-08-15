import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'; // GAGAMITIN NA NATIN ANG UNIFIED CATEGORY CSS
import placeholderImg from '../assets/logo.png'; // LALAGYAN NG PICTURES ANG SERVICES

function ServicesPage() {
  // In-update ang listahan para tumugma sa format ng Category page (may image na)
  const servicesList = [
    {
      id: 1,
      name: "Storage tanks, booster pump system installations and maintenance",
      description: "Customized setup and deployment of advanced water filtration, purification, and refilling station systems tailored to your technical needs.",
      image: placeholderImg,
    },
    {
      id: 2,
      name: "Water filter and treatment system installations and maintenance",
      description: "Routine check-ups, calibration, and optimization of water pumps and pressure systems to ensure constant and stable water supply.",
      image: placeholderImg,
    },
    {
      id: 3,
      name: "Swimming pool design and build",
      description: "Immediate and reliable diagnostic troubleshooting to fix pipe leaks, bladder malfunctions, and equipment wear-and-tear before they cause downtime.",
      image: placeholderImg,
    },
    {
      id: 4,
      name: "Consultation & Design",
      description: "Expert hydraulic layout plotting and architectural design for residential subdivisions, commercial hubs, and industrial plumbing blueprints.",
      image: placeholderImg,
    }
  ];

  return (
    <div className="category-container">
      
      <div className="category-header">
        <h1>OUR FULL SERVICES</h1>
        <p>Professional Water Solutions tailored for residential, commercial, and industrial needs.</p>
      </div>

      {/* GINAMIT NA NATIN ANG BAGONG OVERLAY GRID */}
      <div className="overlay-grid">
        {servicesList.map((service) => (
          
          /* BAGONG OVERLAY CARD */
          <div key={service.id} className="overlay-card">
            
            {/* PICTURE NA SAKOP ANG BUONG CARD */}
            <img src={service.image} alt={service.name} className="overlay-image" />
            
            {/* TEXT NA NAKAPATONG SA PICTURE MAY DARK GRADIENT SHADOW */}
            <div className="overlay-content">
              <h3 className="overlay-title">{service.name}</h3>
              <p className="overlay-desc">{service.description}</p>
              
              {/* INAYOS ANG BUTTON: Malinis na Link button papuntang Contact */}
              <Link to="/contact" className="overlay-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>
                Inquire Now
              </Link>
            </div>
            
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ServicesPage;