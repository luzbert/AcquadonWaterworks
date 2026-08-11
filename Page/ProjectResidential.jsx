import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'; 
//import placeholderImg from '../assets/logo.png'; 
import ResidentialProject1 from '../assets/residenSubdi.jpg';
import ResiTank from '../assets/ResiTank.jpg';
import ServBooster from '../assets/ServBooster.jpg';
import ResiBooster1 from '../assets/ResiBooster1.jpg';

function ProjectResidential() {
  const residentialProjects = [
    {
      id: 1,
      name: "Subdivision Centralized Water Tank",
      image: ResidentialProject1, 
    },
    {
      id: 2,
      name: "Booster Pumping Station",
      image: ServBooster,
    },
    {
      id: 3,
      name: "House ",
      image: ResiTank,
    },
    {
      id: 4,
    name: "House Booster Pump System",

    image: ResiBooster1,
    } 
  ];

  return (
    <div className="category-container">
      <div className="category-header">
        <h1>Residential Subdivisions</h1>
        <p>Reliable, clean, and continuous water supply systems engineered for housing developments and communities.</p>
      </div>

      {/* GINAMIT NATIN ANG BAGONG OVERLAY GRID */}
      <div className="overlay-grid">
        {residentialProjects.map((project) => (
          
          /* BAGONG OVERLAY CARD */
          <div key={`res-${project.id}`} className="overlay-card">
            
            {/* PICTURE NA SAKOP ANG BUONG CARD */}
            <img src={project.image} alt={project.name} className="overlay-image" />
            
            {/* TEXT NA NAKAPATONG SA PICTURE */}
            <div className="overlay-content">
              <h3 className="overlay-title">{project.name}</h3>
              <p className="overlay-desc">{project.description}</p>
            </div>

          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px' }}>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    </div>
  );
}

export default ProjectResidential;