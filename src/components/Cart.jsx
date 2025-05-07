import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeItem } from "../redux/Slice";

function Cart()
{
    const product_data = useSelector(state=>state.myCartData.value);
    const dispatch = useDispatch();
     return<div className="container">
         <h1 style={{textAlign:"center",color:'blue'}}>Cart Item</h1>
          <div className="table-responsive">
               <table className="table table-bordered table-striped table-hover">
                    <thead>
                         <tr>
                            <th>S.no</th>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Remove Product</th>
                         </tr>
                    </thead>
                    <tbody>
                         {product_data.map((pobj,index)=>{
                             return<tr>
                                  <td>{index+1}</td>
                                  <td>{pobj.product.id}</td>
                                  <td>
                                   <img src={pobj.product.thumbnail} height={60} width={60} className="img-thumbnail"/>
                                  </td>
                                  <td>{pobj.product.title}</td>
                                  <td>{pobj.product.brand}</td>
                                  <td>{pobj.product.price}</td>
                                  <td>{pobj.product.discountPercentage} %</td>
                                  <td>
                                      <button className="btn btn-success"
                                      onClick={()=>dispatch(decrementQty(pobj.product.id))}>-</button> 
                                      &nbsp;&nbsp;
                                       {pobj.qty}
                                     &nbsp;&nbsp;  
                                     <button className="btn btn-danger" 
                                     onClick={()=>dispatch(incrementQty(pobj.product.id))}>+</button>
                                   </td>
                                  <td>{pobj.product.price * pobj.qty}</td>
                                  <td>
                                       <button className="btn btn-success"
                                       onClick={()=>dispatch(removeItem(pobj.product.id))}>Remove Item</button>
                                  </td>
                             </tr>
                         })}
                    </tbody>
               </table>
          </div>
     </div>
}
export default Cart;