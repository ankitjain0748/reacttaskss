import { useContext } from "react";
import { Contentapi } from "../Content";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const {loginpage,setLoginpage,cart}=useContext(Contentapi)
    const navigate=useNavigate()
    function handellogout (e){
        window.localStorage.removeItem("username")
        setLoginpage(window.localStorage.getItem("email"))
navigate('/')
    }
    return ( 
        <>
        <section id='Header'>
        <div className="container">
            <div className="row">
               
            <div className="col-md-8">
                    <h2>Welcome {loginpage}</h2>
                    </div>
                    <div className="col-md-4">
                     <Link to="/cart"> 
                    <button className="btn btn-info me-2 ">Cart-{!cart.totalitem?0:cart.totalitem}</button></Link>   
                   <Link to="/productsfornted">
                    <button className="btn btn-warning me-2 ms-2">Products</button>
                   </Link>
                    <button className='btn btn-danger' onClick={(e)=>{handellogout(e)}}>Logout</button>
                  
                    </div>
            </div>
        </div>
        </section>
        </>
     );
}

export default Header;