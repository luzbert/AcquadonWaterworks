import React from 'react';

// DAHIL NASA 'pages' FOLDER NA ITO, GAGAMIT TAYO NG '../components/' 
// PARA HANAPIN ANG MGA FILE NA NASA KABILANG FOLDER.
import ImageSlider from '../components/ImageSlider';
import About from '../components/About';
import Products from '../components/Products'; 
import Services from '../components/Services';
import Projects from '../components/Projects';

function Home() {
  return (
    <div className="home-page-container">
      {/* Dito isasalansan ang lahat ng sections ng Home Page mo */}
      <ImageSlider />
      <About />
      <Products />
      <Services />
      <Projects />
    </div>
  );
}

export default Home;