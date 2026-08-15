import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../components/Products.css'; 
import './Category.css'; 

import ResidentialProject1 from '../assets/residenSubdi.jpg';
import Servicepool1 from '../assets/Sersiwimmingpool.jpg';
import Servicefilter1 from '../assets/Sirfilter.jpg';
import ServiceBooster from '../assets/ComerBooster.jpg';
import PoolBluePrint from '../assets/poolBluep.jpg';
import ResiTank from '../assets/ResiTank.jpg';

// Ginawang object para makuha ng useParams() ang tamang service
const serviceData = {
  "storage-tanks": {
    title: "Storage Tanks, Booster Pump System Installations and Maintenance",
    description: "Installation and maintenance of high-quality storage tanks, pressure tanks, and booster pump systems for efficient and reliable water distribution.",
    items: [
      { id: 1, name: "Tank Installation", image: ResidentialProject1 },
      { id: 2, name: "Booster Pump Setup", image: ServiceBooster },
      { id: 3, name: "System Maintenance", image: "https://placehold.co/400x300/005f73/white?text=Maintenance" },
      { id: 4, name: "Pressure Testing", image: "https://placehold.co/400x300/005f73/white?text=Testing" }
    ]
  },
  "water-filter": {
    title: "Water Filter and Treatment System Installations and Maintenance",
    description: "Comprehensive water filtration and treatment solutions to ensure clean, safe, and potable water for residential and commercial use.",
    items: [
      { id: 1, name: "Filtration System", image: Servicefilter1 },
      { id: 2, name: "Filter Replacement", image: ResiTank },
      { id: 3, name: "Water Treatment", image: "https://placehold.co/400x300/0a9396/white?text=Treatment" },
      { id: 4, name: "Quality Checking", image: "https://placehold.co/400x300/0a9396/white?text=Quality+Check" }
    ]
  },
  "swimming-pool": {
    title: "Swimming Pool Design and Build",
    description: "Professional swimming pool construction, from architectural design and plumbing layout to full structural build and elegant finishing.",
    items: [
      { id: 1, name: "Pool Excavation", image: "https://placehold.co/400x300/94d2bd/white?text=Excavation" },
      { id: 2, name: "Plumbing Layout", image: "https://placehold.co/400x300/94d2bd/white?text=Pool+Plumbing" },
      { id: 3, name: "Tile Finishing", image: "https://placehold.co/400x300/94d2bd/white?text=Finishing" },
      { id: 4, name: "Completed Pool", image: Servicepool1 }
    ]
  },
  "consultation-design": {
    title: "Consultation & Design",
    description: "Expert hydraulic layout plotting and architectural design for residential subdivisions, commercial hubs, and industrial plumbing blueprints.",
    items: [
      { id: 1, name: "Site Inspection", image: "https://placehold.co/400x300/e9d8a6/black?text=Site+Inspection" },
      { id: 2, name: "Blueprint Layout", image: PoolBluePrint },
      { id: 3, name: "System Planning", image: "https://placehold.co/400x300/e9d8a6/black?text=System+Planning" },
      { id: 4, name: "Cost Estimation", image: "https://placehold.co/400x300/e9d8a6/black?text=Estimation" }
    ]
  }
};

function ServicesP() {
  const { serviceType } = useParams();
  
  // IDINAGDAG: Kung walang serviceType o mali ang nai-type, didiretso ito sa "storage-tanks" bilang default
  const currentService = serviceData[serviceType] || serviceData["storage-tanks"];

  // Kapag sobrang mali na talaga (fallback kung sakaling kailanganin)
  if (!currentService) {
    return (
      <div className="category-container" style={{ paddingTop: '150px' }}>
        <h2>Service Not Found</h2>
        <p>The service category you are looking for does not exist.</p>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    );
  }

  // Ang mismong page na eksaktong kapareho ng ProductCategory
  return (
    <div className="category-container">
      <div className="category-header">
        <h1>{currentService.title}</h1>
        <p>{currentService.description}</p>
      </div>

      <div className="overlay-grid">
        {currentService.items.map((item) => (
          <div key={item.id} className="overlay-card">
            <img src={item.image} alt={item.name} className="overlay-image" />
        
            <div className="overlay-content">
              <h3 className="overlay-title">{item.name}</h3>
              <Link to="/contact" className="overlay-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>
                Inquire Now
              </Link>
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

export default ServicesP;