
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import Loader from "./loader"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
import { type } from "firebase/firestore/pipelines"

const ItemListContainer = ({mensaje})=>{

  const [items, setItems] = useState([])
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


return (
  <> {
    loading
    ? <Loader/>
     :<main style={styles.container}>
    <button onClick={subirData}>SUBIR DATA</button>
      <h1>Productos</h1>
      <ItemList items={items} />
   </main> }
   </>
   )
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  }
}

export default ItemListContainer
