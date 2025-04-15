import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import class8Img from "../Images/class8Img.png";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={class8Img} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">Product Name</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="higilight">&#8377; 9999</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
