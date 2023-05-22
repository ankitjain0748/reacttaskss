import { useContext } from "react";
import { Contentapi } from "../Content";

function Productstr(props) {
    const{cart,setCart}=useContext(Contentapi)
 const{productss}=props
 //console.log(productss)
 function handlecart(e,productss){
console.log(productss._id)
let _cart={...cart}
if(!_cart.item){
    _cart.item={}
}
if(!_cart.item[productss._id]){
    _cart.item[productss._id]=1
}else{
    _cart.item[productss._id]+=1
}
if(!_cart.totalitem){
    _cart.totalitem=1
}else{
    _cart.totalitem+=1
}
setCart(_cart)
console.log(cart)
 }
    return ( 
     
        <div className="col-md-3" >
        <div className="card" style={{ width: "18rem" }}>

            <img src="logo512.png" className="card-img-top mx-auto d-block " alt="..." style={{ width: "100px" }} />
            <div className="card-body">
               
                <h5 className="card-title">{productss.name}</h5>
                <p className="card-text">{productss.desc}</p>  
                <p className="card-text">{productss.price}</p>
              
                <button className="btn btn-success me-1">More Detilas</button>
                <button className="btn btn-warning" onClick={(e)=>{handlecart(e,productss)}} >Add To Cart</button>
            </div>
        </div>
    </div>
    );
}

export default Productstr;