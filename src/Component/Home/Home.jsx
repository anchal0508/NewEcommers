import React, { useState, createContext, useContext } from "react";
import { useEffect } from "react";
import "../Home/HomeC.scss";
import Category from "../Home/Category/Category";
import panIndia from "../Images/panIndia.webp";
import cover from "../video/cover.mp4";
import OnethirdBlock from "../Pages/thirdBlock/OnethirdBlock";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  return (
    <>
      <div className="rootContainer">
        <div className="FirstBlock  ">
          <video src={cover} autoPlay loop muted />
          <div className="contentHeading">
            <h1>JOB & PRACTICE ORIENTED CLASSES </h1>
            <p>ABCROB TECHNOLOGIES PVT. LTD.</p>
            <hr />
          </div>
          <div className="panIndia  ">
            <img src={panIndia} alt="" />
          </div>
        </div>
        <div className="main-content">
          <div className="layout">
            <Category categories={categories} />
            <Products products={products} headingText="Popular Products" />
          </div>
        </div>
        <div className="BlockNumber3">
          {/* below block is for images */}
          <OnethirdBlock />
          <Newsletter />
        </div>
      </div>
    </>
  );
};
export default Home;
