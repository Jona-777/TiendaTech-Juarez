import "../style/Navbar.css"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return(
        <nav className="nav-container">
            <img className="logo" src="../public/logotech.png" alt="logo" />
            <div className="a-container">
                <a className="productos" href="">Celulares</a>
                <a className="productos" href="">Tecnología</a>
                <a className="productos" href="">Ofertas</a>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar