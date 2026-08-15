import './Products.css';
import ProGallon from '../assets/ProdGallon.jpg';
import ProdTank from '../assets/ProdTank.jpg';
import ProdPipe from '../assets/ProdPipe.jpg';

function Products() {
  const productList = [
    { id: 1, name: "Storage tanks Pressure tanks and bladder tanks", img: ProdTank },
    { id: 2, name: "Water Pumps", img: "https://placehold.co/300x300/0a9396/white?text=Dispenser" },
    { id: 3, name: "Pipes and Fittings", img: ProdPipe },
    { id: 4, name: "Water Filters", img: "https://placehold.co/300x300/e9d8a6/black?text=Filters" },
    { id: 5, name: "Swimming pool chemicals and cleaning equipment", img: "https://placehold.co/300x300/ee9b00/white?text=Purifier" },
    { id: 6, name: "Water refilling station consumables", img: ProGallon }
  ];

  return (
    <section id="products" className="products-section">
      <h2>Our Products</h2>

      <div className="products-grid">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            
            <img src={product.img} alt={product.name} />
            
            {/* IDINAGDAG NATIN ITO: Para pumatong ang text sa dark shadow */}
            <div className="product-content">
              <h3>{product.name}</h3>
            </div>

          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Products;