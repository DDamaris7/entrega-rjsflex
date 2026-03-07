import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartView = ()=> {
    const {cart, removeItem, clear, total}= useContext(CartContext)
    return(
        <div>
            <h1>TU CARRITO</h1>
            <div>
                 {
                   cart.map((comprar)=> (
                    <div key={comprar.id} style= {{display: "felx", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "2rem" }}>
                      <img src={comprar.img} alt={comprar.name} style={{width:"10rem"}}/>
                      <span>{comprar.name}</span>
                      <span>${comprar.price}</span>
                      <span>{comprar.quantity}</span>
                      <span>Precio final:${comprar.price*compra.quantity}</span>
                       <button className= "btn btn-danger" onClick={()=>removeItem(comprar.id)}>X</button>                    
                    </div>
                   ))
                   
                 }     
             
             <span>Total a pagar: ${total()}</span>
             <div style= {{display: "felx", justifyContent: "space-between", alignItems: "center", width: "80%", padding: "2rem" }}>
                <button className="btn btn-danger" onClick={clear}>Vaciar el carrito</button>
                <Link className="btn btn-success" to="/checkout">Terminar compra</Link>
             </div>
                 
            </div>
        </div>
    )
}


export default CartView