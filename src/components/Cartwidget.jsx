import { GrCart } from "react-icons/gr";
const CartWidget = ({ cantidad = 0 }) => {
  return (
     <div style={styles.cart}>
       <GrCart fontSize={"1.5rem"}/>
        <span style={styles.badge}>{cantidad}</span>
    </div>
  )
}
const styles = {
  cart: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "0.3rem"
  },
  badge: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "50%",
    padding: "0.2rem 0.5rem",
    fontSize: "0.8rem"
  }
}

export default CartWidget
