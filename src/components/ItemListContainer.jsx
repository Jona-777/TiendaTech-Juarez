import { useEffect, useState } from "react"
import { getProducts, products } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import "../style/ItemListContainer.css"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
import LoaderComponent from "./LoaderComponent"

const ItemListContainer = ({greeting}) => {
    const [data, setData]= useState([])
    const {categoryId}= useParams ()
    const [loading, setLoading]= useState(false)
    console.log(categoryId)

    useEffect (()=>{
        setLoading(true)
        const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)): collection(db, "productos")
        getDocs(productsCollection)
        .then((res)=>{
            const list = res.docs.map((doc)=>{
                return{
                    ...doc.data(),
                    id:doc.id
                }
        })

        setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

    return(
        <>
        {
            loading 
            ? <LoaderComponent/> 
            :   <div>
                    <h1 className="titulo-entrada">{greeting}{categoryId && <span className="categorias">{categoryId}</span>}</h1>
                    <ItemList data={data}/>
            </div>
        }
        </>
    )
}
export default ItemListContainer
