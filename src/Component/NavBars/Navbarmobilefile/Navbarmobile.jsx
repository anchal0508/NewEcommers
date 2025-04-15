import "./Navbarmobile.scss";
import {React, useState} from "react";
import { NavLink } from "react-router-dom";
const Navbarmobile = () => {
  const [showNav, setShowNav] = useState(true);
  // const navHideBar =() =>{
  //   if()
  // }
  return (
    <div className="mob-container" onClick={() => setShowNav(!showNav)}>
     {showNav && ( <ul className="leftMenu-mob upperCase" id="myLinks" >
        <NavLink to="/" className="ListIteam">
          <li className="list-mob"> Home</li>
        </NavLink>
        <NavLink to="/About" className="ListIteam">
          <li className="list-mob"> About</li>
        </NavLink>
        <NavLink to="/Trainings" className="ListIteam">
          <li className="list-mob"> Trainings</li>
        </NavLink>
        <NavLink to="/ContactUs" className="ListIteam">
          <li className="list-mob">Contact</li>
        </NavLink>

        <NavLink to="/Certificate" className="ListIteam">
          <li className="list-mob">Certificate</li>
        </NavLink>
      </ul>)}
    </div>
  );
};
export default Navbarmobile;
