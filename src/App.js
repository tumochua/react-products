import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(" http://localhost:3001/products/1")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

  return (
    <div>{}</div>
    // <div className="wapper">
    //   {products &&
    //     products.map((product) => {
    //       return (
    //         <div key={product.id} className="cards">
    //           <img src={product.image} alt="" className="image" />
    //           <div>{product.name}</div>
    //           {/* <div>{product.address}</div> */}
    //           <div
    //             dangerouslySetInnerHTML={{
    //               __html:
    //                 product &&
    //                 product.description &&
    //                 product.description.replace(/\n/g, "<br>"),
    //             }}
    //           />
    //         </div>
    //       );
    //     })}
    // </div>
  );
}

export default App;
