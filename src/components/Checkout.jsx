import "../style/Checkout.css" 
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { useForm} from 'react-hook-form'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear}=useContext(CartContext)
    const {register, handleSubmit, formState:{errors}, getValues}= useForm()


    const finalizarCompra = (dataDelForm)=>{
        let orden = {
            comprador:{
                name:dataDelForm.name,
                address:dataDelForm.address,
                email:dataDelForm.email
            },
            compras:cart,
            total:cartTotal(),
            date:serverTimestamp()
        }
        const ventas = collection(db, "orders")

        addDoc(ventas, orden)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        }
    

  return (
    <>
    {
     orderId 
        ?<div className="order-confirmation">
            <h2>Generaste correctamente tu orden!</h2>
            <h2>El id es:{orderId}</h2>
            <Link to='/' className='boton-volver'>Volver a Home!</Link>
        </div>
        : <div>
            <h1>Completa con tus datos</h1>
            <form onSubmit={handleSubmit(finalizarCompra)}>
                <input className='form-control' placeholder='Complete con su nombre completo' type="text" name='name' {...register("name", {required:true, minLength:3})} />
                {errors?.name?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo Nombre</span>}
                {errors?.name?.type === "minLength" && <span style={{color:'red'}}>El nombre es muy corto</span>}
                <input className='form-control' placeholder='Complete con su direccion' name='address' type="text" {...register("address", {required:true, minLength:10, maxLength:40})} />
                {errors?.address?.type === "required" && <span style={{color:'red'}}>Por favor complete con su dirección</span>}
                {errors?.address?.type === "minLength" && <span style={{color:'red'}}>La dirección minima es de 10 caracteres</span>}
                {errors?.address?.type === "maxLength" && <span style={{color:'red'}}>La dirección es muy larga</span>}
                <input className='form-control' placeholder='Complete con su correo'  type="email" name='email' {...register("email", {required:true})} />
                {errors?.email?.type === "required" && <span style={{color:'red'}}>Por favor complete con su correo</span>}
                <input className='form-control' placeholder='Repita su correo' name='email2' type="text" {...register("secondemail", {required:true, validate:{equalsMails:email2 => email2 === getValues().email}})} />
                {errors?.secondemail?.type === "required" && <span style={{color:'red'}}>Por favor complete con su correo</span>}
                {errors?.secondemail?.type === "equalsMails" && <span style={{color:'red'}}>Los mails no coiciden</span>}
                <button className='form-boton' type='submit' >Finalizar Compra</button>
            </form>
        </div>
    }
    </>
  )
}

export default Checkout