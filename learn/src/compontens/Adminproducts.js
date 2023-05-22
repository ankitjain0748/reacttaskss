import { Link } from "react-router-dom";
import Left from "./Left";
import { useEffect, useState } from "react";
import Propstable from "../Propstable";


function Adminproducts() {
   const[products,setProducts]=useState([])
   const[message,setMessage]=useState('')
    useEffect(()=>{
        fetch('/api/productsall').then((result)=>{return result.json()}).then((data)=>{
          //  console.log(data)
            if(data.status===200){
setProducts(data.apiData)
            }else{
setMessage(data.message)
            }
        })
    },[])
 
    return ( 
        <section id="product">
        <div className="container">
        <div className="row">
      
        <Left/>
        
        <div className="col-md-9">
            <Link to="/productser"><button className="btn btn-dark form-control mt-2 mb-2">Add Products Here</button></Link>
            <h2>Products Management </h2>
            {message}
<Propstable data={products}/>
        </div>
      
      
        </div>
      
        </div>
      </section>
     );
}

export default Adminproducts;