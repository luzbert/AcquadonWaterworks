import React from 'react';
import { Link } from 'react-router-dom';
import '../Page/Category.css'; 
import placeholderImg from '../assets/logo.png'; 
import CommercialProject1 from '../assets/Comerfilter.jpg';
import CommercialProject2 from '../assets/ComerBooster.jpg';
import CommercialProject3 from '../assets/ComerEPRWS.jpg';

function ProjectCommercial() {
  const commercialProjects = [
    {
      id: 1,
      name: "Commercial Mall Water Plant",
      image: CommercialProject1,
    },
    {
      id: 2,
      name: "Booster Pump System",
      image: CommercialProject2,
    },
    {
      id: 3,
      name: "Hotel Resort Pool Filtration Setup",
      image: placeholderImg,
    },
    {
      id: 4,
      name: "Emergency Purified Reffiling Water Staion",
      image: CommercialProject3
    }
  ];

  return (
    <div className="category-container">
      <div className="category-header">
        <h1>Commercial Buildings</h1>
        <p>Explore our successfully completed water engineering and plumbing milestones for businesses.</p>
      </div>

      {/* GINAMIT NA NATIN ANG BAGONG OVERLAY GRID */}
      <div className="overlay-grid">
        {commercialProjects.map((project) => (
          
          /* BAGONG OVERLAY CARD */
          <div key={`comm-${project.id}`} className="overlay-card">
            
            {/* PICTURE NA SAKOP ANG BUONG CARD */}
            <img src={project.image} alt={project.name} className="overlay-image" />
            
            {/*text sa loob ng picture */}
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

export default ProjectCommercial;