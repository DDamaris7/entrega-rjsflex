import { useState } from "react"

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {

  const [count, setCount] = useState(initial)

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrementar = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
   const agregarAlCarrito = () => {
    onAdd (count)

   }
  

  return (
    <div style={styles.container}>
      <div style={styles.controls}>
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
      </div>

      <button onClick={agregarAlCarrito} style={styles.addBtn} disabled={count === 0 || stock === 0}>
        Agregar al carrito
      </button>
    </div>
  
  )
}

const styles = {
  container: {
    marginTop: "1rem"
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1rem"
  },
  addBtn: {
    padding: "0.5rem 1rem",
    cursor: "pointer"
  }
}

export default ItemCount
