import {useNavigate} from "react-router-dom";
import React from "react";
import "../Category/Category.scss";
import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
      {
        categories?.data?.map((item) => (
          <div key={item?.id} className="category" onClick={() => navigate(`/category/${item?.id}`)}>
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item?.attributes?.img?.data?.attributes?.url
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
