
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/items/ItemListContainer"
import ItemDetailContainer from "./components/items/ItemDetailContainer"
import NotFound from "./components/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import CartContainer from "./components/cart/CartContainer"
import Checkout from "./components/Checkout"


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      
      <Navbar />
  
    <Routes>
        <Route path="/" element={<ItemListContainer mensaje ="BIENVENIDO CLIENTE A ALMA HEBRAL"/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
        <Route path= "/cart" element={<CartContainer/>}/>
        <Route path= "/checkout" element={<Checkout/>}/>
      </Routes>
      
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
