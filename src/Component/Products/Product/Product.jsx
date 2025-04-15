import {useNavigate} from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../Product/Product.scss";
 import class8Img from "../../Images/class8Img.webp"

const Product = ({id, data}) => {

  const navigate = useNavigate()

  return <div className="product-card" onClick={() => navigate("/product/"+id)}>
    <div className="thumbnail">
      <img src={class8Img} alt="" />
    </div>
    <div className="prod-details">
      <div className="name">{data.title}</div>
      <div className="Price">&#8377; {data.price}</div>
    </div>
  </div>;
};
export default Product;
