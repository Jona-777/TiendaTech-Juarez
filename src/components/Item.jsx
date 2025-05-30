import "../style/Item.css"
import React from 'react'
import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return (
        <div className="tarjeta-prod">
        <img src={prod.img} className='tarjeta-img' alt={prod.name}/>
            <div className='tarjeta-body'>
                <h5 className='tarjeta-titulo'>{prod.name}</h5>
                <p className='tarjeta-texto'>${prod.price},00</p>
                <Link to={'/item/'+prod.id} className='tarjeta-boton'>Ver más</Link>
            </div>
        </div>
    )
}

export default Item