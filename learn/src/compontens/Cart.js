import { useContext, useEffect, useState } from "react";
import { Contentapi } from "../Content";
import { useNavigate } from "react-router-dom";


function Cart() {
    let totalamount = 0
    const { cart, setCart } = useContext(Contentapi)
    let navigatrer = useNavigate()
    const [productid, setProductid] = useState([])
    const [message, setMessage] = useState('')
 useEffect(()=>{
    if (!Cart.item){
        return
    }
    fetch('/api/productsids', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: Object.keys(cart.item) })
        //    body:JSON.stringify({ids:Object.keys(cart.item)})
    }).then((result) => { return result.json() }).then((data) => {
        //console.log(data)
        if (data.status === 200) {
            setProductid(data.apiData)
        } else {
            setMessage(data.message)
        }
    })
 },[cart])
    function handlequnetiy(id) {
        return cart.item[id]
    }
    function handelprice(id, price) {
        totalamount += handlequnetiy(id) * price
        return handlequnetiy(id) * price
    }
    function handelincrement(e, id) {
        let currentqunty = handlequnetiy(id)
        let _cart = { ...cart }
        _cart.item[id] = currentqunty + 1
        _cart.totalitem += 1
        setCart(_cart)
    }

    function handeldcrement(e, id) {
        let currentqunty = handlequnetiy(id)
        let _cart = { ...cart }
        if(_cart.item[id]===1){
            return
        }
        _cart.item[id] = currentqunty - 1
        _cart.totalitem -= 1
        setCart(_cart)
    }
    function handlecheckout(e) {
        ///fecth() paybal

        //fecht Daatabase 
        //frech(insert the database)
        window.localStorage.setItem('cart', '')
        setCart(window.localStorage.getItem('cart'))
        navigatrer('/productsfornted')
    }

    return (
        <section id="Cart">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {message}

 <table className="table table-hover">
 <thead>

     <tr>
         <th>S.no.</th>
         <th>Product Name</th>
         <th>Product Qualtiy</th>
         <th>Product Price</th>
         <th>Product Delte</th>


     </tr>

 </thead>
 <tbody>
     {productid.map((result, key) => (
         <tr>
             <td>{key + 1}</td>

             <td>{result.name}</td>

             <td><button onClick={(e) => { handelincrement(e, result._id) }}>+</button>{handlequnetiy(result._id)}<button onClick={(e) => { handeldcrement(e, result._id) }}>-</button></td>

             <td>{handelprice(result._id, result.price)}</td>


             <td>Delte</td>
         </tr>
     ))}
     <tr>
         <td><h4>TotalAmount:</h4></td>
         <td colspan="4">{totalamount}</td></tr>
     
 </tbody>

</table>




                       

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;