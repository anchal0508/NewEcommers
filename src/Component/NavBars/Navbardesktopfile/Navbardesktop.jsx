import "./Navbardesktop.scss";
 
import { NavLink } from "react-router-dom";
const Navbardesktop = () =>{
    
    return(
        <ul className="leftMenu-desk upperCase" id="myLinks">
              
              <NavLink to="/" className="ListIteam-desk">
                <li className="list--desk"> Home</li>
              </NavLink>
              <NavLink to="/About" className="ListIteam-desk">
                <li className="list--desk"> About</li>
              </NavLink>
              <NavLink to="/Trainings" className="ListIteam-desk">
                <li className="list--desk"> Trainings</li>
              </NavLink>
              <NavLink to="/ContactUs" className="ListIteam-desk">
                <li className="list--desk">Contact</li>
              </NavLink>

              <NavLink to="/Certificate" className="ListIteam-desk">
                <li className="list--desk">Certificate</li>
              </NavLink>
            </ul>
    );
}
export default Navbardesktop;