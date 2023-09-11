import NavBar from "./components/nav/NavBar"
import ItemListContainer from "./components/itemListContainter/ItemListContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailCointainer from './components/itemListContainter/detail/ItemDetailContainer'
import Cart from "./components/cart/Cart"

function App() {
  
  return (
    
    <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailCointainer />} />

      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
