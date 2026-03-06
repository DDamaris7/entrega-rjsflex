
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NotFound from "./components/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"

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
      </Routes>
      
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
