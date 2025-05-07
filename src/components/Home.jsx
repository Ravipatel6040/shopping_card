import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addProductItem } from "../redux/Slice";
import WebAPI from "../service/WebAPI";
import WebService from "../service/WebService";

function Home()
{
    const[productDetails,setProductsDetials] = useState([]);
    const dispatch = useDispatch();
   useEffect(()=>{
      loadProduct();  //Function Calling
   },[]);

   var loadProduct = async ()=>{
     var resp = await WebService.getAPICall(WebAPI.productAPI); 
     console.log("Response is :"+resp);
     console.log("String Response is :"+JSON.stringify(resp));   
     
     setProductsDetials(resp.data.products);
}

     return<div className="container">
          <h1 style={{color:'blue',textAlign:'center'}}>Product Details..</h1>
          <div className="row">
             {productDetails.map((pobj,index)=>{
                  return<div className="col-md-4 well text-center">
                   <img src={pobj.thumbnail} height={80} width={80} style={{textAlign:'center'}}/>
                   <br/><br/>
                   <b>Name : </b>{pobj.title}<br/>
                   <b>Category : </b>{pobj.category}<br/>
                   <b>Brand : </b>{pobj.brand}<br/>
                   <b>Price : </b>{pobj.price}<br/>
                   <b>Discount : </b>{pobj.discountPercentage} %<br/>
                   <b>Rating : </b>{pobj.rating}<br/><br/>
                   <Link className="text-primary" to="/moreDetails">View More Details....</Link><br/><br/>
                   <button className="btn btn-primary" onClick={()=>dispatch(addProductItem(pobj))}>Add to Cart</button>
                  </div>
             })}  
          </div>
     </div>
}
export default Home;