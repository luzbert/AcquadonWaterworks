import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'; 
import placeholderImg from '../assets/logo.png'; 
import IndustrialProject1 from '../assets/indiBulb.jpg';
import IndiTank from '../assets/IndiTank.jpg';

function ProjectIndustrial() {
  const industrialProjects = [
    {
      id: 1,
      name: "Manufacturing Plant RO System",
      image: IndustrialProject1, 
    },
    {
      id: 2,
      name: "Factory Wastewater Treatment",
      image: IndiTank,
    },
    {
      id: 3,
      name: "High-Volume Fluid Transfer",
      image: placeholderImg,
    }
  ];

  return (
    <div className="category-container">
      <div className="category-header">
        <h1>Industrial Facilities</h1>
        <p>Heavy-duty water treatment, wastewater handling, and precise chemical dosing solutions for manufacturing plants.</p>
      </div>

      {/* GINAMIT NA NATIN ANG BAGONG OVERLAY GRID */}
      <div className="overlay-grid">
        {industrialProjects.map((project) => (
          
          /* BAGONG OVERLAY CARD */
          <div key={`ind-${project.id}`} className="overlay-card">
            
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

export default ProjectIndustrial;