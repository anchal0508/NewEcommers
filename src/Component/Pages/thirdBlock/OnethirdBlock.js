import React from "react"; 
import "../../css/OnethiedBlock.scss";
import DSC_0509 from "../../Images/workshop/DSC_0509.webp";
import DSC_0508 from "../../Images/workshop/DSC_0508.webp";
import DSC_0510 from "../../Images/workshop/DSC_0510.webp";
import DSC_0511 from "../../Images/workshop/DSC_0511.webp";
import DSC_0512 from "../../Images/workshop/DSC_0512.webp";
import DSC_0513 from "../../Images/workshop/DSC_0513.webp";
import DSC_0514 from "../../Images/workshop/DSC_0514.webp";
import DSC_0515 from "../../Images/workshop/DSC_0515.webp";
import DSC_0516 from "../../Images/workshop/DSC_0516.webp";
import workshop1 from "../../Images/workshop/workshop1.webp";
import workshop2 from "../../Images/workshop/workshop2.webp";
import workshop3 from "../../Images/workshop/workshop3.webp";
import workshop4 from "../../Images/workshop/workshop4.webp";
import workshop5 from "../../Images/workshop/workshop5.webp";
import workshop6 from "../../Images/workshop/workshop6.webp";
 

const thirdBlock = () => {
   
  return (
    <>


  <div>
    <h2>Glimps of the workshops across India</h2>
    {/* <div   className=" arrowGlimps   ">
              <img src={arrow} alt="arrow For Online classes" />
            </div> */}
    <div className="scroll">
      <marquee width="100%" direction="left" scrollamount="15">
      <img src={DSC_0508} alt="workshops in India" />
      <img src={DSC_0509} alt="workshops in India" />
      <img src={DSC_0510} alt="workshops in India" />
      <img src={DSC_0511} alt="workshops in India" />
      <img src={DSC_0512} alt="workshops in India" />
      <img src={DSC_0513} alt="workshops in India" />
      <img src={DSC_0514} alt="workshops in India" />
      <img src={DSC_0515} alt="workshops in India" />
      <img src={DSC_0516} alt="workshops in India" />
      <img src={workshop1} alt="workshops in India" />
      <img src={workshop2} alt="workshops in India" />
      <img src={workshop3} alt="workshops in India" />
      <img src={workshop4} alt="workshops in India" />
      <img src={workshop5} alt="workshops in India" />
      <img src={workshop6} alt="workshops in India" />
       </marquee>
    </div>
    
  </div>
  
    </>
  )
}
export default thirdBlock;
