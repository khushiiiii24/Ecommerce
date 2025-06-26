import { useContext } from "react";
import { EcomContext } from "./UseContext";
import { Link } from "react-router-dom";
function Header() {
  const {cart}=useContext(EcomContext)
  return (
    <header>
      <Link to="/"> <h2>Ecommerce</h2></Link>
     
      <ul>
        <li>
          About Us
        </li>
        <li>
          <Link to="/cart">Cart {cart.length}</Link>
        </li>
        <li>
          Wishlist
        </li>
      </ul>
    </header>
  );
}

export default Header;
