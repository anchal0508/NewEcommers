import React from "react";
import "../../Pages/PageScss/PagesC.scss";
const ContactUs = () => {
  return (
    <>
      <div className="baseContainer">
        <div className="content">
        <h1 className="mainHeading">ContactUs-- </h1>
        <hr/>
        <p >
          We’d love to hear from you! Whether you have questions about our
          training programs, need assistance with enrollment, or want to learn
          more about how we can help you build a successful career in IT, feel
          free to get in touch with us.____
        </p>
        <hr/>
        <h2 className="subHeading">Visit Us:</h2>
        <h3 className="sideHeading">Address:</h3>
        <p className="address">
          <div>728 First Floor, </div>
          <div>Near Brilliant Aura, </div>
          <div>Scheme Number 136, </div>
          <div>Sector-B, MR9</div>
          <div>Road, Indore, Madhya Pradesh</div>
        </p>
        <h3 className="sideHeading">Call Us:</h3>
        <span className="phoneNumber">+91-70534-72883</span>
        <p>
          Our team is always ready to assist you and provide the information you
          need. For any queries, feedback, or suggestions, don’t hesitate to
          reach out. We look forward to connecting with you!
        </p>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
