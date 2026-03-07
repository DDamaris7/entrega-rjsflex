import { Link } from "react-router-dom";
import CartWidget from "../components/cart/CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const {cart} =useContext(CartContext)
  
  return (
    <nav style={styles.nav}>
      
      <h1>Alma Hebral</h1>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to= "/category/Hierbas para infusión">Hierbas para infusión</NavLink>
      <NavLink to= "/category/Frutas deshidratadas">Frutas deshidratadas</NavLink>
      <NavLink to= "/category/Raices">Raíces</NavLink>
      <NavLink to= "/category/Flores">Flores</NavLink>
      <NavLink to="/"><CartWidget  cantidad={0}/></NavLink>  

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
  NavLink: {
    display: "flex",
    gap: "1rem",
    listStyle: "none"
  }

}

export default Navbar


