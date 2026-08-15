import './Projects.css';
import CommercialProject3 from '../assets/ComerEPRWS.jpg';
function Projects() {
  // Listahan ng mga naging proyekto o research innovations
  const projectList = [
    {
      id: 1,
      title: "Emergency Purified Reffiling Water Staion",
      category: "System Innovation",
      description: "An advanced system utilizing the Random Forest Algorithm for forecasting, integrated with digital payments.",
      img: CommercialProject3
    },
    {
      id: 2,
      title: "Urban Water Distribution",
      category: "Infrastructure",
      description: "Optimizing urban water networks and resource sustainability through the Divide and Conquer algorithm.",
      img: "https://placehold.co/400x300/0a9396/white?text=Urban+Water+Distribution"
    },
    {
      id: 3,
      title: "Community Filtration Deployment",
      category: "Public Health",
      description: "Installation of state-of-the-art filtration facilities for accessible and clean drinking water in local communities.",
      img: "https://placehold.co/400x300/94d2bd/white?text=Filtration+Facility"
    },
     {
      id: 4,
      title: "Community Filtration Deployment",
      category: "Public Health",
      description: "Installation of state-of-the-art filtration facilities for accessible and clean drinking water in local communities.",
      img: "https://placehold.co/400x300/94d2bd/white?text=Filtration+Facility"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Our Projects</h2>

      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.img} alt={project.title} className="project-img" />
            
            <div className="project-overlay">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;