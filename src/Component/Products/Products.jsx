import "../Products/Products.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:9292/api/subjects")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="products-container">
      <h1>Get Jobs in IT</h1>
      <h2>(Get 7 Days Free demo) </h2>
      <div className="products" >
        {products.map((product) => (
          <div className="productTile" key= {product.id} onClick={() => navigate(`/course/${product.name}`)}>
            <h3>{product.name}</h3>
            <hr />
            <span>Number of Chapters: {product.chapters}</span>
            <br/>
            <span>Price: Rs:{product.sub_price}/-</span>
            <img src={product.imageUrl} alt={product.name} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
