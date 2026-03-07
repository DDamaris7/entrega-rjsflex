import { createContext, useState } from "react";

//creacion del contexto
export const CartContext = createContext()
//const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []
export const CartProvider = ({children})=>{
    const [cart, setCart]=useState([])
   
    // useEffect(()=>{
    //     localStorage.setItem('carrito', JSON.stringify(cart))
    // },[cart])
   
    //agregar un item al carrito y que no se duplique 
   const addItem = (item, qty)=>{
      
    if (IsInCart(item.id)){
        setCart(cart.map (prod => {
          
            if(prod.id === item.id){
             return{...prod, quantity: prod.quantity + qty}

            }else{
                return prod
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
        setCart (cart.filter(prod =>prod.id !== id))
    }
   
    //tiene que devolver un booleano si ese producto esta o no en el carrito
    const IsInCart =(id)=> {
        return cart.some (prod=>prod.id === id)
    
    }

    const total =()=> {
        return cart.reduce((acc, prod)=> (acc += prod.quantity * prod.price),0)
    }

    const cartQuantity = ()=> {
        return cart.reduce ((acc, prod)=>acc += prod.quantity, 0)
    }

    return(
       <CartContext.Provider value={{cart, addItem, clear, removeItem, total, cartQuantity}}>
        {children}
       </CartContext.Provider>
    )
}