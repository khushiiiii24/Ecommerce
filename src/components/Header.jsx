import React, { useContext } from "react";
import "../components/Header.css";
import Router from "../Router";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from "../pages/First";
import { MdAccountCircle } from "react-icons/md";
function Header() {
  const { cart } = useContext(cartContext);

  return (
    <header>
      <h1>Ecommerce</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <FaShoppingCart /> {cart.length}
        </li>
        <li>
          <Link to="/login"><MdAccountCircle />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
