import "../style/ItemDetail.css" 
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detalle}) => {
  return (
    <div className="itemdetail-container">
      <div className="itemdetail-tarjeta">
          <h2>{detalle.name}</h2>
          <img src={detalle.img} alt={detalle.name} />
          <p>{detalle.description}</p>
          <p>${detalle.price} </p>
          <p>Stock:{detalle.stock} unidades</p>
          <ItemCount stock={detalle.stock}/>
      </div>
    </div>
  )
}

export default ItemDetail