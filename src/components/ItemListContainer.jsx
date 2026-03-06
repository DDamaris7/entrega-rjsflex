
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import {productos}from "../mock/products"
import Loader from "./loader"


const getProductos = () => {
  //const [loading, setLoading] = useState(false)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 1000)
  })
}

function ItemListContainer() {
  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProductos().then((res) => {
      if (categoryId) {
        setItems(res.filter(prod => prod.category.toLowerCase () === categoryId. toLowerCase()))
      } else {
        setItems(res)
      }
    })
    //.catch((error)=> console.error(error))
    //.finally(()=> setLoading(false))
  }, [categoryId])



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
