import { useState, useEffect } from 'react';
import './ImageSlider.css';

// 1. I-IMPORT ANG MGA PICTURES MULA SA ASSETS FOLDER
import proj1 from '../assets/project 1.jpg';
import proj2 from '../assets/project 2.jpg';
import proj3 from '../assets/project 3.jpg';
import proj4 from '../assets/Resitank.jpg';
import proj5 from '../assets/residenSubdi.jpg'


function ImageSlider() {
  
  // 2. GAMITIN YUNG MGA IN-IMPORT NA VARIABLES DITO
  const images = [proj1, proj2, proj3, proj4, proj5,];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Timer for automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Function para sa Left Arrow
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function para sa Right Arrow
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider-container">
      {/* Left Arrow Button */}
      <button className="left-arrow" onClick={goToPrevious}>
        &#10094; 
      </button>

      <img 
        src={images[currentIndex]} 
        alt="Acquadon Slider" 
        className="slider-image" 
      />

      {/* Right Arrow Button */}
      <button className="right-arrow" onClick={goToNext}>
        &#10095; 
      </button>
    </div>
  );
}

export default ImageSlider;