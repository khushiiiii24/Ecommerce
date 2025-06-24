import { useContext } from "react";
import { EcomContext } from "./UseContext";

function Header() {
  const {cart}=useContext(EcomContext)
  return (
    <header>
      <h2>Ecommerce</h2>
      <ul>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Cart {cart.length}</a>
        </li>
        <li>
          <a href="">Wishlist</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
