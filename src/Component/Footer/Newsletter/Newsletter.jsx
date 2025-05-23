import React from "react";
import "../Newsletter/Newsletter.scss";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-section">
        <div className="newsletter-content">

          <span className="small-text">Newsletter</span>

          <span className="big-text">Signup for latest updates and offers</span>

          <div className="form">
            {/* <input type="text" placeholder="Email Address"/> */}
            <a href="https://whatsapp.com/channel/0029Vb4v9oFDeONEbXgcYE1E" target="_blank"
              rel="noopener noreferrer"> <button  >Subscribe</button></a>
          </div>

          <div className="text">Will be used in accordance with our Privacy Policy </div>

          <div className="social-icons">

            <div className="icon">
              <FaFacebookF size={14} />
            </div>

            <div className="icon">
              <FaYoutube size={14} />
            </div>

            <div className="icon">
              <FaLinkedin size={14} />
            </div>

            <div className="icon">
              <FaInstagram size={14} />
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
export default Newsletter;
