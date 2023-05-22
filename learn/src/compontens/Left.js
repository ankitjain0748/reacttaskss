import { Link } from "react-router-dom";
function Left() {
    return (  
        <div className="col-md-3"> 
        
  <Link to='/products'><button className="btn btn-outline-secondary mt-2 mb-2 form-control">Products Management</button></Link>
  
  
   </div>
    );
}

export default Left;