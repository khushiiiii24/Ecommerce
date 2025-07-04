import { useContext } from "react";
import { EcomContext } from "./UseContext";
import { Link } from "react-router-dom";
// import "./Footer.css";

function Footer() {
  const { cart } = useContext(EcomContext);
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ecommerce Store. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/about">About Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
