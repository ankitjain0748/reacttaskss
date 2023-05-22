import { useNavigate, useParams } from "react-router-dom";
import Left from "./Left";
import { useEffect, useState } from "react";

function Update() {
    //console.log(useParams())

    const{id}=useParams()
    const[name,setName]=useState('')
    const[desc,setDesc]=useState('')
    const[ldesc,setLdesc]=useState('')
    const[price,setPrice]=useState('')
    const[message,setMessage]=useState('')
    const[status,setStatus]=useState('')
    const usenavigate=useNavigate()
    //console.log(id)
useEffect(()=>{
  fetch(`/api/singleproductupdate/${id}`).then((result)=>{return result.json()}).then((data)=>{
    // console.log(data)
   if(data.status===200){
     setName(data.apidata.name)
     setDesc(data.apidata.desc)
     setLdesc(data.apidata.ldesc)
     setPrice(data.apidata.price)
     setStatus(data.apidata.status)
   }else{
    setMessage(data.message)
   }
   })
},[])

    function handelform(e){
        e.preventDefault()
//console.log(name,desc,ldesc,status,price)
const formdta={name,desc,ldesc,status,price}
fetch(`/api/productupdateall/${id}`,{
  method:"PUT",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(formdta)
}).then((result)=>{return result.json()}).then((data)=>{
 // console.log(data)
 if(data.status===200){
  setMessage(data.message)
usenavigate('/products')
 }else{
  setMessage(data.message)
 }
})
    }
    return (
<section id="products">
  <div className="container">
  <div className="row">

  <Left/>
  <div className="col-md-9">
{message}
    <h2>Product Update</h2>
  <form onSubmit={(e)=>{handelform(e)}}>
  <label>Products Name</label>
  <input type="text" className="form-control"
  value={name}
  onChange={(e)=>{setName(e.target.value)}}
  />
  <label>Products Desc</label>
  <input type="text" className="form-control"
  value={desc}
 onChange={(e)=>{setDesc(e.target.value)}}
  />
  <label>Products Ldesc</label>
  <input type="text" className="form-control"
  value={ldesc}
  onChange={(e)=>{setLdesc(e.target.value)}}
  />
  <label>Products Prices</label>
  <input type="Number" className="form-control"
  value={price}
  onChange={(e)=>{setPrice(e.target.value)}}
  />
  <label>Product Staitus</label>
  <select value={status} className="form-select" onChange={(e)=>{setStatus(e.target.value)}}>
    <option value={"OUT STOCK"}>OUT STOCK</option>
    <option value={"IN STOCK"}>IN STOCK</option>
  </select>
  <button type="submit" className="btn btn-outline-success mt-2 mb-2 form-control">ADD HERE</button>
 </form>


  </div>


  </div>

  </div>
</section>
      );
}

export default Update;