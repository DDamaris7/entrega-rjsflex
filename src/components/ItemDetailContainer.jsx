import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {productos}from "../mock/products"


//promesa simulada

const getProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find(prod => prod.id === id))
    }, 1000)
  })
}

 const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    getProducto(itemId).then((res) => {setItem(res)})
  }, [itemId])

 
 //modificar el loading
  if (!item) {
  return <p style={{ padding: "2rem" }}>Cargando producto...</p>
 } 

  return 
  <ItemDetail item={item} />
}
export default ItemDetailContainer
