import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
const Cart = ({setShowCart}) =>{
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div> {/*backgrount will be dull*/}
            <div className="cart-content">

                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={()=>setShowCart(false)}>
                        <MdClose/>
                        <span className="text-name">close</span>
                    </span>
                </div>

                {/* <div className="empty-cart">
                    <BsCartX/>
                    <span>No Products in the Cart.</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div> */}

                <>
                <CartItem />
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text total">&#8377; 9999</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">Checkout</button>
                    </div>
                </div>
                </>
            </div>
        </div>
    );
}
export default Cart;