import "../style/ItemList.css"
import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
    return (
        <div className="tarjeta-container">
            {data.map((prod)=><Item key={prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList