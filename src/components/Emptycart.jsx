import React from "react"

const Emptycart = ()=> {
    return(
        <div>
            <h1>TU CARRITO ESTA VACIO</h1>
            <h2>Ingresa a nuestros productos comprar</h2>
            <Link to="/" className= "btn btn-dark" >IR A COMPRAR</Link>
        </div>
    )
}


export default Emptycart