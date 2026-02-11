
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NotFound from "./components/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
      <BrowserRouter>
      <Navbar />
   
    <Routes>

        <Route path="/" element={<ItemListContainer mensaje ="BIENVENIDO CLIENTE A ALMA HEBRAL"/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      </BrowserRouter>
    
  )
}

export default App
