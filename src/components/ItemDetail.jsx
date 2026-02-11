
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {
  return (
    <div style={styles.container}>

      <img 
        src={item.img}  
        style={{ width: "300px", objectFit: "cover" }}
      />
      <h2>{item.name}</h2>
      <p><strong>Precio:</strong> ${item.price}</p>
    
      <ItemCount stock={5} initial={1} />
    
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
