import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(" http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

  return (
    <div className="wapper">
      {products &&
        products.map((product) => {
          return (
            <div key={product.id} className="cards">
              {/* <div> */}
              <img src={product.image} alt="" className="image" />
              <div>{product.name}</div>
            </div>
            // </div>
          );
        })}
    </div>
  );
}

export default App;
