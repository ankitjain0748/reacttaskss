import { useState } from "react";
import Left from "./Left";
import { useNavigate } from "react-router-dom";

function Productshow() {
  const[name,setName]=useState('')
  const[desc,setDesc]=useState('')
  const[ldesc,setLdesc]=useState('')
  const[price,setPrice]=useState('')
  const[message,setMessage]=useState('')
  const navigate=useNavigate()
  function handelform(e){
    e.preventDefault()
   // console.log(name,desc,ldesc,price)
   const formdata={name,desc,ldesc,price}
   fetch('/api/products',{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formdata)
   }).then((result)=>{return result.json()}).then((data)=>{
   // console.log(data)
    if(data.status===201){
      setMessage(data.message)
      navigate('/products')
    }else{
      setMessage(data.message)
    }
   })
  }
    return (
        <section id="productshow">
  <div className="container">
  <div className="row">

 <Left/>
  <div className="col-md-6">
    <h2>Products Management </h2>
  <div className="alert alert-info">{message}</div>
 <form onSubmit={(e)=>{handelform(e)}}>
  <label>Products Name</label>
  <input type="text" className="form-control"
  value={name}
  onChange={(e)=>{setName(e.target.value)}}/>
  <label>Products Desc</label>
  <input type="text" className="form-control"
  value={desc}
  onChange={(e)=>{setDesc(e.target.value)}}/>
  <label>Products Ldesc</label>
  <input type="text" className="form-control"
  value={ldesc}
  onChange={(e)=>{setLdesc(e.target.value)}}/>
  <label>Products Prices</label>
  <input type="Number" className="form-control"
  value={price}
  onChange={(e)=>{setPrice(e.target.value)}}/>
  <button type="submit" className="btn btn-outline-success mt-2 mb-2 form-control">ADD HERE</button>
 </form>
  </div>


  </div>

  </div>
</section>
    ) ;
}

export default Productshow;