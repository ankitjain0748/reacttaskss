import { useEffect, useState } from "react";
import Productstr from "./Productstr";

function Productsfornted() {
    const[productss,setProductss]=useState([])
   const[message,setMessage]= useState('')
    useEffect(()=>{
        fetch('/api/productfor').then((result)=>{return result.json()}).then((data)=>{
          //  console.log(data)
          if(data.status===200){
setProductss(data.apiData)
          }else{
            setMessage(data.message)
          }
        })
    },[])
    return (
        <section id="products">
            <div className="container">
                {message}
                <div className="row">


{productss.map((result)=>(
   <Productstr productss={result}/>
))}
            


                </div>

            </div>
        </section>
    );
}

export default Productsfornted;