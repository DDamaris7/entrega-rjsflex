import { Link } from "react-router-dom"

const Item = ({ item }) => {
  return (
    <div style={styles.card}>
      <img 
        src={item.img} 
        alt={item.name} 
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  )
}

const styles = {
  card: {
    border: "1px solid black",
    padding: "1rem",
    margin: "1rem",
  }
}

export default Item
