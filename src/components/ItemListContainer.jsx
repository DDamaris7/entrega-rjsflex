
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import {productos}from "../mock/products"
import Loader from "./loader"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
import { type } from "firebase/firestore/pipelines"



// const getProductos = () => {
//   //const [loading, setLoading] = useState(false)
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(productos)
//     }, 1000)
//   })
// }

function ItemListContainer() {

  const [items, setItems] = useState([])
  const { categoryId } = useParams()
 const subirData =()=> {
    const prodASubir = collection (db, "productos")
         productos.map ((prod)=>addDoc(prodASubir, prod))
  }  
  useEffect (()=>{
    setLoading (true)
    const prodCollection = type ? query(collection (db, "productos"), where("category", "==", type)): (collection (db, "productos"))
    getDocs(prodCollection)
    .then((res)=>{
      const list = res.docs.map((doc)=>{
        return{
          id:doc.id,
          ...doc.data()
        }
      })
      setData(list)
    })
    .catcha((error)=>console.error(error))
    .finally (()=> setLoading(false))
  }, [type])


  //promise
  // useEffect(() => {
  //   getProductos().then((res) => {
  //     if (categoryId) {
  //       setItems(res.filter(prod => prod.category.toLowerCase () === categoryId. toLowerCase()))
  //     } else {
  //       setItems(res)
  //     }
  //   })
  //   //.catch((error)=> console.error(error))
  //   //.finally(()=> setLoading(false))
  // }, [categoryId])



// return (
//   <>{
//     loading
//     ? <Loader/>
//      :<main style={styles.container}>
//       <h1>Productos</h1>
//       <ItemList items={items} />
//     </main>
//   </>

//   }
   
//   )
// }
return (
   <main style={styles.container}>

    <button onClick={subirData}>SUBIR DATA</button>
      <h1>Productos</h1>
      <ItemList items={items} />
   </main>
 )


const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  }
}
}
export default ItemListContainer
