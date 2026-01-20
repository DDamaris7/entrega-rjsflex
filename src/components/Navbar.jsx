import CartWidget from "./Cartwidget";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      
      <h2>Alma Hebral</h2>

      <ul style={styles.links}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />

    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem",
    backgroundColor: "pink",
    color: "black",
  },
  links: {
    display: "flex",
    gap: "1rem",
    listStyle: "none"

  }



}

export default NavBar


