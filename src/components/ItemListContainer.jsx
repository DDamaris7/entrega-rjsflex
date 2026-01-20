const ItemListContainer = ({ mensaje }) => {
  return (
    <main style={styles.container}>
      <h1>{mensaje}</h1>
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