import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Login from "./compontens/Login";
import Regstier from "./compontens/Regs";
import Prodcutsdash from "./compontens/Productsdash";
import Header from "./compontens/Header";
import Adminproducts from "./compontens/Adminproducts";
import Footer from "./compontens/Footer";
import Productshow from "./compontens/Productshow";
import { Contentapi } from "./Content";
import { useEffect, useState } from "react";
import Update from "./compontens/Update";
import Productsfornted from "./compontens/Productsfornted";
import Cart from "./compontens/Cart";




function App() {
 const[cart,setCart]=useState("")
const[loginpage,setLoginpage]=useState(window.localStorage.getItem('username'))
useEffect(()=>{
  window.localStorage.setItem("cart",JSON.stringify(cart))

},[cart])
 return ( 
  <><Router>
  <Contentapi.Provider value={{loginpage,setLoginpage,cart,setCart}}>

  <Header/>
  <Routes>
<Route path='/' element={<Login/>}></Route>
<Route path='/reg' element={<Regstier/>}></Route>
<Route path='/productsboard' element={<Prodcutsdash/>}></Route>
<Route path='/products' element={<Adminproducts/>}></Route>
<Route path="/productser" element={<Productshow/>}></Route>
<Route path="/upadte/:id" element={<Update/>}></Route>
<Route path='/productsfornted' element={<Productsfornted/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
  </Routes>
<Footer/>
</Contentapi.Provider>
   </Router>  
  </> );
}

export default App;
