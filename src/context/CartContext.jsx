import { createContext, useState } from "react";

//Creamos el contexto
export const CartContext = createContext()

//Crear nuestro proveedor 

export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState([])
    //todas las funciones que modifiquen ese estado van a estar aca bajo

    const addItem = (item, cantidad)=>{
    
    if(isInCart(item.id)){
        const updatedCart = cart.map((prod)=>{
            if(prod.id === item.id){
                return {...prod, quantity: prod.quantity + cantidad}
            }else{
                return prod
            }
        })
        setCart(updatedCart)
    }else{
        setCart([...cart, {...item, quantity:cantidad}])
    }
    }



    const clear = () =>{
        setCart([])
    }

    const removeItem = (id) =>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const isInCart = (id)=>{
        return cart.some((prod)=> prod.id === id)
    }

    const cartQuantity = ()=> {
        return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price), 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, clear, cartQuantity, cartTotal, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
