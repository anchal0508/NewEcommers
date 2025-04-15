import React, { useState, useEffect } from "react";
import Navbardesktop from "../NavBars/Navbardesktopfile/Navbardesktop";
import Navbarmobile from "../NavBars/Navbarmobilefile/Navbarmobile";
import { NavLink } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import Search from "./Search/Search";
import logo from "../Images/logo.webp";
import "../Header/HeadingBar.scss";
import Cart from "../Cart/Cart";
const HeadingBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`  ${scrolled ? "sticky-header" : ""}`}>
        <a href="javascript:void(0);" className="icon-bar-line">
          <i className="fa fa-bars" onClick={() => setShowNav(!showNav)}></i>
        </a>
        {/* <span className="icon-close">
                <AiOutlineClose onClick={() => setShowNav(false)} />
              </span> */}
        <div className="header-content">
          {showNav && <Navbarmobile />}
          <Navbardesktop />
          <div className="Logo-cont">
            <NavLink to="/">
              <img className="App-logo" src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul className="rightMenu">
            <NavLink to="/Login" className="ListIteam">
              <li>Login</li>
            </NavLink>
            <NavLink to="/SignUp" className="ListIteam ">
              <li className="v2">SignUp</li>
            </NavLink>
          </ul>
          <div className="rightMost">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};
export default HeadingBar;
