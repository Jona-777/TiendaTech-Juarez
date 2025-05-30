import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import "../style/ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    const [data, setData]= useState([])
    const {categoryId}= useParams ()
    console.log(categoryId)

    useEffect(()=>{
        getProducts()
        .then((respuesta)=>{
            if(categoryId){
                setData(respuesta.filter((prod)=> prod.category === categoryId))
            }else{
                setData(respuesta)
            }
        })
        .catch((error)=> console.error(error))
    },[categoryId])

    return(
        <div>
            <h1 className="titulo-entrada">{greeting}{categoryId && <span className="categorias">{categoryId}</span>}</h1>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer
