import { TiShoppingCart } from "react-icons/ti";

const CartWidget = ()=> {
    return(
        <div>
            <TiShoppingCart className="cart" />
            <span>8</span>
        </div>
    )
}

export default CartWidget