import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contentapi } from "../Content";

function Logins() {
const{setLoginpage}=useContext(Contentapi)
const[username,setUsername]=useState('')
const[password,setPassword]=useState('')
const[meassage,setmessage]=useState('')
const usenavigate=useNavigate()
    function handlelogin(e){
      e.preventDefault()
      console.log(username,password)
     const formdata={username,password}
     fetch('/api/login',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formdata)
      
     }).then((result)=>{return result.json()}).then((data)=>{
     // console.log(data)
     if(data.status===200){
      window.localStorage.setItem('username',data.apidata.username)
    setLoginpage(window.localStorage.getItem("username"))
      if(data.apidata.username==='admin@gmail.com'){
usenavigate('/productsboard')
      }
      else{
        usenavigate('/productsfornted')
      }
     }else if(data.status===400){
      setmessage(data.message)
     }else{
      setmessage(data.message)
     }
     })
    }
    return (
        <>
           <section id='Login'>
        <div className="container">
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>

                    <h2>
                      Login
                    </h2>
{meassage}
                    <form onSubmit={(e)=>{handlelogin(e)}}>
                        <label>Username/email</label>
                        <input type='email'
                        value={username} 
                        onChange={(e)=>{setUsername(e.target.value)}}
                        className="form-control"/>         
                        
                        <label>Password</label>

                        <input type='password' 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        className="form-control"/>    
                        <button type='submit' className="form-control btn btn-danger mt-2 mb-2">Submit</button>     
                                  </form>
                                  <Link to='/reg'> you dont have account ?click here</Link>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
      </section>
        </>
      );
}

export default Logins;