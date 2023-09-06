import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <>
    {/* <BrowserRouter> */}

      <NavBar/>
      

      {/* <Routes> */}
        <ItemListContainer greeting = {"Bienvenidos! Tienda de chocolates ChocoCross"}/>

        {/* <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} /> */}

      {/* </Routes> */}
      
    {/* </BrowserRouter> */}
    </>
  )
}

export default App
