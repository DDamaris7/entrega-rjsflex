import { useContext } from "react";
import { GrCart } from "react-icons/gr";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
  const {cartQuantity, cart} = useContext(CartContext)
  return (
     <div style={styles.cart}>
       <GrCart fontSize={"1.5rem"}/>
        {cart.length> 0 && <span style={styles.badge}>{cartQuantity()}</span>}
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
