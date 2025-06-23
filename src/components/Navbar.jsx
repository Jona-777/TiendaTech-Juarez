import "../style/Navbar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="nav-container">
            <NavLink to='/'>
                <img className="logo" src="../public/logotech.png" alt="logo" />
            </NavLink>
            <div className="a-container">
                <NavLink className="productos" to="/category/celulares">Celulares</NavLink>
                <NavLink className="productos" to="/category/tecnologia">Tecnología</NavLink>
                <NavLink className="productos" to="/category/ofertas">Ofertas</NavLink>
            </div>
            <NavLink to='/cart'style={{textDecoration:'none'}}>
            <CartWidget/>
            </NavLink>
        </nav>
    )
}
export default Navbar