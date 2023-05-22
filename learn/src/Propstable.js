import { Link } from "react-router-dom";

function Propstable(props) {
    const{data}=props
    return (
        <table className="table table-hover">
        <thead>
            <tr>
                <th>S. NO.</th>
                <th>Products Name</th>
                <th>Products Desc</th>
                <th>Products Ldesc</th>
                <th>Products Prices</th>
                <th>Products Status</th>
                <th>Product Action</th>
            </tr>
        </thead>
        <tbody>
            {
              data.map((result,key)=>(
                    <tr key={result._id}>
                        <td>{key+1}</td>
                        <td>{result.name}</td>
                        <td>{result.desc}</td>
                        <td>{result.ldesc}</td>
                        <td>{result.price}</td>
                   <td>{result.status}</td>
<td><Link to={`/upadte/${result._id}`}><button className="btn btn-outline-primary">Update</button></Link></td>

                    </tr>
                 ))
            }
            
        </tbody>
      </table>
      );
}

export default Propstable;