import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Header from "./Header";

const Catalog = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <Header />
      <div className="catalog-container">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.price} USD</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Catalog;
