import { createContext, useState } from "react";
import { productos } from "../mock/products";

//creacion del contexto
export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart, setCart]=useState([])
   //agregar un item al carrito y que no se duplique 
   const addItem = (item, qty)=>{
      
    if (IsInCart(item.id)){
        setCart(
            cart.map ((productos)=>{
          
            if(productos.id === item.id){
             return{...productos, quantity: productos.quantity + qty}

            }else{
                return productos
            }

            }))
    }else {
          
        setCart([...cart, {...item, quantity:qty}])
        }        
   }
   //borrar todo el carrito 
   const clear = ()=>{
   
    setCart ([])

   }

    //elimino un item del array
    const removeItem = (id)=>{
        setCart (cart.filter((productos)=>productos.id !== id))
    }
   
    //tiene que devolver un booleano si ese producto esta o no en el carrito
    const IsInCart =(id)=> {
        return cart.some ((productos)=>productos.id !== id)
    
    }

    const total =()=> {
        return cart.reduce((acc, prod)=> (acc += prod.quantity * prod.price),0)
    }

    const cartQuantity = ()=> {
        return cart.reduce ((acc, prod)=>acc += prod.quantity, 0)
    }

    return(
       <CartContext.Provider value={(cart, addItem, clear, removeItem, total, cartQuantity)}>
        {children}
       </CartContext.Provider>
    )
}