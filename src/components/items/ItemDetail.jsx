
import React, {useContext, useState} from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"




const ItemDetail = ({ item }) => {
  const {cart, addItem} = useContext (CartContext)
  const [purchase, SetPurchase]=useState(false)
  const onAdd = (cantidad)=>{
    addItem(detail, cantidad)
    SetPurchase (true)
  }
  
  
  
  return (
    <div style={styles.container}>

      <img 
        src={item.img}  
        style={{ width: "300px", objectFit: "cover" }}
      />
      <h2>{item.name}</h2>
      <p><strong>Precio:</strong> ${item.price}</p>
    
      {purchase? <Link to="/cart" className="btn-btn-dark">Ir al carrito</Link>
      : <ItemCount stock={5} initial={1} />}
    
    </div>
  )
}

const styles = {
  container: {
    border: "1px solid black",
    padding: "2rem",
    margin: "2rem",
    textAlign: "center"
  }
}

export default ItemDetail
