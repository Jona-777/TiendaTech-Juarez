import "../style/EmptyCart.css" 
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='carrito-vacio'>
        <h2>Tu carrito esta vacio!!</h2>
        <h4>Te inivitamos a ver nuestros preciosos productos</h4>
        <Link className='empty-boton' to='/'>Ir a comprar!</Link>
    </div>
  )
}

export default EmptyCart