import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {productos}from "../mock/products"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../service/firebase"


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
  //const { itemId } = useParams()
  const [invalid, setInvalid]=useState (null)
  useEffect(() => {
    const docRef= doc(db, "productos", id)
    getDoc(docRef)
    .then((res)=> {
          if(res.data()){
            setDetail({id:res.id, ...res.data()})
          }else{
            setInvalid(true)
          }
        })
        .catch((err)=> console.log(err))
        .finally(()=> setCargando(false))
    },[id])

     if(invalid){
    return(
      <div>
        <h2>El prod no existe! 😱</h2>
        <Link className='btn btn-dark' to='/'>Volver a home</Link>
      </div>
    )
    }

  //getProducto(itemId).then((res) => {setItem(res)})
 //}, [itemId])

 //modificar el loading
  if (!item) {
  return <p style={{ padding: "2rem" }}>Cargando producto...</p>
 } 

  return (<ItemDetail item={item} />)
}
export default ItemDetailContainer
