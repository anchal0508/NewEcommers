import React from "react";
import "../../Component/Footer/FooterBarC.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FooterBar = () => {
  return (
    <>
      <footer className="footer22">
        <div className="footer-content">
          <div className="col">
            <div className="title">About</div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae minus quidem dignissimos consectetur voluptatibus
              porro, blanditiis nostrum ab obcaecati dolores at, veniam,
              accusamus dolor in suscipit dolore pariatur! Officiis, enim.
            </div>
          </div>
          <div className="col">
            <div className="title">Content</div>

            <div className="c-item">
              <FaLocationArrow />
              <div className="text">
                ABCROB Technologies, , left Side Gali Number 3, Narmada Nagar,
                Amkhera Road, Gohalpur, Jabalpur, MP, 402002.
              </div>
            </div>

            <div className="c-item">
              <FaMobileAlt />
              <div className="text">Phone: +91 70534 72883</div>
            </div>

            <div className="c-item">
              <FaEnvelope />
              <div className="text">Email: info@abcrob.com</div>
            </div>
          </div>

          <div className="col">
            <div className="title">Categories</div>
            <span className="text">Schools</span>
            <span className="text">Collage</span>
            <span className="text">Working & Switch to IT </span>
          </div>
          <div className="col">
            <div className="title">Pages</div>

          <span className="text">  <NavLink to="/" > Home </NavLink></span>
            <span className="text"> <NavLink to="/About" > About </NavLink></span>
            <span className="text"><NavLink to="/ContactUs" >Contact</NavLink></span>
            <span className="text"><NavLink to="/Gallary" >Gellary</NavLink></span>
            <span className="text"><NavLink to="/Certificate" >Certificate</NavLink></span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
              ABCROB 2018 CREATED BY ANCHAL KOSHTA PREMIUM EDUCATION &
              SOLUTIONS.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default FooterBar;
