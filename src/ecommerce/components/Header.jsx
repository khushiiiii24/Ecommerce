import { useContext, useEffect, useState } from "react";
import { EcomContext } from "./UseContext";
import { Link, useLocation } from "react-router-dom";


function Header() {
  const { cart } = useContext(EcomContext);


  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">
        <h2 className="m-0 ecomtitle">Ecommerce</h2>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav gap-3">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
        
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart ({cart.length})
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/wishlist" className="nav-link">
              Wishlist
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Login" className="nav-link">
             Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
