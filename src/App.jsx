import { Route, Routes } from "react-router"
import Cart from "./components/Cart"
import Home from "./components/Home"
import Menu from "./components/Menu"

function App()
{
  return<div className="container">
   <Menu/>
   <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
   </Routes>
  </div> 
}
export default App;