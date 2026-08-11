import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Page/Category.css'; 
import placeholderImg from '../assets/logo.png'; 
import ProdPipe from '../assets/ProdPipe.jpg';
import Prodtank from '../assets/ProdTank.jpg';

function ProductsPage() {
  
  // Listahan ng iyong 7 Categories ng website
  const products = [
    {
      id: 1,
      name: "Storage Tanks Pressure Tanks and Bladder Tanks",
      path: "/products/tanks", 
      image: Prodtank,
    },
    {
      id: 2,
      name: "Water Pumps",
      path: "/products/water-pumps", 
      image: placeholderImg,
    },
    {
      id: 3,
      name: "Pipes and Fittings",
      path: "/products/pipes-fittings", 
      image: ProdPipe,
    },
    {
      id: 4,
      name: "Water Filters",
      path: "/products/filters", 
      image: placeholderImg,
    },
    {
      id: 5,
      name: "Swimming Pool Equipment",
      path: "/products/pool-equipment", 
      image: placeholderImg,
    },
    {
      id: 6,
      name: "Refilling Station Consumables",
      path: "/products/refilling-consumables", 
      image: placeholderImg,
    },
  ];

  return (
    <div className="category-container">
      
      <div className="category-header">
        <h1>OUR MAIN PRODUCTS</h1>
        <p>Explore our main categories of advanced water treatment solutions and equipment.</p>
      </div>

      {/* GINAMIT NA NATIN ANG BAGONG OVERLAY GRID */}
      <div className="overlay-grid">
        {products.map(product => (
          
          /* BAGONG OVERLAY CARD */
          <div key={product.id} className="overlay-card">
            
            {/* PICTURE NA SAKOP ANG BUONG CARD */}
            <img src={product.image} alt={product.name} className="overlay-image" />
            
            {/* TEXT NA NAKAPATONG SA PICTURE NA MAY DARK GRADIENT SHADOW */}
            <div className="overlay-content">
              <h3 className="overlay-title">{product.name}</h3>
              <p className="overlay-desc">{product.description}</p>
              
              {/* BUTTON NA DIREKTANG PUPUNTA SA SPECIFIC CATEGORY PAGE */}
              <Link to={product.path} className="overlay-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>
                View Category
              </Link>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ProductsPage;