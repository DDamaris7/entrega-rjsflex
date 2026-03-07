import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../service/firebase"
import { useParams, Link } from "react-router-dom"

// //promesa simulada
// const getProducto = (id) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(productos.find(prod => prod.id === id))
//     }, 1000)
//   })
// }

 const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const { itemId } = useParams()
  const [invalid, setInvalid]=useState (null)
  useEffect(() => {
    const docRef= doc(db, "productos", itemId)
    getDoc(docRef)
    .then((res)=> {
          if(res.data()){
            setItem({id:res.id, ...res.data()})
          }else{
            setInvalid(true)
          }
        })
        .catch((err)=> console.error(err))
        // .finally(()=> setCargando(false))
    },[itemId])

     if(invalid){
    return(
      <div>
        <h2>El producto no existe! 😱</h2>
        <Link className='btn btn-dark' to='/'>Volver al inicio</Link>
      </div>
    )
    }

  if (!item) {
  return <p style={{ padding: "2rem" }}>Cargando producto...</p>
 } 

  return (<ItemDetail item={item} />)
}
export default ItemDetailContainer
