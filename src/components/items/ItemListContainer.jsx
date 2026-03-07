
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../service/firebase"
import { useParams } from "react-router-dom"
import { productos } from "../../mock/productos"

const ItemListContainer = ({mensaje})=>{
  const [loading, setLoading] = useState (true)
  const [items, setItems] = useState([])
  const {categoryId} = useParams ()
 
  useEffect (()=>{
    setLoading (true)
    const prodCollection = categoryId ? query(collection (db, "productos"), where("category", "==", categoryId)): (collection (db, "productos"))
    getDocs(prodCollection)
    .then((res)=>{
      const list = res.docs.map((doc)=>{
        return{
          id:doc.id,
          ...doc.data()
        }
      })
      setItems(list)
    })
    .catch((error)=>console.error(error))
    .finally (()=> setLoading(false))
  }, [categoryId])
    if(loading){
    return <h2>Cargando productos...</h2>
  }


return (
  
     <main style={styles.container}>    
      <h1>{mensaje}</h1>
      <ItemList items={items} />
   </main> 
   )
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  }
}

export default ItemListContainer
