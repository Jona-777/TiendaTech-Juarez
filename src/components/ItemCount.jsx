import "../style/ItemCount.css"
import {useState} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount]= useState(1)

    const restar = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    const sumar = () =>{
        if(count < stock){
            setCount (count + 1)
        }
    }
  return (
    <div className="boton-container">   
        <div>
            <button className='boton-restar' onClick={restar}>-</button>
            <span className='span-boton'>{count}</span>
            <button className='boton-mas' onClick={sumar}>+</button>
        </div>
        <button className='boton-agregar'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount