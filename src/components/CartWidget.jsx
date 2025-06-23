import { TiShoppingCart } from "react-icons/ti";
import { useContext} from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = ()=> {
const {cartQuantity}=useContext(CartContext)
    return(
        <div className="cart-container">
            <TiShoppingCart className="cart" style={{color: "black" }}/>
            {cartQuantity() > 0 && <span style={{color: "red", backgroundColor: "black", borderRadius: "1rem", padding: "3px"}}>{cartQuantity()}</span>}
        </div>
    )
}

export default CartWidget