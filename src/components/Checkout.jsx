import React, { use, useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

const Checkout = () => {
  const [buyer, setBuyer]= useState({})
  const [secondMail, setSecondMail]= useState('')
  const [error, setError]= useState(null)
  const [orderId, setOrderId]= useState('')
  const [loading, setLoading]=useState(false)
  const {cart, total, clear}=useContext(CartContext)
  
const buyerData = (e)=> {
    setBuyer(
        {
            ...buyer,
        [e.target.name]: e.target.value
    
        }
    )
}
const terminarCompra = (e)=> {
    e.preventDefault()
    if(!buyer.name || ! buyer.lastname || !buyer.mail || !buyer.address || !secondMail){
        setError('Por favor complete todos los datos')
    }else if (buyer.mail !== secondMail){
        setError('Los correos no coinciden')
    }else{
        setError(null)
        setLoading(true)
        let order = {
            comprador: buyer,
            carrito: cart,
            total: total(),
            fecha: serverTimestamp()
        }
        const orderCollection = collection(db, "orders")
        //agregar el doc
        addDoc(orderCollection, order)
        .then((res)=> {
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> error(error))
        .finally(()=> setLoading(false))
    }
}
if( !cart.length && !orderId){
    return <EmptyCart/>
}

  return (
    <>
   
       {
        orderId ?
        <div>
            <h2>Muchas gracias por tu compra! 🥳</h2>
            <h3>Su Orden es: {orderId}</h3>
            <Link className='btn btn-dark'  to='/'>Volver a Home</Link>
        </div>
       : <div>
        <h1>Complete con sus datos</h1>
        {error && <span style={{color:'red', fontWeight:'bold'}}>{error}</span>}
        <form className='p-4 border rounded shadow-sm bg-light' onSubmit={terminarCompra}>
            <input className='form-control' name='name' type='text' placeholder='Ingresa tu nombre' onChange={buyerData}/>
            <input className='form-control' name='lastname' type='text' placeholder='Ingresa tu apellido' onChange={buyerData}/>
            <input className='form-control' name='address' type='text' placeholder='Ingresa su direccion' onChange={buyerData}/>
            <input className='form-control' name='mail' type='email' placeholder='Ingresa tu correo' onChange={buyerData}/>
            <input className='form-control' name='secondmail' type='email' placeholder='Repetí tu correo' onChange={(e)=> setSecondMail(e.target.value)} />
            <button type='submit' className='btn btn-success' disabled={loading}>{loading ? 'Procesando Compra...' : 'Completar Compra'}</button>
        </form>
    </div>}
    
    </>
  )
}

export default Checkout