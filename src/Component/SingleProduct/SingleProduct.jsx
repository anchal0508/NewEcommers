import "./SingleProduct.scss";
import RelatedProducts from "../SingleProduct/RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCartPlus,
  FaWhatsapp,
} from "react-icons/fa";

import useFetch from "../../hooks/useFetch";
import {useParams} from "react-router-dom";

const SingleProduct = () => {
  
  const {id} =useParams();
  const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  if(!data) return;
  const product = data?.data[0]?.attributes
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={process.env.REACT_APP_DEV_URL + product?.img?.data[0]?.attributes?.url} alt="" />
          </div>
          <div className="right">
            <span className="name">{product?.title}</span>
            <span className="price">&#8377;{product?.price}</span>
            <span className="desc">{product?.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button"><FaCartPlus size={20}/> ADD TO CART</button>
            </div>
            <span className="devider"/>
            <div className="info-item">
                <span className="text-bold">
                    Category:
                <span>Python Books Class 10</span>
                </span>
                <span className="text-bold">
                    Share:
                <span className="social-icons">
                    <FaFacebookF size={16}/>
                    <FaTwitter size={16}/>
                    <FaInstagram size={16}/>
                    <FaLinkedinIn size={16}/>
                    <FaWhatsapp size={16}/>

                </span>
                </span>
            </div>
          </div>
        </div>
        <RelatedProducts/>
      </div>
    </div>
  );
};

export default SingleProduct;
