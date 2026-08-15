// I-import ang React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// MGA PANGUNAHING COMPONENTS NG LAYOUT
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// MGA PAGES
import Home from './Page/Home';
import ContactPage from './Page/ContactPage';
import ProductsPage from './components/ProductsPage';
// Inalis na natin ang lumang ServicesPage para iwas-error
import AboutPage from './Page/AboutPage'; 
import ProductCategory from './Page/ProductCategory'; 
import ServicesP from './Page/ServicesP'; // ITO ANG BAGONG SERVICES PAGE MO

// 1. MGA INDIBIDWAL NA PAHINA NG PROJECTS (HIWA-HIWALAY NA SILA)
import ProjectCommercial from './components/ProjectCommercial';
import ProjectResidential from './Page/ProjectResidential';
import ProjectIndustrial from './Page/ProjectIndustrial';
import ProjectSwimmingPool from './Page/ProjectSwimmingPool';

// BACKGROUND PICTURE
import bgImage from './assets/bg logo.png'; 

function App() {
  const appStyle = {
    backgroundImage: `url('${bgImage}')`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', 
    backgroundRepeat: 'no-repeat', 
    minHeight: '100vh', 
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/:serviceType" element={<ServicesP />} />
            <Route path="/ServicesP" element={<ServicesP />} />
            
            <Route path="/projects/commercial" element={<ProjectCommercial />} />
            <Route path="/projects/residential" element={<ProjectResidential />} />
            <Route path="/projects/industrial" element={<ProjectIndustrial />} />
            <Route path="/projects/swimming-pool" element={<ProjectSwimmingPool />} />
            
            <Route path="/products/:categoryType" element={<ProductCategory />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;