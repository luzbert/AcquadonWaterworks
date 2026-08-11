import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'; 
//import placeholderImg from '../assets/logo.png'; 
import swimmingPoolImg from '../assets/projswimmingpool.jpg';
import Servicepool1 from '../assets/Sersiwimmingpool.jpg';

function ProjectSwimmingPool() {
  // Mga bagong detalye para sa Swimming Pool Projects
  const swimmingPoolProjects = [
    {
      id: 1,
      name: "Luxury Resort  Pool",
      
      image: Servicepool1, 
    },
    {
      id: 2,
      name: "Private Luxury Pool Resort",
      
      image: Servicepool1,
    },
      {
      id: 3,
      name: "Private Villa Pool",
      image: swimmingPoolImg 
    }
  ];

  return (
    <div className="category-container">
      <div className="category-header">
        <h1>Swimming Pool Projects</h1>
        <p>Explore our premium engineering and plumbing installations for commercial, residential, and competition swimming pools.</p>
      </div>

      <div className="overlay-grid">
        {swimmingPoolProjects.map((project) => (
          
          /* BAGONG OVERLAY CARD */
          <div key={`pool-${project.id}`} className="overlay-card">
            
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
        {/* Itinama ang link papuntang root o home */}
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    </div>
  );
}

export default ProjectSwimmingPool;