import "../style/CartView.css" 
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const {cart, cartTotal, clear, removeItem} = useContext(CartContext)
    const preConfirm = () => {
        Swal.fire({
            title:'¿Estas seguro que queres borrar el carrito?',
            showDenyButton:true,
            denyButtonText:'No',
            confirmButtonText:'Si'
        }).then((result)=>{
            if(result.isConfirmed){
                clear()
            }
        })
    }

  return (
    <div className='cartview-container'>
        <h2>Tu Carrito🛒</h2>
        <div>
            {
                cart.map((compra)=>(
                    <div key={compra.id} className='cartview-item'>
                        <img src={compra.img} alt={compra.name} />
                        <span>{compra.name}</span>
                        <span>${compra.price},00</span>
                        <span>{compra.quantity}</span>
                        <span>precio final: ${compra.price * compra.quantity},00</span>
                        <button className='cartview-boton' onClick={()=>removeItem(compra.id)}>X</button>
                    </div>
                ))
            }
        </div>
        <span className='cartview-total'>Total a pagar: ${cartTotal()},00</span>
        <div className='cartview-actions'>
            <button className='borrar' onClick={preConfirm}>Borrar</button>
            <Link to='/checkout' className='terminar'>Terminar compra</Link>
        </div>
    </div>
  )
}

export default CartView