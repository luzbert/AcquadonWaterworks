import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Category.css'; 
import placeholderImg from '../assets/logo.png'; 
import ProdGallon from '../assets/ProdGallon.jpg';
import Prodtank from '../assets/Prodtank.jpg';
import Prodbooster from '../assets/Prodbooster.jpg';
import ProdPipe from '../assets/ProdPipe.jpg';
import ProdDPump from '../assets/ProdDPump.jpg';
import Prodpump from '../assets/Prodpump.jpg';

const categoryData = {
  "tanks": {
    title: "Storage Tanks Pressure Tanks and Bladders",
    description: "Premium water storage solutions, heavy-duty pressure vessels, and high-elasticity bladders.",
    items: [
      { id: 1, name: "Stainless Steel Overhead Tank",image: Prodtank },
      { id: 2, name: "Pre-charged Pressure Tank", image: placeholderImg },
      { id: 3, name: "Replacement Tank Bladder", image: placeholderImg },
      { id: 4, name: "FRP Water Vessel", image: placeholderImg }
    ]
  },
  "water-pumps": {
    title: "Water Pumps",
    description: "High-performance pumps built for water extraction, boosting, and fluid transfer.",
    items: [
      { id: 1, name: "Deep Well Pump", image: ProdDPump },
      { id: 2, name: "Shallow Pump",  image:Prodpump },
      { id: 3, name: "Automatic Booster Pump",  image: placeholderImg },
      { id: 4, name: "Booster Pump",  image: Prodbooster }
    ]
  },
  "pipes-fittings": {
    title: "Pipes and Fittings",
    description: "Industrial-grade plumbing pipes, connectors, and control valves for zero-leak installations.",
    items: [
      { id: 1, name: "PPR Hot and Cold Pipes", image: ProdPipe },
      { id: 2, name: "PVC Heavy Duty Pipes",  image: placeholderImg },
      { id: 3, name: "Brass Ball Valves", image: placeholderImg },
      { id: 4, name: "PPR Elbows & Couplers", image: placeholderImg }
    ]
  },
  "filters": {
    title: "Water Filters",
    description: "Advanced filtration systems and multi-media components to eradicate water impurities.",
    items: [
      { id: 1, name: "Activated Carbon Media", image: placeholderImg },
      { id: 2, name: "Silica Sand Media",  image: placeholderImg },
      { id: 3, name: "Water Softener Resin", image: placeholderImg },
      { id: 4, name: "Multimedia Filtration Vessel",image: placeholderImg }
    ]
  },
  "pool-equipment": {
    title: "Swimming Pool Chemicals and Cleaning Equipment",
    description: "Everything you need to maintain crystal-clear, safe, and balanced swimming pool waters.",
    items: [
      { id: 1, name: "Premium Chlorine Granules 70%", image: placeholderImg },
      { id: 2, name: "Heavy Duty Pool Leaf Skimmer", image: placeholderImg },
      { id: 3, name: "High-Flow Pool Pump & Filter", image: placeholderImg },
      { id: 4, name: "Pool Algaecide Treatment",  image: placeholderImg }
    ]
  },
  "refilling-consumables": {
    title: "Water Refilling Station Consumables",
    description: "High-grade daily essentials, filters, and sealing materials for refilling business operations.",
    items: [
      { id: 1, name: "Slim Sediment Filter Cartridge", image: placeholderImg },
      { id: 2, name: "CTO Carbon Block Filter", image: placeholderImg },
      { id: 3, name: "Shrinkable Cap Seals", image: placeholderImg },
      {id: 4, name: "Water Gallon", image: ProdGallon }
    ]
  }
};

function ProductCategory() {
  const { categoryType } = useParams();
  const currentCategory = categoryData[categoryType];

  if (!currentCategory) {
    return (
      <div className="category-container" style={{ paddingTop: '150px' }}>
        <h2>Category Not Found</h2>
        <p>The product category you are looking for does not exist.</p>
        <Link to="/products" className="back-button">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="category-container">
      <div className="category-header">
        <h1>{currentCategory.title}</h1>
        <p>{currentCategory.description}</p>
      </div>

      <div className="overlay-grid">
        {currentCategory.items.map((item) => (
          
          <div key={item.id} className="overlay-card">
            <img src={item.image} alt={item.name} className="overlay-image" />
        
            <div className="overlay-content">
              <h3 className="overlay-title">{item.name}</h3>
              <p className="overlay-desc">{item.description}</p>
              <Link to="/contact" className="overlay-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>
                Inquire Now
              </Link>
            </div>

          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px' }}>
        <Link to="/products" className="back-button">Back to Products</Link>
      </div>
    </div>
  );
}

export default ProductCategory;