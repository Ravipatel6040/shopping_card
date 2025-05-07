import { useSelector } from "react-redux";
import { Link } from "react-router";

function Menu()
{

   const productData = useSelector(state=>state.myCartData.value);

     return<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="#">Shopping Cart App</Link>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/cart">Cart : {productData.length}</Link></li>
    </ul>
  </div>
</nav>  
}
export default Menu;