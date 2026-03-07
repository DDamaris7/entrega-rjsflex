import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartView from "./CartView"
import Emptycart from "/Emptycart"

const CartContainer = ()=> {
    const {cart} = useContext (CartContext)
    return(
        <>{
          cart.length
          ? <CartView/>
          :<Emptycart/>
        }</>
    )
}


export default CartContainer
