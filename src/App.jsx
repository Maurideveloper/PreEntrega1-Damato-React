import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailCointainer from './components/ItemDetailContainer'
import Cart from "./components/Cart"

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
